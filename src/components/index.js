/**
 * 详细说明：
 *
 * 此处组件使用vue教程中的
 * [基础组件的自动化全局注册](https://cn.vuejs.org/v2/guide/components-registration.html#基础组件的自动化全局注册)
 * 方式实现
 *
 * 但是这样会引发一个问题，webstorm将无法识别那些，解决方案如下：
 *
 * 1. > npm i vue-docgen-web-types
 *
 * 2. 在package.json中配置：
 * ~~~json
 * "scripts": {
 *   "serve": "vue-cli-service serve",
 *   "build": "vue-cli-service build",
 *   "update-web-types": "vue-docgen-web-types"
 * },
 * "web-types": "./web-types.json"
 * ~~~
 *
 * > 相关资料：
 *
 * > https://www.npmjs.com/package/vue-docgen-web-types
 *
 * > https://stackoverflow.com/questions/52074070/make-webstorm-to-understand-which-vue-components-are-registered-globally
 */
import Vue from 'vue'

const componentNameRegex = /\/(.*)\//
const requireComponent = require.context(
    '.',
    true,
    /.index\.vue*/
)

requireComponent.keys().forEach((fileName) => {
    const componentConfig = requireComponent(fileName)
    const componentName = componentNameRegex.exec(fileName)[1]
    Vue.component(componentName, componentConfig.default || componentConfig)
})