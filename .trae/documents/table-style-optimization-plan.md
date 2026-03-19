# 表格组件优化计划

## 问题分析

### 问题1：表格最右侧圆角无法正常显示
**原因**：
- 当前样式在 `.theme-doc-markdown table` 上同时设置了 `border-collapse: collapse` 和 `border-radius: var(--radius-lg)`
- `border-collapse: collapse` 会导致 `border-radius` 失效，因为折叠边框模式下没有独立的角落可圆角化

**解决方案**：
- 将 `border-collapse: collapse` 改为 `border-collapse: separate`
- 添加 `border-spacing: 0` 确保边框紧邻
- 为深色模式也应用相同的修复

### 问题2：表头渐变颜色需替换为浅色背景
**当前状态**：
- 浅色模式：`background: var(--gradient-primary)` (绿色到青色渐变)
- 深色模式：`background: linear-gradient(135deg, #166534 0%, #155e75 100%)` (深绿到深青渐变)

**解决方案**：
- 浅色模式：使用浅灰色背景 `--color-gray-100`
- 深色模式：使用深灰色背景 `--color-gray-700` 或 `rgba(255,255,255,0.1)`

## 具体修改步骤

### 步骤1：修复表格圆角问题
修改 `g:\Code\SenCraftWiki\src\css\custom.css` 文件：

1. 找到 `.theme-doc-markdown table` 样式（约1692行）
   - 将 `border-collapse: collapse` 改为 `border-collapse: separate`
   - 添加 `border-spacing: 0`

2. 找到深色模式下的表格样式（约1020行附近）
   - 同样将 `border-collapse: collapse` 改为 `border-collapse: separate`
   - 添加 `border-spacing: 0`

### 步骤2：修改表头样式
1. 找到 `.theme-doc-markdown thead` 样式（约1697行）
   - 将 `background: var(--gradient-primary)` 改为 `background: var(--color-gray-100)`

2. 找到 `[data-theme='dark'] .theme-doc-markdown thead` 样式（约1023行）
   - 将渐变背景改为纯色背景 `background: var(--color-gray-700)`

3. 确保文字颜色在两种模式下都有足够对比度：
   - 浅色模式表头文字已经是白色（`color: white`），无需修改
   - 深色模式表头文字已经是白色（`color: #ffffff`），无需修改

## 预期效果

1. **圆角显示**：表格四角在所有设备和浏览器中都能正确显示 0.75rem 圆角
2. **表头背景**：
   - 浅色模式：浅灰色背景（#f3f4f6 左右）
   - 深色模式：深灰色背景
3. **文字可读性**：表头文字与背景保持白色，保证良好对比度