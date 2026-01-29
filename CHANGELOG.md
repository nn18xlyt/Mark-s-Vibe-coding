# Changelog

## 1.0.1

- **视觉主题**
  - **自定义色板**：新增 `ember / moss / acid`，统一替换掉默认蓝紫系。
  - **背景质感**：加入渐变光晕 + 噪点纹理，避免纯平底。

- **布局与排版**
  - **取消模板感**：避免“Hero + 三卡片”，项目扩展为 4 个。
  - **不对称网格**：Projects / Contact 改成不等宽布局，并修复卡片空洞。
  - **宽屏留白修复**：容器改为 `mx-auto max-w-6xl`，再做轻微左偏移，避免右侧空一大片。

- **文案**
  - 全站改成更口语的短句，减少空话。

- **图标与资源**
  - **Iconify**：引入 `@iconify/react`，替换功能图标。
  - **Picsum**：项目占位图改用 `picsum.photos`。
  - **SVG**：更新 `avatar.svg` / `project-placeholder.svg` 渐变色，移除蓝紫。

- **工程**
  - 版本号更新到 `1.0.1`。
  - 移除 Google Fonts 在线 `@import`，减少国内加载风险。
