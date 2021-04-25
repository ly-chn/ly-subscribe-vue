<template>
  <v-row class='h-full'>
    <v-col cols='4'>
      <task-tree/>
    </v-col>
    <v-divider vertical></v-divider>
    <v-col >
      <task-review/>
    </v-col>
  </v-row>
</template>

<script>

import TaskTree from "@/views/home/components/task-tree";
import TaskReview from "@/views/home/components/task-review";
import request from "@/util/request";

export default {
  name      : 'home',
  components: {
    TaskReview,
    TaskTree
  },
  created() {
    request.get('/vue-element-admin/article/list').then(res=>{
      console.log(res)
    })
  }
}
</script>
