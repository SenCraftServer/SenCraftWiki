import React from 'react';
import ThemeRoot from '@theme-original/Root';
import MobileSidebarFloat from '../components/MobileSidebarFloat';

export default function Root({ children, ...props }) {
  return (
    <ThemeRoot {...props}>
      <MobileSidebarFloat />
      {children}
    </ThemeRoot>
  );
}
