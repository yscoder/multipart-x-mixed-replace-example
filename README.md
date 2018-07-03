# multipart-x-mixed-replace-example

Server push based on `multipart/x-mixed-replace`。

## 这是什么？

基于 HTTP MIME 类型的服务器推送示例。常用于流式图像视频的传输，如 MJPEG（Motion JPEG）。

这个示例是把一组帧序列图片逐帧推送达到动画的效果。

## 怎么运行？

```bash
# localhost:8090
node server
```

启动服务后浏览器打开 `test.html` 查看结果。
