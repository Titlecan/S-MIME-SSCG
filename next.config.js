/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // 启用静态导出
  images: {
    unoptimized: true // 支持静态导出
  },
  
  // 国际化配置
  i18n: {
    locales: ['zh', 'en'],
    defaultLocale: 'zh'
  }
}

module.exports = nextConfig
