---
sidebar_position: 9
---
# 高级蒙版

**了解 WorldEdit 提供的基本蒙版，请点击[这里](./8.mask1.md)。**

蒙版是对编辑的限制，用于放置方块时，例如只替换石头下方的方块。全局蒙版适用于所有编辑，笔刷蒙版仅适用于当前笔刷。

## 语法

### 方块

使用方块的名称或 ID（例如`stone`）。

### 多个蒙版

使用`,`（或）或`&`（与）来分隔多个蒙版。例如，`grass_block,$desert`。

### 参数

蒙版参数应位于方括号内，例如`#offset[0][5][3]`。

## 设置蒙版

###

权限：`worldedit.global-mask` 描述：此命令将一个或多个蒙版全局应用于您的所有 WorldEdit 操作。此命令基于目标方块（即世界中的方块）应用蒙版。

###

权限：`worldedit.global-mask`  
描述：全局源蒙版适用于您进行的所有编辑，并基于源方块（例如剪贴板中的方块）应用蒙版。

###

权限：`worldedit.brush.options.mask`  
描述：设置笔刷目标蒙版

###

权限：`worldedit.brush.options.mask`  
描述：设置笔刷源蒙版

## 蒙版列表

| 标记                                                | 描述                                           | 示例                                |
| --------------------------------------------------- | ---------------------------------------------- | ----------------------------------- |
| `#offset <dx> <dy> <dz> <mask>`                     | 偏移蒙版                                       | `#offset 1 0 0 %stone`              |
| `% <chance>`                                        | 百分比概率                                     | `%75`                               |
| `#id          `                                     | 限制为初始 ID                                  | `1`                                 |
| `#existing          `                               | 如果有非空气方块                               | `#existing`                         |
| `#data             `                                | 限制为初始数据                                 | `#data`                             |
| `{ <min> <max>   `                                  | 将方块限制在初始方块的特定半径范围内           | `{ 5 10`                            |
| `#surface         `                                 | 限制为表面（任何与空气接触的实体方块）         | `#surface`                          |
| `= <expression>   `                                 | 表达式蒙版                                     | `= %stone && %grass`                |
| `!<mask>     `                                      | 反选另一个蒙版                                 | `!water`                            |
| `$<biome>      `                                    | 在特定生物群系中                               | `$forest`                           |
| `#region               `                            | 在提供的选择内部                               | `#region`                           |
| `~<mask>[min=1\][max=8\]     `                      | 邻接于特定数量的其他方块                       | `~ %wood [min=2] [max=4]`           |
| `/<min><max>         `                              | 限制为特定地形角度                             | `/[0d][45d]`                        |
| `#dregion         `                                 | 在玩家选择内部                                 | `#dregion`                          |
| `#xaxis           `                                 | 限制为初始 x 轴                                | `#xaxis`                            |
| `#liquid           `                                | 如果有实体方块                                 | `#liquid`                           |
| `true              `                                | 始终为真                                       | `true`                              |
| `false           `                                  | 始终为假                                       | `false`                             |
| `> <mask>     `                                     | 在特定方块上方                                 | `>grass`                            |
| `#wall          `                                   | 限制为墙壁（空气的 n，e，s，w 方向的任何方块） | `#wall`                             |
| `#zaxis           `                                 | 限制为初始 z 轴                                | `#zaxis`                            |
| `#yaxis      `                                      | 限制为初始 y 轴                                | `#yaxis`                            |
| `< <mask>  `                                        | 在特定方块下方                                 | `<stone`                            |
| ` #simplex <scale=10> <min=0> <max=100>`            | 使用 simplex 噪声作为蒙版                      | `#simplex[scale=5][min=20][max=80]` |
| `#solid  `                                          | 如果有实体方块                                 | `#solid`                            |
| `\#surfaceangle\[min\]\[max\]\[depth\] (material) ` | 替换方块的表面                                 | `#surfaceangle[0][90][5][stone]`    |
