const res = require('../res')

module.exports = [{
    url: '/task',
    type: 'get',
    response(config) {
        return res.list([{
          name: "项目一",
          creator: 1,
        }, {
          name: "项目二",
          creator: 2
        }, {
          name: "项目三",
          creator: 3,
          children: [{
            name: "UI",
            creator: 3
          }, {
            name: "后端",
            creator: 3
          }, {
            name: "PC端",
            creator: 3
          }, {
            name: "Android",
            creator: 3
          }]
        }, {
          name: "项目四",
          creator: 4
        }])
    }
}]
