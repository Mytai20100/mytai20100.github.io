---
sidebar_position: 3
---

# Tính toán EMC

Trong EMCTech, cách tính giá trị EMC khác với trong mod.  
Cách tính này được đưa ra dựa trên phản hồi từ các máy chủ đã cài đặt plugin Equivalency Exchange, plugin EMC2, cũng như cách các máy chủ đó nhìn nhận hệ thống kinh tế của họ.

Việc tính giá trị EMC của vật phẩm cơ bản rất đơn giản. Chúng được ghi trong `config.yml`, bạn có thể thay đổi giá trị EMC cho thao tác phân rã và tái tạo bất cứ lúc nào.

Tiếp theo, bất kỳ vật phẩm vanilla nào khác không được định nghĩa trong tệp cấu hình sẽ được tính giá trị EMC dựa trên nguyên liệu được sử dụng trong công thức chế tạo của chúng.

- Đối với vật phẩm có nhiều công thức, công thức có giá trị EMC nhỏ nhất sẽ được sử dụng làm giá trị EMC của vật phẩm.
- Nếu bất kỳ vật phẩm nào trong công thức sau khi tính đệ quy không phải là vật phẩm cơ bản, thì vật phẩm đó không hợp lệ và không thể chuyển đổi thành EMC.
- Kết quả tính giá trị EMC cuối cùng sẽ được làm tròn đến hai chữ số thập phân.

Sau đó đến lượt vật phẩm Slimefun. Giá trị EMC của tài nguyên cơ bản Slimefun cũng được định nghĩa trong `config.yml`.  
Một vật phẩm Slimefun hợp lệ, sau khi tính đệ quy, phải là nguyên liệu cơ bản của Minecraft hoặc tài nguyên cơ bản của Slimefun. Nếu không, vật phẩm đó không hợp lệ và không thể chuyển đổi thành EMC.

Slimefun gốc có nhiều loại công thức (như bàn chế tạo tăng cường, bàn chế tạo ma thuật, v.v.), chỉ những vật phẩm sử dụng loại công thức của Slimefun gốc mới được đưa vào tính toán.  
Điều này có nghĩa là, nếu vật phẩm của một addon sử dụng loại công thức trong addon đó, thì sẽ không thể tính toán được.

:::info

Nếu vật phẩm không xuất hiện trong Sách EMC, thì rất có thể vật phẩm này là vật phẩm mới được thêm vào ở phiên bản mới, hoặc nguyên liệu cơ bản của vật phẩm chưa được thiết lập giá trị EMC trong `config.yml` (dẫn đến không thể tính được giá trị EMC).

:::

## Giá trị EMC dùng cho phân rã / tái tạo

Giá trị EMC của vật phẩm được tính theo cách trên là giá trị EMC có thể nhận được sau khi phân rã vật phẩm.

Giá trị EMC dùng để tái tạo sẽ cao hơn. Ở mỗi bước tính giá trị EMC (tức là tính công thức chế tạo), giá trị EMC của vật phẩm sẽ được nhân với 1.1.

### Ví dụ

#### Gậy gỗ

| Giai đoạn | Giá trị phân rã | Giá trị tái tạo |
| --- | ----- | ----- |
| Gỗ sồi | 4.00 | 4.00 |
| Ván gỗ sồi (gỗ / 4) | 1.00 | 1.10 |
| Gậy gỗ (ván gỗ / 2) | 0.50 | 0.605 |

#### Kim cương nhân tạo

| Giai đoạn | Giá trị phân rã | Giá trị tái tạo |
| --- | ----- | ----- |
| Than đá | 16.00 | 16.00 |
| Cacbon (than đá * 8) | 125.00 | 140.80 |
| Cacbon nén (cacbon * 4) | 512.00 | 619.52 |
| Đá lửa | 1.00 | 1.00 |
| Khối cacbon (cacbon nén * 8 + đá lửa) | 4097.00 | 5452.876 |
| Kim cương nhân tạo (khối cacbon) | 4097.00 | 5998.1636 |

#### Kim cương đen

| Giai đoạn | Giá trị phân rã | Giá trị tái tạo |
| --- | ----- | ----- |
| Cát | 1.00 | 1.00 |
| Kính (cát) | 1.00 | 1.10 |
| Tấm kính (kính * 6 / 16) | 0.38 | 0.45 |
| Kim cương nhân tạo (kết quả tính ở trên) | 4097.00 | 5998.16 |
| Khối cacbon (kết quả tính ở trên) | 4097.00 | 5452.87 |
| Quặng kim cương đen (kim cương nhân tạo + khối cacbon + tấm kính) | 8194.38 | 12596.64 |
| Kim cương đen (quặng kim cương đen) | 8194.38 | 13856.23 |
