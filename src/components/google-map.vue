<template lang="html">
    <div id="map"></div>
</template>

<script>
export default {
  name: 'google-map',
  mounted: function(){
    // Once the view has rendered run functions
    this.$nextTick(function(){
        this.initMap();
    })
  },
  computed: {
    locations: function(){
      return this.$store.state.locations
    },
    map: {
      get: function(){
        return this.$store.state.map
      },
      set: function(value){
        this.$store.state.map = value;
      }
    },
    markers: {
      get: function(){
        return this.$store.state.markers
      },
      set: function(value){
        this.$store.state.markers[value.name] = value;
      }
    }
  },
  methods: {
    initMap: function(){
      
      // Set up the  map
      this.map = new window.google.maps.Map(document.getElementById('map'), {
           center: {lat: 49.217596, lng: 19.643555},
           zoom: 4
      }); 
    
    }
  }
}
</script>

<style lang="less" scoped>
#map{
  width: 100%; 
  height:100vh;
  
  @media(max-width:@mob){
    height:300px;
  }
}
</style>
