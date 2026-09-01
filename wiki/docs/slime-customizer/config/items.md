---
sidebar_position: 5
---

# Vật phẩm

```yaml title="items.yml"
EXAMPLE_ITEM:
  category: slime_customizer
  item-type: CUSTOM
  item-name: "&bExample Item"
  item-lore:
  - "&7This is an example item!"
  - "&cSlimeCustomizer now supports multiline lore!"
  item-id: STICK
  item-amount: 1
  placeable: false
  crafting-recipe-type: ENHANCED_CRAFTING_TABLE
  crafting-recipe:
    1:
      type: VANILLA
      id: STICK
      amount: 1
    2:
      type: NONE
      id: N/A
      amount: 1
    3:
      type: NONE
      id: N/A
      amount: 1
    4:
      type: VANILLA
      id: STICK
      amount: 1
    5:
      type: NONE
      id: N/A
      amount: 1
    6:
      type: NONE
      id: N/A
      amount: 1
    7:
      type: NONE
      id: N/A
      amount: 1
    8:
      type: NONE
      id: N/A
      amount: 1
    9:
      type: NONE
      id: N/A
      amount: 1
```

| Nội dung | Mô tả | Đầu vào hợp lệ |
| --- | ----------- | ----------------- |
| `EXAMPLE_ITEM` | ID của vật phẩm.<br />ID này không được trùng với ID của bất kỳ vật phẩm nào khác! | **Chỉ hỗ trợ chữ hoa, số, dấu gạch dưới!** |
| category | ID của phân loại chứa vật phẩm. | ID [phân loại](./categories) của addon Slimefun Tùy chỉnh, hoặc [định danh của phân loại khác](./categories#use-existing-categories). |
| item-type | Cách đăng ký vật phẩm. | **CUSTOM** Khi điền mục này, bạn có thể tùy chỉnh tên, mô tả, loại vật phẩm.<br />**SAVEDITEM** Tải vật phẩm từ [vật phẩm đã lưu](../common/saved-items). |
| item-name | Tên của vật phẩm.<br />Hỗ trợ [mã màu](../common/color-codes). | |
| item-lore | Mô tả của vật phẩm.<br />Hỗ trợ [mã màu](../common/color-codes).<br />Nếu không muốn thêm mô tả có thể xóa toàn bộ trường này. | |
| item-id | Định danh của vật phẩm. | [ID vật phẩm nguyên bản (Material)](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) hoặc [đầu lâu](../common/skull-items) hoặc ID của [vật phẩm đã lưu](../common/saved-items). |
| item-amount | Số lượng đầu ra mỗi khi chế tạo vật phẩm này. | 1 - 64 (số nguyên) |
| placeable | Vật phẩm có thể đặt được hay không.<br />**Đừng đặt vật phẩm vốn không thể đặt như công cụ thành có thể đặt!** | `true` hoặc `false` |
| crafting-recipe-type | Xem trang [Công thức Chế tạo](../common/crafting-recipe). | |
| crafting-recipe | Xem trang [Công thức Chế tạo](../common/crafting-recipe). | |

Tệp cấu hình này đăng ký các vật phẩm không có bất kỳ hiệu ứng nào. Hầu hết các tệp cấu hình tiếp theo đều có các trường tương tự.

## Vật phẩm dùng cho công thức / đầu vào đầu ra của máy

Tất cả các vật phẩm tùy chỉnh đã đăng ký đều có thể được tham chiếu bằng cách đặt `type` thành `SLIMEFUN`, `id` thành ID vật phẩm tùy chỉnh của bạn, có thể làm nguyên liệu công thức, đầu vào đầu ra, v.v.

Nếu bạn muốn sử dụng một vật phẩm trong tệp cấu hình này làm nguyên liệu chế tạo cho một vật phẩm khác, thì vật phẩm nguyên liệu đó phải được đăng ký trước.  
Trong tất cả các tệp cấu hình, vật phẩm đứng trước sẽ được đăng ký trước.

:::info

Vật phẩm của Slimefun được đánh dấu ID vật phẩm trong NBT của nó để Slimefun có thể nhận diện chúng. Để đảm bảo vật phẩm đã lưu của bạn không xung đột khi cần được nhận diện bởi plugin khác, thẻ này sẽ bị gỡ bỏ khi lưu vật phẩm.  
Tuy nhiên, vật phẩm được định nghĩa thông qua tệp cấu hình vẫn sẽ có thẻ này. Do đó, việc sử dụng `/sf give` trên vật phẩm đã lưu có thể gây nhiễu cho plugin khác vì nó sẽ bị đánh dấu bởi plugin khác. Nếu muốn lấy phiên bản gốc của vật phẩm đó (tức là phiên bản đã bỏ ID khi lưu), vui lòng sử dụng `/sc give` thay thế.

:::
