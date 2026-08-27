# Máy Kết Hợp Sách Phù Phép {#book-binder}

Máy Kết Hợp Sách Phù Phép là một [máy điện](/Electric-Machines#machines). Nó có thể hợp nhất các phù phép từ các sách phù phép khác nhau, tương tự như đe.

## Cấp độ {#book-binder-tiers}

Hiện tại chỉ có 1 cấp độ của Máy Kết Hợp Sách Phù Phép.  
Thời gian hợp nhất phụ thuộc vào số lượng và cấp độ phù phép.

**Tiêu thụ điện**: 16 J/t

## Cài đặt {#book-binder-settings}

Mặc định, các phù phép được hợp nhất sẽ không vượt quá cấp độ giới hạn của game gốc.
Tuy nhiên, chủ máy chủ có thể chọn thay đổi các cài đặt này để tăng giới hạn cấp độ hoặc không giới hạn.

| Mục | Mô tả | Loại | Giá trị mặc định |
|--------------------------|----------------------------------------|-----|---------|
| bypass-vanilla-max-level | Khi bật, cấp độ phù phép có thể vượt quá giới hạn gốc. | Boolean | `false` |
| has-custom-max-level | Khi bật, đặt giới hạn cấp độ phù phép mới thông qua `custom-max-level`. | Boolean | `false` |
| custom-max-level | Giới hạn cấp độ phù phép. | Số nguyên | 15 |

:::tip

Sửa đổi các cài đặt liên quan đến máy trong `/plugins/Slimefun/Items.yml`.

:::
