---
sidebar_position: 2
---

# Bịt kín

Trong Galactifun, một số khối cần có khu vực **bịt kín** mới có thể hoạt động bình thường.

## Các khối yêu cầu khu vực bịt kín

Các khối sau chỉ hoạt động bình thường trong khu vực bịt kín:

- Máy sưởi không gian (tất cả cấp độ)
- Máy làm mát không gian (tất cả cấp độ)
- Máy phân tán ion (tất cả cấp độ)
- Máy khuếch tán oxy

## Khu vực bịt kín là gì?

Khu vực bịt kín là khu vực được bao kín hoàn toàn bởi các **khối có thể bịt kín** (xem danh sách bên dưới).  
Thuật toán bịt kín (triển khai bằng flood fill) bắt đầu từ khối yêu cầu bịt kín, kiểm tra các khối kề trực tiếp. Nếu khối có thể bịt kín, thuật toán dừng lại. Nếu không thể bịt kín hoặc là không khí, thuật toán sẽ tiếp tục kiểm tra khối đó.  
Các khối không thể bịt kín, ngay cả khi là khối rắn, cũng được coi như không khí. Điều này có nghĩa là bạn vẫn có thể có một nội thất đẹp, chỉ cần đặt các khối có thể bịt kín phía sau chúng.  
Nhấp vào [đây](https://en.wikipedia.org/wiki/Flood_fill?useskin=vector#/media/File:Wfm_floodfill_animation_queue.gif) để xem minh họa trực quan của thuật toán.

## Phạm vi bịt kín

Phạm vi quyết định thuật toán bịt kín sẽ kiểm tra bao nhiêu khối trước khi dừng lại.

Nếu phạm vi là 2, thuật toán sẽ kiểm tra tối đa hai khối (như mô tả ở trên) rồi dừng lại và xác định khu vực có quá lớn hoặc chưa được bịt kín hay không.  
Ví dụ, máy khuếch tán oxy sẽ từ bỏ sau khi lấp đầy một nghìn khối và không còn cung cấp oxy cho khu vực đó nữa.

Để tăng phạm vi, bạn có thể đặt **quạt tăng áp** xung quanh khối yêu cầu bịt kín (có thể đặt chéo, nhưng không được đặt phía trên). Chúng sẽ tăng phạm vi thêm 15% và có thể cộng dồn.

## Các khối có thể bịt kín

- Gốm (tất cả màu, không bao gồm gốm tráng men)
- Đá nền
- Rào chắn
- Khung cổng End
- Khối cấu trúc
- Khối lệnh
- Kính (tất cả màu, không bao gồm tấm kính)
- Bê tông (tất cả màu)
- Hắc diện thạch
- Khối sắt
- Khối vàng
- Khối kim cương
- Khối Netherite
- Cửa sắt
- Cửa sập sắt (lưu ý, đứng trên cửa sập sắt sẽ không bảo vệ bạn, xem chi tiết [#69](https://github.com/Slimefun-Addon-Community/Galactifun/issues/69)
- Khối đồng đã bôi sáp (bất kỳ trạng thái oxy hóa nào)
- Đèn hải tinh
- Khối thạch anh
- Khối thạch anh nhẵn
