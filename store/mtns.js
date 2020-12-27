import { db } from '../firebase'

export const state = () => ({
  all: [],
})

export const getters = {}

export const mutations = {
  setMtns: (state, mtnList) => {
    state.all = mtnList
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
}
