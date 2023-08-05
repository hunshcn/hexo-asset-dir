# hexo-asset-dir

make markdown and asset in the same dir

## Usage
```bash
npm install hexo-asset-dir --save
```

Set `post_asset_folder: true` and `new_post_name: :title/index.md` in your `_config.yml`.

tree like

```plain
_posts
├── example
   ├── image.jpg
   └── index.md
```

Just use `![image](image.jpg)` to insert `image.jpg`.
