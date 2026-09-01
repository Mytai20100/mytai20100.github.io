---
sidebar_position: 9
---

# Máy phát điện Năng lượng Mặt trời

```yaml title="solar-generators.yml"
EXAMPLE_SOLAR_GENERATOR:
  category: slime_customizer
  generator-name: "&bMáy phát điện Năng lượng Mặt trời Mẫu"
  generator-lore:
  - "&7Đây là máy phát điện năng lượng mặt trời mẫu!"
  block-type: DAYLIGHT_DETECTOR
  stats:
    energy-production:
      day: 256
      night: 128
  crafting-recipe-type: ENHANCED_CRAFTING_TABLE
  crafting-recipe:
    1:
      type: VANILLA
      id: BEDROCK
      amount: 1
    2:
      type: NONE
      id: N/A
      amount: 1
    3:
      type: VANILLA
      id: BEDROCK
      amount: 1
    4:
      type: VANILLA
      id: IRON_BLOCK
      amount: 1
    5:
      type: SLIMEFUN
      id: COAL_GENERATOR
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
| `EXAMPLE_SOLAR_GENERATOR` | ID của vật phẩm.<br />ID này không được trùng với ID của bất kỳ vật phẩm nào khác! | **Chỉ hỗ trợ chữ hoa, số, dấu gạch dưới!** |
| category | ID của phân loại chứa vật phẩm. | ID [phân loại](./categories) của addon Slimefun Tùy chỉnh, hoặc [định danh của phân loại khác](./categories#use-existing-categories). |
| generator-name | Tên của vật phẩm.<br />Hỗ trợ [mã màu](../common/color-codes). | |
| generator-lore | Mô tả của vật phẩm.<br />Hỗ trợ [mã màu](../common/color-codes).<br />Nếu không muốn thêm mô tả có thể xóa toàn bộ trường này. | |
| block-type | Loại khối của máy phát điện. | [ID khối nguyên bản (Material)](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) hoặc [đầu lâu](../common/skull-items) |
| stats.energy-production.day | Lượng điện được sản xuất mỗi tick Slimefun vào ban ngày. | 1 - 2147483647 (số nguyên) |
| stats.energy-production.night | Lượng điện được sản xuất mỗi tick Slimefun vào ban đêm. | 1 - 2147483647 (số nguyên) |
| crafting-recipe-type | Xem trang [Công thức Chế tạo](../common/crafting-recipe). | |
| crafting-recipe | Xem trang [Công thức Chế tạo](../common/crafting-recipe). | |

:::info

Máy phát điện năng lượng mặt trời của addon tùy chỉnh kế thừa lớp máy phát điện năng lượng mặt trời của bản gốc, do đó chức năng tương tự.

Máy phát điện năng lượng mặt trời chỉ có thể sử dụng trong thế giới chính, sẽ bị ảnh hưởng bởi thời gian thế giới và ánh sáng của máy phát điện.

:::
