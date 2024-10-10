登陆 Cloudflare 账户，进入 Workers 控制台。
创建一个新的 Worker。
将上述代码粘贴到 Worker 的编辑器中。
保存并部署。
（可选）使用 Workers KV 存储大文本
如果小说文件较大，你可以将文本存储在 Workers KV 中，这样可以避免将整个小说内容硬编码在 Worker 中。在 Cloudflare Dashboard 中，创建一个新的 KV 命名空间。
将小说的每个章节作为键值对存储在 KV 中。
在 Worker 脚本中，使用 KV API 获取指定章节的内容
