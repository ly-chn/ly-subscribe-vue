<template>
  <v-row class='h-full'>
    <v-col cols='4'>
      <task-tree/>
    </v-col>
    <v-divider class='cursor-move' vertical></v-divider>
    <v-col>
      <div class='w-full h-full'>
        markdown remark
      </div>
    </v-col>
  </v-row>
</template>

<script>

import TaskTree from "@/components/task-tree";

export default {
  name      : 'home',
  components: {TaskTree},
}
</script>
