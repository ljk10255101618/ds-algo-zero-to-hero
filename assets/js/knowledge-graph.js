// ============================================
// DSA Tutor - 数据结构知识图谱 (D3.js)
// ============================================

// ========== 数据结构节点定义 ==========
const dsAlgorithms = [
    // 线性结构
    { id: "array", name: "数组", category: "线性结构", level: 1, url: "algorithms/array/index.html",
      brief: "连续内存空间存储相同类型元素" },
    { id: "linked-list", name: "链表", category: "线性结构", level: 1, url: "algorithms/linked-list/index.html",
      brief: "非连续存储，通过指针链接" },
    { id: "stack", name: "栈", category: "线性结构", level: 1, url: "algorithms/stack/index.html",
      brief: "先进后出 (LIFO) 结构" },
    { id: "queue", name: "队列", category: "线性结构", level: 1, url: "algorithms/queue/index.html",
      brief: "先进先出 (FIFO) 结构" },
    { id: "deque", name: "双端队列", category: "线性结构", level: 2, url: "algorithms/deque/index.html",
      brief: "两端均可插入删除" },

    // 树形结构
    { id: "binary-tree", name: "二叉树", category: "树形结构", level: 2, url: "algorithms/binary-tree/index.html",
      brief: "每个节点最多两个子节点" },
    { id: "bst", name: "BST", category: "树形结构", level: 2, url: "algorithms/bst/index.html",
      brief: "二叉搜索树，左小右大" },
    { id: "avl", name: "AVL树", category: "树形结构", level: 3, url: "algorithms/avl/index.html",
      brief: "自平衡二叉搜索树" },
    { id: "red-black", name: "红黑树", category: "树形结构", level: 4, url: "algorithms/red-black/index.html",
      brief: "近似平衡的二叉搜索树" },
    { id: "heap", name: "堆", category: "树形结构", level: 3, url: "algorithms/heap/index.html",
      brief: "完全二叉树，最大/最小堆" },
    { id: "trie", name: "Trie树", category: "树形结构", level: 3, url: "algorithms/trie/index.html",
      brief: "前缀树，高效字符串检索" },
    { id: "segment-tree", name: "线段树", category: "高级结构", level: 5, url: "algorithms/segment-tree/index.html",
      brief: "区间查询与更新" },

    // 图
    { id: "graph-basic", name: "图基础", category: "图", level: 3, url: "algorithms/graph/index.html",
      brief: "顶点和边的集合表示关系" },
    { id: "bfs", name: "BFS", category: "图", level: 3, url: "algorithms/graph/index.html#bfs",
      brief: "广度优先搜索" },
    { id: "dfs", name: "DFS", category: "图", level: 3, url: "algorithms/graph/index.html#dfs",
      brief: "深度优先搜索" },
    { id: "shortest-path", name: "最短路径", category: "图", level: 4, url: "algorithms/shortest-path/index.html",
      brief: "Dijkstra / Bellman-Ford" },
    { id: "mst", name: "最小生成树", category: "图", level: 4, url: "algorithms/mst/index.html",
      brief: "Kruskal / Prim 算法" },

    // 排序
    { id: "bubble-sort", name: "冒泡排序", category: "排序", level: 1, url: "algorithms/sorting/bubble/index.html",
      brief: "相邻元素两两比较交换" },
    { id: "selection-sort", name: "选择排序", category: "排序", level: 1, url: "algorithms/sorting/selection/index.html",
      brief: "每次选择最小元素" },
    { id: "insertion-sort", name: "插入排序", category: "排序", level: 1, url: "algorithms/sorting/insertion/index.html",
      brief: "将元素插入已排序序列" },
    { id: "merge-sort", name: "归并排序", category: "排序", level: 2, url: "algorithms/sorting/merge/index.html",
      brief: "分治思想，合并有序序列" },
    { id: "quick-sort", name: "快速排序", category: "排序", level: 2, url: "algorithms/sorting/quick/index.html",
      brief: "分治，以pivot分区" },
    { id: "heap-sort", name: "堆排序", category: "排序", level: 3, url: "algorithms/sorting/heap/index.html",
      brief: "利用堆结构排序" },
    { id: "shell-sort", name: "希尔排序", category: "排序", level: 2, url: "algorithms/sorting/shell/index.html",
      brief: "分间隔插入排序" },

    // 搜索
    { id: "binary-search", name: "二分搜索", category: "搜索", level: 1, url: "algorithms/search/binary-search/index.html",
      brief: "有序数组的快速查找" },
    { id: "hash-table", name: "哈希表", category: "搜索", level: 2, url: "algorithms/hash-table/index.html",
      brief: "键值对映射，O(1)查找" },

    // 高级结构
    { id: "union-find", name: "并查集", category: "高级结构", level: 3, url: "algorithms/advanced/union-find/index.html",
      brief: "高效合并与查找集合" },
    { id: "bit-index-tree", name: "树状数组", category: "高级结构", level: 4, url: "algorithms/advanced/bit-index-tree/index.html",
      brief: "前缀和查询与单点更新" },
    { id: "fib-heap", name: "斐波那契堆", category: "高级结构", level: 5, url: "algorithms/advanced/fibonacci-heap/index.html",
      brief: "均摊O(1)插入的堆" }
];

// ========== 关系定义 ==========
const dsRelationships = [
    // 线性结构内部
    { source: "array", target: "linked-list", type: "related" },
    { source: "array", target: "stack", type: "extends" },
    { source: "array", target: "queue", type: "extends" },
    { source: "linked-list", target: "stack", type: "extends" },
    { source: "linked-list", target: "queue", type: "extends" },
    { source: "stack", target: "queue", type: "related" },
    { source: "queue", target: "deque", type: "extends" },

    // 数组 → 树形
    { source: "array", target: "binary-tree", type: "inspires" },
    { source: "linked-list", target: "binary-tree", type: "inspires" },

    // 树形内部
    { source: "binary-tree", target: "bst", type: "extends" },
    { source: "bst", target: "avl", type: "extends" },
    { source: "bst", target: "red-black", type: "extends" },
    { source: "avl", target: "red-black", type: "related" },
    { source: "binary-tree", target: "heap", type: "extends" },
    { source: "binary-tree", target: "trie", type: "inspires" },
    { source: "binary-tree", target: "segment-tree", type: "extends" },

    // 树 → 图
    { source: "binary-tree", target: "graph-basic", type: "extends" },

    // 图内部
    { source: "graph-basic", target: "bfs", type: "extends" },
    { source: "graph-basic", target: "dfs", type: "extends" },
    { source: "bfs", target: "shortest-path", type: "extends" },
    { source: "dfs", target: "shortest-path", type: "extends" },
    { source: "dfs", target: "mst", type: "extends" },

    // 排序内部
    { source: "bubble-sort", target: "selection-sort", type: "related" },
    { source: "selection-sort", target: "insertion-sort", type: "related" },
    { source: "insertion-sort", target: "shell-sort", type: "extends" },
    { source: "bubble-sort", target: "quick-sort", type: "inspires" },
    { source: "insertion-sort", target: "merge-sort", type: "inspires" },
    { source: "merge-sort", target: "quick-sort", type: "related" },
    { source: "heap", target: "heap-sort", type: "extends" },

    // 搜索
    { source: "array", target: "binary-search", type: "extends" },
    { source: "array", target: "hash-table", type: "inspires" },

    // 高级
    { source: "tree", target: "union-find", type: "inspires" },
    { source: "array", target: "bit-index-tree", type: "inspires" },
    { source: "heap", target: "fib-heap", type: "extends" },

    // 跨类别关系
    { source: "quick-sort", target: "bst", type: "inspires" },
    { source: "bfs", target: "queue", type: "inspires" },
    { source: "dfs", target: "stack", type: "inspires" },
    { source: "heap-sort", target: "heap", type: "inspires" },
    { source: "hash-table", target: "trie", type: "related" }
];

// ========== 进化史数据 ==========
const evolutionData = {
    nodes: [
        { id: "array", name: "数组", year: 1940, brief: "最基础的数据结构" },
        { id: "linked-list", name: "链表", year: 1955, brief: "动态内存分配" },
        { id: "stack", name: "栈", year: 1946, brief: "函数调用的基础" },
        { id: "queue", name: "队列", year: 1946, brief: "任务调度核心" },
        { id: "binary-tree", name: "二叉树", year: 1962, brief: "层次化数据表示" },
        { id: "bst", name: "二叉搜索树", year: 1960, brief: "有序集合" },
        { id: "avl", name: "AVL树", year: 1962, brief: "首个自平衡树" },
        { id: "red-black", name: "红黑树", year: 1972, brief: "近似平衡树" },
        { id: "hash-table", name: "哈希表", year: 1953, brief: "O(1)查找" },
        { id: "bubble-sort", name: "冒泡排序", year: 1956, brief: "最直观的排序" },
        { id: "quick-sort", name: "快速排序", year: 1960, brief: "最实用的排序" },
        { id: "merge-sort", name: "归并排序", year: 1945, brief: "分治思想的典范" },
        { id: "heap", name: "堆", year: 1964, brief: "高效优先队列" },
        { id: "graph-basic", name: "图论", year: 1736, brief: "七桥问题起源" },
        { id: "bfs", name: "BFS", year: 1959, brief: "最短路算法先驱" },
        { id: "dfs", name: "DFS", year: 1960, brief: "回溯法基础" },
        { id: "shortest-path", name: "Dijkstra", year: 1956, brief: "最短路径经典" },
        { id: "union-find", name: "并查集", year: 1964, brief: "集合高效管理" },
        { id: "trie", name: "Trie", year: 1960, brief: "前缀匹配" },
        { id: "segment-tree", name: "线段树", year: 1977, brief: "区间查询" },
    ],
    edges: [
        { source: "array", target: "linked-list", reason: "解决连续存储限制" },
        { source: "array", target: "hash-table", reason: "需要O(1)查找" },
        { source: "linked-list", target: "binary-tree", reason: "层级化关联" },
        { source: "binary-tree", target: "bst", reason: "有序性要求" },
        { source: "bst", target: "avl", reason: "自动平衡" },
        { source: "avl", target: "red-black", reason: "减少旋转开销" },
        { source: "bubble-sort", target: "quick-sort", reason: "引入分治" },
        { source: "quicksort", target: "merge-sort", reason: "稳定排序" },
        { source: "graph-basic", target: "bfs", reason: "系统搜索策略" },
        { source: "bfs", target: "shortest-path", reason: "带权路径探索" },
        { source: "stack", target: "dfs", reason: "利用栈实现回溯" },
        { source: "dfs", target: "union-find", reason: "连通性分析" },
    ]
};

// ========== 全局变量 ==========
let simulation = null;
let node = null;
let link = null;
let categoryColors = {
    "线性结构": "#6366f1",
    "树形结构": "#10b981",
    "图": "#f59e0b",
    "排序": "#ef4444",
    "搜索": "#8b5cf6",
    "高级结构": "#ec4899"
};
const levelColors = {
    1: "#10b981",
    2: "#3b82f6",
    3: "#f59e0b",
    4: "#ef4444",
    5: "#8b5cf6"
};

// ========== 防抖工具函数 ==========
function debounce(fn, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
    };
}

// ========== 节点半径 ==========
function getNodeRadius(d) {
    if (d.level !== undefined) return 20 + d.level * 2;
    if (d.depth === 0) return 22;
    if (d.depth === 1) return 18;
    if (d.depth === 2) return 14;
    return 12;
}

// ========== 知识图谱初始化 (融合进化史) ==========
function initKnowledgeGraph() {
    const container = document.getElementById('knowledge-graph');
    if (!container) return;

    container.innerHTML = '';

    const parent = container.parentElement;
    const width = parent.clientWidth - 40;
    const height = Math.max(600, parent.clientHeight - 40);

    const svg = d3.select(container)
        .append('svg')
        .attr('width', '100%')
        .attr('height', '100%')
        .attr('viewBox', [0, 0, width, height])
        .style('min-height', height + 'px');

    // 缩放
    const zoom = d3.zoom()
        .scaleExtent([0.2, 3])
        .filter((event) => {
            if (event.type === 'wheel') return event.ctrlKey || event.touches > 0;
            return true;
        })
        .on('zoom', (event) => {
            g.attr('transform', event.transform);
        });

    svg.call(zoom);
    let g = svg.append('g');

    // 构建年份映射
    const yearMap = {};
    evolutionData.nodes.forEach(n => { yearMap[n.id] = n.year; });

    const nodes = dsAlgorithms.map(d => ({
        ...d,
        year: yearMap[d.id] || 1950 + d.level * 10
    }));

    // 连接知识图谱关系 + 进化关系
    const allLinks = [...dsRelationships];
    evolutionData.edges.forEach(e => {
        if (!allLinks.find(l => l.source === e.source && l.target === e.target)) {
            allLinks.push({ source: e.source, target: e.target, type: 'evolution', reason: e.reason });
        }
    });
    const links = allLinks.map(d => ({...d}));

    // 计算年份范围
    const years = nodes.map(n => n.year).filter(y => y > 1800);
    const yearMin = Math.min(...years);
    const yearMax = Math.max(...years);

    // 力模拟 - 整合知识结构和时间演进
    simulation = d3.forceSimulation(nodes)
        .alphaDecay(0.015)
        .velocityDecay(0.4)
        .force('link', d3.forceLink(links)
            .id(d => d.id)
            .distance(d => {
                if (d.type === 'extends') return 80;
                if (d.type === 'evolution') return 100;
                if (d.type === 'inspires') return 130;
                return 110;
            })
            .strength(d => d.type === 'extends' ? 0.7 : 0.3))
        .force('charge', d3.forceManyBody()
            .strength(-280)
            .distanceMax(500))
        .force('center', d3.forceCenter(width / 2, height / 2).strength(0.04))
        .force('collision', d3.forceCollide()
            .radius(d => getNodeRadius(d) + 30)
            .strength(0.9))
        // 水平方向按年份排列 (进化史特性)
        .force('x', d3.forceX(d => {
            const ratio = (d.year - yearMin) / (yearMax - yearMin + 1);
            return 80 + ratio * (width - 160);
        }).strength(0.12))
        // 垂直方向按类别排列
        .force('y', d3.forceY(d => {
            const categories = Object.keys(categoryColors);
            const idx = categories.indexOf(d.category);
            return 80 + (idx / (categories.length - 1)) * (height - 160);
        }).strength(0.25));

    // 箭头标记
    svg.append('defs').append('marker')
        .attr('id', 'arrow-normal')
        .attr('viewBox', '-0 -5 10 10')
        .attr('refX', 28)
        .attr('refY', 0)
        .attr('orient', 'auto')
        .attr('markerWidth', 7)
        .attr('markerHeight', 7)
        .append('path')
        .attr('d', 'M 0,-5 L 10,0 L 0,5')
        .attr('fill', '#94a3b8');

    svg.append('defs').append('marker')
        .attr('id', 'arrow-evolution')
        .attr('viewBox', '-0 -5 10 10')
        .attr('refX', 28)
        .attr('refY', 0)
        .attr('orient', 'auto')
        .attr('markerWidth', 7)
        .attr('markerHeight', 7)
        .append('path')
        .attr('d', 'M 0,-5 L 10,0 L 0,5')
        .attr('fill', '#f59e0b');

    // 连接线
    link = g.append('g')
        .selectAll('line')
        .data(links)
        .join('line')
        .attr('class', 'link')
        .style('stroke', d => d.type === 'evolution' ? '#f59e0b' : (d.type === 'extends' ? '#94a3b8' : '#cbd5e1'))
        .style('stroke-width', d => d.type === 'extends' ? 2.5 : (d.type === 'evolution' ? 2 : 1.5))
        .style('stroke-opacity', d => d.type === 'evolution' ? 0.6 : (d.type === 'extends' ? 0.7 : 0.4))
        .style('stroke-dasharray', d => d.type === 'inspires' ? '5,5' : 'none')
        .attr('marker-end', d => d.type === 'evolution' ? 'url(#arrow-evolution)' : 'url(#arrow-normal)');

    // 节点
    node = g.append('g')
        .selectAll('g')
        .data(nodes)
        .join('g')
        .attr('class', 'node')
        .style('cursor', 'pointer')
        .call(d3.drag()
            .on('start', dragStarted)
            .on('drag', dragged)
            .on('end', dragEnded));

    // 节点圆
    node.append('circle')
        .attr('r', d => getNodeRadius(d))
        .style('fill', d => categoryColors[d.category])
        .style('stroke', '#fff')
        .style('stroke-width', 2.5)
        .style('filter', d => `drop-shadow(0 2px 4px ${categoryColors[d.category]}66)`)
        .on('click', function(event, d) {
            if (d.url) window.location.href = d.url;
        })
        .on('mouseover', function(event, d) {
            d3.select(this)
                .transition().duration(150)
                .attr('r', getNodeRadius(d) + 5)
                .style('stroke-width', 3.5);

            // 查找进化关系
            const evoLink = evolutionData.edges.find(e => e.source === d.id || e.target === d.id);
            let evoInfo = '';
            if (evoLink) {
                const otherId = evoLink.source === d.id ? evoLink.target : evoLink.source;
                const otherNode = evolutionData.nodes.find(n => n.id === otherId);
                if (otherNode) {
                    const direction = evoLink.source === d.id ? '→' : '←';
                    evoInfo = `<br><span style="color:#f59e0b;font-size:11px;">⚡ ${direction} ${otherNode.name}: ${evoLink.reason}</span>`;
                }
            }

            // 显示 tooltip
            const tooltip = d3.select('.graph-tooltip');
            tooltip.style('opacity', 1)
                .html(`<strong>${d.name}</strong><br>
                       <span style="color:#64748b;font-size:11px;">📅 ${d.year}年 · Lv${d.level} · ${d.category}</span><br>
                       <span style="font-size:12px;">${d.brief || ''}</span>${evoInfo}`)
                .style('left', (event.offsetX + 12) + 'px')
                .style('top', (event.offsetY - 10) + 'px');
        })
        .on('mouseout', function() {
            d3.select(this)
                .transition().duration(150)
                .attr('r', getNodeRadius(d3.select(this).datum()))
                .style('stroke-width', 2.5);
            d3.select('.graph-tooltip').style('opacity', 0);
        });

    // 年份标签 (节点下方)
    node.append('text')
        .text(d => d.year)
        .attr('dy', d => getNodeRadius(d) + 14)
        .attr('text-anchor', 'middle')
        .style('font-size', '9px')
        .style('font-weight', '600')
        .style('fill', '#64748b')
        .style('pointer-events', 'none');

    // 名称标签 (节点右侧)
    node.append('text')
        .text(d => d.name)
        .attr('dy', '0.35em')
        .attr('x', d => getNodeRadius(d) + 6)
        .style('font-size', '11px')
        .style('font-weight', '500')
        .style('fill', '#1f2937')
        .style('pointer-events', 'none');

    // 等级标签 (节点中心)
    node.append('text')
        .text(d => `Lv${d.level}`)
        .attr('dy', '0.35em')
        .attr('text-anchor', 'middle')
        .style('font-size', '8px')
        .style('font-weight', '700')
        .style('fill', '#fff')
        .style('pointer-events', 'none')
        .style('opacity', '0.9');

    // 更新时间轴
    simulation.on('tick', () => {
        link
            .attr('x1', d => d.source.x)
            .attr('y1', d => d.source.y)
            .attr('x2', d => d.target.x)
            .attr('y2', d => d.target.y);

        node.attr('transform', d => `translate(${d.x},${d.y})`);
    });

    // 图例
    const legend = svg.append('g')
        .attr('class', 'knowledge-legend')
        .attr('transform', `translate(${Math.min(width - 520, width - 100)}, 20)`);

    legend.append('rect')
        .attr('x', -8).attr('y', -14)
        .attr('width', 520).attr('height', 30)
        .attr('rx', 8)
        .style('fill', 'rgba(255,255,255,0.92)')
        .style('stroke', '#e2e8f0')
        .style('stroke-width', 1);

    // 类别图例
    const categories = Object.entries(categoryColors).map(([label, color]) => ({ label, color }));
    legend.selectAll('.legend-item')
        .data(categories)
        .join('g')
        .attr('class', 'legend-item')
        .attr('transform', (d, i) => `translate(${i * 72}, 0)`)
        .call(lg => {
            lg.append('circle').attr('r', 5).style('fill', d => d.color);
            lg.append('text')
                .attr('x', 10).attr('y', 4)
                .style('font-size', '10px')
                .style('fill', '#475569')
                .style('font-weight', '500')
                .text(d => d.label);
        });

    // 关系类型图例
    legend.append('line')
        .attr('x1', 500).attr('y1', 0)
        .attr('x2', 520).attr('y2', 0)
        .style('stroke', '#94a3b8').style('stroke-width', 2);
    legend.append('text')
        .attr('x', 460).attr('y', 4)
        .style('font-size', '9px').style('fill', '#94a3b8')
        .text('演进');

    // 响应窗口
    window.addEventListener('resize', debounce(() => {
        const newWidth = parent.clientWidth - 40;
        const newHeight = Math.max(600, parent.clientHeight - 40);
        svg.attr('viewBox', [0, 0, newWidth, newHeight]);
        legend.attr('transform', `translate(${Math.min(newWidth - 520, newWidth - 100)}, 20)`);

        simulation.force('center', d3.forceCenter(newWidth / 2, newHeight / 2).strength(0.04));
        simulation.force('x', d3.forceX(d => {
            const ratio = (d.year - yearMin) / (yearMax - yearMin + 1);
            return 80 + ratio * (newWidth - 160);
        }).strength(0.12));
        simulation.force('y', d3.forceY(d => {
            const cats = Object.keys(categoryColors);
            const idx = cats.indexOf(d.category);
            return 80 + (idx / (cats.length - 1)) * (newHeight - 160);
        }).strength(0.25));
        simulation.alpha(0.1).restart();
    }, 300));
}

// ========== Drag handlers ==========
function dragStarted(event, d) {
    if (!event.active) simulation.alphaTarget(0.2).restart();
    d.fx = d.x;
    d.fy = d.y;
    d3.select(this).raise();
}

function dragged(event, d) {
    d.fx = event.x;
    d.fy = event.y;
}

function dragEnded(event, d) {
    if (!event.active) simulation.alphaTarget(0);
}

// ========== 页面加载后初始化 ==========
document.addEventListener('DOMContentLoaded', () => {
    initKnowledgeGraph();
});