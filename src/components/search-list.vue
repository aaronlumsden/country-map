<template lang="html">
  <div id="searchList">
    <form id="search">
      <input type="text" placeholder="Search for country...">
    </form>
    <ul id="mapList" class="half">
      <li>
        <a class="searchItem" href="#">
            <span class="name">United Kingdom</span>
            <span class="capital">Capital: London</span>
        </a>
      </li>
      
      <li>
        <a class="searchItem" href="#">
            <span class="name">United Kingdom</span>
            <span class="capital">Capital: London</span>
        </a>
      </li>
      
      <li>
        <a class="searchItem" href="#">
            <span class="name">United Kingdom</span>
            <span class="capital">Capital: London</span>
        </a>
      </li>
      
      <li>
        <a class="searchItem" href="#">
            <span class="name">United Kingdom</span>
            <span class="capital">Capital: London</span>
        </a>
      </li>
      
      <li>
        <a class="searchItem" href="#">
            <span class="name">United Kingdom</span>
            <span class="capital">Capital: London</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'search-list'
}
</script>

<style lang="less" scoped>

#searchList{
  width:100%;
  
  #search{
    padding:15px;
    background:@aqua;;
    
    input{
      width:100%;
      font-size:1rem;
      padding:10px;
      border-radius:3px;
      border:0px;
      
      &:focus{
        outline:0;
      }
      
    }
    
  }
  
  #mapList{
    height:~"calc(100vh - 64px)";
    width:100%;
    background:white;
    overflow:auto;
    
    li{
      border-bottom:1px solid fade(black,10);
      
      .searchItem{
        display:block;
        padding:15px 10px;
        color:#000;
        text-decoration:none;
        cursor:pointer;
        line-height:1.5;
        &:hover{
          background:@orange;
        }  
        
        .capital{
          display:block;
          font-size:0.8rem;
          margin-top:10px;
          font-style:italic;
        }
        
      }
      
    }
    
  }
  
}
</style>
