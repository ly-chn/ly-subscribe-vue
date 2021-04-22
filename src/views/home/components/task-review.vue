<template>
  <div class='w-full h-full'>
    <v-timeline align-top dense>
      <v-timeline-item fill-dot icon-color='none'>
        <template v-slot:icon>
          <l-avatar user-id='1' size='48'/>
        </template>
        <v-text-field flat hide-details label="添加issue" solo>
          <template v-slot:append>
            <v-btn class="mx-0" depressed>
              Post
            </v-btn>
          </template>
        </v-text-field>
      </v-timeline-item>
      <v-timeline-item>
        <template v-slot:icon>
          <l-avatar user-id='1' size='24'/>
        </template>
        <p>
          this is a issue for the item
        </p>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
export default {
  name: "task-review",
  data() {
    return {
      records: [{}]
    }
  },
}
</script>
