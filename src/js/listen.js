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
    preventDefaultKeys: function() {
      if (document.activeElement.tagName.toLowerCase() === 'body') {
        return ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight']
      } else {
        return []
      }
    }
  })
}

const Listen = {
  StartListener
}

export default Listen