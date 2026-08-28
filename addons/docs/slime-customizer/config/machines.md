---
sidebar_position: 7
---

# Máy móc

```yaml title="machines.yml"
EXAMPLE_MACHINE:
  category: slime_customizer
  machine-name: "&bMáy Mẫu"
  machine-lore:
  - "&7Đây là máy mẫu!"
  block-type: FURNACE
  progress-bar-item: FLINT_AND_STEEL
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
  recipes:
    1:
      speed-in-seconds: 5
      input:
        1:
          type: VANILLA
          id: IRON_INGOT
          amount: 9
        2:
          type: NONE
          id: N/A
          amount: 1
      output:
        1:
          type: VANILLA
          id: IRON_BLOCK
          amount: 1
        2:
          type: NONE
          id: N/A
          amount: 1
    2:
      speed-in-seconds: 5
      input:
        1:
          type: SLIMEFUN
          id: GOLD_24K
          amount: 9
        2:
          type: NONE
          id: N/A
          amount: 1
      output:
        1:
          type: SLIMEFUN
          id: GOLD_24K_BLOCK
          amount: 1
        2:
          type: NONE
          id: N/A
          amount: 1
```

| Nội dung | Mô tả | Đầu vào hợp lệ |
| --- | ----------- | ----------------- |
| `EXAMPLE_MACHINE` | ID của vật phẩm.<br />ID này không được trùng với ID của bất kỳ vật phẩm nào khác! | **Chỉ hỗ trợ chữ hoa, số, dấu gạch dưới!** |
| category | ID của phân loại chứa vật phẩm. | ID [phân loại](./categories) của addon Slimefun Tùy chỉnh, hoặc [định danh của phân loại khác](./categories#use-existing-categories). |
| machine-name | Tên của vật phẩm.<br />Hỗ trợ [mã màu](../common/color-codes). | |
| machine-lore | Mô tả của vật phẩm.<br />Hỗ trợ [mã màu](../common/color-codes).<br />Nếu không muốn thêm mô tả có thể xóa toàn bộ trường này. | |
| block-type | Loại khối của máy. | [ID khối nguyên bản (Material)](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) hoặc [đầu lâu](../common/skull-items) |
| progress-bar-item | Vật phẩm được sử dụng cho thanh tiến trình của máy. | [ID vật phẩm nguyên bản (Material)](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) |
| stats.energy-consumption | Lượng điện mà máy này tiêu thụ mỗi tick Slimefun. | 1 - 2147483647 (số nguyên) |
| stats.energy-buffer | Lượng điện mà máy này có thể lưu trữ. | 1 - 2147483647 (số nguyên), và phải lớn hơn hoặc bằng lượng điện tiêu thụ. |
| crafting-recipe-type | Xem trang [Công thức Chế tạo](../common/crafting-recipe). | |
| crafting-recipe | Xem trang [Công thức Chế tạo](../common/crafting-recipe). | |
| recipes | Xem phần [Công thức Máy móc](#machine-recipes) bên dưới. | |

## Công thức Máy móc {#machine-recipes}

Một máy có thể có nhiều công thức, nhưng mỗi công thức chỉ có 2 ô đầu vào và 2 ô đầu ra.  
Khi kiểm tra công thức, máy sẽ ưu tiên xem vật phẩm đầu tiên.

Số thứ tự công thức máy bắt đầu từ 1, mỗi công thức có các trường sau:

| Nội dung | Mô tả | Đầu vào hợp lệ |
| --- | --- | --- |
| speed-in-seconds | Thời gian cần thiết để hoàn thành công thức này, đơn vị là giây. | 1 - 2147483647 (số nguyên) |
| input/output.#.type | Loại vật phẩm đầu vào/đầu ra. | **NONE** Không có vật phẩm <br />**VANILLA** Vật phẩm nguyên bản <br /> **SLIMEFUN** Vật phẩm Slimefun <br />**SAVEDITEM** [Vật phẩm đã lưu](../common/saved-items) |
| input/output.#.id | Định danh của vật phẩm đầu vào/đầu ra. | [ID vật phẩm nguyên bản (Material)](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) hoặc [đầu lâu](../common/skull-items) hoặc ID của [vật phẩm đã lưu](../common/saved-items).<br />Khi loại vật phẩm là **NONE** thì không cần điền. |
| input/output.#.amount | Số lượng vật phẩm đầu vào/đầu ra. | Số nguyên, tối thiểu là 1, tối đa là số lượng tối đa của một nhóm vật phẩm.<br />Khi loại vật phẩm là **NONE** thì không cần điền. |

:::tip

Nếu muốn máy không có đầu ra, hãy điền vật phẩm nguyên bản `AIR` ở đầu ra, số lượng đặt thành 0.

:::

:::tip

Mẹo nhỏ: Khi bạn đặt số lượng của một vật phẩm đầu vào thành 0, vật phẩm đầu vào đó sẽ không bị máy tiêu thụ, nhưng bạn phải đặt vật phẩm đầu vào này vào ô đầu vào thì máy mới chạy, sách Slimefun và trang công thức sẽ không hiển thị vật phẩm có số lượng là 0, vì vậy bạn cần mô tả thêm trong lore.

Ví dụ như sau:

```yaml
  recipes:
    1:
      speed-in-seconds: 5
      input:
        1:
          type: VANILLA
          id: IRON_INGOT
          amount: 9
        2:
          type: VANILLA
          id: APPLE
          amount: 0
      output:
        1:
          type: VANILLA
          id: IRON_BLOCK
          amount: 1
        2:
          type: NONE
          id: N/A
          amount: 1
```

Công thức này đặt số lượng táo thành 0, nếu người chơi chỉ đặt chín thỏi sắt vào máy, máy sẽ không xuất ra khối sắt. Người chơi phải đặt một quả táo cùng với chín thỏi sắt thì máy mới xuất ra khối sắt, khi máy hoàn thành xuất ra, táo sẽ không bị tiêu thụ. Trong trang công thức máy, táo bị ẩn.

:::

:::danger Lưu ý

Cần tránh việc các ô đầu vào của hai công thức xuất hiện vật liệu trùng lặp.

Ví dụ như sau:

```yaml
  recipes:
    1:
      speed-in-seconds: 5
      input:
        1:
          type: VANILLA
          id: IRON_INGOT
          amount: 9
        2:
          type: VANILLA
          id: APPLE
          amount: 2
      output:
        1:
          type: VANILLA
          id: IRON_BLOCK
          amount: 1
        2:
          type: NONE
          id: N/A
          amount: 1
    2:
      speed-in-seconds: 5
      input:
        1:
          type: VANILLA
          id: IRON_INGOT
          amount: 4
        2:
          type: NONE
          id: N/A
          amount: 1
      output:
        1:
          type: SLIMEFUN
          id: GOLD_24K
          amount: 1
        2:
          type: NONE
          id: N/A
          amount: 1
```

Hai công thức này đều có vật phẩm đầu vào chung là “thỏi sắt”. Theo quy tắc ưu tiên xem vật phẩm đầu tiên, điều này sẽ khiến máy chỉ xuất ra công thức thứ hai là “thỏi vàng 24K”.

:::
