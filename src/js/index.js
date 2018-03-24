import '@css/style.scss'
import Marisa from '@js/model/Marisa'
import Stage from '@js/stage'
import Listen from '@js/listen'


Listen.StartListener()
Marisa.init()
const Launch = () => {
  function step() {
    Marisa.render() // 渲染
    window.requestAnimationFrame(step)
  }
  window.requestAnimationFrame(step)
}

export default Launch