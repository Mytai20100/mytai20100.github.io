---
sidebar_position: 2
---

# Phân loại

```yaml title="categories.yml"
slime_customizer:
  type: normal
  category-name: "&cPhân loại Thường"
  category-item: REDSTONE_LAMP
  tier: 0
nested_group:
  type: nested
  category-name: "&cPhân loại Cha"
  category-item: BEDROCK
sub_group:
  type: sub
  category-name: "&cPhân loại Con"
  category-item: DIRT
  parent: nested_group
seasonal_group:
  type: seasonal
  category-name: "&cPhân loại Theo mùa"
  category-item: DIAMOND
  month: 9
locked_group:
  type: locked
  category-name: "&cPhân loại Bị khóa"
  category-item: DIAMOND
  parents:
    - slimefun:basic_machines
```

| Trường | Mô tả |
| --- | --- |
| `slime_customizer` | ID của phân loại, mỗi phân loại ID không được trùng nhau.<br />**Chỉ hỗ trợ chữ cái, số, dấu gạch dưới!**<br />Khuyến nghị không sử dụng chữ hoa. |
| type | (**Bắt buộc**) Loại của phân loại. Các loại khả dụng:<br />- `normal`: Phân loại thường<br />- `nested`: Phân loại cha<br />- `sub`: Phân loại con<br />- `seasonal`: Phân loại theo mùa<br />- `locked`: Phân loại bị khóa |
| category-name | (**Bắt buộc**) Tên hiển thị của phân loại.<br />Hỗ trợ [mã màu](../common/color-codes). |
| category-item | (**Bắt buộc**) Vật phẩm trưng bày của phân loại.<br />Điền [ID vật phẩm nguyên bản](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) hoặc [đầu lâu](../common/skull-items). |
| tier | (*Tùy chọn*) Độ ưu tiên của phân loại, mặc định là 3.<br />Độ ưu tiên của phân loại là một số nguyên, phân loại có độ ưu tiên thấp sẽ hiển thị trước. |

:::info

Hãy ghi nhớ ID phân loại, bạn sẽ dùng nó trong các tệp cấu hình khác.

:::

:::warning Lưu ý

Một số loại phân loại cần các trường bổ sung, xem chi tiết phần giải thích loại phân loại bên dưới.

:::

## ID Phân loại và Định danh `NamespacedKey` {#namespaced-key}

ID phân loại là một chuỗi đơn giản dùng để phân biệt các phân loại. `slime_customizer` trong ví dụ chính là một ID phân loại.

`NamespacedKey` là định danh mà Slimefun dùng để phân biệt các phân loại của các addon, định danh này bao gồm ID phân loại và tên addon sở hữu phân loại.

`NamespacedKey` của các phân loại addon Slimefun Tùy chỉnh đều là: `slimecustomizer:ID`, trong đó `ID` là ID của phân loại.

:::info

Trong tất cả các trang tiếp theo, **ID phân loại** chỉ ID phân loại của addon Slimefun Tùy chỉnh, **định danh** thì chỉ `NamespacedKey` của bất kỳ phân loại nào.

:::

:::tip

Bạn có thể truy vấn định danh của tất cả phân loại của bản gốc và các addon thông qua lệnh `/sc categories`.

:::

### Sử dụng phân loại của addon khác {#use-existing-categories}

Bây giờ bạn có thể thêm vật phẩm vào phân loại của addon khác. Khi điền trường `categories` của vật phẩm, định dạng là: `existing:` + định danh của phân loại.

:::note Ví dụ

`existing:slimefun:misc` sẽ thêm vật phẩm vào phân loại Linh tinh của bản gốc.

:::

## Giải thích loại Phân loại

### Phân loại Thường (normal)

Một phân loại thường có thể chứa vật phẩm.

:::warning

Khi phân loại thường không có vật phẩm (không thêm vật phẩm hoặc tất cả vật phẩm đều bị vô hiệu hóa), phân loại đó sẽ không hiển thị trong sách hướng dẫn Slimefun.

:::

:::note Ví dụ

Khi một máy chủ chỉ cài plugin Slimefun, hầu hết các phân loại đều là phân loại thường.

:::

### Phân loại Cha (nested) và Phân loại Con (sub)

Một phân loại cha có thể có nhiều phân loại con. Phân loại cha **chỉ có thể chứa phân loại con, không thể chứa vật phẩm**.

:::note Ví dụ

Đối với phân loại của addon Công nghệ Huyền bí, "Công nghệ Huyền bí" là một phân loại cha, trong đó có các phân loại con như "Máy móc", "Vũ khí và Giáp", v.v.

:::

Phân loại con có các trường bổ sung sau:

| Trường | Mô tả |
| --- | --- |
| parent | (**Bắt buộc**) ID của phân loại cha. |

ID của phân loại cha có thể là:

- **ID** của phân loại cha được định nghĩa trong addon Slimefun Tùy chỉnh. (Trong cấu hình ví dụ, bạn chỉ cần điền `nested_group`)
- **Phân loại cha tiêu chuẩn** được thêm bởi addon khác (tất nhiên, tất cả các phân loại cha do addon Slimefun Tùy chỉnh định nghĩa đều là phân loại cha tiêu chuẩn).  
  Một số addon sử dụng phân loại cha phi tiêu chuẩn, hiện tại chưa hỗ trợ thêm vào các phân loại cha này.

  Định dạng là: `existing:` + [định danh](#namespaced-key) của phân loại cha.

:::note Ví dụ

`existing:fluffymachines:fluffymachines`, có thể thêm phân loại con vào phân loại cha của FluffyMachines.

:::

### Phân loại Theo mùa (seasonal)

Phân loại theo mùa là phân loại chỉ xuất hiện trong sách hướng dẫn Slimefun vào tháng được chỉ định trong năm, thời gian còn lại sẽ bị ẩn.

Vật phẩm trong phân loại theo mùa có thể được chế tạo bất kỳ lúc nào.

Phân loại theo mùa có các trường bổ sung sau:

| Trường | Mô tả |
| --- | --- |
| month | (**Bắt buộc**) Tháng hiển thị của phân loại theo mùa, phạm vi 1-12. |

### Phân loại Bị khóa (locked)

Phân loại bị khóa là phân loại cần tất cả vật phẩm trong các phân loại yêu cầu đều được mở khóa mới có thể xem.

Phân loại bị khóa có các trường bổ sung sau:

| Trường | Mô tả |
| --- | --- |
| parents | (**Bắt buộc**) **Danh sách** [định danh](#namespaced-key) của các phân loại khác mà phân loại bị khóa yêu cầu. |

:::note Ví dụ

Phân loại "Năng lượng và Điện" trong Slimefun sử dụng chính là phân loại bị khóa.

Phân loại đó yêu cầu mở khóa toàn bộ Máy Cơ bản, do đó phân loại đó cần đặt `slimefun:basic_machines` làm phân loại yêu cầu.

:::
