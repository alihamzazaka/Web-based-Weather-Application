<template>
  <div>
    <div class="background d-flex pa-2">
      <v-text-field
        class="ml-15 mr-15"
        label="Enter your City here"
        v-model="city"
        @change="cityWeather"
      >
      </v-text-field>
    </div>
    <div class="d-flex background pa-5 mt-5">
      <div>
        <h5 class="text-h6">Current Weather</h5>
        <h6 class="text-h4 mt-3">{{ cityByName }}</h6>
        <h1 class="mt-10 ml-10">
          {{ initialWea ? initialWea.main.temp : "" }} C
        </h1>
      </div>

      <v-img
        class="img-weather"
        :src="`https://openweathermap.org/img/wn/${
          initialWea ? initialWea.weather[0].icon : ''
        }@2x.png`"
      ></v-img>
    </div>

    <div class="pa-5 mt-5">
      <p class="text-h4 text-center">Hourly Forecast</p>
      <div class="d-flex flex-column">
        <div
          class="d-flex justify-space-between background mb-3 pa-4 pr-6"
          v-for="item in dailyForecastData"
          :key="item.dt"
        >
          <v-img
            max-height="60"
            max-width="60"
            :src="`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`"
          ></v-img>
          <div>
            <h4 class="text-center">{{ item.main.temp }} C</h4>
            <p class="text-center">
              {{ item.weather[0].description }}
            </p>
          </div>
          <p class="text-center mt-3">
            {{ item.dt_txt.slice(11, item.dt_txt.length) }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainMenu",
  data() {
    return {
      city: "",
    };
  },
  methods: {
    cityWeather() {
      this.$store.state.city = this.city;
      this.$store.dispatch("getInitialData");
    },
  },
  mounted() {
    this.$store.dispatch("getInitialData");
  },
  computed: {
    initialWea() {
      return this.$store.getters.getinitialWea;
    },
    cityByName() {
      return this.$store.getters.cityByName;
    },
    dailyForecastData() {
      let forecast = this.$store.getters.getDataWeather;
      let newData = forecast.slice(1, 5);
      return newData;
    },
  },
};
</script>

<style scoped>
.img-weather {
  height: 100px;
  max-width: 70px;
  margin-left: 200px;
}
.background {
  background-color: #e5eef1;
  border-radius: 20px;
}
</style>
