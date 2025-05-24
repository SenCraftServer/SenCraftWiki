---
sidebar_position: 10
---
# 环境处理
## Drain

此命令从球形区域中移除水（图片 1）。

-   您必须选择一个包含水的位置才能执行此命令。此命令将从以您当前位置为中心的球体中排水，球体的半径由 `radius` 定义。

-   请注意，该命令仅删除一个资源中的水：如果在半径内有另一个水池，它将被忽略（图片 2）。

-   使用参数 `-w`，您可以将所有方块的水日志[block
    state](https://minecraft.gamepedia.com/Block_states)状态更改为 "false"。例如，木板将变得“干燥”并且不再被水日志（图片 3）。

-   使用参数 `-p`，所有在水中的植物将被移除（图片 4）。

在下面的图片中，选择的中间由黄色方块标记。

### 用法

`//drain <radius> [-w] [-p]`

### 权限

`worldedit.drain`

### 示例

1.  ![drain.png](https://fastly.statically.io/gh/Lala-0x3f/picx-images-hosting@master/20231117/wnjgiXJ.6hnw810ng880.png)

2.  ![drain\_resource.png](https://fastly.statically.io/gh/Lala-0x3f/picx-images-hosting@master/20231117/YTGLAqx.2hzkwwgzj5e0.png)

3.  ![drain-w.png](https://fastly.statically.io/gh/Lala-0x3f/picx-images-hosting@master/20231117/mf5arBW.4bh7b5xxxuo0.png)

4.  ![drain-p.png](https://fastly.statically.io/gh/Lala-0x3f/picx-images-hosting@master/20231117/r1NAWsr.5zat2utiw280.png)

## Fixwater

此命令帮助生成您周围的水景。此外，您还可以修复现有的水景（图片 1）。

-   您必须选择一个包含水的位置才能执行此命令。此命令将从以您当前位置为中心的半球中将空气替换为水，半球的半径由 `radius` 定义（图片 2）。

-   与 `//drain` 类似，此命令仅对相同水池或孔中的方块执行：如果在半径内有另一个水池或孔，它将被忽略（图片 3）。

在下面的图片中，选择的中间由黄色方块标记。

### 用法

`//fixwater <radius>`

### 权限

`worldedit.fixwater`

### 示例

1.  ![fixwater.png](https://fastly.statically.io/gh/Lala-0x3f/picx-images-hosting@master/20231117/eaFTnG0.7lacco92xqw0.png)

2.  ![fixwater-full.png](https://fastly.statically.io/gh/Lala-0x3f/picx-images-hosting@master/20231117/Krav8oA.2zgv495k9vs0.png)
3.  
4.  ![fixwater\_resource.png](https://fastly.statically.io/gh/Lala-0x3f/picx-images-hosting@master/20231117/FBuYNm4.22n3kubkufts.png)

## Fixlava

此命令帮助生成您周围的熔岩景。此外，您还可以修复现有的熔岩景（图片 1）。

-   您必须选择一个包含熔岩的位置才能执行此命令。此命令将从以您当前位置为中心的半球中将空气替换为熔岩，半球的半径由 `radius` 定义（图片 2）。

-   与 `//drain` 类似，此命令仅对相同熔岩池或孔中的方块执行：如果在半径内有另一个熔岩池或孔，它将被忽略（图片 3）。

在下面的图片中，选择的中间由黄色方块标记。

### 用法

`//fixlava <radius>`

### 权限

`worldedit.fixlava`

### 示例

1.  ![fixlava.png](https://fastly.statically.io/gh/Lala-0x3f/picx-images-hosting@master/20231116/wbA3QsB.mej9vkcdteo.jpg)

2.  ![fixlava-full.png](https://fastly.statically.io/gh/Lala-0x3f/picx-images-hosting@master/20231116/0zhsjLL.562x06bjnro0.jpg)

3.  ![fixlava\_resource.png](https://fastly.statically.io/gh/Lala-0x3f/picx-images-hosting@master/20231116/zmaFyy7.1ihf3xpmbu9s.jpg)

## Snow

使用此命令在您周围生成雪景（图片 1）。

-   该命令将在您周围定义的 `radius` 内的圆圈上执行。

-   雪只会在X和Z坐标的最高方块上方生成，因此您的Y坐标不重要，这使得在山区或山区进行易于更改。

-   该命令将仅在自由实体方块上方生成雪。因此，此命令不会移除草植物。

在下面的图片中，选择的中间由黄色方块标记。

### 用法

`//snow [radius]`

### 权限

`worldedit.snow`

### 示例

1.  ![snow.png](https://fastly.statically.io/gh/Lala-0x3f/picx-images-hosting@master/20231116/vsXCLVH.3acnhusgtno0.jpg)

## Thaw

使用此命令融化您周围的雪（图片 1）。

-   该命令将在您周围定义的 `radius` 内的圆圈上执行。

-   雪将仅在X和Z坐标的最高方块上方移除，因此您的Y坐标不重要，这使得在山区或山区进行易于更改。

在下面的图片中，选择的中间由黄色方块标记。

### 用法

`//thaw [radius]`

### 权限

`worldedit.thaw`

### 示例

![thaw.png](https://fastly.statically.io/gh/Lala-0x3f/picx-images-hosting@master/20231116/Z5f3djS.5ak052kd0j40.jpg)