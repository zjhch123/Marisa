import Marisa from '@js/model/Marisa'
import Keys from '@js/keys'

const KeyMap = Object.keys(Keys).reduce((obj, key) => {
  if (key.slice(-1) == '+' || key.slice(-1) == '-') {
    obj[key.slice(0, -1) + '+'] = false
    obj[key.slice(0, -1) + '-'] = true
    obj[key.slice(0, -1)] = false
  } else {
    obj[key] = false
  }
  return obj
}, {})


const StartKeyMapping = () => {
  const pressedKeys = []
  for (let key in KeyMap) {
    if (KeyMap[key]) {
      pressedKeys.push(key)
    }
  }
  Marisa.status = pressedKeys.map(key => Keys[key])
}

const preventDefaultIfNeed = (event) => {
  if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].indexOf(event.key) != -1) {
    event.preventDefault()
  }
}

const shouldListenPress = (key) => key + '+' in KeyMap || key + '-' in KeyMap

const StartListener = () => {
  document.addEventListener('keydown', (event) => {
    preventDefaultIfNeed(event)
    if (event.key in KeyMap) {
      KeyMap[event.key] = true
    }
    if (shouldListenPress(event.key)) {
      KeyMap[event.key + '+'] = true
      KeyMap[event.key + '-'] = false
    }
  })
  document.addEventListener('keyup', (event) => {
    preventDefaultIfNeed(event)
    if (event.key in KeyMap) {
      KeyMap[event.key] = false
    }
    if (shouldListenPress(event.key)) {
      KeyMap[event.key + '+'] = false
      KeyMap[event.key + '-'] = true
    }
  })
}

const Listen = {
  StartListener,
  StartKeyMapping
}

export default Listen