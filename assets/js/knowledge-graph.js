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

// ========== 切换图谱模式 ==========
function switchGraphMode(mode) {
    document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.graph-view').forEach(v => v.classList.remove('active'));

    if (mode === 'knowledge') {
        document.querySelector('[data-mode="knowledge"]').classList.add('active');
        document.getElementById('knowledge-graph').classList.add('active');
        initKnowledgeGraph();
    } else {
        document.querySelector('[data-mode="evolution"]').classList.add('active');
        document.getElementById('evolution-graph').classList.add('active');
        initEvolutionGraph();
    }
}

// ========== 知识图谱初始化 ==========
function initKnowledgeGraph() {
    const container = document.getElementById('knowledge-graph');
    if (!container) return;

    // 清空
    container.innerHTML = '';

    const parent = container.parentElement;
    const width = parent.clientWidth - 40;
    const height = Math.max(500, parent.clientHeight - 40);

    const svg = d3.select(container)
        .append('svg')
        .attr('width', '100%')
        .attr('height', '100%')
        .attr('viewBox', [0, 0, width, height])
        .style('min-height', height + 'px');

    // 缩放
    const zoom = d3.zoom()
        .scaleExtent([0.3, 3])
        .filter((event) => {
            if (event.type === 'wheel') return event.ctrlKey || event.touches > 0;
            return true;
        })
        .on('zoom', (event) => {
            g.attr('transform', event.transform);
        });

    svg.call(zoom);
    let g = svg.append('g');

    const nodes = dsAlgorithms.map(d => ({...d}));
    const links = dsRelationships.map(d => ({...d}));

    // 力模拟
    simulation = d3.forceSimulation(nodes)
        .alphaDecay(0.015)
        .velocityDecay(0.4)
        .force('link', d3.forceLink(links)
            .id(d => d.id)
            .distance(d => {
                if (d.type === 'extends') return 80;
                if (d.type === 'inspires') return 120;
                return 100;
            })
            .strength(0.6))
        .force('charge', d3.forceManyBody()
            .strength(-250)
            .distanceMax(500))
        .force('center', d3.forceCenter(width / 2, height / 2).strength(0.05))
        .force('collision', d3.forceCollide()
            .radius(d => getNodeRadius(d) + 25)
            .strength(0.9))
        .force('category', d3.forceX()
            .x(d => {
                const categories = Object.keys(categoryColors);
                const idx = categories.indexOf(d.category);
                return width * 0.12 + (idx / (categories.length - 1)) * width * 0.76;
            })
            .strength(0.18))
        .force('y', d3.forceY(height / 2).strength(0.05));

    // 连接线
    link = g.append('g')
        .selectAll('line')
        .data(links)
        .join('line')
        .attr('class', 'link')
        .style('stroke', d => {
            if (d.type === 'extends') return '#94a3b8';
            if (d.type === 'inspires') return '#cbd5e1';
            return '#e2e8f0';
        })
        .style('stroke-width', d => d.type === 'extends' ? 2 : 1.5)
        .style('stroke-opacity', d => {
            if (d.type === 'extends') return 0.7;
            if (d.type === 'inspires') return 0.4;
            return 0.5;
        })
        .style('stroke-dasharray', d => d.type === 'inspires' ? '5,5' : 'none');

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

            // 显示 tooltip
            const tooltip = d3.select('.graph-tooltip');
            tooltip.style('opacity', 1)
                .html(`<strong>${d.name}</strong><br><span style="color:#64748b;font-size:11px;">Lv${d.level} · ${d.category}</span><br><span style="font-size:12px;">${d.brief || ''}</span>`)
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

    // 等级标签
    node.append('text')
        .text(d => `Lv${d.level}`)
        .attr('dy', '0.35em')
        .attr('text-anchor', 'middle')
        .style('font-size', '9px')
        .style('font-weight', '700')
        .style('fill', '#fff')
        .style('pointer-events', 'none');

    // 名称标签
    node.append('text')
        .text(d => d.name)
        .attr('dy', '0.35em')
        .attr('x', d => getNodeRadius(d) + 7)
        .style('font-size', '11px')
        .style('font-weight', '500')
        .style('fill', '#1f2937')
        .style('pointer-events', 'none');

    // 更新位置
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
        .attr('transform', `translate(${Math.min(width - 440, width - 100)}, 20)`);

    legend.append('rect')
        .attr('x', -8).attr('y', -14)
        .attr('width', 440).attr('height', 30)
        .attr('rx', 8)
        .style('fill', 'rgba(255,255,255,0.92)')
        .style('stroke', '#e2e8f0')
        .style('stroke-width', 1);

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

    // 响应窗口
    window.addEventListener('resize', debounce(() => {
        const newWidth = parent.clientWidth - 40;
        const newHeight = Math.max(500, parent.clientHeight - 40);
        svg.attr('viewBox', [0, 0, newWidth, newHeight]);
        legend.attr('transform', `translate(${Math.min(newWidth - 440, newWidth - 100)}, 20)`);
        simulation.force('center', d3.forceCenter(newWidth / 2, newHeight / 2).strength(0.05));
        simulation.force('category', d3.forceX()
            .x(d => {
                const cats = Object.keys(categoryColors);
                const idx = cats.indexOf(d.category);
                return newWidth * 0.12 + (idx / (cats.length - 1)) * newWidth * 0.76;
            }).strength(0.18));
        simulation.force('y', d3.forceY(newHeight / 2).strength(0.05));
        simulation.alpha(0.1).restart();
    }, 300));
}

// ========== 进化史图谱 ==========
function initEvolutionGraph() {
    const container = document.getElementById('evolution-graph');
    if (!container) return;

    container.innerHTML = '';

    const parent = container.parentElement;
    const width = parent.clientWidth - 40;
    const height = Math.max(500, parent.clientHeight - 40);

    let evoSvg = d3.select(container)
        .append('svg')
        .attr('width', '100%')
        .attr('height', '100%')
        .attr('viewBox', [0, 0, width, height])
        .style('min-height', height + 'px');

    let evoG = evoSvg.append('g');
    let evoTooltip = d3.select('.graph-tooltip');

    const zoom = d3.zoom()
        .scaleExtent([0.3, 3])
        .filter((event) => {
            if (event.type === 'wheel') return event.ctrlKey || event.touches > 0;
            return true;
        })
        .on('zoom', (event) => { evoG.attr('transform', event.transform); });

    evoSvg.call(zoom);

    const algoMap = {};
    dsAlgorithms.forEach(a => algoMap[a.id] = a);

    const nodes = evolutionData.nodes.map(d => ({
        ...d,
        level: algoMap[d.id]?.level || 1,
        category: algoMap[d.id]?.category || "其他"
    }));
    const nodeMap = {};
    nodes.forEach(n => nodeMap[n.id] = n);

    const links = evolutionData.edges.map(e => ({
        source: nodeMap[e.source],
        target: nodeMap[e.target],
        reason: e.reason
    })).filter(e => e.source && e.target);

    // 按年份排序
    nodes.sort((a, b) => a.year - b.year);
    const yearMin = Math.min(...nodes.map(n => n.year));
    const yearMax = Math.max(...nodes.map(n => n.year));

    const categories = Object.keys(categoryColors);
    const catCount = categories.length;
    const rowHeight = Math.min(100, (height - 80) / catCount);

    // 按类别分配行，按年份分配列
    nodes.forEach(d => {
        const catIdx = categories.indexOf(d.category);
        if (catIdx >= 0) {
            const yPos = 50 + catIdx * rowHeight + rowHeight / 2;
            const xRatio = (d.year - yearMin) / (yearMax - yearMin + 1);
            const xPos = 80 + xRatio * (width - 160);
            d.fx = xPos;
            d.fy = yPos;
        }
    });

    // 绘制时间轴
    const decades = [];
    const startDecade = Math.floor(yearMin / 10) * 10;
    const endDecade = Math.ceil(yearMax / 10) * 10;
    for (let y = startDecade; y <= endDecade; y += 10) {
        decades.push(y);
    }

    const timeAxisY = 30;
    decades.forEach(year => {
        const xRatio = (year - yearMin) / (yearMax - yearMin + 1);
        const xPos = 80 + xRatio * (width - 160);
        evoG.append('line')
            .attr('x1', xPos).attr('y1', timeAxisY)
            .attr('x2', xPos).attr('y2', height)
            .style('stroke', '#e2e8f0')
            .style('stroke-width', 1)
            .style('stroke-dasharray', '4,4')
            .style('opacity', 0.5);
        evoG.append('text')
            .attr('x', xPos).attr('y', timeAxisY - 5)
            .attr('text-anchor', 'middle')
            .style('font-size', '10px')
            .style('fill', '#94a3b8')
            .style('font-weight', '500')
            .text(year + 's');
    });

    // 箭头标记
    evoSvg.append('defs').append('marker')
        .attr('id', 'arrowhead')
        .attr('viewBox', '-0 -5 10 10')
        .attr('refX', 25)
        .attr('refY', 0)
        .attr('orient', 'auto')
        .attr('markerWidth', 8)
        .attr('markerHeight', 8)
        .append('path')
        .attr('d', 'M 0,-5 L 10,0 L 0,5')
        .attr('fill', '#94a3b8');

    // 连接线
    evoG.append('g')
        .selectAll('line')
        .data(links)
        .join('line')
        .attr('x1', d => d.source.fx)
        .attr('y1', d => d.source.fy)
        .attr('x2', d => d.target.fx)
        .attr('y2', d => d.target.fy)
        .style('stroke', '#94a3b8')
        .style('stroke-width', 1.5)
        .style('opacity', 0.6)
        .attr('marker-end', 'url(#arrowhead)');

    // 原因标签
    evoG.append('g')
        .selectAll('text')
        .data(links)
        .join('text')
        .attr('x', d => (d.source.fx + d.target.fx) / 2)
        .attr('y', d => (d.source.fy + d.target.fy) / 2 - 8)
        .attr('text-anchor', 'middle')
        .style('font-size', '9px')
        .style('fill', '#94a3b8')
        .style('font-weight', '500')
        .text(d => d.reason || '');

    // 类别标签（左侧）
    categories.forEach((cat, i) => {
        const yPos = 50 + i * rowHeight + rowHeight / 2;
        evoG.append('text')
            .attr('x', 15)
            .attr('y', yPos + 4)
            .style('font-size', '11px')
            .style('font-weight', '600')
            .style('fill', categoryColors[cat])
            .style('opacity', 0.8)
            .text(cat);
    });

    // 节点
    const evoNodes = evoG.append('g')
        .selectAll('g')
        .data(nodes)
        .join('g')
        .attr('transform', d => `translate(${d.fx},${d.fy})`)
        .style('cursor', 'pointer');

    evoNodes.append('circle')
        .attr('r', d => getNodeRadius(d))
        .style('fill', d => categoryColors[d.category] || '#94a3b8')
        .style('stroke', '#fff')
        .style('stroke-width', 2.5)
        .style('filter', d => `drop-shadow(0 2px 4px ${categoryColors[d.category] || '#94a3b8'}66)`)
        .on('click', function(event, d) {
            const algo = dsAlgorithms.find(a => a.id === d.id);
            if (algo && algo.url) window.location.href = algo.url;
        })
        .on('mouseover', function(event, d) {
            d3.select(this).transition().duration(150).attr('r', getNodeRadius(d) + 4);
            evoTooltip.style('opacity', 1)
                .html(`<div class="tooltip-title">${d.name}</div>
                       <div class="tooltip-year">${d.year} · Lv${d.level}</div>
                       <div class="tooltip-desc">${d.brief || ''}</div>`)
                .style('left', (event.offsetX + 12) + 'px')
                .style('top', (event.offsetY - 20) + 'px');
        })
        .on('mouseout', function() {
            d3.select(this).transition().duration(150).attr('r', getNodeRadius(d3.select(this).datum()));
            evoTooltip.style('opacity', 0);
        });

    evoNodes.append('text')
        .text(d => d.name)
        .attr('dy', '0.35em')
        .attr('x', d => getNodeRadius(d) + 6)
        .style('font-size', '11px')
        .style('font-weight', '500')
        .style('fill', '#1f2937')
        .style('pointer-events', 'none');
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