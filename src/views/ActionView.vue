<template>
  <div>
    Infos über Aktion {{ $route.query.id }}
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { Component } from "vue-property-decorator"

@Component
export default class ActionView extends Vue {
  
}
</script>