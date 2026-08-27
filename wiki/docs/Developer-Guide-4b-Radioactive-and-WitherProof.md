# Hướng dẫn phát triển (4b. Phóng xạ và Miễn nhiễm Wither)

Đây là chương thứ tư của hướng dẫn phát triển của chúng tôi, bạn có thể xem mục lục [tại đây](/Developer-Guide).
Nếu bạn chưa xem nội dung trước đó, vui lòng đọc chúng trước.

:::info

Chương 4 được chia thành hai phần, đây là phần thứ hai.

:::

## 1. Ôn lại phần 4a {#1-a-recap-of-part-4a}

Phần đầu tiên của chương 4 không phải là **bắt buộc** cho phần này.
Tuy nhiên chúng ta đã giới thiệu một số nguyên tắc rất quan trọng ở đó, ở đây cũng cần dùng đến, vì vậy chúng tôi sẽ không giải thích lại. Nếu có gì không rõ, vui lòng xem [phần đầu tiên của chương 4](/Developer-Guide-4a-Right-Clicks).

Tốt, lần trước chúng ta đã tạo một chiếc bánh tùy chỉnh sẽ khiến bạn bốc cháy khi cố gắng ăn nó.
Nhưng nó cũng sẽ cho bạn 1 cấp độ kinh nghiệm khi bạn cầm và nhấp chuột phải.
Để làm được điều này, chúng ta đã giới thiệu khái niệm lớp, cụ thể hơn, chúng ta đã dạy bạn cách tạo một lớp mở rộng `SlimefunItem`.

```java
public class FireCake extends SlimefunItem {
    
    public FireCake(ItemGroup itemGroup, SlimefunItemStack item, RecipeType recipeType, ItemStack[] recipe) {
        super(itemGroup, item, recipeType, recipe);
    }
    
    @Override
    public void preRegister() {
        BlockUseHandler blockUseHandler = this::onBlockRightClick;
        addItemHandler(blockUseHandler);
        
        ItemUseHandler itemUseHandler = this::onItemUseRightClick;
        addItemHandler(itemUseHandler);
    }
    
    private void onBlockRightClick(PlayerRightClickEvent event) {
        // điều này sẽ ngăn người chơi ăn chiếc bánh
        event.cancel();
        // bây giờ, đặt người chơi cháy trong 5 giây
        event.getPlayer().setFireTicks(5 * 20);
    }
    
    private void onItemUseRightClick(PlayerRightClickEvent event) {
        // nếu gọi event.cancel() ở đây sẽ ngăn người chơi đặt bánh
        event.getPlayer().giveExpLevels(1);
    }
    
}
```

Chúng ta có thể tạm thời bỏ qua các phương thức `preRegister()` và `onBlockRightClick()`, những điều này đã được nói ở phần đầu tiên của chương 4.

## 2. Thuộc tính vật phẩm {#2-item-attributes}

Vật phẩm Slimefun có thể có chức năng (gọi là bộ xử lý vật phẩm `ItemHandlers`), nhưng chúng cũng có thể có một số thuộc tính (gọi là thuộc tính vật phẩm `ItemAttributes`).
Lưu ý, các thuộc tính này không liên quan đến hệ thống thuộc tính của Minecraft.

Thuộc tính vật phẩm `ItemAttribute` có thể được thêm vào `SlimefunItem`, ví dụ, chúng ta có thể làm cho chiếc bánh của mình có tính phóng xạ.
Hãy làm cho chiếc bánh của chúng ta cũng có tính phóng xạ nhé?

Để thêm một thuộc tính vật phẩm, chỉ cần thêm nó vào khai báo lớp của bạn.
Nhưng thuộc tính vật phẩm là giao diện, không phải lớp. Vì vậy bạn cần sử dụng từ khóa `implements` ở đây.
Như chúng ta đã nói ở phần trước: lớp chỉ có thể có một lớp cha trực tiếp. Nhưng chúng có thể triển khai bất kỳ số lượng giao diện nào.
Hãy triển khai giao diện `Radioactive`. Bây giờ mã của bạn sẽ trông như thế này:

```java
public class FireCake extends SlimefunItem implements Radioactive {
    
    public FireCake(ItemGroup itemGroup, SlimefunItemStack item, RecipeType recipeType, ItemStack[] recipe) {
        super(itemGroup, item, recipeType, recipe);
    }
    
    // ...
    
}
```

Nhớ import giao diện.
Nhưng chúng ta chưa xong, mỗi giao diện thường định nghĩa một tập hợp các phương thức mà chúng ta cần tự triển khai.
IDE của bạn chắc hẳn đã nhắc bạn làm điều này rồi.

Trong giao diện `Radioactive`, chỉ có một phương thức: `getRadioactivity()`. Hãy triển khai phương thức đó như thế này:

```java
public class FireCake extends SlimefunItem implements Radioactive {
    
    public FireCake(ItemGroup itemGroup, SlimefunItemStack item, RecipeType recipeType, ItemStack[] recipe) {
        super(itemGroup, item, recipeType, recipe);
    }
    
    @Override
    public Radioactivity getRadiation() {
      // ?
    }
    
    // ...
    
}
```

Bây giờ chúng ta cần cho phương thức này làm gì đó.
Phương thức này mong đợi chúng ta trả về một giá trị kiểu `Radioactivity`.
`Radioactivity` là một enum. Enum là một loại lớp không thể tạo dễ dàng như vậy.
Enum có số lượng trạng thái khả dĩ hữu hạn, mỗi trạng thái được lưu như một hằng số, có thể truy cập qua `EnumName.CONSTANT_NAME`.

Bạn có thể xem tất cả các hằng số của enum này trong [Javadocs](https://slimefun.github.io/javadocs/Slimefun4/docs/io/github/thebusybiscuit/slimefun4/core/attributes/Radioactivity.html) của chúng tôi.

Chúng ta sẽ sử dụng `Radioactivity.HIGH`, đây là một hằng số biểu thị độ phóng xạ cao.
Chỉ cần trả về hằng số đó là được.

```java
public class FireCake extends SlimefunItem implements Radioactive {
    
    public FireCake(ItemGroup itemGroup, SlimefunItemStack item, RecipeType recipeType, ItemStack[] recipe) {
        super(itemGroup, item, recipeType, recipe);
    }
    
    @Override
    public Radioactivity getRadiation() {
        return Radioactivity.HIGH;
    }
    
    // ...
    
}
```

Bây giờ vật phẩm của bạn đã có tính phóng xạ, nó sẽ gây hại cho người chơi và yêu cầu họ mặc đồ bảo hộ.
Nhưng người chơi của chúng ta không biết vật phẩm này có tính phóng xạ.

## 3. Thay đổi mô tả vật phẩm {#3-changing-the-item-lore}

Cách tốt nhất để người chơi hiểu về vật phẩm của bạn là thông qua mô tả vật phẩm (lore).
Hãy quay lại phương thức `onEnable()` trong lớp chính của plugin.

```java
NamespacedKey categoryId = new NamespacedKey(this, "cool_category");
CustomItemStack categoryItem = new CustomItemStack(Material.DIAMOND, "&4Danh mục cực ngầu");
// tạo nhóm vật phẩm ItemGroup
ItemGroup itemGroup = new ItemGroup(categoryId, categoryItem);
// vật phẩm SlimefunItemStack của vật phẩm Slimefun SlimefunItem
SlimefunItemStack itemStack = new SlimefunItemStack("MY_ADDON_ITEM", Material.CAKE, "&4Bánh lửa", "", "&cCẩn thận!");
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

Hãy thay đổi mô tả của vật phẩm. Mô tả hiện tại là: `&cCẩn thận!`.
Chúng ta muốn bao gồm một gợi ý về tính phóng xạ.
May mắn thay, Slimefun có một phương thức tích hợp để làm điều này.

Có một phương thức tĩnh gọi là `LoreBuilder.radioactive(...)`, nó nhận một hằng số `Radioactivity` làm tham số.
Chúng ta có thể sử dụng nó để tạo một chuỗi về tính phóng xạ. Đây sẽ là chuỗi giống như được sử dụng cho các vật phẩm tiêu chuẩn của Slimefun.
Nếu bạn muốn tiến xa hơn, bạn cũng có thể sử dụng hằng số tĩnh `LoreBuilder.HAZMAT_SUIT_REQUIRED`, nó sẽ cảnh báo người chơi cần mặc đồ bảo hộ.
Hãy làm những điều này nhé.

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

Bây giờ, vật phẩm của chúng ta đã có mô tả phù hợp.

## 4. Triển khai bất kỳ thuộc tính vật phẩm nào khác {#4-implementing-any-other-itemattribute}

Quá trình triển khai bất kỳ `ItemAttribute` nào cũng giống nhau.
Chúng tôi luôn khuyến nghị sử dụng lớp `LoreBuilder` hoặc thông báo thủ công cho người dùng về các thuộc tính này.

Bạn có thể tìm thấy danh sách đầy đủ tất cả các thuộc tính vật phẩm có sẵn tại [Javadocs](https://slimefun.github.io/javadocs/Slimefun4/docs/io/github/thebusybiscuit/slimefun4/core/attributes/ItemAttribute.html), nhấp vào **All Known Subinterfaces**.

Như một phần thưởng nhỏ, hãy triển khai thuộc tính `WitherProof`.
Thuộc tính này sẽ ngăn Wither phá hủy khối của chúng ta.
Hãy quay lại lớp của chúng ta và triển khai giao diện đó. Bạn có thể sử dụng dấu phẩy để nối các giao diện khác nhau.

```java
public class FireCake extends SlimefunItem implements Radioactive, WitherProof {
    
    public FireCake(ItemGroup itemGroup, SlimefunItemStack item, RecipeType recipeType, ItemStack[] recipe) {
        super(itemGroup, item, recipeType, recipe);
    }
    
    // ...
    
}
```

Bây giờ, quá trình là giống nhau, `WitherProof` cũng có một phương thức cần triển khai.
Phương thức này được gọi là `onAttack()`, nó sẽ được thực thi khi Wither cố gắng phá hủy khối này.
Chỉ cần triển khai phương thức này là có thể ngăn Wither phá hủy khối.
Sau khi triển khai phương thức này, mã của bạn sẽ trông như thế này:

```java
public class FireCake extends SlimefunItem implements Radioactive, WitherProof {
    
    public FireCake(ItemGroup itemGroup, SlimefunItemStack item, RecipeType recipeType, ItemStack[] recipe) {
        super(itemGroup, item, recipeType, recipe);
    }
    
    @Override
    public void onAttack(Block block, Wither wither) {
    
    }
    
    // ...
    
}
```

Các tham số `block` và `wither` của phương thức lần lượt tương ứng với khối mà Wither cố gắng phá hủy và Wither đang cố gắng phá hủy khối đó.
Bạn có thể để phương thức này trống, giao diện dù sao cũng sẽ hủy sự kiện.

Tất nhiên, bạn có thể làm một số việc trong phương thức này, ví dụ như tạo một hạt (particle).
Hoặc, một ý tưởng tốt hơn, hãy ngay lập tức giết Wither khi nó cố gắng phá hủy chiếc bánh quý giá của chúng ta.

```java
public class FireCake extends SlimefunItem implements Radioactive, WitherProof {
    
    public FireCake(ItemGroup itemGroup, SlimefunItemStack item, RecipeType recipeType, ItemStack[] recipe) {
        super(itemGroup, item, recipeType, recipe);
    }
    
    @Override
    public void onAttack(Block block, Wither wither) {
        wither.setHealth(0);
    }
    
    // ...
    
}
```

Đặt máu của Wither thành 0 sẽ giết nó ngay lập tức.
Bây giờ, hãy xem lại lớp `FireCake` hoàn chỉnh.

```java
public class FireCake extends SlimefunItem implements Radioactive, WitherProof {
    
    public FireCake(ItemGroup itemGroup, SlimefunItemStack item, RecipeType recipeType, ItemStack[] recipe) {
        super(itemGroup, item, recipeType, recipe);
    }
    
    @Override
    public Radioactivity getRadiation() {
        return Radioactivity.HIGH;
    }
    
    @Override
    public void onAttack(Block block, Wither wither) {
        wither.setHealth(0);
    }
    
    @Override
    public void preRegister() {
        BlockUseHandler blockUseHandler = this::onBlockRightClick;
        addItemHandler(blockUseHandler);
        
        ItemUseHandler itemUseHandler = this::onItemUseRightClick;
        addItemHandler(itemUseHandler);
    }
    
    private void onBlockRightClick(PlayerRightClickEvent event) {
        // điều này sẽ ngăn người chơi ăn chiếc bánh
        event.cancel();
        // bây giờ, đặt người chơi cháy trong 5 giây
        event.getPlayer().setFireTicks(5 * 20);
    }
    
    private void onItemUseRightClick(PlayerRightClickEvent event) {
        // nếu gọi event.cancel() ở đây sẽ ngăn người chơi đặt bánh
        event.getPlayer().giveExpLevels(1);
    }
    
}
```

Bây giờ, chúng ta có một chiếc bánh, nó:

- sẽ khiến bạn bốc cháy khi cố gắng ăn
- khi bạn mang theo nó, nó có tính phóng xạ
- khi bạn cầm và nhấp chuột phải, sẽ cho bạn 1 cấp độ kinh nghiệm
- ngay lập tức giết bất kỳ Wither nào cố gắng phá hủy nó

Tôi nghĩ đây là một vật phẩm rất ngầu, mặc dù nó hơi… kỳ lạ và không bình thường.
Nếu bạn có bất kỳ câu hỏi nào, chào mừng bạn đến kênh `#programming-help` trên Discord để hỏi.
