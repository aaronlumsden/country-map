<template lang="html">
  <a class="searchItem" href="#" @click.prevent="goToLocation(location)">
      <span class="name">{{location.name}}</span>
      <span class="capital">Capital: {{location.capital}}</span>
  </a>
</template>

<script>
export default {
  name: 'search-list-item',
  props: {
    location: {
      type: Object,
      required: true
    }
  },
  computed: {
    markers: function(){
      return this.$store.state.markers
    }
  },
  methods: {
    goToLocation: function(location){
      // Trigger a click on the marker for the location
      window.google.maps.event.trigger(this.markers[location.name], 'click')
    }
  }
}
</script>
