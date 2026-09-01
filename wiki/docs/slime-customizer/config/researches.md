---
sidebar_position: 11
---

# Nghiên cứu

```yaml title="researches.yml"
example_research:
  id: 10086
  name: "Nghiên cứu Mẫu"
  cost: 34
  items:
    - EXAMPLE_ITEM
    - EXAMPLE_MACHINE
```

| Nội dung | Mô tả |
| -------- | -------- |
| `example_research` | Định danh của nghiên cứu, mỗi định danh nghiên cứu không được trùng nhau.<br />**Chỉ hỗ trợ chữ thường, số, dấu gạch dưới!** |
| id | ID số của nghiên cứu, tối đa là 2147483647. |
| cost | Cấp độ kinh nghiệm cần thiết để mở khóa nghiên cứu, tối đa là 2147483647. |
| items | Danh sách vật phẩm mà nghiên cứu chứa. Phải là ID vật phẩm Slimefun. |

:::tip

Bạn có thể khóa vật phẩm của addon khác thông qua tệp cấu hình này.

:::

:::info

Nếu một nghiên cứu chứa nhiều vật phẩm, khi người chơi nhấp mở khóa bất kỳ vật phẩm nào trong số đó, thì tất cả vật phẩm cùng nghiên cứu sẽ được mở khóa.

:::

:::warning Sự khác biệt giữa bản chính thức và bản Việt hóa

Hiện tại, dữ liệu người chơi của Slimefun bản chính thức vẫn phụ thuộc vào ID số để nhận diện nghiên cứu, nghiên cứu của bản gốc và addon đều sẽ sử dụng ID số. Do đó, khuyến nghị đặt ID số thành phạm vi mà các addon khác ít sử dụng.

Nếu bạn đang sử dụng bản Hán hóa của StarWishsama, nghiên cứu đã sử dụng định danh `NamespacedKey` để nhận diện, do đó ID số có thể đặt tùy ý.

:::
