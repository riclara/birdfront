<template>
  <div class="row justify-content-around align-items-center">
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item" v-if="page > 1">
          <a type="button" class="page-link" @click="previousPage" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">Previous</span>
          </a>
        </li>
        <li v-for="num in [0,1,2,3,4,5,6,7,8,9]" :key="num" class="page-item" v-show="(num + page) <= pages"><a class="page-link" type="button" @click="setPage(num + page)" >{{num + page}}</a></li>
        <li class="page-item" v-if="page <= pages">
          <a type="button" class="page-link" @click="nextPage" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
  
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
  
export default {
  computed: {
    ...mapState(['page', 'totalItems']),
    ...mapGetters(['pages'])
  },
  watch: {
    page () {
      this.getItems()
    }
  },
  methods: {
    ...mapMutations(['nextPage', 'previousPage', 'setPage']),
    ...mapActions(['getItems']),
    getPos (pos) {
      return ((this.page - 1) * 10) + pos
    }
  }
}
</script>