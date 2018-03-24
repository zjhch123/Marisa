import Marisa from '@js/model/Marisa'
import Keys from '@js/keys'
import keykeyjs from 'keykeyjs'

const reducer = (action) => {
  Marisa.dispatch(Keys[action.type])
}

const StartListener = () => {
  keykeyjs.launch({
    targetDOM: document,
    reducers: [reducer],
    preventDefaultKeys: ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight']
  })
}

const Listen = {
  StartListener
}

export default Listen