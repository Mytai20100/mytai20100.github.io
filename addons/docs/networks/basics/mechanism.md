---
sidebar_position: 2
---

# Cơ chế Lưu trữ và Lấy ra

Bất kỳ nút mạng nào trong mạng lưới khi lưu trữ hoặc lấy vật phẩm đều sẽ tuân theo cơ chế sau:

## Lưu trữ

Khi vật phẩm được lưu trữ vào mạng lưới, mạng lưới sẽ tìm kiếm Bộ chặn Mạng trước. Nếu có 2 Bộ chặn Mạng có cùng loại vật phẩm, mạng lưới sẽ ngẫu nhiên chọn một để đặt vật phẩm vào và từ chối các Bộ chặn Mạng còn lại. Nếu đã tìm thấy Bộ chặn Mạng, bất kể nó đã đầy hay chưa, sẽ không xét đến các nút khác nữa.

Nếu phần trên không áp dụng, mạng lưới sẽ bắt đầu tìm kiếm kho lưu trữ được kết nối với Màn hình Mạng. Nếu kho lưu trữ trống hoặc chưa chỉ định loại, mạng lưới sẽ không đặt vật phẩm vào kho lưu trữ đó (đừng lo về việc một chiếc cúp kim cương xuất hiện trong ô lưu trữ). Nếu có 2 ô lưu trữ có cùng loại vật phẩm, mạng lưới sẽ ngẫu nhiên chọn một để đặt vật phẩm vào.

Nếu phần trên vẫn không áp dụng, mạng lưới sẽ bắt đầu tìm kiếm Ô Mạng khả dụng và ưu tiên tìm nhóm vật phẩm chưa đầy. Nếu không có nhóm vật phẩm nào có thể bổ sung, mạng lưới sẽ tìm chỗ trống để đặt vật phẩm.

## Lấy ra

Mạng lưới sẽ ưu tiên lấy vật phẩm từ Ô Mạng.

Nếu phần trên không áp dụng, mạng lưới sẽ lấy vật phẩm khả dụng từ tất cả Máy Tự động Chế tạo.

Nếu phần trên không áp dụng, mạng lưới sẽ lấy vật phẩm khả dụng từ tất cả Bộ chặn Mạng.

Nếu phần trên không áp dụng, mạng lưới sẽ lấy vật phẩm từ kho lưu trữ được kết nối với Màn hình Mạng.

Nếu cần thiết, mạng lưới sẽ lấy vật phẩm từ nhiều nơi để đáp ứng nhu cầu.

:::warning

Vì lý do hiệu suất, mạng lưới hỗ trợ hạn chế đối với rương, thùng và các container nguyên bản khác. Xem chi tiết tại [Trình Lấy Nguyên bản Mạng lưới](../network-nodes/network-vanilla-grabber) và [Trình Đẩy Nguyên bản Mạng lưới](../network-nodes/network-vanilla-pusher).

:::
