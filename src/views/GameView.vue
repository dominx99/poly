<template>
  <div>
    <Topbar/>
    <Map/>
    <ArmyModal/>
    <BuildingModal/>
    <Toolbar/>
  </div>
</template>

<script>
import Map from './../components/Map'
import ArmyModal from './../components/Army/SelectArmyModal'
import BuildingModal from './../components/Building/SelectBuildingModal'
import Toolbar from './../components/Toolbar'
import Topbar from './../components/Topbar'

export default {
  components: {
    Map,
    Toolbar,
    ArmyModal,
    BuildingModal,
    Topbar
  }
}
</script>
