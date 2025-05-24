---
sidebar_position: 7
---
# 挖坑填坑

## Fill

此命令生成一个具有定义的 `radius` 的半圆。

-  此命令的一个示例用例可能是填充世界中的一个洞（图片 1）。

-  只有空气会被定义为 `pattern` 的方块所替换。

-  默认情况下，半圆的 `depth` 为 1 个方块（图片 2）。一旦达到定义的深度，半圆将被“截断”。

-  `depth` 的最大值是半径（图片 3）。

-  默认的 `direction` 是 "down"，但您始终可以使用FAWE提供的其他方向选项（图片 4）。

在下面的图片中，选择的中间由黄色方块标记。

### 用法

`//fill <pattern> <radius> [depth] [direction]`

### 权限

`worldedit.fill`

### 示例

1.  ![fill\_example.png](https://fastly.statically.io/gh/Lala-0x3f/picx-images-hosting@master/20231116/6WItisE.4ykqc4cfdn40.jpg)

2.  ![fill.png](https://fastly.statically.io/gh/Lala-0x3f/picx-images-hosting@master/20231116/6EZs2B2.1ucnkwj5n89s.jpg)

3.  ![fill\_depth.png](https://fastly.statically.io/gh/Lala-0x3f/picx-images-hosting@master/20231116/EwP81Kg.6sm8rh06xmk0.jpg)

4.  ![fill\_direction.png](https://fastly.statically.io/gh/Lala-0x3f/picx-images-hosting@master/20231116/vvEzTvC.6i5ptbiuh740.jpg)

## Removenear

此命令移除您周围（图片 1）定义的 `block` 类型的所有方块。

-  `size` 参数定义了您的位置（中心点）与边界之间的距离。

-  默认情况下，`size` 为 50，因此该命令将在一个 99 x 99 方块的立方体区域中执行。

在下面的图片中，选择的中间由黄色方块标记。

### 用法

`//removenear <block> [size]`

### 权限

`worldedit.removenear`

### 示例

1.  ![removenear.png](https://fastly.statically.io/gh/Lala-0x3f/picx-images-hosting@master/20231116/riMmbhq.4wcduw3gdgo0.jpg)