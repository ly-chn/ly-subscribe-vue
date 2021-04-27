/**
 * 请求包装
 * @type {{code: number, data: {}, message: string, list: *[]}}
 */
const resp = {
    code   : 200,
    message: 'success',
    list   : [],
    data   : {},
}
const pageInfo = {
    pageNum : 1,
    pageSize: 10,
    total   : 100
}

module.exports = {
    list(list) {
        return list
    }
}