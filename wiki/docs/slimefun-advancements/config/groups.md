---
sidebar_position: 1
---

# Cấu hình Nhóm Tiến độ

Nhóm tiến độ sẽ được [Tiến độ](./advancements) sử dụng để hiển thị tiến độ theo nhóm.

```yaml title="groups.yml"
basic:
  display:
    type: SLIME_BALL
    name: "&fCơ bản"
    lore:
      - "&7&oLối chơi cốt lõi của Slimefun"
  background: "bedrock"
```

| Nội dung | Mô tả |
| -------- | -------- |
| basic | ID của nhóm.<br />**Chỉ được dùng chữ thường, số, dấu gạch dưới!** |
| `display` | **Bắt buộc**. Vật phẩm hiển thị của nhóm.<br />Xem chi tiết tại [Thiết lập Vật phẩm](../set-item). |
| `background` | *Tùy chọn*. Nền của nhóm trong giao diện tiến độ gốc, mặc định là đá nền. Bạn có thể tra cứu tất cả các nền khả dụng qua [trang web này](https://mcasset.cloud/) (trong thư mục `assets/minecraft/textures/block/`). |
