<template>
  <div>
    Registrieren für Aktion: {{ $route.query.id }}
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { Component } from "vue-property-decorator"

@Component
export default class RegisterView extends Vue{
    
}
</script>