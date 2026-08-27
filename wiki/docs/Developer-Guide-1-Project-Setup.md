# Hướng dẫn phát triển (1. Thiết lập dự án)

Đây là chương đầu tiên của hướng dẫn phát triển của chúng tôi, bạn có thể xem mục lục [tại đây](/Developer-Guide).

## 1. Công cụ cần thiết {#1-the-necessary-tools}

Trước khi phát triển, bạn cần cài đặt các công cụ sau:

1. Java JDK 16+
2. Bất kỳ Java IDE nào (khuyến nghị mạnh mẽ sử dụng IntelliJ IDEA)
3. Apache Maven (IntelliJ IDEA đã tích hợp sẵn)
4. Git (khuyến nghị, dùng để quản lý phiên bản)

Chúng tôi sẽ không giải thích chi tiết cách tải và cài đặt các công cụ này, vui lòng tự sử dụng công cụ tìm kiếm hoặc hỏi AI để giải quyết.
Khi bạn đã cài đặt xong các công cụ này, hãy chuyển sang bước tiếp theo.

## 2. Tạo một kho lưu trữ GitHub mới {#2-create-a-new-github-repository}

Để hoàn thành bước này bạn cần có tài khoản GitHub, chúng tôi đã tạo cho bạn một mẫu addon Slimefun rất đẹp.

Nhấp để truy cập: [Mẫu addon chính thức của Slimefun](https://github.com/Slimefun/Addon-Template) | [Mẫu của nhóm Hán hóa tiếng Trung giản thể](https://github.com/Servernotdie/Addon-Template)

Chọn một mẫu, sau đó mở trang của mẫu đó. Nhấp vào **Use this template** để sử dụng mẫu đó tạo kho lưu trữ mới của bạn.
Bạn cần điền tên addon của mình (bằng tiếng Anh) trong trang, cùng với các tùy chọn khác.

Sau khi điền xong, nhấp vào **Create repository from template** là xong.

## 3. Thiết lập dự án {#3-setting-up-your-project}

Bây giờ, dự án của bạn đã có một kho lưu trữ GitHub, bạn có thể clone nó về máy và nhập vào IDE.
Bạn nên tìm hiểu cách nhập dự án bằng IDE mà bạn đã chọn ở phần đầu.
Hãy đảm bảo bạn đã cấu hình dự án đúng trong IDE, sau đó bạn cần đẩy nội dung lên GitHub.

### Maven

Bây giờ, chúng ta cần nói sơ qua về Maven.

Maven là một trình quản lý phụ thuộc được nhiều dự án Java sử dụng. Dự án mẫu của chúng tôi đã bao gồm một thiết lập Maven đã được cấu hình sẵn.
Nhưng bạn cần đảm bảo dự án của bạn được IDE đọc chính xác như một dự án Maven. Bạn có thể tìm hiểu cách cấu hình dự án Maven trong IDE của mình.
Dự án của bạn sẽ sử dụng Maven để biên dịch, đóng gói, nếu bạn muốn chia sẻ hoặc phát hành addon của mình, bạn sẽ cần Maven.

### Giấy phép {#license}

Bạn nên chọn một giấy phép cho dự án của mình. Chúng tôi khuyến nghị bạn chọn một giấy phép nguồn mở, như vậy bất kỳ ai cũng có thể đóng góp mã cho dự án của bạn.
Bạn có thể chọn giấy phép nguồn mở phù hợp cho dự án của mình tại trang web [ChooseALicense.com](https://ChooseALicense.com/).
Nếu bạn không muốn phải bận tâm về việc chọn giấy phép nguồn mở, chúng tôi khuyến nghị bạn sử dụng [Giấy phép MIT](https://choosealicense.com/licenses/mit/).

Để chọn giấy phép, chỉ cần tạo một tệp mới `LICENSE` (không có hậu tố) trong thư mục gốc của dự án và sao chép văn bản giấy phép vào tệp đó.

### Tệp Readme {#readme}

Dự án của bạn cần một tệp readme (`README.md`).
Tệp readme của dự án mẫu của chúng tôi giới thiệu cách cấu hình dự án của bạn (cũng sẽ được đề cập trong phần 4 của hướng dẫn).
Nhưng bạn nên giới thiệu dự án của mình trong tệp readme và bao gồm một số liên kết liên quan, ví dụ như bài đăng phát hành hoặc liên kết tải xuống.

Tệp readme sẽ được hiển thị khi người dùng truy cập kho lưu trữ của bạn, vì vậy hãy làm cho nó đẹp một chút.

## 4. Bước rất quan trọng {#4-very-important-step}

Bước này rất quan trọng.
Hiện tại, dự án của bạn vẫn còn nhiều chỗ cần thay thế.
Mở `pom.xml` trong thư mục gốc của dự án, ở phần đầu tệp, bạn sẽ thấy 4 phần sau

### groupId của bạn {#your-groupid}

Mỗi dự án Java đều có một tên gói (package id) hoặc tên nhóm (group id).
Tên này dùng để xác định bạn là một nhà phát triển cá nhân hoặc đại diện cho một tổ chức.
Tên này phải viết thường toàn bộ, dưới đây là một số ví dụ:

- `me.ybw0014` (bắt đầu bằng me thường đại diện cho cá nhân)
- `dev.ybw0014` (nếu bạn sở hữu trang web, sử dụng tên miền đảo ngược của trang web)
- `com.google.example` (nếu bạn thuộc một tổ chức, ví dụ như Google, thì sử dụng định dạng này. Đừng mạo danh bất kỳ tổ chức nào, chỉ sử dụng định dạng này khi dự án của bạn được tạo dưới danh nghĩa tổ chức)
- `io.github.ybw0014` (nếu kho lưu trữ của bạn được lưu trữ trên GitHub và là nguồn mở, bạn có thể chọn sử dụng định dạng này)

Đối với hầu hết các nhà phát triển, chúng tôi khuyến nghị sử dụng `me.tên_của_bạn` làm tên gói (hãy nhớ, viết thường toàn bộ, sử dụng `_` để biểu thị dấu cách).

:::warning

Hãy nhớ tên gói này, chúng ta sẽ dùng đến nó sau.

:::

### projectId của bạn {#your-projectid}

Mỗi dự án Java đều có một tên dự án (project id).
Tên dự án sẽ được kết hợp với tên gói thành định danh gói của bạn, nó phải là duy nhất.

Tên dự án của bạn nên nhất quán với tên dự án, ví dụ như `CoolAddon`.
Cần lưu ý, tên dự án không nhất thiết phải viết thường toàn bộ như tên nhóm.

:::warning

Hãy nhớ tên dự án này, chúng ta sẽ dùng đến nó sau.

:::

### pom.xml của bạn {#your-pomxml}

`pom.xml` là trái tim của bất kỳ dự án Maven nào.
Bây giờ, bạn cần sử dụng tên gói và tên dự án đã xác định trước đó.
Phần đầu tệp `pom.xml` của bạn nên có nội dung sau:

```xml
    <modelVersion>4.0.0</modelVersion>
    <groupId>me.CHANGEME</groupId>
    <artifactId>SlimefunAddon</artifactId>
    <version>1.0.0</version>
```

Hãy đổi `groupId` và `artifactId` lần lượt thành tên gói và tên dự án của bạn.
Bây giờ, phần đầu tệp `pom.xml` của bạn sẽ trông như thế này:

```xml
    <modelVersion>4.0.0</modelVersion>
    <groupId>me.ybw0014</groupId>
    <artifactId>CoolAddon</artifactId>
    <version>1.0.0</version>
```

:::warning

Đừng quên tên gói và tên dự án, phía sau còn sẽ dùng đến.

:::

### plugin.yml của bạn {#your-pluginyml}

`plugin.yml` là trái tim của bất kỳ plugin Bukkit nào.
Nó nằm tại `src/main/resources/plugin.yml`.
Nó trông như thế này:

```yml
name: SlimefunAddon
version: ${project.version}
author: CHANGEME
description: A generic Slimefun4-Addon
website: https://github.com/Slimefun/Addon-Template

main: me.CHANGEME.slimefunaddon.SlimefunAddon
depend: [Slimefun]

api-version: 1.14
```

1. Đặt `name` thành tên dự án của bạn.
2. Đặt `author` thành tên của bạn.
3. Giới thiệu ngắn gọn về plugin của bạn trong `description`.
4. Đặt trang chủ `website` cho dự án của bạn, bạn có thể xóa dòng này hoặc điền địa chỉ trang GitHub/Spigot của dự án.

Bước **quan trọng** nhất, đổi `main` thành nội dung sau:
main: `tên gói` + . + `tên dự án` (viết thường toàn bộ) + . + `tên dự án`

Bước này có thể khiến bạn hơi bối rối, vì vậy chúng tôi cung cấp một ví dụ:

Tên gói: `net.guizhanss`
Tên dự án: `GuizhanCraft`
main: `net.guizhanss.guizhancraft.GuizhanCraft`

Bây giờ `plugin.yml` của bạn sẽ trông như thế này:

```yml
name: GuizhanCraft
version: ${project.version}
author: ybw0014
description: Một addon hữu ích
website: https://github.com/GuizhanCraft/GuizhanCraft

main: net.guizhanss.guizhancraft.GuizhanCraft
depend: [Slimefun]

api-version: 1.14
```

Còn một bước cuối cùng, phần này coi như hoàn tất.

### Gói mã của bạn {#your-package}

Chúng ta sẽ bắt đầu tiếp xúc với một số tệp mã.
Chúng ta chưa thực sự bắt đầu viết mã, nhưng chúng ta vẫn cần cấu hình gói mã để khớp với những thay đổi đã thực hiện trước đó.

Mở thư mục `src/main/java`, bạn sẽ thấy một gói như thế này: `me.CHANGEME.slimefunaddon`.
Đổi tên gói này thành: `tên gói` + . + `tên dự án` (viết thường toàn bộ).
Nếu theo ví dụ trước thì là `net.guizhanss.guizhancraft`.

Mở gói này, bạn có thể thấy tệp `SlimefunAddon.java`. Đổi tên tệp này thành `tên dự án.java` (hãy nhớ giữ hậu tố).
Bây giờ tên tệp sẽ trông như thế này: `GuizhanCraft.java`.

Nếu bạn đã thiết lập kho lưu trữ Git, thì bạn có thể commit và push các sửa đổi của mình lên kho lưu trữ GitHub.
Trên mạng có rất nhiều hướng dẫn. Bạn nên thường xuyên commit và push các thay đổi của mình, như vậy tiến độ cục bộ của bạn có thể đồng bộ với kho lưu trữ GitHub. Điều này cũng giúp người khác dễ dàng tham gia vào dự án của bạn.

Mọi thứ đã sẵn sàng! Bạn đã hoàn tất cấu hình addon.

## 5. Khóa phiên bản phụ thuộc của bạn {#5-locking-your-dependency-versions}

`pom.xml` trong mẫu của chúng tôi đã khóa phiên bản của phụ thuộc Slimefun, bạn có thể chọn bỏ qua phần này hoặc đọc [tài liệu chính thức](https://github.com/Slimefun/Slimefun4/wiki/Developer-Guide-(1-Project-Setup)#5-locking-your-dependency-versions).
