<template>
  <div class='w-full h-full max-h-screen overflow-y-scroll'>
    <v-timeline dense>
      <v-timeline-item small>
        <template v-slot:icon>
          <l-avatar size='32' user-id='1'/>
        </template>
        <div v-if='preview.show'>
          <l-preview ref="a" v-model="preview.value"/>
        </div>
        <v-text-field v-else flat hide-details label="添加issue" solo @focus='preview.show = true'/>
      </v-timeline-item>
      <v-timeline-item small>
        <template v-slot:icon>
          <l-avatar size='24' user-id='1'/>
        </template>
        <p>
          this is a issue for the item
        </p>
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
      preview: {
        show: false,
        value: null
      }
    }
  },
}
</script>
