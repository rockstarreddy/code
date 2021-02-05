<template>
  <div id="app" class="h-100 p-3">
    <HomePage />
  </div>
</template>

<style>
  .flex-column {
    flex-direction: column;
  }
  .flex-1 {
    flex: 1;
  }
  .justify-content-between {
      justify-content: space-between;
  }
</style>
<script>

import axios from "axios";
import {API_KEY, BASE_URL} from './constants';

import HomePage from './components/HomePage.vue'

export default {
  name: 'App',
  components: {
    HomePage
  },
  methods: {
    setAxiosDefaultParams() {
      axios.defaults.baseURL = BASE_URL;
      axios.defaults.headers["x-access-token"] = API_KEY;
      axios.defaults.headers["access-control-allow-origin"] = "http://localhost:8080"
    }
  },
  beforeMount() {
    this.setAxiosDefaultParams();
  }
}
</script>

