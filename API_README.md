# DSA Tutor API 服务部署说明

## 概述

本项目包含一个基于 DeepSeek 的智能答疑 API 服务，可以为前端 AI 助手提供更智能的回答。

## 快速开始

### 1. 安装依赖

```bash
pip install -r requirements.txt
```

### 2. 启动服务

```bash
python api_server.py
```

服务将在 `http://localhost:9000` 上运行。

## API 接口

### POST /api/chat

发送聊天消息，获取 AI 回答。

**请求体：**
```json
{
    "message": "什么是二分查找？",
    "history": [
        {"role": "user", "content": "你好"},
        {"role": "assistant", "content": "你好！有什么可以帮助你的？"}
    ]
}
```

**响应：**
```json
{
    "success": true,
    "message": "二分查找是一种...",
    "model": "deepseek-v3-2-251201"
}
```

### GET /api/health

健康检查接口。

**响应：**
```json
{"status": "ok"}
```

## 前端配置

在前端 `assets/js/ai-assistant.js` 中修改 API 地址：

```javascript
const API_URL = 'http://your-api-domain.com/api/chat';
const USE_API = true;  // 设为 true 启用 API
```

## 部署方式

### 本地开发

```bash
python api_server.py
```

### 使用 Gunicorn (生产环境)

```bash
pip install gunicorn
gunicorn -w 2 -b 0.0.0.0:9000 api_server:app
```

### 使用 Docker

```dockerfile
FROM python:3.9
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY api_server.py .
EXPOSE 9000
CMD ["python", "api_server.py"]
```

## 环境变量

| 变量名 | 说明 | 默认值 |
|--------|------|--------|
| PORT | 服务端口 | 9000 |
| OPENAI_API_KEY | API密钥 | - |
| MODEL | 使用的模型 | deepseek-v3-2-251201 |

## 注意事项

1. API 服务需要网络连接来调用 LLM
2. 建议配置反向代理（如 Nginx）来处理 HTTPS
3. 可以添加限流和认证来保护 API
4. 对话历史保存在内存中，重启后会清空
