# Hướng Dẫn Tối Ưu Máy Chủ {#server-optimizations}

Slimefun là một plugin lớn, vì vậy chắc chắn sẽ ảnh hưởng đến hiệu năng máy chủ.  
Plugin này đã liên tục được cải tiến và tối ưu kể từ năm 2013, nhưng mức độ ảnh hưởng đến máy chủ vẫn khác nhau tùy theo cách sử dụng plugin và addon.

Bài viết này giúp bạn phát hiện các điểm nghẽn và giới hạn của plugin, đồng thời hướng dẫn bạn tối ưu máy chủ và cài đặt Slimefun để plugin vận hành mượt mà nhất có thể.  
Dưới đây là một số mẹo quan trọng về cách tối ưu máy chủ và cài đặt Slimefun:

## 1. Chú ý đến hiệu năng máy chủ

Điều quan trọng nhất trong việc tối ưu máy chủ là nắm được thông tin.  
Bạn cần biết nên xem thông tin nào để cải thiện hiệu năng máy chủ, đây là một số công cụ quan trọng bạn nên làm quen:

### a) Phân tích hiệu năng máy chủ (/timings)

Spigot và Paper đều có công cụ phân tích hiệu năng, bạn có thể chạy nó bằng lệnh `/timings`.  
Công cụ này cho phép bạn hiểu sâu về các vấn đề mà máy chủ đang gặp phải, thậm chí có thể xem tình hình của từng plugin, từng tác vụ.

!> Lưu ý: Việc hiểu báo cáo phân tích máy chủ là một việc khó khăn.

Vui lòng tham khảo [bài viết wiki trên spigotmc.org](https://www.spigotmc.org/wiki/timings/) để hiểu cách công cụ phân tích hoạt động.

Tuy nhiên, các con số trong báo cáo không nhất thiết là quan trọng. Đặc biệt các tác vụ khởi động có thể hiển thị màu đỏ, nhưng chúng không ảnh hưởng đến máy chủ vì chỉ chạy lúc khởi động.

### b) Phân tích hiệu năng Slimefun (/sf timings)

Slimefun cũng cung cấp công cụ phân tích hiệu năng riêng, giúp bạn tìm ra nguyên nhân gây lag máy chủ.  
Sử dụng lệnh `/sf timings` để biết chunk nào, máy nào, thậm chí addon nào ảnh hưởng nhiều đến hiệu năng.  
Hãy thử lệnh này, bạn nên làm quen với nó.  
Bạn chắc chắn sẽ thấy các nội dung khác nhau của Slimefun và addon.

### c) Phân tích hiệu năng từ plugin

Ngoài công cụ phân tích do máy chủ cung cấp, còn có một số công cụ bên thứ ba có thể giúp bạn và nhà phát triển xác định nguyên nhân gây lag ở cấp độ mã nguồn.  
Chúng tôi khuyên dùng [:zap: Spark by @Luck](https://www.spigotmc.org/resources/spark.57242/).  
Báo cáo do Spark cung cấp đã giúp chúng tôi giải quyết một số vấn đề tối ưu và tìm ra điểm nghẽn của máy chủ. Đây là một plugin rất hữu ích cho cả chủ máy chủ và nhà phát triển.

## 2. Chọn phần mềm máy chủ phù hợp {#2-choosing-the-right-server-software}

Việc chọn phần mềm máy chủ phù hợp rất quan trọng đối với việc tối ưu máy chủ.

Do CraftBukkit đã ngừng cập nhật, [Spigot](https://www.spigotmc.org/) đã trở thành phần mềm máy chủ tiêu chuẩn. Nhưng vẫn còn các lựa chọn thay thế khác.

[Paper](https://papermc.io/) là một bản fork của Spigot và có hiệu năng tốt hơn, cũng như báo cáo phân tích chi tiết hơn.  
**Mạng lưới vận tải** trong Slimefun hoạt động tốt hơn khi được tối ưu trên [Paper](https://papermc.io/).

Tất nhiên, còn có các phần mềm máy chủ khác cũng cung cấp tối ưu hiệu năng, chúng tôi khuyên bạn nên tìm hiểu kỹ các phần mềm đó rồi mới lựa chọn.

Nếu bạn có thể chọn phiên bản Java mà máy chủ sử dụng, chúng tôi khuyên bạn nên dùng phiên bản Java mới nhất có thể.

Sau khi chọn được phần mềm máy chủ phù hợp, bạn nên dành chút thời gian để cấu hình.  
Đây là một số hướng dẫn có thể tham khảo:

* [Giảm lag máy chủ](https://www.spigotmc.org/wiki/reducing-lag/) (SpigotMC Wiki)
* [Hướng dẫn tối ưu máy chủ](https://www.spigotmc.org/threads/guide-server-optimization%E2%9A%A1.283181/) (đăng bởi @Celbrimbor trên diễn đàn SpigotMC)
* [Tối ưu bộ thu gom rác của Java](https://aikar.co/2018/07/02/tuning-the-jvm-g1gc-garbage-collector-flags-for-minecraft/) (blog cá nhân của @aikar)

## 3. Đừng sử dụng /reload

!> Đừng bao giờ sử dụng `/reload`

Dù bạn thêm plugin mới hay chỉnh sửa file cấu hình, hãy khởi động lại máy chủ. Sử dụng `/reload` sẽ gây ra [rò rỉ bộ nhớ](https://en.wikipedia.org/wiki/Memory_leak) nghiêm trọng, ảnh hưởng nặng đến hiệu năng máy chủ. Bất cứ lúc nào bạn cũng không nên dùng `/reload`.

Nhiều plugin không xử lý việc tải lại máy chủ (`/reload`), và Slimefun là một trong số đó, bạn nên khởi động lại máy chủ.

## 4. Tắt khả năng tương thích ngược

Slimefun đã tồn tại trong thời gian rất dài, nhiều máy chủ đã cài plugin này.  
Các máy chủ từ **trước mùa hè 2019** sẽ có rất nhiều vật phẩm Slimefun phiên bản cũ.  
Những vật phẩm này sử dụng cơ chế nhận diện vật phẩm cũ, dựa trên việc so sánh, rất chậm và kém hiệu quả.  
Mỗi khi người chơi sử dụng vật phẩm trong ba lô, Slimefun sẽ so sánh nó với tất cả vật phẩm Slimefun, bao gồm cả vật phẩm từ các addon.  
Mặc dù thao tác so sánh khá nhanh, nhưng khi số lượng vật phẩm nhiều cũng sẽ làm giảm hiệu năng.

Vật phẩm phiên bản mới sử dụng thẻ NBT, cho phép plugin trực tiếp biết vật phẩm người chơi đang cầm.  
So với cơ chế so sánh, đây là một thao tác rất nhanh.  
Tuy nhiên, chúng tôi không muốn những vật phẩm cũ trở nên vô dụng, chúng tôi vẫn thực hiện thao tác so sánh để tương thích với những vật phẩm cũ đó.

Nếu bạn chắc chắn máy chủ không có vật phẩm nào từ trước mùa hè 2019, bạn hoàn toàn có thể tắt khả năng tương thích ngược để sử dụng hoàn toàn thẻ NBT mới.  
Điều này sẽ tối ưu hiệu năng máy chủ đáng kể.  
Nhưng lưu ý rằng bất kỳ vật phẩm nào từ trước mùa hè 2019 sẽ không thể sử dụng được.

Bạn có thể tắt tương thích ngược bằng cách đặt `backwards-compatibility` thành `false` trong `plugins/Slimefun/config.yml` (phiên bản hiện tại mặc định đã tắt).

```yaml
options:
  backwards-compatibility: false
```

## 5. Giảm tốc độ Tick {#5-slower-tick-rates}

Các khối Slimefun đều chạy với tốc độ cố định, mặc định Slimefun thực hiện thao tác Tick mỗi 10 tick (20 tick = 1 giây).  
Tăng khoảng cách giữa các Tick **có thể** tối ưu hiệu năng máy chủ.  
Tuy nhiên, bạn không nên đặt giá trị này quá lớn, nếu không người chơi có thể phàn nàn máy chạy quá chậm.

Bạn có thể đặt tốc độ Tick trong `plugins/Slimefun/config.yml`. Chúng tôi khuyên nên giữ giá trị mặc định hiện tại là 10, hoặc đổi thành giá trị mặc định trước đây là 12.

```yaml
URID:
  custom-ticker-delay: 10
```

Tương tự cài đặt trên, Slimefun sẽ định kỳ kiểm tra giáp của người chơi để cung cấp hiệu ứng thuốc cụ thể.  
Mặc định cài đặt này là 10 tick (20 tick = 1 giây).  
Nếu cần, bạn cũng có thể thay đổi cài đặt này.

```yaml
options:
  armor-update-interval: 10
```

## 6. Xử lý mạng lưới vận tải

Mạng lưới vận tải là một phần được biết là ảnh hưởng lớn đến hiệu năng.  
Mặc dù vận tải luôn được tối ưu, nhưng thỉnh thoảng vẫn xuất hiện một số vấn đề.

Sau khi hợp nhất [#2106](https://github.com/Slimefun/Slimefun4/pull/2106), hệ thống vận tải đã được tối ưu đáng kể khi dùng [Paper](https://papermc.io/). Bạn có thể tìm hiểu thêm tại [bước 2](#2-choosing-the-right-server-software).

Dưới đây là hai cách để giới hạn mạng lưới vận tải, giúp người chơi đặt ít nút vận tải hơn.

### a) Đặt giới hạn vận tải

Bạn có thể đặt số lượng nút tối đa trong mỗi mạng lưới điện và mạng lưới vận tải trong `plugins/Slimefun/config.yml`.  
Giá trị mặc định 200 là một con số rất hào phóng đối với người chơi, giảm giá trị này có thể tối ưu hiệu năng.  
Lưu ý rằng giới hạn này sẽ được áp dụng khi tìm kiếm mạng lưới liên thông, nhưng điều đó không có nghĩa là giới hạn số lượng nút trong một mạng lưới.

```yaml
networks:
  max-size: 200
```

### b) Đặt độ trễ vận tải

Thông thường, mạng lưới vận tải được coi như một loại máy định kỳ khác (xem [bước 5](#5-slower-tick-rates)).  
Nhưng bạn có thể đặt độ trễ để mạng lưới vận tải chạy chậm hơn.  
Cài đặt này sẽ khiến mạng lưới vận tải bỏ qua số tick chỉ định rồi mới thực hiện thao tác. Đặt thành 0 sẽ khiến mạng lưới vận tải chạy mỗi tick.  
Đặt thành 1 sẽ khiến mạng lưới vận tải chạy mỗi giây một lần, đặt thành 2 thì mỗi lần chạy sẽ cách nhau 2 tick, v.v.

Vì cài đặt này liên quan đến tốc độ tick của Slimefun, giá trị quá lớn sẽ ảnh hưởng nghiêm trọng đến trải nghiệm chơi của người chơi.
Chúng tôi khuyên nên đặt giá trị này là 1, và chỉ tăng lên khi thực sự cần thiết.

```yaml
networks:
  cargo-ticker-delay: 1
```

## 7. Bật tự động cập nhật

Cuối cùng, một trong những cách hiệu quả nhất để nâng cao hiệu năng là luôn bật tự động cập nhật của Slimefun.  
Chúng tôi thường xuyên phát hành các bản vá, sửa lỗi và một số tối ưu hiệu năng để làm plugin tốt hơn (cả về nội dung lẫn hiệu năng).

Bạn nên luôn sử dụng phiên bản mới nhất, vì vậy chúng tôi khuyên bạn nên bật tự động cập nhật trong file cấu hình `plugins/Slimefun/config.yml`:

```yaml
options:
  auto-update: true
```
