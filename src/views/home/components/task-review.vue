<template>
  <div class='w-full h-full'>
    <v-btn color='green'>New Issues</v-btn>
    <v-timeline align-top dense>
      <v-timeline-item color="pink" small>
        <v-row class="pt-1">
          <v-col cols="3">
            <strong>5pm</strong>
          </v-col>
          <v-col>
            <strong>New Icon</strong>
            <div class="caption">
              Mobile App
            </div>
          </v-col>
        </v-row>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
export default {
  name: "task-review",
  data() {
    return {
      records: [{

      }]
    }
  },
}
</script>

<style scoped>

</style>