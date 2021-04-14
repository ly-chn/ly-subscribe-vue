<template>
  <v-treeview :items="items"
              activatable
              class='w-max overflow-auto scroll'
              color="primary"
              hoverable
              item-key="name"
              open-all
              open-on-click>
    <template v-slot:prepend='{item}'>
      <v-avatar color="indigo" size="18">
        <span class="white--text">许</span>
      </v-avatar>
    </template>
    <template v-slot:label="{item}">
      <v-menu min-width='none' offset-y open-on-hover top>
        <template v-slot:activator="{ on, attrs }">
              <span v-bind="attrs" v-on="on">
                {{ item.name }}
              </span>
        </template>
        <div class="operational-button select-none">
          <v-icon @click.stop='onClick'>mdi-plus</v-icon>
          &emsp;
          <v-icon @click.stop='onClick'>mdi-plus</v-icon>
          &emsp;
          <v-icon @click.stop='onClick'>mdi-plus</v-icon>
        </div>
      </v-menu>
    </template>
  </v-treeview>
</template>

<script>
export default {
  name: "task-tree",
  data: () => ({
    items: [{
      name: '.git',
    }, {
      name: 'node_modules',
    }, {
      name: 'public',
      children: [{
        name: 'static',
      }],
    }, {
      name: '.gitignore',
    },]
  }),
  methods: {
    onClick() {
      alert(1)
    }
  },
}
</script>