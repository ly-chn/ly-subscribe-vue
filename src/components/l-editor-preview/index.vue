<template>
  <v-card :elevation='showContent?6:0'>
    <div class='pl-1'>
      <l-air-btn class='text--disabled' icon='mdi-view-headline' @click='showContent = !showContent'/>
      <l-air-btn class='text--disabled' icon='mdi-arrow-expand-all' @click='showContent = !showContent'/>
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
      componentId  : '',
      showContent  : true
    }
  },
  props  : {
    value: {
      type    : String,
      required: true
    }
  },
  watch  : {
    value: {
      handler() {
        this.preview()
      }
    }
  },
  methods: {
    preview() {
      Vditor.preview(document.getElementById(this.componentId), this.value)
    }
  },
  mounted() {
    this.preview()
  },
  created() {
    this.componentId = nextElementId()
  }
}
</script>