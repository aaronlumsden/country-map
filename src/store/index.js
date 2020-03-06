import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    locations: false,
    map: false,
    markers: [],
    searchTerm: ""
  },
  mutations: {
    getLocations: function(state){

      Vue.axios.get('https://cors-anywhere.herokuapp.com/https://s3-eu-west-1.amazonaws.com/omnifi/techtests/locations.json').then(function(response){
          state.locations = response.data;
      }).catch(function(){
        
      });
    }
  },
  actions: {
    getLocations: function(context){
      context.commit('getLocations');
    }
  }
})
