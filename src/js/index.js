import '@css/style.scss'
import Marisa from '@js/model/Marisa'
import Stage from '@js/stage'
import Listen from '@js/listen'


Listen.StartListener()
Marisa.init()
const Launch = () => {
  // Stage.startCalcFPS()
  function step() {
    Stage.refreshFPS()
    Listen.StartKeyMapping() // 根据按键设置Status
    Marisa.Listen_Directions() // 根据当前Status设置位置、class
    Marisa.render() // 渲染
    window.requestAnimationFrame(step)
  }
  window.requestAnimationFrame(step)
}

var delta = 500
var lastKeypressTime = 0


export default Launch