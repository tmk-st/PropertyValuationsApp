<img src="https://img.shields.io/badge/-React-555.svg?logo=react&style=flat"><img src="https://img.shields.io/badge/-TypeScript-fff.svg?logo=typescript&style=flat"><img src="https://img.shields.io/badge/-Tailwind.css-555.svg?logo=tailwindcss&style=flat"><img src="https://img.shields.io/badge/-Vite-EEE.svg?logo=vite&style=flat"><img src="https://img.shields.io/badge/-Biome-232F3E.svg?logo=biome&style=flat"><img src="https://img.shields.io/badge/-Font Awesome-F9DC3E.svg?logo=fontawesome&style=flat"><img src="https://img.shields.io/badge/-Vercel-019733.svg?logo=vercel&style=flat">

<br />

# 不動産取引価格グラフ

関東圏の不動産取引価格（円/㎡）を2015年から2018年までのデータをもとに、グラフで表示します。
### 🔗 [不動産取引価格](https://property-valuations-app.vercel.app/)
__対象地域__：関東圏  
__取引価格の種類__：円/㎡  
__データの期間__：2015年〜2018年

## 絞り込み条件
次の条件でデータを絞り込み、価格推移を確認できます。

__場所__：茨城県、栃木県、群馬県、埼玉県、千葉県、東京都、神奈川県  
__年度__：2015年〜2018年  
__種類__：住宅地 / 商業地

## ディレクトリ構成
```
.
├── node_modules
├── public
├── src
│   ├── assets         
│   ├── components     // 機能に依存しないUIコンポーネント
│   ├── constants      // 定数
│   ├── features       // 機能固有のUIコンポーネント
│   ├── hooks          // カスタムフック
│   ├── types          // 型定義
│   ├── utils          // 共通関数
│   ├── App.css
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── .gitignore
├── biome.json
├── eslint.config.js
├── index.html
├── package.json
├── README.md
├── tailwind.config.js
├── tailwind.app.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.js
```
