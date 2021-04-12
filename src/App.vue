<template>
  <v-app>
    <v-app-bar app color="primary">
      <div class="d-flex align-center ">
        ly-subscribe
      </div>

      <v-spacer></v-spacer>

      <v-btn color="pink" fab small>
        <v-icon color="white">
          mdi-heart
        </v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-treeview :items="items"
                  activatable
                  class='w-max overflow-auto scroll'
                  color="primary"
                  dense
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
              <v-btn v-bind="attrs" v-on="on" color="primary" dark>
                {{ item.name }}
              </v-btn>
            </template>
            <div class="operational-button">
              <v-icon @click.stop='onClick'>mdi-plus</v-icon>
              <v-icon @click.stop='onClick'>mdi-plus</v-icon>
              <v-icon @click.stop='onClick'>mdi-plus</v-icon>
            </div>
          </v-menu>
        </template>
      </v-treeview>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data   : () => ({
    a    : true,
    items: [{
      name: '.git',
    }, {
      name: 'node_modules',
    }, {
      name    : 'public',
      children: [{
        name: 'static',
      }],
    }, {
      name: '.gitignore',
    },],
  }),
  methods: {
    onClick() {
      alert(1)
    }
  },
};
</script>