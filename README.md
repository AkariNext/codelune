# Codelune

オープンソースプロジェクトを紹介するサイトです

## 開発環境

動作確認環境は以下です。

- pnpm 10.5.2
- Node.js 22.14.0

実行方法

```sh
pnpm i

pnpm dev
```


## 記事の追加方法

`src/content/blog` 配下に `*.md` または `*.mdx` 形式でファイルを追加してください。

メタデータには以下が使用できます。optionalと書いてあるもの以外は必須のキーとなっています。

```yaml
---
title: 'Third post' # 記事のタイトル
description: 'Lorem ipsum dolor sit amet'  # 記事の概要
pubDate: 'Jul 22 2022'  # 記事の公開日時, 2025/4/22のような書き方もok
heroImage: '/blog-placeholder-2.jpg' # サムネイル画像の絶対パス, optional
tags: ["heart", "❤️"]  # タグ, optional
# もしくは
tags: # タグ, optional
    - heart
    - ❤️
---
```