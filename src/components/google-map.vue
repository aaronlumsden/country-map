<template lang="html">
    <div id="map">
      
    </div>
</template>

<script>
export default {
  name: 'google-map'
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
