<template>
  <div class="home">
        
    <div class="half">
        ...
    </div>
    
    <div class="half">
       <search-list />
    </div>
        
  </div>
</template>

<script>
import SearchList from '@/components/search-list.vue'
export default {
  name: 'Home',
  components: {SearchList},
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
