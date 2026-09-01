---
sidebar_position: 6
---

# Tụ điện

```yaml title="capacitors.yml"
EXAMPLE_CAPACITOR:
  category: slime_customizer
  capacitor-name: "&bTụ điện Mẫu"
  capacitor-lore:
  - "&7Đây là tụ điện mẫu!"
  block-type: DEFAULT
  capacity: 114514
  item-amount: 1
  crafting-recipe-type: ENHANCED_CRAFTING_TABLE
  crafting-recipe:
    1:
      type: VANILLA
      id: GOLD_BLOCK
      amount: 1
    2:
      type: NONE
      id: N/A
      amount: 1
    3:
      type: VANILLA
      id: GOLD_BLOCK
      amount: 1
    4:
      type: VANILLA
      id: IRON_BLOCK
      amount: 1
    5:
      type: SLIMEFUN
      id: SMALL_CAPACITOR
      amount: 1
    6:
      type: VANILLA
      id: IRON_BLOCK
      amount: 1
    7:
      type: VANILLA
      id: IRON_BLOCK
      amount: 1
    8:
      type: VANILLA
      id: IRON_BLOCK
      amount: 1
    9:
      type: VANILLA
      id: IRON_BLOCK
      amount: 1
```

| Nội dung | Mô tả | Đầu vào hợp lệ |
| --- | ----------- | ----------------- |
| `EXAMPLE_CAPACITOR` | ID của vật phẩm.<br />ID này không được trùng với ID của bất kỳ vật phẩm nào khác! | **Chỉ hỗ trợ chữ hoa, số, dấu gạch dưới!** |
| category | ID của phân loại chứa vật phẩm. | ID [phân loại](./categories) của addon Slimefun Tùy chỉnh, hoặc [định danh của phân loại khác](./categories#use-existing-categories). |
| capacitor-name | Tên của vật phẩm.<br />Hỗ trợ [mã màu](../common/color-codes). | |
| capacitor-lore | Mô tả của vật phẩm.<br />Hỗ trợ [mã màu](../common/color-codes).<br />Nếu không muốn thêm mô tả có thể xóa toàn bộ trường này. | |
| block-type | Loại khối của tụ điện. | - `DEFAULT` sẽ sử dụng đầu lâu của tụ điện nguyên bản, chất liệu sẽ cập nhật động theo lượng điện lưu trữ.<br />- *Bất kỳ [ID khối nguyên bản](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html)*. |
| capacity | Lượng điện mà tụ điện này có thể lưu trữ.| 1 - 2147483647 (số nguyên) |
| item-amount | Số lượng đầu ra mỗi khi chế tạo vật phẩm này. | Số nguyên, tối thiểu là 1, tối đa là số lượng tối đa của một nhóm vật phẩm. |
| crafting-recipe-type | Xem trang [Công thức Chế tạo](../common/crafting-recipe). | |
| crafting-recipe | Xem trang [Công thức Chế tạo](../common/crafting-recipe). | |
