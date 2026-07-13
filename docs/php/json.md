---
title: PHP JSON
sidebar_position: 18
---

# PHP JSON

JSON stands for:

```text
JavaScript Object Notation
```

JSON is used everywhere.

---

# Why JSON?

JSON is used in:

✅ APIs

✅ Databases

✅ Configs

✅ Discord Bots

✅ Minecraft APIs

✅ PocketMine Plugins

---

# JSON Example

```json
{
    "name": "Aayan",
    "rank": "Owner"
}
```

---

# Encoding

```php
$data = [

    "name" => "Aayan",
    "rank" => "Owner"

];

$json =
json_encode(
    $data
);
```

---

# Output

```json
{"name":"Aayan","rank":"Owner"}
```

---

# Pretty Print

```php
json_encode(
    $data,
    JSON_PRETTY_PRINT
);
```

---

# Decoding

```php
$data =
json_decode(
    $json,
    true
);
```

---

# API Example

```php
header(
    "Content-Type:
    application/json"
);

echo json_encode(
    [
        "success" => true
    ]
);
```

---

# Error Handling

```php
json_last_error();
```

---

# Real Example

```php
$players = [

    "Steve",
    "Alex"

];

file_put_contents(

    "players.json",

    json_encode(
        $players,
        JSON_PRETTY_PRINT
    )

);
```

---

# Next Chapter

➡ Exceptions
