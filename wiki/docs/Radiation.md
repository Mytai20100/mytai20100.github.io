# Bức xạ

Bức xạ là hiệu ứng do vật phẩm phóng xạ trong Slimefun gây ra.

Khi trong kho đồ của bạn chứa vật phẩm phóng xạ, bạn sẽ dần tích lũy **giá trị phơi nhiễm bức xạ**. Phạm vi giá trị phơi nhiễm là **0 ~ 100**, giá trị càng cao, số lượng và mức độ nghiêm trọng của hiệu ứng tiêu cực bạn phải chịu càng nhiều. Khi giá trị phơi nhiễm đạt **100**, bạn sẽ nhận sát thương tức thời gây chết người.

Giá trị phơi nhiễm bức xạ sẽ hiển thị trên thanh hành động phía trên kho đồ. Khi giá trị phơi nhiễm lớn hơn 0, bạn sẽ thấy chỉ số bức xạ hiện tại.

## Cấp độ bức xạ

Vật phẩm phóng xạ có các cấp bức xạ khác nhau. Cấp càng cao, giá trị phơi nhiễm tăng thêm mỗi lần kiểm tra càng nhiều.

| Cấp độ | Màu   | Tăng phơi nhiễm | Mô tả                                           |
| ---- | ------ | :--------: | ---------------------------------------------- |
| Thấp   | Vàng   |     1      | Cấp bức xạ thấp. Sẽ gây sát thương, nhưng cần một thời gian mới gây chết |
| Trung bình   | Vàng   |     2      | Cấp bức xạ trung bình. Có thể xem là mặc định                     |
| Cao   | Vàng kim   |     3      | Cấp bức xạ cao. Nếu không xử lý kịp sẽ dẫn đến tử vong           |
| Rất cao | Đỏ   |     5      | Cấp bức xạ rất cao. Có tính chí mạng, người chơi không nên xem thường         |
| Gây chết | Đỏ sẫm |     10     | Cấp gây chết cao nhất. Người chơi hầu như không kịp tự bảo vệ, chắc chắn chết |

Nếu đồng thời giữ nhiều vật phẩm phóng xạ, giá trị phơi nhiễm sẽ cộng dồn. Ví dụ, đồng thời giữ 1 vật phẩm cấp **Cao** và 1 vật phẩm cấp **Trung bình**, mỗi lần kiểm tra sẽ tăng 3 + 2 = 5 điểm phơi nhiễm.

Khi bạn không còn giữ vật phẩm phóng xạ, hoặc được bảo vệ, giá trị phơi nhiễm sẽ giảm 1 điểm mỗi giây cho đến khi về 0.

## Triệu chứng bức xạ

Cùng với sự tăng của giá trị phơi nhiễm, bạn sẽ dần chịu các hiệu ứng tiêu cực sau:

| Giá trị phơi nhiễm | Triệu chứng     | Hiệu ứng thuốc | Cấp  |
| :----: | -------- | -------- | :---: |
|  ≥ 10  | Chậm chạp     | Chậm chạp     |  III  |
|  ≥ 25  | Wither nhẹ | Wither     |   I   |
|  ≥ 50  | Mù     | Mù     |  IV   |
|  ≥ 75  | Wither nặng | Wither     |  IV   |
|  100   | Tử vong     | Sát thương tức thời | 49 cấp |

## Bảo vệ và điều trị

### Bộ đồ chống hóa chất

Mặc trọn bộ [Bộ đồ chống hóa chất](/Armor#hazmat-suit) có thể giúp bạn hoàn toàn miễn nhiễm với hiệu ứng bức xạ. Khi giữ vật phẩm phóng xạ, bộ đồ chống hóa chất sẽ ngăn giá trị phơi nhiễm tăng thêm, và làm giá trị phơi nhiễm hiện có của bạn giảm dần.

### Vật tư y tế

[Vitamin và Thuốc](/Medical-Supplies) có thể ngay lập tức đặt lại giá trị phơi nhiễm bức xạ của bạn về 0.

### Thời gian ân hạn

Khi bạn chết và hồi sinh hoặc tham gia máy chủ, bạn sẽ nhận được một khoảng thời gian ân hạn ngắn. Trong thời gian ân hạn, bạn sẽ không chịu ảnh hưởng của hiệu ứng bức xạ. Điều này có thể ngăn việc chết ngay lập tức lần nữa do trong kho đồ vẫn còn vật phẩm phóng xạ trong trường hợp bật giữ đồ khi chết.

## Vật phẩm phóng xạ

Khi trong kho đồ của bạn chứa các vật phẩm sau, bạn sẽ nhận giá trị phơi nhiễm bức xạ:

### Cấp thấp

- Nhúm nhỏ Uranium

### Cấp trung bình

- [Mảnh nhỏ Uranium](/Small-Chunk-of-Uranium)
- [Băng Nether](/Nether-Ice)

### Cấp cao

- [Uranium](/Uranium)
- [Neptuni](/Neptunium)
- [Thỏi phồng rộp (33%)](/Blistering-Ingot)

### Cấp rất cao

- [Plutoni](/Plutonium)
- [Nhiên liệu oxit hỗn hợp Plutoni-Uranium tăng cường](/Boosted-Uranium)
- [Thỏi phồng rộp (66%)](/Blistering-Ingot)
- [Thỏi phồng rộp](/Blistering-Ingot)
- [Băng Nether cô đặc](/Enriched-Nether-Ice)

[Lò phản ứng Ngôi sao Nether](/Reactors) do chỉ gây hiệu ứng Wither lên thực thể gần đó, không phải bức xạ, nên không được liệt kê trong bảng này.
