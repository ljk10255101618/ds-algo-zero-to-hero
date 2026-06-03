// ============================================
// DSATutor AI 学习助手 - 增强版
// 包含更丰富的知识库和智能匹配
// ============================================

// ========== 增强AI知识库 ==========
const AI_KNOWLEDGE_BASE = {
    // ----- 基础数据结构 -----
    "array": {
        keywords: ["数组", "array", "Array", "一维数组", "二维数组", "矩阵"],
        answer: `## 📊 数组 (Array)

数组是最基础的数据结构，在内存中连续存储相同类型的元素。

### 🎯 核心特性
- **随机访问**: 通过索引 O(1) 直接访问任意元素
- **内存连续**: 元素在内存中相邻存放，缓存友好
- **固定大小**: 创建时确定大小（静态数组）

### ⏱️ 时间复杂度
| 操作 | 复杂度 | 说明 |
|:---|:---:|:---|
| 访问 | O(1) | arr[i] 直接访问 |
| 搜索 | O(n) | 遍历查找 |
| 插入 | O(n) | 需移动后面元素 |
| 删除 | O(n) | 需移动后面元素 |

### 💡 适用场景
- ✅ 频繁随机访问元素
- ✅ 数据量固定不频繁增删
- ✅ 需要缓存友好的访问模式
- ✅ 矩阵运算（二维数组）

### 🔧 经典操作
\`\`\`python
# 创建
arr = [1, 2, 3, 4, 5]

# 访问 O(1)
element = arr[2]  # 3

# 查找 O(n)
idx = arr.index(3)  # 2

# 添加 O(n)
arr.append(6)  # 末尾添加

# 插入 O(n)
arr.insert(0, 0)  # 头部插入
\`\`\`

### ⚠️ 局限性
- 大小固定，扩容需要创建新数组
- 插入/删除效率低（需移动元素）
- 需要连续内存空间

### 📝 相关题目
- [两数之和 (LeetCode 1)](https://leetcode.cn/problems/two-sum/)
- [最大子数组和 (LeetCode 53)](https://leetcode.cn/problems/maximum-subarray/)
- [合并两个有序数组 (LeetCode 88)](https://leetcode.cn/problems/merge-sorted-array/)`
    },
    
    "linked-list": {
        keywords: ["链表", "linked list", "linked-list", "单向链表", "双向链表", "循环链表"],
        answer: `## 🔗 链表 (Linked List)

链表是动态数据结构，通过指针将分散的节点连接起来。

### 🌳 基本结构
\`\`\`python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next  # 指向下一个节点
\`\`\`

### 📊 链表类型对比
| 类型 | 特点 | 指针 |
|:---|:---|:---|
| 单向链表 | 只知后继 | next |
| 双向链表 | 前后都知 | prev + next |
| 循环链表 | 尾指头 | 形成环 |

### ⏱️ 时间复杂度
| 操作 | 链表 | 数组 |
|:---|:---:|:---:|
| 访问 | O(n) | O(1) |
| 头部插入 | O(1) | O(n) |
| 尾部插入 | O(n) | O(1) |
| 插入/删除 | O(1)* | O(n) |

> *O(1) 前提是已知位置

### 🎯 核心技巧

**1. 虚拟头节点（哑节点）**
\`\`\`python
# 避免处理头节点特殊情况
dummy = ListNode(0)
dummy.next = head
\`\`\`

**2. 快慢指针**
\`\`\`python
# 判断链表有环
slow = fast = head
while fast and fast.next:
    slow = slow.next
    fast = fast.next.next
    if slow == fast:
        return True  # 有环
\`\`\`

**3. 反转链表**
\`\`\`python
def reverse(head):
    prev, curr = None, head
    while curr:
        next_temp = curr.next
        curr.next = prev
        prev = curr
        curr = next_temp
    return prev
\`\`\`

### 📝 相关题目
- [反转链表 (LeetCode 206)](https://leetcode.cn/problems/reverse-linked-list/)
- [合并两个有序链表 (LeetCode 21)](https://leetcode.cn/problems/merge-two-sorted-lists/)
- [环形链表 (LeetCode 141)](https://leetcode.cn/problems/linked-list-cycle/)`
    },
    
    "stack": {
        keywords: ["栈", "stack", "Stack", "堆栈"],
        answer: `## 📚 栈 (Stack) — 先进后出 (LIFO)

栈是一种只允许在一端进行插入和删除的线性数据结构。

### 🎯 核心操作
| 操作 | 说明 | 复杂度 |
|:---|:---|:---:|
| push | 入栈，压到栈顶 | O(1) |
| pop | 出栈，移除栈顶 | O(1) |
| peek/top | 查看栈顶 | O(1) |
| isEmpty | 判空 | O(1) |

### 🏠 现实类比
- 🥞 **叠盘子** — 最后放的盘子最先被拿走
- 📚 **书架放书** — 最近放的先取用

### 💻 代码实现
\`\`\`python
# Python列表实现栈
stack = []
stack.append(1)    # push
stack.append(2)    # push
top = stack[-1]     # peek
stack.pop()         # pop
\`\`\`

### 🎯 经典应用

**1. 函数调用栈**
\`\`\`python
# 递归调用就用栈来管理
def recursion():
    # 每层调用压栈
    recursion()  # 递归
    # 返回时弹栈
\`\`\`

**2. 括号匹配**
\`\`\`python
def isValid(s):
    stack = []
    mapping = {')': '(', ']': '[', '}': '{'}
    for char in s:
        if char in mapping:
            if not stack or stack.pop() != mapping[char]:
                return False
        else:
            stack.append(char)
    return len(stack) == 0
\`\`\`

**3. 表达式求值**
- 中缀转后缀表达式
- 计算后缀表达式
- 浏览器前进/后退

**4. 迷宫问题**
- 用栈实现 DFS

### 📝 相关题目
- [有效的括号 (LeetCode 20)](https://leetcode.cn/problems/valid-parentheses/)
- [最小栈 (LeetCode 155)](https://leetcode.cn/problems/min-stack/)
- [每日温度 (LeetCode 739)](https://leetcode.cn/problems/daily-temperatures/)`
    },
    
    "queue": {
        keywords: ["队列", "queue", "Queue", "双端队列", "deque"],
        answer: `## 🚶 队列 (Queue) — 先进先出 (FIFO)

队列只允许在一端插入，另一端删除。

### 🎯 核心操作
| 操作 | 说明 | 复杂度 |
|:---|:---|:---:|
| enqueue | 入队，队尾添加 | O(1) |
| dequeue | 出队，移除队首 | O(1) |
| front | 查看队首 | O(1) |
| rear | 查看队尾 | O(1) |

### 🏠 现实类比
- 🏪 **奶茶店排队** — 先来的先点单
- 🎫 **取票机排队** — 早来的早取票

### 📊 队列类型

| 类型 | 特点 | 应用 |
|:---|:---|:---|
| 普通队列 | FIFO | 任务调度 |
| 双端队列 | 两端都可操作 | 单调栈、滑窗 |
| 循环队列 | 空间复用 | 资源有限场景 |
| 优先队列 | 优先级高先出 | Dijkstra、堆 |

### 💻 代码实现
\`\`\`python
from collections import deque

queue = deque()
queue.append(1)      # 入队
queue.append(2)      # 入队
queue.popleft()      # 出队 O(1)

# deque 实现双端队列
dq = deque()
dq.appendleft(1)     # 头部添加
dq.append(2)         # 尾部添加
dq.pop()             # 尾部删除
dq.popleft()         # 头部删除
\`\`\`

### 🎯 经典应用

**1. BFS 广度优先搜索**
\`\`\`python
from collections import deque

def bfs(graph, start):
    visited = {start}
    queue = deque([start])
    
    while queue:
        node = queue.popleft()
        for neighbor in graph[node]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)
    return visited
\`\`\`

**2. 滑动窗口**
- 维持一个固定大小的窗口
- 窗口内维护数据结构

**3. 任务调度**
- 按顺序处理任务
- 消息队列缓冲

### 📝 相关题目
- [岛屿数量 (LeetCode 200)](https://leetcode.cn/problems/number-of-islands/)
- [课程表 (LeetCode 207)](https://leetcode.cn/problems/course-schedule/)`
    },
    
    "hash-table": {
        keywords: ["哈希表", "hash table", "hashmap", "哈希", "散列表", "字典"],
        answer: `## 🔐 哈希表 (Hash Table) — O(1) 查找

哈希表通过键值对存储，利用哈希函数将键映射到数组索引。

### 🎯 核心思想
\`\`\`
键 (key) → 哈希函数 → 数组索引 → 值 (value)
\`\`\`

### ⚙️ 哈希函数
- **要求**: 计算快、分布均匀、确定性
- **常见方法**: 
  - 取模法: hash(key) = key % m
  - 乘法哈希: hash(key) = floor(m * (key * A % 1))

### 🚨 哈希冲突

| 解决方法 | 原理 | 优缺点 |
|:---|:---|:---|
| 链地址法 | 桶内存链表 | 实现简单，链表长时慢 |
| 开放地址法 | 找空位置 | 无指针，但可能聚集 |

**开放地址法探测:**
- 线性探测: h(key)+1, h(key)+2...
- 二次探测: h(key)+1², h(key)+2²...
- 双重哈希: h1(key)+i*h2(key)

### ⏱️ 时间复杂度
| 操作 | 平均 | 最差 |
|:---|:---:|:---:|
| 查找 | O(1) | O(n) |
| 插入 | O(1) | O(n) |
| 删除 | O(1) | O(n) |

> 最差情况: 所有key哈希到同一位（冲突严重）

### 📊 负载因子
\`\`\`
负载因子 α = 元素数量 / 桶数量
\`\`\`
- α 过大 → 冲突增多 → 性能下降
- α 过小 → 空间浪费
- **阈值**: 通常设为 0.75，超过则扩容重哈希

### 💻 代码实现
\`\`\`python
# Python 字典就是哈希表
hash_map = {}

# 添加/修改
hash_map['name'] = 'Alice'

# 查找 O(1)
if 'name' in hash_map:
    print(hash_map['name'])

# 遍历
for key, value in hash_map.items():
    print(f"{key}: {value}")

# 统计字符出现次数
def count_chars(s):
    count = {}
    for c in s:
        count[c] = count.get(c, 0) + 1
    return count
\`\`\`

### 🎯 经典应用
- **两数之和**: 边遍历边查找 complement
- **LRU Cache**: 哈希表 + 双向链表
- **布隆过滤器**: 判断元素是否存在

### 📝 相关题目
- [两数之和 (LeetCode 1)](https://leetcode.cn/problems/two-sum/)
- [最长连续序列 (LeetCode 128)](https://leetcode.cn/problems/longest-consecutive-sequence/)
- [字母异位词分组 (LeetCode 49)](https://leetcode.cn/problems/group-anagrams/)`
    },
    
    // ----- 树结构 -----
    "binary-tree": {
        keywords: ["二叉树", "binary tree", "binary-tree", "树", "binary tree traversal"],
        answer: `## 🌳 二叉树 (Binary Tree)

每个节点最多有两个子节点的数据结构。

### 📊 基本术语
\`\`\`
        A          ← 根节点
       / \\
      B   C       ← B是A的左孩子，C是A的右孩子
     / \\   \\
    D   E   F     ← D,E是叶子节点（无孩子）
\`\`\`

- **根节点**: 最顶端的节点
- **叶子节点**: 没有子节点的节点
- **深度**: 从根到该节点的边数
- **高度**: 从该节点到最远叶子的边数
- **层**: 根节点为第1层

### 🔄 遍历方式

| 遍历 | 顺序 | 应用 |
|:---|:---|:---|
| 前序 | 根 → 左 → 右 | 复制树、序列化 |
| 中序 | 左 → 根 → 右 | BST有序输出 |
| 后序 | 左 → 右 → 根 | 删除树 |
| 层序 | 逐层从左到右 | BFS |

### 💻 代码实现
\`\`\`python
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

# 前序遍历 (根-左-右)
def preorder(root):
    if not root: return []
    return [root.val] + preorder(root.left) + preorder(root.right)

# 中序遍历 (左-根-右)
def inorder(root):
    if not root: return []
    return inorder(root.left) + [root.val] + inorder(root.right)

# 后序遍历 (左-右-根)
def postorder(root):
    if not root: return []
    return postorder(root.left) + postorder(root.right) + [root.val]

# 层序遍历 (BFS)
from collections import deque
def levelorder(root):
    if not root: return []
    result, queue = [], deque([root])
    while queue:
        node = queue.popleft()
        result.append(node.val)
        if node.left: queue.append(node.left)
        if node.right: queue.append(node.right)
    return result
\`\`\`

### 📊 树的性质
- 第 i 层最多有 **2^(i-1)** 个节点
- 深度为 k 的树最多有 **2^k - 1** 个节点
- 叶子节点数 = 度为2的节点数 + 1（n2 = n0 - 1）

### 📝 相关题目
- [二叉树的中序遍历 (LeetCode 94)](https://leetcode.cn/problems/binary-tree-inorder-traversal/)
- [二叉树的最大深度 (LeetCode 104)](https://leetcode.cn/problems/maximum-depth-of-binary-tree/)
- [对称二叉树 (LeetCode 101)](https://leetcode.cn/problems/symmetric-tree/)`
    },
    
    "bst": {
        keywords: ["二叉搜索树", "BST", "binary search tree", "二叉查找树", "搜索树"],
        answer: `## 🔍 二叉搜索树 (BST)

满足**左 < 根 < 右**性质的二叉树。

### 🎯 BST 性质
\`\`\`
        8
       / \\
      3   10
     / \\    \\
    1   6    14
       / \\   /
      4   7 13
\`\`\`
- 中序遍历得到**升序序列**: [1, 3, 4, 6, 7, 8, 10, 13, 14]

### ⏱️ 时间复杂度
| 操作 | 平均 | 最差 |
|:---|:---:|:---:|
| 搜索 | O(log n) | O(n) |
| 插入 | O(log n) | O(n) |
| 删除 | O(log n) | O(n) |

> 最差情况: 树退化成链表（插入有序数据）

### 💻 核心操作

**搜索:**
\`\`\`python
def searchBST(root, target):
    if not root or root.val == target:
        return root
    if target < root.val:
        return searchBST(root.left, target)
    return searchBST(root.right, target)
\`\`\`

**插入:**
\`\`\`python
def insertBST(root, val):
    if not root:
        return TreeNode(val)
    if val < root.val:
        root.left = insertBST(root.left, val)
    else:
        root.right = insertBST(root.right, val)
    return root
\`\`\`

**删除:**
\`\`\`python
def deleteBST(root, val):
    if not root: return None
    
    if val < root.val:
        root.left = deleteBST(root.left, val)
    elif val > root.val:
        root.right = deleteBST(root.right, val)
    else:
        # 找到要删除的节点
        if not root.left: return root.right
        if not root.right: return root.left
        
        # 度为2: 找后继(右子树最小)或前驱(左子树最大)
        successor = minNode(root.right)
        root.val = successor.val
        root.right = deleteBST(root.right, successor.val)
    
    return root
\`\`\`

### 🌲 改进: 平衡二叉树
| 类型 | 平衡条件 | 调整频率 |
|:---|:---|:---|
| AVL树 | \|左高-右高\| ≤ 1 | 高 |
| 红黑树 | 红黑规则约束 | 低 |
| Splay树 | 最近访问的节点旋到根 | 低 |
| Treap | 堆 + BST 属性 | 低 |

### 📝 相关题目
- [验证二叉搜索树 (LeetCode 98)](https://leetcode.cn/problems/validate-binary-search-tree/)
- [二叉搜索树中的搜索 (LeetCode 700)](https://leetcode.cn/problems/search-in-a-binary-search-tree/)
- [将有序数组转为BST (LeetCode 108)](https://leetcode.cn/problems/convert-sorted-array-to-binary-search-tree/)`
    },
    
    "avl": {
        keywords: ["AVL", "avl树", "平衡二叉树", "avl tree", "平衡"],
        answer: `## ⚖️ AVL树 — 严格平衡的二叉搜索树

AVL树是最早发明的自平衡二叉搜索树，通过旋转保持高度平衡。

### 🎯 平衡条件
- 每个节点的左右子树高度差 ≤ 1
- 高度平衡因子 = |左子树高度 - 右子树高度|

### ⏱️ 时间复杂度
| 操作 | 时间复杂度 |
|:---|:---|
| 搜索 | O(log n) |
| 插入 | O(log n) |
| 删除 | O(log n) |

> **严格平衡 = 查找效率高**，但插入/删除需要更多旋转

### 🔄 旋转类型

**1. LL型 — 右单旋**
\`\`\`
    z.parent          z.parent
       |                |
       z                y
      / \\   右旋→     / \\
     y   T4   →       x   z
    / \\                / \\ \\
   x   T3             T1 T2 T3 T4
  / \\
 T1 T2
\`\`\`

**2. RR型 — 左单旋**
\`\`\`
     z.parent          z.parent
        |                |
        z                y
       / \\   左旋→     / \\
      T1   y    →      z   x
         / \\          / \\ \\
        T2  x        T1 T2 T3 T4
           / \\
          T3 T4
\`\`\`

**3. LR型 — 先左旋后右旋**

**4. RL型 — 先右旋后左旋**

### 💻 实现要点
\`\`\`python
class AVLNode:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None
        self.height = 1  # 叶子节点高度为1
        self.balance = 0  # 左高-右高

# 获取高度
def get_height(node):
    return node.height if node else 0

# 更新高度和平衡因子
def update(node):
    node.height = 1 + max(get_height(node.left), get_height(node.right))
    node.balance = get_height(node.left) - get_height(node.right)
\`\`\`

### ⚖️ AVL vs 红黑树
| 特性 | AVL | 红黑树 |
|:---|:---|:---|
| 平衡性 | 严格平衡 | 近似平衡 |
| 查找效率 | 更高 | 稍低 |
| 插入/删除 | 调整多 | 调整少 |
| 应用 | 数据库索引 | C++ STL (map/set)、Java TreeMap |

### 📝 相关题目
- [AVL树插入（理解原理）](https://visualgo.net/zh/bst)
- [LeetCode 平衡二叉树判定](https://leetcode.cn/problems/balanced-binary-tree/)`
    },
    
    "red-black": {
        keywords: ["红黑树", "red black tree", "红黑", "red-black", "rbtree"],
        answer: `## 🔴⚫ 红黑树 — 近似平衡的BST

红黑树通过颜色约束保证**近似平衡**，插入/删除调整较少。

### 🎯 红黑树规则
1. 每个节点非红即黑
2. **根节点是黑色**
3. **叶子节点(NIL)是黑色**
4. **红色节点的两个子节点都是黑色**（不能连续红）
5. **任意节点到叶子的路径黑色高度相同**

\`\`\`
        B(根)                    黑高 = 2
       /    \\
      R      B                  所有路径黑节点数相同
     / \\    / \\
    B   B  R   B
   /
  R
\`\`\`

### ⏱️ 时间复杂度
保证 O(log n) 的查找、插入、删除

### 🔄 调整操作

**1. 变色 (Recolor)**
红 → 黑 或 黑 → 红

**2. 旋转 (Rotation)**
左旋 / 右旋（同AVL）

### 🔍 插入修复

| 情况 | 叔叔 | 操作 |
|:---|:---|:---|
| LL/LR | 红色 | 变色 |
| LL | 黑色 | 右旋+变色 |
| LR | 黑色 | 左旋+右旋+变色 |
| RR/RL | 红色 | 变色 |
| RR | 黑色 | 左旋+变色 |
| RL | 黑色 | 右旋+左旋+变色 |

### 💻 代码要点
\`\`\`python
class RBNode:
    BLACK = True
    RED = False
    
    def __init__(self, val, color=RBNode.RED):
        self.val = val
        self.color = color
        self.left = None
        self.right = None
        self.parent = None
\`\`\`

### ⚖️ 红黑树 vs AVL

| 特性 | AVL | 红黑树 |
|:---|:---|:---|
| 平衡标准 | 高度差 ≤ 1 | 黑高相同 |
| 查找效率 | 更高 | 稍低 |
| 插入/删除 | 调整多 | 调整少 |
| 适合场景 | 读多写少 | 写多读少 |

### 🗂️ 应用场景
- **C++**: std::map, std::set
- **Java**: TreeMap, TreeSet
- **Linux**: 虚拟内存管理
- **数据库**: 索引结构`
    },
    
    // ----- 图结构 -----
    "graph": {
        keywords: ["图", "graph", "Graph", "图论", "有向图", "无向图", "权重图"],
        answer: `## 🔗 图 (Graph)

图由顶点(Vertex)和边(Edge)组成，是最复杂的数据结构。

### 📊 图的类型

| 分类 | 说明 | 边表示 |
|:---|:---|:---|
| 有向图 | 边有方向 | <u,v> |
| 无向图 | 边无方向 | (u,v) |
| 有权图 | 边有权重 | w(u,v) |
| 无权图 | 边无权重 | 1 |
| 连通图 | 任意两点可达 | - |
| DAG | 有向无环图 | 拓扑排序 |

### 🗺️ 表示方法

**1. 邻接矩阵**
\`\`\`python
# n个顶点，matrix[i][j] 表示边(i,j)的权重
matrix = [[0, 5, INF],  # 0到0、1、2的权重
          [5, 0, 3],
          [INF, 3, 0]]
# 空间: O(V²)，判断边O(1)
\`\`\`

**2. 邻接表**
\`\`\`python
graph = {
    'A': ['B', 'C'],
    'B': ['A', 'C', 'D'],
    'C': ['A', 'B', 'D'],
    'D': ['B', 'C']
}
# 空间: O(V+E)，遍历邻居O(度)
\`\`\`

### 📊 空间复杂度对比
| 表示 | 空间 | 查边 | 遍历邻居 |
|:---|:---:|:---:|:---:|
| 邻接矩阵 | O(V²) | O(1) | O(V) |
| 邻接表 | O(V+E) | O(度) | O(度) |

> **选择建议**: 稀疏图用邻接表，稠密图用邻接矩阵

### 🔄 图的遍历
\`\`\`python
from collections import deque

# BFS - 队列
def bfs(graph, start):
    visited = set([start])
    queue = deque([start])
    while queue:
        node = queue.popleft()
        for neighbor in graph[node]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)

# DFS - 栈(或递归)
def dfs(graph, start, visited=None):
    if visited is None:
        visited = set()
    visited.add(start)
    for neighbor in graph[start]:
        if neighbor not in visited:
            dfs(graph, neighbor, visited)
    return visited
\`\`\`

### 📝 相关题目
- [岛屿数量 (LeetCode 200)](https://leetcode.cn/problems/number-of-islands/)
- [课程表 (LeetCode 207)](https://leetcode.cn/problems/course-schedule/)
- [克隆图 (LeetCode 133)](https://leetcode.cn/problems/clone-graph/)`
    },
    
    "bfs-dfs": {
        keywords: ["BFS", "DFS", "bfs", "dfs", "广度优先", "深度优先", "遍历"],
        answer: `## 🔍 BFS vs DFS — 图的两种遍历

BFS和DFS是图/树遍历的基础方法，应用广泛。

### 🎯 BFS — 广度优先搜索

**核心**: 用**队列**，一层一层向外扩展

\`\`\`python
from collections import deque

def bfs(graph, start):
    visited = {start}
    queue = deque([start])
    
    while queue:
        node = queue.popleft()
        # 处理当前节点
        print(node, end=' ')
        
        for neighbor in graph[node]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)
\`\`\`

### 🎯 DFS — 深度优先搜索

**核心**: 用**栈**(或递归)，一条路走到底

\`\`\`python
def dfs(graph, start, visited=None):
    if visited is None:
        visited = set()
    
    visited.add(start)
    print(start, end=' ')
    
    for neighbor in graph[start]:
        if neighbor not in visited:
            dfs(graph, neighbor, visited)
\`\`\`

### 📊 对比

| 特性 | BFS | DFS |
|:---|:---|:---|
| 数据结构 | 队列 | 栈/递归 |
| 遍历顺序 | 按层（近→远） | 一条路到底 |
| 最短路径 | ✅ 能 | ❌ 不能 |
| 空间复杂度 | O(width) | O(depth) |
| 适合场景 | 最短路径、层级遍历 | 连通分量、拓扑排序 |

### 💡 经典应用

**BFS 应用:**
- 🛤️ 最短路径（无权图）
- 📊 层序遍历二叉树
- 🔍 单词阶梯
- 🧩 迷宫最短路

**DFS 应用:**
- 🛤️ 路径总和
- 🔄 拓扑排序
- 🔗 连通分量
- ♟️ N皇后
- 📦 回溯法

### 💻 最短路径示例 (BFS)
\`\`\`python
def shortest_path(graph, start, end):
    visited = {start}
    queue = deque([(start, [start])])
    
    while queue:
        node, path = queue.popleft()
        if node == end:
            return path
        
        for neighbor in graph[node]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append((neighbor, path + [neighbor]))
    
    return None  # 无路径
\`\`\`

### 📝 相关题目
- [岛屿数量 (LeetCode 200) - BFS/DFS](https://leetcode.cn/problems/number-of-islands/)
- [克隆图 (LeetCode 133) - BFS](https://leetcode.cn/problems/clone-graph/)
- [路径总和 (LeetCode 112) - DFS](https://leetcode.cn/problems/path-sum/)`
    },
    
    "mst": {
        keywords: ["最小生成树", "MST", "mst", "kruskal", "prim", "生成树"],
        answer: `## 🌲 最小生成树 (MST)

在带权无向图中，找一棵包含所有顶点、边权重之和最小的树。

### 🎯 MST 性质
- 包含所有 n 个顶点
- 恰好有 n-1 条边
- 边权之和最小
- **切割性质**: 横跨切割的最小边必在MST中

### 🔧 两种算法

**1. Kruskal 算法 — 贪心 + 并查集**

\`\`\`python
def kruskal(edges, n):
    # edges: [(w, u, v), ...]，n: 顶点数
    edges.sort()  # 按权重排序
    parent = list(range(n))
    
    def find(x):
        if parent[x] != x:
            parent[x] = find(parent[x])
        return parent[x]
    
    mst = []
    for w, u, v in edges:
        if find(u) != find(v):
            parent[find(u)] = find(v)
            mst.append((u, v, w))
            if len(mst) == n - 1:
                break
    return mst

# 时间: O(E log E)
\`\`\`

**2. Prim 算法 — 贪心 + 优先队列**

\`\`\`python
import heapq

def prim(graph, start):
    # graph: {u: [(v, w), ...]}
    visited = {start}
    edges = [(w, start, v) for v, w in graph[start]]
    heapq.heapify(edges)
    mst = []
    
    while edges and len(visited) < len(graph):
        w, u, v = heapq.heappop(edges)
        if v in visited:
            continue
        visited.add(v)
        mst.append((u, v, w))
        for next_v, next_w in graph[v]:
            if next_v not in visited:
                heapq.heappush(edges, (next_w, v, next_v))
    
    return mst

# 时间: O(E log V)
\`\`\`

### 📊 算法对比

| 算法 | 时间复杂度 | 适用场景 |
|:---|:---:|:---|
| Kruskal | O(E log E) | 稀疏图 (E 少) |
| Prim | O(E log V) | 稠密图 (E 多) |

### 🏭 应用场景
- 🛣️ 道路/网络铺设成本最小化
- 🔌 电路板布线
- 📡 基站覆盖规划`
    },
    
    "dijkstra": {
        keywords: ["dijkstra", "Dijkstra", "最短路径", "单源最短", "最短路"],
        answer: `## 🛤️ Dijkstra 单源最短路径

在带权图中，从一个源点到所有其他顶点的最短路径。

### 🎯 条件
- ✅ 所有边权重 **非负**
- ❌ 不能有负权边（用Bellman-Ford）

### 💻 算法实现
\`\`\`python
import heapq

def dijkstra(graph, start):
    # graph: {u: [(v, w), ...]}
    dist = {v: float('inf') for v in graph}
    dist[start] = 0
    pq = [(0, start)]  # (距离, 顶点)
    visited = set()
    
    while pq:
        d, u = heapq.heappop(pq)
        if u in visited:
            continue
        visited.add(u)
        
        for v, w in graph[u]:
            if dist[u] + w < dist[v]:
                dist[v] = dist[u] + w
                heapq.heappush(pq, (dist[v], v))
    
    return dist

# 时间: O(E log V)
\`\`\`

### 📊 复杂度对比

| 算法 | 时间 | 适用场景 |
|:---|:---:|:---|
| Dijkstra (堆) | O(E log V) | 非负权图 |
| Dijkstra (数组) | O(V²) | 稠密图 |
| Bellman-Ford | O(VE) | 可有负权 |
| SPFA | O(kE) 平均 | 负权图优化 |

### 🛤️ 最短路径树
\`\`\`python
def dijkstra_with_path(graph, start):
    dist = {v: float('inf') for v in graph}
    parent = {start: None}
    dist[start] = 0
    pq = [(0, start)]
    visited = set()
    
    while pq:
        d, u = heapq.heappop(pq)
        if u in visited:
            continue
        visited.add(u)
        
        for v, w in graph[u]:
            if dist[u] + w < dist[v]:
                dist[v] = dist[u] + w
                parent[v] = u
                heapq.heappush(pq, (dist[v], v))
    
    return dist, parent

def get_path(parent, target):
    path = []
    while target is not None:
        path.append(target)
        target = parent[target]
    return path[::-1]
\`\`\`

### 📝 相关题目
- [网络延迟时间 (LeetCode 743)](https://leetcode.cn/problems/network-delay-time/)
- [找到最安全路径 (LeetCode 1514)](https://leetcode.cn/problems/path-with-maximum-probability/)`
    },
    
    // ----- 排序算法 -----
    "sorting": {
        keywords: ["排序", "sorting", "sort", "排序算法", "各种排序"],
        answer: `## 📊 排序算法汇总

排序是算法的基础，常见排序算法对比如下：

### 📊 算法对比

| 算法 | 时间(平均) | 时间(最坏) | 空间 | 稳定性 |
|:---|:---:|:---:|:---:|:---:|
| 冒泡排序 | O(n²) | O(n²) | O(1) | ✅ |
| 选择排序 | O(n²) | O(n²) | O(1) | ❌ |
| 插入排序 | O(n²) | O(n²) | O(1) | ✅ |
| 希尔排序 | O(n^1.3) | O(n²) | O(1) | ❌ |
| 归并排序 | O(n log n) | O(n log n) | O(n) | ✅ |
| 快速排序 | O(n log n) | O(n²) | O(log n) | ❌ |
| 堆排序 | O(n log n) | O(n log n) | O(1) | ❌ |
| 计数排序 | O(n+k) | O(n+k) | O(k) | ✅ |
| 桶排序 | O(n+k) | O(n²) | O(n+k) | ✅ |
| 基数排序 | O(nk) | O(nk) | O(n+k) | ✅ |

### 🎯 选择建议

**小规模数据 (n ≤ 50)**
→ 插入排序（常数小，有序时接近O(n)）

**大规模数据**
→ 快速排序 / 归并排序 / 堆排序

**近乎有序**
→ 插入排序 /希尔排序

**稳定性要求**
→ 归并排序（稳定） / 插入排序

**整数/小范围**
→ 计数排序 / 桶排序

**🎯 稳定性**: 相等元素的相对顺序是否保持`
    },
    
    "bubble-sort": {
        keywords: ["冒泡排序", "bubble sort", "bubble", "冒泡"],
        answer: `## 🫧 冒泡排序 (Bubble Sort)

最简单直观的排序，像气泡上浮一样。

### 💡 核心思想
每趟比较相邻元素，大的往后移，一趟下来最大的到末尾。

### 💻 代码实现
\`\`\`python
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        swapped = False
        for j in range(n - 1 - i):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        if not swapped:  # 有序，提前退出
            break
    return arr

# 优化: 记录最后交换位置，减少比较次数
def bubble_sort_optimized(arr):
    n = len(arr)
    last_swap = n - 1
    while last_swap > 0:
        new_last_swap = 0
        for j in range(last_swap):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                new_last_swap = j
        last_swap = new_last_swap
    return arr
\`\`\`

### ⏱️ 复杂度
| 情况 | 复杂度 |
|:---|:---|
| 平均 | O(n²) |
| 最好 | O(n)（优化后有序） |
| 最坏 | O(n²) |
| 空间 | O(1) |

### 🏃‍♀️ 优化版本
- **提前退出**: 如果一趟没有交换，说明已有序
- **记录边界**: 记录最后交换位置，后面的已有序

### 💡 特点
- ✅ **稳定排序**
- ✅ 代码简单，易理解
- ❌ 时间复杂度高，不适合大规模数据`
    },
    
    "insertion-sort": {
        keywords: ["插入排序", "insertion sort", "insertion", "插入"],
        answer: `## ✋ 插入排序 (Insertion Sort)

像打牌时整理手牌一样，将元素插入到合适位置。

### 💡 核心思想
将数组分为"已排序"和"未排序"两部分，逐个将未排序元素插入已排序部分。

### 💻 代码实现
\`\`\`python
def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        # 在已排序部分从后往前找位置
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key
    return arr

# 二分查找优化版本
import bisect

def insertion_sort_binary(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        pos = bisect.bisect_left(arr, key, 0, i)
        # 插入到正确位置
        arr[pos+1:i+1] = arr[pos:i]
        arr[pos] = key
    return arr
\`\`\`

### ⏱️ 复杂度
| 情况 | 复杂度 |
|:---|:---|
| 平均 | O(n²) |
| 最好 | O(n)（已有序） |
| 最坏 | O(n²) |
| 空间 | O(1) |

### 💡 特点
- ✅ **稳定排序**
- ✅ **近乎有序时效率高**（接近O(n)）
- ✅ 代码简单，适合小规模数据
- ✅ **是希尔排序和TimSort的基础**
- ❌ 大规模数据效率低

### 🎯 适用场景
- 🎴 小规模或近乎有序的数据
- 🏢 作为高级排序的子过程（如快速排序小数组）`
    },
    
    "selection-sort": {
        keywords: ["选择排序", "selection sort", "selection", "选择"],
        answer: `## 👆 选择排序 (Selection Sort)

每趟选择最小（或最大）的元素放到排序区开头。

### 💡 核心思想
1. 遍历找到最小元素，与第一个交换
2. 在剩余元素中找最小，与第二个交换
3. 重复直到排序完成

### 💻 代码实现
\`\`\`python
def selection_sort(arr):
    n = len(arr)
    for i in range(n):
        min_idx = i
        # 找未排序部分的最小值
        for j in range(i + 1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        # 交换
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
    return arr

# 选择排序（选最大值放末尾）
def selection_sort_desc(arr):
    n = len(arr)
    for i in range(n - 1, -1, -1):
        max_idx = i
        for j in range(i):
            if arr[j] > arr[max_idx]:
                max_idx = j
        arr[i], arr[max_idx] = arr[max_idx], arr[i]
    return arr
\`\`\`

### ⏱️ 复杂度
| 情况 | 复杂度 |
|:---|:---|
| 平均 | O(n²) |
| 最好 | O(n²) |
| 最坏 | O(n²) |
| 空间 | O(1) |

### 💡 特点
- ❌ **不稳定排序**（交换可能改变相等元素相对顺序）
- ❌ 时间复杂度恒为O(n²)
- ✅ 交换次数少，最多n-1次
- ✅ 简单直观

### 📊 vs 冒泡排序
| 特性 | 选择排序 | 冒泡排序 |
|:---|:---|:---|
| 比较次数 | O(n²) | O(n²) |
| 交换次数 | O(n) | O(n²) |
| 稳定性 | ❌ | ✅ |
| 最好情况 | O(n²) | O(n) |

> 选择排序的交换次数少，适合写操作代价高的场景`
    },
    
    "merge-sort": {
        keywords: ["归并排序", "merge sort", "merge-sort", "归并"],
        answer: `## 🔀 归并排序 (Merge Sort) — 分治思想

分而治之，将数组分成两半分别排序，再合并。

### 💡 核心思想
\`\`\`
[8, 3, 1, 7, 0, 10, 2]
    ↓ 分
[8,3,1,7]  [0,10,2]
   ↓ 分        ↓ 分
[8,3] [1,7]  [0,10] [2]
  ↓ 分   ↓分    ↓分   ↓
[8][3] [1][7] [0][10][2]
  ↓ 合   ↓合   ↓合   ↓合
[3,8] [1,7]  [0,10] [2]
    ↓ 合        ↓ 合
  [1,3,7,8]   [0,2,10]
       ↓ 合
  [0,1,2,3,7,8,10]
\`\`\`

### 💻 代码实现
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
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    
    result.extend(left[i:])
    result.extend(right[j:])
    return result

# 原地版本（更省空间）
def merge_sort_inplace(arr):
    def merge(arr, left, mid, right):
        # 合并 arr[left:mid+1] 和 arr[mid+1:right+1]
        i, j = left, mid + 1
        temp = []
        while i <= mid and j <= right:
            if arr[i] <= arr[j]:
                temp.append(arr[i])
                i += 1
            else:
                temp.append(arr[j])
                j += 1
        temp.extend(arr[i:mid+1])
        temp.extend(arr[j:right+1])
        arr[left:right+1] = temp
    
    def sort(arr, left, right):
        if left >= right:
            return
        mid = (left + right) // 2
        sort(arr, left, mid)
        sort(arr, mid + 1, right)
        merge(arr, left, mid, right)
    
    sort(arr, 0, len(arr) - 1)
    return arr
\`\`\`

### ⏱️ 复杂度
| 情况 | 复杂度 |
|:---|:---|
| 平均 | O(n log n) |
| 最好 | O(n log n) |
| 最坏 | O(n log n) |
| 空间 | O(n) |

### 💡 特点
- ✅ **稳定排序**
- ✅ 时间恒定为O(n log n)
- ✅ 适合链表（只需O(1)额外空间）
- ✅ 适合外排序（磁盘排序）
- ❌ 需要额外O(n)空间

### 📊 vs 快排
| 特性 | 归并排序 | 快速排序 |
|:---|:---|:---|
| 稳定性 | ✅ | ❌ |
| 空间 | O(n) | O(log n) |
| 最坏 | O(n log n) | O(n²) |
| 适用 | 外排序、链表 | 数组 |
| 缓存 | 不友好 | 友好（原地）`
    },
    
    "quick-sort": {
        keywords: ["快速排序", "快排", "quick sort", "quick-sort", "快排序"],
        answer: `## ⚡ 快速排序 (Quick Sort) — 原地排序之王

分治思想的经典应用，实际应用中速度最快的排序。

### 💡 核心思想
1. 选择一个 **pivot（基准）**
2. 分区：比pivot小的放左边，大的放右边
3. 递归排序左右两部分

### 💻 代码实现
\`\`\`python
def quick_sort(arr):
    def partition(arr, low, high):
        pivot = arr[high]  # 选最后一个作基准
        i = low - 1
        for j in range(low, high):
            if arr[j] <= pivot:
                i += 1
                arr[i], arr[j] = arr[j], arr[i]
        arr[i + 1], arr[high] = arr[high], arr[i + 1]
        return i + 1
    
    def sort(arr, low, high):
        if low < high:
            pi = partition(arr, low, high)
            sort(arr, low, pi - 1)
            sort(arr, pi + 1, high)
    
    sort(arr, 0, len(arr) - 1)
    return arr

# 单边递归优化（尾递归）
def quick_sort_tail(arr):
    def sort(low, high):
        while low < high:
            pi = partition(arr, low, high)
            sort(low, pi - 1)
            low = pi + 1  # 尾递归优化
    sort(0, len(arr) - 1)
    return arr
\`\`\`

### 🎯 pivot 选择策略
| 策略 | 方法 | 效果 |
|:---|:---|:---|
| 首元素 | arr[low] | 有序时最坏 |
| 尾元素 | arr[high] | 有序时最坏 |
| 随机 | random.choice() | 避免最坏 |
| 三数取中 | median(low,mid,high) | 较均衡 |

### ⏱️ 复杂度
| 情况 | 复杂度 |
|:---|:---|
| 平均 | O(n log n) |
| 最好 | O(n log n)（pivot是中间值） |
| 最坏 | O(n²)（pivot总是最大/最小） |
| 空间 | O(log n)（递归栈） |

### 💡 特点
- ❌ **不稳定排序**
- ✅ **原地排序**（只需O(log n)栈空间）
- ✅ **实践中最快的排序**
- ✅ **缓存友好**

### ⚡ 优化技巧
\`\`\`python
def quick_sort_optimized(arr):
    # 小数组用插入排序
    INSERTION_THRESHOLD = 10
    
    def sort(low, high):
        while high - low > INSERTION_THRESHOLD:
            pi = partition(arr, low, high)
            if pi - low < high - pi:
                sort(low, pi - 1)
                low = pi + 1
            else:
                sort(pi + 1, high)
                high = pi - 1
        
        # 小数组用插入排序
        for i in range(low + 1, high + 1):
            key = arr[i]
            j = i - 1
            while j >= low and arr[j] > key:
                arr[j + 1] = arr[j]
                j -= 1
            arr[j + 1] = key
    
    if len(arr) > 1:
        sort(0, len(arr) - 1)
    return arr
\`\`\`

### 📊 vs 归并排序
| 特性 | 快速排序 | 归并排序 |
|:---|:---|:---|
| 时间(平均) | O(n log n) | O(n log n) |
| 时间(最坏) | O(n²) | O(n log n) |
| 空间 | O(log n) | O(n) |
| 稳定性 | ❌ | ✅ |
| 原地 | ✅ | ❌ |

> **为什么快排实际更快?** 1. 原地排序，缓存命中率高 2. 常数因子小`
    },
    
    "heap-sort": {
        keywords: ["堆排序", "heap sort", "heap-sort", "堆", "heap"],
        answer: `## 🏔️ 堆排序 (Heap Sort)

利用堆这种数据结构实现的排序算法。

### 🎯 堆的特性
- **完全二叉树**：除了最后一层，其他层都满
- **数组存储**：父子节点索引关系
  - 父节点: (i-1) // 2
  - 左孩子: 2*i + 1
  - 右孩子: 2*i + 2

\`\`\`
数组: [9, 5, 8, 3, 2, 7, 1]
           9(0)
         /     \\
        5(1)   8(2)
       / \\     / \\
      3(3)2(4)7(5)1(6)
\`\`\`

### 💻 代码实现
\`\`\`python
def heap_sort(arr):
    n = len(arr)
    
    # 构建最大堆
    def build_max_heap(arr, n):
        # 从最后一个非叶子节点开始下沉
        for i in range(n // 2 - 1, -1, -1):
            heapify(arr, n, i)
    
    # 下沉操作
    def heapify(arr, n, i):
        largest = i
        left = 2 * i + 1
        right = 2 * i + 2
        
        if left < n and arr[left] > arr[largest]:
            largest = left
        if right < n and arr[right] > arr[largest]:
            largest = right
        
        if largest != i:
            arr[i], arr[largest] = arr[largest], arr[i]
            heapify(arr, n, largest)
    
    build_max_heap(arr, n)
    
    # 逐个取出堆顶
    for i in range(n - 1, 0, -1):
        arr[0], arr[i] = arr[i], arr[0]  # 堆顶移到末尾
        heapify(arr, i, 0)  # 缩小堆并调整
    
    return arr
\`\`\`

### ⏱️ 复杂度
| 情况 | 复杂度 |
|:---|:---|
| 平均 | O(n log n) |
| 最好 | O(n log n) |
| 最坏 | O(n log n) |
| 空间 | O(1) |

### 💡 特点
- ❌ **不稳定排序**
- ✅ **最坏情况也是O(n log n)**
- ✅ **原地排序**，只需O(1)额外空间
- ✅ **适合Top K问题**

### 🎯 Top K 问题
\`\`\`python
# 找前K大的数
def top_k(arr, k):
    # 建立大小为K的小顶堆
    heap = arr[:k]
    heapq.heapify(heap)
    
    for i in range(k, len(arr)):
        if arr[i] > heap[0]:
            heapq.heapreplace(heap, arr[i])
    
    return heap  # 小顶堆中的K个数就是最大的K个
\`\`\`

### 📊 vs 快排
| 特性 | 堆排序 | 快速排序 |
|:---|:---|:---|
| 时间(最坏) | O(n log n) | O(n²) |
| 空间 | O(1) | O(log n) |
| 缓存 | 不友好 | 友好 |
| 稳定性 | ❌ | ❌ |`
    },
    
    // ----- 搜索算法 -----
    "binary-search": {
        keywords: ["二分搜索", "二分查找", "binary search", "binary-search", "折半查找"],
        answer: `## 🔍 二分搜索 (Binary Search)

在**有序数组**中查找目标的高效算法，每次将搜索范围缩小一半。

### 💡 核心思想
\`\`\`
查找 target = 7

[1, 3, 5, 7, 9, 11, 13]
 L        M           R
 ↓  7 > 5, 移动L
[1, 3, 5, 7, 9, 11, 13]
            L  M     R
            ↓  7 < 9, 移动R
[1, 3, 5, 7, 9, 11, 13]
            LMR
            ↓  找到!
\`\`\`

### 💻 代码实现

**标准二分**
\`\`\`python
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    
    while left <= right:
        mid = left + (right - left) // 2  # 防止溢出
        
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    
    return -1  # 未找到
\`\`\`

**找左边界（第一个 >= target 的位置）**
\`\`\`python
def bisect_left(arr, target):
    left, right = 0, len(arr)
    
    while left < right:
        mid = left + (right - left) // 2
        if arr[mid] < target:
            left = mid + 1
        else:
            right = mid
    
    return left
\`\`\`

**找右边界（最后一个 <= target 的位置）**
\`\`\`python
def bisect_right(arr, target):
    left, right = 0, len(arr)
    
    while left < right:
        mid = left + (right - left) // 2
        if arr[mid] <= target:
            left = mid + 1
        else:
            right = mid
    
    return left - 1
\`\`\`

### ⏱️ 复杂度
| 情况 | 复杂度 |
|:---|:---|
| 时间 | O(log n) |
| 空间 | O(1) |

### ⚠️ 前置条件
- ✅ 数组必须**有序**
- ✅ 支持**随机访问**（数组）

### 🎯 常见变体
1. **查找目标值**
2. **查找左边界**
3. **查找右边界**
4. **搜索旋转排序数组**
5. **寻找峰值**

### 📝 相关题目
- [搜索旋转排序数组 (LeetCode 33)](https://leetcode.cn/problems/search-in-rotated-sorted-array/)
- [在排序数组中查找元素的第一个和最后一个位置 (LeetCode 34)](https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/)
- [搜索插入位置 (LeetCode 35)](https://leetcode.cn/problems/search-insert-position/)`
    },
    
    // ----- 算法思想 -----
    "dp": {
        keywords: ["动态规划", "DP", "dynamic programming", "Dynamic Programming", "dp"],
        answer: `## 📊 动态规划 (Dynamic Programming)

将复杂问题分解为重叠子问题，通过记忆化避免重复计算。

### 🎯 核心思想

**1. 最优子结构**
> 大问题的最优解包含子问题的最优解

**2. 重叠子问题**
> 子问题被重复计算 → 需要记忆化

**3. 状态转移方程**
> 定义问题之间的关系

### 📝 解题步骤

\`\`\`
1. 定义状态 (dp[i] 的含义)
2. 找到状态转移方程
3. 确定初始条件 / base case
4. 确定遍历顺序
5. 优化（如需要）
\`\`\`

### 💻 经典示例：斐波那契

**递归（暴力的指数级）**
\`\`\`python
def fib(n):
    if n <= 1:
        return n
    return fib(n-1) + fib(n-2)  # 有大量重复计算
# 时间: O(2^n), 空间: O(n)递归栈
\`\`\`

**DP 记忆化（自顶向下）**
\`\`\`python
def fib_memo(n, memo={}):
    if n in memo:
        return memo[n]
    if n <= 1:
        return n
    memo[n] = fib_memo(n-1, memo) + fib_memo(n-2, memo)
    return memo[n]
# 时间: O(n), 空间: O(n)
\`\`\`

**DP 迭代（自底向上）**
\`\`\`python
def fib_dp(n):
    if n <= 1:
        return n
    dp = [0] * (n + 1)
    dp[1] = 1
    for i in range(2, n + 1):
        dp[i] = dp[i-1] + dp[i-2]
    return dp[n]
# 时间: O(n), 空间: O(n)

# 空间优化
def fib_optimized(n):
    if n <= 1:
        return n
    prev, curr = 0, 1
    for _ in range(2, n + 1):
        prev, curr = curr, prev + curr
    return curr
# 时间: O(n), 空间: O(1)
\`\`\`

### 📊 DP 分类

| 类型 | 状态定义 | 经典问题 |
|:---|:---|:---|
| 线性DP | dp[i] | 斐波那契、爬楼梯 |
| 背包DP | dp[i][w] | 0/1背包、完全背包 |
| 区间DP | dp[i][j] | 合并石子 |
| 树形DP | 树上状态 | 树的最长路径 |
| 状态压缩DP | 二进制状态 | 旅行商问题 |

### 📝 经典问题

**1. 爬楼梯 (LeetCode 70)**
\`\`\`python
def climbStairs(n):
    if n <= 2:
        return n
    dp = [0] * (n + 1)
    dp[1], dp[2] = 1, 2
    for i in range(3, n + 1):
        dp[i] = dp[i-1] + dp[i-2]
    return dp[n]
\`\`\`

**2. 0/1 背包**
\`\`\`python
def knapsack(weights, values, capacity):
    n = len(weights)
    dp = [[0] * (capacity + 1) for _ in range(n + 1)]
    
    for i in range(1, n + 1):
        for w in range(capacity + 1):
            if w >= weights[i-1]:
                dp[i][w] = max(
                    dp[i-1][w],  # 不选
                    dp[i-1][w-weights[i-1]] + values[i-1]  # 选
                )
            else:
                dp[i][w] = dp[i-1][w]
    
    return dp[n][capacity]
\`\`\`

**3. 最长递增子序列 (LIS)**
\`\`\`python
def lengthOfLIS(nums):
    if not nums:
        return 0
    n = len(nums)
    dp = [1] * n
    
    for i in range(n):
        for j in range(i):
            if nums[j] < nums[i]:
                dp[i] = max(dp[i], dp[j] + 1)
    
    return max(dp)
\`\`\`

### 📝 相关题目
- [爬楼梯 (LeetCode 70)](https://leetcode.cn/problems/climbing-stairs/)
- [打家劫舍 (LeetCode 198)](https://leetcode.cn/problems/house-robber/)
- [最长递增子序列 (LeetCode 300)](https://leetcode.cn/problems/longest-increasing-subsequence/)
- [背包问题 (LeetCode 416)](https://leetcode.cn/problems/partition-equal-subset-sum/)`
    },
    
    "greedy": {
        keywords: ["贪心", "greedy", "Greedy", "贪心算法", "贪婪"],
        answer: `## 🎯 贪心算法 (Greedy)

每一步都选择当前最优，期望得到全局最优。

### 💡 核心思想
\`\`\`
局部最优 → 全局最优 ?

关键：证明每一步选择都是安全的
\`\`\`

### ⚠️ 不是所有问题都能用贪心

**能用贪心的条件：**
1. **贪心选择性质**：每一步的最优解可以由子问题的最优解推出
2. **最优子结构**：全局最优解包含子问题的最优解

### 💻 经典示例

**1. 活动选择问题**
\`\`\`python
def activity_selection(activities):
    # activities: [(start, end), ...]
    # 按结束时间排序
    activities.sort(key=lambda x: x[1])
    
    count = 1
    last_end = activities[0][1]
    selected = [activities[0]]
    
    for i in range(1, len(activities)):
        if activities[i][0] >= last_end:
            count += 1
            last_end = activities[i][1]
            selected.append(activities[i])
    
    return count, selected
\`\`\`

**2. 硬币找零（尽量用大面值）**
\`\`\`python
def coin_change(coins, amount):
    coins.sort(reverse=True)  # 从大到小
    count = 0
    for coin in coins:
        if amount >= coin:
            n = amount // coin
            count += n
            amount -= n * coin
    return count if amount == 0 else -1
\`\`\`

**3. 哈夫曼编码**
\`\`\`python
import heapq

def huffman_coding(freq):
    heap = [[w, [ch, '']] for ch, w in freq.items()]
    heapq.heapify(heap)
    
    while len(heap) > 1:
        left = heapq.heappop(heap)
        right = heapq.heappop(heap)
        for pair in left[1:]:
            pair[1] = '0' + pair[1]
        for pair in right[1:]:
            pair[1] = '1' + pair[1]
        heapq.heappush(heap, [left[0] + right[0]] + left[1:] + right[1:])
    
    return {ch: code for ch, code in heap[0][1:]}
\`\`\`

### 📊 贪心 vs 动态规划

| 特性 | 贪心 | 动态规划 |
|:---|:---|:---|
| 选择策略 | 只看当前最优 | 考虑所有子问题 |
| 最优性 | 不一定 | 一定 |
| 时间 | 通常 O(n) | 通常 O(n²) 或更高 |
| 适用 | 满足贪心条件 | 一般优化问题 |

### 💡 经典问题

| 问题 | 贪心策略 |
|:---|:---|
| 活动选择 | 选结束最早的 |
| 钱币找零 | 用最大面值 |
| 哈夫曼编码 | 频率低的用长编码 |
| 最小生成树 | Kruskal/Prim |
| 单源最短路 | Dijkstra |

### 📝 相关题目
- [分发饼干 (LeetCode 455)](https://leetcode.cn/problems/assign-cookies/)
- [柠檬水找零 (LeetCode 860)](https://leetcode.cn/problems/lemonade-change/)`
    },
    
    "recursion": {
        keywords: ["递归", "recursion", "Recursion", "递归调用"],
        answer: `## 🔄 递归 (Recursion)

函数调用自身的编程技巧，是分治思想的基础。

### 🎯 递归三要素

**1. 终止条件 (Base Case)**
> 什么时候停止递归

**2. 递归关系 (Recursive Case)**
> 如何将问题分解为子问题

**3. 返回结果**
> 每层递归返回什么

### 💻 代码模板
\`\`\`python
def recursion(params):
    # 1. 终止条件（最重要！）
    if 终止条件:
        return 结果
    
    # 2. 处理当前层逻辑
    处理逻辑
    
    # 3. 递归调用（缩小问题规模）
    result = recursion(更新后的参数)
    
    # 4. 合并结果
    return 合并(当前结果, result)
\`\`\`

### 📊 递归 vs 迭代

| 特性 | 递归 | 迭代 |
|:---|:---|:---|
| 代码可读性 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| 性能 | 有函数调用开销 | 更快 |
| 栈空间 | O(n) 递归栈 | O(1) |
| 适用场景 | 树、分治、回溯 | 线性遍历 |

### 💡 经典递归问题

**1. 阶乘**
\`\`\`python
def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)
\`\`\`

**2. 二叉树遍历**
\`\`\`python
def inorder(root):
    if not root:
        return []
    return inorder(root.left) + [root.val] + inorder(root.right)
\`\`\`

**3. 汉诺塔**
\`\`\`python
def hanoi(n, from_rod, to_rod, aux_rod):
    if n == 1:
        print(f"Move disk 1 from {from_rod} to {to_rod}")
        return
    hanoi(n - 1, from_rod, aux_rod, to_rod)
    print(f"Move disk {n} from {from_rod} to {to_rod}")
    hanoi(n - 1, aux_rod, to_rod, from_rod)

# 移动次数: 2^n - 1
\`\`\`

### ⚠️ 递归的注意事项

**1. 栈溢出风险**
\`\`\`python
# 深度过大时会栈溢出
# 解决方案：改用迭代或尾递归

# 尾递归优化（Python不支持，但语言层面支持）
def fib_tail(n, a=0, b=1):
    if n == 0:
        return a
    return fib_tail(n-1, b, a+b)
\`\`\`

**2. 重复计算**
\`\`\`python
# 斐波那契递归有大量重复计算
# 解决方案：记忆化
from functools import lru_cache

@lru_cache(maxsize=None)
def fib_memo(n):
    if n < 2:
        return n
    return fib_memo(n-1) + fib_memo(n-2)
\`\`\`

### 🔍 什么时候用递归？
- ✅ 树/图的遍历
- ✅ 分治算法（快速排序、归并排序）
- ✅ 回溯算法（N皇后、迷宫）
- ✅ 动态规划（自顶向下版本）`
    },
    
    "backtracking": {
        keywords: ["回溯", "backtracking", "Backtracking", "回溯法", "八皇后"],
        answer: `## 🔙 回溯算法 (Backtracking)

通过**枚举**所有可能解，找出满足条件的解。

### 💡 核心思想
\`\`\`
回溯 = 递归 + 剪枝

深度优先搜索 + 在不合适的地方"回头"
\`\`\`

### 📝 算法框架
\`\`\`python
def backtrack(路径, 选择列表):
    if 满足结束条件:
        结果.append(路径.copy())
        return
    
    for 选择 in 选择列表:
        if 满足约束条件(选择):
            做选择
            backtrack(新路径, 新选择列表)
            撤销选择  # 回溯的关键！
\`\`\`

### 💻 经典问题

**1. 全排列 (LeetCode 46)**
\`\`\`python
def permute(nums):
    result = []
    
    def backtrack(path, used):
        if len(path) == len(nums):
            result.append(path.copy())
            return
        
        for i in range(len(nums)):
            if used[i]:
                continue
            used[i] = True
            path.append(nums[i])
            backtrack(path, used)
            path.pop()
            used[i] = False
    
    backtrack([], [False] * len(nums))
    return result
\`\`\`

**2. 子集 (LeetCode 78)**
\`\`\`python
def subsets(nums):
    result = []
    
    def backtrack(start, path):
        result.append(path.copy())
        for i in range(start, len(nums)):
            path.append(nums[i])
            backtrack(i + 1, path)
            path.pop()
    
    backtrack(0, [])
    return result
\`\`\`

**3. N皇后 (LeetCode 51)**
\`\`\`python
def solveNQueens(n):
    result = []
    
    def backtrack(row, cols, diag1, diag2, path):
        if row == n:
            board = []
            for i in range(n):
                line = ['.'] * n
                line[path[i]] = 'Q'
                board.append(''.join(line))
            result.append(board)
            return
        
        for col in range(n):
            d1, d2 = row - col, row + col
            if col in cols or d1 in diag1 or d2 in diag2:
                continue
            cols.add(col)
            diag1.add(d1)
            diag2.add(d2)
            path.append(col)
            
            backtrack(row + 1, cols, diag1, diag2, path)
            
            path.pop()
            cols.remove(col)
            diag1.remove(d1)
            diag2.remove(d2)
    
    backtrack(0, set(), set(), set(), [])
    return result
\`\`\`

**4. 组合总和 (LeetCode 39)**
\`\`\`python
def combinationSum(candidates, target):
    result = []
    
    def backtrack(start, path, remaining):
        if remaining == 0:
            result.append(path.copy())
            return
        if remaining < 0:
            return
        
        for i in range(start, len(candidates)):
            path.append(candidates[i])
            backtrack(i, path, remaining - candidates[i])
            path.pop()
    
    backtrack(0, [], target)
    return result
\`\`\`

### 🎯 剪枝技巧
\`\`\`python
# 排序后剪枝
candidates.sort()
def backtrack(start, path, remaining):
    for i in range(start, len(candidates)):
        if candidates[i] > remaining:
            break  # 剪枝
        # ...
\`\`\`

### 📊 回溯 vs DFS

| 特性 | 回溯 | DFS |
|:---|:---|:---|
| 目标 | 找所有解/最优解 | 遍历所有节点 |
| 剪枝 | 有 | 无 |
| 撤销选择 | 必须 | 不需要 |
| 应用 | 组合问题 | 图遍历 |

### 📝 相关题目
- [全排列 (LeetCode 46)](https://leetcode.cn/problems/permutations/)
- [子集 (LeetCode 78)](https://leetcode.cn/problems/subsets/)
- [N皇后 (LeetCode 51)](https://leetcode.cn/problems/n-queens/)
- [括号生成 (LeetCode 22)](https://leetcode.cn/problems/generate-parentheses/)`
    },
    
    // ----- 其他重要主题 -----
    "complexity": {
        keywords: ["复杂度", "时间复杂度", "空间复杂度", "Big O", "大O", "时间", "空间"],
        answer: `## 📊 算法复杂度分析

复杂度分析是评估算法效率的核心技能。

### 📈 常见时间复杂度

| 复杂度 | 名称 | 增长率 | 示例 |
|:---|:---|:---|:---|
| O(1) | 常数阶 | 不变 | 哈希表查找 |
| O(log n) | 对数阶 | 减慢 | 二分搜索 |
| O(n) | 线性阶 | 成比例 | 遍历数组 |
| O(n log n) | 线性对数 | 略快于n² | 归并/快排 |
| O(n²) | 平方阶 | n的平方 | 冒泡/选择 |
| O(n³) | 立方阶 | n的立方 | 矩阵乘法 |
| O(2ⁿ) | 指数阶 | 爆炸式 | 斐波那契(递归) |
| O(n!) | 阶乘阶 | 最慢 | 全排列 |

### 📊 复杂度对比

\`\`\`
n=10:    O(n!) ≈ 3.6M   ❌ 不可用
n=10:    O(2ⁿ)  ≈ 1K     ⚠️ 慎用
n=100:   O(n²) ≈ 10K     ⚠️ 勉强
n=1000:  O(n²) ≈ 1M      🐢 慢
n=10⁵:   O(n log n) ≈ 1.7M ✅
n=10⁶:   O(n) ≈ 1M       ✅ 快
\`\`\`

### 💡 复杂度速记

\`\`\`
O(1) < O(log n) < O(√n) < O(n) < O(n log n) < O(n²) < O(n³) < O(2ⁿ) < O(n!)

 口诀: 常对线平立阶
\`\`\`

### 📝 如何分析复杂度

**1. 只看最高阶**
\`\`\`
O(n² + n) = O(n²)
O(2n + 3) = O(n)
O(n² + m) = O(max(n², m))
\`\`\`

**2. 不考虑常数**
\`\`\`
O(2n) = O(n)
O(0.5n²) = O(n²)
\`\`\`

**3. 多个数据规模**
\`\`\`
O(m + n)
O(m × n)
\`\`\`

### 📊 空间复杂度

| 复杂度 | 说明 | 示例 |
|:---|:---|:---|
| O(1) | 原地算法 | 冒泡排序 |
| O(log n) | 递归栈 | 快速排序 |
| O(n) | 线性空间 | 归并排序 |
| O(n²) | 二维结构 | 动态规划表 |

### 🎯 分析技巧

**循环分析：**
\`\`\`python
# O(n) - 单循环
for i in range(n):
    ...

# O(n²) - 嵌套循环
for i in range(n):
    for j in range(n):
        ...

# O(n³) - 三层嵌套
for i in range(n):
    for j in range(n):
        for k in range(n):
            ...
\`\`\`

**递归分析：**
\`\`\`python
# 主定理: T(n) = aT(n/b) + f(n)
# 
# 如果 f(n) < n^(log_b(a)): → O(n^(log_b(a)))
# 如果 f(n) = n^(log_b(a)): → O(f(n) × log n)
# 如果 f(n) > n^(log_b(a)): → O(f(n))
#
# 二分搜索: T(n) = T(n/2) + O(1) → O(log n)
# 归并排序: T(n) = 2T(n/2) + O(n) → O(n log n)
\`\`\``
    },
    
    "trie": {
        keywords: ["前缀树", "Trie", "字典树", "trie", "prefix"],
        answer: `## 🌳 前缀树 (Trie)

专门处理字符串搜索的树结构，又叫字典树。

### 💡 核心思想
\`\`\`
           (root)
          /  |  \\
         a   b   c
        / \\  |   \\
       p   l o ll  o...
      /
     p
     
"apple", "app", "apply", "ball"
\`\`\`

每个节点代表一个字符，从根到叶子的路径是一个字符串。

### 💻 代码实现
\`\`\`python
class TrieNode:
    def __init__(self):
        self.children = {}  # char -> TrieNode
        self.is_end = False  # 是否是单词结尾
        self.word = None     # 完整的单词（可选）

class Trie:
    def __init__(self):
        self.root = TrieNode()
    
    def insert(self, word):
        node = self.root
        for char in word:
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]
        node.is_end = True
        node.word = word
    
    def search(self, word):
        node = self._search_prefix(word)
        return node is not None and node.is_end
    
    def startsWith(self, prefix):
        return self._search_prefix(prefix) is not None
    
    def _search_prefix(self, prefix):
        node = self.root
        for char in prefix:
            if char not in node.children:
                return None
            node = node.children[char]
        return node
\`\`\`

### ⏱️ 复杂度
| 操作 | 时间 | 空间 |
|:---|:---:|:---:|
| 插入 | O(m) | O(m) |
| 搜索 | O(m) | - |
| 前缀查询 | O(m) | - |

> m = 字符串长度

### 🎯 经典应用

**1. 前缀匹配**
\`\`\`python
def autocomplete(prefix):
    node = trie._search_prefix(prefix)
    if not node:
        return []
    
    results = []
    def dfs(n):
        if n.is_end:
            results.append(n.word)
        for child in n.children.values():
            dfs(child)
    
    dfs(node)
    return results
\`\`\`

**2. 字符串统计**
\`\`\`python
# 统计前缀出现次数
class TrieNode:
    def __init__(self):
        self.children = {}
        self.count = 0  # 经过该节点的次数

class Trie:
    def insert(self, word):
        node = self.root
        for char in word:
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]
            node.count += 1
\`\`\`

### 📊 Trie vs 哈希表

| 特性 | Trie | 哈希表 |
|:---|:---|:---|
| 插入 | O(m) | O(m) |
| 搜索 | O(m) | O(m) |
| 前缀查询 | ✅ O(m) | ❌ 需遍历 |
| 空间 | 较大(共享前缀) | 较小 |
| 有序性 | ✅ 有序 | ❌ 无序 |

### 📝 相关题目
- [实现 Trie (LeetCode 208)](https://leetcode.cn/problems/implement-trie-prefix-tree/)
- [添加与搜索单词 (LeetCode 211)](https://leetcode.cn/problems/design-add-and-search-words-data-structure/)
- [单词搜索 II (LeetCode 212)](https://leetcode.cn/problems/word-search-ii/)`
    },
    
    "segment-tree": {
        keywords: ["线段树", "segment tree", "segment-tree", "区间树"],
        answer: `## 🌲 线段树 (Segment Tree)

高效处理**区间查询**和**区间修改**的数据结构。

### 💡 核心思想
\`\`\`
数组: [1, 3, 5, 7, 9, 11]
索引:   0  1  2  3  4   5

线段树:
              [0,5] sum=36
           /           \\
        [0,3]          [4,5]
        sum=16          sum=20
       /     \\         /     \\
    [0,1]   [2,3]    [4,4]   [5,5]
    sum=4   sum=12    val=9   val=11
   /    \\
 [0,0] [1,1]
 val=1  val=3
\`\`\`

### 💻 代码实现
\`\`\`python
class SegTree:
    def __init__(self, arr):
        self.n = len(arr)
        self.tree = [0] * (4 * self.n)
        self.arr = arr
        if self.n > 0:
            self.build(0, 0, self.n - 1)
    
    def build(self, node, start, end):
        if start == end:
            self.tree[node] = self.arr[start]
        else:
            mid = (start + end) // 2
            self.build(2*node+1, start, mid)
            self.build(2*node+2, mid+1, end)
            self.tree[node] = self.tree[2*node+1] + self.tree[2*node+2]
    
    def query(self, left, right):
        return self._query(0, 0, self.n-1, left, right)
    
    def _query(self, node, start, end, left, right):
        if right < start or left > end:
            return 0
        if left <= start and end <= right:
            return self.tree[node]
        mid = (start + end) // 2
        return (self._query(2*node+1, start, mid, left, right) +
                self._query(2*node+2, mid+1, end, left, right))
    
    def update(self, idx, val):
        self._update(0, 0, self.n-1, idx, val)
    
    def _update(self, node, start, end, idx, val):
        if start == end:
            self.tree[node] = val
        else:
            mid = (start + end) // 2
            if idx <= mid:
                self._update(2*node+1, start, mid, idx, val)
            else:
                self._update(2*node+2, mid+1, end, idx, val)
            self.tree[node] = self.tree[2*node+1] + self.tree[2*node+2]
\`\`\`

### ⏱️ 复杂度
| 操作 | 时间 | 空间 |
|:---|:---:|:---:|
| 构建 | O(n) | O(n) |
| 区间查询 | O(log n) | - |
| 单点更新 | O(log n) | - |
| 区间更新 | O(log n) | - |

### 🎯 应用场景

- 📊 **区间求和/最大值**
- 📈 **动态数组的区间查询**
- 🔢 **区间修改 + 区间查询**

### 📊 对比其他结构

| 结构 | 区间查询 | 单点更新 | 区间更新 |
|:---|:---:|:---:|:---:|
| 数组 | O(n) | O(1) | O(1) |
| 前缀和 | O(1) | O(n) | O(n) |
| 线段树 | O(log n) | O(log n) | O(log n) |
| 树状数组 | O(log n) | O(log n) | O(log n) |`
    },
    
    "union-find": {
        keywords: ["并查集", "Union-Find", "union find", "不相交集合", "并集"],
        answer: `## 🔗 并查集 (Union-Find)

处理**合并**和**查找**操作的数据结构，用于处理不相交集合的合并和查询。

### 💡 核心思想
\`\`\`
初始化:  每个元素都是自己的集合
         [0] [1] [2] [3] [4]
         
合并(0,1):  0和1合并成一个集合
          [0,1] [2] [3] [4]
          parent[0]=0, parent[1]=0
          
合并(2,3):  2和3合并
          [0,1] [2,3] [4]
          
查找(3):   找到3的根节点 0
\`\`\`

### 💻 代码实现
\`\`\`python
class UnionFind:
    def __init__(self, n):
        self.parent = list(range(n))  # 父节点
        self.rank = [0] * n          # 秩/深度
    
    def find(self, x):
        """路径压缩 - 找根节点"""
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])  # 直接指向根
        return self.parent[x]
    
    def union(self, x, y):
        """按秩合并"""
        px, py = self.find(x), self.find(y)
        if px == py:
            return  # 已经在同一集合
        
        if self.rank[px] < self.rank[py]:
            px, py = py, px
        self.parent[py] = px
        if self.rank[px] == self.rank[py]:
            self.rank[px] += 1
    
    def connected(self, x, y):
        return self.find(x) == self.find(y)
\`\`\`

### ⏱️ 复杂度（优化后）
| 操作 | 时间 | 说明 |
|:---|:---:|:---|
| find | O(α(n)) | α是Ackermann，极小 |
| union | O(α(n)) | 反阿克曼函数 |
| connected | O(α(n)) | ~O(1) |

### 🎯 经典应用

**1. 岛屿数量**
\`\`\`python
def numIslands(grid):
    if not grid:
        return 0
    
    m, n = len(grid), len(grid[0])
    uf = UnionFind(m * n)
    
    def idx(i, j):
        return i * n + j
    
    for i in range(m):
        for j in range(n):
            if grid[i][j] == '1':
                if i > 0 and grid[i-1][j] == '1':
                    uf.union(idx(i,j), idx(i-1,j))
                if j > 0 and grid[i][j-1] == '1':
                    uf.union(idx(i,j), idx(i,j-1))
    
    return sum(1 for i in range(m) for j in range(n) 
               if grid[i][j] == '1' and uf.find(idx(i,j)) == idx(i,j))
\`\`\`

**2. Kruskal 最小生成树**
\`\`\`python
def kruskal(edges, n):
    edges.sort(key=lambda x: x[2])
    uf = UnionFind(n)
    mst = []
    
    for u, v, w in edges:
        if not uf.connected(u, v):
            uf.union(u, v)
            mst.append((u, v, w))
            if len(mst) == n - 1:
                break
    
    return mst
\`\`\`

**3. 朋友圈/分组问题**
\`\`\`python
def findCircleNum(M):
    n = len(M)
    uf = UnionFind(n)
    
    for i in range(n):
        for j in range(i+1, n):
            if M[i][j] == 1:
                uf.union(i, j)
    
    return sum(1 for i in range(n) if uf.find(i) == i)
\`\`\`

### 📝 相关题目
- [岛屿数量 (LeetCode 200)](https://leetcode.cn/problems/number-of-islands/)
- [省份数量 (LeetCode 547)](https://leetcode.cn/problems/number-of-provinces/)
- [账户合并 (LeetCode 721)](https://leetcode.cn/problems/accounts-merge/)`
    },
    
    // ----- 比较类问题 -----
    "array-vs-linked-list": {
        keywords: ["数组和链表", "array linked list区别", "array vs linked list", "数组 链表 优缺点"],
        answer: `## 📊 数组 vs 链表 对比

这是面试中最常问的问题之一！

### 🏗️ 内存结构

\`\`\`
数组 (连续内存):
[0x1000] [0x1004] [0x1008] [0x100C] [0x1010]
   1        2        3        4        5
   ↑       ↑
   索引0   索引1

链表 (分散内存):
   [1|->] -> [2|->] -> [3|->] -> [4|null]
    ↑        ↑
   head     next指针
\`\`\`

### 📊 核心对比

| 特性 | 数组 | 链表 |
|:---|:---|:---|
| 内存 | 连续 | 分散 |
| 访问 | O(1) | O(n) |
| 头部插入 | O(n) | O(1) |
| 尾部插入 | O(1)* | O(1) |
| 中间插入 | O(n) | O(1)** |
| 空间利用 | 高（无指针） | 低（有指针开销） |
| 缓存 | ✅ 友好 | ❌ 不友好 |
| 大小 | 固定 | 动态 |

> *数组追加可能需要扩容
> **O(1)的前提是已知位置

### 💡 选择建议

**用数组的场景：**
- ✅ 需要频繁随机访问
- ✅ 数据量固定
- ✅ 需要缓存友好
- ✅ 内存空间有限

**用链表的场景：**
- ✅ 需要频繁插入/删除
- ✅ 数据量不确定
- ✅ 不需要随机访问
- ✅ 内存碎片多

### 🎯 经典问题

**为什么链表的插入是O(1)但查找是O(n)？**
\`\`\`
插入 O(1):  已知位置，直接修改指针
            prev.next = new_node
            new_node.next = prev.next
            
查找 O(n):  不知道位置，需要从头遍历
            curr = head
            while curr and curr.val != target:
                curr = curr.next
\`\`\`

**为什么数组的随机访问是O(1)？**
\`\`\`
数组内存连续，可以通过公式直接计算地址
arr[i] 的地址 = 首地址 + i * 每个元素大小
\`\`\`
`
    },
    
    "stack-vs-queue": {
        keywords: ["栈和队列", "stack queue区别", "栈 队列 对比", "stack vs queue"],
        answer: `## 📚 栈 vs 队列 对比

### 🎯 核心区别

| 特性 | 栈 (Stack) | 队列 (Queue) |
|:---|:---|:---|
| 原则 | **LIFO** 后进先出 | **FIFO** 先进先出 |
| 操作 | 一端（栈顶） | 两端（队首/队尾） |
| 入 | push() | enqueue() |
| 出 | pop() | dequeue() |
| 查看 | top() | front() |

### 🏠 现实类比

**栈 — 🥞 叠盘子**
- 最后放上去的盘子最先被拿走
- 你只能看到/拿到最上面的盘子

**队列 — 🏪 奶茶店排队**
- 先来的先点单
- 只能从队尾加入，从队首离开

### 💻 代码对比
\`\`\`python
# 栈
stack = []
stack.append(x)  # push
stack.pop()      # pop
stack[-1]        # top

# 队列
from collections import deque
queue = deque()
queue.append(x)  # enqueue
queue.popleft()  # dequeue
queue[0]         # front
\`\`\`

### 🎯 经典应用对比

| 应用 | 用栈还是队列 | 原因 |
|:---|:---|:---|
| 函数调用 | 栈 | 保存返回地址 |
| 括号匹配 | 栈 | 匹配最近的一个 |
| 表达式求值 | 栈 | 操作符优先级 |
| BFS | 队列 | 按层遍历 |
| 滑动窗口 | 队列/双端队列 | 维护窗口元素 |
| 任务调度 | 队列 | 公平排队 |
| 浏览器后退 | 栈 | 最近访问先返回 |
| 撤销操作 | 栈 | 最近操作先撤销 |

### 🔄 栈和队列的关系

\`\`\`
队列 → 栈: 两个队列可以实现栈
栈 → 队列: 两个栈可以实现队列
\`\`\`

**用两个栈实现队列:**
\`\`\`python
class MyQueue:
    def __init__(self):
        self.stack1 = []  # 入队用
        self.stack2 = []  # 出队用
    
    def push(self, x):
        self.stack1.append(x)
    
    def pop(self):
        if not self.stack2:
            while self.stack1:
                self.stack2.append(self.stack1.pop())
        return self.stack2.pop()
\`\`\`
`
    },
    
    "quick-vs-merge": {
        keywords: ["快排 归并", "quick merge区别", "快速排序 归并排序", "快排 归并 对比"],
        answer: `## ⚡ 快速排序 vs 归并排序 对比

两个最重要的 O(n log n) 排序算法！

### 🏗️ 核心思想对比

| 特性 | 快速排序 | 归并排序 |
|:---|:---|:---|
| 思想 | 先分后治 | 先分后合 |
| 顺序 | 局部 → 全局 | 全局 → 局部 |
| pivot | 需要 | 不需要 |

\`\`\`
快排: 选pivot → 分左右 → 递归处理左右
归并: 分成单元素 → 两两合并 → 有序合并
\`\`\`

### 📊 复杂度对比

| 复杂度 | 快速排序 | 归并排序 |
|:---|:---|:---|
| 平均 | O(n log n) | O(n log n) |
| 最坏 | O(n²) | O(n log n) |
| 最好 | O(n log n) | O(n log n) |
| 空间 | O(log n) | O(n) |
| 稳定性 | ❌ 不稳定 | ✅ 稳定 |

### 💡 什么时候用哪个？

**用快排：**
- ✅ 一般情况下的首选
- ✅ 需要原地排序
- ✅ 数据在内存中（数组）
- ✅ 缓存友好性要求高

**用归并排序：**
- ✅ 需要稳定排序
- ✅ 数据在磁盘/外存
- ✅ 数据是链表结构
- ✅ 需要求逆序对

### 🎯 面试常问

**为什么快排实际更快？**
\`\`\`
1. 原地排序，只交换元素
2. 缓存命中率高（访问连续）
3. 常数因子小

归并排序需要额外数组，空间拷贝开销大
\`\`\`

**为什么归并排序是稳定的？**
\`\`\`
合并时: if left[i] <= right[j]:
                ↑ 相等时取左边，不改变相对顺序
快排:   if arr[j] <= pivot:
                ↑ 相等时可能交换，破坏稳定性
\`\`\`

**快排的最坏情况是什么？**
\`\`\`
1. 数组已有序（选首/尾元素作pivot）
2. 所有元素相同
3. 逆序数组

解决方案: 随机选pivot / 三数取中
\`\`\`
`
    },
    
    "bfs-vs-dfs": {
        keywords: ["bfs dfs 区别", "bfs vs dfs", "广度优先 深度优先 对比", "BFS DFS"],
        answer: `## 🔍 BFS vs DFS 对比

两种最基本的图遍历算法！

### 🏃 遍历顺序对比

\`\`\`
图结构:
    A
   / \\
  B   C
 /|   |\\
D  E   F G

BFS (队列): A → B → C → D → E → F → G
DFS (栈):   A → B → D → E → C → F → G
\`\`\`

### 📊 核心对比

| 特性 | BFS | DFS |
|:---|:---|:---|
| 数据结构 | **队列** | **栈/递归** |
| 遍历顺序 | **按层**（近→远） | **一条路走到黑** |
| 最短路径 | ✅ 能找到 | ❌ 不能 |
| 空间复杂度 | O(width) | O(depth) |
| 代码复杂度 | 中等 | 简单（递归） |

### 🎯 应用场景对比

| 场景 | 用哪个 | 原因 |
|:---|:---|:---|
| 最短路径(无权) | BFS | 第一次遇到就是最短 |
| 层序遍历树 | BFS | 按层处理 |
| 拓扑排序 | DFS | 利用回溯顺序 |
| 连通分量 | 都可以 | - |
| 路径总和 | DFS | 需要完整路径 |
| 岛屿数量 | 都可以 | - |

### 💻 代码模板

**BFS 模板**
\`\`\`python
from collections import deque

def bfs(graph, start):
    visited = {start}
    queue = deque([start])
    
    while queue:
        node = queue.popleft()
        for neighbor in graph[node]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)
\`\`\`

**DFS 模板**
\`\`\`python
def dfs(graph, start, visited=None):
    if visited is None:
        visited = set()
    
    visited.add(start)
    for neighbor in graph[start]:
        if neighbor not in visited:
            dfs(graph, neighbor, visited)
\`\`\`

### 🎯 面试要点

**什么时候用 BFS？**
- ✅ 求**最短路径**（无权图）
- ✅ 找**最近的解**
- ✅ 层序遍历
- ✅ 扩散性问题（蔓延）

**什么时候用 DFS？**
- ✅ 找**所有解**
- ✅ 排列组合问题
- ✅ 回溯问题（N皇后）
- ✅ 拓扑排序
- ✅ 递归天然实现

**空间复杂度分析**
\`\`\`
BFS: 队列最多存一层的节点
     宽度优先 → 空间 = O(width)
     
DFS: 递归栈最多存一条路径的节点
     深度优先 → 空间 = O(depth)
\`\`\`
`
    },
    
    "greedy-vs-dp": {
        keywords: ["贪心 动态规划", "greedy dp区别", "贪心 动态规划 对比", "贪心 vs dp"],
        answer: `## 🎯 贪心 vs 动态规划 对比

两种最重要的算法思想！

### 💡 核心区别

| 特性 | 贪心 | 动态规划 |
|:---|:---|:---|
| 选择策略 | **只看当前最优** | 考虑**所有子问题** |
| 最优性 | 不一定保证 | **一定保证** |
| 子问题性质 | 无重叠要求 | **重叠子问题** |
| 时间复杂度 | 通常 O(n) | 通常 O(n²)+ |

### 🎯 贪心：局部最优 → 全局最优

\`\`\`
问题: 拿金币，最多能拿多少？
硬币面额: [5, 1, 10, 2]

贪心: 每次拿最大 → 5 + 5 = 10 ✅ 正确

但如果面额是 [6, 5, 5]:
贪心: 6 → 没了（只能拿6）
最优: 5 + 5 = 10 ✅ 更好
\`\`\`

### 📊 何时用哪个？

| 问题特征 | 适用算法 |
|:---|:---|
| 有重叠子问题 + 最优子结构 | **DP** |
| 每步能证明最优 | **贪心** |
| 需要所有解 | **DP/枚举** |
| 找最优解 | **DP** |
| 找近似最优 | **贪心** |

### 💻 典型问题对比

**1. 硬币问题**
\`\`\`python
# 动态规划 - 保证最优
def coin_change_dp(coins, amount):
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0
    for i in range(1, amount + 1):
        for coin in coins:
            if coin <= i:
                dp[i] = min(dp[i], dp[i - coin] + 1)
    return dp[amount]

# 贪心 - 不一定最优
def coin_change_greedy(coins, amount):
    coins.sort(reverse=True)
    count = 0
    for coin in coins:
        count += amount // coin
        amount %= coin
    return count
\`\`\`

**2. 活动选择（可以用贪心）**
\`\`\`python
def activity_selection(activities):
    activities.sort(key=lambda x: x[1])  # 按结束时间排序
    count = 1
    last_end = activities[0][1]
    
    for start, end in activities[1:]:
        if start >= last_end:
            count += 1
            last_end = end
    return count
\`\`\`

### 🎯 贪心选择的证明方法

**1. 数学归纳法**
- 假设前 k-1 步贪心最优
- 证明第 k 步贪心也最优

**2. 交换论证**
- 任意最优解都可以在不降低解质量的情况下转换为贪心解

### 📝 经典问题

| 问题 | 算法 | 贪心选择 |
|:---|:---|:---|
| 活动选择 | 贪心 | 选最早结束的 |
| 哈夫曼编码 | 贪心 | 频率低的编码长 |
| Dijkstra | 贪心 | 选最近未处理 |
| 背包(0/1) | DP | 不能用贪心 |
| 背包(分数) | 贪心 | 选价值/重量比大的 |
| 最短路径 | 贪心 | 选最近的 |
`
    },
    
    // ----- 学习方法类问题 -----
    "how-to-learn": {
        keywords: ["如何学习", "怎么学", "学习方法", "入门", "学习路线", "学习顺序"],
        answer: `## 📚 数据结构与算法学习路线

### 🎯 学习建议

**1. 循序渐进**
\`\`\`
基础 → 进阶 → 高级
  ↓       ↓       ↓
数组    二叉树   高级数据结构
链表    图      复杂算法
栈/队列  排序    动态规划
哈希表   搜索    回溯
\`\`\`

**2. 学习方法**
- 📖 **理论**: 理解原理，画图理解
- 💻 **实践**: 手动实现，不要只看不写
- 🏃 **练习**: 从简单开始，逐步增加难度
- 🔄 **复习**: 定期回顾，形成知识网络

**3. 推荐刷题顺序**
\`\`\`
阶段1 (入门):
- 数组、链表基础操作
- 栈、队列基础操作
- 简单递归

阶段2 (基础):
- 二叉树遍历
- 基础排序
- 二分搜索
- 简单回溯

阶段3 (进阶):
- 图的遍历
- 动态规划
- 复杂数据结构

阶段4 (高级):
- 系统设计
- 高级数据结构
- 复杂算法
\`\`\`

### 📊 复杂度速查

| 结构/算法 | 增 | 删 | 查 | 时间复杂度 |
|:---|:---:|:---:|:---:|:---|
| 数组 | O(n) | O(n) | O(1) | - |
| 链表 | O(1)* | O(1)* | O(n) | - |
| 哈希表 | O(1) | O(1) | O(1) | - |
| 二叉搜索树 | O(log n) | O(log n) | O(log n) | - |
| 堆 | - | O(log n) | O(1) | O(n log n) |
| 快排 | - | - | - | O(n log n) |
| 归并排序 | - | - | - | O(n log n) |

### 📝 推荐资源
- 📹 视频: 代码随想录、B站
- 📖 书籍: 《算法导论》、《剑指Offer》
- 🏃 刷题: LeetCode、Codeforces`
    },
    
    "interview-tips": {
        keywords: ["面试", "面试技巧", "面试题", "算法面试", "面试问题"],
        answer: `## 🎯 算法面试技巧

### 📝 面试流程

\`\`\`
1. 自我介绍 (1-2分钟)
   ↓
2. 聊项目经历 (5-10分钟)
   ↓
3. 算法题 (20-30分钟)
   ↓
4. 问面试官问题 (5分钟)
\`\`\`

### 💡 算法题解题步骤

**Step 1: 理解题目 (5分钟)**
\`\`\`
- 确认输入输出
- 确认边界条件
- 举几个例子
- 确认时间和空间要求
\`\`\`

**Step 2: 思路分析 (10分钟)**
\`\`\`
- 先想最直接的解法
- 分析复杂度
- 尝试优化
- 确定最终方案
\`\`\`

**Step 3: 代码实现 (15分钟)**
\`\`\`
- 先写框架
- 再补全细节
- 注意边界处理
\`\`\`

**Step 4: 测试验证 (5分钟)**
\`\`\`
- 手跑几个测试用例
- 检查边界情况
- 分析复杂度
\`\`\`

### 🎯 面试加分项

**✅ 加分行为**
- ✅ 先说思路再写代码
- ✅ 主动分析时间/空间复杂度
- ✅ 考虑边界情况
- ✅ 代码整洁，变量命名清晰
- ✅ 有多种解法时说明优劣
- ✅ 主动沟通，不闷头写

**❌ 扣分行为**
- ❌ 不理解题意就开始写
- ❌ 遇到困难不沟通
- ❌ 代码有明显bug
- ❌ 不考虑边界情况
- ❌ 写完不检查

### 📊 高频面试题类型

| 类型 | 出现频率 | 题目举例 |
|:---|:---:|:---|
| 二叉树 | ⭐⭐⭐⭐⭐ | 遍历、路径、构建 |
| 数组/字符串 | ⭐⭐⭐⭐⭐ | 双指针、滑动窗口 |
| 动态规划 | ⭐⭐⭐⭐⭐ | 背包、LIS |
| BFS/DFS | ⭐⭐⭐⭐ | 连通性、岛屿 |
| 链表 | ⭐⭐⭐⭐ | 反转、合并、环 |
| 排序+二分 | ⭐⭐⭐ | 查找、旋转数组 |

### 💬 面试话术模板

**没思路时:**
\`\`\`
"让我思考一下...这个问题和XX有点像，
能不能用XX的思想来解决..."
\`\`\`

**需要时间时:**
\`\`\`
"让我先理清思路...（在纸上画图思考）"
\`\`\`

**确认题意:**
\`\`\`
"我确认一下，输入是...输出是...对吗？"
\`\`\`

**分析复杂度:**
\`\`\`
"我的时间复杂度是O(n)，空间复杂度是O(1)，
因为我们只遍历了一次数组..."
\`\`\``
    }
};

// ========== 智能问答引擎 ==========
const SmartQA = {
    // 扩展关键词匹配
    expandQuery: function(query) {
        const expansions = {
            '区别': ['vs', '对比', '比较', '不同'],
            '原理': ['思想', '核心', '概念', '是什么'],
            '实现': ['代码', '怎么写', '实现方法'],
            '应用': ['用途', '场景', '用处', '能做什么'],
            '优化': ['改进', '提升', '更好'],
            '区别': ['不同', 'vs', '对比']
        };
        
        // 添加同义词
        for (const [key, synonyms] of Object.entries(expansions)) {
            for (const syn of synonyms) {
                if (query.includes(key)) {
                    query = query.replace(key, key + '|' + synonyms.join('|'));
                }
            }
        }
        return query;
    },
    
    // 组合问题识别
    detectComboQuestions: function(query) {
        const q = query.toLowerCase();
        
        // 栈和队列
        if ((q.includes('栈') && q.includes('队列')) || 
            (q.includes('stack') && q.includes('queue'))) {
            return 'stack-vs-queue';
        }
        
        // 数组和链表
        if ((q.includes('数组') && q.includes('链表')) || 
            (q.includes('array') && q.includes('linked'))) {
            return 'array-vs-linked-list';
        }
        
        // 快排和归并
        if ((q.includes('快排') && q.includes('归并')) || 
            (q.includes('quick') && q.includes('merge'))) {
            return 'quick-vs-merge';
        }
        
        // BFS和DFS
        if ((q.includes('bfs') && q.includes('dfs')) || 
            (q.includes('广度') && q.includes('深度'))) {
            return 'bfs-vs-dfs';
        }
        
        // 贪心和DP
        if ((q.includes('贪心') && q.includes('dp')) || 
            (q.includes('贪心') && q.includes('动态规划'))) {
            return 'greedy-vs-dp';
        }
        
        return null;
    },
    
    // 学习类问题识别
    detectLearningQuestion: function(query) {
        const q = query.toLowerCase();
        
        if (q.includes('学习') || q.includes('入门') || 
            q.includes('路线') || q.includes('顺序') ||
            q.includes('怎么学') || q.includes('如何入门')) {
            return 'how-to-learn';
        }
        
        if (q.includes('面试') || q.includes('技巧') ||
            q.includes('题') && q.includes('高频')) {
            return 'interview-tips';
        }
        
        return null;
    },
    
    // 生成引导回复
    generateGuidance: function(query) {
        const q = query.toLowerCase();
        const topics = [];
        
        // 检测可能的主题
        const topicMap = {
            '基础数据结构': ['数组', '链表', '栈', '队列', '哈希'],
            '树结构': ['树', '二叉树', 'BST', 'AVL', '红黑树', 'Trie'],
            '图算法': ['图', 'BFS', 'DFS', '最短路', 'MST'],
            '排序算法': ['排序', '快排', '归并', '堆排', '冒泡', '插入'],
            '算法思想': ['动态规划', '贪心', '递归', '回溯', '分治'],
            '高级结构': ['线段树', '并查集', '前缀树', '跳表']
        };
        
        for (const [topic, keywords] of Object.entries(topicMap)) {
            for (const kw of keywords) {
                if (q.includes(kw)) {
                    topics.push(topic);
                    break;
                }
            }
        }
        
        if (topics.length === 0) {
            return `## 💡 我可以帮你解答这些问题：

### 📚 数据结构
- "什么是数组？"
- "链表和数组的区别"
- "栈和队列有什么区别？"
- "二叉树有哪些遍历方式？"

### 🔧 算法
- "快速排序的原理是什么？"
- "什么是动态规划？"
- "BFS和DFS的区别"
- "什么情况下用贪心算法？"

### 🎯 学习相关
- "如何高效学习算法？"
- "面试常考的算法题有哪些？"

直接在输入框提问，我会为你详细解答！`;
        }
        
        return null; // 有具体主题，不生成引导
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
                <p>👋 对话已清除！我是数据结构与算法学习助手，有什么问题尽管问我！</p>
                <p>💡 我可以帮你解答：数据结构、算法思想、时间复杂度分析、面试技巧等问题。</p>
            </div>
        </div>
    `;
    messageHistory = [];
}

// ========== 添加消息 ==========
function addMessage(content, isUser = false) {
    const messagesEl = document.getElementById('aiChatMessages');
    const div = document.createElement('div');
    div.className = `ai-message ${isUser ? 'ai-user-message' : 'ai-bot-message'}`;
    div.style.opacity = '0';
    
    const avatar = isUser ? '👤' : '🤖';
    
    // 增强的 Markdown 渲染
    let htmlContent = content
        // 标题
        .replace(/#### (.+)/g, '<h5 style="margin:10px 0 5px;color:#ffb86c;">$1</h5>')
        .replace(/### (.+)/g, '<h4 style="margin:12px 0 6px;color:#50fa7b;">$1</h4>')
        .replace(/## (.+)/g, '<h3 style="margin:14px 0 8px;color:#8be9fd;font-size:15px;">$1</h3>')
        .replace(/# (.+)/g, '<h2 style="margin:16px 0 10px;color:#bd93f9;font-size:17px;">$1</h2>')
        // 格式
        .replace(/\*\*(.+?)\*\*/g, '<strong style="color:#f1fa8c;">$1</strong>')
        .replace(/`([^`]+)`/g, '<code style="background:#3d3d5c;padding:2px 6px;border-radius:3px;color:#ff79c6;">$1</code>')
        // 列表
        .replace(/^- (.+)/gm, '<li style="margin:4px 0;">$1</li>')
        .replace(/^• (.+)/gm, '<li style="margin:4px 0;">$1</li>')
        // 表格（简化处理）
        .replace(/\|(.+)\|/g, (match) => {
            const cells = match.split('|').filter(c => c.trim());
            return '<div style="display:flex;gap:10px;flex-wrap:wrap;">' + 
                   cells.map(c => `<span style="background:#2d2d4d;padding:4px 8px;border-radius:3px;">${c.trim()}</span>`).join('') + 
                   '</div>';
        })
        // 换行
        .replace(/\n\n/g, '</p><p style="margin:8px 0;">')
        .replace(/\n/g, '<br>');
    
    // 包装在 p 标签中
    htmlContent = `<p style="margin:8px 0;">${htmlContent}</p>`;
    
    div.innerHTML = `
        <div class="ai-message-avatar">${avatar}</div>
        <div class="ai-message-content">${htmlContent}</div>
    `;
    
    messagesEl.appendChild(div);
    messageHistory.push({ role: isUser ? 'user' : 'assistant', content });
    
    // 淡入动画
    requestAnimationFrame(() => { 
        div.style.opacity = '1'; 
        div.style.transition = 'opacity 0.3s'; 
    });
    
    // 滚动到底部
    setTimeout(() => { messagesEl.scrollTop = messagesEl.scrollHeight; }, 50);
    
    // 渲染公式（如果可用）
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

// ========== 增强的智能匹配 ==========
function findKnowledge(query) {
    const q = query.toLowerCase();
    
    // 1. 检查是否是组合问题
    const comboAnswer = SmartQA.detectComboQuestions(query);
    if (comboAnswer && AI_KNOWLEDGE_BASE[comboAnswer]) {
        return AI_KNOWLEDGE_BASE[comboAnswer].answer;
    }
    
    // 2. 检查是否是学习类问题
    const learningAnswer = SmartQA.detectLearningQuestion(query);
    if (learningAnswer) {
        return AI_KNOWLEDGE_BASE[learningAnswer].answer;
    }
    
    // 3. 遍历知识库，找到最佳匹配
    let bestMatch = null;
    let bestScore = 0;
    let matchedKey = '';
    
    for (const [key, item] of Object.entries(AI_KNOWLEDGE_BASE)) {
        let score = 0;
        
        // 关键词匹配
        for (const kw of item.keywords) {
            if (q.includes(kw.toLowerCase())) {
                score += kw.length * 2; // 关键词权重更高
            }
        }
        
        // 智能加权
        if (q.includes("排序") && (key === "quick-sort" || key === "merge-sort" || key === "sorting")) score += 10;
        if (q.includes("遍历") && (key === "binary-tree" || key === "graph")) score += 10;
        if (q.includes("搜索") && (key === "binary-search" || key === "bfs-dfs")) score += 10;
        if (q.includes("最短路径") && key === "dijkstra") score += 15;
        if (q.includes("最短路") && key === "dijkstra") score += 15;
        if (q.includes("最小生成树") && key === "mst") score += 15;
        if (q.includes("哈希") && key === "hash-table") score += 10;
        if (q.includes("字符串") && key === "trie") score += 10;
        if (q.includes("前缀") && key === "trie") score += 10;
        if (q.includes("平衡") && (key === "avl" || key === "red-black")) score += 15;
        if (q.includes("线段") && key === "segment-tree") score += 15;
        if (q.includes("区间") && key === "segment-tree") score += 10;
        if (q.includes("并查") && key === "union-find") score += 15;
        if (q.includes("union") && key === "union-find") score += 15;
        if (q.includes("背包") && key === "dp") score += 15;
        if (q.includes("斐波那契") && key === "dp") score += 10;
        if (q.includes("爬楼梯") && key === "dp") score += 10;
        if (q.includes("全排列") && key === "backtracking") score += 15;
        if (q.includes("八皇后") && key === "backtracking") score += 15;
        if (q.includes("n皇后") && key === "backtracking") score += 15;
        if (q.includes("子集") && key === "backtracking") score += 10;
        if (q.includes("经典") && (q.includes("排序") || q.includes("算法")) && key === "sorting") score += 10;
        if (q.includes("各种") && q.includes("排序") && key === "sorting") score += 10;
        
        if (score > bestScore) {
            bestScore = score;
            bestMatch = item;
            matchedKey = key;
        }
    }
    
    // 4. 如果匹配分数足够，返回答案
    if (bestScore >= 3) {
        return bestMatch.answer;
    }
    
    // 5. 生成智能引导回复
    const guidance = SmartQA.generateGuidance(query);
    if (guidance) {
        return guidance;
    }
    
    // 6. 默认回复
    return `## 💡 我可以帮你解答这些问题：

### 📚 数据结构基础
- **"数组和链表的区别是什么？"** — 理解两种基本结构的优劣
- **"栈和队列有什么区别？"** — LIFO vs FIFO
- **"什么是二叉搜索树？"** — 有序数据的存储
- **"哈希表是如何工作的？"** — O(1)查找的秘密

### 🔧 算法与排序
- **"快速排序的原理是什么？"** — 分治思想
- **"归并排序和快排的区别"** — 稳定vs不稳定
- **"什么是动态规划？"** — 解决重叠子问题
- **"BFS和DFS有什么区别？"** — 广度vs深度

### 🚀 高级主题
- **"什么是红黑树？"** — 自平衡二叉搜索树
- **"线段树有什么用？"** — 高效区间查询
- **"什么是前缀树？"** — 字符串检索利器
- **"贪心和动态规划的区别"** — 何时用哪个

直接在输入框提问，我会为你详细解答！`;
}

// ========== 全局变量 ==========
let conversationHistory = [];  // 存储对话历史
const API_URL = '/api/chat';   // API 地址（部署时改为实际地址）
const USE_API = true;          // 是否使用API（设为false则使用本地知识库）

// ========== 发送消息 ==========
async function sendMessage() {
    const input = document.getElementById('aiChatInput');
    const text = input.value.trim();
    if (!text) return;
    
    // 添加用户消息
    addMessage(text, true);
    input.value = '';
    input.style.height = 'auto';
    
    // 显示打字中
    showTyping();
    
    try {
        let answer;
        
        if (USE_API) {
            // 调用 API 获取回答
            answer = await callAPI(text);
        } else {
            // 使用本地知识库
            answer = findKnowledge(text);
        }
        
        hideTyping();
        addMessage(answer);
        
        // 添加到对话历史
        conversationHistory.push({ role: 'user', content: text });
        conversationHistory.push({ role: 'assistant', content: answer });
        
        // 只保留最近20轮对话
        if (conversationHistory.length > 40) {
            conversationHistory = conversationHistory.slice(-40);
        }
    } catch (error) {
        hideTyping();
        console.error('API调用失败:', error);
        // 如果API失败，回退到本地知识库
        const answer = findKnowledge(text);
        addMessage(answer + '\n\n> ⚠️ API调用失败，已使用本地知识库回答。');
    }
}

// ========== 调用 API ==========
async function callAPI(message) {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            message: message,
            history: conversationHistory.slice(-10)  // 只传最近10轮
        })
    });
    
    if (!response.ok) {
        throw new Error(`API请求失败: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (data.success) {
        return data.message;
    } else {
        throw new Error(data.error || 'API返回错误');
    }
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
    // Ctrl/Cmd + K 打开助手
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        toggleAIPanel();
    }
    
    // Escape 关闭助手
    if (e.key === 'Escape' && isPanelOpen) {
        toggleAIPanel();
    }
});

// ========== 页面加载完成后 ==========
document.addEventListener('DOMContentLoaded', function() {
    // 聚焦输入框（如果面板打开）
    if (isPanelOpen) {
        setTimeout(() => document.getElementById('aiChatInput').focus(), 100);
    }
});
