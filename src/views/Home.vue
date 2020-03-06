<template>
  <div class="home" v-if="locations">
    
    <div class="half">
        <google-map/>
    </div>
    
    <div class="half">
       <search-list />
    </div>
        
  </div>
</template>

<script>
import SearchList from '@/components/search-list.vue'
import GoogleMap from '@/components/google-map.vue'
export default {
  name: 'Home',
  components: {SearchList, GoogleMap},
  mounted: function(){
    this.$store.dispatch('getLocations');   
  },
  computed: {
    locations: function(){
      return this.$store.state.locations
    }
  }
}
</script>

<style lang="less">
.home{
  display:flex;
  
  @media(max-width:@mob){
    display:block;
  }
  
  .half{
    flex:1;
    width:50%;
    
    @media(max-width:@mob){
      width:100%;
    }
    
  }
  
}
</style>
