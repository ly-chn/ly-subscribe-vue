<template>
  <v-avatar :size="size" color="indigo" class='select-none'>
    <v-img :src="avatar">
      <template v-slot:placeholder>
        <div :style='{lineHeight: `${size}px`}'
             :title='record.username'
             class='white--text h-full'>
          {{ record.username.substr(0, 1) }}
        </div>
      </template>
    </v-img>
  </v-avatar>
</template>

<script>
export default {
  name: "l-avatar",
  data() {
    return {
      record: {
        username: '张三',
        avatar  : ''
      }
    }
  },
  props   : {
    /**
     * 用户id
     */
    userId: {
      type: [String, Number]
    },
    /**
     * 大小
     */
    size    : {
      type: [Number, String]
    }
  },
  computed: {
    avatar() {
      return this.record.avatar
    },
  },
}
</script>