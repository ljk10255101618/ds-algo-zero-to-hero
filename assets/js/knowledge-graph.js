// ============================================
// DSA Tutor - 数据结构知识图谱 (D3.js v7)
// ============================================

// ========== 数据结构节点定义 ==========
const dsAlgorithms = [
    // 线性结构
    { id: "array", name: "数组", category: "线性结构", level: 1, year: 1950, url: "algorithms/array/index.html", brief: "连续内存空间存储相同类型元素" },
    { id: "linked-list", name: "链表", category: "线性结构", level: 1, year: 1955, url: "algorithms/linked-list/index.html", brief: "非连续存储，通过指针链接" },
    { id: "stack", name: "栈", category: "线性结构", level: 1, year: 1955, url: "algorithms/stack/index.html", brief: "先进后出 (LIFO) 结构" },
    { id: "queue", name: "队列", category: "线性结构", level: 1, year: 1955, url: "algorithms/queue/index.html", brief: "先进先出 (FIFO) 结构" },
    { id: "deque", name: "双端队列", category: "线性结构", level: 2, year: 1960, url: "algorithms/deque/index.html", brief: "两端均可插入删除" },

    // 树形结构
    { id: "binary-tree", name: "二叉树", category: "树形结构", level: 2, year: 1960, url: "algorithms/binary-tree/index.html", brief: "每个节点最多两个子节点" },
    { id: "bst", name: "BST", category: "树形结构", level: 2, year: 1962, url: "algorithms/bst/index.html", brief: "二叉搜索树，左小右大" },
    { id: "avl", name: "AVL树", category: "树形结构", level: 3, year: 1968, url: "algorithms/avl/index.html", brief: "自平衡二叉搜索树" },
    { id: "red-black", name: "红黑树", category: "树形结构", level: 4, year: 1972, url: "algorithms/red-black/index.html", brief: "近似平衡的二叉搜索树" },
    { id: "heap", name: "堆", category: "树形结构", level: 3, year: 1964, url: "algorithms/heap/index.html", brief: "完全二叉树，最大/最小堆" },
    { id: "trie", name: "Trie树", category: "树形结构", level: 3, year: 1959, url: "algorithms/trie/index.html", brief: "前缀树，高效字符串检索" },
    { id: "segment-tree", name: "线段树", category: "高级结构", level: 5, year: 1987, url: "algorithms/segment-tree/index.html", brief: "区间查询与更新" },

    // 图
    { id: "graph-basic", name: "图基础", category: "图", level: 3, year: 1736, url: "algorithms/graph/index.html", brief: "顶点和边的集合表示关系" },
    { id: "bfs", name: "BFS", category: "图", level: 3, year: 1945, url: "algorithms/graph/index.html#bfs", brief: "广度优先搜索" },
    { id: "dfs", name: "DFS", category: "图", level: 3, year: 1872, url: "algorithms/graph/index.html#dfs", brief: "深度优先搜索" },
    { id: "dijkstra", name: "Dijkstra", category: "图", level: 4, year: 1956, url: "algorithms/graph/index.html", brief: "单源最短路径算法" },
    { id: "mst", name: "最小生成树", category: "图", level: 4, year: 1930, url: "algorithms/mst/index.html", brief: "Kruskal / Prim 算法" },

    // 排序
    { id: "bubble-sort", name: "冒泡排序", category: "排序", level: 1, year: 1956, url: "algorithms/sorting/index.html", brief: "相邻元素两两比较交换" },
    { id: "selection-sort", name: "选择排序", category: "排序", level: 1, year: 1956, url: "algorithms/sorting/index.html", brief: "每次选择最小元素" },
    { id: "insertion-sort", name: "插入排序", category: "排序", level: 1, year: 1956, url: "algorithms/sorting/index.html", brief: "将元素插入已排序序列" },
    { id: "merge-sort", name: "归并排序", category: "排序", level: 2, year: 1945, url: "algorithms/sorting/index.html", brief: "分治思想，合并有序序列" },
    { id: "quick-sort", name: "快速排序", category: "排序", level: 2, year: 1959, url: "algorithms/sorting/index.html", brief: "分治，以pivot分区" },
    { id: "heap-sort", name: "堆排序", category: "排序", level: 3, year: 1964, url: "algorithms/sorting/index.html", brief: "利用堆结构排序" },
    { id: "shell-sort", name: "希尔排序", category: "排序", level: 2, year: 1959, url: "algorithms/sorting/index.html", brief: "分间隔插入排序" },

    // 搜索
    { id: "binary-search", name: "二分搜索", category: "搜索", level: 1, year: 1946, url: "algorithms/search/index.html", brief: "有序数组的快速查找" },
    { id: "hash-table", name: "哈希表", category: "搜索", level: 2, year: 1953, url: "algorithms/hash-table/index.html", brief: "键值对映射，O(1)查找" },

    // 高级结构
    { id: "union-find", name: "并查集", category: "高级结构", level: 3, year: 1964, url: "algorithms/advanced/union-find/index.html", brief: "高效合并与查找集合" },
    { id: "bit-index-tree", name: "树状数组", category: "高级结构", level: 4, year: 1989, url: "algorithms/advanced/bit-index-tree/index.html", brief: "前缀和查询与单点更新" },
    { id: "fib-heap", name: "斐波那契堆", category: "高级结构", level: 5, year: 1986, url: "algorithms/advanced/fibonacci-heap/index.html", brief: "均摊O(1)插入的堆" }
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

    // 搜索相关
    { source: "array", target: "binary-search", type: "extends" },
    { source: "binary-search", target: "hash-table", type: "related" },

    // 图内部
    { source: "graph-basic", target: "bfs", type: "extends" },
    { source: "graph-basic", target: "dfs", type: "extends" },
    { source: "graph-basic", target: "dijkstra", type: "extends" },
    { source: "graph-basic", target: "mst", type: "extends" },

    // 排序内部
    { source: "array", target: "bubble-sort", type: "extends" },
    { source: "array", target: "selection-sort", type: "extends" },
    { source: "array", target: "insertion-sort", type: "extends" },
    { source: "array", target: "merge-sort", type: "extends" },
    { source: "array", target: "quick-sort", type: "extends" },
    { source: "heap", target: "heap-sort", type: "extends" },
    { source: "insertion-sort", target: "shell-sort", type: "extends" },

    // 高级结构
    { source: "heap", target: "fib-heap", type: "extends" },
    { source: "binary-tree", target: "union-find", type: "inspires" },
    { source: "union-find", target: "bit-index-tree", type: "related" }
];

// ========== 类别颜色 ==========
const categoryColors = {
    "线性结构": "#3b82f6",   // 蓝色
    "树形结构": "#22c55e",   // 绿色
    "图": "#a855f7",        // 紫色
    "排序": "#f59e0b",      // 橙色
    "搜索": "#ef4444",      // 红色
    "高级结构": "#06b6d4"   // 青色
};

// ========== 全局变量 ==========
let simulation = null;
let node = null;
let link = null;

// ========== 拖拽事件 ==========
function dragStarted(event, d) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
}

function dragged(event, d) {
    d.fx = event.x;
    d.fy = event.y;
}

function dragEnded(event, d) {
    if (!event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
}

// ========== 节点半径 ==========
function getNodeRadius(d) {
    return 18 + d.level * 3;
}

// ========== 知识图谱初始化 ==========
function initKnowledgeGraph() {
    const container = document.getElementById('knowledge-graph');
    if (!container) {
        console.error('❌ 找不到 knowledge-graph 容器');
        return;
    }

    // 清空容器
    container.innerHTML = '';

    // 获取容器尺寸
    const containerRect = container.getBoundingClientRect();
    const width = Math.max(containerRect.width, 800);
    const height = Math.max(containerRect.height, 600);

    console.log(`📐 图谱尺寸: ${width}x${height}`);

    // 创建 SVG
    const svg = d3.select(container)
        .append('svg')
        .attr('id', 'knowledge-svg')
        .attr('width', '100%')
        .attr('height', height)
        .attr('viewBox', `0 0 ${width} ${height}`)
        .style('background', 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)')
        .style('border-radius', '12px')
        .style('display', 'block');

    // 添加缩放
    const g = svg.append('g');

    const zoom = d3.zoom()
        .scaleExtent([0.3, 3])
        .on('zoom', (event) => {
            g.attr('transform', event.transform);
        });

    svg.call(zoom);

    // 箭头标记
    const defs = svg.append('defs');

    // 普通箭头
    defs.append('marker')
        .attr('id', 'arrowhead')
        .attr('viewBox', '-0 -5 10 10')
        .attr('refX', 20)
        .attr('refY', 0)
        .attr('orient', 'auto')
        .attr('markerWidth', 6)
        .attr('markerHeight', 6)
        .append('path')
        .attr('d', 'M 0,-5 L 10,0 L 0,5')
        .attr('fill', '#94a3b8');

    // 虚线箭头（启发关系）
    defs.append('marker')
        .attr('id', 'arrowhead-dashed')
        .attr('viewBox', '-0 -5 10 10')
        .attr('refX', 20)
        .attr('refY', 0)
        .attr('orient', 'auto')
        .attr('markerWidth', 6)
        .attr('markerHeight', 6)
        .append('path')
        .attr('d', 'M 0,-5 L 10,0 L 0,5')
        .attr('fill', '#cbd5e1');

    // 计算年份范围
    const years = dsAlgorithms.map(n => n.year).filter(y => y > 1800);
    const yearMin = Math.min(...years);
    const yearMax = Math.max(...years);

    // 类别顺序
    const categories = ['线性结构', '排序', '搜索', '树形结构', '图', '高级结构'];

    // 预处理节点
    const nodes = dsAlgorithms.map(d => ({...d}));

    // 预处理链接
    const links = dsRelationships.map(d => ({...d}));

    // 力模拟
    simulation = d3.forceSimulation(nodes)
        .alphaDecay(0.02)
        .velocityDecay(0.4)
        .force('link', d3.forceLink(links)
            .id(d => d.id)
            .distance(d => d.type === 'extends' ? 100 : 130)
            .strength(d => d.type === 'extends' ? 0.6 : 0.2))
        .force('charge', d3.forceManyBody()
            .strength(-350)
            .distanceMax(400))
        .force('center', d3.forceCenter(width / 2, height / 2).strength(0.05))
        .force('collision', d3.forceCollide().radius(d => getNodeRadius(d) + 15).strength(0.8))
        .force('x', d3.forceX(d => {
            const ratio = (d.year - yearMin) / (yearMax - yearMin + 1);
            return 100 + ratio * (width - 200);
        }).strength(0.08))
        .force('y', d3.forceY(d => {
            const idx = categories.indexOf(d.category);
            const baseY = 80 + (idx / (categories.length - 1)) * (height - 160);
            return baseY;
        }).strength(0.15));

    // 绘制连接线
    link = g.append('g')
        .attr('class', 'links')
        .selectAll('line')
        .data(links)
        .join('line')
        .attr('stroke', d => d.type === 'extends' ? '#94a3b8' : (d.type === 'inspires' ? '#cbd5e1' : '#cbd5e1'))
        .attr('stroke-width', d => d.type === 'extends' ? 2 : 1.5)
        .attr('stroke-opacity', d => d.type === 'extends' ? 0.6 : 0.4)
        .attr('stroke-dasharray', d => d.type === 'inspires' ? '4,4' : 'none')
        .attr('marker-end', d => d.type === 'inspires' ? 'url(#arrowhead-dashed)' : 'url(#arrowhead)');

    // 绘制节点组
    node = g.append('g')
        .attr('class', 'nodes')
        .selectAll('g')
        .data(nodes)
        .join('g')
        .attr('class', 'node')
        .attr('data-id', d => d.id)  // 添加 data-id 属性用于筛选
        .attr('data-category', d => d.category)  // 添加 data-category 属性
        .style('cursor', 'pointer')
        .call(d3.drag()
            .on('start', dragStarted)
            .on('drag', dragged)
            .on('end', dragEnded));

    // 节点圆形
    node.append('circle')
        .attr('r', d => getNodeRadius(d))
        .attr('fill', d => categoryColors[d.category])
        .attr('stroke', '#fff')
        .attr('stroke-width', 3)
        .style('filter', 'drop-shadow(0 2px 4px rgba(0,0,0,0.15))')
        .on('click', (event, d) => {
            if (d.url) window.location.href = d.url;
        })
        .on('mouseover', function(event, d) {
            // 放大效果
            d3.select(this)
                .transition().duration(150)
                .attr('r', getNodeRadius(d) + 6);

            // 高亮相关连接线
            link.transition().duration(150)
                .attr('stroke-opacity', l => (l.source.id === d.id || l.target.id === d.id) ? 1 : 0.2);

            // 显示tooltip
            const tooltip = d3.select('.graph-tooltip');
            tooltip.style('opacity', 1)
                .html(`<strong>${d.name}</strong><br>
                       <span style="color:#64748b;font-size:11px;">📅 ${d.year}年 · Lv${d.level} · ${d.category}</span><br>
                       <span style="font-size:12px;">${d.brief || ''}</span>`)
                .style('left', (event.pageX + 12) + 'px')
                .style('top', (event.pageY - 10) + 'px');
        })
        .on('mouseout', function(event, d) {
            d3.select(this)
                .transition().duration(150)
                .attr('r', getNodeRadius(d));

            link.transition().duration(150)
                .attr('stroke-opacity', l => l.type === 'extends' ? 0.6 : 0.4);

            d3.select('.graph-tooltip').style('opacity', 0);
        });

    // 节点文字
    node.append('text')
        .text(d => d.name)
        .attr('dy', '0.35em')
        .attr('x', d => getNodeRadius(d) + 8)
        .attr('font-size', '12px')
        .attr('font-weight', '600')
        .attr('fill', '#1f2937')
        .style('pointer-events', 'none');

    // 等级标签
    node.append('text')
        .text(d => `Lv${d.level}`)
        .attr('text-anchor', 'middle')
        .attr('dy', '0.35em')
        .attr('font-size', '9px')
        .attr('font-weight', '700')
        .attr('fill', '#fff')
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

    // 添加图例
    const legend = svg.append('g')
        .attr('class', 'legend')
        .attr('transform', `translate(${width - 180}, 20)`);

    categories.forEach((cat, i) => {
        const g = legend.append('g')
            .attr('transform', `translate(0, ${i * 26})`);

        g.append('circle')
            .attr('r', 8)
            .attr('fill', categoryColors[cat]);

        g.append('text')
            .attr('x', 18)
            .attr('y', 4)
            .attr('font-size', '12px')
            .attr('fill', '#374151')
            .text(cat);
    });

    // 添加年份标签
    const yearLegend = svg.append('g')
        .attr('class', 'year-legend')
        .attr('transform', `translate(20, ${height - 30})`);

    yearLegend.append('text')
        .attr('font-size', '11px')
        .attr('fill', '#64748b')
        .text(`📅 时间线: ${yearMin}年 → ${yearMax}年`);

    console.log('✅ 知识图谱初始化完成，共', nodes.length, '个节点，', links.length, '条关系');
}

// ========== 初始化 ==========
document.addEventListener('DOMContentLoaded', function() {
    // 延迟执行，确保DOM完全渲染
    setTimeout(initKnowledgeGraph, 100);
});

// 如果DOM已经加载完成，直接执行
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(initKnowledgeGraph, 100);
}
