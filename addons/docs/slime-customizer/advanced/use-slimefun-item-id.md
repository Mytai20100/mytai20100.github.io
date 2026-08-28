---
sidebar_position: 1
---

# Sử dụng ID Vật phẩm Slimefun

Slimefun nhận diện vật phẩm có phải là vật phẩm Slimefun hay không bằng cách thêm thẻ `slimefun:slimefun_item` vào NBT của vật phẩm.

Trong phiên bản hiện tại, Slimefun chỉ nhận diện ID của vật phẩm, các loại vật phẩm khác nhau chỉ cần có cùng ID sẽ được coi là cùng một loại vật phẩm.

Tận dụng đặc tính này, bạn có thể thêm thẻ NBT đó cho bất kỳ vật phẩm nào để nó có đặc tính của vật phẩm Slimefun.

```yaml title="Phần về ID vật phẩm Slimefun trong vật phẩm đã lưu"
    PublicBukkitValues:
      slimefun:slimefun_item: DIET_COOKIE
```

Thẻ NBT này cho biết vật phẩm là Bánh quy Ăn kiêng (Diet Cookie).

:::note Ví dụ

Bạn có thể lưu một chiếc bánh mì, sau đó thêm thẻ `slimefun:slimefun_item: DIET_COOKIE` vào NBT của nó để nó có đặc tính của Bánh quy Ăn kiêng.

Khi bạn ăn bánh mì, bạn sẽ nhận được hiệu ứng lơ lửng của Bánh quy Ăn kiêng.

:::

:::warning

Sau khi bạn thêm thủ công thẻ NBT cho vật phẩm đã lưu, vật phẩm đã lưu này sau khi được đăng ký thành vật phẩm Slimefun, **không thể** lấy được thông qua sách hướng dẫn gian lận hoặc lệnh `/sf give`, nếu không sẽ mất hiệu quả tương ứng.

Vật phẩm Slimefun tương ứng phải là vật phẩm đã được bật trên máy chủ (đã cài plugin tương ứng), nếu không sẽ không có bất kỳ hiệu quả nào.

:::
