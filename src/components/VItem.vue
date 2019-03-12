<template>
  <div class="item-container">
    <div class="row">
      
      <div class="col-10">
        <h2>{{ item.course.name }}</h2>
      
        <p class="description">{{ item.course.provider.name }}</p>
        <div class="details">
          <i class="far fa-clock"></i> {{ item.totalHours }} Hours
          <span>
            <i v-if="item.course.deliveryMethod.code === 'HOMESTUDY'" class="fas fa-home"></i>
            <i v-else class="fas fa-laptop"></i> {{ item.course.deliveryMethod.description }}
          </span>
             
        </div>
      </div>
      <div class="col-2 d-flex flex-column">
        <div class="price">{{ price }}</div>
        <div class="share"><i class="fas fa-share-square"></i></div>
      </div>
    </div>
  </div>
</template>
<script>
import numeral from 'numeral'

export default {
  props: {item: Object},
  data () {
    return {

    }
  },
  computed: {
    price () {
      if (this.item.price === null || this.item.price === undefined) return 'Price not reported'
      if (this.item.price == 0) return 'Free'
      return numeral(this.item.price).format('$0,0.00')
    }
  }
}
</script>

