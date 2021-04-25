<template>
  <v-card elevation='6'>
    <v-card-text>
      <div :id='componentId' class='max-h-48'></div>
    </v-card-text>
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
      componentId  : ''
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