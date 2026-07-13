---
title: PHP Syntax
sidebar_position: 3
---

# PHP Syntax

Every PHP file starts using:

```php
<?php
```

---

# Example

```php
<?php

echo "Hello Zyro!";
```

---

# Statements

Every statement ends with:

```php
;
```

Example:

```php
$name = "Aayan";
echo $name;
```

---

# Case Sensitivity

Variables are case-sensitive.

```php
$name = "Aayan";
$Name = "Steve";
```

These are different.

---

# Whitespace

PHP ignores extra spaces.

```php
$name      =      "Aayan";
```

---

# Multiple Statements

```php
echo "Hello";
echo "World";
```

---

# Embedding HTML

```php
<h1>

<?php
echo "Hello";
?>

</h1>
```

---

# Best Practice

Always start files with:

```php
<?php

declare(strict_types=1);
```

---

# Example

```php
<?php

declare(strict_types=1);

echo "Welcome";
```

---

# Exercises

Create:

```php
echo "Hello World";
```
