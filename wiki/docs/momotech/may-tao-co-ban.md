# Máy tạo cơ bản MomoTech - Không cần điện {#may-tao-co-ban}

> Đặc điểm chung của nhóm **MOMOTECH_ORDINARY_MACHINE**: **không tốn điện**, **chỉ chạy khi ô đầu ra còn trống**, hiệu suất ghi `Nx` nghĩa là mỗi tick (1/20 giây) sẽ đẩy N vật phẩm vào kho.

Hầu hết máy là `AbstractEasyGeneratorGUI` với 8 ô đầu ra (0-7) và ô trống ở 8. Chỉ cần đặt máy xuống là tự chạy, không cần nhiên liệu.

## Danh sách 22 máy cơ bản

| Máy | Icon | Tạo ra | Hiệu suất | Ghi chú |
|-----|------|--------|-----------|---------|
| **Máy tạo đá** | STONE | Đá phế thải / Đá cuội / Đá cuội sâu | 8x | Ba loại đá ngẫu nhiên |
| **Máy tạo đá cuội** | COBBLESTONE | Đá cuội | 8x | Chỉ đá cuội thuần |
| **Máy tạo đá cuội nén** | SNOW_BLOCK | Đá cuội (logic nén) | 64x | Tự nhả đá cuội khi còn chỗ |
| **Máy tạo đá cuội Tận thế** | SLIME_BLOCK | Đá cuội 48 stack/tick | 48 stack | Cuối game, 1 tick đầy rương |
| **Máy tạo đá khối** | SNOW_BLOCK | Đá khối (Stone Chunk) | 8x | Dùng cho xây dựng |
| **Máy tạo cát** | SANDSTONE | Cát đỏ / Cát / Sỏi / Cát linh hồn | 8x | 4 loại cát ngẫu nhiên |
| **Máy tạo thủy tinh** | GLASS | Thủy tinh | 8x | Nung sẵn |
| **Máy tạo băng** | BLUE_ICE | Băng | 1x | Dùng cho máy khác |
| **Máy tạo quặng thô** | DIAMOND_ORE | Quặng thô ngẫu nhiên | 1x | Mọi quặng thô vanilla |
| **Máy tạo bột quặng** | SAND | Bột quặng Slimefun | 6x | 8 loại bột Slimefun ngẫu nhiên |
| **Máy tạo carbon** | COAL_BLOCK | Carbon Slimefun | 1x | Giải quyết carbon đầu game |
| **Máy tạo khuôn mẫu** | MELON | Khuôn mẫu | 1x | Mẫu phiên bản mới |
| **Máy câu cá** | SEA_LANTERN | Cá các loại | 1x | Cá vanilla ngẫu nhiên |
| **Máy tạo đèn ếch** | OCHRE_FROGLIGHT | Đèn ếch | 4x | 3 màu đèn ếch |
| **Máy tạo sợi** | GRAY_WOOL | Sợi | 3x | Dùng chế cung |
| **Máy tạo prismarine** | PRISMARINE | Prismarine | 8x | Khối biển |
| **Máy tạo ong** | BEE_NEST | Vật phẩm ong | 1x | Mật, tổ, v.v. |
| **Máy tạo mắt nhện** | SPAWNER | Mắt nhện | 2x | Dùng cuối game |
| **Máy tạo rương** | JUNGLE_LOG | Rương | 1x | Rương gỗ |
| **Máy tạo cuốc kim cương** | DIAMOND_BLOCK | Cuốc kim cương | 8x | 8 cuốc/tick |
| **Máy tạo khối lệnh** | POLISHED_BLACKSTONE | Khối lệnh (COMMON/REPEATING/CHAIN) | 1x | Khối lệnh thật! |
| **Máy tạo đá lửa** | DEEPSLATE_GOLD_ORE | Đá lửa | 4x | Flint |

### Ví dụ công thức chi tiết

#### Máy tạo đá (`STONE_GENERATOR`)
- **Công thức:** `CREATIVE_ITEM_I + STAR + CREATIVE_ITEM` / `UncontrollableEmpty + STONE + UncontrollableEmpty` / `CreativeItem + UncontrollableEmpty + CREATIVE_ITEM_I`
- **STAR** là `STAR_OF_ALL` (HEART_OF_THE_SEA `Lõi máy`), **CREATIVE_ITEM** là Vật chất nguyên thủy α/β, **UncontrollableEmpty** là Void mất kiểm soát.
- **Cách kiếm STAR:** Lõi máy này được chế từ nhiều Vật phẩm Tối thượng, là lõi của hầu hết máy MomoTech.
- **Đặt máy:** Đặt xuống đất, 8 ô trên cùng sẽ đầy đá dần. Dùng Hopper hoặc Cargo để hút.

#### Máy tạo quặng thô (`ORE_GENERATOR`) 1x
- **Công thức:** `CREATIVE_ITEM_I + STAR + CREATIVE_ITEM` / `ShineAndDarkIngot + DIAMOND_BLOCK + ShineAndDarkIngot` / `CreativeItem + STAR + CREATIVE_ITEM_I`
- **ShineAndDarkIngot** là Thỏi Sáng-Tối (FLINT), kiếm từ Máy Sáng-Tối.
- **Sản phẩm:** Quặng thô Sắt, Vàng, Đồng, v.v. ra ngẫu nhiên 1 cái/tick.

#### Máy tạo khối lệnh (`COMMAND_BLOCK_GENERATOR`) - Đặc biệt
- **Công thức:** `CREATIVE_ITEM_II + BoxOfQuantum + CREATIVE_ITEM_II` / `RuleMachineStar + CommandBlock + RuleMachineStar` / `CREATIVE_ITEM_II + STAR + CREATIVE_ITEM_II`
- **Sản phẩm:** Mỗi tick ra 1 khối lệnh ngẫu nhiên trong 3 loại: `COMMAND_BLOCK`, `REPEATING_COMMAND_BLOCK`, `CHAIN_COMMAND_BLOCK`. Đây là cách duy nhất kiếm khối lệnh survival mà không cần cheat.
- **Lưu ý:** Khối lệnh tạo ra là “Hàng nhái” (`COMMAND_BLOCK_GETTER` - COMMAND_BLOCK `Hàng nhái - Khối lệnh`) nhưng vẫn hoạt động như khối lệnh vanilla khi đặt.

#### Máy tạo đá cuội Tận thế (48 stack/tick)
- **ID:** `MOMOTECH_COBBLESTONE_GENERATOR_FINAL` (SLIME_BLOCK `Máy tạo đá ngéphịc entro...`)
- **Công thức:** `INFINITY + FOREVER_ + INFINITY` / `CH + Cobblestone[4] + CH` / `FOREVER + Bugggg + FOREVER` (FOREVER là `Điểm kỳ dị vĩnh hằng`)
- **Cách dùng:** Chỉ cần đặt, mỗi tick tự nhả **48 stack đá cuội** vào 8 ô (6 stack/ô). Dùng để làm **Kho đá cuội** (COBBLE_STONE_STORE - GLASS `Kho đá cuội` 48 ô lưu trữ).

## Nhóm máy tạo Void / NONE

| Máy | Icon | Hiệu suất | Cách dùng |
|-----|------|-----------|-----------|
| **Máy tạo NONE** | DIRT | ... | Đặt xuống tự tạo NONE |
| **Máy tạo Void 8x** | BLACK_CONCRETE_POWDER | 8x | Tự tạo Void khi còn chỗ |
| **Máy tạo Void 64x Cường hóa** | WHITE_CONCRETE_POWDER | 64x | Không cần nhập liệu, 64 Void/tick |

Hai máy này là **nguồn sống** của cả addon. Hãy chế chúng đầu tiên.

## Máy đặc biệt đầu game

### Máy tạo rương (CHEST_GENERATOR) 1x
- Công thức: `CREATIVE_ITEM_I + STAR + CREATIVE_ITEM` / `UncontrollableEmpty + ENDER_CHEST + UncontrollableEmpty`
- Ra rương gỗ, dùng để chế Hòm.

### Máy tạo sợi (LINE_GENERATOR) 3x
- `CREATIVE_ITEM_I + STAR + CREATIVE_ITEM` / `UncontrollableEmpty + STRING + UncontrollableEmpty`
- 3 sợi/tick, giải quyết nhu cầu dây đầu game.

## Cách sử dụng chung

1. **Đặt máy** hướng bất kỳ (không cần đa khối).
2. **Kiểm tra ô trống:** Máy chỉ chạy khi 1 trong 8 ô đầu ra chưa đầy ( <64). Nếu đầy, máy đứng im tiết kiệm TPS.
3. **Hút đồ:** Dùng Phễu (Hopper), Cargo của Slimefun, hoặc Networks. Vì máy không tốn điện nên có thể spam hàng chục máy.
4. **Không cần nhiên liệu:** Đặt xong quên luôn, chỉ cần dọn rương.

> **Hiệu suất Nx:** Ví dụ 8x nghĩa là mỗi tick gọi `inv.pushItem(getOut().clone(), slots)` 1 lần nhưng vật phẩm đó có thể stack 8? Thực tế code `AbstractEasyGeneratorGUI` chỉ push 1 stack/tick, nhưng lore ghi 8x là so với máy vanilla.

Trang tiếp: [Máy tạo nâng cao cần điện →](may-tao-nang-cao.md)
