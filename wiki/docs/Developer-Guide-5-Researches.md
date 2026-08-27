# Hướng dẫn phát triển (5. Nghiên cứu)

Đây là chương thứ năm của hướng dẫn phát triển của chúng tôi, bạn có thể xem mục lục [tại đây](/Developer-Guide).
Nếu bạn chưa xem nội dung trước đó, vui lòng đọc chúng trước.

## 1. Ôn lại {#1-a-little-recap}

Ba phần trước đều là về việc tạo vật phẩm Slimefun.
Chúng ta đã đề cập rất nhiều khái niệm, ban đầu có thể hơi áp lực. Vì vậy hãy thư giãn một chút.
Hôm nay chúng ta sẽ nói về nghiên cứu.

Chúng ta sẽ quay lại phương thức `onEnable()` trong lớp chính.
Sau khi thêm tất cả các vật phẩm, nó sẽ trông như thế này:

```java
NamespacedKey categoryId = new NamespacedKey(this, "cool_category");
CustomItemStack categoryItem = new CustomItemStack(Material.DIAMOND, "&4Danh mục cực ngầu");
// tạo nhóm vật phẩm ItemGroup
ItemGroup itemGroup = new ItemGroup(categoryId, categoryItem);
// vật phẩm SlimefunItemStack của vật phẩm Slimefun SlimefunItem
SlimefunItemStack itemStack = new SlimefunItemStack("FIRE_CAKE", Material.CAKE, "&4Bánh lửa", "", LoreBuilder.radioactive(Radioactivity.HIGH), LoreBuilder.HAZMAT_SUIT_REQUIRED);
// công thức tổng hợp có thứ tự 3x3
ItemStack[] recipe = {
    new ItemStack(Material.DIAMOND),    null,                               new ItemStack(Material.DIAMOND),
    null,                               SlimefunItems.CARBONADO,            null,
    new ItemStack(Material.DIAMOND),    null,                               new ItemStack(Material.DIAMOND)
};
// chúng ta bây giờ đang sử dụng lớp của riêng mình
FireCake cake = new FireCake(itemGroup, itemStack, RecipeType.ENHANCED_CRAFTING_TABLE, recipe);
cake.register(this);
```

Có lẽ bạn đã tạo thêm nhiều vật phẩm.

## 2. Tạo nghiên cứu (Research) {#2-creating-a-research}

Việc tạo nghiên cứu đơn giản như tạo bất kỳ đối tượng Java nào.
Chúng ta sẽ bắt đầu bằng cách tạo một đối tượng nghiên cứu mới.

```java
Research research = new Research(...);
```

Hàm khởi tạo của nghiên cứu `Research` nhận 4 tham số: ID `NamespacedKey`, ID số nguyên, tên hiển thị và chi phí mặc định.
`NamespacedKey` hẳn đã quen thuộc với bạn, vì vậy chúng ta sẽ bắt đầu bằng cách tạo nó. Chúng ta sẽ sử dụng `this` và ID viết thường để tham chiếu plugin của mình.

```java
NamespacedKey researchKey = new NamespacedKey(this, "our_custom_research");
Research research = new Research(researchKey, ?, ?, ?);
```

Bây giờ, hãy nói về ID số nguyên.
ID này hơi phức tạp. Nó đã được `NamespacedKey` thay thế, nhưng chúng ta vẫn cần nó.

:::info

Hiện tại, bản chính thức của Slimefun vẫn dựa vào ID số để xác định các nghiên cứu khác nhau.
Bản Hán hóa sau 2023.06 đã không còn dựa vào ID số nữa. Nếu addon của bạn chỉ hướng tới bản Hán hóa, bạn có thể điền tùy ý và bỏ qua nội dung đoạn dưới đây.

:::

Chỉ cần nhớ, ID này sẽ bị xóa vào một thời điểm nào đó, vì đó là một cách rất tệ để xác định nghiên cứu.
Nghĩa là, ID số nguyên của bạn **phải là duy nhất**. Nó phải là duy nhất trong số tất cả các addon.
Hãy cố gắng nghĩ ra một số ngẫu nhiên mà chưa ai khác sử dụng. Đây không phải là một cách hay, nó bắt nguồn từ thời kỳ trước khi addon xuất hiện.
Chúng tôi đang nỗ lực để xóa ID số này. Nhưng hiện tại, bạn sẽ cần ID số. Và đừng thay đổi nó bất cứ lúc nào.

Trong ví dụ này, chúng ta sẽ đơn giản chọn 123 làm ID của mình. (Lưu ý, 123 đã được Slimefun sử dụng, vì vậy đừng sử dụng nó. Hãy chọn một số lớn hơn.)

```java
NamespacedKey researchKey = new NamespacedKey(this, "our_custom_research");
Research research = new Research(researchKey, 123, ?, ?);
```

Bây giờ hãy nói về tên hiển thị. Tên hiển thị của nghiên cứu sẽ được hiển thị cho người chơi khi họ mở khóa nghiên cứu.
Nó nên phản ánh vật phẩm mà nó đại diện, nhưng không nhất thiết phải là bản sao theo nghĩa đen.
Bạn có thể thoải mái nghĩ ra một số cách chơi chữ hoặc văn bản thú vị về vật phẩm của mình để truyền đạt thông tin về vật phẩm.

```java
NamespacedKey researchKey = new NamespacedKey(this, "our_custom_research");
Research research = new Research(researchKey, 123, "Nghiên cứu ví dụ", ?);
```

Cuối cùng, chúng ta cần định nghĩa chi phí mặc định cho nghiên cứu này.
Lưu ý, đây chỉ là chi phí **mặc định**, quản trị viên máy chủ có thể thay đổi nó bất cứ lúc nào trong tệp cấu hình.
Chúng ta sẽ đơn giản chỉ định 10 cấp độ kinh nghiệm làm chi phí cho ví dụ này.

```java
NamespacedKey researchKey = new NamespacedKey(this, "our_custom_research");
Research research = new Research(researchKey, 123, "Nghiên cứu ví dụ", 10);
```

Nghiên cứu của chúng ta sắp hoàn thành rồi.
Bây giờ chúng ta chỉ cần thêm vật phẩm của chúng ta vào nghiên cứu này.

## 3. Thêm vật phẩm vào nghiên cứu của chúng ta {#3-adding-items-to-our-research}

Chúng ta có thể gọi `Research#addItems(...)` để thêm vật phẩm vào nghiên cứu.
Phương thức này có số lượng tham số thay đổi, có thể thêm bất kỳ số lượng vật phẩm Slimefun nào.

```java
NamespacedKey researchKey = new NamespacedKey(this, "our_custom_research");
Research research = new Research(researchKey, 123, "Nghiên cứu ví dụ", 10);

// sử dụng dấu phẩy để phân tách các vật phẩm khác nhau
research.addItems(item1, item2, item3, ...);
```

Trong ví dụ của chúng ta, chúng ta chỉ có một vật phẩm bánh lửa.
Vì vậy, chúng ta chỉ cần thêm nó vào nghiên cứu.

```java
// ...
FireCake cake = new FireCake(itemGroup, itemStack, RecipeType.ENHANCED_CRAFTING_TABLE, recipe);
cake.register(this);

NamespacedKey researchKey = new NamespacedKey(this, "fire_cake");
Research research = new Research(researchKey, 123, "Bạn sẽ không muốn ăn thứ này đâu", 10);
research.addItems(cake);
```

Bây giờ, bước cuối cùng: đăng ký nghiên cứu.
Chúng ta chỉ cần gọi phương thức `.register()` trên đối tượng nghiên cứu của mình.

```java
// ...
FireCake cake = new FireCake(itemGroup, itemStack, RecipeType.ENHANCED_CRAFTING_TABLE, recipe);
cake.register(this);

NamespacedKey researchKey = new NamespacedKey(this, "fire_cake");
Research research = new Research(researchKey, 123, "Bạn sẽ không muốn ăn thứ này đâu", 10);
research.addItems(cake);

research.register();
```

Nhiệm vụ của chúng ta đã hoàn thành!

## 4. Chúng ta đã thêm một nghiên cứu {#4-we-added-a-research}

Đây là toàn bộ mã của chúng ta cho đến hiện tại:

```java
NamespacedKey categoryId = new NamespacedKey(this, "cool_category");
CustomItemStack categoryItem = new CustomItemStack(Material.DIAMOND, "&4Danh mục cực ngầu");
// tạo nhóm vật phẩm ItemGroup
ItemGroup itemGroup = new ItemGroup(categoryId, categoryItem);
// vật phẩm SlimefunItemStack của vật phẩm Slimefun SlimefunItem
SlimefunItemStack itemStack = new SlimefunItemStack("FIRE_CAKE", Material.CAKE, "&4Bánh lửa", "", LoreBuilder.radioactive(Radioactivity.HIGH), LoreBuilder.HAZMAT_SUIT_REQUIRED);
// công thức tổng hợp có thứ tự 3x3
ItemStack[] recipe = {
    new ItemStack(Material.DIAMOND),    null,                               new ItemStack(Material.DIAMOND),
    null,                               SlimefunItems.CARBONADO,            null,
    new ItemStack(Material.DIAMOND),    null,                               new ItemStack(Material.DIAMOND)
};
// chúng ta bây giờ đang sử dụng lớp của riêng mình
FireCake cake = new FireCake(itemGroup, itemStack, RecipeType.ENHANCED_CRAFTING_TABLE, recipe);
cake.register(this);

NamespacedKey researchKey = new NamespacedKey(this, "fire_cake");
Research research = new Research(researchKey, 123, "Bạn sẽ không muốn ăn thứ này đâu", 10);
research.addItems(cake);

research.register();
```

Bây giờ chúng ta có một chiếc bánh lửa tuyệt vời và một nghiên cứu liên quan đến nó.
Bây giờ, người chơi sẽ cần mở khóa nghiên cứu này mới có thể truy cập vật phẩm đó.
Nếu bạn có bất kỳ câu hỏi nào, có thể hỏi bất cứ lúc nào trong kênh `#programming-help` trên máy chủ Discord.
