import STATUS from '@js/status'

const Marisa = {
  init: () => {
    const dom = `
      <i class="pre_load back"></i>
      <i class="pre_load move"></i>
      <i class="pre_load smile"></i>
      <i class="pre_load speedUp"></i>
      <!-- <p class="fps"></p> -->
      <i class="marisa stand"></i>
    `
    document.body.innerHTML += dom
    Marisa.dom = document.querySelector('.marisa')
  },
  dom: null,
  left: 0,
  top: 0,
  rotateY: 180,
  status: [STATUS.STAND],
  speedX: 6,
  speedY: 4,
  classPrefix: 'marisa',
  classList: 'stand',
  dispatch: (type) => {
    switch (type) {
      case STATUS.NOTHING: 
        Marisa.nothing()
        break
      case STATUS.STAND:
        Marisa.stand()
        break
      case STATUS.SMILE:
        Marisa.smile()
        break
      case STATUS.BACK:
        Marisa.moveLeft()
        break
      case STATUS.MOVE:
        Marisa.moveRight()
        break
      case STATUS.UP:
        Marisa.moveUp()
        break
      case STATUS.DOWN:
        Marisa.moveDown()
        break
      case STATUS.SPEEDUP:
        Marisa.speedUp()
        break
      case STATUS.SPEEDNORMAL:
        Marisa.speedNormal()
        break
      case STATUS.SPEEDUPUP:
        Marisa.speedUpUp()
        break
      case STATUS.SPEEDUPNORMAL:
        Marisa.speedUpNormal()
        break
    }
  },
  resetStatus: () => { Marisa.status = STATUS.STAND },
  nothing: () => {},
  speedUp: () => {
    if (Marisa.classList == 'move') {
      Marisa.classList = 'speedUp'
      Marisa.speedX = 13
    }
  },
  speedUpNormal: () => {
    if (Marisa.classList == 'speedUpUp') {
      Marisa.classList = 'speedUp'
      Marisa.speedX = 13
    }
  },
  speedUpUp: () => {
    if (Marisa.classList == 'speedUp') {
      Marisa.classList = 'speedUpUp'
      Marisa.speedX = 25
    }
  },
  speedNormal: () => {
    Marisa.speedX = 6
    Marisa.speedY = 4
    if (Marisa.classList == 'speedUp' || Marisa.classList == 'speedUpUp') {
      Marisa.classList = 'move'
    }
  },
  stand: () => {
    Marisa.speedX = 6
    Marisa.speedY = 4
    Marisa.classList = 'stand'
  },
  moveUp: () => {
    Marisa.top = Marisa.top - Marisa.speedY
  },
  moveLeft: () => {
    Marisa.left = Marisa.left - Marisa.speedX
    if (Marisa.classList !== 'speedUp' && Marisa.classList !== 'speedUpUp') {
      Marisa.classList = 'move'
    }
    Marisa.rotateY = 180
  },
  moveRight: () => {
    Marisa.left = Marisa.left + Marisa.speedX
    if (Marisa.classList !== 'speedUp' && Marisa.classList !== 'speedUpUp') {
      Marisa.classList = 'move'
    }
    Marisa.rotateY = 0
  },
  moveDown: () => {
    Marisa.top = Marisa.top + Marisa.speedY
  },
  smile: () => {
    if (Marisa.classList !== 'move' && Marisa.classList !== 'speedUp' && Marisa.classList !== 'speedUpUp') {
      Marisa.classList = 'smile'
    }
  },
  render: () => {
    if (!!Marisa.dom) {
      Marisa.dom.style.transform = `translate(${Marisa.left}px,${Marisa.top}px) rotateY(${Marisa.rotateY}deg)`
      Marisa.dom.className = `${Marisa.classPrefix} ${Marisa.classList}`
    }
  }
}

export default Marisa