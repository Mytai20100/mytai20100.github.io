---
sidebar_position: 10
---

# Máy Tạo Vật liệu

```yaml title="material-generators.yml"
EXAMPLE_MATERIAL_GENERATOR:
  category: slime_customizer
  item-name: "&bMáy Tạo Vật liệu Mẫu"
  item-lore:
  - "&7Đây là máy tạo vật liệu mẫu!"
  block-type: STONE
  item-amount: 1
  stats:
    energy-consumption: 16
    energy-buffer: 64
  crafting-recipe-type: ENHANCED_CRAFTING_TABLE
  crafting-recipe:
    1:
      type: VANILLA
      id: IRON_BLOCK
      amount: 1
    2:
      type: NONE
      id: N/A
      amount: 1
    3:
      type: VANILLA
      id: IRON_BLOCK
      amount: 1
    4:
      type: VANILLA
      id: IRON_BLOCK
      amount: 1
    5:
      type: NONE
      id: N/A
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
      type: NONE
      id: N/A
      amount: 1
    9:
      type: VANILLA
      id: IRON_BLOCK
      amount: 1
  output:
    tick-rate: 1
    type: VANILLA
    id: IRON_BLOCK
    amount: 1
```

| Nội dung | Mô tả | Đầu vào hợp lệ |
| --- | ----------- | ----------------- |
| `EXAMPLE_MATERIAL_GENERATOR` | ID của vật phẩm.<br />ID này không được trùng với ID của bất kỳ vật phẩm nào khác! | **Chỉ hỗ trợ chữ hoa, số, dấu gạch dưới!** |
| category | ID của phân loại chứa vật phẩm. | ID [phân loại](./categories) của addon Slimefun Tùy chỉnh, hoặc [định danh của phân loại khác](./categories#use-existing-categories). |
| item-name | Tên của vật phẩm.<br />Hỗ trợ [mã màu](../common/color-codes). | |
| item-lore | Mô tả của vật phẩm.<br />Hỗ trợ [mã màu](../common/color-codes).<br />Nếu không muốn thêm mô tả có thể xóa toàn bộ trường này. | |
| block-type | Loại khối của máy tạo. | [ID khối nguyên bản (Material)](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) hoặc [đầu lâu](../common/skull-items) |
| item-amount | Số lượng vật phẩm nhận được mỗi khi chế tạo.<br />**Lưu ý:** Đây không phải là số lượng sản phẩm. | Số nguyên, tối thiểu là 1, tối đa là số lượng tối đa của một nhóm vật phẩm. |
| stats.energy-consumption | Lượng điện mà máy này tiêu thụ mỗi tick Slimefun. | 1 - 2147483647 (số nguyên) |
| stats.energy-buffer | Lượng điện mà máy này có thể lưu trữ. | 1 - 2147483647 (số nguyên), và phải lớn hơn hoặc bằng lượng điện tiêu thụ. |
| crafting-recipe-type | Xem trang [Công thức Chế tạo](../common/crafting-recipe). | |
| crafting-recipe | Xem trang [Công thức Chế tạo](../common/crafting-recipe). | |
| output.tick-rate | Cứ bao nhiêu tick Slimefun thì sản xuất một lần. | Số nguyên dương |
| output.type | Loại vật phẩm sản xuất. | **VANILLA** Vật phẩm nguyên bản <br /> **SLIMEFUN** Vật phẩm Slimefun <br />**SAVEDITEM** [Vật phẩm đã lưu](../common/saved-items) |
| output.id | Định danh của vật phẩm sản xuất. | [ID vật phẩm nguyên bản (Material)](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) hoặc [đầu lâu](../common/skull-items) hoặc ID của [vật phẩm đã lưu](../common/saved-items). |
| output.amount | Số lượng vật phẩm sản xuất mỗi lần. | Số nguyên, tối thiểu là 1, tối đa là số lượng tối đa của một nhóm vật phẩm. |

!> Lưu ý: Đầu ra của máy tạo vật liệu có thể đặt số lượng xếp chồng cho vật phẩm không thể xếp chồng, tối đa là 64, nghĩa là máy tạo vật liệu có thể sản xuất một lần một nhóm xô nước xếp chồng lên nhau
