# Cách báo cáo lỗi {#how-to-report-bugs}

Báo cáo lỗi rất quan trọng đối với dự án mã nguồn mở này.

Nếu bạn đang sử dụng Slimefun bản chính thức, vui lòng phản hồi tại [bộ theo dõi vấn đề chính thức](https://github.com/Slimefun/Slimefun4/issues).

Nếu bạn đang sử dụng Slimefun bản Việt hóa/Tiếng Trung, vui lòng phản hồi tại [bộ theo dõi vấn đề bản Việt hóa](https://github.com/StarWishsama/Slimefun4/issues). **Đừng gửi vấn đề tới bộ theo dõi chính thức!**

Nhưng trước khi báo cáo lỗi, bạn nên đọc kỹ hướng dẫn khắc phục sự cố bên dưới.  
Nhiều vấn đề bạn gặp phải có thể tự giải quyết và giúp chúng tôi tiết kiệm rất nhiều thời gian và công sức.

## Hướng dẫn khắc phục sự cố {#troubleshooting-guide}

Hướng dẫn này nhằm giúp bạn xác định vấn đề và cho bạn biết **bạn** có thể làm gì để tránh gặp phải những vấn đề này.  
Nếu mọi nỗ lực đều thất bại, chúng tôi sẽ giúp bạn tạo báo cáo vấn đề chi tiết và hiệu quả, và hỗ trợ bạn tối đa.

:::info

Xem thêm: [Vấn đề thường gặp](/Common-Issues)

:::

**Nhưng trước hết:**  
Hãy luôn nhớ, Slimefun4 là mã nguồn mở và được phát triển với sự tham gia của cộng đồng.  
Nhưng quan trọng nhất: nó miễn phí…  
Vì vậy **đừng** mong đợi chúng tôi luôn trực tuyến và có thể sửa mọi thứ cho bạn.  
Nếu bạn thực sự thích plugin này, hãy tuân thủ hướng dẫn này. Điều này sẽ giúp cuộc sống của chúng tôi dễ dàng hơn và cho phép chúng tôi tập trung vào những vấn đề quan trọng.  
Đây là điều tối thiểu bạn có thể làm để giảm bớt gánh nặng cho chúng tôi.

### 1. Kiểm tra phiên bản của bạn {#1-checking-your-versions}

Kiểm tra phiên bản của bạn là **rất quan trọng**. 90% vấn đề có thể được giải quyết ngay ở bước này.

Bạn cần thu thập các thông tin sau:

* **Phần mềm máy chủ của bạn** *(bạn đang dùng Spigot, Paper hay cái khác?)*
* **Phiên bản Minecraft của bạn** *(là 1.8? 1.14? hay 1.14.514? Bạn nên biết nó.)*
* **Phiên bản Slimefun của bạn** *(bạn đã cài phiên bản nào? Là bản dev hay bản ổn định?)*

Bạn có thể thu thập những thông tin này bằng lệnh `/sf versions`.  
Nếu chủ máy chủ không cấp cho bạn quyền lệnh này, hãy giữ Shift và nhấp chuột phải để mở sách hướng dẫn Slimefun, ở góc trên bên trái, nó ít nhất sẽ cho bạn biết phiên bản Minecraft và Slimefun.

Nếu bạn báo cáo lỗi cho chúng tôi, chúng tôi sẽ yêu cầu cung cấp thông tin này, nếu không chúng tôi không thể hiểu chuyện gì đã xảy ra.

:::warning

Hãy nhất định cho chúng tôi biết bạn đang sử dụng phiên bản nào. "Phiên bản mới nhất" không giúp ích gì cho chúng tôi.

:::

### 2. Kiểm tra cập nhật {#2-checking-for-updates}

Bước tiếp theo là so sánh thông tin phiên bản bạn thu được ở bước 1 với thông tin phiên bản mới nhất.

* **Phần mềm máy chủ của bạn đã là phiên bản mới nhất chưa?** *(kiểm tra xem Spigot, Paper hoặc phần mềm khác bạn đang dùng có bản cập nhật không)*
* **Slimefun đã là phiên bản mới nhất chưa?** *(bạn có thể kiểm tra xem có cập nhật phiên bản tại [trang tải bản chính thức](https://thebusybiscuit.github.io/builds/TheBusyBiscuit/Slimefun4/master/) hoặc [trang tải bản Việt hóa](https://github.com/StarWishsama/Slimefun4/releases) không)*
* **Bạn có đang dùng bản dev không?** *(bản ổn định thì "ổn định", nhưng có thể bản dev mới đã sửa vấn đề trong đó)*

Thêm một điểm cuối: chúng tôi không chấp nhận báo cáo lỗi từ bản ổn định. Hãy chuyển sang bản dev mới hơn và xem vấn đề của bạn còn tồn tại không.

Nếu bạn không có quyền truy cập tệp máy chủ, bạn cần liên hệ quản trị viên máy chủ, giải thích vấn đề và yêu cầu họ xem hướng dẫn này.

### 3. Thử khởi động lại máy chủ của bạn {#3-try-restarting-your-server}

Đây không phải là đùa.

> Khởi động lại có thể giải quyết 99% vấn đề.

### 4. Xem liệu có phải là vấn đề đã biết không {#4-see-if-it-is-a-known-issue}

Xem [bộ theo dõi vấn đề chính thức](https://github.com/Slimefun/Slimefun4/issues) hoặc [bộ theo dõi vấn đề bản Việt hóa](https://github.com/StarWishsama/Slimefun4/issues) của chúng tôi.  
Có thể vấn đề bạn gặp phải đã được báo cáo rồi. Trong trường hợp này, đừng báo cáo trùng lặp.
Nhưng chúng tôi khuyến khích bạn để lại bình luận bên dưới vấn đề, cho chúng tôi biết bạn đã tái hiện vấn đề như thế nào.

### 5. Tìm kiếm báo cáo lỗi (error-reports) và dấu vết ngăn xếp (stacktraces) {#5-search-for-error-reports-and-stacktraces}

Khi bạn tìm kiếm báo cáo lỗi và dấu vết ngăn xếp, hãy nhớ rằng khi bạn báo cáo tới bộ theo dõi vấn đề, hãy gửi các tệp này qua [clipboard trực tuyến](https://pastebin.com/).

1. Mở thư mục `/plugins/Slimefun/error-reports/`, kiểm tra xem có báo cáo lỗi nào được tạo không.  
Nếu các báo cáo lỗi này liên quan đến vấn đề của bạn, hãy gửi kèm chúng với vấn đề.

2. Mở bảng điều khiển máy chủ, kiểm tra xem có đầu ra liên quan đến dấu vết ngăn xếp không.  
(Dấu vết ngăn xếp là những thứ trông rất đáng sợ, bạn không thể hiểu cách đọc chúng)
Xem trong đó có chứa từ "slimefun" không, nếu có hãy gửi kèm với vấn đề.

**Bạn nên luôn gửi dấu vết ngăn xếp đầy đủ, điều này rất quan trọng. Có thể chỉ thiếu một từ, dấu vết ngăn xếp sẽ trở nên vô dụng. Vì vậy hãy đảm bảo nó bao gồm mọi thứ bạn thấy.**

Lưu ý rằng dấu vết ngăn xếp chứa từ "slimefun", hoặc nói trực tiếp là do Slimefun gây ra, có thể không phải do Slimefun gây ra.  
Nếu tên của một addon đã cài đặt xuất hiện trong dấu vết ngăn xếp, hãy gửi nó tới bộ theo dõi vấn đề của addon đó.

Nếu bạn không có quyền truy cập tệp máy chủ, bạn cần liên hệ quản trị viên máy chủ, giải thích vấn đề và yêu cầu họ xem hướng dẫn này.

### 6. Đảm bảo nó đến từ Slimefun! {#6-make-sure-it-is-slimefun}

Khi bạn gặp vấn đề với Slimefun, hãy đảm bảo vật phẩm/khối/máy thực sự đến từ Slimefun, chứ không phải từ addon.  
Nếu vấn đề của bạn liên quan đến ExoticGarden hoặc addon Slimefun khác, vui lòng báo cáo vấn đề tới bộ theo dõi vấn đề của addon tương ứng, chứ không phải ở đây.

### 7. Thu thập càng nhiều thông tin càng tốt {#7-gather-as-much-information-as-possible}

Bạn cần cung cấp thông tin càng chi tiết càng tốt.  
Trước khi báo cáo, hãy thử làm một số thí nghiệm:

* Chỉ vật phẩm hiện tại bị ảnh hưởng? Hay các vật phẩm (tương tự) khác cũng gặp vấn đề?
* Lỗi chỉ xuất hiện khi bạn cầm một vật phẩm nào đó?
* Bạn đã thử nhảy, nhấp chuột trái hoặc phải, hoặc nhảy múa chưa?
* Vấn đề này có cần một con Creeper nhìn chằm chằm sau lưng bạn không?
* Nó chỉ xuất hiện trên máy chủ của bạn? **Bạn đã thử trao đổi vấn đề này với người khác trong máy chủ Discord của chúng tôi chưa?**

Đây là những câu hỏi có thể cân nhắc. Mỗi thông tin đều hữu ích.  
Cung cấp thông tin càng chi tiết sẽ giúp chúng tôi giải quyết vấn đề tốt hơn.

### 8. Gửi vấn đề qua GitHub {#8-posting-the-issue-via-github}

Nếu cập nhật hoặc khởi động lại không giải quyết được vấn đề, vui lòng gửi vấn đề bạn gặp phải qua [bộ theo dõi vấn đề chính thức](https://github.com/Slimefun/Slimefun4/issues) hoặc [bộ theo dõi vấn đề bản Việt hóa](https://github.com/StarWishsama/Slimefun4/issues).

* Chúng tôi cần tất cả thông tin phiên bản bạn đã thu thập ở bước 1.
* Vui lòng mô tả chi tiết vấn đề.
* Cho chúng tôi biết chi tiết bạn đã làm gì, vấn đề xuất hiện khi nào.
* Giải thích điều bạn **mong đợi** sẽ xảy ra, hiểu nhầm đôi khi là nguyên nhân gốc rễ của vấn đề.

Chúng tôi hy vọng hướng dẫn này có thể giúp bạn tạo ra báo cáo lỗi hiệu quả và chính xác.  
Cảm ơn bạn đã đọc hết hướng dẫn này, chúng tôi mong đợi phản hồi chất lượng của bạn!
