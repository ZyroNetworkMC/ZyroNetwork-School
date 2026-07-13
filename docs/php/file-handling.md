---
title: PHP File Handling
sidebar_position: 17
---

# PHP File Handling

Files are extremely important.

Almost everything uses files:

✅ Configurations

✅ Logs

✅ Databases

✅ Cache

✅ JSON

✅ Plugin Data

---

# Reading Files

## file_get_contents()

```php
$data =
file_get_contents(
    "config.json"
);
```

---

# Writing Files

## file_put_contents()

```php
file_put_contents(
    "test.txt",
    "Hello World"
);
```

---

# Appending

```php
file_put_contents(
    "logs.txt",
    "Player Joined\n",
    FILE_APPEND
);
```

---

# fopen()

```php
$file =
fopen(
    "test.txt",
    "r"
);
```

---

# Modes

| Mode | Description |
|------|-------------|
| r | Read |
| w | Write |
| a | Append |
| x | Create |
| r+ | Read + Write |

---

# Reading Lines

```php
while (
    !feof($file)
) {

    echo fgets($file);

}
```

---

# Closing Files

```php
fclose($file);
```

---

# Check Existence

```php
file_exists();
```

---

# Delete File

```php
unlink();
```

---

# Create Directory

```php
mkdir(
    "data"
);
```

---

# Delete Directory

```php
rmdir();
```

---

# Scan Directory

```php
scandir();
```

---

# PocketMine Example

```php
$this->saveDefaultConfig();
```

---

# Logging System

```php
file_put_contents(
    "logs.txt",
    date("c")
    . " Player Joined\n",
    FILE_APPEND
);
```

---

# JSON Config Example

```php
$data =
json_decode(
    file_get_contents(
        "config.json"
    ),
    true
);
```

---

# Security

Never allow:

```php
../../
```

Directory Traversal Attacks.

---

# Next Chapter

➡ JSON
