<template>
  <v-avatar :size="size" color="indigo">
    <v-img :src="userInfo.avatar">
      <template v-slot:placeholder>
        <div :style='{lineHeight: `${size}px`}' class='white--text h-full'>{{ userInfo.username }}</div>
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
        avatar: ''
      }
    }
  },
  props: {
    /**
     * 用户id
     */
    userId: {
      type: String
    },
    /**
     * 大小
     */
    size: {
      type: [Number, String]
    },
    userInfo: {
      type: Object,
      validator(v) {
        // must provide username or avatar
        return !!v.username || !!v.avatar
      }
    }
  },
}
</script>