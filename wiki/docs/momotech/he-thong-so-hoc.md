# Hệ thống số học & Lượng tử MomoTech {#so-hoc}

> Đây là phần “hack não” nhất của MomoTech: biến số và BUG thành vật liệu. Nếu bạn hiểu lập trình, bạn sẽ thấy rất thú vị; nếu không, hãy làm theo hướng dẫn từng bước.

## 1. Linh kiện số & Ký hiệu

### Máy tạo số (`DIGITAL_CONSTRUCTOR` - đầu người `Máy tạo số`)
- **Lore:** *Chuyển Void thành linh kiện số, chỉ tạo được vài con số cơ bản* - 2,000 J/t
- **Công thức:** `EmptyShell + UncontrollableEmpty + EmptyShell` / `Quantum_ + CreativeItem + Quantum_` / `EmptyShell + FOREVER + EmptyShell`
- **Sản phẩm:** Mỗi tick ra ngẫu nhiên 1 **Linh kiện số** (`DIGITAL` - đầu người lore `0.0`, `1.0`...). Các số này là ItemStack có tên `0.0` đến `9.0` và có thể là số thập phân.
- **Dùng:** Nhét vào **Tụ điện số** hoặc **Máy tăng dần**.

### Máy tạo ký hiệu (`SYMBOL_GENERATOR` - đầu người `Máy tạo ký hiệu`)
- **Lore:** *Tạo ký hiệu từ Void* - 2,000 J/t
- **Công thức:** Giống DigitalConstructor nhưng ra **Ký hiệu** `+ - * /` (BLAZE_POWDER)
- **Các ký hiệu:** `MOMOTECH_SYMBOL_ADDITION` (`+`), `SUBTRACTION` (`-`), `MULTIPLICATION` (`*`), `DIVISION` (`/`)

### Bộ tích hợp ký hiệu (`LETTER_CONSTRUCTOR` - BEEHIVE `Bộ tích hợp ký hiệu`)
- **Lore:** *Cắm Vật chất nguyên thủy α và β hai bên, Trống ở giữa để tạo 1 ký hiệu ngẫu nhiên* - không tốn điện
- **Công thức:** `CreativeItemII + Quantum1 + CreativeItemII` / `REPEATING_COMMAND_BLOCK + QuantityItem + CHAIN_COMMAND_BLOCK` / `UncontrollableEmpty + FOREVER_ + UncontrollableEmpty`
- **Cách dùng:** Mở GUI 9 ô, đặt `Vật chất nguyên thủy α` ô trái, `β` ô phải, `Trống` ở giữa → máy tiêu thụ Trống và nhả 1 ký hiệu `+ - * /` ngẫu nhiên ở ô kết quả. Dùng để farm ký hiệu khi bạn đã có α/β.

## 2. Máy tăng dần & Kết hợp số

### Máy tăng dần (`INCREMENT` - CREEPER_HEAD `Máy tăng dần`)
- **Công thức:** `NONE + SymbolAddition + NONE` / `MAGIC_SUGAR + CreativeItem + MAGIC_SUGAR` / `UncontrollableEmpty*3`
- **Cách dùng (ANCIENT_ALTAR recipe):** Đặt **Linh kiện số** vào, máy sẽ “tăng dần” giá trị số đó và có xác suất nhả ra **BUG Biểu thức**? Thực tế code `Increment` là GUI chờ recipe, bạn đặt số vào ô nhập, ký hiệu `+` vào ô giữa, máy sẽ ra số mới.
- **Ví dụ:** Bỏ `0.0` + `+` → ra `1.0`; `1.0 + 1.0` → `2.0`...

### Máy kết hợp số thường (`ORDINARY_NUMBER_COMBINATOR` - SKELETON_SKULL `Máy tính cơ bản`)
- **Công thức:** `Quantum_ + PROTON_INGOT + Quantum1_` / `BIG_CAPACITOR + FOREVER_ + BIG_CAPACITOR` / `Increment + DigitalConstructor + Increment`
- **Lore:** Máy tính cơ bản - không ghi điện (free)
- **Cách dùng:** Đặt 2 Linh kiện số vào 2 ô nhập và 1 Ký hiệu vào ô giữa → máy tính toán `a + b`, `a - b`, `a * b`, `a / b` và cho ra **Linh kiện số kết quả**. Nếu kết quả là lỗi (ví dụ chia cho 0, tràn số) → ra **BUG** tương ứng.
- **BUG sinh ra:**
  - `5 / 0` → **BUG - Hệ thống**
  - `999999 * 999999` → **BUG - Quá tải dương**
  - `0.1 + 0.2` → **BUG - Thập phân**

## 3. Tụ điện số & Năng lượng

### Tụ điện số (`DIGIT_GENERATOR` - BLACK_STAINED_GLASS `Tụ điện phát điện lượng tử`)
- **Lore:** *Nhét Linh kiện số vào, tụ nạp thêm đúng số J ghi trên linh kiện* - lưu 16,777,216 J
- **Công thức:** `FOREVER_ + FOREVER + FOREVER_` / `FOREVER_ + BugCrystal + FOREVER_` / `FOREVER_ + FOREVER + FOREVER_`
- **Cách dùng:** Đây là **Capacitor** đặc biệt: bỏ Linh kiện số `123.0` vào → tụ sẽ cộng 123 J vào năng lượng lưu trữ. Bỏ `9999.0` → cộng 9999 J. Dùng để biến số thành điện.
- **Lưu ý:** Nếu bỏ số âm hoặc BUG, có thể trừ điện hoặc gây lỗi.

### Máy tụ hạt (`PARTICLE_CONSTRUCTOR` - GREEN_STAINED_GLASS `Tụ điện Hộp tử`)
- **Lore:** *Nạp điện vào tụ 5000 J, nếu điện là số nguyên tố → Proton, hợp số → Hợp tử* - 5,000 J capacity
- **Công thức:** `STAR + Quantum1 + STAR` / `Quantum + UncontrollableEmpty + Quantum` / `STAR + Quantum + STAR`
- **Cách dùng:** Cấp điện cho máy, máy sẽ đếm lượng điện hiện có. Nếu là số nguyên tố (2,3,5,7,11...) → khi bấm nút? Thực tế mỗi tick máy tự kiểm tra điện và nhả `PROTON` hoặc `ZYGOTE`. Dùng để farm Proton/Hợp tử để nén thành thỏi.

## 4. Vật chất nguyên thủy α, β, γ

Ba vật phẩm này là “nguồn gốc” của MomoTech:

- **α** `CREATIVE_ITEM` (END_CRYSTAL `Vật chất nguyên thủy α`)
- **β** `CREATIVE_ITEM_I` (END_CRYSTAL `β`)
- **γ** `CREATIVE_ITEM_II` (END_CRYSTAL `γ`)

**Cách kiếm:**
- **Máy tạo vật chất nguyên thủy** (`CREATIVE_ITEM_GENERATOR` - COBBLESTONE `Máy tạo vật chất nguyên thủy`): Công thức `COBBLESTONE*3` / `GLASS + NONE + GLASS` / `EMPTY_SHELL*3` → mỗi tick ra α hoặc β ngẫu nhiên (không tốn điện, chỉ cần chỗ trống).
- **γ** được tạo từ α/β qua máy khác hoặc qua **Hộp lượng tử**? Thực tế `CREATIVE_ITEM_II` dùng trong `FINAL_COPier` và `RANDOM_COPIER`.

**Dùng:** α+β → Ký hiệu, γ → sao chép ngẫu nhiên (RandomCopier tiêu thụ γ).

## 5. Hệ thống ID - Tạo bất kỳ vật phẩm Slimefun nào

Đây là tính năng “phá game” nhất: **tạo bất kỳ vật phẩm Slimefun nào bằng ID**.

### Thẻ ID (`ID_CARD` - PAPER `Thẻ ID`)
- **Lore:** *ID: , Thêm ký hiệu để tích hợp Slimefun ID tại Bộ tích hợp ID, có thể tạo vật phẩm Slimefun theo ID hợp lệ tại Bàn chế tạo*
- **Kiếm:** Chế tạo? Không có công thức, nhưng có thể nhận từ máy?
- **Cách dùng:** Thẻ ID trống ban đầu là `ID:`. Bạn phải dùng **Bộ tích hợp ID** để thêm ký hiệu vào.

### Bộ tích hợp ID (`ID_PUTTER` - BOOKSHELF `Bộ tích hợp ID`)
- **Lore:** *Thêm ký tự vào thẻ ID tại đây*
- **Công thức:** `QuantityItem + FOREVER_ + QuantityItem` / `Quantum1 + COMMAND_BLOCK + Quantum1` / `CreativeItem + CreativeItemI + CreativeItemII`
- **GUI:** 9 ô, đặt **Thẻ ID** và **Ký hiệu** (chữ cái, số) vào → Thẻ sẽ ghi thêm ký tự đó vào lore `ID: ...`. Ví dụ: đặt `M` `O` `M` `O`... → thẻ thành `ID: MOMOTECH_FINAL_STAR`.

### Bàn chế tạo ID (`ID_CHANGER` - GLASS `Bàn chế tạo`)
- **Lore:** *Lắp thẻ ID hợp lệ, máy đọc ID và xuất vật phẩm Slimefun tương ứng, có thể tạo bất kỳ vật phẩm Slimefun nào, ví dụ FINALTECH_PHONY*
- **Công thức:** `FINAL_RULE + FinalItem + FINAL_RULE` / `FinalItem*3` / `FINAL_RULE*?`
- **Cách dùng:** Đặt **Thẻ ID** đã ghi `MOMOTECH_FINAL_STAR` vào ô giữa, máy sẽ tiêu thụ thẻ và nhả ra 1 `MOMOTECH_FINAL_STAR` thật. Bạn có thể tạo **bất kỳ** SlimefunItem nào nếu biết ID chính xác (tra trong `/sf items` hoặc `MOMOTECH_RAW_ITEMS.md`).
- **Ứng dụng:** Tạo `FINALTECH_PHONY`, `Slimefun Backbone`... mà không cần chế.

## 6. Chuỗi BUG hoàn chỉnh

Tổng hợp cách farm BUG hiệu quả:

1. **Tạo Void 64x** → đủ Void
2. **Chế Máy tạo số + Máy tạo ký hiệu** (2k J/t) → farm Linh kiện số và Ký hiệu
3. **Máy tăng dần** → biến số nhỏ thành số lớn
4. **Máy kết hợp số thường** → `a + b` → ra số mới, nếu tràn → BUG
5. Thu thập 5 loại BUG → qua **Máy đặc biệt** nén thành **Tinh thể BUG** → dùng cho máy cuối

**Lưu ý:** BUG - Ngày tháng hay bị lỗi hiển thị, nếu bạn tính `2024-01-01` mà không ra, hãy thử `2024-01-01 + 0`.

Trang tiếp: [Năng lượng & Sao chép →](nang-luong-va-sao-chep.md)
