// 私有财务页面不写入离线缓存，防止退出登录后暴露账目。
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',event=>event.waitUntil(self.clients.claim()));
self.addEventListener('fetch',event=>{
  if(event.request.mode==='navigate')event.respondWith(fetch(event.request).catch(()=>new Response('<!doctype html><html lang="zh-CN"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>三人账本</title><body style="font-family:system-ui;background:#f5f6f8;padding:50px 24px;text-align:center;color:#52657e"><h1>当前没有网络</h1><p>联网后再打开共享账本，确保看到最新数据。</p><button onclick="location.reload()" style="padding:12px 24px;border:0;border-radius:12px;background:#273443;color:white">重新连接</button></body></html>',{headers:{'Content-Type':'text/html;charset=utf-8'}})));
});
