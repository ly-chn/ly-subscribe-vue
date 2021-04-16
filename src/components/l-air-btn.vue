<template>
  <v-btn max-height='18' max-width='18' class='bg-white shadow-none' color='primary' dark fab outlined x-small>
    <v-icon @click.stop='$emit(`click`)'>{{ icon }}</v-icon>
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