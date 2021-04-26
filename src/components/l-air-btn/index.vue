<template>
  <v-btn max-height='18'  max-width='18' color='primary' depressed plain tile text fab x-small>
    <v-icon @click='$emit(`click`)'>{{ icon }}</v-icon>
  </v-btn>
</template>

<script>
export default {
  name : "l-air-btn",
  props: {
    icon: {
      type: String
    },
  },
}
</script>