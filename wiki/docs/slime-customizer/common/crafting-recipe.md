---
sidebar_position: 4
---

# Công thức Chế tạo

Mỗi vật phẩm đều cần chỉ định công thức. Trang này sẽ giải thích thống nhất về phần công thức.

```yaml
  crafting-recipe-type: ENHANCED_CRAFTING_TABLE
  crafting-recipe:
    1:
      type: VANILLA
      id: STICK
      amount: 1
    2:
      type: NONE
      id: N/A
      amount: 1
    3:
      type: NONE
      id: N/A
      amount: 1
    4:
      type: VANILLA
      id: STICK
      amount: 1
    5:
      type: NONE
      id: N/A
      amount: 1
    6:
      type: NONE
      id: N/A
      amount: 1
    7:
      type: NONE
      id: N/A
      amount: 1
    8:
      type: NONE
      id: N/A
      amount: 1
    9:
      type: NONE
      id: N/A
      amount: 1
```

| Nội dung | Mô tả | Đầu vào hợp lệ |
| --- | ----------- | ----------------- |
| crafting-recipe-type | Loại công thức dùng để chế tạo vật phẩm. | Xem [Các loại công thức khả dụng](#recipe-types). |
| crafting-recipe.#.type | Loại vật phẩm trong công thức. | **NONE** Không có vật phẩm <br />**VANILLA** Vật phẩm nguyên bản <br /> **SLIMEFUN** Vật phẩm Slimefun <br />**SAVEDITEM** [Vật phẩm đã lưu](./saved-items) |
| crafting-recipe.#.id | Định danh của vật phẩm trong công thức. | [ID vật phẩm nguyên bản (Material)](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) hoặc [vật phẩm đầu lâu](../common/skull-items) hoặc ID của [vật phẩm đã lưu](../common/saved-items).<br />Khi loại vật phẩm là **NONE** thì không cần điền. |
| crafting-recipe.#.amount | Số lượng vật phẩm trong công thức. | Số nguyên, tối thiểu là 1, tối đa là số lượng tối đa của một nhóm vật phẩm.<br />Khi loại vật phẩm là **NONE** thì không cần điền. |

## Các loại công thức khả dụng {#recipe-types}

Bạn chỉ có thể sử dụng các loại công thức sau (đều là cấu trúc đa khối):

- **ENHANCED_CRAFTING_TABLE** [Bàn chế tạo Nâng cao](https://slimefun-wiki.guizhanss.cn/Enhanced-Crafting-Table)
- **MAGIC_WORKBENCH** [Bàn chế tạo Ma thuật](https://slimefun-wiki.guizhanss.cn/Magic-Workbench)
- **ARMOR_FORGE** [Lò rèn Giáp](https://slimefun-wiki.guizhanss.cn/Armor-Forge)
- **COMPRESSOR** [Máy nén](https://slimefun-wiki.guizhanss.cn/Compressor)
- **PRESSURE_CHAMBER** [Buồng Áp suất](https://slimefun-wiki.guizhanss.cn/Pressure-Chamber)
- **SMELTERY** [Lò luyện kim](https://slimefun-wiki.guizhanss.cn/Smeltery)
- **ORE_CRUSHER** [Máy nghiền Quặng](https://slimefun-wiki.guizhanss.cn/Ore-Crusher)
- **GRIND_STONE** [Đá mài](https://slimefun-wiki.guizhanss.cn/Grind-Stone)
- **ANCIENT_ALTAR** [Bàn thờ Cổ đại](https://slimefun-wiki.guizhanss.cn/Ancient-Altar)
- **JUICER** [Máy ép Nước trái cây](https://slimefun-wiki.guizhanss.cn/Juicer)
- **NONE** Không thể chế tạo

:::warning Lưu ý

Khi viết công thức, bạn cần lưu ý đáp ứng các yêu cầu sau.

Các loại công thức sau chỉ hỗ trợ đầu vào số lượng là 1:

- **ENHANCED_CRAFTING_TABLE** [Bàn chế tạo Nâng cao](https://slimefun-wiki.guizhanss.cn/Enhanced-Crafting-Table)
- **MAGIC_WORKBENCH** [Bàn chế tạo Ma thuật](https://slimefun-wiki.guizhanss.cn/Magic-Workbench)
- **ARMOR_FORGE** [Lò rèn Giáp](https://slimefun-wiki.guizhanss.cn/Armor-Forge)
- **PRESSURE_CHAMBER** [Buồng Áp suất](https://slimefun-wiki.guizhanss.cn/Pressure-Chamber)
- **ANCIENT_ALTAR** [Bàn thờ Cổ đại](https://slimefun-wiki.guizhanss.cn/Ancient-Altar)

Công thức chế tạo của các loại công thức sau chỉ có vật phẩm đầu tiên có hiệu lực:

- **COMPRESSOR** [Máy nén](https://slimefun-wiki.guizhanss.cn/Compressor)
- **PRESSURE_CHAMBER** [Buồng Áp suất](https://slimefun-wiki.guizhanss.cn/Pressure-Chamber)
- **ORE_CRUSHER** [Máy nghiền Quặng](https://slimefun-wiki.guizhanss.cn/Ore-Crusher)
- **GRIND_STONE** [Đá mài](https://slimefun-wiki.guizhanss.cn/Grind-Stone)
- **JUICER** [Máy ép Nước trái cây](https://slimefun-wiki.guizhanss.cn/Juicer)

Công thức chế tạo của loại công thức sau phải lấp đầy 9 ô bằng vật phẩm (không bao gồm không khí) và số lượng chỉ có thể là 1:

- **ANCIENT_ALTAR** [Bàn thờ Cổ đại](https://slimefun-wiki.guizhanss.cn/Ancient-Altar)

Công thức chế tạo của loại công thức sau hỗ trợ chế tạo nhiều ô nhiều số lượng (tức là bạn có thể đặt số lượng đầu vào là 64 vật phẩm ở mỗi ô):

- **SMELTERY** [Lò luyện kim](https://slimefun-wiki.guizhanss.cn/Smeltery)

:::
