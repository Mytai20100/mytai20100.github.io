---
sidebar_position: 8
---

# Máy phát điện

```yaml title="generators.yml"
EXAMPLE_GENERATOR:
  category: slime_customizer
  generator-name: "&bMáy phát điện Mẫu"
  generator-lore:
  - "&7Đây là máy phát điện mẫu!"
  block-type: SKULLe707c7f6c3a056a377d4120028405fdd09acfcd5ae804bfde0f653be866afe39
  progress-bar-item: FLINT_AND_STEEL
  stats:
    energy-production: 16
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
  recipes:
    1:
      time-in-seconds: 5
      input:
        type: VANILLA
        id: SPRUCE_SIGN
        amount: 1
      output:
        type: NONE
        id: N/A
        amount: N/A
    2:
      time-in-seconds: 10
      input:
        type: VANILLA
        id: BEDROCK
        amount: 1
      output:
        type: VANILLA
        id: BIRCH_PLANKS
        amount: 1
```

| Nội dung | Mô tả | Đầu vào hợp lệ |
| --- | ----------- | ----------------- |
| `EXAMPLE_GENERATOR` | ID của vật phẩm.<br />ID này không được trùng với ID của bất kỳ vật phẩm nào khác! | **Chỉ hỗ trợ chữ hoa, số, dấu gạch dưới!** |
| category | ID của phân loại chứa vật phẩm. | ID [phân loại](./categories) của addon Slimefun Tùy chỉnh, hoặc [định danh của phân loại khác](./categories#use-existing-categories). |
| generator-name | Tên của vật phẩm.<br />Hỗ trợ [mã màu](../common/color-codes). | |
| generator-lore | Mô tả của vật phẩm.<br />Hỗ trợ [mã màu](../common/color-codes).<br />Nếu không muốn thêm mô tả có thể xóa toàn bộ trường này. | |
| block-type | Loại khối của máy phát điện. | [ID khối nguyên bản (Material)](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) hoặc [đầu lâu](../common/skull-items) |
| progress-bar-item | Vật phẩm được sử dụng cho thanh tiến trình của máy phát điện. | [ID vật phẩm nguyên bản (Material)](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) |
| stats.energy-production | Lượng điện mà máy phát điện tạo ra mỗi tick Slimefun. | 1 - 2147483647 (số nguyên) |
| stats.energy-buffer | Lượng điện mà máy phát điện có thể lưu trữ. | 1 - 2147483647 (số nguyên) |
| crafting-recipe-type | Xem trang [Công thức Chế tạo](../common/crafting-recipe). | |
| crafting-recipe | Xem trang [Công thức Chế tạo](../common/crafting-recipe). | |
| recipes | Xem phần [Công thức máy phát điện](#generator-recipes) bên dưới. | |

## Công thức máy phát điện {#generator-recipes}

Một máy phát điện có thể có nhiều công thức, nhưng mỗi công thức chỉ có 1 ô đầu vào và 1 ô đầu ra.
Công thức máy phát điện có thể không có đầu ra.

Số thứ tự công thức máy phát điện bắt đầu từ 1, mỗi công thức có các trường sau:

| Nội dung | Mô tả | Đầu vào hợp lệ |
| --- | --- | --- |
| time-in-seconds | Thời gian phát điện của công thức này, đơn vị là giây. | 1 - 2147483647 (số nguyên) |
| input/output.type | Loại vật phẩm đầu vào/đầu ra. | **NONE** Không có vật phẩm <br />**VANILLA** Vật phẩm nguyên bản <br /> **SLIMEFUN** Vật phẩm Slimefun <br />**SAVEDITEM** [Vật phẩm đã lưu](../common/saved-items) |
| input/output.id | Định danh của vật phẩm đầu vào/đầu ra. | [ID vật phẩm nguyên bản (Material)](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) hoặc [đầu lâu](../common/skull-items) hoặc ID của [vật phẩm đã lưu](../common/saved-items).<br />Khi loại vật phẩm là **NONE** thì không cần điền. |
| input/output.amount | Số lượng vật phẩm đầu vào/đầu ra. | Số nguyên, tối thiểu là 1, tối đa là số lượng tối đa của một nhóm vật phẩm.<br />Khi loại vật phẩm là **NONE** thì không cần điền. |
