# Xdebug

[Xdebug](https://xdebug.org/) is pre-installed and configured in the PHP container. No further setup is required.

## Capabilities

- [Debugging]
- [Profiling]

## Debugging in the devcontainer

The [PHP Debug](https://marketplace.visualstudio.com/items?itemName=xdebug.php-debug) extension is installed automatically when the devcontainer starts.

To start debugging:

1. Open the **Run and Debug** panel (`Ctrl+Shift+D`)
2. Click **create a launch.json file** and select **PHP**
3. Set a breakpoint in your code
4. Click **Start Debugging** (`F5`) and select **Listen for Xdebug**

### Example `launch.json`

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Listen for Xdebug",
      "type": "php",
      "request": "launch",
      "port": 9003,
      "pathMappings": {
        "/workspace": "${workspaceFolder}"
      }
    }
  ]
}
```

![Xdebug starter configuration](/xdebug/xdebug-starter.webp)

### Browser Requests

Use the [Xdebug Browser Extension](https://github.com/JetBrains/xdebug-extension) to set the trigger automatically or append `?XDEBUG_SESSION=1` to any URL [to trigger a debugging session](https://xdebug.org/docs/step_debug).

### CLI Commands

Set the `XDEBUG_SESSION` environment variable before running a command to debug that command:

```bash
XDEBUG_SESSION=1 bin/magento
```

### Verify that it's working

You easily verify that your devcontainer's xdebug configuration is working by opening the `bin/magento` file in your project, putting a breakpoint on the handler and then executing the following. 

```bash
XDEBUG_SESSION=1 bin/magento
```

![Xdebug running](/xdebug/xdebug-running.webp)

You should be stopped on the breakpoint you set and be able to step through the code.

## Profiling

The devcontainer configures Xdebug with `profile` mode enabled by default. Profile output is written to `/tmp/cachegrind` inside the container by default. You can analyze the generated `cachegrind.out.*` files with the built-in [`speedscope`](https://github.com/jlfwong/speedscope) tool.

```bash
speedscope --serve cachegrind.out.file.gz
```

![Speedscope profile viewer](/speedscope/speedscope.webp)

### Browser Requests

Use the [Xdebug Browser Extension](https://github.com/JetBrains/xdebug-extension) to set the profile trigger automatically or append `?XDEBUG_PROFILE=1` to any URL.

### CLI Commands

Set the `XDEBUG_PROFILE` environment variable before running a command:

```bash
XDEBUG_PROFILE=1 bin/magento
```

<!-- -->

[Debugging]: #debugging-in-the-devcontainer
[Profiling]: #profiling