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
      <v-avatar color="indigo" size="26">
        <v-img :alt="item.creator&&item.creator.nickname" :src="item.creator&&item.creator.avatar">
          <template v-slot:placeholder>
            <div class='white--text'>许</div>
          </template>
        </v-img>
      </v-avatar>
    </template>
    <template v-slot:label="{item}">
      <v-hover>
        <template v-slot:default="{ hover }">
          <div class='relative item-info'>
            {{ item.name }}
            <v-fade-transition>
              <v-overlay v-if="hover" absolute color="#eee">
                <div class="select-none">
                  <l-air-btn icon='mdi-plus' title='添加节点' @click='onClick'/>
                  &emsp;
                  <l-air-btn icon='mdi-plus' @click='onClick'/>
                  &emsp;
                  <l-air-btn icon='mdi-plus' @click='onClick'/>
                </div>
              </v-overlay>
            </v-fade-transition>
          </div>
        </template>
      </v-hover>
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
      }]
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