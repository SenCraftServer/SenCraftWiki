---
sidebar_position: 9
---
:::danger 注意

由于技术问题，MetaBrush暂时下线，预计2025年下半年重新上线

:::
# MetaBrushes

> Brushes in [FastAsyncVoxelSniper](./1.Start.md) and most versions of VoxelSniper are generally broken up into 2 primary categories, Regular Brushes or Performer Brushes. **A Regular Brush is one that does not accept performers** such as VoxelSniper's Erode, HeatRay, or Dome brushes. **A Performer Brush is one that uses performers that can be changed to alter the operation of the brush**, such as Ball, Overlay, or FillDown brushes. **MetaBrushes adds a 3rd category called MetaBrushes**, which are an extension of performer brushes, but utilize an additional algorithm performed at the end of each brush to either smooth the output or adapt it to nearby blocks.

每个被归类为 MetaBrush 类型的笔刷都会以某种方式使用这些参数。每个参数的默认值及其说明如下：

- `intensity[decimal]` : 确定适应和平滑算法的结果强度，默认值为 `100.0`
- `metaRadius[integer]` : 定义附加半径，用于确定受适应和平滑算法影响的区块，默认值为 `2`
- `gridMultiplier[decimal]` : 定义用于调整和平滑算法的网格点间距的乘数，默认值为 `1.0`
- `adapt` : 切换是否使画笔适应附近的图块，默认为启用
- `smooth` : 切换是否平滑画笔，默认为禁用
- `distance` : 切换是否在适应部分使用基于距离的算法，默认为启用

需要注意到的是，MetaBrushes 中使用的参数样式与通常的 **VoxelSniper** 或 **FastAsyncVoxelSniper** 的画笔参数样式不同。在 **MetaBrushes** 中，通常有两种类型的参数，一种是接受值的参数，另一种是切换参数。接受值的参数在参数建议中会以参数名称结尾处的开放括号显示，例如 `intensity[`，并接受一个值后跟一个闭合括号。例如 `intensity[100.0]`。切换参数则仅仅是参数名称本身，例如 `smooth`，重复使用它会切换其处理的设置在启用和禁用之间。

---

### MetaBalls 球形笔刷

- Command Syntax: `/b mb [MetaBrush Parameters]`
- Example:` /b mb `

默认 MetaBrush 参数：
- `gridMultiplier[0.75]`
- `distance=true`

**MetaBalls** 笔刷 在你点击的位置放置一个 Metaball，它将适应周围的区域。强度值高于`100.0`时，画笔会放置更多材质，而强度值较低时，则会减少放置的材质数量。推荐预设值：

### MetaVoxels Brush 体素笔刷

- Command Syntax: `/b mvx [MetaBrush Parameters]`
- Example: `/b mvx`
  
**MetaVoxels** 笔刷的功能与 **MetaBalls** 笔刷相同，但形状是立方体而不是球体。

### MetaCylinders Brush 圆柱笔刷

- Command Syntax: `/b mc height[decimal,decimal] [MetaBrush Parameters]`
- Example: `/b mc height[-7.5,7.5]`

**MetaCylinders** 笔刷会根据 `height` 参数的上下限，放置一个向上和向下的圆柱形圆盘。与 **MetaBalls** 和 **MetaVoxels** 笔刷一样，使用箭会放置新的材质，而火药则会移除材质。

**推荐预设：**
`/b mc height[-7.5,7.5]` 、 `/b 10` 、 `/voxel 1` ，然后使用箭。

![](images/metabrush1.png)

`/b mc height[-7.5,20]`，主要使用箭。

![](images/metabrush2.png)

`/b mc height[-7.5,20]` 和 `/b 25` 使用箭和火药。

### Stalacmite Brush 石笋笔刷

- Command Syntax: `/b stal height[decimal] [type] [easing]`
- Example: `/b stal height[16] vision cubic`

石笋笔刷会挤出一个与笔刷大小相等的地形区域，从你点击的点挤出到与该区域表面的高度相等的块数。默认情况下，箭会将方块向外挤出，而火药则会将它们向内挤出。 `axis` 、 `surface` 和 `vision` 参数决定了画笔的方向行为。 `easing` 参数可用于设置您希望使用的缓和函数类型，这将大致决定画笔的形状。

**参数解释：**

- `height[decimal]` : 笔刷的最大高度
- `axis` : 设置画笔类型锁定在 xyz 轴上
- `vision` : 设置画笔类型锁定在您的视线范围内
- `surface` : 设置画笔类型锁定到点击点的表面角度
- `easing` : 决定画笔的形状。选项有 `cubic` 、`sine` 和 `circ`

**推荐预设：**
`/b stal height[16] smooth vision`，笔刷尺寸为 12，`/voxel 1`

![](images/metabrush3.png)

### MetaSplines Brush 样条笔刷

- Command Syntax: `/b msp r[radius] [MetaBrush Parameters]`
- Example: `/b msp radius[6.5]`
  
**MetaSplines** 笔刷将根据您使用箭设置的点创建一条样条线。使用火药将使其生成样条线。它会尝试与现有区域融合。

**推荐预设：**

`/b msp radius[6]`，`/v 0` 可以让你在类似平原的区域绘制出漂亮的河床。

### Random Hydrosion Brush 随机水蚀笔刷

- Command Syntax: `/b randhydro droplets[integer] radius[decimal] lifetime[integer] sediment[blockState] blending[decimal] <reverse> [MetaBrush Parameters]`
- Example: `/b randhydro droplets[10] radius[3] lifetime[150]`

模拟随机水力侵蚀，从 `droplets` 设定的点开始，以 `lifetime` 的速度向下滚动。侵蚀强度取决于 `intensity` 值和侵蚀的 `radius` 。画笔大小将决定水滴开始的区域。4#参数将决定放置何种材料来模拟水滴路径底部的沉积物。 `blending` 参数将决定水滴被侵蚀后路径的平滑程度。这对于避免浮动块非常有用，而且可以让效果看起来更漂亮。将 `blending` 设置为 0将禁用它。将 `sediment` 设置为 none 将禁用沉积物放置。

### Maxima Hydrosion Brush 水蚀地形笔刷

- Command Syntax: `/b maxhydro droplets[integer] radius[decimal] lifetime[integer] sediment[blockState] blending[decimal] <reverse> [MetaBrush Parameters]`
- Example: `/b maxhydro droplets[10] radius[3] lifetime[150]`

模拟水力侵蚀，从 `droplets` 设定的若干点开始，这些点位于刷子半径内的局部最大值处，从地形上向下滚动持续 `lifetime` 。侵蚀强度取决于 `intensity` 值和侵蚀的 `radius` `。刷子的大小将决定水滴可以开始的区域。sediment` 参数将决定放置何种材料来模拟水滴路径底部的沉积物。 `blending` 参数将决定水滴侵蚀后路径的平滑程度。这对于避免浮动块非常有用，而且可以让效果看起来更漂亮。将 `blending` 设置为 0 将禁用它。将 `sediment` 设置为 none 将禁用沉积物放置。 `spawnRadius` 参数将决定应使用多大的区域来确定某个位置是否是液滴放置的局部最大值。 `spawnRadius` 值越大，速度越慢，因此建议默认值为 2 或 3。

### Spread Hydrosion Brush 扩散水蚀笔刷

- Command Syntax: `/b spreadhydro droplets[integer] radius[decimal] lifetime[integer] sediment[blockState] blending[decimal] <reverse> [MetaBrush Parameters]`
- Example: `/b spreadhydro droplets[10] radius[3] lifetime[150]`

模拟平均分布的水力侵蚀，从 `droplets` 设定的若干点开始，以 `lifetime` 的速度向下滚动。侵蚀强度取决于 `intensity` 值和侵蚀的 `radius` 。画笔大小将决定水滴开始的区域。4#参数将决定放置何种材料来模拟水滴路径底部的沉积物。 `blending` 参数将决定水滴被侵蚀后路径的平滑程度。这对于避免浮动块非常有用，而且可以让效果看起来更漂亮。将 `blending` 设置为 0 将禁用它。将 `sediment` 设置为 none 将禁用沉积物放置。

### Airosion Brush 风蚀笔刷

- Command Syntax: `/b wind streams[integer] lifetime[integer] radius[decimal] threshold[decimal]`
- Example: `/b wind streams[20] lifetime[150] radius[3] threshold[0.5]`

**参数解释：**

- `streams[integer]` : 要生成的风流数量
- `radius[decimal]` : 风流的宽度，它决定了风流侵蚀地表的程度
- `lifetime[integer]` : 生成的风流的寿命
- `threshold[decimal]` : 根据乘数定义侵蚀强度

风蚀笔刷会从以你为中心的笔刷大小区域出发，向你所看的方向发射风流。这些风流会在行进过程中侵蚀接触到的表面。风流会根据遇到的表面形状进行调整，并只会侵蚀你定义的半径内的表面块。每次使用笔刷时都会生成新的风流。未来，火药将允许你重复使用最近生成的风流。该笔刷类似于 水蚀笔刷，每个风流都有指定的持续时间。

**推荐预置：**
将 `/b wind streams[30] radius[3] lifetime[150]` 与 `/b 30` 和 `/v air` 配合使用，在同一方向上单击几次，同时将鼠标悬停在离该区域稍远的位置。然后使用平滑工具，如 **MetaBlend** 笔刷 `/b mbb` 或 **MetaErode** 笔刷平滑预设 `/b me smooth` 来平滑该区域。

### MetaBlend Brush 混色笔刷

- Command Syntax: `/b mbb threshold[decimal] radius[integer] air/liquid`
- Example: `/b mbb radius[1] threshold[1.0] air liquid`
  
**MetaBlend** 笔刷用于混合某一区域的材料。其强度可用 `threshold` 和 `radius` 控制。 `air` 参数将切换让画笔用空气替换方块。 `liquid` 参数将切换让画笔用附近的其他图块替换液体。

参数解释：

- `radius[integer]` : 确定每个区块的混合算法半径
- `threshold[decimal]` : 混合强度
- `air` : 替换空气
- `liquid` : 替换液体

### Directional Overlay Brush 定向叠加笔刷

- Command Syntax: `/b dover depth[integer] mode`
- Example: `/b dover depth[10] all` or `/b dover depth[10] vision`

**DirectionalOverlay** 笔刷的行为与 **VoxelSniper** 中的覆盖笔刷类似，但作用方向是指定的。点击箭头的前两次可以设置方向。第三次点击则会清除方向。火药将按照当前设置的方向执行叠加。 `vision` 参数可将方向锁定在您的视线范围内。 `all` 参数将使其覆盖所有区块，而不仅仅是自然区块。

### Enhanced Spline Brush 样条笔刷

- Command Syntax: `/b es startRadius[整数] endRadius[整数] quality[整数] tension[小数] continuity[小数] bias[小数]`
- Example: `/b es startRadius[10] endRadius[3] quality[10] tension[1.0] continuity[1.0] bias[1.0]`

**描述**:
增强样条笔刷通过箭头设置的点生成TCB样条。你可以指定起始半径、结束半径和质量，也可以指定张力、连续性和偏差。设置好点后，使用火药结合你指定的`/v`材料来设置样条。

**推荐预设**:

- `/b es startRadius[10] endRadius[0] quality[10] tension[0] continuity[0] bias[0]`
这可以让你根据设置的点获得一个光滑的螺旋锥形。

- `/b es startRadius[10] endRadius[10] quality[10] tension[0] continuity[0] bias[0]`
这可以让你获得一个漂亮的管状形状。


### MetaSnow Brush 雪笔刷

- Command Syntax: `/b ms radius[整数] height[整数] -d/distance -t/terrain -s/smooth`

- Example: `/b ms radius[2] height[1] -s` 或 `/b ms radius[2] height[1] smooth`

**描述**:
MetaSnow笔刷非常适合创建平滑流畅的雪景。使用箭头可以将雪应用到地形表面，使用火药则可以平滑现有的雪。`radius`参数决定每个方块操作的平滑算法半径。数值越高，平滑效果越显著；数值越低，效果越轻微。`height`参数决定笔刷增加的雪高度，但不影响火药功能。`-d`、`-t`和`-s`参数分别用于调整箭头基于距离的雪强度、使平滑算法忽略地形以及启用箭头操作后的平滑。火药仅对笔刷范围内的雪进行平滑处理。

**推荐预设**:

`/b ms radius[5] height[0] distance smooth`
这个预设适合打造流畅的雪丘。