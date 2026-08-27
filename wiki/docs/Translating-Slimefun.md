---
sidebar_label: Giúp chúng tôi dịch Slimefun!
---

# Dịch Slimefun {#translating-slimefun}

:::info

Trang này áp dụng cho Slimefun chính thức. Nếu bạn đang sử dụng bản Slimefun đã được Việt hóa, bạn có thể bỏ qua trang này.

:::

Việc dịch Slimefun luôn là một vấn đề khó khăn, vì có một số lựa chọn thiết kế sai lầm trong mã nguồn từ nhiều năm trước.  
Nhưng kể từ tháng 2 năm 2020, các phiên bản sau này đều hỗ trợ dịch thuật.

:::tip Lưu ý quan trọng

Hiện tại, bạn chỉ có thể dịch tin nhắn chat, tên danh mục và cách tổng hợp. Bạn không thể dịch tên vật phẩm.  
Việc dịch tên vật phẩm đòi hỏi phải viết lại một lượng lớn mã, có thể cần một năm hoặc hơn để hoàn thành.  
Vui lòng không hỏi bất kỳ câu hỏi nào về việc dịch tên vật phẩm. Xin hãy kiên nhẫn chờ đợi, cảm ơn sự hợp tác của bạn!

:::

## Thay đổi ngôn ngữ máy chủ của bạn {#changing-your-server-language}

Bạn có thể thay đổi ngôn ngữ mặc định của máy chủ trong `config.yml`:

```yaml
options:
  language: en
```

Thay `en` bằng mã ngôn ngữ tương ứng với ngôn ngữ bạn muốn chọn. Bạn có thể tìm thấy tất cả các ngôn ngữ được hỗ trợ ở phía dưới trang này.

Xin lưu ý rằng điều này sẽ ghi đè file `messages.yml`.

Nếu bạn muốn tùy chỉnh thông điệp của ngôn ngữ đã chọn, chỉ cần chỉnh sửa `messages.yml` sau khi thay đổi ngôn ngữ và khởi động lại máy chủ.

`messages.yml` chỉ được cập nhật sau khi bạn quyết định thay đổi ngôn ngữ mặc định của máy chủ.
Nội dung mới thêm vào `messages.yml` sẽ được nối ở cuối file, sẽ không có vấn đề gì.

## Thay đổi ngôn ngữ cá nhân của bạn {#changing-your-personal-language}

Mỗi người chơi đều có thể chọn ngôn ngữ ưa thích của riêng mình. Ngôn ngữ ưa thích của mỗi người mặc định đồng bộ với cài đặt ngôn ngữ của máy chủ.

Nếu bạn có nhiều bạn bè quốc tế, họ có thể dùng cài đặt ngôn ngữ ưa thích để ghi đè ngôn ngữ mặc định.

Chỉ cần mở trang "Cài đặt" của Sách Hướng Dẫn Slimefun (khi đang cầm Sách Hướng Dẫn Slimefun, có thể mở bằng *Shift + nhấp chuột phải*), sau đó bạn sẽ tìm thấy biểu tượng trái đất hoặc lá cờ, nhấp vào nó để chọn ngôn ngữ.

## Ngôn ngữ khả dụng {#available-languages}

Xin lưu ý, chỉ những ngôn ngữ được đánh dấu là **đã phát hành** mới có thể chạy an toàn trên máy chủ của bạn.

Những ngôn ngữ chưa phát hành vẫn đang chờ xét duyệt hoặc chưa hoàn thành dịch.

Phiên bản phát triển của Slimefun có thể đã hỗ trợ một số ngôn ngữ chưa phát hành.
**Đừng đặt ngôn ngữ chưa phát hành làm ngôn ngữ mặc định của máy chủ!**

Hoan nghênh tham gia dịch thuật!

| Đã phát hành | Ngôn ngữ | Mã ngôn ngữ |
| --- | ---------- | --- |
| :heavy_check_mark: | English | `en` |
| :heavy_check_mark: | [German](https://crowdin.com/project/slimefun/de) | `de` |
| :heavy_check_mark: | [French](https://crowdin.com/project/slimefun/fr) | `fr` |
| :heavy_check_mark: | [Italian](https://crowdin.com/project/slimefun/it) | `it` |
| :heavy_check_mark: | [Spanish](https://crowdin.com/project/slimefun/es) | `es` |
| :x: | [Polish](https://crowdin.com/project/slimefun/pl) | `pl` |
| :heavy_check_mark: | [Swedish](https://crowdin.com/project/slimefun/sv) | `sv` |
| :x: | [Dutch](https://crowdin.com/project/slimefun/nl) | `nl` |
| :heavy_check_mark: | [Russian](https://crowdin.com/project/slimefun/ru) | `ru` |
| :heavy_check_mark: | [Hungarian](https://crowdin.com/project/slimefun/hu) | `hu` |
| :x: | [Greek](https://crowdin.com/project/slimefun/el) | `el` |
| :heavy_check_mark: | [Czech](https://crowdin.com/project/slimefun/cs) | `cs` |
| :x: | [Latvian](https://crowdin.com/project/slimefun/lv) | `lv` |
| :heavy_check_mark: | [Slovak](https://crowdin.com/project/slimefun/sk) | `sk` |
| :heavy_check_mark: | [Chinese (China)](https://crowdin.com/project/slimefun/zh-CN) | `zh-CN` |
| :heavy_check_mark: | [Chinese (Taiwan)](https://crowdin.com/project/slimefun/zh-TW) | `zh-TW` |
| :x: | [Portugese (Portugal)](https://crowdin.com/project/slimefun/pt) | `pt` |
| :heavy_check_mark: | [Portugese (Brazil)](https://crowdin.com/project/slimefun/pt-BR) | `pt-BR` |
| :heavy_check_mark: | [Vietnamese](https://crowdin.com/project/slimefun/vi) | `vi` |
| :heavy_check_mark: | [Indonesian](https://crowdin.com/project/slimefun/id) | `id` |
| :x: | [Hebrew](https://crowdin.com/project/slimefun/he) | `he` |
| :heavy_check_mark: | [Arabic](https://crowdin.com/project/slimefun/ar) | `ar` |
| :x: | [Danish](https://crowdin.com/project/slimefun/da) | `da` |
| :x: | [Finnish](https://crowdin.com/project/slimefun/fi) | `fi` |
| :x: | [Norwegian](https://crowdin.com/project/slimefun/no) | `no` |
| :heavy_check_mark: | [Ukrainian](https://crowdin.com/project/slimefun/uk) | `uk` |
| :x: | [Afrikaans](https://crowdin.com/project/slimefun/af) | `af` |
| :x: | [Malay](https://crowdin.com/project/slimefun/ms) | `ms` |
| :heavy_check_mark: | [Japanese](https://crowdin.com/project/slimefun/ja) | `ja` |
| :x: | [Persian](https://crowdin.com/project/slimefun/fa) | `fa` |
| :heavy_check_mark: | [Thai](https://crowdin.com/project/slimefun/th) | `th` |
| :heavy_check_mark: | [Tagalog](https://crowdin.com/project/slimefun/tl) | `tl` |
| :x: | [Romanian](https://crowdin.com/project/slimefun/ro) | `ro` |
| :x: | [Bulgarian](https://crowdin.com/project/slimefun/bg) | `bg` |
| :heavy_check_mark: | [Turkish](https://crowdin.com/project/slimefun/tr) | `tr` |
| :heavy_check_mark: | [Korean](https://crowdin.com/project/slimefun/ko) | `ko` |
| :x: | [Macedonian](https://crowdin.com/project/slimefun/mk) | `mk` |
| :x: | [Croatian](https://crowdin.com/project/slimefun/hr) | `hr` |
| :x: | [Belarusian](https://crowdin.com/project/slimefun/be) | `be` |

### Bạn muốn giúp chúng tôi dịch thuật? {#you-want-to-help-us-translate}

Chỉ cần nhấp vào ngôn ngữ bạn muốn giúp dịch, bạn sẽ được chuyển hướng đến [Crowdin](https://crowdin.com/project/slimefun/). Tất cả nội dung dịch thuật đều được lưu trữ tại đó.

Sau khi bạn hoàn thành bản dịch, hãy nhấp vào **Create review request** để gửi bản dịch của bạn.

Chúng tôi sẽ xét duyệt thay đổi của bạn và thêm chúng vào plugin này.

### Không thấy ngôn ngữ của bạn? {#you-dont-see-your-language}

Nếu chúng tôi chưa hỗ trợ ngôn ngữ của bạn, vui lòng truy cập [máy chủ Discord](https://discord.gg/slimefun) của chúng tôi.

Hãy cho chúng tôi biết trong kênh `#questions` rằng bạn muốn giúp chúng tôi dịch Slimefun bằng ngôn ngữ của bạn. Nhưng xin lưu ý, đừng ping bất kỳ quản trị viên nào, chúng tôi sẽ thấy tin nhắn của bạn. Vui lòng kiên nhẫn chờ đợi, chúng tôi cần thời gian để xử lý yêu cầu của bạn.
