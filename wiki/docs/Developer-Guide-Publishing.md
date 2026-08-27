# Hướng dẫn phát triển (Phát hành) {#developer-guide-publishing}

Đây là **phần cuối cùng** của hướng dẫn phát triển của chúng tôi, bạn có thể xem mục lục [tại đây](/Developer-Guide).

## Điều kiện tiên quyết {#prerequisites}

Để phát hành addon của bạn, bạn không cần quá nhiều thứ.
Thực ra, bạn chỉ cần viết xong addon của mình. Tuy nhiên, ở đây có một số mẹo và thực hành tốt nhất.
Khi bạn cảm thấy addon của mình đã sẵn sàng để phát hành (phát hành sớm luôn tốt hơn là quá muộn), hãy cố gắng ghi nhớ những điểm sau:

### 1. Dự án của bạn có tệp giấy phép (`LICENSE`) {#1-your-project-has-a-license-file}

Nếu dự án của bạn không có giấy phép, thì mặc định là **giữ lại mọi quyền**.
Ngay cả khi bạn muốn giữ mọi quyền của dự án cho riêng mình, việc tuyên bố rõ ràng điều này cũng là một ý tưởng hay.

Nếu bạn cần giúp đỡ trong việc chọn giấy phép, vui lòng xem [ChooseALicense.com](https://choosealicense.com/).

### 2. Bạn biết cách biên dịch dự án của mình {#2-you-know-how-to-compile-your-project}

Để addon của bạn có thể được tải lên và phát hành, bạn cần phân phối tệp `.jar` đã biên dịch của addon của mình.
Nếu bạn sử dụng Maven để quản lý dự án của mình (như chúng tôi đã khuyến nghị trong [phần đầu tiên](/Developer-Guide-1-Project-Setup)), bạn chỉ cần chạy lệnh sau trong thư mục gốc của dự án:

```bash
mvn clean package
```

Điều này sẽ tạo ra một tệp `.jar` trong thư mục `target/` trong thư mục dự án, đây chính là addon đã được biên dịch.

### 3. Dự án của bạn có một mô tả hay {#3-your-project-has-a-good-description}

Mỗi dự án nên có một mô tả hay.
Hãy cho người dùng biết họ sẽ nhận được gì khi cài đặt addon của bạn.
Nhớ cung cấp danh sách lệnh, quyền và tính năng!

Bạn có thể tạo tệp `README.md` trong kho lưu trữ GitHub của mình, hoặc cung cấp mô tả trên trang chủ dự án, hoặc cả hai!

## Tải dự án lên {#uploading-the-project}

Để tải dự án của bạn lên, trước tiên bạn cần chọn một nền tảng để phân phối nó.
Bạn hoàn toàn có thể tự chọn nơi dự án của mình nên được tải lên.

Các nền tảng phân phối phổ biến nhất bao gồm:

- [SpigotMC](https://www.spigotmc.org/resources/)
- [BukkitDev](https://dev.bukkit.org/bukkit-plugins)
- [Diễn đàn PaperMC](https://papermc.io/forums/c/plugin-releases/15)
- [Polymart](https://polymart.org/resources)
- [GitHub Releases](https://docs.github.com/en/free-pro-team@latest/github/administering-a-repository/managing-releases-in-a-repository#creating-a-release)

Bạn cũng có thể sử dụng các nền tảng phân phối liên quan đến Slimefun:

- [Trang builds của TheBusyBicuit](https://github.com/TheBusyBiscuit/builds#how-to-add-your-own-repository): một trang tự động kéo mã từ kho lưu trữ công khai GitHub và tự tăng số phiên bản build (hiện đã bị bỏ, do dung lượng lưu trữ GitHub Pages đạt giới hạn và không thể cập nhật nữa)
- [Blob Build](https://blob.build/developers): một trang có thể tự tải bản build lên, như một sự thay thế cho *trang builds của TheBusyBicuit*.
- [Trang build Quỷ Trảm](https://github.com/ybw0014/guizhan-builds-2/blob/master/README_repos.md): một trang tự động kéo mã từ kho lưu trữ công khai GitHub và tự tăng số phiên bản build.

## Lan truyền dự án của bạn {#spreading-the-word}

Một khi dự án của bạn đã được tải lên thành công, hãy nói cho người khác biết nhé!

Chúng tôi khuyến nghị tất cả các nhà phát triển addon trưng bày addon trên trang [addon](/Addons) của Wiki chính thức và Wiki tiếng Trung.
Xem chi tiết tại [mở rộng Wiki](/Expanding-the-Wiki).

Bạn cũng có thể quảng bá dự án của mình trên [máy chủ Discord](https://discord.gg/slimefun) của chúng tôi.
Tải lên video hoặc ảnh chụp màn hình để thu hút người dùng! Tuy nhiên, vui lòng không ping bất kỳ ai.
