"""
DSA Tutor AI API - 基于 DeepSeek 的智能答疑服务
"""
from flask import Flask, request, jsonify, g
from flask_cors import CORS
from coze_coding_dev_sdk import LLMClient
from coze_coding_utils.runtime_ctx.context import new_context
from langchain_core.messages import SystemMessage, HumanMessage, AIMessage
import os
import traceback

app = Flask(__name__)
CORS(app)

# 系统提示词 - 让AI扮演数据结构与算法导师
SYSTEM_PROMPT = """你是一位专业的数据结构与算法导师，名为"DSA Tutor"。

你的职责：
1. 回答关于数据结构与算法的问题（数组、链表、栈、队列、树、图、排序、查找、动态规划等）
2. 解释算法的原理、时间复杂度和空间复杂度
3. 提供代码示例（Python/Java/C++）
4. 分析算法题目的解题思路
5. 给出学习建议和面试技巧

回答要求：
- 使用清晰、专业的语言
- 代码要格式化，使用 ```包裹
- 复杂算法要画图解释思路
- 结合实际应用场景
- 如果是面试题，要给出多种解法
- 适当使用emoji增加趣味性

如果问题超出数据结构与算法的范围，可以友好地引导用户回到主题。"""

@app.route('/api/chat', methods=['POST'])
def chat():
    """处理聊天请求"""
    try:
        data = request.get_json()
        message = data.get('message', '')
        history = data.get('history', [])
        
        if not message:
            return jsonify({'error': '消息不能为空'}), 400
        
        # 构建消息列表
        messages = [SystemMessage(content=SYSTEM_PROMPT)]
        
        # 添加历史记录
        for msg in history[-10:]:  # 只保留最近10轮对话
            if msg['role'] == 'user':
                messages.append(HumanMessage(content=msg['content']))
            elif msg['role'] == 'assistant':
                messages.append(AIMessage(content=msg['content']))
        
        # 添加当前消息
        messages.append(HumanMessage(content=message))
        
        # 调用LLM
        ctx = new_context(method="chat")
        client = LLMClient(ctx=ctx)
        
        response = client.invoke(
            messages=messages,
            model="deepseek-v3-2-251201",  # 使用 DeepSeek 模型
            temperature=0.7,
            max_completion_tokens=4096
        )
        
        # 处理响应内容
        content = response.content
        if isinstance(content, list):
            # 如果是列表，提取文本
            text_parts = []
            for item in content:
                if isinstance(item, dict) and item.get('type') == 'text':
                    text_parts.append(item.get('text', ''))
                elif isinstance(item, str):
                    text_parts.append(item)
            content = ''.join(text_parts)
        
        return jsonify({
            'success': True,
            'message': content,
            'model': 'deepseek-v3-2-251201'
        })
        
    except Exception as e:
        traceback.print_exc()
        return jsonify({
            'success': False,
            'error': str(e),
            'message': '抱歉，服务出现了问题，请稍后再试。'
        }), 500

@app.route('/api/health', methods=['GET'])
def health():
    """健康检查"""
    return jsonify({'status': 'ok'})

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 9000))
    app.run(host='0.0.0.0', port=port, debug=False)
