<template>
  <v-row justify="center" align="center">
    <!-- Dialog -->
    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title class="text-h5"> Gracias </v-card-title>

        <v-card-text class="text-center">
          Haz calificado este comic con
          {{ qualify }} estrellas
        </v-card-text>

        <v-card-actions>
          <v-spacer />

          <v-btn color="gray" text x-small @click="dialog = false">
            Cerrar
          </v-btn>

          <v-btn color="green darken-1" x-small dark @click="nextComic()">
            Ver otro comic
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Comic -->
    <v-col cols="12" md="6" v-if="comic">
      <Comic :comic="comic">
        <template #rating>
          <v-rating v-model="qualify" color="amber" size="20" dense />
        </template>
      </Comic>
    </v-col>
  </v-row>
</template>

<script>
import Comic from '~/components/Comic.vue';

export default {
  name: 'Comics',

  components: {
    Comic,
  },

  data: () => ({
    comic: null,
    dialog: false,
    qualify: 0,
  }),

  watch: {
    qualify(val) {
      if (val > 0) {
        this.dialog = true;
      }
    },
  },

  mounted() {
    this.fetchComic();
  },

  methods: {
    async fetchComic() {
      const comicNumber = Math.floor(Math.random() * 1000) + 1;

      try {
        this.comic = await this.$api.$get(`/comics/${comicNumber}`);
      } catch (error) {
        console.log(error);
      }
    },

    nextComic() {
      this.fetchComic();
      this.dialog = false;
      this.qualify = 0;
    },
  },
};
</script>

<style lang="scss" scoped></style>
