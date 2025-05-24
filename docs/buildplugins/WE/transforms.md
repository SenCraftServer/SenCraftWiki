---
sidebar_position: 12
---
# 变换

## 变换

可以对笔刷或全局应用变换，以修改方块的改变位置和方式。

## 语法

### 多个变换

使用逗号（`,`）从列表中随机选择一个变换，例如
`#offset[0][1][0],#pattern[stone]`（将方块向上偏移一个，或者将其改变为石头）

使用和号（`&`）为每个方块使用多个变换，例如
`#offset[0][1][0]&#pattern[stone]`（将方块向上偏移一个并将其改变为石头）

### 参数

变换参数应位于方括号内，例如
`#offset[0][1][0]`

### 设置变换

#### Perm: `worldedit.global-transform`

Desc: 设置全局蒙版

#### Perm: `worldedit.brush.options.transform`

Desc: 设置笔刷蒙版（用空格 ` ` 或冒号 `:` 分隔多个蒙版）

## 变换列表

| 变换                                                 | 描述                              |
| ---------------------------------------------------- | --------------------------------- |
| `#offset <dx> <dy> <dz> [transform]        `         | 偏移变换                          |
| `#rotate <rotateX> <rotateY> <rotateZ> [transform]`  | 围绕初始位置旋转                  |
| `#scale <dx> <dy> <dz> [transform]       `           | 缩放所有变化                      |
| `#pattern <pattern> [transform]               `      | 始终使用特定模式                  |
| `#linear3d <transform>                             ` | 使用 x、y、z 坐标从列表中选择变换 |
| `#linear <transform>                            `    | 从变换列表中按顺序选择变换        |
| `#spread <dx> <dy> <dz> [transform]      `           | 随机偏移变换                      |
