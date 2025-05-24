---
sidebar_position: 13
---
# 笔刷

## 简介

FAWE 提供了笔刷工具，允许你从远处进行建筑和绘画。当你启用一个笔刷时，它会绑定到你当前手持的物品上。你可以将不同的工具绑定到不同的物品上，并且最多可以将两个笔刷绑定到单个物品上。

## 装备笔刷

* 绑定到任意点击：
  `/br <brush>`
* 装备到右击：
  `/br primary <brush>`
* 装备到左击：
  `/br secondary <brush>`

### 更改笔刷设置

* [`/mat <pattern>`](patterns) - 模式决定放置什么
* [`/mask <mask>`](mask1) - 目标蒙版决定是否更改方块
* [`/smask <mask>`](mask1) - 源蒙版更改方块是否可以放置
* [`/targetmask <mask>`](mask1) - 笔刷的目标方块。默认蒙版是 `!air`
* [`/transform <transform>`](transforms) - 变换改变方块放置的位置
* `/range <range>` - 笔刷使用的距离
* `/size <size>` - 笔刷的大小（例如，半径 10 的球体）
* `/none` - 解除工具绑定 +
使用 `-h` 标志可以更改副手笔刷的设置。

### 更改笔刷目标

你可以更改目标模式以辅助在不同区域进行建筑（空气、墙壁、地面等）。更改 `//brush range` 也可能会有用。 
`/br target <0-3>`

* 0 = 目标方块
* 1 = 直接前方的目标点，距离取决于俯仰
* 2 = 目标点，距离取决于离地面的高度
* 3 = 目标方块表面

### 添加笔刷操作

使用鼠标滚轮更改笔刷行为

* `/br scroll clipboard <file|folder|asset url>`
* `/br scroll mask <mask1> <mask2...>`
* `/br scroll pattern <mat1> <mat2...>`
* `/br scroll range`
* `/br scroll size`
* `/br scroll target`

### 重置笔刷

按住蹲下键（`shift`）并点击以重置笔刷。 +
例如，这将清除复制粘贴笔刷的剪贴板，并重置样条笔刷中的点。

### 可视化笔刷（目前未实现）

使用 FAWE，你可以可视化笔刷将如何改变方块：
`/br vis <0-2>`

* 0 = 无可视化
* 1 = 单个点
* 2 = 可视化所有方块更改

![Video](https://www.youtube.com/watch?v=xX-MTSLoNXw)
![image](https://fastly.statically.io/gh/Lala-0x3f/picx-images-hosting@master/20231116/J2g6Qfn.4bs8betogdc0.jpg)

## 笔刷命令：

### 选项

| 指令                          | 权限                               | 描述                                         |
| ----------------------------- | ---------------------------------- | -------------------------------------------- |
| `/target [1 - 4]`             | 无                                 | 在不同的目标模式之间切换                       |
| `/size [pattern]`             | `worldedit.brush.options.size`     | 设置笔刷大小                                   |
| `//listbrush [mine/<filter>] [page=1] [-d] [-n] [-p]` | `worldedit.brush.list` | 列出笔刷目录中的所有笔刷。`-p` 打印请求的页面     |
| `/range [pattern]`            | `worldedit.brush.options.range`    | 设置笔刷范围                                   |
| `/mask [mask]`                | `worldedit.brush.options.mask`     | 设置笔刷目标蒙版                              |
| `/transform [transform]`      | `worldedit.brush.options.transform`| 设置笔刷变换                                  |
| `/mat [pattern]`              | `worldedit.brush.options.material` | 设置笔刷样式                                  |
| `/loadbrush [name]`           | `worldedit.brush.load`             | 加载一个笔刷                                  |
| `/smask [mask]`               | `worldedit.brush.options.mask`     | 设置笔刷源蒙版                               |
| `/visualize [mode=0]`         | `worldedit.brush.visualize`        | 在不同的可视化模式之间切换 0 = 无可视化，1 = 单个方块在目标位置，2 = 显示将要更改的方块的玻璃。 |
| `// [on/off]`                 | `worldedit.superpickaxe`           | 切换超级镐功能                               |
| `/targetmask [mask]`          | `worldedit.brush.targetmask`       | 设置目标蒙版                                |
| `/targetoffset [mask]`        | `worldedit.brush.targetoffset`     | 设置目标蒙版                                |
| `/primary [brush-arguments]`  | `worldedit.brush.primary`          | 设置右键笔刷                                |
| `/none`                       | 无                                 | 从当前物品上解除绑定工具                      |
| `/secondary [brush-arguments]`| `worldedit.brush.secondary`        | 设置左键笔刷                                |
| `/savebrush [name]`           | `worldedit.brush.save`             | 保存当前笔刷，使用 `-g` 标志进行全局保存       |
| `/scroll [none/clipboard/mask/pattern/range/size/visual/target]` | `worldedit.brush.scroll` | 在不同的目标模式之间切换                      |

# 笔刷列表

## 复制与粘贴
- **指令**: `/brush copypaste [depth=5]`  
- **权限**: `worldedit.brush.copy`  
- **描述**: 左键点击对象的基底进行复制，右键进行粘贴。  
  **示例**:  
  - `/brush copypaste`：默认复制并粘贴地形。  
  - `/brush copypaste 10`：复制粘贴时包含深度为10的区域。  

## 运行命令
- **指令**: `/brush command <radius> [cmd1;cmd2...]+`  
- **权限**: `worldedit.brush.command`  
- **描述**: 在点击位置运行命令。  
  **示例**:  
  - `/brush command 5 say Hello World`：在指定半径范围内触发“Hello World”聊天消息。  

## 散布原理图
- **指令**: `/brush populateschematic <mask> <file/folder/url> [radius=30] [points=5] [-r]`  
- **权限**: `worldedit.brush.populateschematic`  
- **描述**: 选择散布原理图刷子。  
  **示例**:  
  - `/brush populateschematic minecraft:stone castle.schematic 50 10`：在半径50内随机放置10个“castle.schematic”。  

## 随机运行命令
- **指令**: `/brush scmd <scatter-radius> <points> <cmd-radius=1> <cmd1;cmd2...>`  
- **权限**: `worldedit.brush.scattercommand`  
- **描述**: 在表面的随机点运行命令。  
  **示例**:  
  - `/brush scmd 10 5 3 fill minecraft:stone`：在半径10内的随机5个点触发3格半径的“填充石头”命令。  

## 创建分隔地形
- **指令**: `/brush shatter <pattern> [radius=10] [count=10]`  
- **权限**: `worldedit.brush.shatter`  
- **描述**: 创建不均匀的线条分隔地形。  
  **示例**:  
  - `/brush shatter minecraft:cobblestone 15 20`：在半径15内分隔生成20条裂缝状地形。  

## 地形侵蚀
- **指令**: `/brush erode [radius=5]`  
- **权限**: `worldedit.brush.erode`  
- **描述**: 侵蚀地形。  
  **示例**:  
  - `/brush erode 10`：侵蚀半径10范围内的地形，削减较大的山坡或突出部位。  

## 创建球体
- **指令**: `/brush sphere <pattern> [radius=2] [-h] [-f]`  
- **权限**: `worldedit.brush.sphere`  
- **描述**: 创建一个球体。  
  **示例**:  
  - `/brush sphere minecraft:glass 5`：创建半径5的玻璃球。  
  - `/brush sphere minecraft:stone 5 -h`：创建一个石头空心球。  

## 拉动地形
- **指令**: `/brush pull [radius=5]`  
- **权限**: `worldedit.brush.pull`  
- **描述**: 将地形拉向你。  
  **示例**:  
  - `/brush pull 8`：将地形向你拉动，影响范围为半径8。  

## 绘制高度图
- **指令**: `/brush stencil <pattern> [radius=5] [file/#clipboard/imgur=null] [rotation=360] [yscale=1.0]`  
- **权限**: `worldedit.brush.stencil`  
- **描述**: 使用高度图在任何表面上绘制。  
  **示例**:  
  - `/brush stencil minecraft:stone 10 heightmap.png`：使用“heightmap.png”将石块绘制到表面上，半径为10。  

## 设置连接方块
- **指令**: `/brush recursive <pattern-to> [radius=5]`  
- **权限**: `worldedit.brush.recursive`  
- **描述**: 设置所有连接的方块。  
  **示例**:  
  - `/brush recursive minecraft:sand`：将相连的所有方块替换成沙子。  

## 创建样条连接
- **指令**: `/brush spline <pattern>`  
- **权限**: `worldedit.brush.spline`  
- **描述**: 单击以选择一些对象，再次单击同一方块以连接对象。  
  **示例**:  
  - `/brush spline minecraft:stone`：用石块创建样条曲线连接点。  

## 扫描曲线
- **指令**: `/brush sweep [copies=-1]`  
- **权限**: `worldedit.brush.sweep`  
- **描述**: 沿着曲线扫描剪贴板内容。  
  **示例**:  
  - `/brush sweep`：沿当前曲线复制剪贴板内容。  

## 创建悬挂线
- **指令**: `/brush catenary <pattern> [lengthFactor=1.2] [size=0]`  
- **权限**: `worldedit.brush.spline`  
- **描述**: 在两点之间创建悬挂线。  
  **示例**:  
  - `/brush catenary minecraft:stone 1.5`：用石块创建1.5倍拉伸比例的悬挂线。  

## 画直线
- **指令**: `/brush line <pattern> [radius=0] [-h] [-s] [-f]`  
- **权限**: `worldedit.brush.line`  
- **描述**: 创建直线。  
  **示例**:  
  - `/brush line minecraft:stone`：用指定方块绘制直线。  

## 表面样条
- **指令**: `/brush sspl <pattern> [size=0] [tension=0] [bias=0] [continuity=0] [quality=10]`  
- **权限**: `worldedit.brush.surfacespline`  
- **描述**: 在表面上创建样条。  
  **示例**:  
  - `/brush sspl minecraft:glass`：用玻璃在表面生成样条。  

## 平滑混合
- **指令**: `/brush blendball [-a] [radius=5] [minFreqDiff=1] [-m]`  
- **权限**: `worldedit.brush.blendball`  
- **描述**: 平滑和混合地形。  
  **示例**:  
  - `/brush blendball 8`：平滑半径为8的地形，减少不规则角。  

## 绘制圆
- **指令**: `/brush circle <pattern> [radius=5]`  
- **权限**: `worldedit.brush.sphere`  
- **描述**: 创建围绕你面朝方向的圆。  
  **示例**:  
  - `/brush circle minecraft:gold_block 10`：创建一个半径10的金圆。  


## 创建畸变球体
- **指令**: `/brush rock <pattern> [radius=10] [roundness=100] [frequency=30] [amplitude=50] [-h]`  
- **权限**: `worldedit.brush.rock`  
- **描述**: 创建畸变的球体。  

## 地形高度调整
- **指令**: `/brush height [-lrs] [radius] [yscale] [image] [rotation]`  
- **权限**: `worldedit.brush.height`  
- **描述**: 提高和降低土地。  

## 平整地形
- **指令**: `/brush flatten [radius=5] [file/#clipboard/imgur=null] [rotation=0] [yscale=1.00] [-h]`  
- **权限**: `worldedit.brush.height`  
- **描述**: 平整地形。  

## 应用地形层
- **指令**: `/brush layer <radius> <patternLayer>`  
- **权限**: `worldedit.brush.layer`  
- **描述**: 使用一层替换地形。  

## 创建圆柱
- **指令**: `/brush cylinder <pattern> [radius=2] [height=1] [-h]`  
- **权限**: `worldedit.brush.cylinder`  
- **描述**: 创建一个圆柱体。  

## 高度图绘制
- **指令**: `/brush surface <pattern> [radius=5]`  
- **权限**: `worldedit.brush.surface`  
- **描述**: 使用高度图在任何表面上绘制。  

## 快捷灭火
- **指令**: `/brush ex [radius=5]`  
- **权限**: `worldedit.brush.ex`  
- **描述**: 快捷的灭火刷子。  

## 模拟重力
- **指令**: `/brush gravity [radius=5] [-h]`  
- **权限**: `worldedit.brush.gravity`  
- **描述**: 模拟重力的刷子。  

## 剪贴板刷子
- **指令**: `/brush clipboard [-a] [-o] [-e] [-b] [-m]`  
- **权限**: `worldedit.brush.clipboard`  
- **描述**: 选择剪贴板刷子。  

## 范围清除生物
- **指令**: `/brush butcher [radius=5] [-p] [-l] [-a] [-n] [-g] [-b] [-t] [-f] [-r]`  
- **权限**: `worldedit.brush.butcher`  
- **描述**: 在指定的半径内杀死附近的生物。  

## 表面随机放置
- **指令**: `/brush splatter <pattern> [radius=5] [seeds=1] [recursion=5] [solid=true]`  
- **权限**: `worldedit.brush.splatter`  
- **描述**: 在表面上随机放置一堆方块。  

## 创建悬崖
- **指令**: `/brush cliff [radius=5] [file/#clipboard/imgur=null] [rotation=0] [yscale=1.00] [-h]`  
- **权限**: `worldedit.brush.height`  
- **描述**: 平整地形并创建悬崖。  

## 地形软化
- **指令**: `/brush smooth [size=2] [iterations=4] [-n]`  
- **权限**: `worldedit.brush.smooth`  
- **描述**: 选择地形软化刷子。  

## 表面散布
- **指令**: `/brush scatter <pattern> [radius=5] [points=5] [distance=1] [-o]`  
- **权限**: `worldedit.brush.scatter`  
- **描述**: 在表面上每隔一定距离设置一些方块。  

## Blob 笔刷
- **指令**: `/brush blob <pattern> [radius=5] [frequency] [amplitude] [sphericity]`
- **权限**: `worldedit.brush.blob`  
- **描述**: 创造岩石，碎石或者噪声
  -  `frequency`: 控制噪声的频率
  -  `amplitude`: 控制噪声的幅度
  -  `sphericity`: 控制圆滑程度
- **示例**:  
  - `/brush blob white_stained_glass 17 1 1000 60`：刷出一条一条的白色玻璃，效果类似云