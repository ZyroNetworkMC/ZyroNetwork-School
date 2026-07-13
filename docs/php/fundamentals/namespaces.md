---
title: PHP Namespaces
sidebar_position: 20
sidebar_label: "20. PHP Namespaces"
---

# PHP Namespaces

Namespaces prevent class conflicts.

PocketMine heavily relies on namespaces.

---

Without namespaces:

```php
class Player {}
class Player {}
```

Fatal error.

---

# Namespace Example

```php
namespace zyro\economy;
```

---

# Class Example

```php
namespace zyro\player;

class User {

}
```

---

# Using Classes

```php
use zyro\player\User;
```

---

# Aliases

```php
use pocketmine\player\Player
as PMPlayer;
```

---

# Fully Qualified Name

```php
\pocketmine\player\Player
```

---

# Folder Structure

```text
src/
└── zyro/
    └── Main.php
```

---

# PocketMine Example

```php
namespace zyro;

use pocketmine\plugin\PluginBase;
```

---

# PSR-4

Namespace:

```php
zyro\utils
```

Folder:

```text
src/zyro/utils
```

---

# Best Practices

✅ One namespace per file.

✅ Match folders.

✅ Use imports.

---

# Next Chapter

➡ Composer
