#!/usr/bin/env sh
set -e

: "${PHP_SENDMAIL_PATH:=/usr/local/bin/mailpit sendmail -t --smtp-addr mailpit:1025}"
: "${PHP_MAIL_ADD_X_HEADER:=On}"
: "${PHP_MAIL_MIXED_LF_AND_CRLF:=Off}"

cat > /usr/local/etc/php/conf.d/zz-mailpit.ini <<EOF
; Mailpit sendmail configuration
; https://php.net/sendmail-path
sendmail_path="${PHP_SENDMAIL_PATH}"

; Add X-PHP-Originating-Script header
mail.add_x_header = ${PHP_MAIL_ADD_X_HEADER}

; Use mixed LF and CRLF line separators
mail.mixed_lf_and_crlf = ${PHP_MAIL_MIXED_LF_AND_CRLF}
EOF
