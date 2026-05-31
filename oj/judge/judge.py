#!/usr/bin/env python3
"""
OJ 评测脚本 - 数据结构与算法在线评测系统
使用方法: python judge.py <题目ID> <代码文件> [语言]
示例: python judge.py 1001 solution.py python
"""

import json
import sys
import os
import time
from datetime import datetime
from typing import Any, Dict, List


class OJJudger:
    """OJ 评测器"""
    
    def __init__(self, problems_dir: str = "problems", submissions_dir: str = "submissions"):
        self.problems_dir = problems_dir
        self.submissions_dir = submissions_dir
        os.makedirs(submissions_dir, exist_ok=True)
    
    def load_problem(self, problem_id: int) -> Dict:
        """加载题目"""
        filename = f"{problem_id}_*.json"
        for f in os.listdir(self.problems_dir):
            if f.startswith(str(problem_id)):
                with open(os.path.join(self.problems_dir, f), 'r', encoding='utf-8') as fp:
                    return json.load(fp)
        return None
    
    def execute_code(self, code: str, func_name: str, test_input: Any, language: str = "python") -> tuple:
        """执行代码并返回结果"""
        if language == "python":
            return self._execute_python(code, func_name, test_input)
        else:
            return None, None, "Unsupported language"
    
    def _execute_python(self, code: str, func_name: str, test_input: Any) -> tuple:
        """执行 Python 代码"""
        import traceback
        
        try:
            # 创建隔离的命名空间
            namespace = {}
            exec(code, namespace)
            
            func = namespace.get(func_name)
            if func is None:
                # 尝试找第一个函数
                for name, obj in namespace.items():
                    if callable(obj) and not name.startswith('_'):
                        func = obj
                        break
            
            if func is None:
                return None, "Function not found", ""
            
            # 执行测试
            if isinstance(test_input, dict):
                result = func(**test_input)
            elif isinstance(test_input, list):
                result = func(*test_input)
            else:
                result = func(test_input)
            
            return result, None, None
            
        except Exception as e:
            return None, str(e), traceback.format_exc()
    
    def judge(self, problem_id: int, code: str, language: str = "python") -> Dict:
        """评测代码"""
        problem = self.load_problem(problem_id)
        if not problem:
            return {"status": "error", "message": f"Problem {problem_id} not found"}
        
        results = []
        passed = 0
        total = len(problem["test_cases"])
        
        for i, test_case in enumerate(problem["test_cases"]):
            input_data = test_case["input"]
            expected = test_case["expected"]
            
            # 确定函数名
            func_name_map = {
                1001: "two_sum",
                1002: "merge_two_lists",
                2001: "is_valid",
                3001: "length_of_longest_substring",
                4001: "max_depth",
                5001: "num_islands",
                6001: "merge",
                7001: "search",
                8001: "climb_stairs",
                9001: "letter_combinations",
                10001: "find_content_children",
            }
            func_name = func_name_map.get(problem_id, "solution")
            
            start_time = time.time()
            result, error, traceback = self.execute_code(code, func_name, input_data, language)
            elapsed = time.time() - start_time
            
            # 比较结果
            if error:
                status = "runtime_error"
                correct = False
            elif self._compare(result, expected):
                status = "passed"
                correct = True
                passed += 1
            else:
                status = "wrong_answer"
                correct = False
            
            results.append({
                "case": i + 1,
                "status": status,
                "expected": expected,
                "actual": result,
                "error": error,
                "time": f"{elapsed*1000:.2f}ms"
            })
        
        # 保存提交记录
        submission = {
            "problem_id": problem_id,
            "timestamp": datetime.now().isoformat(),
            "passed": passed,
            "total": total,
            "language": language,
            "status": "accepted" if passed == total else "failed",
            "results": results
        }
        
        self._save_submission(submission)
        
        return {
            "problem_id": problem_id,
            "problem_title": problem["title"],
            "passed": passed,
            "total": total,
            "status": "accepted" if passed == total else f"{passed}/{total}",
            "results": results
        }
    
    def _compare(self, result: Any, expected: Any) -> bool:
        """比较结果"""
        if type(result) != type(expected):
            # 尝试转换为相同类型
            if isinstance(result, (list, tuple)) and isinstance(expected, (list, tuple)):
                result = list(result)
                expected = list(expected)
            else:
                return False
        if isinstance(result, list):
            return result == expected
        return result == expected
    
    def _save_submission(self, submission: Dict):
        """保存提交记录"""
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        filename = f"submission_{submission['problem_id']}_{timestamp}.json"
        with open(os.path.join(self.submissions_dir, filename), 'w', encoding='utf-8') as f:
            json.dump(submission, f, ensure_ascii=False, indent=2)


def print_results(results: Dict):
    """打印评测结果"""
    print("\n" + "="*50)
    print(f"📋 题目: {results['problem_title']} (#{results['problem_id']})")
    print("="*50)
    
    status_icon = "✅" if results['passed'] == results['total'] else "❌"
    print(f"\n{status_icon} 结果: {results['status']} ({results['passed']}/{results['total']})")
    
    print("\n📝 测试用例详情:")
    for r in results['results']:
        icon = "✅" if r['status'] == 'passed' else "❌"
        print(f"  {icon} 用例 {r['case']}: {r['status']} ({r['time']})")
        if r['status'] != 'passed':
            print(f"     期望: {r['expected']}")
            print(f"     实际: {r['actual']}")
            if r['error']:
                print(f"     错误: {r['error']}")
    
    print("\n" + "="*50)


def main():
    if len(sys.argv) < 2:
        print(__doc__)
        print("\n📚 可用题目列表:")
        problems_dir = "problems"
        if os.path.exists(problems_dir):
            for f in sorted(os.listdir(problems_dir)):
                if f.endswith('.json'):
                    with open(os.path.join(problems_dir, f), 'r', encoding='utf-8') as fp:
                        p = json.load(fp)
                        print(f"  #{p['id']}: {p['title']} [{p['difficulty']}]")
        return
    
    problem_id = int(sys.argv[1])
    
    if len(sys.argv) >= 3:
        code_file = sys.argv[2]
        with open(code_file, 'r', encoding='utf-8') as f:
            code = f.read()
        language = sys.argv[3] if len(sys.argv) >= 4 else "python"
    else:
        # 交互模式
        print(f"\n📝 请输入你的代码 (完成后退出一行只含 'END'):")
        lines = []
        while True:
            try:
                line = input()
                if line == "END":
                    break
                lines.append(line)
            except EOFError:
                break
        code = "\n".join(lines)
        language = "python"
    
    judger = OJJudger()
    results = judger.judge(problem_id, code, language)
    print_results(results)


if __name__ == "__main__":
    main()
