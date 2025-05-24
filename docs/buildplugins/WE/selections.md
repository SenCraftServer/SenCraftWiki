---
sidebar_position: 2
---
# 选区

::alert

一些FAWE命令需要选择一个区域才能生效。该命令允许您修改或删除当前的选择。`selection-type`参数用于更改所选区域，无论是扩大选择还是更改其形状。
::

> **用法：** `//sel [selection-type]`

> **别名：** `deselect` , `desel` , `/;`



## 选择类型

### Cuboid

这是最常用的选择类型，也是**默认类型**。立方体选择需要定义两个点。

![sel-cuboid.png](https://mirror.ghproxy.com/https://github.com/Lala-0x3f/picx-images-hosting/raw/master/20231116/vWZJ9Pt.2hnv3dzm4ci0.png)

### Extend

这是立方体选择的高级版本。在定义前两个点之后，可以通过定义更多点来扩展选择。最终选择仍将保持为立方体。

![sel-extend.png](https://mirror.ghproxy.com/https://github.com/Lala-0x3f/picx-images-hosting/raw/master/20231116/dcKxjPZ.57lyhsuryag0.png)

### Poly

使用此类型，您可以获得一个带有自由多边形边框的几何选择。多边形的高度由最高和最低位置的Y坐标确定。可以定义无限数量的点。边框连接所有角落，并按递增的数字排序。

![sel-poly.png](https://fastly.statically.io/gh/Lala-0x3f/picx-images-hosting@master/20231116/iqC3Cf8.2ff4fq09t074.jpg)

### Ellipsoid

在此选择中，您的区域是一个椭球体。`position 1`参数定义中点，`position 2`参数用于更改椭球体的长度、宽度和高度。

![sel-ellipsoid.png](https://fastly.statically.io/gh/Lala-0x3f/picx-images-hosting@master/20231116/ZIt64eK.6ohyfsikfz00.jpg)

### Sphere

此选择产生一个球形区域。`position 1`参数定义中点，`position 2`参数定义半径。

![sel-sphere.png](https://fastly.statically.io/gh/Lala-0x3f/picx-images-hosting@master/20231116/gmpDkxI.kwobk97d81c.jpg)

### Cyl

此选择类型生成圆柱形选择。`position 1`参数定义圆柱的中点，`position 2`参数定义圆柱的半径和深度（高度）。

![sel-cyl.png](https://fastly.statically.io/gh/Lala-0x3f/picx-images-hosting@master/20231116/XXhLMpB.3qaehj8pr1y0.jpg)

### Polyhedron

别名：“凸面体”和“外壳”

使用此选择类型，您可以获得一个自由多边形选择。与`poly`选择不同，高度未确定。

### Fuzzy

魔杖工具

此选择类型选择与所选块相同材质的所有块。因此，如果单击`orange_wool`块，则选择附近所有`orange_wool`块，而不需要一个块的距离。

- 使用左键单击选择第一个块/第一个材质。随后使用右键单击将其添加到选择中。
- 它使用路径查找器检查相邻块（对于每个块单独的顶部、底部和侧面块），因此不需要半径参数。

## 选区命令

### Wand

位置可以通过多种方式定义。其中一种方法是使用工具项，通常是普通的香草`wooden_axe`。使用该物品左键单击块将定义主要位置（称为“pos1”），右键单击将定义次要位置（称为“pos2”）。

FAWE工具项通过`//wand`命令获得。

**用法：** `//wand`

**权限：** `worldedit.wand`

### Pos

定义选择角的另一种方法是使用`//pos`命令。如果未指定参数，则位置将设置为您所在的坐标（图片所示）。或者，您可以使用`coordinates`参数明确定义坐标。该参数遵循此语法：`<X>,<Y>,<Z>`。对于所有三个坐标，可以使用一个值。

**用法：** `//pos1 [coordinates]` 和 `//pos2 [coordinates]`

**别名：** `//1` 和 `//2`

**权限：** `worldedit.selection.pos`

**示例：**

![sel.png](https://fastly.statically.io/gh/Lala-0x3f/picx-images-hosting@master/20231116/03trNF5.ilv83lb5gx4.jpg)

### Hpos

这是定义选择角的第三种方法。这将选择您十字准星中的下一个实体块。

**用法：** `//hpos1` 和 `//hpos2`

**权限：** `worldedit.selection.hpos`

**示例：**

![hpos.png](https://fastly.statically.io/gh/Lala-0x3f/picx-images-hosting@master/20231116/hWOvW4t.586jc5m3qx00.jpg)

### Chunk

此命令将您的选择类型更改为`cuboid`选择类型，并选择给定[区块](https://minecraft.gamepedia.com/Chunk)中的所有块。默认情况下，将选择您当前位于的区块。

或者，可以通过以下方式明确定义目标块：

- 通过传递块的`x`和`z`坐标
- 通过传递有效的[区块坐标](https://minecraft.gamepedia.com/Chunk#Finding_chunk_edges)并使用`-c`标志。

`-s`标志允许您重新选择当前选择的所有块。

**用法：**

主要：

`//chunk`

次要：

- `//chunk <x,z block coordinates>`
- `//chunk <x,z chunk coordinates> -c`
- `//chunk -s`

**权限：** `worldedit.selection.chunk`

### Shift

使用移动命令，您可以移动选择。与`//move`命令不同，您不会移动任何块（见图片）。

- 要定义目标方向，请查看方向或使用`direction`参数。可以在[这里](https://wiki.intellectualsites.comhttps://github.com/IntellectualSites/FastAsyncWorldEdit-Documentation/wiki/Commands-new#direction-argument)找到有效方向参数的列表。
- 使用`amount`参数指定在方向中移动的块数。
- 负`amount`将反转您的移动方向。

**用法：**

主要：

`//shift <amount>`

次要：

`//shift <amount> <direction>`

**示例：**

![shift.png](https://fastly.statically.io/gh/Lala-0x3f/picx-images-hosting@master/20231116/3ZvSx8F.5cvi1ss9p2g0.jpg)

### Inset

使用此命令，您可以通过所有侧

面以相同数量减小选择（见图片）。

或者，可以通过以下方式明确定义减少：

- 水平线的`amount`以及`-h`标志
- 垂直线的`amount`以及`-v`标志

**用法：**

主要：

`//inset <amount>`

次要：

- `//inset <amount> -h`
- `//inset <amount> -v`

**示例：**

![inset.png](https://fastly.statically.io/gh/Lala-0x3f/picx-images-hosting@master/20231116/sw0uQdo.6dhqjrpujpc0.jpg)

### Outset

使用此命令，您可以通过所有侧面以相同数量增加选择（见图片）。

或者，可以通过以下方式明确定义增加：

- 水平线的`amount`以及`-h`标志
- 垂直线的`amount`以及`-v`标志

**用法：**

主要：

`//outset <amount>`

次要：

- `//outset <amount> -h`
- `//outset <amount> -v`

**示例：**

![outset.png](https://fastly.statically.io/gh/Lala-0x3f/picx-images-hosting@master/20231116/tC0LhXY.4thhn4dba1s0.jpg)

### Contract

与`inset`命令相似，您可以减小选择 - 但在这里是为了指定方向。因此，减小仅针对一个或两个侧面执行（见图片）。

- 要定义目标方向，请查看方向或使用`direction`参数。可以在[这里](https://wiki.intellectualsites.comhttps://github.com/IntellectualSites/FastAsyncWorldEdit-Documentation/wiki/Commands-new#direction-argument)找到有效方向参数的列表。
- 使用`amount`参数指定要减少的块数。
- 第二个`reverse-amount`将减小反向侧的选择。

**用法：**

主要：

`//contract <amount>`

次要：

- `//contract <amount> <direction>`
- `//contract <amount> <reverse-amount>`
- `//contract <amount> <reverse-amount> <direction>`

**示例：**

![contract.png](https://fastly.statically.io/gh/Lala-0x3f/picx-images-hosting@master/20231116/ZEB4ocp.41fg2exkeee0.jpg)

### Expand

与`outset`命令相似，您可以增加选择 - 但在这里是为了指定方向。因此，增加仅在一个或两个侧面执行（见图片）。

- 要定义目标方向，请查看方向或使用`direction`参数。可以在[这里](https://wiki.intellectualsites.comhttps://github.com/IntellectualSites/FastAsyncWorldEdit-Documentation/wiki/Commands-new#direction-argument)找到有效方向参数的列表。
- 使用`amount`参数指定要增加的块数。
- 第二个`reverse-amount`将减小反向侧的选择。
- 使用`expand`命令的最短规范，选择将增加到垂直线中的所有块（级别0 - 256）。

**用法：**

主要：

`//expand <amount>`

次要：

- `//expand <amount> <direction>`
- `//expand <amount> <reverse-amount>`
- `//expand <amount> <reverse-amount> <direction>`
- `//expand vert`

**示例：**

![expand.png](https://fastly.statically.io/gh/Lala-0x3f/picx-images-hosting@master/20231116/baDkdlZ.3z0lmyva2500.jpg)