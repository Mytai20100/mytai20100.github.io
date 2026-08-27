# Hướng dẫn phát triển (7. Tài nguyên GEO)

Đây là chương thứ bảy của hướng dẫn phát triển của chúng tôi, bạn có thể xem mục lục [tại đây](/Developer-Guide).
Nếu bạn chưa xem nội dung trước đó, vui lòng đọc chúng trước.

## 1. Ôn lại {#1-a-recap}

Ở chương trước, chúng ta đã nói về cách tạo đầu tùy chỉnh và sử dụng chúng cho vật phẩm và danh mục.
Hôm nay, chúng ta sẽ mở rộng kiến thức đó và tạo một loại quặng mới, quặng này có thể thu được thông qua [Máy Khai Thác Tài Nguyên GEO](/GEO-Miner).
Trước khi tiếp tục, hãy xem lại mã trước đó:

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

## 2. Tạo một vật phẩm mới {#2-creating-a-new-item}

Tài nguyên GEO rõ ràng cũng cần một vật phẩm, vì vậy chúng ta sẽ bắt đầu từ đây.
Chúng ta sẽ bắt đầu từ mã trước đó, sau đó tạo một vật phẩm mới bên dưới nó.

Nhưng, đợi đã... trước tiên chúng ta cần nghĩ ra một loại tài nguyên.
Giả sử chúng ta có thể tạo một loại quặng chỉ xuất hiện trong chiều không gian End? Quặng End? Đúng vậy, chúng ta sẽ dùng cái này.
Chúng ta thêm bên dưới mã trước đó trong phương thức `onEnable()`:

```java
// ...

SlimefunItemStack enderOreItem = new SlimefunItemStack("ENDER_ORE", "eyJ0ZXh...", "&5Quặng End", "", "&rĐây là một loại quặng rất ngầu", "&rThu được trong End thông qua Máy Khai Thác Tài Nguyên GEO");
```

Chúng ta sẽ sử dụng một kết cấu đầu tùy chỉnh, nhưng tôi sẽ rút ngắn chuỗi kết cấu để dễ đọc hơn.
Bây giờ chúng ta đã tạo xong `ItemStack`, có thể bắt đầu tạo vật phẩm. Chúng ta sẽ sử dụng nhóm vật phẩm đã tạo trước đó.

```java
// ...
SlimefunItemStack enderOreItem = new SlimefunItemStack("ENDER_ORE", "eyJ0ZXh...", "&5Quặng End", "", "&rĐây là một loại quặng rất ngầu", "&rThu được trong End thông qua Máy Khai Thác Tài Nguyên GEO");
SlimefunItem enderOre = new SlimefunItem(itemGroup, enderOreItem, ..., ...);
enderOre.register();
```

Bây giờ, bạn có thể nhận thấy, hai tham số cuối cùng vẫn còn thiếu.
Chúng ta không muốn vật phẩm của mình có thể được chế tạo, chúng ta muốn nó thu được thông qua Máy Khai Thác Tài Nguyên GEO, đồng thời cũng hiển thị trong sách hướng dẫn.
Để làm điều này, chúng ta có thể sử dụng loại công thức `RecipeType.GEO_MINER`.
Tuy nhiên... việc sử dụng loại công thức này **sẽ không** tự động thêm vật phẩm của chúng ta vào Máy Khai Thác Tài Nguyên GEO, chúng ta vẫn cần hoàn thành thao tác này ở bước tiếp theo.
Loại công thức này chỉ được sử dụng như một *vật phẩm trưng bày* để thông báo cho người dùng cách thu được nó. Do đó, chúng ta không cần công thức.
Tuy nhiên, chúng ta vẫn cần truyền một mảng công thức độ dài 9, vì vậy chúng ta chỉ cần tạo một mảng rỗng 9 ô là được.

```java
// ...
SlimefunItemStack enderOreItem = new SlimefunItemStack("ENDER_ORE", "eyJ0ZXh...", "&5Quặng End", "", "&rĐây là một loại quặng rất ngầu", "&rThu được trong End thông qua Máy Khai Thác Tài Nguyên GEO");
SlimefunItem enderOre = new SlimefunItem(itemGroup, enderOreItem, RecipeType.GEO_MINER, new ItemStack[9]);
enderOre.register();
```

Bây giờ, vật phẩm của chúng ta gần như đã hoàn thành và đã được đăng ký.
Tuy nhiên, chúng ta vẫn cần tạo tài nguyên cho Máy Khai Thác Tài Nguyên GEO, đây là điều chúng ta sẽ làm tiếp theo.

## 3. Tạo một tài nguyên GEO (GEOResource) {#3-creating-a-georesource}

Chúng ta cần tạo một lớp mới để triển khai.
Tạo một lớp/tệp mới, đặt cho nó một cái tên có ý nghĩa, chúng ta sẽ gọi nó là **EnderOreResource**.

```java
public class EnderOreResource {

}
```

Sau đó, chúng ta cần triển khai hành vi của tài nguyên GEO, Máy Khai Thác Tài Nguyên GEO sử dụng một giao diện tên là `GEOResource` để thực hiện điều này.
Chỉ cần triển khai giao diện đó vào lớp của bạn và nhớ import giao diện đó.

```java
public class EnderOreResource implements GEOResource {

}
```

IDE của bạn có thể bắt đầu cảnh báo bạn thiếu phương thức.
Bất cứ khi nào bạn triển khai một giao diện, bạn đều phải triển khai các phương thức của nó. Bạn có thể xem tất cả các phương thức từ `GEOResource` trong [Javadocs](https://slimefun.github.io/javadocs/Slimefun4/docs/io/github/thebusybiscuit/slimefun4/api/geo/GEOResource.html) của chúng tôi.
Chúng ta sẽ bắt đầu từ những thứ đơn giản. Phương thức đầu tiên chúng ta cần triển khai là `getName()`, phương thức này sẽ trả về tên tài nguyên của chúng ta. Đây là tên tài nguyên được nhìn thấy sau khi [tiến hành quét GPS].

```java
public class EnderOreResource implements GEOResource {

  @Override
  public String getName() {
    return "Quặng End";
  }

}
```

Tiếp theo, chúng ta cần triển khai phương thức `isObtainableFromGEOMiner()`, phương thức này dùng để xác định liệu tài nguyên này có nên được thêm vào Máy Khai Thác Tài Nguyên GEO hay không.
Đối với chúng ta, câu trả lời là có, vì vậy chúng ta trả về `true`.

```java
public class EnderOreResource implements GEOResource {

  @Override
  public String getName() {
    return "Quặng End";
  }
  
  @Override
  public boolean isObtainableFromGEOMiner() {
    return true;
  }

}
```

Bây giờ chúng ta đến phần thiết lập bộ tạo. Chúng ta có hai phương thức để xử lý việc này: `getDefaultSupply(...)` dùng để xác định số lượng mặc định cho môi trường và quần xã sinh vật nhất định.
Chúng ta còn có một phương thức `getMaxDeviation()`, dùng để xác định độ lệch tối đa cho phép của tài nguyên này so với số lượng mặc định.

Để cho bạn một ví dụ chính xác về độ lệch là gì: nếu số lượng mặc định của quặng End trong chunk ở End là 20 và độ lệch tối đa của chúng ta được đặt là 2, thì
thực tế, số lượng trong một chunk sẽ dao động từ 20 đến 22 quặng End. Nếu độ lệch được đặt là 4, thì nó sẽ dao động từ 20 đến 24 quặng End. Hãy tưởng tượng nó như số lượng tối đa của vật phẩm thưởng.

:::warning Lưu ý

Độ lệch phải là số nguyên dương, nếu không tài nguyên GEO này không thể được đăng ký.

:::

```java
public class EnderOreResource implements GEOResource {

  @Override
  public String getName() {
    return "Quặng End";
  }
  
  @Override
  public boolean isObtainableFromGEOMiner() {
    return true;
  }
  
  @Override
  public int getDefaultSupply(Environment environment, Biome biome) {
    // Môi trường (Environment) tức là loại thế giới: thế giới chính NORMAL / Địa Ngục NETHER / End THE_END)
    
    if (environment == Environment.THE_END) {
      return 20;
    } else {
      return 0;
    }
  }
  
  @Override
  public int getMaxDeviation() {
    return 8;
  }

}
```

Bây giờ, quặng End của chúng ta sẽ tạo ra 20 đến 28 quặng trong mỗi chunk ở End, và sẽ không tạo ra ở các thế giới khác.
Bây giờ chúng ta chỉ cần triển khai các phương thức `getKey()` và `getItem()`. Để làm điều này, chúng ta cần một `NamespacedKey`, nó cần instance plugin của chúng ta.
Chúng ta cũng cần `ItemStack` mà chúng ta đã định nghĩa trước đó.

Để tiện lợi, hãy tạo một hàm khởi tạo.
Hàm khởi tạo là một phương thức đặc biệt, được gọi khi một instance mới của lớp này được tạo. Bạn có thể sử dụng nó để kiểm soát những tham số nào cần thiết khi thực thi `new SomeClass(...)`.
Hãy tạo một hàm khởi tạo mới ở đầu lớp:

```java
public class EnderOreResource implements GEOResource {

  public EnderOreResource() {
    
  }

  // ... các phương thức khác ở sau
```

Bây giờ, chúng ta có thể cho hàm khởi tạo một số tham số, hãy nhớ chúng ta cần instance plugin và `ItemStack` của mình.
Vì vậy chúng ta chỉ cần tạo hai tham số, một kiểu `Plugin` và một kiểu `ItemStack`.

```java
public class EnderOreResource implements GEOResource {

  public EnderOreResource(Plugin plugin, ItemStack item) {
    
  }

  // ... các phương thức khác ở sau
```

Bây giờ, chúng ta chỉ cần lưu trữ instance plugin và `ItemStack` của mình trong *biến thành viên* của lớp, điều này có nghĩa là bất kỳ nội dung nào trong lớp đều có thể truy cập biến này.
Chúng ta sẽ sử dụng từ khóa `final`, có nghĩa là đây thực chất là một hằng số, không thể bị sửa đổi sau khi được tạo. Chúng ta có thể thiết lập hằng số này ở đầu lớp, hoặc khởi tạo nó trong hàm khởi tạo.
Bạn chỉ cần nhớ, bạn không thể gán lại một biến `final` sau khi khởi tạo.

```java
public class EnderOreResource implements GEOResource {

  private final NamespacedKey key;

  public EnderOreResource(Plugin plugin, ItemStack item) {
    this.key = new NamespacedKey(plugin, "ender_ore");
  }

  // ... các phương thức khác ở sau
```

Chúng ta cũng cần lưu trữ vật phẩm như một biến hằng số.

```java
public class EnderOreResource implements GEOResource {

  private final NamespacedKey key;
  private final ItemStack item;

  public EnderOreResource(Plugin plugin, ItemStack item) {
    this.key = new NamespacedKey(plugin, "ender_ore");
    this.item = item;
  }

  // ... các phương thức khác ở sau
```

Bây giờ, có thể triển khai hai phương thức còn lại.

```java
public class EnderOreResource implements GEOResource {

  private final NamespacedKey key;
  private final ItemStack item;

  public EnderOreResource(Plugin plugin, ItemStack item) {
    this.key = new NamespacedKey(plugin, "ender_ore");
    this.item = item;
  }
  
  @Override
  public NamespacedKey getKey() {
    return key;
  }
  
  @Override
  public ItemStack getItem() {
    // Lưu ý: cần thêm phương thức .clone() tại đây,
    // chúng ta không muốn trả về vật phẩm gốc.
    return item.clone();
  }

  // ... các phương thức khác ở sau
```

## 4. Đăng ký cuối cùng {#4-final-registration}

Bây giờ, chúng ta đã tạo một `SlimefunItem` mới và một `GEOResource` mới. Chúng ta chỉ cần đăng ký tài nguyên GEO. Quay lại lớp chính, vào phương thức `onEnable()`.

```java
// ...
SlimefunItemStack enderOreItem = new SlimefunItemStack("ENDER_ORE", "eyJ0ZXh...", "&5Quặng End", "", "&rĐây là một loại quặng rất ngầu", "&rThu được trong End thông qua Máy Khai Thác Tài Nguyên GEO");
SlimefunItem enderOre = new SlimefunItem(itemGroup, enderOreItem, RecipeType.GEO_MINER, new ItemStack[9]);
enderOre.register();
```

Chúng ta cần tạo một instance mới của lớp `EnderOreResource` và đăng ký nó.

```java
// ...
SlimefunItemStack enderOreItem = new SlimefunItemStack("ENDER_ORE", "eyJ0ZXh...", "&5Quặng End", "", "&rĐây là một loại quặng rất ngầu", "&rThu được trong End thông qua Máy Khai Thác Tài Nguyên GEO");
SlimefunItem enderOre = new SlimefunItem(itemGroup, enderOreItem, RecipeType.GEO_MINER, new ItemStack[9]);
enderOre.register();

EnderOreResource enderOreResource = new EnderOreResource(this, enderOreItem);
enderOreResource.register();
```

Hàm khởi tạo mà chúng ta đã tạo trước đó trong lớp `EnderOreResource` cần hai tham số, `this` truyền vào là instance plugin, `ItemStack` là `SlimefunItemStack` của chúng ta.
Bây giờ, chúng ta đã hoàn thành! Tài nguyên của chúng ta bây giờ có thể tạo ra bình thường và có thể được khai thác trong End thông qua Máy Khai Thác Tài Nguyên GEO.
Đây là lớp `EnderOreResource` hoàn chỉnh:

```java
public class EnderOreResource implements GEOResource {

  private final NamespacedKey key;
  private final ItemStack item;

  public EnderOreResource(Plugin plugin, ItemStack item) {
    this.key = new NamespacedKey(plugin, "ender_ore");
    this.item = item;
  }
  
  @Override
  public NamespacedKey getKey() {
    return key;
  }
  
  @Override
  public ItemStack getItem() {
    // Lưu ý: cần thêm phương thức .clone() tại đây,
    // chúng ta không muốn trả về vật phẩm gốc.
    return item.clone();
  }

  @Override
  public String getName() {
    return "Quặng End";
  }
  
  @Override
  public boolean isObtainableFromGEOMiner() {
    return true;
  }
  
  @Override
  public int getDefaultSupply(Environment environment, Biome biome) {
    // Môi trường (Environment) tức là loại thế giới: thế giới chính NORMAL / Địa Ngục NETHER / End THE_END)
    
    if (environment == Environment.THE_END) {
      return 20;
    }
    else {
      return 0;
    }
  }
  
  @Override
  public int getMaxDeviation() {
    return 8;
  }

}
```

Nếu bạn có bất kỳ câu hỏi nào, có thể hỏi bất cứ lúc nào trong kênh `#programming-help` trên máy chủ Discord.
