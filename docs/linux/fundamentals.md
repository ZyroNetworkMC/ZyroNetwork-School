---
title: Linux Fundamentals
sidebar_label: 2. Core Fundamentals
sidebar_position: 2
---

# Core Linux Fundamentals

To master a Linux server, you must understand how files are structured, how to navigate the filesystem, and how to manage permissions.

## The Linux File Hierarchy

Unlike Windows, which uses drive letters (`C:\`, `D:\`), Linux uses a single unified directory tree starting at the "root" directory (`/`).

| Directory | Purpose |
|---|---|
| `/` | The Root directory. Everything starts here. |
| `/home` | Contains user directories (e.g., `/home/steve`). |
| `/root` | The home directory for the `root` (admin) user. |
| `/etc` | System-wide configuration files (e.g., `/etc/ssh/sshd_config`). |
| `/var` | Variable data, such as logs (`/var/log`) and databases. |
| `/bin` & `/sbin` | Essential system binaries (commands like `ls`, `cd`). |
| `/tmp` | Temporary files. Usually wiped on reboot. |

## Navigating the Filesystem

Here are the essential commands for moving around:

```bash
# Print Working Directory (Where am I?)
pwd

# List contents of the current directory
ls

# List ALL files (including hidden ones that start with a dot, like .bashrc)
ls -a

# List files with detailed information (permissions, size, owner)
ls -l

# Change Directory to /home/steve
cd /home/steve

# Go up one directory level
cd ..

# Go straight to your user's home directory
cd ~
```

## Managing Files and Directories

```bash
# Create a new empty file
touch server.properties

# Create a new directory
mkdir pocketmine_server

# Create a directory and all parent directories if they don't exist
mkdir -p /home/steve/servers/lobby/plugins

# Copy a file (cp source destination)
cp server.properties server.properties.backup

# Copy a directory recursively
cp -r old_world new_world

# Move or Rename a file (mv source destination)
mv old_name.txt new_name.txt
mv file.txt /home/steve/

# Remove (Delete) a file FOREVER. There is no recycling bin!
rm file.txt

# Remove a directory and all its contents FOREVER
rm -rf old_world/
```
:::danger
`rm -rf /` will delete your entire operating system. Never type it.
:::

## Viewing and Editing Files

While you can use tools like WinSCP or SFTP to edit files visually, knowing how to do it in the terminal is essential.

### Viewing Content
```bash
# Print the entire file to the console
cat server.properties

# View a file page by page (press 'q' to quit)
less server.log

# Print only the first 10 lines
head -n 10 server.log

# Print only the last 10 lines (great for checking recent errors)
tail -n 10 server.log

# "Follow" the file: print new lines as they are added in real-time!
tail -f server.log
```

### Editing with Nano
`nano` is the easiest terminal text editor for beginners.

```bash
nano server.properties
```
- Use the **arrow keys** to move around.
- Type to edit.
- Press **Ctrl+O**, then **Enter** to Save (Write Out).
- Press **Ctrl+X** to Exit.

## Linux Permissions and Ownership

Linux is a multi-user system. Every file and directory has an **Owner**, a **Group**, and a set of **Permissions**.

Run `ls -l` and look at the left column:
`-rwxr-xr-- 1 steve admin 1024 Jan 1 12:00 start.sh`

Let's break down `-rwxr-xr--`:
1. **Type**: The first character. `-` means file, `d` means directory.
2. **Owner Permissions (`rwx`)**: The user `steve` can Read, Write, and eXecute it.
3. **Group Permissions (`r-x`)**: Anyone in the `admin` group can Read and eXecute, but not Write.
4. **Other Permissions (`r--`)**: Everyone else can only Read it.

### Modifying Permissions (`chmod`)

You often need to make scripts executable. `chmod` (Change Mode) alters permissions.

```bash
# Make a script executable for the owner
chmod +x start.sh

# Remove write permission for everyone
chmod -w file.txt
```

#### The Numeric (Octal) Method
Permissions can be represented as numbers:
- Read = 4
- Write = 2
- Execute = 1

Add them together! (e.g., Read + Write = 6).
```bash
# 7 (Owner: rwx), 5 (Group: r-x), 5 (Others: r-x)
chmod 755 start.sh

# 6 (Owner: rw-), 4 (Group: r--), 4 (Others: r--)
chmod 644 config.yml
```

### Modifying Ownership (`chown`)

If you upload files as the `root` user, but your server runs as the `steve` user, `steve` might not have permission to read them!

```bash
# Change owner to steve, and group to admin
chown steve:admin server.properties

# Change ownership of a folder and ALL its contents recursively
chown -R steve:admin /home/steve/pocketmine_server/
```

## Finding Files and Text

### Finding Files (`find`)
Search the filesystem for files matching a pattern.
```bash
# Find all files ending in .phar inside /home/steve
find /home/steve -name "*.phar"
```

### Finding Text (`grep`)
`grep` searches inside files for specific text.
```bash
# Search for "Error" in server.log
grep "Error" server.log

# Search for "Error" recursively in all logs
grep -r "Error" /var/log/

# Combine commands with a Pipe (|)
# This lists all files, and then filters the output to only show "world"
ls -la | grep "world"
```

## Archiving and Compressing

You will frequently need to zip up worlds or plugins.

### Tar (Tape Archive)
`tar` is the standard Linux archiving tool. It combines files and optionally compresses them.

```bash
# Create a compressed archive (c=create, z=gzip, v=verbose, f=file)
tar -czvf backup.tar.gz /home/steve/worlds/

# Extract an archive (x=extract)
tar -xzvf backup.tar.gz -C /home/steve/restore_folder/
```

### Zip
Sometimes you just need standard zip files.
```bash
# Install zip tools if missing
sudo apt install zip unzip

# Zip a folder recursively
zip -r plugins.zip /home/steve/plugins/

# Unzip
unzip plugins.zip
```

---

import Quiz from '@site/src/components/Quiz';

<Quiz questions={[
  {
    question: "In the Linux file hierarchy, what does the '/' directory represent?",
    options: ["The home directory", "The root directory", "The temporary directory", "The boot drive"],
    correctAnswer: 1,
    explanation: "The '/' directory is the absolute root of the Linux filesystem. All other directories and drives branch off from here."
  },
  {
    question: "Which command would you use to find out what directory you are currently in?",
    options: ["cd", "dir", "pwd", "whereami"],
    correctAnswer: 2,
    explanation: "pwd stands for Print Working Directory, and it outputs the absolute path of your current location."
  },
  {
    question: "What does the -r or -R flag typically mean in commands like rm, cp, and chown?",
    options: ["Read-only", "Remove", "Recursive", "Restore"],
    correctAnswer: 2,
    explanation: "Recursive means the command will apply to the specified directory AND all files and subdirectories contained within it."
  },
  {
    question: "Which command is used to view the last few lines of a file and actively monitor it for new lines?",
    options: ["head -f", "tail -f", "cat -live", "less -w"],
    correctAnswer: 1,
    explanation: "tail -f (follow) outputs the end of a file and stays open, printing new lines to the console as they are appended to the file."
  },
  {
    question: "In nano, what is the keyboard shortcut to save your file?",
    options: ["Ctrl+S", "Ctrl+X", "Ctrl+O", "Ctrl+W"],
    correctAnswer: 2,
    explanation: "Ctrl+O stands for 'Write Out' in nano, which saves the file to disk."
  },
  {
    question: "If a file has the permissions '-rwxr-xr--', who has the ability to write to or modify the file?",
    options: ["Everyone", "The Group", "Only the Owner", "Nobody"],
    correctAnswer: 2,
    explanation: "The first set of three (rwx) belongs to the Owner. The group has (r-x) and others have (r--), so only the owner has the 'w' (write) permission."
  },
  {
    question: "What numeric value represents 'Read and Write' permissions but NOT 'Execute'?",
    options: ["7", "6", "5", "4"],
    correctAnswer: 1,
    explanation: "Read is 4, Write is 2. 4 + 2 = 6."
  },
  {
    question: "Which command would you use to change the owner of a file named 'config.yml' to a user named 'admin'?",
    options: ["chmod admin config.yml", "chown admin config.yml", "owner admin config.yml", "sudo admin config.yml"],
    correctAnswer: 1,
    explanation: "chown (Change Owner) is used to modify the user and group ownership of files and directories."
  },
  {
    question: "What symbol is used to 'pipe' the output of one command into the input of another command?",
    options: [">", "<", "|", "&"],
    correctAnswer: 2,
    explanation: "The pipe symbol (|) takes the standard output of the command on the left and feeds it as standard input to the command on the right."
  },
  {
    question: "Which command creates a compressed tarball archive of a directory?",
    options: ["tar -xzvf", "tar -czvf", "zip -compress", "tar -extract"],
    correctAnswer: 1,
    explanation: "-c creates an archive, -z compresses it with gzip, -v makes it verbose, and -f specifies the filename."
  }
]} />
