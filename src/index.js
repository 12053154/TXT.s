// 模拟存储的小说章节数据
const chapters = {
  1: '这是第1章的内容...',
  2: '这是第2章的内容...',
  3: '这是第3章的内容...',
};

// 处理请求，输出章节内容和导航
async function handleRequest(request) {
  const url = new URL(request.url);
  const chapter = url.searchParams.get('chapter') || '1'; // 默认显示第一章
  const content = chapters[chapter] || '章节不存在。';

  // 构建 HTML 页面
  const html = `
    <!DOCTYPE html>
    <html lang="zh-CN">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>小说阅读工具 - 第${chapter}章</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; margin: 20px; }
          .chapter { margin-bottom: 40px; }
          .navigation { margin-top: 20px; }
        </style>
      </head>
      <body>
        <h1>第${chapter}章</h1>
        <div class="chapter">
          <pre>${content}</pre>
        </div>
        <div class="navigation">
          <a href="?chapter=${parseInt(chapter) - 1}">上一章</a>
          <a href="?chapter=${parseInt(chapter) + 1}">下一章</a>
        </div>
      </body>
    </html>
  `;

  return new Response(html, {
    headers: { 'content-type': 'text/html;charset=UTF-8' },
  });
}

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});
