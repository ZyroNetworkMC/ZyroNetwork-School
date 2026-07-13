---
title: PHP Exceptions
sidebar_position: 19
---

# PHP Exceptions

Exceptions are used for error handling.

Instead of crashing applications, we can safely catch errors.

---

# try

```php
try {

}
```

---

# catch

```php
catch (
    Exception $e
) {

}
```

---

# Example

```php
try {

    throw new Exception(
        "Database Failed"
    );

}
catch (
    Exception $e
) {

    echo
    $e->getMessage();

}
```

---

# finally

```php
finally {

}
```

Always executes.

---

# Custom Exceptions

```php
class DatabaseException
extends Exception {

}
```

---

# Throwing

```php
throw new DatabaseException(
    "Failed"
);
```

---

# PocketMine Example

```php
try {

    $this->saveData();

}
catch (
    Throwable $e
) {

    $this->getLogger()
        ->error(
            $e->getMessage()
        );

}
```

---

# Throwable Hierarchy

```text
Throwable
├── Exception
└── Error
```

---

# Best Practices

✅ Catch specific exceptions.

✅ Log errors.

✅ Never hide exceptions silently.

---

# Next Chapter

➡ Namespaces
