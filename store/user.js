export const state = () => ({
  user: null,
})

export const mutations = {
  setEditingUser(state, user) {
    state.user = user
  }
}