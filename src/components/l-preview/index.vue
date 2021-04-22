<template>
  <div :id='componentId'></div>
</template>

<script>
import Vditor from 'vditor'
import {nextElementId} from "@/util/id-generator";

export default {
  name: 'l-preview',
  data() {
    return {
      contentEditor: null,
      componentId  : ''
    }
  },
  props: {
    placeholder: {
      type: String,
    }
  },
  mounted() {
    this.contentEditor = new Vditor(this.componentId,
        {
          height       : 180,
          toolbarConfig: {
            pin : true,
            hide: true
          },
          cache        : {
            enable: false,
          },
          resize       : {
            enable: true,
          },
          comment      : {
            enable: true
          },
          toolbar      : [
            // 'emoji',
            // 'headings',
            // 'bold',
            // 'italic',
            // 'strike',
            // '|',
            'line',
            'quote',
            'list',
            'ordered-list',
            'check',
            // 'outdent',
            // 'indent',
            'code',
            'inline-code',
            // 'insert-after',
            // 'insert-before',
            // 'undo',
            // 'redo',
            'upload',
            'link',
            'table',
            'record',
            'edit-mode',
            'both',
            // 'preview',
            'fullscreen',
            'outline',
            // 'code-theme',
            // 'content-theme',
            'export',
            // 'devtools',
            // 'info',
            // 'help',
            'br',
          ],
          after        : () => {
            // this.contentEditor.setValue()
          },
          placeholder  : this.placeholder || 'input here...'
        })
  },
  created() {
    this.componentId = nextElementId()
  }

}
</script>

<style scoped>

</style>