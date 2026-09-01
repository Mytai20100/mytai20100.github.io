# Năng lượng & Sao chép MomoTech {#nang-luong}

## 1. Máy phát điện

MomoTech có 6 máy phát, từ 6k J/t đến 1B J/t và một máy “vũ trụ” vô hạn.

| Máy | Nhiên liệu | Phát / Tick | Bộ nhớ | Công thức nổi bật |
|-----|------------|-------------|--------|-------------------|
| **Máy phát điện thường** (`GENERATOR` - ORANGE_CONCRETE_POWDER `Máy phát điện`) | Than (Coal) | 6,000 J/t | - | `CreativeItemI + FOREVER + CreativeItem` / `Quantum1 + EmptyShell + Quantum1` / `QY + MAGIC_SUGAR + QY` |
| **Máy phát Tận thế** (`FINAL_GENERATOR` - EMERALD_BLOCK `Máy phát điện Tận thế`) | Thỏi Quy tắc (`INFINITY`) | 1,000,000,000 J/t | 1B | `RuleMachineStar + RESOURCE + RuleMachineStar` / `QuantityItem + CreativeItemII + QuantityItem` / `RandomQuantum*3` - nhiên liệu 600,000 tick |
| **Máy phát Ánh sáng-Tối** (`SHINE_AND_DARK_GENERATOR` - REDSTONE_LAMP `Máy phát Sáng-Tối`) | Kim cương | 20,000 J/t | - | `ShineIngot + INFINITY + ShineIngot` / `SOLAR_GENERATOR_4` ở giữa |
| **Máy phát Thường** (`ORDINARY_GENERATOR` - GLASS `Máy phát cơ bản`) | Ánh sáng / Bóng tối / Bơ | 500 J/t | - | `UncontrollableEmpty + QY + UncontrollableEmpty` / `RealMagnet` |
| **Máy phát Sáng tạo** (`CREATIVE_GENERATOR` - BLACK_WOOL `Máy phát điện`) | Ngọc lục bảo | 99,999,999 J/t | - | `BoxOfQuantum + Cobblestone[3] + QuantityItem` / `RULE_STAR + ...` |
| **Máy phát Năng lượng Tận thế** (`FINAL_ENERGY_GENERATOR` - REDSTONE_LAMP `Máy phát ζ siêu cấp vũ trụ`) | ??? | 9.99e... J/t (vô hạn) | Vô hạn | `EmptyShell + COBBLESTONE + EmptyShell` - là máy cuối, phát gần vô hạn |

### Chi tiết Máy phát Tận thế
- **ID:** `MOMOTECH_FINAL_GENERATOR`
- **Lore:** *Nạp Thỏi Quy tắc để phát điện - 1B J/t*
- **Nhiên liệu:** `INFINITY` (Thỏi Quy tắc) - mỗi thỏi chạy 600,000 tick (~8 giờ). Trong thời gian đó máy phát 1B J/t liên tục, đủ nuôi mọi máy MomoTech.
- **Cách kiếm Thỏi Quy tắc:** Qua **Máy Tái cấu trúc Quy tắc** hoặc **Máy Tụ năng lượng**.

### Tụ điện

| Tụ | Lưu trữ | Tiêu thụ | Đặc điểm |
|----|---------|----------|----------|
| **Tụ Tận thế** (`FINAL_CAPITAL` - YELLOW_STAINED_GLASS `Tụ điện Tận thế`) | 2,000,000,000 J | - | Không dùng 2 cái cùng mạng! |
| **Tụ Vũ trụ** (`FINAL_ENERGY_GENERATOR`?) | Vô hạn | - | Máy phát đồng thời là tụ |
| **Tụ Ăn điện Vũ trụ** (`FINAL_ELECTRIC_EATER` - BLUE_STAINED_GLASS `Máy ăn điện Vũ trụ`) | - | 2,000,000,000 J/t | Dùng năng lượng vũ trụ để ăn điện, dùng để xả điện |

> **Cảnh báo:** Đừng đặt 2 **Tụ Tận thế** cùng một mạng năng lượng Slimefun, sẽ gây lỗi/dupe.

## 2. Máy sao chép

MomoTech nổi tiếng với khả năng dupe vật phẩm hợp pháp:

### Máy sao chép ngẫu nhiên (`RANDOM_COPIER` - DEEPSLATE_EMERALD_ORE `Máy nhân bản ngẫu nhiên`)
- **Lore:** *Đổ vật phẩm vào 36 ô phía trên (khác nhau cả loại lẫn số lượng), cắm Vật chất nguyên thủy γ, 10% sao chép ngẫu nhiên 1 vật phẩm* - `AbstractGUI`
- **Công thức:** `BugCrystal + FINAL_RULE + BugCrystal` / `FinalStar + QuantityItem + FinalStar` / `FinalItem*3`
- **GUI:** 36 ô trên (0-35) để vật phẩm, ô 46 là nhiên liệu `CREATIVE_ITEM_II` (γ), ô 52 là đầu ra.
- **Điều kiện chạy:**
  1. Cả 36 ô đều phải có vật phẩm (không được rỗng)
  2. Mỗi vật phẩm phải **khác nhau** cả loại và số lượng (nếu 2 ô cùng `STONE x1` thì không chạy)
  3. Ô đầu ra 52 còn chỗ
  4. Tiêu thụ 1 γ mỗi lần thử, 10% cơ hội (random 0-9 ==0) thì sao chép ngẫu nhiên 1 vật phẩm trong 36 ô (clone 1 cái, số lượng 1)
- **Ứng dụng:** Bỏ 36 vật phẩm quý (Netherite, Thỏi Quy tắc...) vào, farm γ để dupe.

### Máy sao chép Tận thế (`FINAL_COPIER` - DEEPSLATE_GOLD_ORE `Nhân bản - Tối thượng`)
- **Lore:** *Đặt vật phẩm cần sao chép vào ô giữa, nhập Lượng tử vướng víu để nhân bản - Tích hợp các hạt!*
- **Công thức:** `FinalItem + FinalStar + FinalItem` / `FINAL_RULE + RandomCopier + FINAL_RULE` / `FinalItem + QuantityItem + FinalItem`
- **Cách dùng:** Đơn giản hơn Random: đặt 1 vật phẩm vào ô giữa (36? thực tế là slot 4?), bỏ **Lượng tử vướng víu** (`QUANTUM1` - MAGMA_CREAM) vào ô nhiên liệu → máy tiêu thụ Lượng tử và nhân bản vật phẩm ra ô đầu ra. Không cần 36 vật phẩm khác nhau.
- **Tốc độ:** Mỗi tick thử 1 lần, tỉ lệ 100% (không phải 10% như Random).

### Kho đá cuội (`COBBLESTONE_STORE` - GLASS `Kho đá cuội`)
- **Lore:** *Cung cấp 48 ô lưu trữ, đá cuội cũng làm được rương*
- **Công thức:** `COBBLESTONE + EmptyShell + COBBLESTONE` / `EmptyShell + null + EmptyShell` / `COBBLESTONE + EmptyShell + COBBLESTONE`
- **Là rương** 48 slot, dùng để chứa đá cuội từ máy 48 stack/tick.

### Máy thu khoáng (`ORE_COLLECTOR` - DEEPSLATE_COAL_ORE `Máy nén khoáng ~ May nén tự động!`)
- **Lore:** *Tạo ngẫu nhiên 1 loại khoáng nén 3 tầng*
- **Công thức:** `CH + FinalStar + CH` / `STAR_ + BoxOfQuantum + STAR_` / `CH + QuantityItem + CH` (CH là `MOMOTECH_CH`? )
- **Ra:** Khối khoáng nén cấp 3 như `MINERAL_DIAMOND_BLOCK_III`.

## 3. Lò phản ứng & Năng lượng hạt

### Lò phản ứng Quy tắc (`RULE_REACTOR` - DIAMOND_ORE `Máy phản hạt tối cao`)
- **Lore:** *Nạp Uranium → 8x Neptunium, nạp Neptunium → 8x Plutonium* - 75,000 J/t
- **Dùng:** Bỏ `Small Chunk of Uranium` vào → ra 8 `Neptunium`; bỏ `Neptunium` → ra 8 `Plutonium`. Hệ số 8 cao hơn Slimefun thường (1:1).

### Máy tinh luyện Uranium Quy tắc (`U_GENERATOR` - GREEN_CONCRETE_POWDER)
- **Đã mô tả ở trang trước:** Đá cuội → 64 Uranium/tick.

### Máy tạo Lượng tử năng lượng (`ENERGY_QUANTUM_GENERATOR` - WHITE_WOOL)
- **Công thức:** `Quantum1 + FOREVER_ + Quantum1` / `UncontrollableEmpty + QuantityItem + UncontrollableEmpty` / `ENERGIZED_CAPACITOR*3`
- **2 chế độ:**
  - Bỏ **Lượng tử** (`QUANTUM` - SNOWBALL) + điện 500k J/t → ra **Lượng tử năng lượng** (`ENERGY_QUANTUM` - SLIME_BALL)
  - Bỏ 32 **Thỏi năng lượng** (`ENERGY_INGOT` - NETHERITE_INGOT) → ra **Lượng tử vướng víu** (`QUANTUM1`)

## 4. Máy đào & Khai thác vô hạn

### Máy đào vĩnh hằng (`ETERNAL_MINING_MACHINE` - GRAY_CONCRETE_POWDER `Máy đào vĩnh hằng`)
- **Lore:** *Nhập Trống để tăng tiến độ, đầy ra Hạt vĩnh hằng - Đào chậm rãi...*
- **Công thức:** `Quantum1*3` / `Quantum1 + GPS_TRANSMITTER_3 + RandomQuantum` / `RandomQuantum*3`
- **Cách dùng:** Là `AbstractProcessMachine`: bỏ `NONE` (Trống) vào ô nhập, mỗi tick tăng 1 tiến độ, khi đầy (cần rất nhiều Trống) → ra `MOMOTECH_FOREVER` hoặc `Hạt vĩnh hằng` (Hạt để chế đồ Tận thế).

### Máy tạo Hạt (`PARTICLE_CONSTRUCTOR` - GREEN_STAINED_GLASS `Tụ điện Hộp tử`)
- **Đã mô tả:** Điện nguyên tố/hợp số → Proton/Hợp tử.

## 5. Mẹo vận hành mạng điện MomoTech

1. **Đầu game:** Dùng **Máy phát than 6k J/t** nuôi 2-3 máy 2k J/t.
2. **Giữa game:** Chế **Máy phát Sáng-Tối 20k J/t** (cần Kim cương) → nuôi dàn 15k J/t.
3. **Cuối game:** Rush **Thỏi Quy tắc** → **Máy phát Tận thế 1B J/t** + **Tụ 2B J** → cân cả base.
4. **Anti-lag:** Máy MomoTech chỉ chạy khi còn chỗ trống, nên hãy dùng **Cargo** hút liên tục để máy không bị đứng.

Trang tiếp: [Công cụ & Vật phẩm đặc biệt →](cong-cu.md)
