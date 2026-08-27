# Các vấn đề thường gặp trong game {#common-issues}

Trang này chứa một số vấn đề thường gặp trong game và giải pháp.  
Hầu hết các giải pháp yêu cầu quyền quản trị viên, nếu bạn không có quyền tương ứng, vui lòng liên hệ quản trị viên để giải quyết!

:::warning

Một số vấn đề có nhiều giải pháp, các giải pháp này sẽ được sắp xếp theo mức độ ảnh hưởng từ nhỏ đến lớn. Chúng tôi khuyến nghị mạnh mẽ bạn hãy thử các giải pháp có mức độ ảnh hưởng nhỏ hơn trước, vì giải pháp có mức độ ảnh hưởng càng nhỏ thì rủi ro càng thấp. Nếu bạn đã thử tất cả các giải pháp nhưng vẫn chưa giải quyết được vấn đề, vui lòng cân nhắc [báo cáo lỗi](/How-to-report-bugs)!

:::

## Nhãn hologram còn sót lại {#floating-tags}

Một số vật phẩm Slimefun sẽ tự động tạo nhãn hologram sau khi được đặt, đặc biệt là [Bộ Điều Chỉnh Năng Lượng](/Energy-Regulator) và [Bộ Quản Lý Vận Tải](/Cargo-Manager).  
Các nhãn này sẽ biến mất sau khi phá máy. Nhưng đôi khi sẽ xảy ra sự cố, khiến một số hologram vẫn còn lại trong thế giới. Làm thế nào để giải quyết vấn đề này?

:::info

Hãy đảm bảo đây không phải là vấn đề do khối ma gây ra! Vui lòng tham khảo [Khối không thể đặt](#unplaceable-blocks).

:::

### Giải pháp 1 {#how-to-fix-this-stage-1}

Gỡ bỏ bất kỳ bộ điều chỉnh/bộ quản lý nào bên dưới nhãn hologram, sau đó đứng gần nhãn đó và chạy lệnh sau với tư cách quản trị viên:

```minecraft
/execute as <your_name> at @s run execute as @e[type=armor_stand,nbt={Invisible:1b},distance=..3] run data merge entity @s {Invisible:0}
```

Bây giờ, bạn có thể phá hủy những giá giáp đó. Bạn có thể phải phá hủy nhiều giá giáp, vì chúng có thể được tạo ra bởi các plugin khác nhau nhưng xếp chồng lên nhau.

:::tip Mẹo

Khuyến nghị sử dụng MyCommands, CommandOverride hoặc các plugin tương tự khác và đặt bí danh dễ nhớ cho lệnh này (ví dụ /holokill).

:::

### Giải pháp 2 {#how-to-fix-this-stage-2}

Chuyển sang chế độ quan sát viên bằng lệnh sau:

```minecraft
/gamemode spectator
```

Bạn sẽ có thể nhìn thấy các giá giáp tàng hình và xác định vị trí chân của chúng. Trên khối đầu tiên bên dưới giá giáp không bị giá giáp chiếm, đặt một bộ điều chỉnh mới (có thể lấy qua `/sf cheat`).  
Bộ điều chỉnh sẽ cố gắng thay thế giá giáp lỗi bằng giá giáp của chính nó, giống như bình thường. Sau đó, gỡ bỏ bộ điều chỉnh vừa đặt để gỡ bỏ tất cả các nhãn hologram.

### Giải pháp 3 {#how-to-fix-this-stage-3}

Nếu hologram liên tục tái tạo, bạn có thể cần xử lý nó như một khối ma. Điều này tương tự như [Khối không thể đặt](#unplaceable-blocks), nhưng điểm khác biệt là có hologram.  
Chỉ cần làm theo quy trình để loại bỏ khối ma, sẽ không có vấn đề gì lớn.

## Khối không thể đặt {#unplaceable-blocks}

Nếu bạn cố gắng đặt một khối ở một vị trí trống nhưng hành động đặt bị hủy, điều này cho thấy đây có thể là một khối ma.  
Điều này có nghĩa là trước đây đã có vật phẩm Slimefun được đặt ở đây (thường là [Android](/Androids) hoặc [Bộ Quản Lý Vận Tải](/Cargo-Management) và các vật phẩm dạng đầu người chơi khác), nhưng dữ liệu khối ở đây không được xóa chính xác.

### Cách khắc phục (Khối đơn lẻ) {#hhow-to-fix-this-isolated-block}

Thực thi lệnh sau với tư cách quản trị viên để lấy một con cá gỡ lỗi:

```minecraft
/sf debug_fish
```

Sử dụng Shift + Chuột phải để đặt một khối giữ chỗ, sau đó Shift + Chuột trái nhấp vào nó. Lúc này, bạn sẽ thấy hoạt ảnh khối bị phá, sự kiện bị hủy sẽ được hiển thị trong khung chat. Điều này sẽ xóa tất cả dữ liệu khối tại vị trí đó.

Bây giờ, chỉ cần phá khối giữ chỗ là được.

:::info Tùy chọn

Sử dụng Shift + Chuột phải để đặt một khối giữ chỗ tại vị trí khối ma, sau đó thử phá nó. Nếu có đầu người chơi đại diện cho vật phẩm Slimefun rơi ra, thì vị trí đó thực sự có khối ma (tuy nhiên, không rơi ra không có nghĩa là đây không phải là khối ma, vì vật phẩm Slimefun có thể là một khối hoàn chỉnh, không phải là đầu người chơi, nhưng khả năng này không lớn).

:::

### Cách khắc phục (Cụm khối) {#how-to-fix-this-cluster-of-blocks}

Điều này tương tự như quy trình xử lý khối đơn lẻ. Nhưng trong trường hợp này, bạn có thể sử dụng lệnh của WorldEdit để tăng tốc quá trình đặt, không cần phải đặt từng đầu người chơi giả.

Sử dụng công cụ chọn của WorldEdit để chọn phạm vi cần xử lý và mở rộng ra ngoài một chút, sau đó thực thi lệnh sau:

```minecraft
//set stone
```

Giống như xử lý khối đơn lẻ, Shift + Chuột trái nhấp vào tất cả các vị trí có thể có vấn đề, xóa dữ liệu tại các vị trí đó.

Cuối cùng, thực thi lệnh sau để loại bỏ tất cả đá:

```minecraft
//undo
```

## Không rơi Bo Mạch Cơ Bản {#circuit-boards-not-dropping}

Nếu bạn giết Người Sắt nhưng không rơi Bo Mạch Cơ Bản, điều này có thể là do plugin xung đột.  
Các plugin như **MobStacker** hoặc các plugin tương tự khác có nhiều vấn đề đã biết liên quan đến rơi vật phẩm tùy chỉnh.

### Cách khắc phục (Phương pháp 1)

Giải pháp tốt nhất là khi các plugin này có tùy chọn bật rơi vật phẩm tùy chỉnh, hãy bật tùy chọn đó.  
Hoặc hỏi tác giả xem có thể chuyển đổi rơi vật phẩm không.

### Cách khắc phục (Phương pháp 2)

Cách mạnh mẽ hơn là đổi sang một plugin hỗ trợ vật phẩm rơi tùy chỉnh.

:::info

Về điểm này, chúng tôi không có danh sách các plugin sinh vật tùy chỉnh đã được xác nhận hỗ trợ Slimefun. Nếu plugin bạn đang sử dụng không có vấn đề gì, bạn có thể cho chúng tôi biết tên plugin. Xem chi tiết tại [Mở rộng Wiki](/Expanding-the-Wiki).

:::

## Gặp AccessDeniedException trên Windows {#access-denied-exception}

Trên hệ thống Windows, nếu bạn gặp lỗi sau:

```shell
An Error occurred while copying a temporary File for Slimefun DEV x
AccessDeniedException：data-storage/Slimefun/stored-blocks/world/BLOCK.sfb.tmp -> data-storage/Slimefun/stored-blocks/world/BLOCK.sfb
```

Điều này thường là do:

- Khóa tệp - Một tiến trình khác đang truy cập tệp này, do đó tệp bị "khóa" và chúng ta không thể sửa đổi tệp.
- Quyền tệp - Quyền tệp của bạn có vấn đề

### Cách khắc phục

Mở thư mục được mô tả trong nội dung báo lỗi (ví dụ là `data-storage/Slimefun/stored-blocks/world`), đổi tên `BLOCK.sfb.tmp` thành `BLOCK.sfb`, ghi đè lên tệp gốc.

Nếu bạn gặp lỗi, có thể là do vấn đề quyền của bạn, bạn cần giải quyết vấn đề quyền trước.
