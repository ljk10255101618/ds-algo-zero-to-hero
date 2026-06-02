// ============================================
// DSATutor AI 学习助手 - 前端交互逻辑
// ============================================

// AI 知识库 - 本地问答引擎 (离线可用)
const AI_KNOWLEDGE_BASE = {
    "array": {
        keywords: ["数组", "array", "Array"],
        answer: `**数组 (Array)** 是最基础的数据结构之一。

## 核心概念
- 内存中连续存储的相同类型元素的集合
- 通过索引 O(1) 随机访问
- 插入/删除操作 O(n) 需要移动元素

## 时间复杂度
| 操作 | 时间复杂度 |
|:---|:---:|
| 访问 | O(1) |
| 搜索 | O(n) |
| 插入 | O(n) |
| 删除 | O(n) |

## 适用场景
- 需要频繁随机访问数据
- 数据量相对固定，不频繁增删
- 缓存友好 (空间局部性)

## 相关题目
- 两数之和 (LeetCode 1)
- 最大子数组和 (LeetCode 53)
- 合并两个有序数组 (LeetCode 88)`
    },
    "linked-list": {
        keywords: ["链表", "linked list", "linked-list"],
        answer: `**链表 (Linked List)** 是一种动态数据结构。

## 核心概念
- 元素节点 (Node) 通过指针链接
- 不需要连续内存，动态大小
- 插入/删除 O(1)，但查找 O(n)

## 类型
- **单向链表**: 每个节点只有 next 指针
- **双向链表**: 有 prev 和 next 指针
- **循环链表**: 尾节点指向头节点

## 对比数组
| 特性 | 数组 | 链表 |
|:---|:---:|:---:|
| 随机访问 | O(1) | O(n) |
| 插入头部 | O(n) | O(1) |
| 内存 | 连续 | 分散 |
| 缓存友好 | ✅ | ❌ |

## 关键技巧
- 快慢指针判环
- 虚拟头节点简化边界
- 递归反转链表`
    },
    "stack": {
        keywords: ["栈", "stack", "Stack"],
        answer: `**栈 (Stack)** — 先进后出 (LIFO) 结构。

## 核心操作
- **push**: 入栈 O(1)
- **pop**: 出栈 O(1)
- **peek/top**: 查看栈顶 O(1)

## 现实类比
🥞 叠盘子 — 最后放上去的盘子最先被拿走

## 经典应用
- **函数调用栈**: 递归函数调用管理
- **括号匹配**: 检查 (), [], {} 是否匹配
- **表达式求值**: 中缀转后缀表达式
- **浏览器的后退**: 页面历史栈
- **撤销操作**: 编辑器 Ctrl+Z

## 相关题目
- 有效的括号 (LeetCode 20)
- 最小栈 (LeetCode 155)
- 每日温度 (LeetCode 739)`
    },
    "queue": {
        keywords: ["队列", "queue", "Queue"],
        answer: `**队列 (Queue)** — 先进先出 (FIFO) 结构。

## 核心操作
- **enqueue**: 入队 O(1)
- **dequeue**: 出队 O(1)
- **front**: 查看队首 O(1)

## 现实类比
🏪 排队买奶茶 — 先来的先服务

## 类型
- **普通队列**: FIFO 基本队列
- **双端队列 (Deque)**: 两端都可插入删除
- **优先队列**: 基于堆实现，优先级高的先出
- **循环队列**: 利用数组空间，避免浪费

## 经典应用
- BFS 广度优先搜索
- 任务调度/打印队列
- 消息队列 / 缓冲
- 滑动窗口

## 栈 vs 队列
| | 栈 | 队列 |
|:---|:---:|:---:|
| 原则 | LIFO | FIFO |
| 类比 | 叠盘子 | 排队 |
| BFS/DFS | DFS用栈 | BFS用队列 |`
    },
    "binary-tree": {
        keywords: ["二叉树", "binary tree", "binary-tree"],
        answer: `**二叉树 (Binary Tree)** — 每个节点最多两个子节点。

## 核心概念
- **根节点**: 树的起始节点
- **叶子节点**: 没有子节点的节点
- **深度**: 从根到该节点的层数
- **高度**: 从该节点到最远叶子的层数

## 遍历方式
| 方法 | 顺序 | 用途 |
|:---|:---|:---|
| 前序 | 根→左→右 | 复制树 |
| 中序 | 左→根→右 | BST有序输出 |
| 后序 | 左→右→根 | 删除树 |
| 层序 | 逐层遍历 | BFS |

## 类型
- **满二叉树**: 所有节点都有0或2个子节点
- **完全二叉树**: 除最后一层外全满，叶子靠左
- **二叉搜索树 (BST)**: 左<根<右
- **平衡二叉树**: 左右子树高度差≤1

## 关键技巧
- 递归是最自然的遍历方式
- 层序遍历用队列 (BFS)
- 序列化与反序列化`
    },
    "bst": {
        keywords: ["二叉搜索树", "BST", "binary search tree"],
        answer: `**二叉搜索树 (BST)** — 左子节点 < 根节点 < 右子节点。

## 核心性质
- 左子树所有节点值 < 根节点值
- 右子树所有节点值 > 根节点值
- 中序遍历得到递增序列

## 操作复杂度
| 操作 | 平均 | 最差 |
|:---|:---:|:---:|
| 搜索 | O(log n) | O(n) |
| 插入 | O(log n) | O(n) |
| 删除 | O(log n) | O(n) |

> 最差情况发生在树退化为链表时(如插入有序数据)

## 改进方案
- **AVL树**: 严格平衡，高度差≤1
- **红黑树**: 近似平衡，调整更少

## 相关题目
- 验证二叉搜索树 (LeetCode 98)
- 二叉搜索树的最近公共祖先 (LeetCode 235)
- 将有序数组转换为BST (LeetCode 108)`
    },
    "quick-sort": {
        keywords: ["快速排序", "快排", "quick sort", "quick-sort"],
        answer: `**快速排序 (Quick Sort)** — 分治思想的典范。

## 核心思想
1. 选择一个 pivot (基准)
2. 分区: 比 pivot 小的放左边，大的放右边
3. 递归排序左右两边

## 时间复杂度
| 情况 | 时间复杂度 |
|:---|:---:|
| 平均 | O(n log n) |
| 最好 | O(n log n) |
| 最差 | O(n²) |

> 最差情况发生在每次选到最小/最大元素作为pivot

## 空间复杂度
- O(log n) — 递归栈空间 (原地排序)

## 代码实现
\`\`\`python
def quick_sort(arr, low, high):
    if low < high:
        pi = partition(arr, low, high)
        quick_sort(arr, low, pi - 1)
        quick_sort(arr, pi + 1, high)

def partition(arr, low, high):
    pivot = arr[high]  # 选最后一个
    i = low - 1
    for j in range(low, high):
        if arr[j] <= pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    arr[i+1], arr[high] = arr[high], arr[i+1]
    return i + 1
\`\`\`

## 优化
- 随机选 pivot
- 三数取中法
- 小数组切换插入排序`
    },
    "merge-sort": {
        keywords: ["归并排序", "merge sort", "merge-sort"],
        answer: `**归并排序 (Merge Sort)** — 稳定、O(n log n) 的排序算法。

## 核心思想
1. **分解**: 将数组递归分成两半
2. **排序**: 对两半分别排序
3. **合并**: 合并两个有序数组

## 复杂度
- 时间: O(n log n) — 最好/最差/平均都一样
- 空间: O(n) — 需要额外数组存储

## 代码实现
\`\`\`python
def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i]); i += 1
        else:
            result.append(right[j]); j += 1
    result.extend(left[i:])
    result.extend(right[j:])
    return result
\`\`\`

## 快排 vs 归并
| 特性 | 快排 | 归并 |
|:---|:---:|:---:|
| 稳定性 | 不稳定 | 稳定 |
| 空间 | O(log n) | O(n) |
| 最差 | O(n²) | O(n log n) |
| 缓存友好 | ✅ | ❌ |`
    },
    "hash-table": {
        keywords: ["哈希表", "hash table", "hashmap", "HashMap"],
        answer: `**哈希表 (Hash Table)** — 键值对存储，O(1) 时间复杂度。

## 核心概念
- 通过哈希函数将 key 映射到数组索引
- 理想的哈希函数: 快速计算、均匀分布

## 哈希冲突解决
1. **链地址法**: 每个槽位挂一个链表
2. **开放地址法**: 冲突时找下一个空位
   - 线性探测: +1, +2, +3...
   - 二次探测: +1², +2², +3²...

## 复杂度
| 操作 | 平均 | 最差 |
|:---|:---:|:---:|
| 查找 | O(1) | O(n) |
| 插入 | O(1) | O(n) |
| 删除 | O(1) | O(n) |

> 最差情况: 所有 key 哈希到同一个位置

## 负载因子
- 元素数量 / 槽位总数
- 超过阈值 (通常0.75) 时扩容 rehash
- 空间换时间的典型例子

## 相关题目
- 两数之和 (LeetCode 1)
- 最长连续序列 (LeetCode 128)
- 字母异位词分组 (LeetCode 49)`
    },
    "graph": {
        keywords: ["图", "graph", "Graph", "图论"],
        answer: `**图 (Graph)** — 顶点 (Vertex) 和边 (Edge) 的集合。

## 核心概念
- **有向图 vs 无向图**: 边是否有方向
- **权重图**: 边带有权重值
- **连通图**: 任意两点可达
- **环**: 从一个顶点出发能回到自身

## 表示方式
| 方式 | 空间 | 判断边 | 遍历邻居 |
|:---|:---:|:---:|:---:|
| 邻接矩阵 | O(V²) | O(1) | O(V) |
| 邻接表 | O(V+E) | O(度) | O(度) |

## 基本遍历
\`\`\`python
# BFS - 用队列
def bfs(graph, start):
    visited = set()
    queue = [start]
    while queue:
        node = queue.pop(0)
        if node not in visited:
            visited.add(node)
            queue.extend(graph[node] - visited)
    return visited

# DFS - 用栈 (或递归)
def dfs(graph, start, visited=None):
    if visited is None:
        visited = set()
    visited.add(start)
    for neighbor in graph[start] - visited:
        dfs(graph, neighbor, visited)
    return visited
\`\`\`

## 经典算法
- **最短路径**: Dijkstra, Bellman-Ford
- **最小生成树**: Kruskal, Prim
- **拓扑排序**: Kahn算法, DFS
- **强连通分量**: Tarjan, Kosaraju`
    },
    "heap": {
        keywords: ["堆", "heap", "Heap", "优先队列", "priority queue"],
        answer: `**堆 (Heap)** — 特殊的完全二叉树，用于实现优先队列。

## 性质
- **最大堆**: 父节点 ≥ 子节点 (根最大)
- **最小堆**: 父节点 ≤ 子节点 (根最小)
- 完全二叉树: 除最后一层外全满，叶子靠左

## 操作复杂度
| 操作 | 时间复杂度 |
|:---|:---:|
| 建堆 | O(n) |
| 插入 | O(log n) |
| 删除堆顶 | O(log n) |
| 获取堆顶 | O(1) |

## 代码 (最小堆)
\`\`\`python
import heapq
heap = []  # Python默认最小堆
heapq.heappush(heap, 5)
heapq.heappush(heap, 2)
heapq.heappush(heap, 8)
smallest = heapq.heappop(heap)  # 2
\`\`\`

## 应用场景
- **堆排序**: 堆顶取最值
- **Top K问题**: 用大小为K的最小堆
- **Dijkstra算法**: 取最短距离节点
- **合并K个有序链表**: 堆存链表头`
    },
    "binary-search": {
        keywords: ["二分搜索", "二分查找", "binary search", "binary-search"],
        answer: `**二分搜索 (Binary Search)** — 在有序数组中 O(log n) 查找。

## 核心思想
每次将搜索范围缩小一半:
1. 取中间元素 mid
2. 比较 target 与 arr[mid]
3. 根据比较结果缩小范围

## 代码实现
\`\`\`python
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = left + (right - left) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1  # 未找到
\`\`\`

## 三种模板
1. **标准二分**: while left <= right
2. **找左边界**: while left < right, right = mid
3. **找右边界**: while left < right, left = mid + 1

## 前置条件
- ✅ 数组必须有序
- ✅ 支持随机访问 (数组)

## 相关题目
- 搜索旋转排序数组 (LeetCode 33)
- 在排序数组中查找元素的第一个和最后一个位置 (LeetCode 34)`
    },
    "dp": {
        keywords: ["动态规划", "DP", "dynamic programming", "Dynamic Programming"],
        answer: `**动态规划 (Dynamic Programming)** — 将复杂问题分解为子问题。

## 核心思想
1. **最优子结构**: 大问题的最优解包含子问题的最优解
2. **重叠子问题**: 子问题被重复计算 → 记忆化
3. **状态转移方程**: 定义状态之间的关系

## 解题步骤
1. 定义状态 (dp[i] 的含义)
2. 找到状态转移方程
3. 确定初始条件/base case
4. 确定遍历顺序

## 经典题目
| 题目 | 状态定义 | 复杂度 |
|:---|:---|:---:|
| 斐波那契 | dp[i] = dp[i-1] + dp[i-2] | O(n) |
| 爬楼梯 | dp[i] = dp[i-1] + dp[i-2] | O(n) |
| 背包问题 | dp[i][w] = max(dp[i-1][w], dp[i-1][w-wi]+vi) | O(nW) |
| 最长递增子序列 | dp[i] = max(dp[j]+1) | O(n²) |

## 分类
- **0/1 背包**: 每个物品选或不选
- **完全背包**: 每个物品无限选
- **区间DP**: dp[i][j] 表示区间 [i,j]
- **树形DP**: 在树上做DP

## 对比贪心
> DP 穷举所有可能 → 保证最优
> 贪心 只选当前最优 → 不一定最优`
    },
    "complexity": {
        keywords: ["复杂度", "时间复杂度", "空间复杂度", "Big O", "大O"],
        answer: `**复杂度分析** — 衡量算法效率的核心工具。

## 常见时间复杂度

| 复杂度 | 名称 | 示例算法 |
|:---|:---|:---|
| O(1) | 常数阶 | 数组随机访问 |
| O(log n) | 对数阶 | 二分搜索 |
| O(n) | 线性阶 | 遍历数组 |
| O(n log n) | 线性对数 | 归并/快排 |
| O(n²) | 平方阶 | 冒泡/选择 |
| O(2ⁿ) | 指数阶 | 斐波那契递归 |
| O(n!) | 阶乘阶 | 全排列 |

## 如何分析
1. **只看最高阶**: O(n² + n) = O(n²)
2. **不考虑常数**: O(2n) = O(n)
3. **多个数据规模**: O(m + n)

## 空间复杂度
- 原地排序 O(1): 冒泡/选择/插入/堆/快排
- 需要额外空间 O(n): 归并排序
- 递归栈空间: 快排 O(log n), 归并 O(log n)

## 大O速查表
\`\`\`
n=10:   O(n!) = 3.6M   ❌
n=100:  O(n²) = 10K    ⚠️
n=1000: O(n²) = 1M     🐢
n=10⁶:  O(n) = 1M      ✅
n=10⁶:  O(n log n) ≈ 20M ✅
\`\`\``
    },
    "recursion": {
        keywords: ["递归", "recursion", "Recursion"],
        answer: `**递归 (Recursion)** — 函数调用自身的编程技巧。

## 三要素
1. **终止条件**: 不再递归的条件
2. **递推关系**: 问题分解为更小的子问题
3. **返回值**: 每层递归返回结果

## 代码模板
\`\`\`python
def recursion(参数):
    # 1. 终止条件
    if 终止条件:
        return 结果
    
    # 2. 处理当前层
    处理逻辑
    
    # 3. 递归到下一层
    result = recursion(更新后的参数)
    
    # 4. 处理返回结果
    return 最终结果
\`\`\`

## 递归 vs 迭代
| | 递归 | 迭代 |
|:---|:---|:---|
| 代码可读性 | 高 | 中 |
| 性能 | 有函数调用开销 | 更快 |
| 栈溢出风险 | 有 | 无 |
| 适用场景 | 树/分治/回溯 | 线性遍历 |

## 经典递归
- 斐波那契数列
- 树的遍历
- 汉诺塔
- 排列组合`
    },
    "bfs-dfs": {
        keywords: ["BFS", "DFS", "bfs", "dfs", "广度优先", "深度优先"],
        answer: `**BFS 与 DFS** — 两种基本的图/树遍历策略。

## 广度优先搜索 (BFS)
- **数据结构**: 队列 (Queue)
- **特点**: 按层遍历，找到最短路径
- **适用**: 最短路径、层序遍历、拓扑排序

\`\`\`python
def bfs(root):
    queue = [root]
    visited = {root}
    while queue:
        node = queue.pop(0)
        process(node)
        for neighbor in node.neighbors:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)
\`\`\`

## 深度优先搜索 (DFS)
- **数据结构**: 栈 (Stack) 或递归
- **特点**: 一条路走到底，回溯
- **适用**: 路径搜索、回溯法、连通性

\`\`\`python
def dfs(node, visited):
    visited.add(node)
    process(node)
    for neighbor in node.neighbors:
        if neighbor not in visited:
            dfs(neighbor, visited)
\`\`\`

## 对比
| | BFS | DFS |
|:---|:---:|:---:|
| 空间 | O(width) | O(depth) |
| 最短路径 | ✅ | ❌ |
| 记忆化 | 需要visited | 需要visited |
| 实现难度 | 中 | 低(递归) |`
    }
};

// ========== AI 助手状态管理 ==========
let isPanelOpen = false;
let messageHistory = [];

// ========== 切换面板 ==========
function toggleAIPanel() {
    const panel = document.getElementById('aiChatPanel');
    const btn = document.getElementById('aiToggleBtn');
    isPanelOpen = !isPanelOpen;
    
    if (isPanelOpen) {
        panel.classList.add('active');
        btn.classList.add('active');
        document.getElementById('aiBadge').style.display = 'none';
        // 聚焦输入框
        setTimeout(() => document.getElementById('aiChatInput').focus(), 300);
    } else {
        panel.classList.remove('active');
        btn.classList.remove('active');
    }
}

// ========== 清除对话 ==========
function clearChat() {
    const messagesEl = document.getElementById('aiChatMessages');
    messagesEl.innerHTML = `
        <div class="ai-message ai-bot-message">
            <div class="ai-message-avatar">🤖</div>
            <div class="ai-message-content">
                <p>👋 对话已清除！有什么新问题吗？</p>
            </div>
        </div>
    `;
    messageHistory = [];
}

// ========== 添加消息到聊天 ==========
function addMessage(content, isUser = false) {
    const messagesEl = document.getElementById('aiChatMessages');
    const div = document.createElement('div');
    div.className = `ai-message ${isUser ? 'ai-user-message' : 'ai-bot-message'}`;
    div.style.opacity = '0';
    
    const avatar = isUser ? '👤' : '🤖';
    
    // 处理 Markdown 简单渲染
    let htmlContent = content
        .replace(/### (.+)/g, '<h4 style="margin:12px 0 6px;color:var(--ai-amber);">$1</h4>')
        .replace(/## (.+)/g, '<h3 style="margin:14px 0 8px;color:var(--ai-cyan);font-size:15px;">$1</h3>')
        .replace(/# (.+)/g, '<h2 style="margin:16px 0 10px;color:var(--ai-purple);font-size:17px;">$1</h2>')
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        .replace(/`([^`]+)`/g, '<code>$1</code>')
        .replace(/\n\s*\- (.+)/g, '<br>• $1')
        .replace(/\n\s*\* (.+)/g, '<br>• $1')
        .replace(/\|(.+)\|/g, '')
        .replace(/:---\|/g, '')
        .replace(/\n{2,}/g, '</p><p>')
        .replace(/```(\w*)\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>')
        .replace(/\n/g, '<br>');
    
    // 包装在 p 标签中
    htmlContent = `<p>${htmlContent}</p>`;
    
    div.innerHTML = `
        <div class="ai-message-avatar">${avatar}</div>
        <div class="ai-message-content">${htmlContent}</div>
    `;
    
    messagesEl.appendChild(div);
    messageHistory.push({ role: isUser ? 'user' : 'assistant', content });
    
    // 淡入动画
    requestAnimationFrame(() => { div.style.opacity = '1'; div.style.transition = 'opacity 0.3s'; });
    
    // 滚动到底部
    setTimeout(() => { messagesEl.scrollTop = messagesEl.scrollHeight; }, 50);
    
    // 渲染公式
    try { if (window.renderMathInElement) renderMathInElement(div.querySelector('.ai-message-content')); } catch(e) {}
}

// ========== 显示打字指示器 ==========
function showTyping() {
    const messagesEl = document.getElementById('aiChatMessages');
    const div = document.createElement('div');
    div.className = 'ai-message ai-bot-message';
    div.id = 'typingIndicator';
    div.innerHTML = `
        <div class="ai-message-avatar">🤖</div>
        <div class="ai-message-content">
            <div class="ai-typing-indicator">
                <span></span><span></span><span></span>
            </div>
        </div>
    `;
    messagesEl.appendChild(div);
    messagesEl.scrollTop = messagesEl.scrollHeight;
}

function hideTyping() {
    const el = document.getElementById('typingIndicator');
    if (el) el.remove();
}

// ========== 智能匹配知识库 ==========
function findKnowledge(query) {
    const q = query.toLowerCase();
    
    // 遍历知识库，找到最佳匹配
    let bestMatch = null;
    let bestScore = 0;
    
    for (const [key, item] of Object.entries(AI_KNOWLEDGE_BASE)) {
        let score = 0;
        for (const kw of item.keywords) {
            if (q.includes(kw.toLowerCase())) {
                score += kw.length;
            }
        }
        // 额外匹配
        if (q.includes("排序") && (key === "quick-sort" || key === "merge-sort")) score += 5;
        if (q.includes("遍历") && key === "binary-tree") score += 5;
        if (q.includes("搜索") && key === "binary-search") score += 5;
        
        if (score > bestScore) {
            bestScore = score;
            bestMatch = item;
        }
    }
    
    // 组合查询匹配
    if (bestScore < 3) {
        // 处理组合问题
        if (q.includes("栈") && q.includes("队列")) {
            return `## 栈 vs 队列

| 特性 | 栈 (Stack) | 队列 (Queue) |
|:---|:---:|:---:|
| 原则 | **LIFO** 后进先出 | **FIFO** 先进先出 |
| 插入删除 | 同一端 (栈顶) | 两端 (队尾入, 队首出) |
| 类比 | 🥞 叠盘子 | 🏪 排队 |
| BFS/DFS | DFS 用栈 | BFS 用队列 |
| 经典应用 | 括号匹配/函数调用 | 任务调度/滑动窗口 |

**记忆技巧**:
- 栈像叠盘子 → 后放上去的先拿走
- 队列像排队 → 先来的先服务`;
        }
        
        if (q.includes("时间复杂") || q.includes("big o") || q.includes("大o")) {
            return AI_KNOWLEDGE_BASE.complexity.answer;
        }
        
        if (q.includes("递归")) {
            return AI_KNOWLEDGE_BASE.recursion.answer;
        }
        
        if ((q.includes("bfs") || q.includes("dfs")) && (q.includes("区别") || q.includes("对比"))) {
            return AI_KNOWLEDGE_BASE["bfs-dfs"].answer;
        }
        
        // 默认回答
        return `## 💡 你可以问我这些问题：

### 数据结构基础
- **"解释一下数组"** — 最基础的数据结构
- **"链表和数组有什么区别？"**
- **"栈和队列有什么区别？"**
- **"什么是二叉树？"**
- **"详细介绍哈希表"**

### 排序算法
- **"快速排序的原理是什么？"**
- **"归并排序和快排的区别"**
- **"冒泡排序的时间复杂度"**

### 算法思维
- **"什么是动态规划？"**
- **"BFS和DFS有什么区别？"**
- **"解释递归的三要素"**
- **"时间复杂度怎么分析？"**

直接在输入框提问，我会为你详细解答！`;
    }
    
    return bestMatch.answer;
}

// ========== 发送消息 ==========
function sendMessage() {
    const input = document.getElementById('aiChatInput');
    const text = input.value.trim();
    if (!text) return;
    
    // 添加用户消息
    addMessage(text, true);
    input.value = '';
    input.style.height = 'auto';
    
    // 显示打字中
    showTyping();
    
    // 模拟思考延迟（真实感）
    const delay = 500 + Math.random() * 1000;
    setTimeout(() => {
        hideTyping();
        const answer = findKnowledge(text);
        addMessage(answer);
    }, delay);
}

// ========== 输入框事件 ==========
function handleInputKeydown(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        sendMessage();
    }
    
    // 自动调整高度
    const input = event.target;
    input.style.height = 'auto';
    input.style.height = Math.min(input.scrollHeight, 80) + 'px';
}

// ========== 键盘快捷键 ==========
document.addEventListener('keydown', function(e) {
    // Ctrl+/ 或 Cmd+/ 切换面板
    if ((e.ctrlKey || e.metaKey) && e.key === '/') {
        e.preventDefault();
        toggleAIPanel();
    }
    
    // Escape 关闭面板
    if (e.key === 'Escape' && isPanelOpen) {
        toggleAIPanel();
    }
});