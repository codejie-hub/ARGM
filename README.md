# Affordance-Guided Robotic Grasping via Multimodal LLM Reasoning — Project Page

本项目页为 GitHub Pages 风格的学术论文展示。包含标题、作者、摘要、方法流程、实验视频、对比视频和 BibTeX 引用。

## 目录结构
- `index.html`
- `assets/css/style.css`
- `assets/js/main.js`
- `assets/img/pipeline-placeholder.png`（用你自己的流程图替换）
- `assets/videos/*.mp4`（实验与对比视频）
- `.nojekyll`（避免 Jekyll 处理静态资源）

## 本地预览
直接双击 `index.html` 用浏览器打开即可。

## 部署到 GitHub Pages
1. 在 GitHub 创建一个新仓库（例如 `ARGM-ProjectPage`）。
2. 推送代码到仓库 `main` 分支：
   - `git init`
   - `git add .`
   - `git commit -m "Add project page"`
   - `git branch -M main`
   - `git remote add origin https://github.com/yourname/ARGM-ProjectPage.git`
   - `git push -u origin main`
3. 进入 GitHub 仓库的 `Settings -> Pages`：
   - 在 `Source` 选择 `Deploy from a branch`
   - 选择分支 `main`，目录选 `/root`
   - 保存，等待几分钟生成页面。
4. 页面地址一般为 `https://yourname.github.io/ARGM-ProjectPage/`。

如需自定义域名，在 `Pages` 中设置 `Custom domain` 并在仓库根目录添加 `CNAME` 文件。