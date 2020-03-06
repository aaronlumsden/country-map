<template>
  <div class="home">
        
    <div class="half">
        ...
    </div>
    
    <div class="half">
       ...
    </div>
        
  </div>
</template>

<script>
export default {
  name: 'Home'
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
    
    &:first-child{
      background:red;
    }
    
    &:last-child{
      background:blue;
    }
    
    @media(max-width:@mob){
      width:100%;
    }
    
  }
  
}
</style>
