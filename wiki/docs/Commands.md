# Lệnh {#commands}

Trang này chứa thông tin về các lệnh của Slimefun.
Mặc dù Slimefun4 không có nhiều lệnh, nhưng việc hiểu các lệnh này vẫn rất quan trọng.

Bạn có thể sử dụng tiền tố `/slimefun` hoặc `/sf`. Cả hai đều có thể sử dụng được.
Để thuận tiện, chúng ta sẽ sử dụng `/sf`.

\<\> = bắt buộc  
[] = tùy chọn

## Lệnh dành cho người chơi thường {#commands-for-plugin-users}

| Lệnh | Mô tả | Quyền yêu cầu |
| ----------- | ------------------- | --------- |
| /sf help | Hiển thị tất cả lệnh | Không |
| /sf guide | Nhận vật phẩm Sách Hướng Dẫn Slimefun | slimefun.command.guide |
| /sf stats | Hiển thị trạng thái hiện tại, danh hiệu, kinh nghiệm đã tiêu, tiến độ đã mở khóa của bạn | Không |
| /sf search \<nội dung tìm kiếm\> | Mở sách hướng dẫn và hiển thị giao diện tìm kiếm | slimefun.command.search |
| /sf open_guide | Mở trực tiếp Sách Hướng Dẫn Slimefun | slimefun.command.open_guide |

:::warning

Mặc định, chỉ các quyền sau được cấp cho người chơi:

- `slimefun.command.guide`
- `slimefun.command.search`

:::

## Lệnh dành cho quản trị viên {#commands-for-administrators}

| Lệnh | Mô tả | Quyền yêu cầu |
| ----------- | ------------------- | --------- |
| /sf give \<người chơi\> \<ID vật phẩm\> [số lượng] | Trao vật phẩm chỉ định cho người chơi chỉ định | slimefun.cheat.items |
| /sf cheat | Mở menu gian lận, có thể lấy trực tiếp vật phẩm | slimefun.cheat.items |
| /sf versions | Hiển thị phiên bản Slimefun và thông tin addon | slimefun.command.versions |
| /sf research \<người chơi\> \<nghiên cứu / all / reset\> | Mở khóa nghiên cứu chỉ định/tất cả nghiên cứu/đặt lại tất cả nghiên cứu cho người chơi chỉ định. | slimefun.cheat.researches |
| /sf stats \<người chơi\> | Hiển thị trạng thái hiện tại, danh hiệu, kinh nghiệm đã tiêu, tiến độ đã mở khóa của người chơi chỉ định | slimefun.stats.others |
| /sf teleporter [người chơi] | Hiển thị tất cả điểm dịch chuyển của bạn hoặc người chơi chỉ định | slimefun.command.teleporter |
| /sf timings | Hiển thị thông tin thống kê tick của Slimefun | slimefun.command.timings |
| /sf debug_fish | Nhận công cụ gỡ lỗi | slimefun.debugging |
| /sf backpack \<người chơi\> \<ID\> | Cấp cho bạn ba lô dự phòng dùng để khôi phục ba lô chỉ định của người chơi chỉ định, chỉ nên dùng để khôi phục vật phẩm trong ba lô | slimefun.command.backpack |
| /sf charge | Sạc đầy vật phẩm bạn đang cầm trên tay | slimefun.command.charge |
| /sf id | Lấy ID vật phẩm Slimefun trên tay | slimefun.command.id |
| /sf cleardata \<thế giới\> \<\*/block/oil\> | Xóa dữ liệu Slimefun (khối/dầu) của thế giới chỉ định | slimefun.command.clear_data |

:::warning

Các lệnh sau chỉ khả dụng trong bản Việt hóa:

- `/sf id`
- `/sf cleardata`

:::
