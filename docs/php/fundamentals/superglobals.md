---
title: PHP Superglobals
sidebar_position: 16
sidebar_label: "16. PHP Superglobals"
---

# PHP Superglobals

Superglobals are built-in PHP variables that can be accessed from anywhere in your program.

Unlike normal variables, they do not require:

```php
global
```

They are automatically available.

---

# List of Superglobals

| Variable | Description |
|----------|-------------|
| $_GET | URL Parameters |
| $_POST | Form Data |
| $_REQUEST | GET + POST + COOKIE |
| $_SERVER | Server Information |
| $_FILES | Uploaded Files |
| $_COOKIE | Browser Cookies |
| $_SESSION | User Sessions |
| $_ENV | Environment Variables |
| $GLOBALS | Global Variables |

---

# $_GET

Retrieves data from URL.

Example:

```url
https://example.com/index.php?id=10
```

PHP:

```php
$id = $_GET["id"];
```

Output:

```text
10
```

---

# Checking Values Safely

Never do:

```php
$id = $_GET["id"];
```

Because it may not exist.

Better:

```php
$id =
$_GET["id"]
?? null;
```

---

# Multiple Parameters

```url
?name=Aayan&rank=Owner
```

PHP:

```php
$name =
$_GET["name"];

$rank =
$_GET["rank"];
```

---

# $_POST

Used in forms.

```html
<form method="POST">
```

Example:

```php
$username =
$_POST["username"];
```

---

# Why POST?

POST data:

✅ Hidden from URL

✅ Supports large data

✅ Used for authentication

---

# Example Login System

```php
if (
    isset($_POST["login"])
) {

    $username =
        $_POST["username"];

    $password =
        $_POST["password"];

}
```

---

# $_REQUEST

Contains:

```text
GET
POST
COOKIE
```

Example:

```php
$name =
$_REQUEST["name"];
```

Usually avoid using this because it becomes unclear where data comes from.

---

# $_SERVER

One of the most useful superglobals.

Contains:

- IP Address
- Request Method
- Host
- PHP Version
- User Agent
- Paths

---

## Request Method

```php
$_SERVER["REQUEST_METHOD"]
```

Output:

```text
GET
POST
```

---

## User Agent

```php
$_SERVER["HTTP_USER_AGENT"]
```

---

## IP Address

```php
$_SERVER["REMOTE_ADDR"]
```

---

## Current File

```php
$_SERVER["PHP_SELF"]
```

---

## Server Name

```php
$_SERVER["SERVER_NAME"]
```

---

## Request URI

```php
$_SERVER["REQUEST_URI"]
```

---

# Example API Router

```php
$method =
$_SERVER["REQUEST_METHOD"];

switch ($method) {

    case "GET":
        break;

    case "POST":
        break;
}
```

---

# $_FILES

Used for file uploads.

HTML:

```html
<input type="file">
```

PHP:

```php
$_FILES["image"];
```

Structure:

```php
[
    "name",
    "tmp_name",
    "size",
    "error",
    "type"
]
```

---

# Upload Example

```php
move_uploaded_file(
    $_FILES["image"]["tmp_name"],
    "uploads/image.png"
);
```

---

# Security

Always validate:

```php
mime_content_type()
```

Never trust file extensions.

---

# $_COOKIE

Stores browser information.

Create:

```php
setcookie(
    "username",
    "Aayan"
);
```

Read:

```php
$_COOKIE["username"];
```

---

# $_SESSION

Sessions store data on server.

Start session:

```php
session_start();
```

Store:

```php
$_SESSION["user"] =
"Aayan";
```

Read:

```php
echo
$_SESSION["user"];
```

Destroy:

```php
session_destroy();
```

---

# Login Example

```php
$_SESSION["logged"] =
true;
```

---

# $_ENV

Environment Variables.

Example:

```env
DB_HOST=127.0.0.1
DB_PASSWORD=secret
```

PHP:

```php
$_ENV["DB_HOST"];
```

---

# $GLOBALS

Contains every global variable.

Example:

```php
$name = "Aayan";

echo
$GLOBALS["name"];
```

---

# Security Best Practices

Never trust:

```php
$_GET
$_POST
$_FILES
```

Always validate and sanitize.

---

# Useful Functions

```php
htmlspecialchars()
filter_var()
trim()
```

---

# Exercises

1. Create login form.
2. Read GET parameters.
3. Upload image.
4. Store user session.

---

# Real World Usage

Superglobals are used in:

- Laravel
- APIs
- CMS
- Authentication Systems
- Dashboards
- PocketMine Web Panels
- ZyroNetwork Panels

---

# Next Chapter

➡ File Handling
