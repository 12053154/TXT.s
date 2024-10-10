addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)

  if (url.pathname === '/novel') {
    // 小说的章节内容
    const chapters = [
      '这是第一章的内容......',
      '这是第二章的内容......'
    ]

    const chapter = url.searchParams.get('chapter') || 0
    const chapterContent = chapters[chapter]

    return new Response(chapterContent, {
      headers: { 'content-type': 'text/plain; charset=utf-8' }
    })
  }

  // 返回 HTML 页面
  const html = `
    <!DOCTYPE html>
    <html lang="zh-CN">
    <head>
      <meta charset="UTF-8">
      <title>TXT 小说阅读器</title>
    </head>
    <body>
      <h1>TXT 小说阅读器</h1>
      <div id="content"></div>
      <script>
        async function loadChapter(chapter) {
          const response = await fetch('/novel?chapter=' + chapter)
          const text = await response.text()
          document.getElementById('content').innerText = text
        }

        let currentChapter = 0
        loadChapter(currentChapter)

        document.body.addEventListener('click', () => {
          currentChapter++
          loadChapter(currentChapter)
        })
      </script>
    </body>
    </html>
  `

  return new Response(html, {
    headers: { 'content-type': 'text/html; charset=utf-8' }
  })
}
