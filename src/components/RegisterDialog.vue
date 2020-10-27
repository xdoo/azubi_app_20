<template>
  <v-row justify="center">
    <v-spacer></v-spacer>
    <v-dialog
      v-model="dialog"
      max-width="700px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          :disabled="disabled"
          title="hier anmelden"
          v-bind="attrs"
          v-on="on"
          class="mr-3"
          icon>
        <v-icon>mdi-face-shimmer</v-icon>
      </v-btn>
      </template>
      <v-card>
        <v-img
          height="240px"
          :src="require('@/assets/kids.jpg')"
        >
          <v-card-title class="white--text">
            Kinder anmelden
          </v-card-title>
        </v-img>

        <v-card-subtitle
          class="mt-4 font-weight-regular"
        >
          <h3>Kinder für Veranstaltung "{{action.title}}" anmelden</h3>
        </v-card-subtitle>
        <v-card-text>
          <v-list
            v-if="!isKidsEmpty && !modifyKids"
          >
            <v-list-item
              v-for="kid in kids"
              :key="kid.firstname"
            >
              <v-list-item-action>
                <v-checkbox></v-checkbox>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-subtitle>{{kid.firstname}}, {{kid.lastname}} ({{kid.age}}J)</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <div
           v-if="isKidsEmpty || modifyKids"
          >
          <v-row
              align="center"
              v-for="kid in tempKids"
              :key="kid.firstname"
            >
              <v-col cols="4">
                <v-text-field
                  label="Vorname"
                  v-model="kid.firstname"
                ></v-text-field>
              </v-col>
              <v-col cols="4">
                <v-text-field
                  label="Nachname"
                  v-model="kid.lastname"
                ></v-text-field>
              </v-col>
              <v-col cols="2">
                <v-text-field
                  type="number"
                  label="Alter"
                  v-model="kid.age"
                ></v-text-field>
              </v-col>
              <v-col cols="2">
                <v-btn
                  @click="removeKid(kid.firstname)" 
                  icon>
                  <v-icon>mdi-delete-outline</v-icon>
                </v-btn>
              </v-col>
            </v-row>
            <v-row
              align="center"
              v-if="isKidsEmpty || modifyKids"
            >
              <v-col cols="4">
                <v-text-field
                  label="Vorname"
                  v-model="kid.firstname"
                ></v-text-field>
              </v-col>
              <v-col cols="4">
                <v-text-field
                  label="Nachname"
                  v-model="kid.lastname"
                ></v-text-field>
              </v-col>
              <v-col cols="2">
                <v-text-field
                  type="number"
                  label="Alter"
                  v-model="kid.age"
                ></v-text-field>
              </v-col>
              <v-col cols="2">
                <v-btn
                  @click="addKid()" 
                  icon>
                  <v-icon>mdi-plus-circle-outline</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </div>
        </v-card-text>
        <v-card-actions
          class="pb-5 pr-5"
        >
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            v-if="!isKidsEmpty && !modifyKids"
          >
            anmelden
          </v-btn>
          <v-btn
            color="primary"
            v-if="isKidsEmpty || modifyKids"
            @click="storeKids()"
          >
            speichern
          </v-btn>
          <v-btn 
            v-if="!isKidsEmpty || !modifyKids"
            @click="workOnKids()"
            depressed>
            <v-icon>mdi-face</v-icon>
          </v-btn>
          <v-btn
            text
            @click="dialog = !dialog"
          >
            abbrechen
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"

// model
import Kid from "@/model/Kid"
import Action from "@/model/Action"

@Component
export default class RegisterDialog extends Vue {
  
  @Prop({default: false}) readonly disabled?: boolean
  @Prop() readonly action?: Action

  dialog = false
  kid = new Kid()
  modifyKids = false
  tempKids = Array<Kid>()

  get kids(): Kid[] {
    return this.$store.getters.getKids
  }

  get isKidsEmpty(): boolean {
    return this.$store.getters.isEmpty
  }

  addKid() {
    this.tempKids.push(this.kid)
    this.modifyKids = true
    this.kid = new Kid()
  }

  removeKid(name: string) {
    this.tempKids.forEach((kid: Kid, index: number) => {
      if(kid.firstname === name) this.tempKids.splice(index, 1)
    })
  }

  workOnKids () {
    this.modifyKids = true
    this.tempKids = this.kids
  }

  storeKids() {
    this.$store.dispatch("changeKids", this.tempKids)
    this.modifyKids = false
  }

  register() {
    console.log("Kinder registrieren...")
  }
}
</script>