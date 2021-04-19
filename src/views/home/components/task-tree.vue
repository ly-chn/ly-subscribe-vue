<template>
  <v-card flat>
    <v-sheet class="pa-4">
      <v-text-field
          v-model='itemFilterKeyword'
          clearable
          prepend-inner-icon="mdi-filter"/>
    </v-sheet>
    <v-treeview :filter='this.itemFilter'
                :items="items"
                :search='itemFilterKeyword'
                activatable
                class='overflow-auto scroll'
                color="primary"
                dense
                hoverable
                item-key='name'
                open-all
                shaped>
      <template v-slot:prepend='{item}'>
        <l-avatar :size="config.avatarHeight" :user-id="item.creator"/>
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
  </v-card>
</template>

<script>
import LAirBtn from "@/components/l-air-btn";

export default {
  name      : "task-tree",
  components: {LAirBtn},
  data() {
    return {
      // some param of config
      config           : {
        avatarHeight: 26
      },
      items            : [{
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
      itemFilterKeyword: null
    }
  },
  methods: {
    onClick() {
      alert(1)
    },
    itemFilter(item, search, itemKey) {
      // todo: 根据其它信息进行搜索
      return item[itemKey].toLowerCase().includes(search.toLowerCase())
    }
  }
}
</script>

<style lang='sass' scoped>
.item-info
  min-width: 100px

  ::v-deep .v-overlay
    justify-content: unset

</style>