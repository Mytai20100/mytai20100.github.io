# Hướng dẫn phát triển (4a. Nhấp chuột phải)

Đây là chương thứ tư của hướng dẫn phát triển của chúng tôi, bạn có thể xem mục lục [tại đây](/Developer-Guide).
Nếu bạn chưa xem nội dung trước đó, vui lòng đọc chúng trước.

:::info

Chương 4 được chia thành hai phần, đây là phần đầu tiên.

:::

## 1. Lần trước chúng ta đã làm gì {#1-what-we-did-last-time}

Ở phần trước, chúng ta đã học cách tạo vật phẩm Slimefun, nhóm vật phẩm và công thức của riêng mình.
Nếu bạn chưa xem phần trước, vui lòng đọc nó trước, nếu không bạn sẽ không thể tiếp tục.

Bây giờ chúng ta tiếp tục nội dung của phần trước. Đây là mã từ phần trước (nên nằm trong phương thức `onEnable`):

```java
NamespacedKey categoryId = new NamespacedKey(this, "cool_category");
CustomItemStack categoryItem = new CustomItemStack(Material.DIAMOND, "&4Danh mục cực ngầu");
// tạo nhóm vật phẩm ItemGroup
ItemGroup itemGroup = new ItemGroup(categoryId, categoryItem);
// vật phẩm SlimefunItemStack của vật phẩm Slimefun SlimefunItem
SlimefunItemStack itemStack = new SlimefunItemStack("MY_ADDON_ITEM", Material.EMERALD, "&aNgọc lục bảo ngầu lòi", "", "&7Nghe nói rất có giá trị");
// công thức tổng hợp có thứ tự 3x3
ItemStack[] recipe = {
    new ItemStack(Material.DIAMOND),    null,                               new ItemStack(Material.DIAMOND),
    null,                               SlimefunItems.CARBONADO,            null,
    new ItemStack(Material.DIAMOND),    null,                               new ItemStack(Material.DIAMOND)
};
SlimefunItem sfItem = new SlimefunItem(itemGroup, itemStack, RecipeType.ENHANCED_CRAFTING_TABLE, recipe);
sfItem.register(this);
```

Bây giờ, bạn có thể biên dịch addon của mình và thử nghiệm trong game. Chi tiết vui lòng tham khảo phần [biên dịch](/Developer-Guide-9-Compiling).
Như bạn thấy, vật phẩm Slimefun mà chúng ta tạo đã xuất hiện trong Sách Hướng Dẫn Slimefun và có thể được chế tạo.
Tuy nhiên, vật phẩm này hiện không có giá trị gì, vì nó chẳng làm gì cả.
Hãy thay đổi điều đó nhé.

## 2. Mở rộng SlimefunItem {#2-extending-slimefunitem}

Ở phần trước, chúng ta đã sử dụng lớp `SlimefunItem` để tạo vật phẩm của mình. Điều này không sai, nhưng mặc định nó sẽ không làm gì cả.
Vì vậy, chúng ta cần tạo lớp của riêng mình.
Điều này khá đơn giản, bạn sẽ thường xuyên cần tạo lớp.

Trong hướng dẫn này, chúng ta sẽ tạo một chiếc bánh sẽ khiến bạn bốc cháy khi cố gắng ăn nó.
Hãy gọi nó là `FireCake`. Bây giờ, hãy tạo lớp `FireCake`.
Lớp của bạn ban đầu nên là một canvas trống, trông như thế này:

```java
public class FireCake {

}
```

Trong Java hoặc các ngôn ngữ lập trình hướng đối tượng khác, các lớp (Class) có thể kế thừa lẫn nhau.
Bạn có thể xem lớp như một mẫu cho đối tượng. Lớp `SlimefunItem` về cơ bản là mẫu cho bất kỳ vật phẩm nào mà chúng ta sẽ tạo.
Bây giờ chúng ta đã tạo lớp riêng, đây là một mẫu đối tượng hoàn toàn mới. Nhưng chúng ta có thể mở rộng mẫu `SlimefunItem`, điều này sẽ đảm bảo các vật phẩm được tạo bằng lớp của chúng ta có cùng chức năng như các vật phẩm được tạo bằng lớp `SlimefunItem`.

Tương tự, lớp chính của plugin của bạn chỉ là phần mở rộng của lớp `JavaPlugin` của Bukkit, đây là mẫu cho tất cả plugin.
Lớp chính của bạn mở rộng plugin đó, sau đó máy chủ của bạn tạo một đối tượng plugin dựa trên mẫu mà bạn đã định nghĩa.

Tôi hy vọng điều này không khiến bạn quá bối rối, bây giờ chúng ta cần làm là:
Chúng ta muốn lớp `FireCake` của mình mở rộng lớp `SlimefunItem` để nó kế thừa từ lớp đó.
Để làm điều này, chúng ta sử dụng từ khóa `extends` theo sau là lớp cha (`SlimefunItem`). Lưu ý, bất kỳ lớp nào cũng chỉ có thể có một lớp cha.

```java
public class FireCake extends SlimefunItem {

}
```

Bây giờ IDE của bạn có thể bắt đầu báo lỗi tại điểm này.
Chúng ta cần một hàm khởi tạo (constructor). Hàm khởi tạo định nghĩa **cách** đối tượng được tạo từ “mẫu” này.
Và hàm khởi tạo của `SlimefunItem` cần một số tham số, tất cả các lớp con đều cần cung cấp các tham số này.

Nếu chúng ta nhớ lại mã trước đó, hàm khởi tạo trông như thế này:

```java
new SlimefunItem(itemGroup, itemStack, recipeType, recipe);
```

Trong lớp mới của chúng ta, chúng ta có thể sao chép đơn giản hàm khởi tạo này và truyền tất cả các tham số cho hàm khởi tạo của lớp cha.

:::tip

Thường thì lớp cha được gọi là **lớp siêu (superclass)**, và các hàm khởi tạo của chúng được gọi là **hàm khởi tạo siêu (super constructor)**.

:::

Chúng ta chỉ cần sử dụng từ khóa `super` và truyền các tham số, hàm khởi tạo bây giờ trông như thế này:

```java
public class FireCake extends SlimefunItem {
    
    public FireCake(ItemGroup itemGroup, SlimefunItemStack item, RecipeType recipeType, ItemStack[] recipe) {
        super(itemGroup, item, recipeType, recipe);
    }
    
}
```

Bây giờ lớp của chúng ta về cơ bản đã được thiết lập.
Chúng ta thậm chí có thể quay lại lớp chính và sử dụng lớp của mình, hãy thử xem.

```java
NamespacedKey categoryId = new NamespacedKey(this, "cool_category");
CustomItemStack categoryItem = new CustomItemStack(Material.DIAMOND, "&4Danh mục cực ngầu");
// tạo nhóm vật phẩm ItemGroup
ItemGroup itemGroup = new ItemGroup(categoryId, categoryItem);
// vật phẩm SlimefunItemStack của vật phẩm Slimefun SlimefunItem
SlimefunItemStack itemStack = new SlimefunItemStack("FIRE_CAKE", Material.CAKE, "&4Bánh lửa", "", "&cCẩn thận!");
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

:::warning Rất quan trọng

Bạn cần đặt material của `SlimefunItemStack` thành `Material.CAKE`, nếu không bạn sẽ không thể ăn nó.

:::

## 3. Thêm một bộ xử lý vật phẩm (BlockUseHandler) {#3-adding-an-item-handler-blockusehandler}

Bây giờ, chúng ta đã thay thế lớp, addon sẽ hoạt động như mong đợi. Nhưng, không có gì thay đổi.
Cho đến nay, những gì chúng ta làm chỉ là thêm một lớp mới, hoạt động hoàn toàn giống như `SlimefunItem`.
Chúng ta cần thêm chức năng thực sự cho lớp.

Trong Slimefun, chúng ta có thể thêm chức năng thông qua bộ xử lý vật phẩm `ItemHandler` ([Javadocs](https://slimefun.github.io/javadocs/Slimefun4/docs/io/github/thebusybiscuit/slimefun4/api/items/ItemHandler.html)).
Có một số loại `ItemHandler` để lựa chọn, bạn có thể tìm thấy danh sách đầy đủ trong Javadocs của chúng tôi, tại *All Known Subinterfaces*.

Để thêm `ItemHandler`, chúng ta cần quay lại lớp vật phẩm tùy chỉnh của mình.

```java
public class FireCake extends SlimefunItem {
    
    public FireCake(ItemGroup itemGroup, SlimefunItemStack item, RecipeType recipeType, ItemStack[] recipe) {
        super(itemGroup, item, recipeType, recipe);
    }
    
}
```

Chúng ta sẽ **ghi đè (Override)** một phương thức từ `SlimefunItem`, gọi là `preRegister()`.
Phương thức này được gọi trước khi vật phẩm được đăng ký, điều này đảm bảo bộ xử lý của chúng ta được thêm đúng cách.
Lưu ý, phương thức ghi đè nên có chú thích `@Override` như dưới đây:

```java
public class FireCake extends SlimefunItem {
    
    public FireCake(ItemGroup itemGroup, SlimefunItemStack item, RecipeType recipeType, ItemStack[] recipe) {
        super(itemGroup, item, recipeType, recipe);
    }
    
    @Override
    public void preRegister() {
        // chúng ta sẽ thêm bộ xử lý vật phẩm tại đây
    }
    
}
```

Bạn có thể thêm bao nhiêu bộ xử lý vật phẩm tùy ý, nhưng hãy cẩn thận, một số bộ xử lý có yêu cầu rất nghiêm ngặt.
Ví dụ, bạn chỉ có thể thêm `BowShootingHandler` vào cung, mà không thể thêm vào bất kỳ vật phẩm nào khác.

Bộ xử lý vật phẩm chúng ta sẽ chọn là: `BlockUseHandler`, `BlockUseHandler` sẽ được gọi khi người chơi nhấp chuột phải vào khối của chúng ta.
Tương tự, `ItemUseHandler` được gọi khi người chơi cầm vật phẩm và nhấp chuột phải.

Bây giờ, chúng ta tìm đến phương thức `preRegister()`.
Đầu tiên, chúng ta khai báo một `BlockUseHandler` mới.
Nhưng đừng viết gì ở phía bên phải.

Sau đó, chúng ta có thể thêm bộ xử lý của mình bằng cách gọi `addItemHandler(...)`.

```java
@Override
public void preRegister() {
    BlockUseHandler blockUseHandler = ???;
    addItemHandler(blockUseHandler);
}
```

Tuyệt, chúng ta đã thêm thành công `BlockUseHandler` vào vật phẩm của mình.
Ngoại trừ… chúng ta chưa tạo `BlockUseHandler`.

`BlockUseHandler` là một giao diện chỉ có một phương thức. Giao diện về cơ bản chỉ là mẫu của mẫu của chúng ta.
Chúng là mẫu cho lớp (Class), nhưng không triển khai (implement) chúng. Hãy xem chúng như một bộ khung.

Giao diện chỉ có một phương thức được gọi là **giao diện hàm (Functional Interface)**, vì chúng chỉ có một phương thức, nên chúng có thể được gọi như một phương thức.
Lưu ý, ở đây dùng là “như”, chứ không phải “là”. Vì từ Java 8, chúng ta có thể tham chiếu một phương thức, sau đó đơn giản truyền nó như một triển khai giao diện.

Nếu bạn cần giải thích chi tiết về tất cả những điều này, hãy thử tìm kiếm trên internet về “Java 8 Lambdas”, “Java 8 method references” và “Java 8 functional interfaces”.
Đối với mục đích của hướng dẫn này, bạn chỉ cần biết bộ xử lý vật phẩm của bạn có thể được triển khai thông qua một phương thức, và chúng ta có thể tham chiếu phương thức đó.

Phương thức của `BlockUseHandler` nhận một `PlayerRightClickEvent` làm tham số.
Vì vậy chúng ta có thể đơn giản tạo một phương thức mới với tham số này.

```java
@Override
public void preRegister() {
    BlockUseHandler blockUseHandler = ???;
    addItemHandler(blockUseHandler);
}

// Lưu ý tên phương thức ở đây không quan trọng
private void onBlockRightClick(PlayerRightClickEvent event) {
    // Phương thức này bây giờ sẽ được gọi bất cứ khi nào Khối này được nhấp chuột phải.
}
```

Bây giờ, quay lại phần này:

```java
BlockUseHandler blockUseHandler = ???;
```

Chúng ta bây giờ cần tham chiếu phương thức của mình, bảo plugin gọi phương thức này khi khối đó được sử dụng.
Để tham chiếu phương thức trong cùng một lớp, chúng ta có thể sử dụng `this::methodname`. Lưu ý, điều này **không** thực thi phương thức đó.
Phương thức chỉ được tham chiếu và được truyền như một `BlockUseHandler` trong ví dụ của chúng ta.
Vì vậy chúng ta có thể đơn giản tham chiếu phương thức `onBlockRightClick` của mình ở đây.

```java
BlockUseHandler blockUseHandler = this::onBlockRightClick;
```

Mã hoàn chỉnh bây giờ trông như thế này:

```java
public class FireCake extends SlimefunItem {
    
    public FireCake(ItemGroup itemGroup, SlimefunItemStack item, RecipeType recipeType, ItemStack[] recipe) {
        super(itemGroup, item, recipeType, recipe);
    }
    
    @Override
    public void preRegister() {
        BlockUseHandler blockUseHandler = this::onBlockRightClick;
        addItemHandler(blockUseHandler);
    }
    
    private void onBlockRightClick(PlayerRightClickEvent event) {
    
    }
    
}
```

Bây giờ chúng ta có thể làm một số việc trong phương thức `onBlockRightClick`.
Hãy ngăn người chơi ăn chiếc bánh này. Chúng ta có thể làm điều này bằng cách sử dụng `event.cancel()`.

```java
private void onBlockRightClick(PlayerRightClickEvent event) {
    // điều này sẽ ngăn người chơi ăn chiếc bánh
    event.cancel();
}
```

Sau đó, chúng ta cần khiến người chơi đã ăn phải bốc cháy.
Bukkit sử dụng [tick](https://zh.minecraft.wiki/w/%E5%88%BB#%E6%B8%B8%E6%88%8F%E5%88%BB%E4%B8%8E%E8%AE%A1%E7%AE%97%E9%80%9F%E7%8E%87) để xác định người chơi nên cháy trong bao lâu. Một tick bằng 1/20 giây.
Vì vậy 20 tick sẽ có nghĩa là 1 giây. Nếu chúng ta nhân x với 20, chúng ta có thể khiến họ cháy x giây.

```java
private void onBlockRightClick(PlayerRightClickEvent event) {
    // điều này sẽ ngăn người chơi ăn chiếc bánh
    event.cancel();
    // bây giờ, đặt người chơi cháy trong 5 giây
    event.getPlayer().setFireTicks(5 * 20);
}
```

Bây giờ chiếc bánh lửa của chúng ta đã hoàn thành.
Hãy thử nghiệm trong game, chế tạo chiếc bánh và xem bạn có bị cháy không.

:::warning Rất quan trọng

Bạn cần đặt material của `SlimefunItemStack` thành `Material.CAKE`, nếu không bạn sẽ không thể ăn nó.

:::

## 4. Thêm nhiều bộ xử lý vật phẩm (ItemUseHandler) {#4-adding-multiple-item-handlers-itemusehandler}

Bạn có thể thêm bao nhiêu bộ xử lý vật phẩm tùy ý. Ví dụ, bạn có thể thêm một `ItemUseHandler`, nó sẽ được kích hoạt khi người chơi cầm bánh và nhấp chuột phải.

Bây giờ, chúng ta sẽ thêm một phương thức mới (cũng với tham số `PlayerRightClickEvent`) và thêm nó như một `ItemUseHandler`.
Hãy thân thiện với người chơi một chút, khi người chơi cầm bánh và nhấp chuột phải, hãy tặng họ 1 cấp độ kinh nghiệm.

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

Tốt, bây giờ chiếc bánh của chúng ta có thể khiến người chơi bốc cháy và nhận 1 cấp độ kinh nghiệm.
Nếu bạn có bất kỳ câu hỏi nào, chào mừng bạn đến kênh `#programming-help` trên Discord để hỏi.
Tôi hy vọng hướng dẫn này hữu ích cho bạn, mong được thấy addon của bạn!
