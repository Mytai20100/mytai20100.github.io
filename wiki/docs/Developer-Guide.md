---
sidebar_label: Viết addon của riêng bạn
---

# Hướng dẫn dành cho nhà phát triển {#developer-guide}

Hướng dẫn dành cho nhà phát triển chính thức: [Developer Guide (tiếng Anh)](https://github.com/Slimefun/Slimefun4/wiki/Developer-Guide)

-----

Chào mừng bạn đến với hướng dẫn dành cho nhà phát triển của chúng tôi!
Trang này vẫn đang được hoàn thiện. Hướng dẫn dành cho nhà phát triển là một chủ đề rất lớn, ước tính sẽ cần một thời gian rất dài để hoàn thành.

## Điều kiện đọc / Đối tượng áp dụng {#prerequisites}

Trước khi bạn đọc hướng dẫn dành cho nhà phát triển, vui lòng đọc phần này trước.

Chúng tôi cố gắng hướng tới các nhà phát triển ở mọi giai đoạn, ngay cả những người mới chỉ có rất ít kinh nghiệm.
Tuy nhiên, chúng tôi không muốn làm lại bánh xe, trên mạng đã có rất nhiều hướng dẫn học Java và viết plugin Bukkit.

Chúng tôi sẽ mặc định bạn đã hiểu biết về Java, Maven, Git và lập trình hướng đối tượng (Object-orientation Programming).
Nếu bạn chưa từng nghe về những điều này, thì khuyến nghị bạn nên tìm hiểu kiến thức liên quan trước, sau đó mới xem hướng dẫn này.

Chúng tôi sẽ cố gắng hết sức để giải thích, vì vậy hãy đọc kỹ tất cả các trang.
Bạn có thể tham khảo các câu hỏi liên quan đến lập trình trong kênh `#programming-help` trên máy chủ Discord chính thức, nhớ sử dụng tiếng Anh.
Nhấp vào đây để tham gia máy chủ Discord chính thức: [Nhấp để tham gia](https://discord.gg/slimefun)

Bạn cũng có thể xem [Javadocs](https://slimefun.github.io/javadocs) của chúng tôi để lấy thông tin kỹ thuật về thiết kế API, nhưng chúng tôi vẫn khuyến nghị bạn đọc hướng dẫn này trước.

Nếu bạn hoàn toàn không có nền tảng Java, nhưng vẫn muốn viết addon, thì bạn có thể thử sử dụng [SlimeCustomizer - Tùy chỉnh addon Slimefun](https://slimefun-addons-wiki.guizhanss.cn/slime-customizer/). Yêu cầu kỹ thuật của SlimeCustomizer chỉ là viết tệp Yaml, không cần bất kỳ kiến thức Java nào.

## Mục lục {#table-of-contents}

1. [Thiết lập dự án](/Developer-Guide-1-Project-Setup)
2. [Tạo addon](/Developer-Guide-2-Creating-the-Addon)
3. [Vật phẩm đầu tiên của bạn](/Developer-Guide-3-Your-first-Item)
4. Thêm tính năng cho vật phẩm của bạn
   - [Thực hiện hành động khi nhấp chuột phải vào vật phẩm hoặc khối](/Developer-Guide-4a-Right-Clicks)
   - [Làm cho vật phẩm có tính phóng xạ và chống Wither](/Developer-Guide-4b-Radioactive-and-WitherProof)
5. [Thêm nghiên cứu của riêng bạn](/Developer-Guide-5-Researches)
6. [Đầu tùy chỉnh](/Developer-Guide-6-Custom-Heads)
7. [Thêm tài nguyên GEO vào Máy Khai Thác Tài Nguyên GEO](/Developer-Guide-7-GEO-Resources)
8. Tạo máy điện
   - Tạo máy đầu vào/đầu ra đơn giản (sắp ra mắt)
   - Tạo máy phát điện của riêng bạn (sắp ra mắt)
9. [Biên dịch và thử nghiệm addon](/Developer-Guide-9-Compiling)

*. [Phát hành addon của bạn](/Developer-Guide-Publishing)
