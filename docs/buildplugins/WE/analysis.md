---
sidebar_position: 5
---
# 分析


显示目标方块的NBT信息，以用户友好的字符串形式（纯文本）呈现，该方块位于你的准星中。

"命名二进制标签"（NBT）是Minecraft中用于以树结构存储数据的格式，由各种标签组成。

有关NBT格式的更多信息，请参见[此处](https://minecraft.gamepedia.com/NBT_format)。

#### 用法

`//nbtinfo`

#### 权限

`worldedit.nbtinfo`

**示例:**

<figure>
<img src="https://fastly.statically.io/gh/Lala-0x3f/picx-images-hosting@master/20231117/dNAu8xR.3njg24zt78y0.png" />
</figure>

### Chunkinfo

使用此命令获取您所在区块的信息。

- 第一行显示您的区块的X和Z坐标。

- 另外两行显示区块文件的名称。

有关区块文件格式的更多信息，请参见[此处](https://minecraft.gamepedia.com/Region_file_format)。

按下kbd:\[F3 + G\]键可查看区块边界。

#### 用法

`//chunkinfo`

#### 权限

`worldedit.chunkinfo`

#### 示例

<figure>
<img src="https://fastly.statically.io/gh/Lala-0x3f/picx-images-hosting@master/20231117/tzRoWmB.7kf884ajit80.png" />
</figure>

#### Distr

此命令获取选择区域中方块的分布情况（图片1），包括百分比分布、数量以及翻译成您的Minecraft客户端语言的该方块的名称。

- 您可以使用 `-c` 标志分析剪贴板中的方块（例如，在执行 `//copy` 命令后）而不是选择区域。

- 使用 `-d` 标志，方块列表将用不同的方块值分隔开（图片2）。

- 将鼠标悬停在方块名称上，您将看到技术名称（例如 "minecraft:oak\_log"）以及使用 `-d` 标志时方块值在方括号中（图片2）。

- 使用可选的 `-p` 标志和一个页面编号，可以在列表之间切换。

#### 用法

主要：

`//distr`

次要：

`//distr [-c] [-d] [-p <page>]`

#### 权限

`worldedit.analysis.distr`

#### 示例

( 1 ) ![distr.png](https://fastly.statically.io/gh/Lala-0x3f/picx-images-hosting@master/20231117/MA3YAnj.6xl5hnsbgw80.png)

( 2 ) ![distr-d.png](https://fastly.statically.io/gh/Lala-0x3f/picx-images-hosting@master/20231117/rd5Dkz4.wm03ywaidi8.png)
#
## Count

使用此命令获取选择区域中特定类型方块的数量。

- 您可以使用方括号指定特定方块值来搜索方块（例如 `rose_bush[half=upper]`）。

#### 用法

`//count <block>`

#### 权限

`worldedit.analysis.count`

#### 示例

<figure>
<img src="https://fastly.statically.io/gh/Lala-0x3f/picx-images-hosting@master/20231117/v5d7qps.6blw8xfh7m00.png" />
</figure>
#
## Size

使用此命令获取有关选择区域的不同测量和其他信息。

- 您可以使用 `-c` 标志分析剪贴板/原理图的方块测量（例如，在执行 `//copy` 命令后）而不是选择区域。

#### 用法

`//size [-c]`

#### 权限

`worldedit.selection.size`

#### 分析选择区域

<figure>
<img src="https://fastly.statically.io/gh/Lala-0x3f/picx-images-hosting@master/20231117/O0HHzyW.yzkghs9dopc.png" />
</figure>

1.  选择类型

2.  类型特定的选择信息

3.  长度、高度和宽度的最大尺寸

4.  方块长度的对角线距离

5.  方块总数（包括空气）

#### 分析剪贴板

<figure>
<img src="https://fastly.statically.io/gh/Lala-0x3f/picx-images-hosting@master/20231117/JffswW6.1sxy237is880.png"
alt="size-d_chatoutput_selection.png" />
</figure>

1.  剪贴板列表编号

2.  长度、高度和宽度的方块尺寸

3.  您的复制位置（对于原理图偏移很重要）

4.  方块总数（包括空气）

#### 分析原理图

<figure>
<img src="https://fastly.statically.io/gh/Lala-0x3f/picx-images-hosting@master/20231117/NqfkzeB.615v0tmptcc0.png"
alt="size-d_chatoutput_schematic.png" />
</figure>

1.  原理图名称

2.  长度、高度和宽度的方块尺寸

3.  原理图偏移（一个角落和您保存位置之间的距离）

4.  方块总数（包括空气）

>请注意，原理图总是呈立方体形状。
