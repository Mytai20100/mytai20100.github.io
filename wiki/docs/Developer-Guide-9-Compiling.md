# Hướng dẫn phát triển (9. Biên dịch)

Đây là một phần của hướng dẫn phát triển của chúng tôi, bạn có thể xem mục lục [tại đây](/Developer-Guide).

Hướng dẫn này giả định bạn sử dụng Maven để quản lý dự án của mình.

## Biên dịch {#compiling}

Để thử nghiệm addon của bạn, bạn cần biên dịch addon thành một tệp `.jar` (tệp mà máy chủ có thể nhận dạng là plugin).
Nếu bạn sử dụng Maven để quản lý dự án của mình (như chúng tôi đã khuyến nghị trong [phần đầu tiên](/Developer-Guide-1-Project-Setup)), bạn chỉ cần chạy lệnh sau trong thư mục gốc của dự án:

```bash
mvn clean package
```

Điều này sẽ tạo ra một tệp `.jar` trong thư mục `target/` trong thư mục dự án, đây chính là addon đã được biên dịch.

IntelliJ cũng cung cấp phương thức biên dịch plugin.
Ở phía bên phải của cửa sổ trình soạn thảo, nhấp vào nút `Maven`. (Nếu không có nút này, vui lòng điều hướng đến `View > Tool Windows > Maven` trong thanh điều hướng trên cùng)
Bây giờ, trong thư mục dự án, mở thư mục `Lifecycle` và nhấp đúp vào `clean`. Sau khi hoàn thành, nhấp đúp vào `package`.
Như vậy, tệp `.jar` đã biên dịch có thể được tìm thấy trong thư mục `target/` của dự án.

## Tạo môi trường thử nghiệm {#creating-a-testing-environment}

Tiếp theo, chúng ta cần tạo một môi trường thử nghiệm, để chúng ta có thể thử nghiệm addon của mình.
Chúng tôi khuyến nghị bạn sử dụng [Paper](https://papermc.io/downloads) làm phần mềm máy chủ của mình.
Cần lưu ý, Slimefun và các addon của nó chỉ hỗ trợ Paper và các phiên bản phái sinh của nó.

Máy chủ là một tệp `.jar`.
Tạo một thư mục mới ở đâu đó, dành riêng cho máy chủ của bạn, và đặt tệp `.jar` máy chủ đã tải xuống vào thư mục.

Bây giờ, mở dòng lệnh và chuyển đến thư mục máy chủ, sau đó chạy lệnh sau:

```bash
java -jar [tên tệp jar].jar
```

Điều này sẽ tạo một tệp `eula.txt` trong thư mục máy chủ. Bạn phải mở và đổi `false` ở dòng cuối cùng thành `true` mới có thể chạy máy chủ.
Bây giờ, chạy lại lệnh trên, điều này sẽ khởi động máy chủ của bạn.

Bây giờ bạn có thể thấy một thư mục mới `plugins/`, đây là nơi bạn sẽ đặt Slimefun, addon của bạn và các plugin khác.
Đặt tệp `.jar` của Slimefun và addon của bạn vào thư mục này.

Chạy lệnh `stop` trong bảng điều khiển, sau đó chạy lại máy chủ. Nếu mọi thứ đều ổn, thì máy chủ của bạn đã chạy addon của bạn rồi.

## Thử addon của bạn {#trying-out-your-addon}

Bây giờ, bạn có thể khởi động Minecraft và tham gia máy chủ đang chạy.
Trong tab *Chơi nhiều người*, thêm một máy chủ mới, địa chỉ là `localhost`.
Bạn sẽ có thể tham gia một máy chủ có Slimefun và addon của bạn. Để xác minh điều này, hãy chạy `/sf versions` để hiển thị Slimefun và các addon đã cài đặt.
Nếu addon của bạn xuất hiện, thì đã thành công!

## Biên dịch lại {#recompiling}

Giả sử bạn đã thực hiện thay đổi đối với addon của mình, dù là thêm vật phẩm mới hay sửa lỗi, bạn đều cần biên dịch lại addon của mình.

Sau khi bạn thực hiện thay đổi, hãy chạy lại `mvn clean package` hoặc sử dụng plugin Maven của IntelliJ để biên dịch addon của bạn.
Sau đó, tệp `.jar` được biên dịch lại có thể được tìm thấy trong thư mục `target/`.
Bây giờ, dừng máy chủ, xóa tệp `.jar` addon cũ và đặt tệp `.jar` mới vào. Sau đó chạy lại máy chủ.

Nếu bạn có bất kỳ câu hỏi nào, có thể hỏi bất cứ lúc nào trong kênh `#programming-help` trên máy chủ Discord.

## Phát hành {#publishing}

Nếu bạn muốn phát hành addon của mình, bạn có thể đọc [hướng dẫn này](/Developer-Guide-Publishing).
