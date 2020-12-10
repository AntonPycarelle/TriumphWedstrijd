<template>
  <v-footer
    dark
    padless
    fluid
  >
    <v-card
      flat
      tile
      class="indigo lighten-1 white--text text-center"
    >
      <!-- <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text> -->
      <div class="imgwrapper">
          <img class="centerrimg" src="/logoo.png" alt="triumph logo">

      </div>
      <v-card-text class="white--text pt-0"><div class="centerr">

Triumph brengt saloncondities naar Wevelgem op zaterdag 23 en zondag 24 januari.
Bezoek onze showroom en ontdek misschien wel jouw nieuwe moto!        <br> <a class="regels" target="_blank" href="">Wedstrijdregelement</a>
  </div>   </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Triumph Wevelgem</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({


    }),
  }
</script>

<style>
.centerr{
    text-align: center;
}

.regels{
    color: #B9B9B9;
}

.regelwrapper{
    display: flex;
    align-items: center;
    justify-items: center;
    text-align: center;
    width: 100%;
}

.imgwrapper{
    width: 100%;
}

.centerrimg{
    display: flex;
    justify-items: center;
    align-items: center;
    margin: auto;
    padding-top: 1.2rem;
    width: 15%;
}

</style>