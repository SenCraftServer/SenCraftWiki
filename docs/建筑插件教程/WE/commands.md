---
sidebar_position: 3
---
# 命令

总览
要想在游戏中查看这些命令的话，请使用 //help [类型|命令] ## 命令的用法
- `<arg>` - 一个必需参数
- `[arg]` - 一个可选参数
- `<arg1|arg2>` - 在这些选项中选择
- `<arg=value>` - 缺省值
- `-a` - 一条命令的标记，如 `//<command> -a` [命令的标记的值]

## 特殊命令

- `//cancel` - 取消你当前正在进行的任务
- `//confirm` - 确认操作（但操作范围较大时）
- `//calc` - 求数学表达式的值


## 简介

要在游戏中查看此信息，请使用 `//help [category|command]`

## 命令语法

* `<arg>` - 必需参数
* `[arg]` - 可选参数
* `<arg1|arg2>` - 多个参数选项
* `<arg=value>` - 默认或建议值
* `-a` - 命令标志，例如 `//<command> -a [flag-value]`

另请参阅：

* [群系](biomes)
* [笔刷](brushes)
* [周围方块](geometry)
* [自然环境](nature)
* [传送](navigation)
* [选区](selections)
* [蒙版](mask1.md)
* [样式](patterns)
* [变换](transforms)

---

## 命令列表

### 效用命令

多种实用命令

| 指令                                     | 权限                     | 描述                                                     |
| ---------------------------------------- | ------------------------ | -------------------------------------------------------- |
| `/remove <type> <radius>`                | `worldedit.remove`       | 移除指定类型的所有实体                                     |
| `//fill <pattern> <radius> [depth] [direction]` | `worldedit.fill`         | 填充一个空洞                                               |
| `//help [<command>]`                     |                          | 显示WorldEdit命令的帮助信息                                |
| `//drain <radius>`                       | `worldedit.drain`        | 排空一个水池                                               |
| `/transforms [page=1/search/transform]`  | `worldedit.transforms`   | 转换修改方块放置方式，使用方括号表示参数，逗号表示OR，与号表示AND |
| `//removenear <block> [size]`            | `worldedit.removenear`   | 移除附近的方块                                           |
| `//fixlava <radius>`                     | `worldedit.fixlava`      | 修复熔岩成为静止状态                                       |
| `//removeabove [size] [height]`          | `worldedit.removeabove`  | 移除头顶上的方块                                         |
| `/masks [page=1/search/mask]`            | `worldedit.masks`        | 掩模确定方块是否可以放置，使用方括号表示参数，逗号表示OR，与号表示AND |
| `//fillr <pattern> <radius> [depth]`     | `worldedit.fill.recursive`| 递归地填充一个空洞                                       |
| `/patterns [page=1/search/pattern]`      | `worldedit.patterns`     | 模式确定放置哪些方块，使用方括号表示参数，逗号表示OR       |
| `//replacenear <size> <from-id> <to-id> [-f]` | `worldedit.replacenear` | 替换附近的方块                                           |
| `//snow [radius]`                        | `worldedit.snow`         | 模拟雪                                                   |
| `//thaw [radius]`                        | `worldedit.thaw`         | 解冻区域                                                 |
| `//removebelow [size] [height]`          | `worldedit.removebelow`  | 移除脚下的方块                                           |
| `//fixwater <radius>`                    | `worldedit.fixwater`     | 修复水成为静止状态                                       |
| `/butcher [radius] [-p] [-l] [-a] [-n] [-g] [-b] [-t] [-f] [-r]` | `worldedit.butcher` | 根据半径移除附近的生物，如果没有给出半径，则使用配置中的默认值。标志：`-p` 移除宠物，`-n` 移除NPC，`-g` 移除铁傀儡，`-a` 移除动物，`-b` 移除环境生物，`-t` 移除有名字标签的生物，`-f` 合并所有先前的标志，`-r` 销毁盔甲架，`-l` 当前无效。 |
| `//confirm`                              | `fawe.confirm`           | 确认一个命令                                               |
| `//green [radius] [-f]`                  | `worldedit.green`        | 绿化区域                                                 |
| `//calc <expression>`                    | `worldedit.calc`         | 计算数学表达式                                             |
| `//ex [radius]`                          | `worldedit.extinguish`   | 扑灭附近的火                                               |
| `/heightmapinterface`                    | `fawe.admin`             | 生成高度图界面                                             |

### 区域指令

对一个区域进行更改

| 指令                                       | 权限                         | 描述                                                         |
| ------------------------------------------ | ---------------------------- | ------------------------------------------------------------ |
| `//replace [from-mask] <to-pattern> [-f]`   | `worldedit.region.replace`   | 用另一种方块替换选择区域内的所有方块                              |
| `//stack [count] [direction] [-s] [-a] [-m]` | `worldedit.region.stack`     | 重复选择区域的内容。标志：-s将选择移到最后一个复制的位置，-a跳过空气方块 |
| `//set [pattern]`                           | `worldedit.region.set`       | 设置选择区域内的所有方块                                     |
| `//fall [replace] [-m]`                     | `worldedit.region.fall`      | 使选择区域内的方块下落。-m标志仅在垂直选择内下落                |
| `//faces <pattern>`                         | `worldedit.region.faces`     | 构建选择区域的墙壁、天花板和地板                                |
| `//hollow [<thickness>[ <pattern>]]`       | `worldedit.region.hollow`    | 将选择区域中的对象挖空。可选地用给定的方块填充空洞部分。厚度以曼哈顿距离表示 |
| `//center <pattern>`                        | `worldedit.region.center`    | 设置中心方块                                                 |
| `//setskylight`                            | `worldedit.light.set`        | 在选择区域内设置天空照明                                     |
| `//nbtinfo`                                | `worldedit.nbtinfo`          | 查看方块的NBT信息                                            |
| `//setblocklight`                          | `worldedit.light.set`        | 在选择区域内设置方块照明                                     |
| `//curve <pattern> [thickness] [-h]`       | `worldedit.region.curve`     | 在选定点之间绘制样条曲线。只能与凸多面体选择一起使用。标志：-h仅生成外壳 |
| `//overlay <pattern>`                       | `worldedit.region.overlay`   | 在区域内的方块上设置一个方块                                   |
| `//lay <pattern>`                           | `worldedit.region.overlay`   | 在区域的顶部设置方块                                          |
| `//naturalize`                             | `worldedit.region.naturalize` | 顶部有三层土，下面是岩石                                     |
| `//walls <pattern>`                         | `worldedit.region.walls`     | 构建选择区域的四面                                          |
| `//getlighting`                            | `worldedit.light.fix`        | 获取位置的光照                                               |
| `//removelight`                            | `worldedit.light.remove`     | 移除选择区域内的照明                                         |
| `//fixlighting`                            | `worldedit.light.fix`        | 获取位置的光照                                               |
| `//smooth [iterations] [mask]`             | `worldedit.region.smooth`    | 平滑选择区域中的高度。标志：-l设置雪下方的雪块数量，-m用作高度图的方块的掩模 |
| `//line <pattern> [thickness] [-h]`        | `worldedit.region.line`      | 在立方体选择的角之间绘制线段。只能与立方体选择一起使用。标志：-h仅生成外壳 |
| `//regen [biome] [seed]`                   | `worldedit.regen`            | 重新生成当前选择区域的内容。如果它们在同一块中，则此命令可能会影响选择区域之外的事物 |
| `//wea`                                   | `fawe.admin`                 | 绕过区域限制                                                 |
| `//move [count] [direction] [leave-id] [-s]` | `worldedit.region.move`    | 移动选择区域的内容。`-s`标志将选择移到目标位置。`-b`还复制生物群系，`-e`忽略实体，`-a`忽略空气。还可以选择用指定方块填充旧位置 |
| `//forest [type] [density]`                | `worldedit.region.forest`    | 在区域内创建一个森林                                         |
| `//deform <expression> [-r] [-o]`          | `worldedit.region.deform`    | 用表达式变形选定的区域。对于每个方块，表达式将被执行，并期望修改x、y和z变量，指向一个新方块。详细信息请参见 [Expression Syntax](https://worldedit.enginehub.org/en/latest/usage/other/expressions/) |
| `//flora [density]`                        | `worldedit.region.flora`     | 在区域内生成植被                                             |
| `//wer`                                   | `fawe.worldeditregion`       | 选择当前允许的区域                                           |

### 选取指令

更改选取点、模式或查看选择信息。

| 指令                                  | 权限                           | 描述                                                                  |
| ------------------------------------- | ------------------------------ | --------------------------------------------------------------------- |
| `//count <block> [-d]`                | `worldedit.analysis.count`     | 计算特定类型方块的数量                                                 |
| `//size [-c]`                         | `worldedit.selection.size`      | 获取有关选择区域的信息                                                 |
| `//expand <amount> [reverse-amount] <direction>` | `worldedit.selection.expand` | 扩展选择区域                                                          |
| `//shift <amount> [direction]`         | `worldedit.selection.shift`      | 移动选择区域                                                          |
| `//sel [cuboid/extend/poly/ellipsoid/sphere/cyl/convex] [-d]` |                          | [**选择区域类型**](selections#选区)。支持的类型有：`cuboid`、`extend`、`poly`、`ellipsoid`、`sphere`、`cyl`、`convex `|
| `//contract <amount> [reverse-amount] [direction]` | `worldedit.selection.contract` | 收缩选择区域                                                         |
| `//pos2 [coordinates]`                | `worldedit.selection.pos`       | 设置**位置2**                                                             |
| `//pos1 [coordinates]`                | `worldedit.selection.pos`       | 设置**位置1**                                                             |
| `//chunk [x,z coordinates] [-s] [-c]` | `worldedit.selection.chunk`     | 将选择设置为当前所在的区块。使用 `-s` 标志，你的当前选择会扩展到包含所有的区块。指定坐标将使用它们而不是你的当前位置。使用 `-c` 指定区块坐标，否则将暗示完整坐标。例如，坐标 `5,5` 与 `-c 0,0` 相同。 |
| `//hpos1`                             | `worldedit.selection.hpos`      | 将**位置1**设置为目标方块                                                |
| `//outset <amount> [-h] [-v]`          | `worldedit.selection.outset`    | 在所有方向上扩展选择给定的量。标志：`-h`仅在水平方向扩展，`-v`仅在垂直方向扩展     |
| `//wand`                              | `worldedit.wand`                | 获取魔杖对象                                                          |
| `/toggleeditwand`                     | `worldedit.wand.toggle`         | 切换编辑魔杖功能                                                     |
| `//hpos2`                             | `worldedit.selection.hpos`      | 将**位置2**设置为目标方块                                                |
| `//inset <amount> [-h] [-v]`           | `worldedit.selection.inset`     | 在所有方向上收缩选择给定的量。标志：`-h`仅在水平方向收缩，`-v`仅在垂直方向收缩     |
| `//distr [-c] [-d]`                   | `worldedit.analysis.distr`      | 获取选择区域中方块的分布。`-c`标志获取剪贴板的分布。`-d`标志按数据分隔方块       |

### 历史指令

关于撤销，重做和历史记录

| 指令                             | 权限                             | 描述                                      |
| -------------------------------- | -------------------------------- | ----------------------------------------- |
| `//clearhistory`                 | `worldedit.history.clear`        | 清除你的历史记录                            |
| `//undo [times] [player]`        | `worldedit.history.undo`         | 撤销上一步操作                             |
| `//redo [times] [player]`        | `worldedit.history.redo`         | 重做上一步操作（来自历史记录）            |
| `//inspect`                      | `worldedit.tool.inspect`         | 扫描方块以查看更改                        |
| `//frb history \<user=Empire92> \<radius=5> \<time=3d4h>` | `worldedit.history.rollback` | 撤销特定编辑。 - 时间使用`s`、`m`、`h`、`d`、`y`。 - 从磁盘导入：`/frb #import` |

### 剪贴板命令

和复制粘贴，操作剪贴板内容有关

| 指令                                      | 权限                         | 描述                                                               |
| ----------------------------------------- | ---------------------------- | ------------------------------------------------------------------ |
| `//copy [-e] [-m]`                        | `worldedit.clipboard.copy`   | 复制选择区域到剪贴板                                                 |
| `//flip [\<direction>]`                   | `worldedit.clipboard.flip`   | 在复制点的基础上翻转剪贴板的内容                                      |
| `//rotate \<y-axis> [\<x-axis>] [\<z-axis>]` | `worldedit.clipboard.rotate` | 非破坏性地旋转剪贴板的内容。角度以度为单位，正角度表示顺时针旋转。可以叠加多次旋转。不执行插值，因此角度应为90度的倍数 |
| `//lazycopy [-e] [-m]`                    | `worldedit.clipboard.lazycopy` | 懒惰地将选择区域复制到剪贴板。                                       |
| `/asset [category]`                       | `worldedit.clipboard.asset`   | 将剪贴板保存到资产网络界面                                          |
| `//cut [leave-id] [-e] [-m]`              | `worldedit.clipboard.cut`     | 将选择区域剪切到剪贴板。                                            |
| `/download`                               | `worldedit.clipboard.download`| 通过配置的Web界面下载剪贴板                                          |
| `//paste [-s] [-a] [-o]`                  | `worldedit.clipboard.paste`   | 粘贴剪贴板的内容。                                                 |
| `//lazycut [-e] [-m]`                     | `worldedit.clipboard.lazycut` | 懒惰地将选择区域剪切到剪贴板。                                       |
| `//place [-s] [-a] [-o]`                  | `worldedit.clipboard.place`   | 在不应用变换的情况下放置剪贴板的内容（例如旋转）。                   |
| `/clearclipboard`                         | `worldedit.clipboard.clear`  | 清除你的剪贴板                                                       |

### 生成指令

生成解构和环境

| 指令                                       | 权限                                     | 描述                                                                                                                           |
| -------------------------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `//generate \<pattern> \<expression> [-h] [-r] [-o] [-c]` | `worldedit.generation.shape`   | 根据预期返回正数（true）的公式生成一个形状。可以选择设置类型/数据为所需的方块。标志：`-h` 生成一个中空形状；`-r` 使用原始的Minecraft坐标；`-o` 类似于`-r`，但相对于放置的位置进行偏移；-c 类似于-r，但相对于选择中心进行偏移。如果既没有`-r`也没有`-o`，则选择将映射到`-1..1`。 |
| `//pyramid \<pattern> \<size> [-h]`          | `worldedit.generation.pyramid`           | 生成一个填充的金字塔。                                                                                                       |
| `//sphere \<pattern> \<radius>[,\<radius>,\<radius>] [raised?] [-h]` | `worldedit.generation.sphere` | 生成一个填充的球体。通过指定用逗号分隔的3个半径，可以生成一个椭球体。椭球体半径的顺序是南北、上下、东西。                                                 |
| `//cyl \<pattern> \<radius>[,\<radius>] [height] [-h]` | `worldedit.generation.cylinder` | 生成一个圆柱体。通过指定用逗号分隔的2个半径，可以生成椭圆柱体。第一个半径是南北方向的，第二个半径是东西方向的。                                           |
| `/pumpkins [size]`                         | `worldedit.generation.pumpkins`         | 生成南瓜区域。                                                                                                               |
| `//hsphere \<pattern> \<radius> [,\<radius>,\<radius>] [raised?]` | `worldedit.generation.sphere` | 生成一个中空的球体。通过指定用逗号分隔的3个半径，可以生成一个椭球体。椭球体半径的顺序是南北、上下、东西。                                               |
| `//hcyl \<pattern> \<radius>[,\<radius>] [height]` | `worldedit.generation.cylinder` | 生成一个中空的圆柱体。通过指定用逗号分隔的2个半径，可以生成中空的椭圆柱体。第一个半径是南北方向的，第二个半径是东西方向的。                                     |
| `//caves [size=8] [freq=40] [rarity=7] [minY=8] [maxY=127] ` `[sysFreq=1] [sysRarity=25] [pocketRarity=0] [pocketMin=0] [pocketMax=3]` | `worldedit.generation.caves` | 生成一个洞穴网络。                                                                                                          |
| `//ore \<mask> \<pattern> \<size> \<freq> \<rarity> \<minY> \<maxY>` | `worldedit.generation.ore`   | 生成矿石。                                                                                                                   |
| `/forestgen [size] [tree-type] [density]` | `worldedit.generation.forest`           | 生成一片森林。                                                                                                                 |
| `//hpyramid \<pattern> \<size>`             | `worldedit.generation.pyramid`           | 生成一个中空的金字塔。                                                                                                       |
| `//ores`                                  | `worldedit.generation.ore`   | 生成矿石。                                                                                                                   |
| `//generatebiome \<biome> \<expression> [-h] [-r] [-o] [-c]` | `worldedit.generation.shape`, `worldedit.biome.set` | 根据预期返回正数（true）的公式生成一个形状。设置该形状中方块的生物群系。标志：`-h` 生成一个中空形状；`-r` 使用原始的 Minecraft 坐标；`-o` 类似于`-r`，但相对于放置的位置进行偏移；`-c` 类似于`-r`，但相对于选择中心进行偏移。如果既没有`-r`也没有`-o`，则选择将映射到`-1..1`。 |

### 群系指令

更改、列出和检查生物群系

| 指令                                | 权限                       | 描述                                                         |
| ----------------------------------- | -------------------------- | ------------------------------------------------------------ |
| `//setbiome \<biome> [-p]`           | `worldedit.biome.set`      | 设置区域的生物群系。默认使用选择区域中包含的所有方块。-p 使用当前所在方块。  |
| `/biomelist [page]`                  | `worldedit.biome.list`     | 获取所有可用的生物群系。                                       |
| `/biomeinfo [-p] [-t]`               | `worldedit.biome.info`     | 获取方块的生物群系。默认使用选择区域中包含的所有方块。-t 使用所看方块。-p 使用当前所在方块。 |

### 超级镐指令


| 指令                          | 权限                               | 描述                          |
| ----------------------------- | ---------------------------------- | ----------------------------- |
| `/sp recur \<radius>`          | `worldedit.superpickaxe.recursive` | 启用递归超级镐模式            |
| `/sp area \<radius>`           | `worldedit.superpickaxe.area`      | 启用区域超级镐模式            |
| `/sp single`                   | `worldedit.superpickaxe`           | 启用单方块超级镐模式          |

### 快照指令

| 指令                           | 权限                               | 描述                                       |
| ------------------------------ | ---------------------------------- | ------------------------------------------ |
| `/snapshot list [num]`          | `worldedit.snapshots.list`         | 列出快照                                   |
| `/snapshot after \<date>`       | `worldedit.snapshots.restore`      | 选择日期之后的最近快照                   |
| `/snapshot before \<date>`      | `worldedit.snapshots.restore`      | 选择日期之前的最近快照                   |
| `/snapshot use \<snapshot>`     | `worldedit.snapshots.restore`      | 选择要使用的快照                         |
| `/snapshot sel \<index>`        | `worldedit.snapshots.restore`      | 根据列表 ID 选择快照                     |


从快照中恢复选择区域：`/restore [snapshot]`

### 脚本指令

运行[CraftScript脚本](https://worldedit.enginehub.org/en/latest/usage/other/craftscripts/)

| 指令                          | 权限                           | 描述                   |
| ----------------------------- | ------------------------------ | ---------------------- |
| `/cs <filename> [args...]`   | `worldedit.scripting.execute` | 执行 CraftScript        |
| `/.s [args...]`              | `worldedit.scripting.execute` | 执行上一个 CraftScript |

### 区块指令

| 指令              | 权限                     | 描述                                       |
| ----------------- | ------------------------ | ------------------------------------------ |
| `/chunkinfo`      | `worldedit.chunkinfo`    | 获取所在区块的信息                           |
| `/delchunks`      | `worldedit.delchunks`    | 删除区块                                    |
| `/listchunks`     | `worldedit.listchunks`   | 列出包含在选择区域中的区块                 |
|        `/vchunk`|                          | 刷新区块 |

### 选项指令

选项和设置，以及物品信息

| 指令                       | 权限                 | 描述                        |
| -------------------------- | -------------------- | --------------------------- |
| `//fast [on/off]`          | `worldedit.fast`     | 切换 FAWE 撤销功能         |
| `//gmask [mask]`           | `worldedit.global-mask` | 全局源蒙版应用于您进行的所有编辑，并基于源方块（例如剪贴板中的方块）进行蒙版。 |
| `//gtransform [transform]` | `worldedit.global-transform` | 设置全局变换                 |
| `//toggleplace`            | 无                   | 在放置时切换当前位置和pos1    |
| `//searchitem \<query> [-b] [-i]` | `worldedit.searchitem` | 搜索物品。标志：-b 仅搜索方块；-i 仅搜索物品。 |
| `//gmask [mask]`           | `worldedit.global-mask` | 全局目标蒙版应用于您进行的所有编辑，并基于目标方块（即世界中的方块）进行蒙版。 |
| `//tips`                   | `fawe.tips`          | 切换 FAWE 提示              |

### 笔刷选项指令

| 指令                          | 权限                               | 描述                                         |
| ----------------------------- | ---------------------------------- | -------------------------------------------- |
| `/target [1 - 4]`             | 无                                 | 在不同的目标模式之间切换                       |
| `/size [pattern]`             | `worldedit.brush.options.size`     | 设置笔刷大小                                   |
| `//listbrush [mine/<filter>] [page=1] [-d] [-n] [-p]` | `worldedit.brush.list` | 列出笔刷目录中的所有笔刷。`-p` 打印请求的页面     |
| `/range [pattern]`            | `worldedit.brush.options.range`    | 设置笔刷范围                                   |
| `/mask [mask]`                | `worldedit.brush.options.mask`     | 设置笔刷目标蒙版                              |
| `/transform [transform]`      | `worldedit.brush.options.transform`| 设置笔刷变换                                  |
| `/mat [pattern]`              | `worldedit.brush.options.material` | 设置笔刷图案                                  |
| `/loadbrush [name]`           | `worldedit.brush.load`             | 加载一个笔刷                                  |
| `/smask [mask]`               | `worldedit.brush.options.mask`     | 设置笔刷源蒙版                               |
| `/visualize [mode=0]`         | `worldedit.brush.visualize`        | 在不同的可视化模式之间切换 *0 = 无可视化*，*1 = 单个方块在目标位置*，*2 = 显示将要更改的方块的玻璃* |
| `// [on/off]`                 | `worldedit.superpickaxe`           | 切换超级镐功能                               |
| `/targetmask [mask]`          | `worldedit.brush.targetmask`       | 设置目标蒙版                                |
| `/targetoffset [mask]`        | `worldedit.brush.targetoffset`     | 设置目标蒙版                                |
| `/primary [brush-arguments]`  | `worldedit.brush.primary`          | 设置右键笔刷                                |
| `/none`                       | 无                                 | 从当前物品上解除绑定工具                      |
| `/secondary [brush-arguments]`| `worldedit.brush.secondary`        | 设置左键笔刷                                |
| `/savebrush [name]`           | `worldedit.brush.save`             | 保存当前笔刷，使用 `-g` 标志进行全局保存       |
| `/scroll [none/clipboard/mask/pattern/range/size/visual/target]` | `worldedit.brush.scroll` | 在不同的目标模式之间切换                      |

### 工具指令

往物品上绑定功能

| 指令                          | 权限                               | 描述                                         |
| ----------------------------- | ---------------------------------- | -------------------------------------------- |
| `/tool tree [type]`           | `worldedit.tool.tree`              | 树生成工具                                    |
| `/tool repl \<block>`         | `worldedit.tool.replacer`          | 方块替换工具                                  |
| `/tool info`                  | `worldedit.tool.info`              | 方块信息工具                                  |
| `/tool lrbuild \<leftclick block> \<rightclick block>` | `worldedit.tool.lrbuild` | 长距离建筑工具                              |
| `/tool inspect`               | `worldedit.tool.inspect`           | 选择检查刷子                                  |
| `/tool farwand`               | `worldedit.tool.farwand`           | 远程魔杖工具                                |
| `/tool floodfill \<pattern> \<range>` | `worldedit.tool.flood-fill`    | 水平填充工具                                  |
| `/tool cycler`                | `worldedit.tool.data-cycler`       | 数据循环工具                                 |
| `/tool deltree`               | `worldedit.tool.deltree`           | 浮动树移除工具                              |


### 笔刷列表

| 指令                                               | 权限                                | 描述                                       |
| -------------------------------------------------- | ----------------------------------- | ------------------------------------------ |
| `/brush copypaste [depth=5]`                        | `worldedit.brush.copy`             | 左键点击对象的基底进行复制，右键进行粘贴。|
| `/brush command \<radius> [cmd1;cmd2...]+`         | `worldedit.brush.command`          | 在点击位置运行命令。                         |
| `/brush populateschematic \<mask> \<file/folder/url> [radius=30] [points=5] [-r]` | `worldedit.brush.populateschematic` | 选择散布原理图刷子。              |
| `/brush scmd \<scatter-radius> \<points> \<cmd-radius=1> \<cmd1;cmd2...>` | `worldedit.brush.scattercommand` | 在表面的随机点运行命令。              |
| `/brush shatter \<pattern> [radius=10] [count=10]`   | `worldedit.brush.shatter`          | 创建不均匀的线条分隔地形。                 |
| `/brush erode [radius=5]`                           | `worldedit.brush.erode`            | 侵蚀地形。                                |
| `/brush sphere \<pattern> [radius=2] [-h] [-f]`     | `worldedit.brush.sphere`           | 创建一个球体。                            |
| `/brush pull [radius=5]`                             | `worldedit.brush.pull`            | 将地形拉向你。                           |
| `/brush stencil \<pattern> [radius=5] [file/#clipboard/imgur=null] ` `[rotation=360] [yscale=1.0]` | `worldedit.brush.stencil` | 使用高度图在任何表面上绘制。       |
| `/brush recursive \<pattern-to> [radius=5]`         | `worldedit.brush.recursive`        | 设置所有连接的方块。                        |
| `/brush spline \<pattern>`                            | `worldedit.brush.spline`          | 单击以选择一些对象，再次单击同一方块以连接对象。 |
| `/brush sweep [copies=-1]`                          | `worldedit.brush.sweep`            | 沿着曲线扫描剪贴板内容。                 |
| `/brush catenary \<pattern> [lengthFactor=1.2] [size=0]` | `worldedit.brush.spline`     | 在两点之间创建悬挂线。                     |
| `/brush line \<pattern> [radius=0] [-h] [-s] [-f]` | `worldedit.brush.line`             | 创建直线。                                |
| `/brush sspl \<pattern> [size=0] [tension=0] [bias=0] [continuity=0] [quality=10]` | `worldedit.brush.surfacespline` | 在表面上创建样条。     |
| `/brush blendball [-a] [radius=5] [minFreqDiff=1] [-m]` | `worldedit.brush.blendball`   | 平滑和混合地形。                           |
| `/brush circle \<pattern> [radius=5]`                | `worldedit.brush.sphere`          | 创建围绕你面朝方向的圆。                  |
| `/brush rock \<pattern> [radius=10] [roundness=100] [frequency=30] [amplitude=50] [-h]` | `worldedit.brush.rock` | 创建畸变的球体。 |
| `/brush height [-lrs] [radius] [yscale] [image] [rotation]` | `worldedit.brush.height`       | 提高和降低土地。                           |
| `/brush flatten [radius=5] [file/#clipboard/imgur=null] [rotation=0] [yscale=1.00] [-h]` | `worldedit.brush.height` | 平整地形。     |
| `/brush layer \<radius> \<patternLayer>`             | `worldedit.brush.layer`            | 使用一层替换地形。                         |
| `/brush cylinder \<pattern> [radius=2] [height=1] [-h]` | `worldedit.brush.cylinder`      | 创建一个圆柱体。                         |
| `/brush surface \<pattern> [radius=5]`               | `worldedit.brush.surface`          | 使用高度图在任何表面上绘制。               |
| `/brush ex [radius=5]`                               | `worldedit.brush.ex`               | 快捷的灭火刷子。                         |
| `/brush gravity [radius=5] [-h]`                     | `worldedit.brush.gravity`          | 模拟重力的刷子。                         |
| `/brush clipboard [-a] [-o] [-e] [-b] [-m]`         | `worldedit.brush.clipboard`        | 选择剪贴板刷子。                         |
| `/brush butcher [radius=5] [-p] [-l] [-a] [-n] [-g] [-b] [-t] [-f] [-r]` | `worldedit.brush.butcher` | 在指定的半径内杀死附近的生物。 |
| `/brush splatter \<pattern> [radius=5] [seeds=1] [recursion=5] [solid=true]` | `worldedit.brush.splatter` | 在表面上随机放置一堆方块。  |
| `/brush cliff [radius=5] [file/#clipboard/imgur=null] [rotation=0] [yscale=1.00] [-h]` | `worldedit.brush.height` | 平整地形并创建悬崖。 |
| `/brush smooth [size=2] [iterations=4] [-n]`       | `worldedit.brush.smooth`           | 选择地形软化刷子。                       |
| `/brush scatter \<pattern> [radius=5] [points=5] [distance=1] [-o]` | `worldedit.brush.scatter` | 在表面上每隔一定距离设置一些方块。 |

### 蒙版指令

| 指令                                | 描述                           |
| ----------------------------------- | ------------------------------ |
| `#offset \<dx> \<dy> \<dz>\ <mask>`   | 偏移一个蒙版                     |
| `% \<chance>`                       | 百分比几率                       |
| `#id`                               | 限制为初始 ID                    |
| `#existing`                         | 如果有非空气方块                  |
| `#data`                             | 限制为初始数据                    |
| `{ \<min> \<max>`                   | 限制方块在初始方块的特定半径范围内  |
| `#surface`                          | 限制为表面（与空气相邻的任何实体方块） |
| `= \<expression>`                   | 表达式蒙版                      |
| `! \<mask>`                         | 反选另一个蒙版                   |
| `$ \<biome>`                        | 在特定的生态位。要获取生态位列表，请使用 //biomelist |
| `#region`                           | 在提供的选择内                    |
| `~ \<mask> [min=1] [max=8]`         | 邻近特定数量的其他方块              |
| `\ \<min> \<max>`                   | 限制为特定地形角度                |
| `#dregion`                          | 在玩家选择内                     |
| `#xaxis`                            | 限制为初始 x 轴                   |
| `#skylight \<min> \<max>`           | 限制为特定天光水平                |
| `#blocklight \<min> \<max>`         | 限制为特定块光水平                |
| `#opacity \<min> \<max>`            | 限制为特定不透明度水平             |
| `#haslight`                         | 限制为有光（天光或发光）的方块        |
| `#brightness \<min> \<max>`         | 限制为特定方块亮度水平             |
| `#liquid`                           | 如果有实体方块                   |
| `true`                              | 总是真                           |
| `#nolight`                          | 限制为没有光（天光或发光）的方块      |
| `false`                             | 总是假                           |
| `#iddata`                           | 限制为初始方块 ID 和数据           |
| `> \<mask>`                         | 在特定方块上方                   |
| `/ \<mask> \<min> \<max>`            | 侧面有特定数量的其他方块             |
| `#wall`                             | 限制为墙壁（与空气 n、e、s、w 相邻） |
| `#zaxis`                            | 限制为初始 z 轴                   |
| `#yaxis`                            | 限制为初始 y 轴                   |
| `< \<mask>`                         | 在特定方块下方                   |
| `#simplex \<scale=10> \<min=0> \<max=100>` | 使用单纯噪声作为蒙版         |
| `#light \<min> \<max>`               | 限制为特定光水平                  |
| `#solid`                            | 如果有实体方块                   |

### 变换式

| 指令                             | 描述                          |
| -------------------------------- | ----------------------------- |
| `#offset \<dx> \<dy> \<dz> [transform]` | 偏移变换                    |
| `#rotate \<rotateX> \<rotateY> \<rotateZ> [transform]` | 所有变化将围绕初始位置旋转 |
| `#scale \<dx> \<dy> \<dz> [transform]` | 所有变化将被缩放              |
| `#pattern \<pattern> [transform]` | 总是使用特定模式               |
| `#linear3d \<transform>`          | 使用 x、y、z 坐标从列表中选择变换 |
| `#linear \<transform>`            | 从变换列表中顺序选择         |
| `#spread \<dx> \<dy> \<dz> [transform]` | 随机偏移变换               |




