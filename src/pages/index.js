import React from 'react';
import Layout from '@theme/Layout';
import HomeHero from '@site/src/components/home/Hero';

export default function Home() {
  return (
    <Layout title="首页" description="SenCraft - 体验与性能兼备的 Minecraft 服务器">
      <HomeHero />
    </Layout>
  );
}
