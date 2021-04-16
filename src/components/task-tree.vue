<template>
  <v-treeview :items="items"
              activatable
              class='w-max overflow-auto scroll'
              color="primary"
              dense
              hoverable
              item-key=name
              open-all
              open-on-click
              shaped>
    <template v-slot:prepend='{item}'>
      <v-avatar :size="config.avatarHeight" color="indigo">
        <v-img :alt="item.creator&&item.creator.nickname" :src="item.creator&&item.creator.avatar">
          <template v-slot:placeholder>
            <div :style='{lineHeight: `${config.avatarHeight}px`}' class='white--text h-full'>许</div>
          </template>
        </v-img>
      </v-avatar>
    </template>
    <template v-slot:label="{item}">
      <v-menu close-delay='50' offset-y open-on-hover top transition="scale-transition">
        <template v-slot:activator="{ on, attrs }">
              <span v-bind="attrs" v-on="on">
                {{ item.name }}
              </span>
        </template>
        <div class="select-none">
          <l-air-btn icon='mdi-plus' @click='onClick'/>
          &emsp;
          <l-air-btn icon='mdi-plus' @click='onClick'/>
          &emsp;
          <l-air-btn icon='mdi-plus' @click='onClick'/>
        </div>
      </v-menu>
    </template>
  </v-treeview>
</template>

<script>
import LAirBtn from "@/components/l-air-btn";

export default {
  name      : "task-tree",
  components: {LAirBtn},
  data() {
    return {
      config: {
        avatarHeight: 26
      },
      // https://imgtu.com/i/ccvOmt
      // https://imgtu.com/i/ccvb6A
      // https://imgtu.com/i/ccvqOI
      items: [{
        name   : "项目一",
        creator: {
          nickname: '张三',
          avatar  : 'https://z3.ax1x.com/2021/04/14/ccvOmt.jpg'
        }
      }, {
        name: "项目二",
      }, {
        name    : "项目三",
        children: [{
          name: "UI",
        }, {
          name: "后端",
        }, {
          name: "PC端",
        }, {
          name: "Android",
        }]
      }, {
        name: "项目四",
      }],

    }
  },
  methods: {
    onClick() {
      alert(1)
    }
  },
}
</script>

<style lang='sass' scoped>
.item-info
  min-width: 100px

  ::v-deep .v-overlay
    justify-content: unset


</style>