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
      componentId: ''
    }
  },
  props: {
    placeholder: {
      type: String,
    }
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  methods: {
    initEditor() {
      this.contentEditor = new Vditor(this.componentId,
          {
            height: 180,
            toolbarConfig: {
              pin: true,
              hide: true
            },
            cache: {
              enable: false,
            },
            resize: {
              enable: true,
            },
            comment: {
              enable: true
            },
            toolbar: [
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
            placeholder: this.placeholder || 'input here...',
            input: (value, previewElement) => {
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