---
title: Process Management in Scripts
description: Learn how to manage background processes, trap signals, and handle script termination gracefully.
---

# Process Management in Scripts

Scripts often need to run long tasks, manage background jobs, or gracefully handle sudden termination (like when a user presses Ctrl+C).

## Background Processes

To run a command in the background, append an ampersand `&` to the end of the command.

```bash
#!/bin/bash

echo "Starting a long process..."
sleep 10 &
```

### Retrieving Process IDs (PIDs)

When you run a background job, its PID is stored in the special variable `$!`.

```bash
sleep 20 &
BG_PID=$!
echo "Background job started with PID: $BG_PID"
```

## Waiting for Processes

If your script relies on a background task completing before it can continue, use the `wait` command.

```bash
echo "Starting job 1..."
sleep 3 &
PID1=$!

echo "Starting job 2..."
sleep 5 &
PID2=$!

echo "Waiting for jobs to finish..."
wait $PID1
wait $PID2

echo "All background jobs completed."
```

## Trapping Signals

Signals are messages sent to processes. For example, `SIGINT` (Signal 2) is sent when you press Ctrl+C. You can "trap" these signals to run cleanup code instead of immediately terminating.

```bash
#!/bin/bash

# Define a cleanup function
cleanup() {
    echo -e "\nCaught Ctrl+C! Cleaning up temporary files..."
    rm -f /tmp/myscript_temp.txt
    exit 1
}

# Trap SIGINT (Ctrl+C)
trap cleanup SIGINT

echo "Creating temp file..."
touch /tmp/myscript_temp.txt

echo "Running... (Press Ctrl+C to stop)"
while true; do
    sleep 1
done
```

## Terminating Processes

You can kill processes from within your script using the `kill` command.

```bash
sleep 60 &
PID=$!
echo "Process $PID running..."
sleep 2
echo "Killing process $PID"
kill $PID
```

## Best Practices

- Always use `wait` if downstream commands depend on background tasks.
- Always use `trap` to clean up lock files, temporary directories, or sensitive data if your script is interrupted.
- Avoid using `kill -9` inside scripts unless absolutely necessary, as it prevents the target process from performing its own cleanup.
