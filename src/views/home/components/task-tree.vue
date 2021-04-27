<template>
  <v-card flat>
    <v-sheet class="pa-4">
      <v-text-field
          v-model='itemFilterKeyword'
          clearable
          prepend-inner-icon="mdi-filter">
        <template v-slot:append-outer>
          <v-icon title='添加项目' @click='onClick'>mdi-plus</v-icon>
        </template>
      </v-text-field>
    </v-sheet>
    <button @click='loadTask'>xxxxx</button>
    <v-treeview :filter='this.itemFilter'
                :items="items"
                :search='itemFilterKeyword'
                activatable
                :active.sync='activeNode'
                class='overflow-auto scroll'
                color="primary"
                dense
                hoverable
                item-key='name'
                open-all
                shaped>
      <template v-slot:prepend='{item}'>
        <l-avatar size="24" user-id="1"/>
      </template>
      <template v-slot:label="{item}">
        <v-menu close-delay='50' offset-y open-on-hover top transition="scale-transition">
          <template v-slot:activator="{ on, attrs }">
              <span v-bind="attrs" v-on="on">
                {{ item.name }}
              </span>
          </template>
          <div class="select-none">
            <l-air-btn class='mx-1' icon='mdi-plus-circle' title='添加子项' @click='onClick'/>
            <l-air-btn class='mx-1' icon='mdi-file-edit' title='修改' @click='onClick'/>
            <l-air-btn class='mx-1' icon='mdi-information' title='查看详情' @click='onClick'/>
          </div>
        </v-menu>
      </template>
    </v-treeview>
  </v-card>
</template>

<script>
import LAirBtn from "@/components/l-air-btn";
import {getAllTask} from "@/api/task";

export default {
  name      : "task-tree",
  components: {LAirBtn},
  data() {
    return {
      items            : [],
      activeNode: [],
      itemFilterKeyword: null
    }
  },
  methods: {
    onClick() {
      alert(1)
    },
    itemFilter(item, search, itemKey) {
      return item[itemKey].toLowerCase().includes(search.toLowerCase())
    },
    loadTask() {
      getAllTask().then(resp=>{
        this.items = resp
      })
    }
  },
  created() {
    // this.loadTask()
  }
}
</script>

<style lang='sass' scoped>
.item-info
  min-width: 100px

  ::v-deep .v-overlay
    justify-content: unset

</style>