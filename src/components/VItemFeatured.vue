<template>
  <div class="item-container">
    <div class="row">
      <div class="col-4">
        <img :src="image" alt="" width="100%">
      </div>
      <div class="col-6">
        <h2>{{item.coursePublication.course.name}}</h2>
        <span class="tag">FEATURED</span>
        <p class="description">{{ item.coursePublication.course.provider.name }}</p>
        <div class="details">
          <i class="far fa-clock"></i> {{ item.coursePublication.hoursBySubjectArea }} Hours 
          <span v-if="item.coursePublication.course.provider.isInHouse">
            <i class="fas fa-home"></i> Home Study
          </span>
          <span v-else>
            <i class="fas fa-laptop"></i> Computer-Based Training
          </span>
        </div>
      </div>
      <div class="col-2 d-flex flex-column">
        <div v-if="price" class="price">{{ price }}</div>
        <div v-else class="notprice">Not reported</div>
        <div class="share"><i class="fas fa-share-square"></i></div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import numeral from 'numeral'

export default {
  props: {item: Object},
  data () {
    return {
      ...mapState(['featuredItems'])
    }
  },
  computed: {
    image () {
      return 'https://storage.cebroker.com/CEBroker/' + this.item.coursePublication.course.featuredBanner
    },
    price () {
      return this.item.coursePublication.price !== null ? numeral(this.item.coursePublication.price).format('$0,0.00') : null
    }
  }
}
</script>

