---
sidebar_position: 21
---

# Máy Khai Thác

Máy khai thác là máy có thể tự động khai thác khoáng sản ở Overworld và Nether, các cấp độ máy khai thác khác nhau có thể khai thác các loại khoáng sản khác nhau.

## Cài đặt

Bạn có thể thay đổi cấu hình liên quan đến máy khai thác trong tệp cấu hình của InfinityExpansion (`/plugins/InfinityExpansion/config.yml`):

Trong `quarry-options`, bạn có thể điều chỉnh:

- `ticks-per-output`: Cứ bao nhiêu tick Slimefun thì xuất ra một lần, mặc định 1 tick Slimefun = 0.5 giây
- `output-nether-materials-in-overworld`: Có cho phép máy khai thác không ở Nether xuất ra sản phẩm của Nether (thạch anh, đá Nether, Netherite) hay không
- `resources`: Thiết lập sản phẩm của máy khai thác

## Thông tin

Hiện tại máy khai thác có 4 cấp độ. Máy càng cao cấp thì xác suất xuất ra khoáng sản cao cấp càng cao.

| Cấp độ | Tốc độ | Tiêu thụ điện | Mô tả |
| ---- | --- | ------ | ------ |
| Cơ bản | 1x | 300 J/t | Có thể khai thác khoáng sản Overworld |
| Cao cấp | 2x | 900 J/t | Có thể khai thác khoáng sản Overworld và Nether |
| Hư không | 6x | 3.600 J/t | Có thể khai thác khoáng sản Overworld và Nether |
| Vô hạn | 64x | 36.000 J/t | Có thể khai thác khoáng sản Overworld và Nether |
