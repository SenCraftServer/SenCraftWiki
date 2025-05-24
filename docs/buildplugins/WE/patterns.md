---
sidebar_position: 4
---
# 样式

## 语法

#### 方块

使用方块的名称或ID（例如 `stone`）。

#### 物品栏

您可以使用 `hand` 或例如 `slot5` 从物品栏中使用方块。

#### 多个模式

使用逗号（`,`）从多个模式中随机选择一个方块。对于特定比例，您可以使用 `%`，例如 `80%stone,20%planks`。

#### 参数

模式参数应位于方括号内，例如 `#simplex[10][stone,wood]`。

## 模式列表


| 指令                                             | 说明                                                                                     | 示例                              |
|--------------------------------------------------|------------------------------------------------------------------------------------------|-----------------------------------|
| `#offset <dx> <dy> <dz> <pattern>`               | 偏移一个图案                                                                             | `#offset[1][2][2][minecraft:stone]`    |
| `#mask <mask> <pattern-true> <pattern-false>`    | 根据掩码应用图案                                                                         | `#mask[mask][minecraft:stone][minecraft:grass_block]` |
| `#spread <dx> <dy> <dz> <pattern>`               | 随机扩散方块                                                                             | `#spread[1][2][3][minecraft:stone]`         |
| `#buffer <pattern>`                              | 在使用图案时只放置一次方块，适用于不想在同一位置应用多次的刷子                            | `#buffer[minecraft:stone]`                |
| `#color <color>`                                 | 使用最接近指定颜色的方块                                                                 | `#color[red]`                     |
| `#clipboard`                                     | 使用剪贴板中的方块作为图案                                                               | `#clipboard`                      |
| `#existing`                                      | 使用已经存在的方块                                                                       | `#existing`                       |
| `#biome <biome>`                                 | 设置生物群系                                                                             | `#biome[desert]`                  |
| `= <expression>`                                 | 表达式图案: [表达式语法](./14.expressions.md)          | `=height(x, y, z)`                |
| `#relative <pattern>`                            | 将图案偏移到点击的位置                                                                   | `#relative[minecraft:stone]`              |
| `#saturate <r> <g> <b>`                          | 用颜色饱和现有方块                                                                       | `#saturate[255][0][0]`            |
| `#darken`                                        | 使现有方块变暗                                                                           | `#darken`                         |
| `#anglecolor <distance>`                         | 根据现有地形角度应用更深颜色的方块                                                       | `#anglecolor[5]`                  |
| `#desaturate <percent>`                          | 使现有方块的颜色变淡                                                                     | `#desaturate[50]`                 |
| `#averagecolor <r> <g> <b>`                      | 取现有方块和指定颜色之间的平均颜色                                                       | `#averagecolor[128][128][128]`    |
| `#fullcopy [schem\|folder\|url=#copy] [rotate=false] [flip=false]` | 在每个方块上放置完整的剪贴板                                                             | `#fullcopy[schem][rotate=true][flip=true]` |
| `#buffer2d <pattern>`                            | 在使用图案时只在一列中放置一次方块                                                       | `#buffer2d[minecraft:stone]`              |
| `#angledata`                                     | 根据现有地形角度设置方块数据                                                             | `#angledata`                      |
| `#lighten [randomize=true] [max-complexity=100]` | 使现有方块变亮                                                                           | `#lighten[randomize=false][max-complexity=50]` |
| `#!x <pattern>`                                  | 图案不会提供z轴信息。                                                                    | `!x[!z[#~[#l3d[minecraft:stone]]]]`       |
| `#surfacespread <distance> <pattern>`            | 仅应用于表面的方块。从提供的图案中选择一个具有给定随机偏移的方块。例如，使用#existing来随机偏移世界中的方块，或使用#copy来偏移剪贴板中的方块 | `#surfacespread[5][minecraft:stone]`      |
| `#solidspread <dx> <dy> <dz> <pattern>`          | 随机扩散实心方块                                                                         | `#solidspread[1][2][3][minecraft:stone]`    |
| `#linear2d <pattern> [xscale=1] [zscale=1]`      | 使用x,z坐标从列表中选择一个方块                                                          | `#linear2d[minecraft:stone][xscale=2][zscale=2]` |
| `#!y <pattern>`                                  | 图案不会提供y轴信息                                                                      | `!y[minecraft:stone]`                     |
| `#linear3d <pattern> [xscale=1] [yscale=1] [zscale=1]` | 使用x,y,z坐标从列表中选择一个方块                                                        | `#linear3d[minecraft:stone][xscale=2][yscale=2][zscale=2]` |
| `#linear <pattern>`                              | 从图案列表中依次设置方块                                                                 | `#linear[minecraft:stone][minecraft:grass_block][minecraft:stone]` |
| `#!z <pattern>`                                  | 图案不会提供z轴信息                                                                      | `!z[minecraft:stone]`                     |
| `#simplex <scale=10> <pattern>`                  | 使用简单噪声随机化方块                                                                   | `#simplex[15][minecraft:stone]`           |
| `#perlin <scale=10> <pattern>`                   | 使用柏林噪声随机化方块                                                                   | `#perlin[20][minecraft:stone]`            |
| `#rmf <scale=10> <pattern>`                      | 使用嶙峋的多重分形噪声随机化方块                                                         | `#rmf[25][minecraft:stone]`               |
| `#voronoi <scale=10> <pattern>`                  | 使用沃罗诺伊噪声随机化方块                                                               | `#voronoi[30][minecraft:stone]`           |
