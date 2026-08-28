---
sidebar_position: 2
---

# Hướng dẫn chính thức

Trang này chứa một phần hướng dẫn về addon, bạn có thể tìm thấy thêm chi tiết về từng phần và lộ trình lý thuyết bạn nên tuân theo để phát triển thuận lợi ở đây.  
Nó có thể trở thành một hướng dẫn phù hợp, cũng có thể giúp bạn giữ nguyên hiện trạng, cũng có thể là cả hai, ai mà biết được? :o

:::warning Cảnh báo

Hướng dẫn dưới đây chỉ mang tính tham khảo, nó chỉ là một lộ trình được đề xuất về cách chơi addon này. Bạn không nhất thiết phải tuân theo thứ tự này, hoặc làm tất cả những việc được đề cập, nhưng làm như vậy sẽ đảm bảo tiến độ ổn định.  
Nếu bạn muốn tự mình khám phá addon này (tôi hoàn toàn khuyên bạn nên làm vậy), **hãy dừng đọc ngay bây giờ!** Tuy nhiên nếu bạn bị lạc, bạn có thể quay lại bất cứ lúc nào :)

:::

## Bắt đầu

Đầu tiên, bạn cần [**Máy Tạo Hạt**](./machines/quirp-oscillator), [**Máy Ngưng Tụ Hạt**](./machines/quirp-annihilator) và [**Máy Phát Điện Hạt**](./machines/quirp-scatterer). Ba máy này là nền tảng của bạn trong addon này, bạn sẽ cần chúng để sản xuất các loại hạt định hướng khác nhau (nguyên liệu chế tạo cho bất kỳ vật phẩm nào khác) cũng như ngưng tụ hạt (một loại nguyên liệu chế tạo khác), và có thể sử dụng chúng để phát điện, vì vậy hãy mở khóa ba máy này trước.  
Bạn cũng cần xây dựng một **Bàn Làm Việc Nano**, vì hầu hết công thức chế tạo đều cần nó. Đây là một cấu trúc đa khối, bạn cần xây dựng nó trong thế giới theo hướng dẫn, chứ không phải chế tạo.

:::tip

Mặc dù việc xây dựng một hệ thống có thể cung cấp lượng điện lớn trong End không phải là việc khó, nhưng đối với addon này, chỉ trong vài phút đầu mới cần điện, vì vậy bạn chỉ cần một hệ thống điện tạm thời.  
Tôi khuyên bạn chỉ nên mang theo vài máy phát điện giai đoạn giữa để bắt đầu - điều này sẽ tiết kiệm rất nhiều thời gian và rắc rối!

:::

**Máy Tạo Hạt** sẽ sản xuất bốn loại hạt định hướng, mỗi loại có xác suất như nhau (25%), chỉ cần bạn cung cấp điện cho nó. Đừng lo lắng về ô màu tím, chúng ta sẽ dùng đến nó sau.  
Khuyến nghị mạnh mẽ rằng bạn nên sử dụng hệ thống vận chuyển để tự động trích xuất sản phẩm và lưu trữ chúng ở những nơi khác nhau, nếu không ô đầu ra sẽ bị tắc nghẽn. Và mỗi khi tạo ra một hạt định hướng khác, hạt hiện có sẽ bị mất.

**Hạt ngưng tụ** là nguyên liệu chế tạo tiếp theo cần thiết, chúng cũng là một nguồn năng lượng rất bền vững mà bạn sẽ sớm muốn chuyển sang.  
Để làm điều này, chúng ta cần một **Máy Ngưng Tụ Hạt**! Chỉ cần nhập vào hai hạt định hướng ngược nhau (trên/dưới/trái/phải), bạn sẽ nhận được thứ bạn muốn.

Bây giờ, bạn có thể bắt đầu phát điện. Chế tạo một **Máy Phát Điện Hạt** và sử dụng hạt ngưng tụ để phát điện!  
Mặc dù, bạn cũng có thể sử dụng hạt định hướng để phát điện, nhưng chúng chỉ hoàn trả năng lượng cần thiết để sản xuất chúng, vì vậy dùng chúng để phát điện chỉ lãng phí thời gian.

## Giai đoạn giữa

Tiếp theo, chúng ta cần chế tạo **Hạt định hướng chưa tích điện**. Chúng được dùng để chế tạo **Lõi Siêu Năng Lực** (mục tiêu cuối cùng của addon này), tuy nhiên cần một thời gian để chúng "trưởng thành".

Để chế tạo **Hạt định hướng chưa tích điện**, bạn cần chế tạo **Thỏi không ổn định**, và dần dần làm cho chúng ổn định, trở thành **Thỏi ổn định**, sau đó dùng chúng để chế tạo hạt định hướng chưa tích điện.  
Bạn cần sử dụng [**Bộ Ổn Định**](./machines/stabilizer) và **Hạt ngưng tụ** để làm cho thỏi không ổn định dần dần ổn định, mỗi lần giảm 25% độ không ổn định.

:::danger Cảnh báo

Nếu thỏi không ổn định ở trong kho đồ của bạn một thời gian, chúng sẽ **phát nổ**. Một khi phát nổ, chúng sẽ giết chết bạn ngay lập tức.  
Hơn nữa: nếu trong kho đồ của bạn có bất kỳ thỏi không ổn định nào, thì tất cả chúng sẽ biến mất trực tiếp.

Bạn nên hành động càng nhanh càng tốt, hoặc cố gắng sử dụng hệ thống vận chuyển để di chuyển chúng.

:::

Để tích điện cho những **Hạt định hướng chưa tích điện** này, bạn cần một [**Máy Quá Tải Hạt**](./machines/zot-overloader). Đặt hạt định hướng chưa tích điện vào, sau đó sử dụng hạt định hướng cùng hướng để tích điện.  
Nếu hướng giống nhau, thì mỗi hạt định hướng có thể tăng 1 điểm tích điện. Nếu hướng khác nhau, thì cứ mỗi 16 hạt định hướng khác hướng mới có thể tăng 1 điểm tích điện.

## Giai đoạn giữa-cuối

Khi bạn tích điện cho **Hạt định hướng chưa tích điện**, sẽ tiêu thụ một lượng lớn hạt định hướng. Nếu hướng không nhất quán, thì sẽ tiêu thụ càng nhiều hơn.

Để cải thiện tình hình, lúc này cần dùng đến **Bộ Phân Cực**.  
Còn nhớ ô màu tím trong Máy Tạo Hạt không? Hãy đặt một bộ phân cực vào đó, có thể làm cho xác suất tạo ra hai loại hạt định hướng tương ứng trở thành 40%, trong khi xác suất của hai loại hạt định hướng còn lại trở thành 10%. Như vậy bạn có thể nhận được nhiều hạt định hướng mà bạn cần hơn!

:::info

Xác suất trên có thể được cấu hình, xác suất cụ thể lấy theo cấu hình của máy chủ.

:::

Ngoài ra, bạn cũng có thể sử dụng **Máy Chuyển Hướng Hạt** để thay đổi hướng của hạt định hướng. Mỗi lần chuyển hướng sẽ xoay 90 độ theo chiều kim đồng hồ.  
Như vậy, khi vận may của bạn không tốt, hoặc có một lượng lớn hạt định hướng không cần thiết, bạn có thể chuyển đổi những hạt đó thành hạt định hướng mà bạn cần.

## Mục tiêu cuối cùng

Mục tiêu cuối cùng của addon này là chế tạo **Lõi Siêu Năng Lực**. Khi bạn nhận được một lõi siêu năng lực, nhấp chuột phải có thể nhận vĩnh viễn hiệu ứng thuốc, cho đến khi bạn chết.

Hiệu ứng thuốc do lõi siêu năng lực cung cấp có thể bị ghi đè. Ví dụ, khi bạn nhận được hiệu ứng thuốc cấp cao hơn thông qua các phương thức khác, hiệu ứng sẽ có hiệu lực bình thường cho đến khi thời gian duy trì của hiệu ứng cấp cao hơn kết thúc. (Mặc dù thời gian duy trì sẽ hiển thị là **:**)

Uống sữa sẽ không xóa hiệu ứng của lõi siêu năng lực, chỉ có cái chết mới làm vậy.  
Khi chết, mỗi hiệu ứng lõi siêu năng lực sẽ hoàn trả 8 khối thỏi ổn định, do đó bạn chỉ cần tích điện thêm một số hạt nữa là có thể chế tạo lại lõi siêu năng lực.

:::warning Cảnh báo

Khi cầm một nhóm lõi siêu năng lực và nhấp chuột phải để sử dụng sẽ tiêu thụ **toàn bộ**! Nhưng việc sử dụng nhiều cái cùng lúc sẽ không cộng dồn hiệu ứng.

:::

| Lõi Siêu Năng Lực | Hiệu ứng |
| ---------- | --- |
| Lõi Siêu Năng Lực (S) | Sức Mạnh III |
| Lõi Siêu Năng Lực (A) | Hấp Thụ Sát Thương V |
| Lõi Siêu Năng Lực (R) | Hồi Phục II |
| Lõi Siêu Năng Lực (F) | Kháng Cự IV |
| Lõi Siêu Năng Lực (H) | Bão Hòa |
