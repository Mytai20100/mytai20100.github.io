---
sidebar_position: 12
---

# Thiết lập Vật phẩm

Bạn có thể sử dụng ba phương pháp sau để thiết lập vật phẩm.

## Phương pháp 1: Thiết lập ID vật phẩm

Bạn có thể trực tiếp điền [ID vật phẩm gốc](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) hoặc [ID vật phẩm Slimefun](https://slimefun-helper.guizhanss.cn).

```yaml title="groups.yml Ví dụ"
my_cool_group:
  display: NETHER_STAR

my_other_group:
  display: ELECTRIC_MOTOR
```

## Phương pháp 2: Chỉ định ID vật phẩm, tên hiển thị (name), mô tả (lore)

Bạn có thể thiết lập vật phẩm thông qua các trường sau.

| Trường | Mô tả |
| -------- | -------- |
| `type` | **Bắt buộc**. [ID vật phẩm gốc](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) hoặc [ID vật phẩm Slimefun](https://slimefun-helper.guizhanss.cn). |
| `name` | *Tùy chọn*. Tên hiển thị của vật phẩm, hỗ trợ ký tự màu `&`. |
| `lore` | *Tùy chọn*. Mô tả của vật phẩm, hỗ trợ ký tự màu `&`. |

Khi vật phẩm được thiết lập là vật phẩm điều kiện, việc kiểm tra tiến độ chỉ kiểm tra loại và tên vật phẩm, không kiểm tra mô tả vật phẩm.

```yaml title="groups.yml Ví dụ"
basic:
  display:
    type: SLIME_BALL
    name: "&fCơ bản"
    lore:
      - "&7&oPhần cơ bản của Slimefun."

electric:
  display:
    type: REDSTONE
    name: "&eĐiện lực"
    lore:
      - "&7&oTrung tâm của nền văn minh."
```

:::tip Mẹo

Đối với mô tả (lore) của vật phẩm **tiến độ**, bạn có thể sử dụng placeholder `%criteria%` để hiển thị điều kiện.

:::

## Phương pháp 3: Tuần tự hóa

Bạn có thể cầm vật phẩm trên tay trong game và sử dụng lệnh `/sfa dumpitem` để nhận cấu hình tuần tự hóa của vật phẩm trong console.

```yaml title="groups.yml Ví dụ"
hi:
  display:
    ==: org.bukkit.inventory.ItemStack
    v: 2865
    type: IRON_INGOT
    meta:
      ==: ItemMeta
      meta-type: UNSPECIFIC
      display-name: '{"extra":[{"bold":false,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false,"color":"aqua","text":"Zinc
        Ingot"}],"text":""}'
      PublicBukkitValues:
        slimefun:slimefun_item: ZINC_INGOT
```

:::warning

Nếu bạn dự định chia sẻ tệp cấu hình của mình, bạn cần biết rằng vật phẩm tuần tự hóa có phiên bản, phiên bản máy chủ đích không được thấp hơn phiên bản máy chủ khi tuần tự hóa, nếu không sẽ khiến vật phẩm không thể tải được.

:::
