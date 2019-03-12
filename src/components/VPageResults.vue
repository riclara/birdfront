<template>
  <section>
    <div class="row justify-content-around align-items-center">
      <div class="col"><div class="paginator"><b>Page {{ page }}</b> of <b>{{ totalItems }} results</b></div></div>
      <div class="col">
        <div class="sorted text-right">
          Sorted by:
          <div class="btn-group">
<button type="button" class="btn btn-outline-dark dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  Relevance
</button>
<div class="dropdown-menu">
  <a class="dropdown-item" href="#">Up</a>
  <a class="dropdown-item" href="#">Down</a>
</div>
</div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['page', 'totalItems'])
  }
}
</script>

