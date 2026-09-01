# MomoTech - Công nghệ Mã Loạn {#momotech}

MomoTech (hay còn gọi là **Công nghệ Mã Loạn**) là addon Slimefun4 do **QYhB05** phát triển, tập trung vào việc sản xuất vô hạn tài nguyên, nhân bản vật phẩm và phát điện ở quy mô cực lớn. Addon lấy cảm hứng từ lỗi (BUG) và các khái niệm lập trình như tràn số, vật liệu hư không (Void), vòng lặp vô hạn và cuối cùng là “Quy tắc”.

> **Thông tin addon**
> - Tên: MomoTech / Công nghệ Mã Loạn
> - Tác giả: QYhB05 (học sinh, code nghiệp dư), đồng sáng lập Chenmose, hỗ trợ skybule
> - Phiên bản hiện tại: 1.1.11 - API Minecraft 1.20.1, Slimefun RC-35
> - Liên hệ: QQ 3392295184@qq.com, nhóm QQ 827684043
> - Nguồn mở MIT, đã ngừng cập nhật nhưng vẫn hoạt động ổn định
> - Ngôn ngữ: Mặc định tiếng Trung, Wiki này đã Việt hóa toàn bộ lore và cách dùng

## Mục lục tài liệu

1. [Tổng quan & Cài đặt](#cai-dat)
2. [Nguyên lý cốt lõi: BUG - VOID - NONE - Quy tắc](#nguyen-ly)
3. [Nhóm vật phẩm trong Slimefun Guide](#nhom-vat-pham)
4. [Vật liệu cơ bản và chuỗi tiến hóa](vat-lieu.md)
5. [Máy tạo cơ bản không cần điện](may-tao-co-ban.md) - 22 máy 8x
6. [Máy tạo nâng cao cần điện](may-tao-nang-cao.md) - Mineral, Dust, GEO, Plant, Wood
7. [Hệ thống số học & Lượng tử](he-thong-so-hoc.md) - Digital, Symbol, ID
8. [Năng lượng & Sao chép](nang-luong-va-sao-chep.md) - 1B J/t, Final Copier
9. [Công cụ & Vật phẩm đặc biệt](cong-cu.md) - Cuốc lượng tử, Giáp, Bù bão hòa

## Cài đặt {#cai-dat}

### Yêu cầu
- Spigot/Paper 1.20.1+
- Slimefun4 RC-35 trở lên (CS-CoreLib/Dough tự đi kèm)
- Đã cài Slimefun trước, khởi tạo thế giới, đảm bảo `auto-update` tắt nếu sợ xung đột

### Các bước
1. Tải `MomoTech-1.1.11.jar` bỏ vào `plugins/`
2. Khởi động server lần đầu để sinh `plugins/MomoTech/config.yml`
3. Kiểm tra log: phải thấy `MomoTech has been on enable` và `Machine register successfully`
4. Vào game `/sf guide` → Tìm nhóm **MOMOTECH** (biểu tượng `CHAIN_COMMAND_BLOCK` hoặc `SOUL_CAMPFIRE`)

> **Lưu ý:** Tác giả khuyên luôn dùng bản mới nhất, bản cũ có bug chưa sửa (ví dụ máy BUG - Ngày tháng cần cộng thêm +0).

## Nguyên lý cốt lõi {#nguyen-ly}

MomoTech xoay quanh 3 vật liệu triết học lập trình:

### 1. VOID (Hư không) - `MOMOTECH_NONE` / `MOMOTECH_EMPTY_SHELL`
- Biểu tượng: `STRUCTURE_VOID` tên **Void** lore `NULL`
- Là “vật liệu rỗng” nhưng lại là nguyên liệu quan trọng nhất. Gần như mọi chuỗi chế tạo đều bắt đầu từ Void.
- Cách tạo:
  - Thủ công: 8 `DIRT` + `NONE` ở giữa (Máy tạo NONE)
  - Tự động: **Máy tạo Void** (BLACK_CONCRETE_POWDER) 8x → cho ra Void mỗi tick nếu ô trống
  - Nâng cấp: **Máy tạo Void - Bản cường hóa** (WHITE_CONCRETE_POWDER) 64x, không cần nhập liệu
- Bản chất: Void mất kiểm soát (GRAY_STAINED_GLASS_PANE `§k123 Void`) là dạng Void cuối game, sản xuất 48x bằng UncontrollableEmptyGenerator.

### 2. NONE (Không có gì) - `MOMOTECH_NONE`
- Biểu tượng: BLACK_WOOL `NONE`
- Là “khoảng trống” thuần túy, dùng để chế tạo Void. Tạo ra từ **Máy tạo NONE** (DIRT) - 3 `DIRT` + 2 `GLASS` + 3 `EMPTY_SHELL`.

### 3. BUG - 6 loại BUG
MomoTech coi lỗi lập trình là tài nguyên:
- **BUG - Biểu thức** (WHITE_STAINED_GLASS_PANE) - vật chất BUG cơ bản
- **BUG - Thập phân** (RED) - lỗi số thập phân
- **BUG - Ngày tháng** (ORANGE) - lỗi ngày tháng, đôi khi phải cộng +0 mới ra
- **BUG - Quá tải dương** (YELLOW) - tràn số dương (Integer overflow)
- **BUG - Quá tải âm** (GREEN) - tràn số âm
- **BUG - Hệ thống** (BLUE) - lỗi hệ thống
- Cách kiếm: qua **Máy tăng dần**, **Máy kết hợp số thường**, **Tụ điện BUG**, và các máy xử lý số học.

### 4. Quy tắc (RULE) - giai đoạn cuối
Khi bạn đã làm chủ BUG, Void, NONE, lượng tử, bạn sẽ nén thành:
- `MOMOTECH_INFINITY` - **Thỏi Quy tắc** (NETHERITE_SCRAP)
- `MOMOTECH_FINAL_RULE` - **Khái niệm vật phẩm** (BONE_MEAL)
- `MOMOTECH_RULE_STAR` - **Thời khắc** (IRON_NUGGET) và `RULE_MACHINE_STAR` - **Linh kiện máy Quy tắc**
- Đây là nguyên liệu để chế tạo các máy 15,000 J/t và máy phản ứng Quy tắc.

## Nhóm vật phẩm trong Guide {#nhom-vat-pham}

MomoTech đăng ký 11 nhóm (MultiGroup) trong `/sf guide`:

| Nhóm | ID | Ý nghĩa |
|------|----|---------|
| **Chú ý** | `MOMOTECH__` | Nhắc nhở: máy không ghi điện thì không tốn điện, máy chỉ chạy khi ô trống |
| Máy sản xuất cơ bản | `MOMOTECH_ORDINARY_MACHINE` | 22 máy tạo 1x-8x không/vừa tốn điện |
| Vật phẩm | `MOMOTECH_ITEM` | Vật liệu thuần túy |
| Công cụ | `MOMOTECH_TOOL` | Cuốc, giáp, kiếm |
| Tối thượng | `MOMOTECH_FINAL` | Máy cuối game, Copier |
| Máy | `MOMOTECH_MACHINE` | Máy trung gian (DigitalConstructor, QuantityConstructor...) |
| Khoáng | `MOMOTECH_MINERAL` | Vật liệu nén |
| Tưởng nhớ | `MOMOTECH_THANKING` | QY, Chenmose, skybule, Resource |
| Vô hạn | `MOMOTECH_INF` | Máy vô hạn không tốn nhiều |
| Điện | `MOMOTECH_ELECTRICITY` | Máy phát/tụ điện |
| Máy vô hạn | `MOMOTECH_INF_MACHINE` | Máy hiệu suất 15k-64x |

**Quy tắc vàng của mọi máy MomoTech:**
- **Không ghi “⚡ J/t” → không tốn điện**
- **Chỉ chạy khi ô đầu ra còn chỗ trống** (trừ máy điện)
- Tốc độ ghi “Hiệu suất: Nx” nghĩa là mỗi tick tạo N vật phẩm, hoặc N lần logic.

## Lộ trình chơi gợi ý

1. **Đầu game:** Chế **Máy tạo NONE** (DIRT) → **Máy tạo Void 8x** → tích Void
2. **Tích lũy:** Dùng Void chế **Máy tạo đá cuội**, **Máy tạo cát**, **Máy tạo carbon** để có vật liệu Slimefun cơ bản
3. **Số học:** Chế **Máy tạo số** + **Máy tạo ký hiệu** (tốn 2,000 J/t) → tạo Linh kiện số → **Máy tăng dần** → ra BUG Biểu thức
4. **Lượng tử:** **Máy tạo Lượng tử ngẫu nhiên** → **Hộp lượng tử** → **Lượng tử vướng víu** → mở khóa **Máy sao chép ngẫu nhiên**
5. **Cuối game:** Nén Void/BUG thành **Khái niệm Quy tắc** → **Máy Quy tắc** → **Lò phản ứng Quy tắc** → **Máy phát Tận thế 1B J/t**

Chi tiết từng máy và công thức ở các trang con.

## Mẹo chung
- Dùng **Bàn chải Cargo** hoặc **Tụ điện MomoTech** để lưu 16 triệu J.
- Máy `MOMOTECH_FINAL_GENERATOR` phát 1,000,000,000 J/t nhưng cần **Thỏi Quy tắc** làm nhiên liệu (600,000 tick).
- Đặt **Máy tạo Ánh sáng/Bóng tối** ở Y <0 hoặc Y>256 để có 1% ra Ánh sáng/Bóng tối, dùng để chế **Máy phát Ánh sáng 20k J/t**.
- Nếu máy BUG không ra đúng loại, thử **cộng thêm +0** vào linh kiện số (lỗi hiển thị Ngày tháng).

Tiếp theo: [Vật liệu chi tiết →](vat-lieu.md)
