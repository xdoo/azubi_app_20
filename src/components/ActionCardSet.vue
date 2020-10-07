<template>
  <v-row
    justify="start"
  >
    <v-col
      v-for="a in actions"
      :key="a.id"
    >
      <action-card :action="a"></action-card>
    </v-col>
  </v-row>  
</template>
<script lang="ts">
import Vue from 'vue'
import { Component } from "vue-property-decorator"

// components
import ActionCard from "@/components/ActionCard.vue"

// model
import Action from "@/model/Action"

@Component({
  components: {
    ActionCard
  }
})
export default class ActionCardSet extends Vue {
  
  get actions() {

    const a1 = new Action()
    a1.id = "a-1"
    a1.url = "http://www.catify.de/web/pics/014786985/005_400.jpg"
    a1.title = "Aktion EINS"
    a1.description = "Das ist Aktion eins."
    a1.free = 12

    const a2 = new Action()
    a2.id = "a-2"
    a2.url = "http://www.catify.de/web/pics/014786985/007_400.jpg"
    a2.title = "Aktion ZWEI"
    a2.description = "Das ist Aktion zwei."
    a2.free = 3

    const a3 = new Action() 
    a3.id = "a-3"
    a3.url = "http://www.catify.de/web/pics/014786985/006_400.jpg"
    a3.title = "Aktion DREI"
    a3.description = "Das ist Aktion drei."
    a3.free = 8

    const a4 = new Action() 
    a4.id = "a-4"
    a4.url = "http://www.catify.de/web/pics/014786985/009_400.jpg"
    a4.title = "Aktion VIER"
    a4.description = "Das ist Aktion vier."
    a4.free = 0

    const a5 = new Action() 
    a5.id = "a-5"
    a5.url = "http://www.catify.de/web/pics/014786985/010_400.jpg"
    a5.title = "Aktion FÜNF"
    a5.description = "Das ist Aktion fünf."
    a5.free = 10

    const a6 = new Action() 
    a6.id = "a-6"
    a6.url = "http://www.catify.de/web/pics/014786985/011_400.jpg"
    a6.title = "Aktion SECHS"
    a6.description = "Das ist Aktion sechs."
    a6.free = 2

    const list: Array<Action> = [a1, a2, a3, a4, a5, a6]
    return list
  }
}
</script>