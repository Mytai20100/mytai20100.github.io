# Hướng dẫn phát triển (2. Tạo addon)

Đây là chương thứ hai của hướng dẫn phát triển của chúng tôi, bạn có thể xem mục lục [tại đây](/Developer-Guide).
Nếu bạn chưa xem nội dung trước đó, vui lòng đọc chúng trước.

## 1. Lớp chính của bạn {#1-your-main-class}

Dự án của bạn đã được thiết lập xong, bây giờ có thể bắt đầu viết mã.

Mở lớp chính, bây giờ nó trông như thế này:

```java
package ...;

import ...;

public class ExampleAddon extends JavaPlugin implements SlimefunAddon {

    @Override
    public void onEnable() {
        // ...
    }

    @Override
    public void onDisable() {
        // logic vô hiệu hóa plugin...
    }

    @Override
    public String getBugTrackerURL() {
        // bạn có thể trả về URL trình theo dõi vấn đề của mình ở đây thay vì null
        return null;
    }

    @Override
    public JavaPlugin getJavaPlugin() {
        /*
         * bạn cần trả về tham chiếu đến plugin của mình.
         * Nếu đây là lớp chính của plugin, chỉ cần trả về "this" là được.
         */
        return this;
    }

}
```

Từ khóa `package` định nghĩa gói mà lớp này nằm trong.
Từ khóa `import` cho Java biết lớp này tham chiếu đến những lớp bên ngoài nào, bạn sẽ thấy rất nhiều tham chiếu đến từ `io.github.thebusybiscuit.slimefun4...` hoặc `org.bukkit...`.
Đó là vì bạn sẽ sử dụng các lớp này khi phát triển.

Tiếp theo, là định nghĩa lớp chính của bạn, tên lớp nhất quán với tên tệp của bạn (không bao gồm hậu tố), sau đó là `extends JavaPlugin`, cho biết đây là một plugin Bukkit.
Cuối cùng `implements SlimefunAddon` cho biết đây là một addon Slimefun.

Lớp này chứa hai phương thức.
`onEnable` sẽ được thực thi khi plugin được bật, thường chứa các thao tác khởi tạo khác nhau.
`onDisable` sẽ được thực thi khi plugin bị vô hiệu hóa, thường là khi máy chủ tắt. Bạn có thể tạm thời bỏ qua những thứ này bây giờ.

## 2. Phương thức `onEnable` - lớp `Config` {#2-the-onenable-method---config}

Trong mẫu, phương thức `onEnable` đã chứa rất nhiều thứ.
Chúng tôi sẽ giải thích từng phần theo thứ tự, nhưng bây giờ chúng ta sẽ nói về phần đầu tiên.

```java
@Override
public void onEnable() {
    // đọc cấu hình plugin từ config.yml
    Config cfg = new Config(this);
}
```

Bạn có thể sử dụng lớp `Config` và sử dụng `new Config(this)` để đọc cấu hình từ tệp cấu hình.
Tệp `src/main/resources/config.yml` là nội dung tệp cấu hình mặc định.

Lớp `Config` đến từ [Slimefun/dough](https://github.com/Slimefun/dough/blob/main/dough-config/src/main/java/io/github/bakedlibs/dough/config/Config.java), do đó bạn thường sẽ không thấy nó trong các dự án không phải Slimefun khác.
Bạn có thể trực tiếp lấy giá trị được chỉ định từ tệp cấu hình bằng cách sử dụng lớp getter được chỉ định:

```java
cfg.getBoolean("path.to.your.boolean");
cfg.getString("path.to.your.string");
```

Bạn có thể sử dụng `Config` để thiết lập các giá trị mà chủ máy chủ có thể tự do điều chỉnh.

:::warning Lưu ý quan trọng

Nếu IDE của bạn phàn nàn không tìm thấy lớp `Config`, thì bạn cần tham chiếu nó từ gói `io.github.thebusybiscuit.slimefun4.libraries.dough.config`.
Bạn cần tham chiếu mọi lớp bên ngoài mà bạn sử dụng.

:::
