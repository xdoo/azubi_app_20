<template>
  <v-app>
    <v-app-bar
      app
      color="light-green darken-2"
      dark
    >
      <span class="display-1 font-weight-regular">Azubi</span><span class="display-1 font-weight-thin">App</span>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from "vue-property-decorator"

@Component
export default class App extends Vue{

}
</script>
