<template lang="html">
    <div ref="map" id="map"></div>
</template>

<script>
export default {
  name: 'google-map',
  created: function(){
    // Once the view has rendered run functions
    this.$nextTick(function(){
        this.initMap();
        this.addMarkers();
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
    
    },
    addMarkers: function(){
      
    var self = this;
 
     // For each location create a new marker  & infoWindow pop up
     this.locations.forEach(function(location){
       
           // Create a new marker and set the position for its location
           // Add the marker to the markers array
           self.markers = new window.google.maps.Marker({
               position: {lat:location.latitude, lng:location.longitude},
               name: location.name
           });
           
           // Create new infoWindow with the location name
           var infoWindow = new window.google.maps.InfoWindow({
             content: location.name
           });
         
           // Add click event to the marker and on click do the following:
           // Close the active info window
           // pan to the selected location
           // Open the info window
           // set the active info window
           
           self.markers[location.name].addListener('click', function() {
             if (self.activeInfoWindow) { self.activeInfoWindow.close();}
             self.map.panTo({lat:location.latitude, lng:location.longitude});
             infoWindow.open(self.map, self.markers[location.name]);
             self.activeInfoWindow = infoWindow;
           });

         
           // Add marker to Map
           self.markers[location.name].setMap(self.map);
         
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
