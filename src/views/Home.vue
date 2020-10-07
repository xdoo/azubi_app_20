<template>
  <v-container>
    <v-row class="pt-16">
      <h2 class="display-3">Unsere Aktionen</h2>
    </v-row>
    <action-card-set></action-card-set>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue"
import { Component } from "vue-property-decorator"

// components
import ActionCardSet from "@/components/ActionCardSet.vue"

@Component({
  components: {
    ActionCardSet
  }
})
export default class Home extends Vue {

}
</script>
