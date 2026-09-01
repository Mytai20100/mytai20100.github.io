---
sidebar_position: 4
---

# Tài nguyên Địa chất

```yaml title="geo-resources.yml"
EXAMPLE_GEO:
  category: slime_customizer
  item-type: CUSTOM
  item-name: "&bTài nguyên Địa chất Mẫu"
  item-lore:
    - "&7Đây là tài nguyên địa chất mẫu!"
  item-id: STICK
  max-deviation: 1
  biome:
    BEACH: 9
  environment:
    NORMAL: 3
    NETHER: 6
```

| Nội dung | Mô tả | Đầu vào hợp lệ |
| --- | ----------- | ----------------- |
| `EXAMPLE_GEO` | ID của vật phẩm.<br />ID này không được trùng với ID của bất kỳ vật phẩm nào khác! | **Chỉ hỗ trợ chữ hoa, số, dấu gạch dưới!** |
| category | ID của phân loại chứa vật phẩm. | ID [phân loại](./categories) của addon Slimefun Tùy chỉnh, hoặc [định danh của phân loại khác](./categories#use-existing-categories). |
| item-type | Cách đăng ký vật phẩm. | **CUSTOM** Khi điền mục này, bạn có thể tùy chỉnh tên, mô tả, loại vật phẩm.<br />**SAVEDITEM** Tải vật phẩm từ [vật phẩm đã lưu](../common/saved-items). |
| item-name | Tên của vật phẩm.<br />Hỗ trợ [mã màu](../common/color-codes). | |
| item-lore | Mô tả của vật phẩm.<br />Hỗ trợ [mã màu](../common/color-codes).<br />Nếu không muốn thêm mô tả có thể xóa toàn bộ trường này. | |
| item-id | Định danh của vật phẩm. | [ID vật phẩm nguyên bản (Material)](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) hoặc [đầu lâu](../common/skull-items) hoặc ID của vật phẩm đã lưu. |
| max-deviation | Độ lệch tối đa của số lượng tài nguyên địa chất mỗi chunk. | Số nguyên dương |
| biome | Số lượng mặc định của tài nguyên địa chất ở từng quần xã.<br />*Tùy chọn, nhưng biome và environment ít nhất phải có một.* | |
| environment | Số lượng mặc định của tài nguyên địa chất ở từng loại thế giới.<br />*Tùy chọn, nhưng biome và environment ít nhất phải có một.* | |

## Giải thích về số lượng tài nguyên địa chất mỗi chunk

Số lượng tài nguyên địa chất sẽ được quyết định dựa trên quần xã của chunk, loại thế giới và độ lệch tối đa.

### Quần xã `biome`

Phần `biome` là thiết lập cho quần xã. Bạn có thể tìm ID quần xã [tại đây](https://jd.papermc.io/paper/1.19/org/bukkit/block/Biome.html).  
Lưu ý rằng quần xã của 1.18 có thay đổi lớn. Khi tra cứu ID quần xã, tốt nhất nên tìm danh sách quần xã tương ứng với phiên bản máy chủ của bạn.  
Bạn có thể thay `1.19` trong địa chỉ thành phiên bản chính tương ứng (`1.18`, `1.16`, v.v.).

```text
https://jd.papermc.io/paper/1.19/org/bukkit/block/Biome.html
```

### Loại thế giới `environment`

Phần `environment` là thiết lập cho loại thế giới. Bạn có thể tìm ID loại thế giới [tại đây](https://jd.papermc.io/paper/1.19/org/bukkit/World.Environment.html).

- `NORMAL` Thế giới chính
- `NETHER` Địa ngục
- `THE_END` The End

### Số lượng tài nguyên mặc định

Đầu tiên, tài nguyên địa chất có một số lượng mặc định, số lượng này sẽ bị ảnh hưởng bởi quần xã và loại thế giới.  
Khi bạn đặt số lượng tài nguyên cho một quần xã nào đó trong `biome`, nếu quần xã của chunk khớp, thì số lượng mặc định của chunk đó sẽ là số lượng tài nguyên của quần xã đó.  
Nếu `biome` không có quần xã khớp, thì sẽ tiếp tục khớp ở phần `environment` (loại thế giới), nếu khớp thành công, thì số lượng mặc định của chunk đó sẽ là số lượng tài nguyên của loại thế giới đó.  
Nếu cả quần xã và loại thế giới đều không khớp, thì số lượng mặc định của chunk đó sẽ là 0.

:::note Ví dụ

Trong tệp cấu hình ví dụ, nếu quần xã của chunk là bãi biển, thì số lượng tài nguyên mặc định của chunk là 9.  
Nếu quần xã của chunk là rừng rậm, vì `biome` không có quần xã khớp, nhưng `environment` có loại thế giới `NORMAL` khớp, nên số lượng tài nguyên mặc định của chunk là 3.  
Nếu chunk ở The End, vì không có gì khớp, nên số lượng tài nguyên mặc định của chunk là 0.

:::

### Số lượng tài nguyên cuối cùng

Số lượng tài nguyên cuối cùng là số lượng mặc định cộng với giá trị độ lệch. `max-deviation` định nghĩa giá trị độ lệch tối đa.

Nếu số lượng mặc định không phải là 0, thì phạm vi số lượng tài nguyên cuối cùng là $số lượng mặc định \pm giá trị độ lệch$.

Số lượng này được xác định khi quét và sẽ không thay đổi nữa.
