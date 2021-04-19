import Vue from 'vue'
// todo 引入方式有问题,webstorm不能识别组件

const componentNameRegex = /\/(.*)\//
const requireComponent = require.context(
    '.',
    true,
    /.index\.vue*/
)

requireComponent.keys().forEach((fileName) => {
    const componentConfig = requireComponent(fileName)
    console.log(fileName);
    const componentName = componentNameRegex.exec(fileName)[1]
    console.log(componentName);
    // Globally register the component
    Vue.component(componentName, componentConfig.default || componentConfig)
})