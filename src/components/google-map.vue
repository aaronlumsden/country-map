<template lang="html">
    <div id="map"></div>
</template>

<script>
export default {
  name: 'google-map',
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
  }
}
</script>

<style lang="less" scoped>
#map{
  width: 100%; 
  height:100vh;
  background:red;
  
  @media(max-width:@mob){
    height:300px;
  }
}
</style>
