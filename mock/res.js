const _ = require('lodash')


/**
 * 请求包装
 * @type {{code: number, data: {}, message: string, list: *[]}}
 */
const resp = {
  /**
   * code解释：
   * 1xxx：少见有人用，所以此项目也不用
   * 2xxx：表示响应成功
   * 3xxx：表示操作成功并将 message 做出轻提示
   * 4xxx：权限不足，未登录，登录过期，等权限问题
   * 5xxx：各种异常，将 message 做出错误提示
   */
  code    : 2000,
  message : 'success',
  list    : [],
  data    : {},
  pageInfo: {},
}

/**
 * 分页封装
 */
const pageInfo = {
  pageNum : 1,
  pageSize: 10,
  total   : 100,
  list    : [],
}

/**
 * 理论上来说，会返回空数组、空对象，不会返回 null，因此代码中不会做出null、undefined等判断
 */
module.exports = {
  /**
   * 返回一个不带分页的列表
   */
  list(list) {
    const res = _.cloneDeep(resp)
    res.list = list
    return res
  },
  /**
   * 返回单个对象
   */
  data(data) {
    const res = _.cloneDeep(resp)
    res.data = data
    return res
  },
  /**
   * 返回分页内容
   * @param {pageInfo} pageInfo
   */
  page(pageInfo) {
    const res = _.cloneDeep(resp)
    res.pageInfo = pageInfo
    return res
  },
}
