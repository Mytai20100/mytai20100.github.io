# Hướng dẫn phát triển (3. Vật phẩm đầu tiên của bạn)

Đây là chương thứ ba của hướng dẫn phát triển của chúng tôi, bạn có thể xem mục lục [tại đây](/Developer-Guide).
Nếu bạn chưa xem nội dung trước đó, vui lòng đọc chúng trước.

## 1. Ôn lại một chút {#1-a-little-recap}

```java
package ...;

import ...;

public class SlimefunAddon extends JavaPlugin implements SlimefunAddon {

    @Override
    public void onEnable() {
        Config cfg = new Config(this);
        // ...
    }

    @Override
    public void onDisable() {
        // ...
    }

    @Override
    public JavaPlugin getJavaPlugin() {
        return this;
    }

    @Override
    public String getBugTrackerURL() {
        return null;
    }
}
```

Tất cả mã trong phần này đều được thêm vào trong phương thức `onEnable()`, sau định nghĩa `Config`.
Hãy bắt đầu nào.

:::tip

Trong các bài viết tiếp theo, bạn có thể thấy hai thuật ngữ danh mục và nhóm vật phẩm. Trong Slimefun, hai thứ này có ý nghĩa giống nhau.
Đó là do trong phiên bản cũ Slimefun gọi nó là danh mục `Category`, và sau bản cập nhật tháng 9 năm 2021, danh mục đã được đổi tên thành nhóm vật phẩm `ItemGroup`.

:::

## 2. Tạo nhóm vật phẩm (ItemGroup) {#2-creating-an-itemgroup}

Bạn có thể đã biết, trong Sách Hướng Dẫn Slimefun có rất nhiều nhóm vật phẩm, ví dụ như: dụng cụ, vũ khí, v.v.
Bạn nên tạo nhóm vật phẩm riêng cho addon của mình.
Chúng ta sẽ bắt đầu từ đây.

Hàm khởi tạo của nhóm vật phẩm có 2 tham số:

- `id` đại diện cho định danh của nhóm vật phẩm, mỗi nhóm vật phẩm đều có một tên riêng, chúng ta sử dụng `NamespacedKey` làm định danh.
- `item` đại diện cho vật phẩm hiển thị của nhóm vật phẩm, vật phẩm này sẽ được hiển thị trong Sách Hướng Dẫn Slimefun.

### ID của nhóm vật phẩm {#our-id}

Chúng ta hãy bắt đầu từ ID.
Chúng ta cần tạo một `NamespacedKey` mới làm ID cho nhóm vật phẩm. Một `NamespacedKey` là một định danh sử dụng tổ hợp bất kỳ chữ cái thường, số, dấu phẩy, dấu gạch dưới làm key, tên plugin của bạn làm namespace.

ID của mỗi nhóm vật phẩm trong plugin của bạn phải là duy nhất.

Chúng ta sẽ sử dụng `cool_category` làm phần key của `NamespacedKey`.
Trong phương thức `onEnable()`, hãy tạo một `NamespacedKey` như thế này:

```java
NamespacedKey categoryId = new NamespacedKey(this, "cool_category");
```

`this` là tham chiếu đến lớp chính của addon của bạn.

### Vật phẩm của nhóm vật phẩm {#our-item}

Bây giờ, chúng ta đến phần vật phẩm của nhóm vật phẩm.
Chúng ta sẽ sử dụng lớp `CustomItemStack` làm vật phẩm. (cần import lớp `io.github.thebusybiscuit.slimefun4.libraries.dough.items.CustomItemStack`)
Bạn có thể tạo một vật phẩm như thế này:

```java
CustomItemStack categoryItem = new CustomItemStack(Material.DIAMOND, "&4Danh mục cực ngầu");
```

Bạn cũng có thể trực tiếp sử dụng mã màu trong tên vật phẩm.
Danh sách đầy đủ Material có thể tra cứu trong [Spigot Javadocs](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html).

### Tổng hợp {#full-assembly}

Cuối cùng, chúng ta hãy tạo một nhóm vật phẩm. Import `io.github.thebusybiscuit.slimefun4.api.items.ItemGroup` và thêm mã sau trong phương thức `onEnable()` để tạo một nhóm vật phẩm:

```java
ItemGroup itemGroup = new ItemGroup(categoryId, categoryItem);
```

Bây giờ, nhóm vật phẩm của chúng ta đã được tạo xong, mã hoàn chỉnh sẽ trông như thế này:

```java
@Override
public void onEnable() {
    Config cfg = new Config(this);
    NamespacedKey categoryId = new NamespacedKey(this, "cool_category");
    CustomItemStack categoryItem = new CustomItemStack(Material.DIAMOND, "&4Danh mục cực ngầu");
    ItemGroup itemGroup = new ItemGroup(categoryId, categoryItem);
    // ...
}
```

Tuy nhiên, nhóm vật phẩm này hiện sẽ không xuất hiện trong Sách Hướng Dẫn Slimefun, vì bên trong không có bất kỳ vật phẩm nào, nó sẽ bị ẩn đi.
Chúng ta cần thêm một vật phẩm vào nó.

## 3. Tạo một vật phẩm {#3-creating-an-item}

Bây giờ, chúng ta đã thiết lập xong nhóm vật phẩm, đã đến lúc tạo một vật phẩm thực sự.
Trong phần này, chúng ta sẽ tạo một vật phẩm rất đơn giản, không có bất kỳ chức năng nào. Chúng ta sẽ thêm chức năng ở phần 4.
Tuy nhiên, trước tiên chúng ta hãy tập trung vào bản thân vật phẩm.

Việc tạo vật phẩm trong Slimefun không khó như chế tạo tên lửa, nhưng bạn vẫn cần chú ý. Chúng ta cần tạo một lớp `SlimefunItem` (`io.github.thebusybiscuit.slimefun4.api.items.SlimefunItem`).

Hàm khởi tạo của lớp này có 4 tham số:

- `itemGroup` là nhóm vật phẩm mà vật phẩm này thuộc về, ở đây chúng ta sẽ sử dụng nhóm vật phẩm vừa tạo.
- `itemStack` là `SlimefunItemStack` mà `SlimefunItem` này sử dụng. Chúng ta sẽ giải thích sau.
- `recipeType` cho biết loại công thức mà vật phẩm này sử dụng. Nói cách khác, là máy cần thiết để tổng hợp vật phẩm này.
- `recipe` là một mảng `ItemStack` độ dài 9, mô tả công thức 3x3.

### Vật phẩm {#the-itemstack}

Vì chúng ta đã tạo xong nhóm vật phẩm trước đó, bây giờ chúng ta sẽ bắt đầu trực tiếp tạo `SlimefunItemStack`.
Lớp `SlimefunItemStack` có rất nhiều hàm khởi tạo, khuyến nghị xem qua chúng trước và tìm cái phù hợp nhất với nhu cầu.

Trong hướng dẫn này, chúng ta sẽ sử dụng hàm khởi tạo sau:
`new SlimefunItemStack(id, material, name, lore...);`

Đầu tiên, chúng ta cần cung cấp `id` cho `SlimefunItemStack`.
`id` là một chuỗi được tạo thành từ tổ hợp bất kỳ chữ cái in hoa, số, dấu gạch dưới. Ví dụ: `MY_ADDON_ITEM`
ID của vật phẩm phải là duy nhất trên toàn cầu (bao gồm bản gốc và tất cả addon), vì vậy hãy chọn ID phù hợp nhất với vật phẩm.

:::tip

Nhiều addon thêm tiền tố liên quan đến tên plugin vào trước ID vật phẩm, điều này giúp tránh xung đột ID. Ví dụ, tất cả ID vật phẩm của mạng lưới đều có tiền tố `NTW_`.

:::

`material` là loại của vật phẩm.
Danh sách đầy đủ Material có thể tra cứu trong [Spigot Javadocs](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html).

Đối với `name`, chúng ta có thể chỉ định một tên, cũng có thể sử dụng mã màu.
Sau `name`, có thể tiếp nối 0 dòng hoặc nhiều dòng mô tả vật phẩm (lore), cũng hỗ trợ mã màu.

Định nghĩa `SlimefunItemStack` hoàn chỉnh sẽ trông như thế này:

```java
SlimefunItemStack itemStack = new SlimefunItemStack("MY_ADDON_ITEM", Material.EMERALD, "&aNgọc lục bảo ngầu lòi", "", "&7Nghe nói rất có giá trị");
```

Đối với mô tả vật phẩm, tôi đã để dòng đầu tiên trống. Điều này không bắt buộc, nhưng có thể giữ định dạng nhất quán với mô tả của các vật phẩm Slimefun khác.

### Công thức {#the-recipe}

Đối với loại công thức `RecipeType`, chúng ta sẽ sử dụng `RecipeType.ENHANCED_CRAFTING_TABLE` tiêu chuẩn, có nghĩa là vật phẩm này sẽ được chế tạo trong [Bàn Chế Tạo Nâng Cao](/Enhanced-Crafting-Table).
Chúng ta sẽ giải thích chi tiết về loại công thức ở các phần sau của hướng dẫn.

Bây giờ, chúng ta hãy định nghĩa công thức. Chúng ta sẽ sử dụng mảng `ItemStack` độ dài 9 làm công thức:

```java
ItemStack[] recipe = {...};
```

9 vật phẩm lần lượt biểu thị mỗi ô 3x3 trong máy phát của Bàn Chế Tạo Nâng Cao (từ trái sang phải, từ trên xuống dưới).
Trong hướng dẫn này, chúng ta sẽ để kim cương xếp thành hình chữ X.
Tất nhiên, bạn có thể sử dụng công thức với bất kỳ hình dạng nào.

```java
ItemStack[] recipe = {
    new ItemStack(Material.DIAMOND),    null,                               new ItemStack(Material.DIAMOND),
    null,                               new ItemStack(Material.DIAMOND),    null,
    new ItemStack(Material.DIAMOND),    null,                               new ItemStack(Material.DIAMOND)
};
```

:::warning Lưu ý quan trọng:

Bạn có thể sử dụng `SlimefunItems.ITEM_ID` để sử dụng vật phẩm trong Slimefun làm một phần của công thức.

:::

Bây giờ, hãy thay thế vật phẩm ở trung tâm công thức thành kim cương đen:

```java
ItemStack[] recipe = {
    new ItemStack(Material.DIAMOND),    null,                               new ItemStack(Material.DIAMOND),
    null,                               SlimefunItems.CARBONADO,            null,
    new ItemStack(Material.DIAMOND),    null,                               new ItemStack(Material.DIAMOND)
};
```

## 4. Thêm vật phẩm của bạn {#4-adding-your-item}

Để tạo một vật phẩm, bạn có thể sử dụng mã như thế này:

```java
SlimefunItem sfItem = new SlimefunItem(itemGroup, itemStack, recipeType, recipe);
```

Cuối cùng, chúng ta phải đăng ký vật phẩm đó mới có thể khiến vật phẩm xuất hiện trong Sách Hướng Dẫn Slimefun. Chúng ta cần gọi phương thức `sfItem.register(this)`.
Vật phẩm này bây giờ cũng có thể được tổng hợp trong máy đã chỉ định.
`this` đề cập đến lớp chính `SlimefunAddon` của addon Slimefun của bạn.

Hãy cùng xem lại các bước trước đó:

1. Tạo một nhóm vật phẩm `ItemGroup`
   a. Sử dụng `CustomItemStack` làm vật phẩm hiển thị
2. Tạo một vật phẩm Slimefun `SlimefunItem`
   a. Sử dụng công thức tùy chỉnh
   b. Sử dụng `SlimefunItemStack` để chỉ định ID vật phẩm, chất liệu, tên hiển thị và mô tả

Dưới đây là toàn bộ mã cho đến hiện tại (trong phương thức `onEnable()`):

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
// đăng ký vật phẩm
```

### Danh mục theo mùa và danh mục bị khóa {#seasonal-and-locked-categories}

Bạn cũng có thể tạo một danh mục theo mùa `SeasonalItemGroup` hoặc danh mục bị khóa `LockedItemGroup`, thay vì danh mục thông thường `ItemGroup`.
Loại danh mục này cần chỉ định cấp độ (tier). Cấp độ này quyết định vị trí xuất hiện của danh mục trong Sách Hướng Dẫn Slimefun. Danh mục có cấp độ càng thấp sẽ hiển thị ở phía trước hơn.

- Danh mục theo mùa `SeasonalItemGroup` chỉ hiển thị trong Sách Hướng Dẫn Slimefun vào tháng được chỉ định trong năm, thời gian còn lại sẽ bị ẩn.
- Danh mục bị khóa `LockedItemGroup` sẽ cần tất cả vật phẩm trong danh mục cha của nó (có thể có nhiều) được mở khóa mới có thể xem danh mục này.

```java
Month month = Month.JAN; // bất kỳ tháng nào từ java.time.Month
SeasonalItemGroup group = new SeasonalItemGroup(categoryId, categoryItem, tier, month);
```

```java
// nhóm vật phẩm này cần `parentItemGroupA` và `parentItemGroupB` đều được mở khóa mới có thể truy cập.
LockedItemGroup category = new LockedItemGroup(categoryId, categoryItem, tier, parentItemGroupA.getKey(), parentItemGroupB.getKey());
```
