<template lang="html">
  <div id="searchList">
    <form id="search">
      <input type="text" placeholder="Search for country..." v-model="searchTerm">
    </form>
    <ul id="mapList" class="half">
      <li v-for="location in searchResults" :key="location.name">
          <search-list-item :location="location" />
      </li>
      <li v-if="searchResults.length == 0">
        <span class="searchItem">
          No countries match your search results
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import searchListItem from '@/components/search-list-item'
export default {
  name: 'search-list',
  components: {searchListItem},
  computed: {
    locations: function(){
      return this.$store.state.locations;
    },
    searchTerm: {
      get: function(){
        return this.$store.state.searchTerm;
      },
      set: function(value){
         this.$store.state.searchTerm = value;
      }
    },
    searchResults: function(){
      // Filter locations for search results
      var self = this;
      return this.locations.filter(function(item){
          return item.name.toLowerCase().indexOf(self.searchTerm.toLowerCase()) > - 1;
      })
      
    }
  }
}
</script>

<style lang="less">

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
