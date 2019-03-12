import Vue from 'vue'
import Vuex from 'vuex'
import trae from 'trae'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    page: 1,
    totalItems: 0,
    featuredItems: [],
    items: [],
    courseName: ''
  },
  getters: {
    pages (state) {
      return Math.trunc(state.totalItems / 10)
    }
  },
  mutations: {
    setFeaturedItems(state, featuredItems) {
      state.featuredItems = featuredItems
    },
    setItems(state, data) {
      state.items = data.items
      state.totalItems = data.totalItems
    },
    setPage (state, page) {
      state.page = page
    },
    setCourseName (state, courseName) {
      state.courseName = courseName
    },
    nextPage (state) {
      state.page++
    },
    previousPage (state) {
      state.page--
    }
  },
  actions: {
    getFeaturedItems (context, professionId = 36) {
      trae.get('https://api.cebroker.com/v2/featuredCoursesProfession', { params: { profession: professionId } })
        .then((response) => {
          context.commit('setFeaturedItems', response.data)
        })
    },
    getItems (context, {
      expand = 'totalItems',
      pageSize = 10,
      sortField = 'RELEVANCE',
      professionId = 36,
      courseType = 'CD_ANYTIME',
      sortShufflingSeed = 27
    } = {}) {
      trae.get('https://api.cebroker.com/v2/search/courses', 
        { params: 
          { expand, 
            pageIndex: context.state.page,
            pageSize,
            sortField,
            professionId,
            courseType,
            sortShufflingSeed,
            courseName: context.state.courseName } 
        })
        .then((response) => {
          context.commit('setItems', response.data)
        })
    }
  }
})

export default store