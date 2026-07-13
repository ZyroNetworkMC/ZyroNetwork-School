---
title: PHP Comments
sidebar_position: 4
sidebar_label: "4. PHP Comments"
---

# PHP Comments

Comments are ignored by PHP.

Used for:

- Documentation
- Notes
- Explanations
- TODOs

---

# Single Line

```php
// This is a comment
```

---

# Alternative

```php
# Comment
```

---

# Multi Line

```php
/*
This is
a multi line
comment
*/
```

---

# Documentation Comments

```php
/**
 * Returns player money.
 */
```

---

# PocketMine Example

```php
/**
 * Main plugin class.
 */
class Main {

}
```

---

# TODO Comments

```php
// TODO: Add database support.
```

---

# Best Practices

✅ Explain WHY.

❌ Explain obvious things.

Bad:

```php
// increment i
$i++;
```

Good:

```php
// Increase retry count after failed login.
$retry++;
```
