<template>
  <v-app>
    <v-app-bar app color="primary">
      <div class="d-flex align-center ">
        ly-subscribe
      </div>

      <v-spacer></v-spacer>

      <v-btn fab small color="pink">
        <v-icon color="white">
          mdi-heart
        </v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-treeview v-model="tree" :open="initiallyOpen" :items="items" activatable item-key="name" open-on-click>
        <template v-slot:label="{item}">
          <div class="operational-button">
            {{item.name}}
            <v-item-group class="d-inline-block invisible hover-visible">
              <v-btn text fab x-small color="secondary">+</v-btn>
            </v-item-group>
          </div>
          <!--todo: 置于每个标签后, 鼠标浮动时显示-->
        </template>
      </v-treeview>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    initiallyOpen: ['public'],
    files: {
      html: 'mdi-language-html5',
      js: 'mdi-nodejs',
      json: 'mdi-code-json',
      md: 'mdi-language-markdown',
      pdf: 'mdi-file-pdf',
      png: 'mdi-file-image',
      txt: 'mdi-file-document-outline',
      xls: 'mdi-file-excel',
    },
    tree: [],
    items: [
      {
        name: '.git',
      },
      {
        name: 'node_modules',
      },
      {
        name: 'public',
        children: [
          {
            name: 'static',
            children: [{
              name: 'logo.png',
              file: 'png',
            }],
          },
          {
            name: 'favicon.ico',
            file: 'png',
          },
          {
            name: 'index.html',
            file: 'html',
          },
        ],
      },
      {
        name: '.gitignore',
        file: 'txt',
      },
      {
        name: 'babel.config.js',
        file: 'js',
      },
      {
        name: 'package.json',
        file: 'json',
      },
      {
        name: 'README.md',
        file: 'md',
      },
      {
        name: 'vue.config.js',
        file: 'js',
      },
      {
        name: 'yarn.lock',
        file: 'txt',
      },
    ],
  }),
};
</script>
<style scoped lang="sass">

.operational-button:hover .invisible
  visibility: visible

</style>