<template>
  <v-card
    max-width="350"
  >

    <v-img
      class="white--text align-end"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      :src="action.url"
    >
      <v-card-title v-text="action.title"></v-card-title>
      <v-card-subtitle class="white--text">{{ action.free }} freie Plätze</v-card-subtitle>
    </v-img>
    <v-card-text>
      {{action.description}}<router-link :to="{ path: 'action', query: { id: action.id}}">mehr...</router-link>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <register-dialog
        :disabled="action.free > 0 ? false : true"
        :action="action"
      ></register-dialog>
    </v-card-actions>
  </v-card>
</template>
<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from "vue-property-decorator"

// model
import Action from "@/model/Action"

// Komponenten
import RegisterDialog from "@/components/RegisterDialog.vue"

@Component({
  components: {
    RegisterDialog
  }
})
export default class ActionCard extends Vue{

  @Prop() action!: Action
}
</script>