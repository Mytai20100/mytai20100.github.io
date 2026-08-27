---
sidebar_label: Cách cài đặt Slimefun
---

# Cài đặt Slimefun {#installing-slimefun}

## Chuẩn bị {#prerequisites}

Bạn cần một máy chủ Paper (khuyến nghị dùng phiên bản mới nhất) để cài đặt Slimefun.  
Mặc dù chúng tôi chỉ kiểm thử trên Paper, các phiên bản phái sinh của nó cũng sẽ giúp Slimefun hoạt động bình thường.

Chúng tôi khuyến nghị sử dụng Paper, bạn có thể [nhấp vào đây](https://papermc.io/downloads) để tải xuống.

:::warning Lưu ý

Slimefun không hỗ trợ chạy trên máy chủ hybrid (mod + plugin).

:::

### Tải Slimefun 4 bản chính thức {#slimefun-4-downloads}

**Lưu ý, nếu bạn không có nhu cầu đặc biệt, khuyến nghị bạn sử dụng bản Việt hóa.**

<details>
<summary>Nhấp để mở rộng</summary>

Bạn có thể chọn giữa hai nhánh của Slimefun, nhánh ["bản ổn định"](https://blob.build/project/Slimefun/RC) hoặc nhánh ["bản phát triển"](https://blob.build/project/Slimefun/Dev).
Bản ổn định thường đã trải qua kiểm thử đầy đủ trong thời gian dài. Bản phát triển là phiên bản mới nhất của Slimefun mà bạn có thể nhận được.
Nếu máy chủ của bạn phụ thuộc rất nhiều vào phiên bản khả dụng của Slimefun, hãy chọn bản ổn định.
Tuy nhiên, nếu bạn muốn đóng góp cho Slimefun bằng cách báo cáo vấn đề (issues) và giúp chúng tôi xác định chúng, hãy dùng bản phát triển. (Báo cáo vấn đề từ bản ổn định sẽ bị bỏ qua vì chúng đã lỗi thời)
Bạn có thể nhấp vào bất kỳ phiên bản Slimefun nào để xem phiên bản Minecraft mà nó hỗ trợ.

**Chúng tôi thường khuyến nghị bản phát triển hơn bản ổn định, vì chúng là phiên bản mới nhất của Slimefun. Bản ổn định thường chỉ cập nhật mỗi tháng một lần, hoặc với tần suất thấp hơn. Vì vậy bản sửa lỗi có thể mất khá lâu mới được áp dụng vào bản ổn định.**

</details>

### Tải Slimefun 4 bản Việt hóa/Tiếng Trung {#slimefun-4-cn-downloads}

Bản tiếng Trung chính thức của Slimefun chỉ bao gồm bản dịch cho tin nhắn, danh mục và phần nghiên cứu. Hầu hết vật phẩm và giao diện vẫn là tiếng Anh.  
Để Việt hóa những nội dung này, cần sửa đổi mã liên quan. Slimefun bản Việt hóa/Tiếng Trung do StarWishsama duy trì hiện đã phát hành trên GitHub.

Bản Việt hóa có 3 nhánh:

- Nhánh ["bản chính thức" (release)](https://builds.guizhanss.com/StarWishsama/Slimefun4/release) là nhánh phát hành phiên bản mới mỗi tháng một lần (có thể với tần suất thấp hơn), đã qua kiểm thử trong thời gian dài, tính năng khá ổn định.
- Nhánh ["bản thử nghiệm công khai" (Beta)](https://builds.guizhanss.com/StarWishsama/Slimefun4/master) là phiên bản công khai có nội dung mới nhất.
- Nhánh ["bản thử nghiệm nội bộ" (Insider)](https://builds.guizhanss.com/sf-subscription) là nhánh dành cho người dùng đăng ký, chứa tính năng mới nhất và sửa lỗi. Nội dung của nhánh này sẽ được đồng bộ sang bản Beta sau ít nhất 15 ngày. [Nhấp để xem](https://builds.guizhanss.com/sf-subscription) gói đăng ký.

Kho GitHub: [Nhấp để đến](https://github.com/StarWishsama/Slimefun4)

Tất nhiên, nếu máy chủ của bạn đã đang dùng Slimefun bản chính thức, bạn cũng có thể chọn cài [Slimefun Translation](https://builds.guizhanss.com/ybw0014/SlimefunTranslation) để Việt hóa. Tuy nhiên, bản dịch này chỉ bao gồm nội dung hiển thị trong sách hướng dẫn, một số tin nhắn và vật phẩm giao diện người dùng không thể được Việt hóa.

## Cách cài đặt {#how-to-install}

Đặt tệp jar của Slimefun4 vào thư mục `/plugins/` của máy chủ bạn.
Sau đó, khởi động lại máy chủ của bạn.

:::danger Lưu ý

Không bao giờ sử dụng `/reload`, vì nó sẽ gây rò rỉ bộ nhớ nghiêm trọng.

:::

Sau khi khởi động lại máy chủ, bạn sẽ thấy một thư mục mới `/data-storage/` trong thư mục gốc của máy chủ. Thư mục này chứa tất cả dữ liệu Slimefun.
Nếu bạn dự định nâng cấp hoặc di chuyển máy chủ, hoặc tạo bản sao lưu, bạn nên sao lưu đồng thời thư mục này, điều này **rất quan trọng**, vì xóa nó sẽ khiến tất cả dữ liệu Slimefun (như vật phẩm đã mở khóa, dữ liệu máy móc) bị mất.

## Cấu hình Slimefun {#configuring-slimefun}

Phần này sẽ mặc định rằng bạn đã cài đặt thành công Slimefun4 trên máy chủ của mình.

Khi bạn xem thư mục plugin Slimefun, bạn sẽ thấy các tệp `.yml` khác nhau. Dùng trình soạn thảo văn bản yêu thích của bạn để xem `config.yml`.

:::tip

Khuyến nghị sử dụng [VSCode](https://code.visualstudio.com/).

:::

Hầu hết nội dung trong tệp này đều dễ hiểu, bao gồm bật vật phẩm, cách nghiên cứu Slimefun thể hiện trong chế độ sáng tạo.
Slimefun sẽ định kỳ kiểm tra cập nhật và tự động cài đặt. Nếu bạn muốn tắt tính năng này, hoặc máy chủ của bạn cấm sử dụng tính năng tương tự, hãy đặt `auto-update` thành `false`.

**Items.yml** cho phép bạn **toàn cục** bật hoặc tắt một số vật phẩm. Nếu bạn cài nhiều addon Slimefun, tệp này sẽ rất lớn.
Vì vậy, nếu bạn chuẩn bị bật hoặc tắt một số vật phẩm, khuyến nghị bạn đừng cài nhiều addon cùng lúc, hãy thêm từ từ.

**messages.yml** chứa tất cả dữ liệu tin nhắn của Slimefun. Bạn có thể chỉnh sửa tin nhắn plugin gửi tới người chơi khi một sự kiện xảy ra.

**Researches.yml** cho phép bạn chỉnh sửa lượng kinh nghiệm cần để mở khóa nghiên cứu trong Slimefun, cũng như tên của nghiên cứu.
Nếu bạn muốn người chơi có thể dùng tất cả vật phẩm Slimefun ngay từ đầu, bạn cũng có thể tắt tất cả nghiên cứu.

**permissions.yml** cho phép bạn định nghĩa các node quyền cho vật phẩm Slimefun, hạn chế việc sử dụng vật phẩm dựa trên quyền của người dùng.

Sau khi thay đổi cấu hình, bạn phải lưu tệp cấu hình, sau đó khởi động lại máy chủ. Nhấn mạnh lần nữa, **đừng dùng /reload**.
Nếu bạn gặp vấn đề và đã dùng `/reload`, bạn chỉ cần dừng máy chủ và khởi động lại, điều này có thể giải quyết hầu hết vấn đề.

### Tối ưu máy chủ {#server-optimizations}

Đây là một bài viết về cách [tối ưu máy chủ Slimefun của bạn](/Server-Optimizations).

## Addon bổ sung {#additional-addons}

Nếu bạn muốn thêm addon, hãy truy cập [trang này](/Addons) để xem tất cả addon tương thích với phiên bản Slimefun4 hiện tại của bạn.

Các addon này yêu cầu Slimefun4, và sẽ tạo thư mục riêng của chúng trong thư mục `/plugins/` của máy chủ.

Tệp cấu hình của các plugin này nhìn chung đều đơn giản dễ hiểu.
Hãy nhớ, bạn có thể tắt bất kỳ vật phẩm nào từ addon trong tệp **Items.yml** của Slimefun.
