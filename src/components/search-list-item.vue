<template lang="html">
  <a class="searchItem" href="#">
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
  }
}
</script>
