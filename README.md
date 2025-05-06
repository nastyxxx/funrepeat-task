# 株式会社ファンリピート 技術課題
<img width="1371" alt="Screenshot 2025-05-06 at 5 06 19 PM" src="https://github.com/user-attachments/assets/69ff94f8-d688-4131-b65a-b1070e02cedc" />

## 📌 概要

このアプリケーションは、株式会社ファンリピートの技術課題に基づいて作成された React フロントエンドアプリです。
ダミーデータを使用したシンプルなログイン機能と顧客情報一覧表示機能を提供します。
※ バックエンドやデータベース連携はありません。

---

## 🛠 使用技術

* [React](https://react.dev/)
* [TypeScript](https://www.typescriptlang.org/)
* [Vite](https://vitejs.dev/)
* [Tailwind CSS](https://tailwindcss.com/)

---

## 🚀 セットアップ手順

```bash
# リポジトリをクローン
git clone https://github.com/あなたのユーザー名/funrepeat-task.git
cd funrepeat-task

# 依存パッケージをインストール
npm install

# 開発サーバーを起動
npm run dev
```

アプリケーションは `http://localhost:5173` でアクセスできます。

---

## ✅ 実装機能

### 1. ログイン画面

* ユーザーID・パスワードの入力欄
* 入力必須バリデーション
* ダミー認証後に顧客画面へ遷移

### 2. 顧客一覧画面

* 顧客のダミーデータ表示（名前・メール・電話番号・登録日）
* 名前での絞り込み検索
* 並び替え機能（名前順・登録日順）
* レスポンシブ対応（スマートフォンでも見やすい）

---

## 📂 ディレクトリ構成（簡易）

```
funrepeat-task/
├── src/
│   ├── App.tsx         # アプリ本体
│   ├── main.tsx        # エントリーポイント
│   ├── index.css       # Tailwind CSS
├── tailwind.config.js  # Tailwind 設定
├── postcss.config.js   # PostCSS 設定
├── README.md
```

---

## ✨ 参考URL

* 技術課題: [https://template-monthly-crm.bubbleapps.io/version-test/login](https://template-monthly-crm.bubbleapps.io/version-test/login)
* サンプルGitHub: [https://github.com/r-morita-fr/funrepeat\_task](https://github.com/r-morita-fr/funrepeat_task)

---

## 🧠 ChatGPT活用について

ChatGPT（GPT-4o-mini）を用いて、設計方針の検討・UI構成・エラーのデバッグ・ViteやTailwind環境の構築支援を行いました。
詳細は [`chatgpt_usage_report.pdf`](./chatgpt_usage_report.pdf) をご参照ください。
