<template>
  <div>
    <Topbar/>
    <Map/>
    <Toolbar/>
  </div>
</template>

<script>
import Map from './../components/Map'
import Toolbar from './../components/Toolbar'
import Topbar from './../components/Topbar'

export default {
  components: {
    Map,
    Toolbar,
    Topbar
  }
}
</script>
