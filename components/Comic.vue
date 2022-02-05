<template>
  <v-card class="mx-auto my-12 pa-4" max-width="500" elevation="10">
    <v-img height="250" :src="comic.img" contain />

    <v-card-title v-text="comic.title" />

    <v-card-text>
      <v-row align="center" class="mx-0">
        <slot name="rating" />
        <div class="grey--text ms-4">
          {{ `${comic.year}/${comic.month}/${comic.day}` }}
        </div>
      </v-row>

      <v-row>
        <v-col>
          <div v-html="comic.transcript" />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    comic: {
      type: Object,
      required: true,
    },
  },
};
</script>
