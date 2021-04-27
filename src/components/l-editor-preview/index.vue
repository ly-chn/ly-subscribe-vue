<template>
  <v-card :elevation='showContent?6:0'>
    <div class='pl-1'>
      <l-air-btn class='text--disabled' icon='mdi-view-headline' @click='showContent = !showContent'/>
      <v-dialog v-model="fullscreen" hide-overlay fullscreen transition="dialog-transition">
        <v-card>
          nothing is here
          <v-btn @click="fullscreen=false" color="primary">click to close dialog</v-btn>
        </v-card>
        <template v-slot:activator="{ on, attrs }">
          <l-air-btn v-bind="attrs" v-on="on" class='text--disabled' icon='mdi-arrow-expand-all'/>
        </template>
      </v-dialog>
      tow minute ago
    </div>
    <v-expand-transition>
      <v-card-text v-show='showContent' class='p-2'>
        <div :id='componentId' class='max-h-36'></div>
      </v-card-text>
    </v-expand-transition>
  </v-card>
</template>

<script>
import Vditor from 'vditor'
import {nextElementId} from "@/util/id-generator";

export default {
  name: 'l-editor-preview',
  data() {
    return {
      contentEditor: null,
      componentId: '',
      showContent: true,
      fullscreen: false
    }
  }
  ,
  props: {
    value: {
      type: String,
      required: true
    }
  }
  ,
  watch: {
    value: {
      handler() {
        this.preview()
      }
    }
  }
  ,
  methods: {
    preview() {
      Vditor.preview(document.getElementById(this.componentId), this.value)
    }
  }
  ,
  mounted() {
    this.preview()
  }
  ,
  created() {
    this.componentId = nextElementId()
  }
}
</script>
