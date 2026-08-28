---
sidebar_position: 4
---

# Giải thích về tính cân bằng

:::danger Chú ý

**Nội dung của trang này rất quan trọng!**

Nếu bạn không đọc trang này trước khi cài đặt, addon này có thể làm rối loạn nền kinh tế máy chủ của bạn!

:::

## Giới thiệu

EMC cho phép người chơi biến đổi vật phẩm này thành vật phẩm khác. Điều này có thể ảnh hưởng nghiêm trọng đến nền kinh tế của máy chủ. Tuy nhiên, nếu bạn cấu hình chi tiết giá trị EMC cho từng vật phẩm, mọi thứ sẽ ổn thôi.

Trong `config.yml`, bạn có thể chỉnh sửa giá trị EMC của hầu hết mọi vật phẩm. Tuy nhiên, trước tiên bạn cần biết [cách tính giá trị EMC](./emc-calculations).

## Vật phẩm cơ bản

Bất kỳ vật phẩm nào được cấu hình trực tiếp trong `config.yml` đều được coi là **vật phẩm cơ bản**. Những vật phẩm này thường không thể thu được thông qua chế tạo.

Nếu bạn cho rằng vật phẩm không nên được tính giá trị EMC, hãy đặt giá trị EMC của vật phẩm đó **thành 0**, đừng xóa vật phẩm khỏi tệp cấu hình!

:::warning

Nhắc lại một lần nữa, đừng xóa vật phẩm khỏi tệp cấu hình, mà hãy đặt giá trị EMC của vật phẩm thành 0!

:::

## Vật phẩm phái sinh

Đối với bất kỳ vật phẩm nào không được cấu hình trong `config.yml`, giá trị EMC của chúng sẽ được tính dựa trên các vật phẩm trong công thức chế tạo. Quá trình tính toán sẽ được thực hiện đệ quy cho đến khi tất cả vật phẩm đều là vật phẩm cơ bản.

Nếu trong quá trình tính toán gặp phải vật phẩm chưa được thiết lập giá trị, thì vật phẩm đó sẽ không thể chuyển đổi thành EMC.

Nếu bạn muốn vật phẩm phái sinh có giá trị EMC khác, bạn có thể thêm ID của vật phẩm vào cuối danh sách `emc-value`. Nếu muốn vô hiệu hóa, chỉ cần đặt thành 0.

Ví dụ, nhiều máy chủ hạn chế việc chế tạo phễu, nếu không muốn người chơi phân rã/tái tạo phễu, chỉ cần thêm `HOPPER: 0` là được.

## Hao hụt EMC

Bạn có thể đã nhận thấy rằng giá trị EMC khi phân rã và khi tái tạo thường không giống nhau. Cách tính chi tiết đã được trình bày trong trang [Tính toán EMC](./emc-calculations).

## Lưu ý

Hầu hết mọi vật phẩm của addon này đều cần than đá để chế tạo. Nếu bạn muốn việc chế tạo máy móc cao cấp trở nên dễ dàng hơn, bạn có thể giảm giá trị EMC của than đá.

## Tổng kết

Hy vọng rằng **trước khi** addon này được cài đặt chính thức lên máy chủ, tất cả các giá trị EMC đều đã là những giá trị bạn hài lòng.  
Việc thiết lập giá trị EMC cuối cùng / những vật phẩm nào có thể chuyển đổi thành EMC phụ thuộc vào chủ máy chủ/quản trị viên.
