---
sidebar_position: 4
---

# Máy tải chunk

Máy tải chunk có thể giữ cho chunk nơi nó đặt luôn được tải, không cần tiêu thụ điện.

## Sử dụng

Mỗi máy tải chunk cần 7500 độ phức tạp mạng GPS mới có thể đặt.  
Yêu cầu độ phức tạp mạng GPS của nhiều máy tải chunk sẽ cộng dồn, tức là yêu cầu độ phức tạp mạng GPS lớn hơn hoặc bằng _7500 * số lượng máy tải chunk người chơi sở hữu_.

Việc đặt và vận hành máy tải chunk sẽ không tiêu thụ độ phức tạp mạng GPS, chỉ cần đáp ứng yêu cầu về độ phức tạp khi đặt là được.

Đặt máy tải chunk vào trong chunk cần tải, máy tải chunk sẽ bắt đầu hoạt động. Khi bạn rời khỏi khu vực gần chunk, chunk sẽ không bị dỡ tải.

## Cấu hình

Có thể sửa đổi thiết lập về máy tải chunk trong tệp `/plugins/FoxyMachines/config.yml`.

`max-chunk-loaders` là giới hạn số lượng máy tải chunk mỗi người chơi có thể đặt, mặc định là 8, đặt thành 0 thì không giới hạn.
