function* counterIterator() {
    let count = 0
    while (true) {
        yield --count
    }
}

const counter = counterIterator()

/**
 * 用于前端临时id（负数）
 */
export function nextId() {
    return counter.next().value;
}

/**
 * 用于随机生成组件id
 * @return {string} 组件id
 */
export function nextElementId() {
    return 'auto-generator-id-' + (-counter.next().value)
}