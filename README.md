# CV React JS APP

使用 React、TypeScript 和 Vite 建構的現代化響應式個人履歷網站。具備簡潔設計、深色/淺色主題切換及 PDF 匯出功能。

🌐 **線上展示**: [https://cv.justudio.net/](https://cv.justudio.net/)

## 功能特色

- **響應式設計**：針對所有裝置尺寸和螢幕解析度進行最佳化
- **主題切換**：深色與淺色模式無縫切換，並可持久保存使用者偏好
- **PDF 匯出**：使用 html2canvas 與 jsPDF 一鍵下載履歷 PDF 檔案
- **流暢導航**：段落間平滑滾動，並自動追蹤當前活動區段
- **現代化介面**：簡潔專業的介面設計，搭配流暢動畫與過渡效果
- **效能最佳化**：採用 Vite 打造，提供快速開發體驗與最佳化的生產環境建置

## 技術棧

- **前端框架**：React 18.3
- **程式語言**：TypeScript 5.7
- **建置工具**：Vite 6.0
- **程式碼品質**：ESLint 9 + Prettier 3
- **PDF 生成**：jsPDF 4 + html2canvas
- **樣式設計**：CSS3 搭配 CSS Variables 實現主題切換

## 專案結構

```
cv-react-ts-app/
├── src/
│   ├── components/
│   │   ├── Header.tsx       # 導航標題列與主題切換按鈕
│   │   ├── Hero.tsx         # 首頁主視覺區塊
│   │   ├── About.tsx        # 關於我區塊
│   │   ├── Skills.tsx       # 技能展示區塊
│   │   ├── Projects.tsx     # 專案作品集
│   │   ├── Interests.tsx    # 個人興趣
│   │   └── Contact.tsx      # 聯絡資訊
│   ├── utils/
│   │   └── pdfGenerator.ts  # PDF 生成工具
│   ├── App.tsx              # 主應用程式元件
│   ├── App.css              # 全域樣式
│   └── main.tsx             # 應用程式進入點
├── public/                  # 靜態資源
├── index.html              # HTML 模板
└── package.json            # 專案相依套件

```

## 開始使用

### 環境需求

- Node.js (v18 或更高版本)
- npm 或 yarn

### 安裝步驟

1. 複製專案：
```bash
git clone <repository-url>
cd cv-react-ts-app
```

2. 安裝相依套件：
```bash
npm install
```

3. 啟動開發伺服器：
```bash
npm run dev
```

4. 開啟瀏覽器並前往 `http://localhost:5173`

## 可用指令

| 指令 | 說明 |
|------|------|
| `npm run dev` | 啟動開發伺服器並開啟熱重載功能 |
| `npm run build` | 編譯 TypeScript 並建置生產環境版本 |
| `npm run preview` | 在本地預覽生產環境建置結果 |
| `npm run lint` | 執行 ESLint 檢查程式碼品質 |
| `npm run format` | 使用 Prettier 格式化程式碼 |
| `npm run format:check` | 檢查程式碼格式是否符合規範（不修改檔案） |

## 建置生產環境版本

建置生產環境應用程式：

```bash
npm run build
```

最佳化後的檔案將會產生在 `dist/` 目錄中，可直接用於部署。

## 部署

本專案部署於自訂網域的靜態網站託管服務。生產環境建置結果可部署至任何靜態網站託管服務，例如：

- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront
- Cloudflare Pages

## 核心功能

### 主題系統
應用程式實作了持久化的主題系統，具備以下特性：
- 將使用者偏好儲存於 localStorage
- 透過 CSS 自訂屬性套用主題
- 提供主題間流暢的過渡效果

### PDF 匯出
使用者可下載履歷 PDF 檔案，具備：
- 使用 html2canvas 進行高品質渲染
- 透過 jsPDF 進行適當的頁面格式化
- 針對列印與數位閱讀最佳化

### 滾動行為
- 段落間平滑滾動
- 導航列自動標示當前區段
- 「回到頂部」按鈕便於快速導航

## 瀏覽器支援

- Chrome（最新版本）
- Firefox（最新版本）
- Safari（最新版本）
- Edge（最新版本）

## 授權

Copyright © 2026 L.J.Y. 版權所有。

## 聯絡方式

如有任何疑問，請造訪 [https://cv.justudio.net/](https://cv.justudio.net/)
