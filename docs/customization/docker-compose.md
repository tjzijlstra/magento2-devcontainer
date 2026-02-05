# Docker Compose File Structure

The devcontainer uses multiple Docker Compose files loaded in order, with later files overriding earlier ones:

1. **docker-compose.yml** - Sets the Docker Compose working directory (do not modify)
2. **compose/{version}/docker-compose.yml** - Version-specific service definitions from devcontainer submodule
3. **docker-compose.shared.yml** - Shared config for the project (committed to project repo)
4. **docker-compose.local.yml** - Local developer overrides (gitignored, not committed)

## When to Use Each File

| File                        | Purpose                          | Committed |
| --------------------------- | -------------------------------- | --------- |
| `docker-compose.yml`        | Sets Compose working directory   | Yes       |
| `docker-compose.shared.yml` | Shared project-specific config   | Yes       |
| `docker-compose.local.yml`  | Personal developer overrides     | No        |

### docker-compose.yml

Do not modify this file. It exists only to set the Docker Compose working directory to `.devcontainer/`. This ensures all relative paths in other compose files resolve correctly.

### docker-compose.shared.yml

- Volume mounts for the workspace
- Environment variables shared across the team
- Service configuration specific to the project

### docker-compose.local.yml

- Local volume mounts (e.g., SSH keys, custom configs)
- Resource limits for your machine
- Additional services for local debugging
- Environment variable overrides
