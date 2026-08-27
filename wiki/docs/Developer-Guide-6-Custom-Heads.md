# Hướng dẫn phát triển (6. Đầu tùy chỉnh)

Đây là chương thứ sáu của hướng dẫn phát triển của chúng tôi, bạn có thể xem mục lục [tại đây](/Developer-Guide).
Nếu bạn chưa xem nội dung trước đó, vui lòng đọc chúng trước.

## 1. Ôn lại {#1-our-usual-recap}

Ở phần trước, chúng ta đã nói về cách tạo nghiên cứu.
Đây là mã hoàn chỉnh mà chúng ta đã tạo lần trước:

```java
NamespacedKey categoryId = new NamespacedKey(this, "cool_category");
CustomItemStack categoryItem = new CustomItemStack(Material.DIAMOND, "&4Danh mục cực ngầu");
// tạo nhóm vật phẩm ItemGroup
ItemGroup itemGroup = new ItemGroup(categoryId, categoryItem);
// vật phẩm SlimefunItemStack của vật phẩm Slimefun SlimefunItem
SlimefunItemStack itemStack = new SlimefunItemStack("MY_ADDON_ITEM", Material.CAKE, "&4Bánh lửa", "", LoreBuilder.radioactive(Radioactivity.HIGH), LoreBuilder.HAZMAT_SUIT_REQUIRED);
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

Hôm nay, chúng ta sẽ sử dụng đầu tùy chỉnh cho nhóm vật phẩm và vật phẩm của mình.

## 2. Giới thiệu {#2-introduction}

Như các bạn đã biết: Minecraft hỗ trợ sử dụng đầu của bất kỳ người chơi nào làm vật phẩm hoặc khối.
Điều này thậm chí bao gồm cả đầu của những skin không còn được sử dụng nữa.
Có rất nhiều cơ sở dữ liệu thu thập hoặc tổng hợp danh sách những chiếc đầu rất ngầu.

Trong hướng dẫn này, chúng ta sẽ sử dụng [minecraft-heads.com](https://minecraft-heads.com/), đây là một trang web cơ sở dữ liệu đầu rất tiện lợi và lớn.
Tất nhiên, bất kỳ công cụ hoặc trang web nào thu thập hoặc tạo đầu đều có thể sử dụng được.

Lưu ý, chúng tôi không có bất kỳ mối quan hệ nào với trang web này, đây chỉ là một ví dụ và đề xuất cá nhân của chúng tôi.
Nếu bạn biết một công cụ hoặc trang web tốt hơn, cứ thoải mái sử dụng nó.

## 3. Lấy kết cấu {#3-getting-the-texture}

Để sử dụng đầu trong game, bạn cần chỉ đến skin mà nó nên sử dụng.
Minecraft sử dụng một URL để lấy skin từ máy chủ `https://textures.minecraft.net/texture/`. URL này không được lưu trữ dưới dạng văn bản thuần túy, mà là một phần của chuỗi JSON và được mã hóa thành Base64.

Nếu bạn có bất kỳ điều gì không hiểu, đừng lo lắng, bạn chỉ cần biết mỗi skin đều có thể được biểu diễn bằng một chuỗi [Base64](https://en.wikipedia.org/wiki/Base64).
Chúng ta tiếp theo sẽ cần tìm chuỗi Base64 của skin đầu cần thiết.

### 3.1. Tự tạo một chiếc đầu {#31-creating-a-head-yourself}

Nếu bạn muốn tạo kết cấu của riêng mình, nó đơn giản như việc bạn tạo skin nhân vật của mình.
Ở đây, chúng tôi sẽ cung cấp một liên kết [Minecraft Wiki](https://minecraft.gamepedia.com/Skin#Creating_a_skin), nhưng tôi tin rằng bạn đã quen thuộc với điều này rồi.

Vì hôm nay chúng ta chỉ đề cập đến việc sử dụng đầu, phần thân, cánh tay và chân không quan trọng đối với chúng ta.
Điều quan trọng là bạn có thể tạo kết cấu cho phần đầu theo sở thích của mình.
Bạn đã làm xong kết cấu của mình chưa? Tốt, rất tốt!

Bạn có thể sử dụng [trình tạo đầu tùy chỉnh do Minecraft-Heads cung cấp](https://minecraft-heads.com/custom-heads/heads-generator) để tạo cho bạn một lệnh `give` có thể lấy vật phẩm đầu.
Nó trông như thế này:
`/give @p skull 1 3 {display:{Name:"Test"},SkullOwner:{Id:"6e094b8b-8c7c-4ee4-b039-bd99a95a7666",Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZTk1MmQyYjNmMzUxYTZiMDQ4N2NjNTlkYjMxYmY1ZjI2NDExMzNlNWJhMDAwNmIxODU3NmU5OTZhMDI5M2U1MiJ9fX0="}]}}}`

Bây giờ, hãy chú ý dữ liệu trong lệnh này. Có một trường tên là `Properties`, theo sau là một đối tượng `textures`.
Đây là thứ chúng ta cần. Chính xác hơn: thực ra là `Value` mà chúng ta cần.
Vì vậy, khi chúng ta xóa mọi thứ khác, chúng ta nhận được cái này:
`eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZTk1MmQyYjNmMzUxYTZiMDQ4N2NjNTlkYjMxYmY1ZjI2NDExMzNlNWJhMDAwNmIxODU3NmU5OTZhMDI5M2U1MiJ9fX0=`

Đây chính là chuỗi Base64 mà chúng ta cần.
Chúng ta sẽ giới thiệu cách sử dụng nó ở các phần sau.

## 3.2. Sử dụng đầu từ minecraft-heads.com {#32-using-a-head-from-minecraft-heads-com}

Tất nhiên, bạn có thể trích xuất bất kỳ kết cấu nào từ lệnh `give`, như đã thấy ở trên.
Nhưng minecraft-heads.com đã cung cấp chuỗi Base64 mà chúng ta cần cho mỗi đầu mà họ thu thập.

Bạn có thể duyệt trong phần [Custom heads](https://minecraft-heads.com/custom-heads) để tìm chiếc đầu bạn muốn sử dụng.
Khi bạn tìm thấy một chiếc đầu bạn thích, bạn có thể nhấp vào nó và cuộn xuống, bạn sẽ thấy một trường `Value` chứa một chuỗi, nó trông như thế này:
`eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZTk1MmQyYjNmMzUxYTZiMDQ4N2NjNTlkYjMxYmY1ZjI2NDExMzNlNWJhMDAwNmIxODU3NmU5OTZhMDI5M2U1MiJ9fX0=`

Đây chính là chuỗi Base64 mà chúng ta cần.
Bây giờ chúng ta có thể sử dụng chuỗi này trong bước tiếp theo để đáp ứng nhu cầu của mình.

:::danger Tuyên bố miễn trừ trách nhiệm

Việc lấy skin từ trang web rất dễ dàng, nhưng hãy nhớ: ghi rõ nguồn. Chúng tôi khuyến nghị, trên trang dự án của bạn, hãy ghi chú bạn đã lấy những skin này từ đâu.
Đây không phải là lời khuyên pháp lý, nhưng việc thêm một nguồn cho những skin này trên trang dự án của bạn là một ý tưởng hay.

:::

## 4. Sử dụng kết cấu của bạn cho nhóm vật phẩm {#4-using-your-texture-for-an-item-group}

Đây là mã chúng ta đã sử dụng trước đó:

```java
NamespacedKey categoryId = new NamespacedKey(this, "cool_category");
CustomItemStack categoryItem = new CustomItemStack(Material.DIAMOND, "&4Danh mục cực ngầu");
ItemGroup itemGroup = new ItemGroup(categoryId, categoryItem);

// ...
```

Chúng ta muốn sửa đổi phần này, sử dụng kết cấu của mình để thay thế kim cương.
Slimefun cung cấp một phương thức nhanh chóng và đơn giản: `SlimefunUtils.getCustomHead(...)`.
Lưu ý, bạn cần **import** `io.github.thebusybiscuit.slimefun4.utils.SlimefunUtils`.

Phương thức này nhận một chuỗi Base64, sau đó trả về một phiên bản `ItemStack` của đầu.
Hàm khởi tạo của `CustomItemStack` cũng cho phép chúng ta chỉ định một `ItemStack`, thay vì một `Material`.
Hãy thử xem:

```java
NamespacedKey categoryId = new NamespacedKey(this, "cool_category");
CustomItemStack categoryItem = new CustomItemStack(SlimefunUtils.getCustomHead(...), "&4Danh mục cực ngầu");
ItemGroup itemGroup = new ItemGroup(categoryId, categoryItem);

// ...
```

Bây giờ, chúng ta cần truyền chuỗi Base64 mà chúng ta thu được trước đó cho phương thức này.

```java
NamespacedKey categoryId = new NamespacedKey(this, "cool_category");
CustomItemStack categoryItem = new CustomItemStack(SlimefunUtils.getCustomHead("eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZTk1MmQyYjNmMzUxYTZiMDQ4N2NjNTlkYjMxYmY1ZjI2NDExMzNlNWJhMDAwNmIxODU3NmU5OTZhMDI5M2U1MiJ9fX0="), "&4Danh mục cực ngầu");
ItemGroup itemGroup = new ItemGroup(categoryId, categoryItem);

// ...
```

Như vậy, nhóm vật phẩm của chúng ta sẽ hiển thị dưới dạng đầu.

## 5. Sử dụng kết cấu của bạn cho vật phẩm {#5-using-your-texture-for-items}

Bây giờ, chúng ta hãy xem cách sử dụng kết cấu của mình để thay thế vật phẩm.
Đây là mã trước đó của chúng ta:

```java
// ...
SlimefunItemStack itemStack = new SlimefunItemStack("FIRE_CAKE", Material.CAKE, "&4Bánh lửa", "", LoreBuilder.radioactive(Radioactivity.HIGH), LoreBuilder.HAZMAT_SUIT_REQUIRED);
// ...
```

Sẽ thật tuyệt nếu chiếc bánh của chúng ta thực sự trông giống như một chiếc bánh nguy hiểm phải không?
Khi sử dụng `SlimefunItemStack`, điều này dễ dàng hơn. Chúng ta chỉ cần thay thế material (`Material.CAKE`) của mình bằng chuỗi Base64 của kết cấu.

```java
// ...
SlimefunItemStack itemStack = new SlimefunItemStack("FIRE_CAKE", "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZTk1MmQyYjNmMzUxYTZiMDQ4N2NjNTlkYjMxYmY1ZjI2NDExMzNlNWJhMDAwNmIxODU3NmU5OTZhMDI5M2U1MiJ9fX0=", "&4Bánh lửa", "", LoreBuilder.radioactive(Radioactivity.HIGH), LoreBuilder.HAZMAT_SUIT_REQUIRED);
// ...
```

Bây giờ, chúng ta đã hoàn thành!
Đây là mã hoàn chỉnh:

```java
NamespacedKey categoryId = new NamespacedKey(this, "cool_category");
CustomItemStack categoryItem = new CustomItemStack(SkullItem.fromBase64("eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZTk1MmQyYjNmMzUxYTZiMDQ4N2NjNTlkYjMxYmY1ZjI2NDExMzNlNWJhMDAwNmIxODU3NmU5OTZhMDI5M2U1MiJ9fX0="), "&4Danh mục cực ngầu");
ItemGroup itemGroup = new ItemGroup(categoryId, categoryItem);

// vật phẩm SlimefunItemStack của vật phẩm Slimefun SlimefunItem
SlimefunItemStack itemStack = new SlimefunItemStack("FIRE_CAKE", "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZTk1MmQyYjNmMzUxYTZiMDQ4N2NjNTlkYjMxYmY1ZjI2NDExMzNlNWJhMDAwNmIxODU3NmU5OTZhMDI5M2U1MiJ9fX0=", "&4Bánh lửa", "", LoreBuilder.radioactive(Radioactivity.HIGH), LoreBuilder.HAZMAT_SUIT_REQUIRED);

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

Nếu bạn có bất kỳ câu hỏi nào, có thể hỏi bất cứ lúc nào trong kênh `#programming-help` trên máy chủ Discord.
