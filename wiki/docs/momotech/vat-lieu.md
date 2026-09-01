# Vật liệu MomoTech - Từ Hư không đến Quy tắc {#vat-lieu}

Trang này liệt kê **toàn bộ vật liệu** của MomoTech, cách kiếm và cách dùng. Mọi con đường đều bắt đầu từ 3 chữ: **NONE → VOID → BUG**.

## 1. Nhóm khởi nguyên

### NONE - Khoảng trống
- **ID:** `MOMOTECH_NONE` - BLACK_WOOL
- **Lore:** *Một khoảng hư vô*
- **Cách kiếm:** Chế tạo bằng **Máy tạo NONE** (DIRT) hoặc nhặt từ máy? Công thức máy: `DIRT*3` ở hàng trên, `GLASS + NONE + GLASS` hàng giữa, `EMPTY_SHELL*3` hàng dưới. Sau khi có máy, bạn bỏ `DIRT` vào không? Thực ra NONE là vật liệu để chế máy tạo Void, bạn phải chế NONE đầu tiên bằng tay: Trong `NONE_GENERATOR` lore ghi *Nguồn NONE rất tốt ở đầu game* - nó tự tạo NONE mỗi tick nếu còn ô trống, không cần nhập liệu (chỉ cần đặt máy xuống).
- **Dùng để:** Chế Void, chế máy tạo số, ký hiệu.

### VOID - Hư không
- **ID:** `MOMOTECH_EMPTY_SHELL` (STRUCTURE_VOID, tên Void lore `NULL`)
- **Kiếm:**
  - **Máy tạo Void 8x** (`EMPTY_SHELL_GENERATOR` - BLACK_CONCRETE_POWDER lore *Giải phóng đôi tay!*): Công thức `NONE + UncontrollableEmpty + NONE` / `NONE + UncontrollableEmpty + NONE` → đặt xuống tự nhả Void 8 cái/tick.
  - **Máy tạo Void - Bản cường hóa 64x** (`EMPTY_SHELL_GENERATOR_I` - WHITE_CONCRETE_POWDER): Công thức `EmptyShellGenerator + FOREVER + EmptyShellGenerator` hàng trên, `EmptyShellGenerator + NONE + EmptyShellGenerator` hàng giữa → không cần nhập liệu, nhả 64 Void/tick.
- **Dùng:** Gần như mọi công thức trung - cuối game đều tốn Void hàng stack.

### Void mất kiểm soát
- **ID:** `MOMOTECH_UNCONTROLLABLE_EMPTY` (GRAY_STAINED_GLASS_PANE `Void mất kiểm soát`)
- **Kiếm:** **Máy tạo Void mất kiểm soát** 48x (`UNCONTROLLABLE_EMPTY_GENERATOR` - DEEPSLATE_LAPIS_ORE 48x): Công thức `BoxOfQuantum + QuantityItem + BoxOfQuantum` / `BugCrystal + FINAL_RULE + BugCrystal` / `EmptyShellGenerator + CreativeItemII + EmptyShellGenerator` → mỗi tick ra 48 Void mất kiểm soát, dùng để chế máy cuối.

## 2. Nhóm BUG - Vật chất lỗi

MomoTech mô phỏng lỗi máy tính thành 5 loại + 1 tổng hợp:

| BUG | Kính màu | Cách kiếm chính |
|-----|----------|-----------------|
| **BUG - Biểu thức** | WHITE | Máy tăng dần + Máy kết hợp số thường |
| **BUG - Thập phân** | RED | Kết hợp số tạo ra thập phân |
| **BUG - Ngày tháng** | ORANGE | Lỗi ngày tháng, cần cộng +0 nếu không ra |
| **BUG - Quá tải dương** | YELLOW | Tràn số int dương 2,147,483,647 |
| **BUG - Quá tải âm** | GREEN | Tràn số âm |
| **BUG - Hệ thống** | BLUE | Tổng hợp 5 loại trên |

**Chuỗi tạo BUG:**
1. **Máy tạo số** (2,000 J/t) → `VOID` thành **Linh kiện số** (ví dụ `0.0`, `1.0`...)
2. **Máy tạo ký hiệu** (2,000 J/t) → `VOID` thành **Ký hiệu** `+ - * /`
3. **Máy tăng dần** (CREEPER_HEAD) → tiêu thụ Linh kiện số, nhả BUG
4. **Máy kết hợp số thường** (SKELETON_SKULL) → kết hợp 2 Linh kiện số + Ký hiệu → ra BUG Biểu thức
5. Từ BUG Biểu thức, qua các máy xử lý số khác sẽ ra Thập phân, Ngày tháng, Quá tải...

> **Mẹo BUG Ngày tháng:** Tác giả ghi *Nếu máy tính của bạn cho kết quả bằng 'Ngày tháng' mà không ra BUG - Ngày tháng, hãy thử cộng thêm +0 vào linh kiện số đó*. Nghĩa là trong Máy kết hợp, thay vì `a + b`, thử `a + b + 0`.

### Tinh thể BUG
- **ID:** `MOMOTECH_BUG_CRYSTAL` (NETHER_STAR `Tinh thể BUG`)
- **Kiếm:** 8 BUG Biểu thức xung quanh? Thực tế công thức chưa rõ nhưng lore ghi *Tinh thể đến từ BUG*, dùng để chế Hộp lượng tử và máy cuối.

## 3. Nhóm số học

### Linh kiện số (Digital)
- **ID:** `MOMOTECH_DIGITAL` (đầu người custom, lore `0.0`)
- **Kiếm:** Máy tạo số, máy tụ điện số
- **Dùng:** Nhét vào **Tụ điện số** (BLACK_STAINED_GLASS `Tụ điện phát điện lượng tử`) để nạp 16,777,216 J, hoặc vào **Máy tăng dần**.

### Ký hiệu
- `MOMOTECH_LETTER` (SUGAR `Ký hiệu a`) - cơ sở tạo vật chất từ hư không
- `SYMBOL_ADDITION/SUBTRACTION/MULTIPLICATION/DIVISION` (BLAZE_POWDER `+ - * /`)
- **Kiếm:** Máy tạo ký hiệu: `NONE + UncontrollableEmpty + NONE` / `FOREVER_ + CreativeItem + FOREVER_` / `NONE + Quantum + NONE` → mỗi tick ra ký hiệu ngẫu nhiên.
- **Bộ tích hợp ký hiệu** (`LETTER_CONSTRUCTOR` - BEEHIVE): Cắm Vật chất nguyên thủy α và β hai bên, Trống ở giữa → ra 1 ký hiệu ngẫu nhiên.

### Vật chất nguyên thủy α, β, γ
- **α** `MOMOTECH_CREATIVE_ITEM` (END_CRYSTAL `Vật chất nguyên thủy α`)
- **β** `MOMOTECH_CREATIVE_ITEM_I` (END_CRYSTAL `β`)
- **γ** `MOMOTECH_CREATIVE_ITEM_II` (END_CRYSTAL `γ`)
- **Kiếm:**
  - α, β: **Máy tạo vật chất nguyên thủy** (COBBLESTONE `Máy tạo vật chất nguyên thủy`) - công thức `COBBLESTONE*3` / `GLASS + NONE + GLASS` / `EMPTY_SHELL*3` → tạo α/β mỗi tick
  - γ: Nâng cấp từ α, β qua **Máy tạo vật chất nguyên thủy γ**? Thực tế γ dùng trong RandomCopier.
- **Dùng:** α+β → Ký hiệu, γ → sao chép ngẫu nhiên.

### Phụ kiện lượng hóa
- **ID:** `MOMOTECH_QUANTITY_ITEM` (PURPLE_DYE `Phụ kiện lượng hóa`)
- **Kiếm:** Công thức `CreativeItem + Quantum1 + CreativeItemI` / `QY + FOREVER_ + CH` / `CreativeItemGenerator + UncontrollableEmpty + NoneGenerator` → dùng để chế Hộp lượng tử và máy cuối.

## 4. Nhóm lượng tử

### Lượng tử & Vướng víu
- **Lượng tử** `MOMOTECH_QUANTUM` (SNOWBALL `Lượng tử` lore *Nhấp phải có vẻ sẽ xảy ra chuyện không hay* - thực tế nhấp phải sẽ random dịch chuyển hoặc chết)
- **Lượng tử vướng víu** `MOMOTECH_QUANTUM1` (MAGMA_CREAM)
- **Hộp lượng tử** `MOMOTECH_BOX_OF_QUANTUM` (CHEST `Hộp lượng tử` - ổn định, dùng để lưu vật phẩm trong máy, nhấp phải mở rương Ender)
- **Kiếm:**
  - **Máy tạo Lượng tử ngẫu nhiên** (GRAY_WOOL) → mỗi tick xuất hiện 1 Lượng tử ngẫu nhiên ở ô bất kỳ, đồng thời xóa vật phẩm khác trong máy (nguy hiểm!)
  - **Máy tạo Lượng tử năng lượng** (WHITE_WOOL) → Lượng tử + điện (500k J/t) → Lượng tử năng lượng; 32 Thỏi năng lượng → Lượng tử vướng víu
  - **Hộp lượng tử** được chế từ `Quantum1 + BoxOfQuantum` hoặc qua máy.

### Lượng tử năng lượng / Thỏi năng lượng
- `MOMOTECH_ENERGY_QUANTUM` (SLIME_BALL `Lượng tử năng lượng` - nguy hiểm, năng lượng cao)
- `MOMOTECH_ENERGY_INGOT` (NETHERITE_INGOT `Thỏi năng lượng`) - dùng để đổi lấy Lượng tử vướng víu trong EnergyQuantumGenerator.

## 5. Nhóm khoáng & kim loại

### Tinh chất khoáng (Mineral Essence)
- 8 loại: `MOMOTECH_DIAMOND/IRON/GOLD/QUARTZ/EMERALD/REDSTONE/LAPIS/COAL` (lore *Tinh chất khoáng - Kim cương...*)
- **Kiếm:** **Máy tạo Khoáng 64x** (BLUE_CONCRETE_POWDER) → tạo 64 tinh chất ngẫu nhiên mỗi tick khi còn chỗ trống (15k J/t)
- **Dùng:** Nén thành Lõi khoáng.

### Lõi khoáng (Mineral Core)
- `...1` ví dụ `DIAMOND1` lore *Lõi khoáng - Kim cương*
- **Kiếm:** 64 Tinh chất → qua **Máy Quy tắc Tụ**? Thực tế công thức `RuleConstructor`: 64 khoáng/kim loại/thỏi quy tắc → 32 tinh chất/lõi.

### Tinh chất kim loại & Lõi kim loại
- 7 loại: `Cu, Pb, Mg, Au, Al, Sn, Zn` và `Ag` (Bạc)
- **Kiếm:** **Máy tạo thỏi hợp kim** (`INGOT_CONSTRUCTOR` - CRACKED_POLISHED_BLACKSTONE_BRICKS 32x): Cho Nhân tố kim loại vào → ra 32 thỏi hợp kim ngẫu nhiên.

### Nhân tố kim loại
- `MOMOTECH_METAL_STAR` (GOLD_BLOCK `Nhân tố kim loại`) - dùng trong IngotConstructor
- **Kiếm:** Từ **Máy tạo Thỏi Tận thế**?

## 6. Nhóm hợp kim & nén

### Khoáng nén (Mineral Compressed)
MomoTech cho phép nén khoáng thành khối nén 3 tầng:
- Mỗi loại có 3 cấp: I, II, III ví dụ `MINERAL_DIAMOND_BLOCK_I/II/III`
- **Kiếm:** **Khoáng nén tự động** (ORE_COLLECTOR - DEEPSLATE_COAL_ORE): Tạo ngẫu nhiên 1 loại khoáng nén 3 tầng mỗi tick (không cần điện, chỉ cần còn chỗ).

### Đá cuội nén
- 50 cấp: `Cobblestone[0-49]` lore `> 1 lần nén đá cuội` đến `> 50 lần nén đá cuội`
- **Kiếm:** Nén đá cuội thủ công qua bàn chế tạo, hoặc **Máy tạo đá cuội nén** 64x (SNOW_BLOCK `Máy tạo đá cuội nén`): tự nhả đá cuội nén? Thực tế `FINAL_C_` là máy tạo đá cuội nén 8x, còn `COBBLESTONE_GENERATOR_FINAL` tạo 48 stack/tick.

### Thỏi Quy tắc
- `MOMOTECH_INFINITY` (NETHERITE_SCRAP `Thỏi Quy tắc`) - lõi của mọi máy cuối
- **Kiếm:** Qua **Máy Tái cấu trúc Quy tắc** (BLACK_CONCRETE 75k J/t) → chuyển Vod/Bug thành Quy tắc.

## 7. Nhóm Tận thế (Final)

- **Vật phẩm Tối thượng** `MOMOTECH_FINAL_ITEM` (FERN `Lõi mã loạn` lore *Ở khắp mọi nơi*)
- **Ngôi sao Tận thế** `MOMOTECH_FINAL_STAR` (HONEYCOMB `Trái tim tận thế`)
- **Ngôi sao Quy tắc** `RULE_STAR` (IRON_NUGGET `Thời khắc`) + `RULE_MACHINE_STAR` (linh kiện máy)
- **Hạt vĩnh hằng** từ **Máy đào vĩnh hằng** (GRAY_CONCRETE_POWDER: nhập Trống để tăng tiến độ, đầy ra Hạt vĩnh hằng)
- **Proton/Hợp tử** từ **Máy tụ hạt** (GREEN_STAINED_GLASS): Nạp điện tụ 5000 J, nếu điện là số nguyên tố → Proton, hợp số → Hợp tử. Dùng để nén thành `PROTON_INGOT` / `ZYGOTE_INGOT`.

## Sơ đồ tiến hóa vật liệu

```
DIRT → NONE (Máy NONE)
NONE + Void → VOID (8x / 64x)
VOID → Linh kiện số + Ký hiệu (2k J/t)
Linh kiện số → BUG (Máy tăng dần)
BUG → Tinh thể BUG → Hộp lượng tử → Lượng tử vướng víu
VOID + Lượng tử → Vật chất nguyên thủy α/β/γ
α/β + Void → Ký hiệu → BUG nâng cao → Quy tắc
Quy tắc + Bug → Thỏi Quy tắc → Máy Tận thế
```

Mỗi vật liệu đều có thể xem công thức trong guide bằng cách nhấp vào biểu tượng trong máy. Trang sau sẽ đi vào chi tiết từng máy.

