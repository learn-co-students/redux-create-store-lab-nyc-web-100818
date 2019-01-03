export default function createStore(reducer) {

  let state

  const dispatch = (action) => {
    state = reducer(state, action)
    render()
  }

  dispatch('@@INIT')

  const getState = () => state

  return {
    getState,
    dispatch
  }
}

function render() {
  const container = document.getElementById('container');
}
