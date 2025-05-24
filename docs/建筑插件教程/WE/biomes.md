---
sidebar_position: 6
---
# 群系

### 生物群系列表

了解有关生物群系的更多信息，请查看[此处](https://minecraft.gamepedia.com/Biome)。

获取 Bukkit 中所有可用生物群系的列表。

### 用法

`//biomelist [-p <page>]`

### 权限

`worldedit.biome.list`

### 示例

<figure>
<img src="https://fastly.statically.io/gh/Lala-0x3f/picx-images-hosting@master/20231117/mvdiNnQ.6smmxwrm9oo0.png" />
</figure>

## 生物群系信息

显示当前的生物群系。

- 默认情况下，您将获得您区域选择中所有生物群系的列表（图片1）。

- 如果指定了 `-p` 标志，该命令将显示您当前所在区块的生物群系（图片2）。

- 如果指定了 `-t` 标志，将显示您[crosshair](https://minecraft.gamepedia.com/File:HUD_example.png)中目标方块的生物群系（图片3）。

在1.16版本之前，生物群系与Y轴无关。从1.16版本开始，生物群系现在在4x4x4的区块中定义。关于新格式的更多（相当技术性的）信息可以在[这里](https://wiki.vg/Protocol#Chunk_Data)找到。

### 用法

`//biomeinfo [-p] [-t]`

### 权限

`worldedit.biome.info`

### 示例

1. ![biomeinfo.png](https://fastly.statically.io/gh/Lala-0x3f/picx-images-hosting@master/20231117/R5G8XP9.2y57hbula940.png)

2. ![biomeinfo-p.png](https://fastly.statically.io/gh/Lala-0x3f/picx-images-hosting@master/20231117/I2hD28o.jwms8r3jg8.png)

3. ![biomeinfo-t.png](https://fastly.statically.io/gh/Lala-0x3f/picx-images-hosting@master/20231117/PxB1JOG.6vsusr775nk0.png)

## 设置生物群系

设置区域选择的生物群系。

- 默认情况下，该命令将更改您选择中的生物群系（图片1）。

- 使用 `-p` 以忽略选择并更改您当前位置的生物群系（图片2）。

在1.16版本之前，生物群系与Y轴无关。从1.16版本开始，生物群系现在在4x4x4的区块中定义。关于新格式的更多（相当技术性的）信息可以在[这里](https://wiki.vg/Protocol#Chunk_Data)找到。

### 用法

`//setbiome <biome> [-p]`

### 权限

`worldedit.biome.set`

### 示例

1. ![setbiome.png](https://fastly.statically.io/gh/Lala-0x3f/picx-images-hosting@master/20231116/ut2Im7O.173t51jee00w.jpg)

2. ![setbiome-p.png](https://fastly.statically.io/gh/Lala-0x3f/picx-images-hosting@master/20231116/MxdpUFK.1dfuoanox1uo.jpg)