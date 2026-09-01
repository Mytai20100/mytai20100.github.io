---
sidebar_position: 1
---

# Thông tin Tải Plugin

```yaml title="sc-addon.yml"
depend:
  - Slimefun
```

Tệp cấu hình này chứa thông tin tải của addon Slimefun Tùy chỉnh. Điều này thường được sử dụng khi chia sẻ gói tệp cấu hình để đảm bảo tất cả các plugin được sử dụng đã được bật.

Nếu bất kỳ plugin nào trong danh sách chưa được bật, plugin này sẽ không được bật.

:::tip

Bạn có thể xóa Slimefun (dù sao không có Slimefun thì addon này cũng không chạy).

:::

:::note Ví dụ

Nếu tệp cấu hình của bạn tham chiếu đến vật phẩm trong addon Vô hạn Tham lam, bạn cần thêm tên của Vô hạn Tham lam, tức là tên được định nghĩa trong plugin.yml là `InfinityExpansion`.

```yaml
depend:
  - Slimefun
  - InfinityExpansion
```

:::

## Cách xem tên Plugin

Lấy tên plugin thông qua lệnh `/plugins` hoặc `/sf versions`.
