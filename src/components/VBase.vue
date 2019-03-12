<template>
  <div>
   <v-header></v-header>

   <v-search></v-search>

    <!--Content-->
    <div class="main-content">
    <div class="container mt-5">
      <div class="row">
        <v-left-filter></v-left-filter>

            <div class="col-12 col-md-7">
              <div class="card">
                
                <v-page-results></v-page-results>

                <!--Items-->
                <section>
                  
                  <v-item-featured :item="item"  v-for="item in featuredItems" :key="item.id"></v-item-featured>

                  <!--Only Text Item-->
                  <v-item :item="item"  v-for="item in items" :key="item.id"></v-item>


                </section>
              </div>
              <v-pagination></v-pagination>
            </div>
      </div>
    </div>
    </div>
    <v-help></v-help>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import VHeader from './VHeader.vue'
import VSearch from './VSearch.vue'
import VLeftFilter from './VLeftFilter.vue'
import VPageResults from './VPageResults.vue'
import VItemFeatured from './VItemFeatured.vue'
import VItem from './VItem.vue'
import VHelp from './VHelp.vue'
import VPagination from './VPagination.vue'
export default {
  components: { VHeader, VSearch, VLeftFilter, VPageResults, VItemFeatured, VItem, VHelp, VPagination },
  name: 'Base',
  mounted () {
    this.getFeaturedItems()
    this.getItems()
  },
  computed: {
    ...mapState({
    totalItems: 'totalItems',
    featuredItems: 'featuredItems',
    items: 'items'
    })
  },
  methods: {
    ...mapActions(['getFeaturedItems', 'getItems'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../assets/style.css'
</style>
