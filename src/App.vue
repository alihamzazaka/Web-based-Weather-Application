<template>
  <v-app >
    <div>
      <div >
      <v-row >
        <v-col class="col-sm-12 d-flex">
          <v-spacer></v-spacer>
          <div>
          <v-img
            max-height="120"
          max-width="150"
            src="./assets/season.png"
            class=" mt-5 "
            
          ></v-img>
          <h3 class="text-h5 font-weight-bold text-center">Weather</h3>
        </div>
          <v-spacer></v-spacer>
        </v-col>
      </v-row>
      <div class="mx-8 mt-5">
        <SideBarMenu />
      </div>
    </div>
      
      <v-row class="ma-5">
        <v-col class="col-lg-6 col-md-6 col-sm-12">
          <WeatherData />
        </v-col>
        <v-col class="col-lg-6 col-md-6 col-sm-12">
          <DailyData />
        </v-col>
      </v-row>
    </div>
  </v-app>
</template>

<script>
import WeatherData from "./components/WeatherData.vue";
import DailyData from "./components/DailyData.vue";

export default {
  name: "App",

  components: {
    WeatherData,
    DailyData,
  },

  data: () => ({
    //
  }),
};
</script>
