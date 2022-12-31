import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    initialWea: "",
    forecastWeather: "",
    city: "",
  },
  getters: {
    getDataWeather() {
      return store.state.forecastWeather;
    },
    getinitialWea() {
      return store.state.initialWea;
    },
    cityByName() {
      return store.state.city;
    },
  },
  mutations: {
    getInitialData(state, data) {
      state.forecastWeather = data.list;
    },
    getinitialWea(state, data) {
      state.initialWea = data;
    },
    setCity(state, city) {
      state.city = city;
      store.dispatch("getInitialData");
    },
  },
  actions: {
    getInitialData(context) {
      if (store.state.city) {
        fetch(
          `http://api.openweathermap.org/data/2.5/forecast?q=${store.state.city}&units=metric&appid=10432c2e3f84b54767a8dc7581b1393e`
        )
          .then((response) => response.json())
          .then((data) => {
            context.commit("getInitialData", data);
          });
        fetch(
          `http://api.openweathermap.org/data/2.5/weather?q=${store.state.city}&units=metric&appid=10432c2e3f84b54767a8dc7581b1393e`
        )
          .then((response) => response.json())
          .then((data) => {
            context.commit("getinitialWea", data);
          });
      }
    },

  },
});
