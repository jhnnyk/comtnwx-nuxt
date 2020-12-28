import { db } from '../firebase'

export const state = () => ({
  all: [],
  currentMtn: null,
  forecast: [],
  forecastLoading: false,
})

export const getters = {
  mtnsByRange: (state) => {
    const ranges = []

    state.all.forEach((mtn) => {
      const index = ranges.findIndex((r) => r.name === mtn.range)

      if (index === -1) {
        ranges.push({ name: mtn.range, mtns: [mtn] })
      } else {
        ranges[index].mtns.push(mtn)
      }
    })

    return ranges
  },
}

export const mutations = {
  setMtns: (state, mtnList) => {
    state.all = mtnList
  },
  setCurrentMtn: (state, mtn) => {
    state.currentMtn = mtn
  },
  setForecast: (state, forecast) => {
    state.forecast = forecast
  },
  setForecastLoading: (state, val) => {
    state.forecastLoading = val
  },
}

export const actions = {
  getMtns: async ({ commit }) => {
    const mtnList = []
    const snapshot = await db.collection('spots').orderBy('el', 'desc').get()

    if (snapshot.empty) {
      console.log('No matching documents')
      return
    }

    snapshot.forEach((mtn) => {
      mtnList.push(mtn.data())
    })

    commit('setMtns', mtnList)
  },

  getCurrentMtn: async ({ dispatch, commit, state }, slug) => {
    const currentMtn = await state.all.find((m) => m.slug === slug)
    commit('setCurrentMtn', currentMtn)

    if (currentMtn) {
      commit('setForecastLoading', true)
      dispatch('getForecastURL', currentMtn)
      dispatch('getForecast', currentMtn)
    }
  },

  async getForecastURL(context, mtn) {
    const response = await this.$axios.$get(
      `https://api.weather.gov/points/${mtn.loc.latitude},${mtn.loc.longitude}`
    )
    const forecastURL = await response.properties.forecast

    // update DB with forecast URL if needed
    // ----------------------------------
    // if the DB does need updated with a new forecastURL,
    // the below will run and generate an error
    // because of firebase permissions
    // I'm leaving it like this because per the API docs at:
    // https://weather-gov.github.io/api/general-faqs
    // it should rarely need updating.
    if (forecastURL !== mtn.forecastURL) {
      const spotRef = db.collection('spots').doc(mtn.id)
      try {
        await spotRef.update({
          forecastURL,
        })
      } catch (error) {
        console.log(error)
      }
    }
  },

  async getForecast({ commit }, mtn) {
    const response = await this.$axios.$get(mtn.forecastURL)
    const forecast = await response.properties.periods
    commit('setForecast', forecast)
    commit('setForecastLoading', false)
  },
}
