# Công cụ & Vật phẩm đặc biệt MomoTech {#cong-cu}

## 1. Cuốc

| Cuốc | ID | Đặc điểm |
|------|----|----------|
| **Cuốc lượng tử** | `MOMOTECH_PICKAXE` (NETHERITE_PICKAXE `Cuốc lượng tử` lore *Siêu nhanh tăng tốc*) | Nhấp phải để tăng tốc (tăng haste) |
| **Cuốc lượng tử vướng víu** | `MOMOTECH_SILK_TOUCH_PICKAXE` (NETHERITE_PICKAXE `Cuốc lượng tử vướng víu`) | Có Silk Touch, dùng trong ShineAndDarkConstructor |
| **Cuốc Tận thế** | `MOMOTECH_RULE_PICKAXE` (DIAMOND_PICKAXE `Cuốc Tận thế`) | Dùng trong máy GEO, RuleReconstruct |

**Máy đổi Cuốc** (`NETHERITE_PICKAXE_CHANGER` - BLACK_STAINED_GLASS `Máy chuyển đổi cuốc` 100 J/t): Công thức `NETHERITE_UPGRADE_SMITHING_TEMPLATE + RealMagnet + ...` → 8 `DIAMOND_PICKAXE` → 8 `NETHERITE_PICKAXE`.

## 2. Giáp & Kiếm

### Giáp Tận thế
- **Ủng Tận thế** (`RULE_BOOTS` - NETHERITE_BOOTS): Lore *Chống phóng xạ, Miễn nhiễm ong, Bão hòa, Chống lửa, Hồi phục, Thở dưới nước, Kháng lực II, Cấp tốc II, Tốc độ, Nhảy cao I, Ràng buộc linh hồn*. Là giáp **ProtectArmor** (đội lên đầu miễn nhiễm sát thương thực thể, không bao gồm cháy/rơi).
- **Mũ Bảo hộ** (`PROTECT_ITEM` - TURTLE_HELMET `Mũ thực thi` lore *Đội lên đầu miễn nhiễm tấn công thực thể!* - màu xanh).

### Kiếm Lời Thề (`STONE_SWORD` - DIAMOND_SWORD `Kiếm Lời Thề Chiến Thắng`)
- **Lore:** *Kiếm trong đá... Gây sát thương cực lớn +999999999999.99*
- **Cách kiếm:** Trong code `STONE_SWORD` là vật phẩm tặng kèm? Có thể đào ra từ máy?
- **Dùng:** Một hit chết mọi mob, kể cả trùm.

### Búa khắc bí ngô (`PUMPKIN_CARVER` - CARVED_PUMPKIN `Máy khắc bí ngô`)
- **Lore:** *Tự động khắc bí ngô - Hiệu suất INFINITY*
- **Công thức:** `UncontrollableEmpty*3` / `ELECTRIC_MOTOR + null + ELECTRIC_MOTOR` / `EmptyShell + NONE + EmptyShell` - là máy, khi đặt và cắm điện sẽ tự khắc bí ngô thành `CARVED_PUMPKIN` vô hạn.

## 3. Vật phẩm hồi phục

| Vật phẩm | Icon | Công dụng |
|----------|------|-----------|
| **Bù bão hòa** (`FULL` - EGG `Bù bão hòa`) | Trứng | Lore *Hay đói? Đầu game làm không nổi thứ khác? Dùng tôi! Nhấp phải để tiêu thụ và ngay lập tức nhận bão hòa* - Ăn 1 cái đầy thanh đói + bão hòa 20 |
| **Bình kinh nghiệm** (`EXP` - EXPERIENCE_BOTTLE `Kinh nghiệm - Rất nhiều kinh nghiệm - Rất nhiều`) | Chai exp | Ném ra tăng 20 cấp |
| **Thuốc giải BUG** (`CLEAR` - NETHERITE_INGOT `Máy tẩy lượng`) | Thỏi | Lore *Giúp bạn xóa các hiệu ứng thuộc tính trên người, chủ yếu cho hiệu ứng từ vật phẩm lượng tử* - Nhấp phải xóa buff xấu do Lượng tử gây ra |
| **Máy sửa trang bị** (`FIXER` - IRON_BLOCK `Máy sửa bị`) | Khối sắt | *Tự động sửa trang bị cho bạn* - đặt xuống tự sửa đồ trong inventory |
| **Máy sửa vật phẩm Slimefun** (`ITEM_FIXER` - ORANGE_CONCRETE_POWDER `Máy đặt lại vật phẩm`) | Bột bê tông cam | *Đặt vào máy sẽ tự đặt lại vật phẩm Slimefun bị lỗi* - dùng khi vật phẩm Slimefun bị mất NBT |

## 4. Vật phẩm troll / nguy hiểm

| Vật phẩm | Icon | Lỗi |
|----------|------|-----|
| **Lượng tử** (`QUANTUM` - SNOWBALL) | *Nhấp phải có vẻ sẽ xảy ra chuyện không hay* | Nhấp phải sẽ random dịch chuyển, sét đánh, hoặc chết |
| **Lượng tử vướng víu** (`QUANTUM1` - MAGMA_CREAM) | *Nhấp phải cũng...* | Tương tự |
| **Lượng tử ngẫu nhiên** (`RANDOM_QUANTUM` - CLAY_BALL `Ngẫu nhiên lượng tử`) | *Nhấp phải sẽ chết, đấy* | Nhấp phải chết ngay lập tức! |
| **Lượng tử năng lượng** (`ENERGY_QUANTUM` - SLIME_BALL) | *Nguy hiểm, năng lượng cao!* | Cầm trên người gây hiệu ứng phóng xạ nếu không có giáp |
| **Vật phẩm sát thương** (`DAMAGE_ITEM` - CHAIN_COMMAND_BLOCK `Thử thách kỳ lạ (?)`) | *Một đòn tất sát! Xóa sổ ngay lập tức!* | Vũ khí 1 hit kill, dùng để test |
| **Thử ném đồ** (`THROW` - GOLD_INGOT `Máy ném đồ`) | *Nhấp phải để ném ra tất cả vật phẩm, bao gồm cả giáp* | Nhấp phải sẽ drop toàn bộ inventory! |

## 5. Máy tiện ích

### Máy truyền tống (`TRANSPORTER` - PISTON `Máy truyền tống`)
- **Lore:** *Cắm Linh kiện số để đặt khoảng cách, mở máy sẽ dịch chuyển theo hướng máy quay*
- **Công thức:** `UncontrollableEmpty + null + UncontrollableEmpty` / `null + PISTON + null` / `UncontrollableEmpty + null + UncontrollableEmpty`
- **Cách dùng:** Đặt máy hướng Bắc/Nam/Đông/Tây, bỏ **Linh kiện số** `5.0` vào → máy sẽ dịch chuyển người mở GUI 5 block về phía trước. Dùng để làm thang máy.

### Máy mở hộp (`OPEN_BOX_ITEM` - PURPLE_STAINED_GLASS `Máy mở hộp`)
- **Lore:** *Có thể tháo rời hộp lượng tử, nhưng chỉ lượng tử vướng víu được giữ lại...*
- **Công thức:** `Quantum1 + EmptyShell + Quantum1` / `EmptyShell*3` / `NONE*3`
- **Dùng:** Đặt **Hộp lượng tử** đã chứa đồ vào → máy sẽ trả lại Hộp rỗng + Lượng tử vướng víu bên trong.

### Máy hút quặng (`INGOT_CONSTRUCTOR` đã mô tả) và **Máy nén đặc biệt** (`SPECIAL_THINGS_CONSTRUCTOR` - GLASS `Máy nén đặc biệt`)
- **Lore:** *Nén 12 Hạt vĩnh hằng, 16 Proton hoặc 32 Hợp tử thành thỏi tương ứng* - 200 J/t
- **Công thức:** `FOREVER_ + Quantum1 + FOREVER_` / `UncontrollableEmpty + CARBON_PRESS_3 + UncontrollableEmpty` / `RandomQuantum + ElectricityMagnet + EnergyQuantum`
- **Dùng:** Là máy nén cuối game để tạo `PROTON_INGOT`, `ZYGOTE_INGOT`.

### Máy đặt lại ID (`ID_PUTTER` / `ID_CHANGER` đã mô tả ở Hệ thống số học)

## 6. Khối trang trí & lưu trữ

- **Kho đá cuội** (`COBBLESTONE_STORE` - GLASS `Kho đá cuội` 48 ô)
- **Máy phát đá cuội Tận thế** (48 stack/tick) - đã mô tả
- **Máy tạo Hạt** (`PARTICLE_CONSTRUCTOR`) - cũng là máy trang trí

## 7. Lời khuyên cuối

- **Đừng nhấp phải** Lượng tử ngẫu nhiên nếu bạn không muốn chết!
- **Đừng đặt 2 Tụ Tận thế** cùng mạng.
- **Luôn để ô trống** cho máy chạy.
- **Dùng Giáp Tận thế** khi cầm Lượng tử năng lượng để tránh phóng xạ.
- **Bắt đầu từ Void** và đi lên, đừng cố rush Tận thế khi chưa có điện 20k J/t.

---

**Tài liệu tham khảo mã nguồn:** `MOMOTECH_RAW_ITEMS.md` (292 ID), `Items.java` (315 dòng định nghĩa), `MachineRegisterTask.java` (631 dòng công thức). Mọi công thức đều có thể xem trong game bằng cách nhấp vào máy trong Guide.

**Chúc bạn chơi MomoTech vui vẻ và đừng để BUG nuốt chửng thế giới!**

*Wiki được Việt hóa từ code gốc tiếng Trung bởi AI, dựa trên lore trong `Items.java` và logic trong `AbstractEasyGeneratorGUI`, `RandomCopier`, `Plant`, `FinalGenerator`... Nếu thiếu sót, hãy báo qua nhóm QQ 827684043.*

