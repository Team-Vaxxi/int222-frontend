export const state = () => ({
  vaccine: null,
  imageURL: ''
})

export const mutations = {
  setEditingVaccine(state, vaccine) {
    state.vaccine = vaccine
  },
  setImageURL(state, imageURL) {
    state.imageURL = imageURL
  }
}