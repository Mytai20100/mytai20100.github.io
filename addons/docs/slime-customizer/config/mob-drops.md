---
sidebar_position: 3
---

# Vật phẩm Rơi từ Quái

```yaml title="mob-drops.yml"
EXAMPLE_DROP:
  category: slime_customizer
  item-type: CUSTOM
  item-name: "&bExample Drop"
  item-lore:
    - "&7This is an example mob-drop!"
    - "&cExample drops are not obtainable"
  item-id: STICK
  item-amount: 1
  mob: GHAST
  chance: 0
  recipe-display-item: GHAST_SPAWN_EGG
```

| Nội dung | Mô tả | Đầu vào hợp lệ |
| --- | ----------- | ----------------- |
| `EXAMPLE_DROP` | ID của vật phẩm.<br />ID này không được trùng với ID của bất kỳ vật phẩm nào khác! | **Chỉ hỗ trợ chữ hoa, số, dấu gạch dưới!** |
| category | ID của phân loại chứa vật phẩm. | ID [phân loại](./categories) của addon Slimefun Tùy chỉnh, hoặc [định danh của phân loại khác](./categories#use-existing-categories). |
| item-type | Cách đăng ký vật phẩm. | **CUSTOM** Khi điền mục này, bạn có thể tùy chỉnh tên, mô tả, loại vật phẩm.<br />**SAVEDITEM** Tải vật phẩm từ [vật phẩm đã lưu](../common/saved-items). |
| item-name | Tên của vật phẩm.<br />Hỗ trợ [mã màu](../common/color-codes). | |
| item-lore | Mô tả của vật phẩm.<br />Hỗ trợ [mã màu](../common/color-codes).<br />Nếu không muốn thêm mô tả có thể xóa toàn bộ trường này. | |
| item-id | Định danh của vật phẩm. | [ID vật phẩm nguyên bản (Material)](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) hoặc [đầu lâu](../common/skull-items) hoặc ID của vật phẩm đã lưu. |
| item-amount | Số lượng vật phẩm rơi mỗi lần. | 1 - 64 (số nguyên) |
| mob | Loại thực thể cần thiết để rơi vật phẩm này. | [Loại thực thể (EntityType)](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html) |
| chance | Xác suất rơi của vật phẩm (phần trăm). | 0 - 100 (số nguyên) |
| recipe-display-item | Vật phẩm dùng để hiển thị cách nhận vật phẩm rơi (tức là vật phẩm ở giữa công thức). | [ID vật phẩm nguyên bản (Material)](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) |

:::tip

Tệp cấu hình này áp dụng cho việc tùy chỉnh vật phẩm rơi mới từ quái. Nếu bạn muốn vật phẩm đã có trở thành vật phẩm rơi từ quái, vui lòng sử dụng plugin [SfMobDrops](https://github.com/SlimefunGuguProject/SfMobDrops).

:::
