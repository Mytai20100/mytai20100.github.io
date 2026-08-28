---
sidebar_position: 2
---

# Cấu hình Tiến độ

```yaml title="advancements.yml"
portable_workbench:
  group: basic
  display:
    type: CRAFTING_TABLE
    name: "&aChế tạo di động"
    lore:
      - "Sử dụng một lần bàn chế tạo di động"
  frame_type: GOAL
  name: "&a[Chế tạo di động]"
  hidden: true
  criteria:
    interact:
      name: "Sử dụng một lần bàn chế tạo di động"
      type: interact
      amount: 1
      item:
        type: PORTABLE_CRAFTER
  rewards:
    commands:
      - "experience add %p% 3 levels"
```

Dưới đây là giải thích cho từng phần:

| Nội dung | Mô tả |
| -------- | -------- |
| portable_workbench | ID của tiến độ.<br />**Chỉ được dùng chữ thường, số, dấu gạch dưới!** |
| `group` | **Bắt buộc**. Nhóm tiến độ mà tiến độ này thuộc về.<br />Tương ứng với ID nhóm đã thiết lập trong [Cấu hình Nhóm Tiến độ](./groups). |
| `display` | **Bắt buộc**. Vật phẩm hiển thị của tiến độ.<br />Xem chi tiết tại [Thiết lập Vật phẩm](../set-item). |
| `frame_type` | *Tùy chọn*. Chỉ định loại biểu tượng trong menu tiến độ.<br />Tùy chọn: `GOAL`, `TASK`, `CHALLENGER`.<br />Mặc định: `GOAL` |
| `name` | **Bắt buộc**. Tên hiển thị của tiến độ.<br />Sẽ được hiển thị trong thông báo toàn server sau khi hoàn thành tiến độ, hỗ trợ mã màu `&`.<br />*Gợi ý: Sử dụng định dạng nhất quán với tiến độ gốc.*<br />*Ví dụ:* `&a[Chế tạo di động]` |
| `hidden` | *Tùy chọn*. Có ẩn tiến độ hay không.<br />Sau khi ẩn, tiến độ sẽ không hiển thị trong danh sách cho đến khi người chơi hoàn thành tiến độ mới hiện ra. |
| `criteria` | **Bắt buộc**. Điều kiện hoàn thành của tiến độ này.<br />Xem chi tiết tại [Điều kiện hoàn thành](#criteria). |
| `rewards` | *Tùy chọn*. Phần thưởng khi hoàn thành tiến độ này.<br />Xem chi tiết tại [Phần thưởng](#rewards). |

----

## Điều kiện hoàn thành {#criteria}

Mỗi tiến độ có thể thiết lập nhiều điều kiện, chỉ khi hoàn thành tất cả điều kiện mới được tính là hoàn thành tiến độ.

```yaml
  criteria:
    pickaxe:
      name: "Nhận cuốc phát nổ"
      type: inventory
      item:
        type: EXPLOSIVE_PICKAXE
    shovel:
      name: "Nhận xẻng phát nổ"
      type: inventory
      item:
        type: EXPLOSIVE_SHOVEL
```

| Nội dung | Mô tả |
| -------- | -------- |
| pickaxe, shovel | Đây là ID của điều kiện tiến độ.<br />**Chỉ được dùng chữ tiếng Anh, số, dấu gạch dưới!**<br />Trong cùng một tiến độ, ID của mỗi điều kiện không được trùng nhau. |
| `type` | **Bắt buộc**. Đây là loại của điều kiện đó.<br />Xem chi tiết các loại điều kiện khác nhau bên dưới. |
| `name` | *Tùy chọn*. Đây là mô tả của điều kiện đó.<br />Nếu không chỉ định, sẽ sử dụng ID của điều kiện làm mô tả. |

Ngoài ra, tùy theo loại điều kiện khác nhau, còn có một số tham số khác cần điền.

### consume Ăn vật phẩm {#consume}

**Loại**: `consume`

Điều kiện loại này yêu cầu người chơi ăn thức ăn, thuốc được chỉ định.  
Có thể là vật phẩm gốc, cũng như bất kỳ vật phẩm nào dựa trên vật phẩm có thể ăn được trong Slimefun (như thịt khô quái vật trong Slimefun, một số nước ép trong ExoticGarden).

:::danger Quan trọng

Điều kiện này chỉ áp dụng cho vật phẩm có hoạt ảnh ăn gốc.  
Trái cây/thực vật/thức ăn "có thể ăn được" trong ExoticGarden (thực chất là đầu người chơi) không áp dụng cho điều kiện này, vui lòng sử dụng [`interact`](#interact).

:::

```yaml
  criteria:
    consume:
      name: "Uống nước ép táo vàng"
      type: consume
      amount: 5
      item:
        type: GOLDEN_APPLE_JUICE
```

| Nội dung | Mô tả |
| -------- | -------- |
| `item` | **Bắt buộc**. Chỉ định vật phẩm cần thiết cho điều kiện này.<br />Tham khảo [Thiết lập Vật phẩm](../set-item). |
| `amount` | *Tùy chọn*. Số lượng vật phẩm cần ăn, mặc định là 1. |

### interact Nhấp chuột phải sử dụng vật phẩm {#interact}

**Loại**: `interact`

Điều kiện loại này yêu cầu người chơi nhấp chuột phải để sử dụng vật phẩm được chỉ định.

```yaml
  criteria:
    interact:
      name: "Sử dụng một lần bàn chế tạo di động"
      type: interact
      amount: 1
      item:
        type: PORTABLE_CRAFTER
```

| Nội dung | Mô tả |
| -------- | -------- |
| `item` | **Bắt buộc**. Chỉ định vật phẩm cần thiết cho điều kiện này.<br />Tham khảo [Thiết lập Vật phẩm](../set-item). |
| `amount` | *Tùy chọn*. Số lần cần sử dụng, mặc định là 1. |

### inventory Sở hữu vật phẩm {#inventory}

**Loại**: `inventory`

Điều kiện loại này yêu cầu người chơi sở hữu vật phẩm được chỉ định trong kho đồ.

Việc kiểm tra sẽ được thực hiện khi người chơi mở, đóng kho đồ, hoặc nhặt vật phẩm.

```yaml
  criteria:
    ore_grinder:
      name: "Nhận máy nghiền quặng điện"
      type: inventory
      amount: 1
      item:
        type: ELECTRIC_ORE_GRINDER
```

| Nội dung | Mô tả |
| -------- | -------- |
| `item` | **Bắt buộc**. Chỉ định vật phẩm cần thiết cho điều kiện này.<br />Tham khảo [Thiết lập Vật phẩm](../set-item). |
| `amount` | *Tùy chọn*. Số lượng vật phẩm cần thiết để thỏa mãn điều kiện, mặc định là 1. |

### multiblock Tương tác với cấu trúc đa khối {#multiblock}

**Loại**: `multiblock`

Điều kiện loại này yêu cầu người chơi tương tác với cấu trúc đa khối được chỉ định.

```yaml
  criteria:
    ore_crusher:
      name: "Sử dụng một lần máy đập quặng"
      type: multiblock
      multiblock: ORE_CRUSHER
```

| Nội dung | Mô tả |
| -------- | -------- |
| `multiblock` | **Bắt buộc**. ID của cấu trúc đa khối. |

:::note

Các cấu trúc đa khối có sẵn trong Slimefun gốc:

- **ENHANCED_CRAFTING_TABLE** [Bàn chế tạo nâng cao](https://slimefun-wiki.guizhanss.cn/Enhanced-Crafting-Table)
- **MAGIC_WORKBENCH** [Bàn chế tạo ma pháp](https://slimefun-wiki.guizhanss.cn/Magic-Workbench)
- **ARMOR_FORGE** [Lò rèn giáp](https://slimefun-wiki.guizhanss.cn/Armor-Forge)
- **COMPRESSOR** [Máy nén](https://slimefun-wiki.guizhanss.cn/Compressor)
- **PRESSURE_CHAMBER** [Buồng áp lực](https://slimefun-wiki.guizhanss.cn/Pressure-Chamber)
- **SMELTERY** [Lò nung](https://slimefun-wiki.guizhanss.cn/Smeltery)
- **ORE_CRUSHER** [Máy đập quặng](https://slimefun-wiki.guizhanss.cn/Ore-Crusher)
- **GRIND_STONE** [Đá mài](https://slimefun-wiki.guizhanss.cn/Grind-Stone)

Cũng hỗ trợ các cấu trúc đa khối được đăng ký bởi addon.

:::

### place Đặt khối {#place}

**Loại**: `place`

Điều kiện loại này yêu cầu người chơi đặt khối được chỉ định.

Hiện tại tạm thời chưa có kiểm tra đối với khối đã đặt, vì vậy người chơi có thể hoàn thành điều kiện bằng cách lặp lại việc đặt và phá khối ở cùng một vị trí, do đó, thường đặt số lượng là 1.

```yaml
  criteria:
    build:
      name: "Đặt một bộ điều chỉnh năng lượng"
      type: place
      amount: 1
      item:
        type: ENERGY_REGULATOR
```

| Nội dung | Mô tả |
| -------- | -------- |
| `item` | **Bắt buộc**. Chỉ định vật phẩm cần thiết cho điều kiện này.<br />Tham khảo [Thiết lập Vật phẩm](../set-item). |
| `amount` | *Tùy chọn*. Số lượng vật phẩm cần thiết để thỏa mãn điều kiện, mặc định là 1. |

### break Phá khối {#break}

**Loại**: `break`

Điều kiện loại này yêu cầu người chơi phá khối được chỉ định.

Tham số cấu hình giống với `place` đặt khối, do đó không nhắc lại ở đây.

### research Hoàn thành nghiên cứu {#research}

**Loại**: `research`

Điều kiện loại này yêu cầu người chơi mở khóa nghiên cứu được chỉ định.

```yaml
  criteria:
    research:
      name: "Nghiên cứu bùa hộ mệnh Ender"
      type: research
      research: "slimefun:ender_talismans"
```

| Nội dung | Mô tả |
| -------- | -------- |
| `research` | **Bắt buộc**. NamespacedKey của nghiên cứu.<br />Bạn có thể tra cứu tên khóa của nghiên cứu trong [Trợ lý Slimefun](https://slimefun-helper.guizhanss.cn). |

### mobkill Tiêu diệt sinh vật được chỉ định {#mobkill}

**Loại**: `mobkill`

Điều kiện loại này yêu cầu người chơi tiêu diệt loại sinh vật được chỉ định.

```yaml
  criteria:
    kill_ender_dragon:
      name: "Tiêu diệt Rồng Ender"
      type: mobkill
      amount: 1
      entity: ender_dragon
```

| Nội dung | Mô tả |
| -------- | -------- |
| `entity` | **Bắt buộc**. Chỉ định loại sinh vật cần thiết cho điều kiện này.<br />Loại sinh vật ở dạng chữ thường có gạch dưới của `EntityType`<br />(ví dụ `stray`, `cave_spider`, `glow_squid`, v.v.) |
| `amount` | *Tùy chọn*. Số lượng sinh vật cần tiêu diệt để thỏa mãn điều kiện, mặc định là 1. |

### search Sử dụng chức năng tìm kiếm {#search}

**Loại**: `search`

Điều kiện loại này yêu cầu người chơi sử dụng chức năng tìm kiếm của Slimefun (có thể thông qua Sách Hướng Dẫn Slimefun, hoặc lệnh `/sf search`) để tìm kiếm ký tự được chỉ định.

```yaml
  criteria:
    search_cargo:
      name: "Tìm kiếm vận chuyển"
      type: search
      search: "vận chuyển"
```

| Nội dung | Mô tả |
| -------- | -------- |
| `search` | **Bắt buộc**. Chỉ định ký tự tìm kiếm cần thiết cho điều kiện này. Nội dung tìm kiếm cần phải hoàn toàn khớp với ký tự này mới có thể hoàn thành. |

### multiblockcraft Chế tạo bằng cấu trúc đa khối {#multiblockcraft}

**Loại**: `multiblockcraft`

Điều kiện loại này yêu cầu người chơi sử dụng cấu trúc đa khối để chế tạo vật phẩm được chỉ định.

```yaml
  criteria:
    craft_grandmas_walking_stick:
      name: "Chế tạo 3 lần gậy của bà"
      type: multiblockcraft
      item: GRANDMAS_WALKING_STICK
      amount: 3
```

| Nội dung | Mô tả |
| -------- | -------- |
| `item` | **Bắt buộc**. ID vật phẩm cần chế tạo. |
| `amount` | *Tùy chọn*. Số **lần** cần chế tạo, mặc định là 1.<br />**Lưu ý**: Đây không phải là số lượng chế tạo, mà là số lần chế tạo. |

### Thêm điều kiện {#more-criterion}

Trên đây là các điều kiện hoàn thành tiến độ hiện có. Nếu bạn muốn thêm nhiều loại điều kiện hơn, vui lòng tham khảo API do SlimefunAdvancements cung cấp.

----

## Phần thưởng {#rewards}

Mỗi tiến độ có thể thiết lập nhiều loại phần thưởng.

```yaml
  rewards:
    commands:
      - "experience add %p% 3 levels"
```

| Nội dung | Mô tả |
| -------- | -------- |
| commands | Là loại phần thưởng (cần phải khớp hoàn toàn).<br />Xem chi tiết các loại phần thưởng khác nhau bên dưới. |

### command Lệnh {#command}

**Loại**: `command`

Hiện tại khi hoàn thành tiến độ chỉ có loại phần thưởng này, thực thi lệnh với tư cách console.

```yaml
  rewards:
    commands:
      - "experience add %p% 3 levels"
      - "sf give %p% COPPER_DUST"
```

Mỗi dòng là một lệnh, được thực thi theo thứ tự từ trên xuống dưới.

Có thể sử dụng `%p%` trong lệnh để đại diện cho tên người chơi đã hoàn thành tiến độ.
