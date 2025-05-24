---
sidebar_position: 11
---
# 传送

## Jumpto

使用此命令，您可以传送到特定位置。

- 您可以使用 `[world,x,y,z]` 选项手动定义位置。否则，如果未定义，则命令将默认传送到您的准星中的目标方块位置。
  
- 为防止卡住，您将传送到垂直方向上下一个实体方块的楼上，高度有两个空气方块，可以停留（图片 1）。

### 用法

`//jumpto [world,x,y,z]`

### 权限

`worldedit.navigation.jumpto.command`

### 示例

1.  ![jumpto-topblock.png](https://fastly.statically.io/gh/Lala-0x3f/picx-images-hosting@master/20231116/mbeJqzP.4o8ft64wsni0.jpg)

## Unstuck

使用此命令，您可以从卡在方块内部中脱身。

- 与 `//jumpto` 类似，您将传送到上方（垂直方向）最近的实体方块，该方块上方还有两个空气方块。

### 用法

`//unstuck` , `/!`

### 权限

`worldedit.navigation.unstuck`

## Thru

使用此命令，您可以穿过您准星中的墙壁方向（图片 1）。

- 对于此命令，您必须站在墙前。最大传送距离为 6 个方块。因此，墙的最大深度可达 5 个方块。

### 用法

`//thru`

### 权限

`worldedit.navigation.thru.command`

### 示例

1.  ![thru.png](https://fastly.statically.io/gh/Lala-0x3f/picx-images-hosting@master/20231116/SLtpfPv.7g0wca98yho0.jpg)

## Ascend

使用此命令，您可以将自己传送到指定的 `层数`（图片 1）。

- 您将传送到垂直方向上下一个实体方块的楼上，高度有两个空气方块，可以停留。

- 楼层之间的距离不相关。

### 用法

`//ascend [层数]`

### 权限

`worldedit.navigation.ascend`

### 示例

1.  ![ascend.png](https://fastly.statically.io/gh/Lala-0x3f/picx-images-hosting@master/20231116/J15EzHi.2jvf7qrczug0.jpg)

## Descend

使用此命令，您可以传送到指定的 `层数` 下（图片 1）。

- 您将传送到垂直方向上下一个实体方块的下方，该方块上方还有两个空气方块。

- 楼层之间的距离不相关。

### 用法

`//descend [层数]`

### 权限

`worldedit.navigation.descend`

### 示例

1.  ![descend.png](https://fastly.statically.io/gh/Lala-0x3f/picx-images-hosting@master/20231116/xB5AD3f.qmyh5e2pr00.jpg)

## Up

使用此命令，您可以传送到上方，距离由您指定（`distance`）。

- 默认情况下，您将站在玻璃方块上，使您保持不动（图片 1）。

### 用法

`//up <distance> [-f] [-g]`

### 权限

`worldedit.navigation.up`

### 示例

1.  ![up.png](https://fastly.statically.io/gh/Lala-0x3f/picx-images-hosting@master/20231116/9cbxPNP.778xdvrs8l00.jpg)

## Ceil

使用此命令，您可以在天花板上方传送。

- 默认情况下，您将站在玻璃方块上，使您保持不动（图片 1）。

- 使用 `clearance` 选项，您可以指定头部和天花板之间的距离。默认距离为 0，因此您的头顶上方不会有任何空间。

### 用法

`//ceil [clearance] [-f] [-g]`

### 权限

`worldedit.navigation.ceiling`

### 示例

1.  ![ceil.png](https://fastly.statically.io/gh/Lala-0x3f/picx-images-hosting@master/20231116/Mk82aBk.4zporaoze7c.jpg)
