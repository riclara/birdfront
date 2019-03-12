<template>
  <div class="main-search text-center">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="dropdowns-cont"> 
            Find CE for a 
            <div class="btn-group">
              <button type="button" class="btn btn-outline-light dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Florida
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Florida</a>
                <a class="dropdown-item" href="#">Alabama</a>
                <a class="dropdown-item" href="#">Georgia</a>
                <a class="dropdown-item" href="#">Luisiana</a>
              </div>
            </div>

            <div class="btn-group">
              <button type="button" class="btn btn-outline-light dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Medical Doctor
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Other Doctor</a>
                <a class="dropdown-item" href="#">Other Doctor</a>
                <a class="dropdown-item" href="#">Other Doctor</a>
                <a class="dropdown-item" href="#">Other Doctor</a>
              </div>
            </div>

            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="input-group w-75 m-auto p-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1"><i class="fas fa-search"></i></span>
              </div>
              <input type="text" v-model="criteria" @keyup.enter="search" class="form-control" placeholder="Search courses and providers" aria-label="search" aria-describedby="basic-addon1">
            </div>
          </div>
        </div>
        <div class="row">
            <div class="col">
        <ul class="nav nav-tabs justify-content-center coursestab">
              <li class="nav-item">
                <a class="nav-link active" href="#">Courses</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Providers</a>
              </li>
            </ul>
            </div>
        </div>  
      </div>
    </div>
</template>
<script>
import { mapMutations, mapActions } from 'vuex'

export default {
  data () {
    return {
      criteria: ''
    }
  },
  methods: {
    ...mapMutations(['setPage', 'setCourseName']),
    ...mapActions(['getItems']),
    search () {
      this.setCourseName(this.criteria)
      this.getItems()
      this.setPage(1)
    }
  }
}
</script>

