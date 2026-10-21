import React from 'react';
import DocRootLayout from '@theme-original/DocRoot/Layout';
import MobileDocsFab from '@site/src/components/MobileDocsFab';

/**
 * 在文档布局内挂载移动端目录浮窗。
 * 这里位于 DocsSidebarProvider 内部，组件才能读取真实侧边栏数据。
 */
export default function DocRootLayoutWrapper(props) {
  return (
    <>
      <DocRootLayout {...props} />
      <MobileDocsFab />
    </>
  );
}
