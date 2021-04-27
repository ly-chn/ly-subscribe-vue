<template>
  <div v-show='!hide'>
    <div :id='componentId'></div>
  </div>
</template>

<script>
import Vditor from 'vditor'
import {nextElementId} from "@/util/id-generator";

export default {
  name: 'l-editor',
  data() {
    return {
      contentEditor: null,
      componentId  : ''
    }
  },
  props  : {
    placeholder: {
      type: String,
    },
    hide       : {
      type: Boolean
    }
  },
  model  : {
    prop : 'value',
    event: 'change'
  },
  methods: {
    initEditor() {
      this.contentEditor = new Vditor(this.componentId,
          {
            height       : 180,
            icon         : "material",
            toolbarConfig: {
              pin: true,
              // hide: true
            },
            cache        : {
              enable: false,
            },
            resize       : {
              enable: true,
            },
            preview      : {actions: []},
            toolbar      : [
              // 'emoji',
              // 'headings',
              // 'bold',
              // 'italic',
              // 'strike',
              // '|',
              // 'line',
              // 'quote',
              // 'list',
              // 'ordered-list',
              // 'check',
              // 'outdent',
              // 'indent',
              // 'code',
              // 'inline-code',
              // 'insert-after',
              // 'insert-before',
              // 'undo',
              // 'redo',
              // 'upload',
              // 'link',
              // 'table',
              // 'record',
              // 'edit-mode',
              // 'both',
              // 'preview',
              // 'fullscreen',
              // 'outline',
              // 'code-theme',
              // 'content-theme',
              // 'export',
              // 'devtools',
              // 'info',
              // 'help',
              // 'br',
            ],
            placeholder  : this.placeholder || 'input here...',
            input        : (value, previewElement) => {
              this.$emit('change', value)
            }
          })
    },
    /**
     * 设置值
     * @param value 值
     */
    setValue(value) {
      this.contentEditor.setValue(value)
    }
  },
  mounted() {
    this.initEditor()
  },
  created() {
    this.componentId = nextElementId()
  }

}
</script>