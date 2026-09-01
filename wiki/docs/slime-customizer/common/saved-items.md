---
sidebar_position: 5
---

# Vật phẩm đã Lưu

Addon Slimefun Tùy chỉnh hỗ trợ bất kỳ vật phẩm tùy chỉnh nào, có thể là vật phẩm từ bất kỳ plugin nào khác.

## Cách lưu vật phẩm

1. Cầm vật phẩm bạn muốn lưu trên tay.
2. Nhập `/sc saveitem`.

:::warning

Khi tệp cấu hình của bạn có vấn đề khiến plugin không thể tải hoàn toàn, plugin sẽ bị vô hiệu hóa và bạn sẽ không thể sử dụng lệnh của plugin.

:::

Vị trí lưu vật phẩm đã lưu sẽ xuất hiện trong khung chat. Bạn có thể đổi tên tệp đó, nhưng khuyến nghị chỉ sử dụng tổ hợp chữ cái tiếng Anh, số và dấu gạch dưới. Tên này sẽ được sử dụng trong các tệp cấu hình lớn.

:::note Ví dụ

Cầm đất trên tay, sử dụng lệnh `/sc saveitem`. Sau đó mở thư mục `/plugins/SlimeCustomizer/saveditems` và đổi tên `0.yml` thành `DIRT.yml`.

:::

## Sử dụng vật phẩm đã lưu

Bạn có thể sử dụng vật phẩm đã lưu làm vật phẩm của addon Slimefun Tùy chỉnh, hoặc dùng cho công thức vật phẩm, đầu vào/đầu ra của máy, v.v.

Thông thường, bạn cần đặt loại vật phẩm thành `SAVEDITEM` và điền tên tệp của vật phẩm đã lưu (không bao gồm hậu tố `.yml`) vào `item-id` hoặc `id`.

:::note Ví dụ

Sử dụng vật phẩm đã lưu để đăng ký [vật phẩm](../config/items) tùy chỉnh:

```yaml
EXAMPLE_ITEM:
  category: slime_customizer
  item-type: SAVEDITEM  # Lưu ý chỗ này cần điền SAVEDITEM
  item-id: DIRT # Đây là tên tệp của vật phẩm đã lưu, phải hoàn toàn nhất quán
  item-name: "&bVí dụ vật phẩm đã lưu (cấu hình tự động bỏ qua tên)" # Khi loại vật phẩm là vật phẩm đã lưu, trường này sẽ bị bỏ qua
  item-lore: # Khi loại vật phẩm là vật phẩm đã lưu, trường này sẽ bị bỏ qua
  - "&7Cấu hình tự động bỏ qua lore"
  item-amount: 1
  placeable: false
  crafting-recipe-type: ENHANCED_CRAFTING_TABLE
  crafting-recipe: # Bỏ qua công thức ở đây
```

`DIRT` của `item-id` là kết quả của `DIRT.yml` đã đề cập ở trên sau khi bỏ hậu tố.

:::

:::warning

Khi sử dụng vật phẩm đã lưu, các trường `name` và `lore` của vật phẩm sẽ bị bỏ qua.

Nếu bạn cần thay đổi tên hoặc mô tả của vật phẩm đã lưu, khuyến nghị sử dụng plugin khác để chỉnh sửa vật phẩm rồi lưu lại.  
Tất nhiên, bạn cũng có thể sửa đổi vật phẩm đã lưu sau khi tuần tự hóa. Nhưng nếu bạn không biết cách sửa đổi, **đừng động vào nội dung trong vật phẩm đã lưu**.

:::

### Sử dụng vật phẩm đã lưu làm công thức

Khi sử dụng vật phẩm đã lưu làm vật phẩm trong công thức, cần đặt `type` thành `SAVEDITEM` và điền tên tệp của vật phẩm đã lưu (không có hậu tố) vào `id`.

```yaml
    1:
      type: SAVEDITEM
      id: DIRT
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
      type: SAVEDITEM
      id: DIRT
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

## Lưu ý

Khi sử dụng vật phẩm đã lưu cần chú ý thêm một vài điểm:

### 1. Về việc sử dụng vật phẩm đã lưu trong đầu vào/đầu ra của máy

Nếu muốn sử dụng vật phẩm đã lưu trong đầu vào/đầu ra của công thức hoặc máy, khuyến nghị đăng ký vật phẩm đã lưu thành [vật phẩm](../config/items) Slimefun trước, nếu không sẽ dẫn đến việc **lẫn lộn giữa các công thức, giữa các đầu vào đầu ra** (đặc biệt khi **cùng một vật phẩm chỉ khác NBT**).

Dưới đây là một ví dụ **sai** trong HaimanTech:

<details>
<summary>Nhấp để xem mã ví dụ</summary>

```yaml
HAIMAN_LIGHT_UPDATER:
  category: slime_customizer_new
  machine-name: '&e&lMáy Nâng cấp Ánh sáng'
  machine-lore:
  - '&7Dùng để nâng cấp khối ánh sáng'
  block-type: SKULL59d0f51f39e08e51cc83cbec01e3ce1362c70c02edc351902af8e7a5f6e201bc
  progress-bar-item: GOLDEN_SHOVEL
  stats:
    energy-consumption: 5500
    energy-buffer: 50000
  crafting-recipe-type: ENHANCED_CRAFTING_TABLE
  crafting-recipe:
    '1':
      type: SAVEDITEM
      id: LIGHT_0
      amount: 1
    '2':
      type: SLIMEFUN
      id: HEATING_COIL
      amount: 1
    '3':
      type: SAVEDITEM
      id: LIGHT_0
      amount: 1
    '4':
      type: SLIMEFUN
      id: POWER_CRYSTAL
      amount: 1
    '5':
      type: SLIMEFUN
      id: COOLING_UNIT
      amount: 1
    '6':
      type: SLIMEFUN
      id: POWER_CRYSTAL
      amount: 1
    '7':
      type: VANILLA
      id: SEA_LANTERN
      amount: 1
    '8':
      type: SLIMEFUN
      id: ANCIENT_ITEM
      amount: 1
    '9':
      type: VANILLA
      id: SEA_LANTERN
      amount: 1
  recipes:
    '1':
      speed-in-seconds: 4
      input:
        '1':
          type: SAVEDITEM
          id: LIGHT_0
          amount: 1
        '2':
          type: NONE
          id: N/A
          amount: 1
      output:
        '1':
          type: SAVEDITEM
          id: LIGHT_1
          amount: 1
        '2':
          type: NONE
          id: N/A
          amount: 1
    '2':
      speed-in-seconds: 4
      input:
        '1':
          type: SAVEDITEM
          id: LIGHT_1
          amount: 1
        '2':
          type: NONE
          id: N/A
          amount: 1
      output:
        '1':
          type: SAVEDITEM
          id: LIGHT_2
          amount: 1
        '2':
          type: NONE
          id: N/A
          amount: 1
    '3':
      speed-in-seconds: 4
      input:
        '1':
          type: SAVEDITEM
          id: LIGHT_2
          amount: 1
        '2':
          type: NONE
          id: N/A
          amount: 1
      output:
        '1':
          type: SAVEDITEM
          id: LIGHT_3
          amount: 1
        '2':
          type: NONE
          id: N/A
          amount: 1
    '4':
      speed-in-seconds: 4
      input:
        '1':
          type: SAVEDITEM
          id: LIGHT_3
          amount: 1
        '2':
          type: NONE
          id: N/A
          amount: 1
      output:
        '1':
          type: SAVEDITEM
          id: LIGHT_4
          amount: 1
        '2':
          type: NONE
          id: N/A
          amount: 1
    '5':
      speed-in-seconds: 4
      input:
        '1':
          type: SAVEDITEM
          id: LIGHT_4
          amount: 1
        '2':
          type: NONE
          id: N/A
          amount: 1
      output:
        '1':
          type: SAVEDITEM
          id: LIGHT_5
          amount: 1
        '2':
          type: NONE
          id: N/A
          amount: 1
    '6':
      speed-in-seconds: 4
      input:
        '1':
          type: SAVEDITEM
          id: LIGHT_5
          amount: 1
        '2':
          type: NONE
          id: N/A
          amount: 1
      output:
        '1':
          type: SAVEDITEM
          id: LIGHT_6
          amount: 1
        '2':
          type: NONE
          id: N/A
          amount: 1
    '7':
      speed-in-seconds: 4
      input:
        '1':
          type: SAVEDITEM
          id: LIGHT_6
          amount: 1
        '2':
          type: NONE
          id: N/A
          amount: 1
      output:
        '1':
          type: SAVEDITEM
          id: LIGHT_7
          amount: 1
        '2':
          type: NONE
          id: N/A
          amount: 1
    '8':
      speed-in-seconds: 4
      input:
        '1':
          type: SAVEDITEM
          id: LIGHT_7
          amount: 1
        '2':
          type: NONE
          id: N/A
          amount: 1
      output:
        '1':
          type: SAVEDITEM
          id: LIGHT_8
          amount: 1
        '2':
          type: NONE
          id: N/A
          amount: 1
    '9':
      speed-in-seconds: 4
      input:
        '1':
          type: SAVEDITEM
          id: LIGHT_8
          amount: 1
        '2':
          type: NONE
          id: N/A
          amount: 1
      output:
        '1':
          type: SAVEDITEM
          id: LIGHT_9
          amount: 1
        '2':
          type: NONE
          id: N/A
          amount: 1
    '10':
      speed-in-seconds: 4
      input:
        '1':
          type: SAVEDITEM
          id: LIGHT_9
          amount: 1
        '2':
          type: NONE
          id: N/A
          amount: 1
      output:
        '1':
          type: SAVEDITEM
          id: LIGHT_10
          amount: 1
        '2':
          type: NONE
          id: N/A
          amount: 1
    '11':
      speed-in-seconds: 4
      input:
        '1':
          type: SAVEDITEM
          id: LIGHT_10
          amount: 1
        '2':
          type: NONE
          id: N/A
          amount: 1
      output:
        '1':
          type: SAVEDITEM
          id: LIGHT_11
          amount: 1
        '2':
          type: NONE
          id: N/A
          amount: 1
    '12':
      speed-in-seconds: 4
      input:
        '1':
          type: SAVEDITEM
          id: LIGHT_11
          amount: 1
        '2':
          type: NONE
          id: N/A
          amount: 1
      output:
        '1':
          type: SAVEDITEM
          id: LIGHT_12
          amount: 1
        '2':
          type: NONE
          id: N/A
          amount: 1
    '13':
      speed-in-seconds: 4
      input:
        '1':
          type: SAVEDITEM
          id: LIGHT_12
          amount: 1
        '2':
          type: NONE
          id: N/A
          amount: 1
      output:
        '1':
          type: SAVEDITEM
          id: LIGHT_13
          amount: 1
        '2':
          type: NONE
          id: N/A
          amount: 1
    '14':
      speed-in-seconds: 4
      input:
        '1':
          type: SAVEDITEM
          id: LIGHT_13
          amount: 1
        '2':
          type: NONE
          id: N/A
          amount: 1
      output:
        '1':
          type: SAVEDITEM
          id: LIGHT_14
          amount: 1
        '2':
          type: NONE
          id: N/A
          amount: 1
    '15':
      speed-in-seconds: 4
      input:
        '1':
          type: SAVEDITEM
          id: LIGHT_14
          amount: 1
        '2':
          type: NONE
          id: N/A
          amount: 1
      output:
        '1':
          type: VANILLA
          id: LIGHT
          amount: 1
        '2':
          type: NONE
          id: N/A
          amount: 1
    '16':
      speed-in-seconds: 4
      input:
        '1':
          type: VANILLA
          id: LIGHT
          amount: 1
        '2':
          type: NONE
          id: N/A
          amount: 1
      output:
        '1':
          type: SAVEDITEM
          id: LIGHT_0
          amount: 1
        '2':
          type: NONE
          id: N/A
          amount: 1
```

</details>

Đây là một ví dụ sai, đầu vào đầu ra trực tiếp tham chiếu đến vật phẩm đã lưu chỉ khác NBT của cùng một vật phẩm, điều này sẽ dẫn đến sản phẩm đầu ra bị lẫn lộn, không phải kết quả bạn mong đợi.

:::info Giải pháp

Đăng ký các vật phẩm đã lưu này thành vật phẩm Slimefun riêng biệt, sau đó thiết lập theo cách sử dụng vật phẩm Slimefun.

:::

### 2. Vấn đề tương thích với addon FinalTECH

Khi bạn lưu một vật phẩm khối và đăng ký nó thành [vật phẩm](../config/items) không thể đặt (`placeable: false`), việc chế tạo vật phẩm đó trong bàn chế tạo tiện lợi của FinalTECH sẽ khiến `placeable` mất hiệu lực.  
Khối vật phẩm bị mất hiệu lực có thể tham gia chế tạo bình thường như vật liệu. Nếu bạn đặt khối này, vật phẩm khối sẽ biến thành khối nguyên bản.

:::info Giải pháp

Xem [video](https://www.bilibili.com/video/BV1NM411T7aA/) này để biết chi tiết.

:::

### 3. Vấn đề tương thích với addon SimpleUtils

Khi bạn muốn sử dụng phương pháp nâng cao để tùy chỉnh, vui lòng vô hiệu hóa bàn chế tạo trong addon SimpleUtils.

Bàn chế tạo đó chỉ nhận diện ID vật phẩm Slimefun, sẽ ảnh hưởng đến hiệu quả tùy chỉnh nâng cao và có thể gây ra lỗi dup vật phẩm nghiêm trọng.
