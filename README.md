# Feng Ziqian · Portfolio

在线作品集：**https://fengziqian0206.github.io/Portfolio/**

英文简历（可直接查看和下载）：**https://fengziqian0206.github.io/Portfolio/assets/Ziqian_Feng_CV.pdf**

由原始 `FengZiqian.pdf` 转换，完整保留 36 页作品及原始排版。打开链接即可上下滚动浏览，无需登录或安装阅读器。

- 项目目录可直接跳转到 7 个作品。
- 点击画面可进入放大视图，再点击「放大细节」查看高清原图。
- 放大后用滚轮、触控板或手机滑动查看局部；点击「适合屏幕」恢复全页。
- 放大视图支持上一页、下一页和 Esc 关闭。
- 页眉的 **Download CV** 可下载英文简历。

## 项目

| 作品 | PDF 页码 |
| --- | --- |
| From Signal to Civilization | 1–8 |
| Firework Ruins | 9–14 |
| Virulent Beings | 15–20 |
| Urban Heat Exposure Risk | 21–30 |
| Prophecy Mantra | 31–34 |
| The Realm of Hybridity | 35 |
| Jingmeng (Strange Dreamland) | 36 |

## 维护

这是无需构建的静态网站，使用原生 HTML、CSS 和 JavaScript，不依赖第三方 CDN。

- `index.html`：目录与页面内容。
- `styles.css`：桌面、手机与放大视图样式。
- `app.js`：目录和图片放大交互。
- `assets/pages/01.webp` 至 `36.webp`：浏览图片（最长边 1800px）。
- `assets/pages/01-large.webp` 至 `36-large.webp`：高清图片（最长边 4200px）。
- `assets/FengZiqian.pdf`：原始作品集。
- `assets/Ziqian_Feng_CV.pdf`：英文简历原始 PDF。

GitHub Pages 发布源为 `main` 分支根目录。修改文件并提交后会自动重新发布。

本地预览可在仓库目录运行 `python -m http.server 8000`，然后打开 `http://localhost:8000`。

作品及原始内容版权归 Feng Ziqian 所有。
