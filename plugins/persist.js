import VuexPersistence from 'vuex-persist'

export default ({ store }) => {
  new VuexPersistence({
    key: 'WS',
    reducer: state => ({
      email: state.email
    })
  }).plugin(store)
}
