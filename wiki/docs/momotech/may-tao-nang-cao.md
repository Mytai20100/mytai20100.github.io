# Máy tạo nâng cao MomoTech - Cần điện {#may-tao-nang-cao}

> Nhóm **MOMOTECH_INF_MACHINE** và **MOMOTECH_MACHINE** đều **tốn điện** (ghi `⚡ J/t`). Điện phải cấp qua mạng Slimefun (Energy Connector/Regulator) hoặc Capacitor. Máy chỉ chạy khi còn ô trống và đủ điện.

## 1. Nhóm Khoáng & Kim loại (15,000 J/t)

### Máy tạo Khoáng 64x (`MINERAL_GENERATOR` - BLUE_CONCRETE_POWDER)
- **Lore:** *Tự động tạo 64 tinh chất khoáng ngẫu nhiên khi còn ô trống* - 64x - 15,000 J/t
- **Công thức:** `INFINITY*3` / `RULE_STAR + MINERAL_ + RULE_STAR` / `ShineAndDarkIngot*3`
- **Sản phẩm:** 8 loại Tinh chất: `DIAMOND/IRON/GOLD/QUARTZ/EMERALD/REDSTONE/LAPIS/COAL` (lore *Tinh chất khoáng*). Mỗi tick chọn ngẫu nhiên 1 loại, push 64 cái.
- **Cách kiếm INFINITY:** Thỏi Quy tắc (NETHERITE_SCRAP), chế từ máy Tái cấu trúc Quy tắc.

### Máy tạo Khối Khoáng 16x (`MINERAL_BLOCK_GENERATOR` - GILDED_BLACKSTONE)
- **Lore:** *Tự động tạo 16 khối khoáng ngẫu nhiên* - 16x - 15,000 J/t
- **Công thức:** `INFINITY*3` / `RULE_STAR + MineralGenerator + RULE_STAR` / `ShineIngot*3`
- **Ra:** 9 loại khối khoáng nén? Thực tế là `GILDED_BLACKSTONE` đại diện, nhưng code random 8 loại khối.

### Máy Quy tắc Tụ (`RULE_CONSTRUCTOR` - CHISELED_POLISHED_BLACKSTONE *Ngưng tụ*)
- **Lore:** *64 khoáng/kim loại/thỏi quy tắc → 32 tinh chất/lõi* - 16x - 15,000 J/t
- **Công thức:** `INFINITY + Constructor + INFINITY` / `UncontrollableEmpty + RuleMachineStar + UncontrollableEmpty` / `CH + RuleStar + QY`
- **Dùng:** Bỏ 64 `MINERAL_BLOCK` hoặc `METAL_BLOCK` vào, máy sẽ nén thành 32 `Mineral Essence` tương ứng. Là máy trung gian để tinh luyện.

### Máy tạo Thỏi hợp kim (`INGOT_CONSTRUCTOR` - CRACKED_POLISHED_BLACKSTONE_BRICKS 32x)
- **Lore:** *Cho Nhân tố kim loại vào, ra 32 thỏi hợp kim ngẫu nhiên* - 32x
- **Công thức:** `ELECTRIC_INGOT_FACTORY_3 + ELECTRIC_SMELTERY_2 + ...` / `BoxOfQuantum ở giữa`
- **Cách dùng:** Đặt **Nhân tố kim loại** (`METAL_STAR` - GOLD_BLOCK) vào ô nhập, mỗi tick ra 32 thỏi hợp kim (Brass, Bronze...). Cần 15,000 J/t? Kiểm tra `IngotGenerator` capacity 15k.

## 2. Nhóm Bột (Rule Dust) - 10 máy 64x

MomoTech chia bột Slimefun thành 10 loại, mỗi loại có 1 máy riêng:

| Máy | Mục tiêu | Công thức chung |
|-----|----------|-----------------|
| `RULE_DUST_GENERATOR0` | Mặt nạ chung | 3x DUST_GENERATOR + INFINITY + ShineIngot |
| `RULE_DUST_GENERATOR1` | Bột Nhôm | ALUMINUM_DUST + INFINITY + EMPTY_SHELL + RULE_DUST0 |
| `RULE_DUST_GENERATOR2` | Bột Magie | MAGNESIUM_DUST ... |
| `RULE_DUST_GENERATOR3` | Bột Đồng | COPPER_DUST ... |
| `RULE_DUST_GENERATOR4` | Bột Vàng | GOLD_DUST ... |
| `RULE_DUST_GENERATOR5` | Bột Bạc | SILVER_DUST ... |
| `RULE_DUST_GENERATOR6` | Bột Chì | LEAD_DUST ... |
| `RULE_DUST_GENERATOR7` | Bột Thiếc | TIN_DUST ... |
| `RULE_DUST_GENERATOR8` | Bột Kẽm | ZINC_DUST ... |
| `RULE_DUST_GENERATOR9` | Bột Sắt | IRON_DUST ... |

- **Điện:** 15,000 J/t mỗi máy
- **Hiệu suất:** 64x (mỗi tick ra 64 bột)
- **Cách dùng:** Chỉ cần cấp điện, máy tự nhả bột đúng loại vào 8 ô. Dùng để cung cấp cho **Máy đúc thỏi vô hạn**.

## 3. Nhóm GEO & Tài nguyên

### Máy Khoan GEO Nhanh (`FAST_GEO` - NETHERITE_BLOCK `Máy khai thác tài nguyên địa lý`)
- **Lore:** *Cho Cuốc Netherite vào ô giữa, mỗi tick đào 1 tài nguyên GEO ngẫu nhiên, bỏ qua quần xã & trọng số* - 10,000 J/t
- **Công thức:** `INFINITY + RuleMachineStar + INFINITY` / `QY + Quantum1 + CH` / `INFINITY + GEO_MINER + INFINITY`
- **So với GEO Miner Slimefun:** Miner thường cần xét biome và oil, máy này ra **ngẫu nhiên** mọi GEO (Uranium, Nether Ice...) không cần thăm dò.

### Máy Khoan Quy tắc (`RULE_GEO` - NETHERITE_BLOCK `Máy khai thác tài nguyên địa lý lý Tận thế`)
- **Lore:** *Mỗi tick đào 16 GEO ngẫu nhiên* - 15,000 J/t
- **Công thức:** `RuleMachineStar + INFINITY + RuleMachineStar` / `FastGEO*3` / `ShineIngot*3`
- **Nâng cấp trực tiếp** của FAST_GEO, 16x.

### Máy tạo Uranium Quy tắc (`U_GENERATOR` - GREEN_CONCRETE_POWDER `Máy tinh luyện Uranium Quy tắc`)
- **Lore:** *Cho đá cuội vào, mỗi tick ra 64 Uranium* - 64x - 5,000 J/t
- **Công thức:** `ShineAndDarkIngot + RuleMachineStar + ShineIngot` / `Creative__ + QuantityItem + Creative__` / `3x ELECTRIC_ORE_GRINDER_3`
- **Dùng:** Bỏ `COBBLESTONE` vào ô nhập, ra 64 `Small Chunk of Uranium` mỗi tick. Dùng cho Lò phản ứng Quy tắc.

## 4. Nhóm Sinh học

### Máy Cây (`WOOD` - CHISELED_DEEPSLATE `Máy cưa cây`)
- **Lore:** *Cắm cây con/nấm Nether vào ô đầu, mỗi tick ra 32 gỗ, lá, phụ phẩm* - 32x - 10,000 J/t
- **Ví dụ:** Bỏ `OAK_SAPLING` → ra `OAK_LOG*32 + LEAVES*32 + APPLE*32`; `CRIMSON_FUNGUS` → `CRIMSON_STEM`...
- **Công thức:** `INFINITY + TREE_GROWTH_ACCELERATOR + INFINITY` / `RULE_STAR + ShineIngot + RULE_STAR`

### Máy Cây trồng (`PLANT` - CHISELED_DEEPSLATE `Máy cấy`)
- **Lore:** *Cắm hạt giống/cây (hoa súng, dây leo, cỏ...) vào ô đầu, mỗi tick ra 32 sản phẩm* - 32x - 10,000 J/t
- **Danh sách hỗ trợ 25 loại:** `POTATO, CARROT, PUMPKIN_SEEDS, MELON_SEEDS, BEETROOT_SEEDS, WHEAT_SEEDS, BROWN_MUSHROOM, BAMBOO, DEAD_BUSH, COCOA_BEANS, SUGAR_CANE, CACTUS, NETHER_WART, WITHER_ROSE, TORCHFLOWER_SEEDS, LILY_PAD, VINE, GLOW_LICHEN, SHORT_GRASS, SWEET_BERRIES, GLOW_BERRIES, SEAGRASS, KELP, SEA_PICKLE`
- **Ví dụ:** `POTATO` → `POTATO*32 + POISONOUS_POTATO*32`

### Máy Muối (`SALT_GENERATOR` - WHITE_STAINED_GLASS `Giếng muối`)
- **Lore:** *Không cần nguyên liệu, tự tạo 1~64 Muối mỗi tick*
- **Công thức:** `EmptyShell + ShineIngot + EmptyShell` / `ShineIngot + null + ShineIngot`
- **Dùng:** Muối là vật liệu phụ cho một số máy.

## 5. Nhóm Quái & Mô phỏng

MomoTech có 10 máy mô phỏng tháp farm, mỗi máy 32x 15,000 J/t:

| ID | Tên | Mô phỏng |
|----|-----|----------|
| `MONSTER_GENERATOR0` | Thế giới chính | Spawn tháp Overworld |
| `MONSTER_GENERATOR1` | Cá | Fishing farm |
| `MONSTER_GENERATOR2` | Piglin | Piglin bartering |
| `MONSTER_GENERATOR3` | Enderman | Ender farm |
| `MONSTER_GENERATOR4` | Creeper | Thuốc súng |
| `MONSTER_GENERATOR5` | Drowned | Đuốc, đồng |
| `MONSTER_GENERATOR6` | Động vật | Trứng, len |
| `MONSTER_GENERATOR7` | Slime | Slime ball |
| `MONSTER_GENERATOR8` | Blaze | Que lửa |
| `MONSTER_GENERATOR9` | Magma Cube | Kem magma |

- **Công thức chung:** `RULE_STAR + RuleMachineStar + RULE_STAR` / `ShineIngot + INFINITY + ShineIngot` / `Cobblestone[3] + Vật phẩm đặc trưng + Cobblestone[3]` (ví dụ `ROTTEN_FLESH` cho Overworld, `FISHING_ROD` cho cá)
- **Cách dùng:** Chỉ cần cấp điện và còn chỗ trống, mỗi tick nhả 32 vật phẩm mob ngẫu nhiên (xương, thịt, ngọc...). Dùng để farm mà không cần xây tháp.

## 6. Nhóm Tái cấu trúc

### Máy Tái cấu trúc Entropy (`ENTROPY_RECONSTRUCT` - BLACK_CONCRETE `Máy tái hợp hỗn loạn`)
- **Lore:** *Chuyển hóa vật thể theo chuỗi tiến hóa* - 7,500 J/t - chậm
- **Công thức:** `UncontrollableEmpty*3` / `Quantum1 + Bugggg + Quantum1` / `Shine1 + STAR + Dark1`
- **Dùng:** Bỏ vật phẩm vào, máy sẽ chuyển hóa theo chuỗi (xem công thức trong GUI, ví dụ `COBBLESTONE → ... → DIAMOND`).

### Máy Tái cấu trúc Quy tắc (`RULE_RECONSTRUCT` - BLACK_CONCRETE `Máy tái hợp Quy tắc`)
- **Lore:** *Chuyển hóa nhanh* - 75,000 J/t
- **Công thức:** `ShineIngot + RuleMachineStar + ShineIngot` / `Bugggg + EntropyReconstruct + Bugggg` / `CreativeItemII + QuantityItem + FOREVER`
- **Là bản nâng cấp** của Entropy, nhanh hơn 10 lần.

### Máy Sáng-Tối Quy tắc (`RULE_SHINE_AND_DARK_CONSTRUCTOR` - GLOWSTONE `Máy thu thập Quy tắc`)
- **Lore:** *Đặt ở Y<0 hoặc Y>256, cho Cuốc Netherite vào, xác suất 50%* - 5,000 J/t
- **So với bản thường** (`SHINE_AND_DARK_CONSTRUCTOR` 500 J/t 1%): bản Quy tắc tăng xác suất lên 50% ra Ánh sáng/Bóng tối.

## 7. Máy Lò phản ứng Quy tắc (`RULE_REACTOR` - DIAMOND_ORE `Máy phản hạt tối cao`)
- **Lore:** *Nạp Uranium → 8x Neptunium, nạp Neptunium → 8x Plutonium* - 75,000 J/t
- **Công thức:** `NETHER_STAR_REACTOR + NUCLEAR_REACTOR + NETHER_STAR_REACTOR` / `ShineIngot + RuleMachineStar + ShineIngot` / `Creative__ + QuantityItem + Creative__`
- **Dùng:** Là lò phản ứng nâng cấp, biến Uranium thành Neptunium/Plutonium với hệ số 8 thay vì 1 của Slimefun thường.

Tất cả máy trên đều cần **Mạng năng lượng Slimefun** và sẽ dừng khi đầy. Hãy dùng **Tụ Tận thế 2B J** để cấp điện ổn định.

Trang tiếp: [Hệ thống số học & Lượng tử →](he-thong-so-hoc.md)
