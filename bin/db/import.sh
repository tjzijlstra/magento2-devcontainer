#!/bin/bash

# Import a fresh database into Magento
# WARNING: This will DROP and recreate the database!
# Supports .sql and .sql.gz files

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
source "$SCRIPT_DIR/lib/detect-devcontainer.sh"

# Check for input file
if [ -z "$1" ]; then
    echo "Usage: $0 <file.sql|file.sql.gz>" >&2
    echo "" >&2
    echo "Examples:" >&2
    echo "  $0 dump.sql" >&2
    echo "  $0 dump.sql.gz" >&2
    exit 1
fi

SQL_FILE="$1"

if [ ! -f "$SQL_FILE" ]; then
    echo "Error: File not found: $SQL_FILE" >&2
    exit 1
fi

load_devcontainer_config || exit 1

# Database configuration (matches docker-compose service settings)
DB_HOST="${DB_HOST:-db}"
DB_NAME="${DB_NAME:-magento}"
DB_USER="${DB_USER:-magento}"
DB_PASSWORD="${DB_PASSWORD:-magento}"

echo "Importing fresh database:" >&2
echo "  Host: $DB_HOST" >&2
echo "  Database: $DB_NAME" >&2
echo "  User: $DB_USER" >&2
echo "  File: $SQL_FILE" >&2
echo "" >&2
echo "WARNING: This will DROP the existing database!" >&2
read -p "Continue? [y/N]: " confirm </dev/tty
if [[ ! "$confirm" =~ ^[Yy]$ ]]; then
    echo "Aborted." >&2
    exit 1
fi
echo "" >&2

# Drop and recreate the database
echo "Dropping and recreating database '$DB_NAME'..." >&2
mysql -h "$DB_HOST" -u "$DB_USER" -p"$DB_PASSWORD" -e "DROP DATABASE IF EXISTS \`$DB_NAME\`; CREATE DATABASE \`$DB_NAME\`;"

# Determine if file is gzipped
if [[ "$SQL_FILE" == *.gz ]]; then
    echo "Detected gzipped file, decompressing on the fly..." >&2
    gunzip -c "$SQL_FILE" | mysql -h "$DB_HOST" -u "$DB_USER" -p"$DB_PASSWORD" "$DB_NAME"
else
    mysql -h "$DB_HOST" -u "$DB_USER" -p"$DB_PASSWORD" "$DB_NAME" < "$SQL_FILE"
fi

echo "" >&2
echo "Import completed successfully." >&2