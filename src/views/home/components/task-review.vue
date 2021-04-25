<template>
  <div class='w-full h-full max-h-screen overflow-y-auto'>
    <v-timeline dense>
      <v-timeline-item small>
        <template v-slot:icon>
          <l-avatar size='32' user-id='1'/>
        </template>
        <div>
          <l-editor v-model="remark.value" :hidden='remark.hide'/>
          <v-btn v-show='!remark.hide' class='mt-1' color="primary" depressed small>发表</v-btn>
        </div>
        <v-text-field v-show='remark.hide' flat hide-details label="Add remark" solo @focus='remark.hide = !remark.hide'/>
      </v-timeline-item>
      <v-timeline-item small>
        <template v-slot:icon>
          <l-avatar size='24' user-id='1'/>
        </template>
        <l-editor-preview :value='tmp.markdown'/>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
export default {
  name: "task-review",
  data() {
    return {
      records: [{}],
      // 为true则显示评论功能
      remark: {
        hide : true,
        value: null
      },
      tmp:{
        markdown:`
# 领导人相关接口

### 1. create 创建领导人

\`\`\`http
POST http://localhost:9092/leader
Content-Type: application/json

{
  "region": "山东省",\t// 地域
  "title": "省长",\t// 机构职务
  "name": "jdm",\t// 名称
  "fallOff": false\t// 是否为落马官员, 为true表示落马官员
}
\`\`\`

### 2. disable 批量禁用

\`\`\`http
POST http://localhost:9092/leader/disabled
Content-Type: application/json

[1,2,3]
\`\`\`

### 3. enable 批量启用

\`\`\`http
POST http://localhost:9092/leader/enable
Content-Type: application/json

[1,2,3]
\`\`\`

### 4. remove 批量删除

\`\`\`http
POST http://localhost:9092/leader/remove
Content-Type: application/json

[1,2,3]
\`\`\`

### 5. update 更新单个

\`\`\`http
POST http://localhost:9092/leader/update
Content-Type: application/json

{
  "region": "山东省",
  "title": "省长",
  "name": "jdm",
  "id": 1
}
\`\`\`

### 6. search 检索

\`\`\`http
GET http://localhost:9092/leader/search?keyword=部长&pageNum=1&pageSize=10&fallOff=false
\`\`\`

\`\`\`json
{
  "msg": "success",\t// ?
  "total": 0,\t\t// 总数
  "code": "0",\t\t// 0表示success
  "data": [{
    "id": 1, // id
    "region": "山东省",\t// 地域
    "title": "省长",\t// 机构职务
    "name": "jdm",\t// 名称
    "fallOff": false\t// 是否为落马官员, 为true表示落马官员
  }],\t\t// 响应信息
  "message": "success"
}
\`\`\`




        `
      }
    }
  },
}
</script>
