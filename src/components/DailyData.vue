<template>
  <div class="background pa-5">
    <h3 class="text-h5 text-center mb-3">Daily Weather</h3>
    <v-list class="background">
      <v-list-item
        v-for="item in forecastData"
        :key="item.dt"
      >
        <v-list-item-content>
          <div class="d-flex align-center justify-space-between">
            <v-img
              max-height="60"
              max-width="60"
              :src="`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`"
            ></v-img>
            <p class=" mt-5">{{ item.dt }}</p>
          
            <div >
              <h3>
                {{ item.weather[0].description }}
              </h3>
            </div>
       
            <div>
              <p class="text-body-1 mt-4">
                <b>{{ Math.trunc(item.main.temp_max) }}</b
                >/{{ Math.round(item.main.temp_max) }}
              </p>
            </div>
          </div>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  name: "SideData",

  computed: {
    forecastData() {
      let forecast = this.$store.getters.getDataWeather;
      let newData = [];
      for (let i = 0; i < forecast.length; i++) {
        if (i % 8 == 0) {
          var myDate = new Date(1000 * forecast[i].dt);
          var days = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ];
          var day = days[myDate.getDay()];
          forecast[i].dt = day;
          newData.push(forecast[i]);
        }
      }
      return newData;
    },
  },
  data: () => ({
    //
  }),
};
</script>

<style scoped>
.background {
  background-color: #e5eef1;
  border-radius: 20px;
}

</style>
