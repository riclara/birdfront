<template>
  <div class="col-12 col-md-3 offset-md-1">
    <div class="card">
      <section>
        <div class="title"><i class="fas fa-align-center"></i> FIlTER COURSE RESULTS</div>
      </section>

      <section v-for="(box, index) in boxes" :key="box.title">
        <div class="accordion" :id="'accordionExample' + index">
            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              {{ box.title }} <i class="fas fa-angle-up"></i>
            </button>

        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" :data-parent="'#accordionExample' + index">
            <div class="form-check" v-for="option in box.options" :key="option">
              <input class="form-check-input" type="radio" :name="box.title" :id="option" :value="option.value">
              <label class="form-check-label" for="option">
                {{ option }}
              </label>
            </div>
          </div>
        </div>
        <div v-if="box.options.length > 3" class="viewmore"><a href="#">View more</a></div>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      boxes: [
        {
          title: 'Course type',
          options: ['Self placed', 'live'],
          value: ''
        },
        {
          title: 'Delivery type',
          options: ['Any delivery type', 'Computer-Based Training', 'Correspondence', 'Mailed Material'],
          value: ''
        },
        {
          title: 'Subject area',
          options: ['Any subject area', 'HIV/AIDS', 'End-of-life Care and Palliative Health Care', 'Domestic Violence'],
          value: ''
        }
      ]
    }
  }
}
</script>

