<template>
  <div style='display: contents'>
    <v-app-bar :elevate-on-scroll='true' app>
      <v-progress-linear
          :active='progressBar'
          :indeterminate='progressBar'
          absolute
          bottom
          rounded
          color='#6bf'
      ></v-progress-linear>

      <v-toolbar-title>{{ title }}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn color="pink" fab small>
        <v-icon color="white">
          mdi-heart
        </v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>

    <v-footer>
      <v-col class='text-center' cols='12'>
        {{ new Date().getFullYear() }} — <strong>{{ title }}</strong>
      </v-col>
    </v-footer>
  </div>
</template>

<script>
import setting    from '@/setting'
import {mapState} from "vuex";

export default {
  data() {
    return {
      title : setting.title,
    }
  },
  computed: {
    ...mapState({
      progressBar: state => state.progressBar
    })
  }
}
</script>
