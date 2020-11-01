const state = { nm: '北京', id: 3 }; const actions = { }; const mutations = {
CITY_INFO(state, payload) { state.nm = payload.nm; state.id = payload.id; } };
export default { namespace: true, state, actions, mutations }
