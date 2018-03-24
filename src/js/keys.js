import STATUS from '@js/status'

export default {
  's +': STATUS.SMILE,
  's -': STATUS.STAND,
  'ArrowUp +': STATUS.UP,
  'ArrowDown +': STATUS.DOWN,
  'ArrowLeft +': STATUS.BACK,
  'ArrowRight +': STATUS.MOVE,
  'ArrowUp -': STATUS.NOTHING,
  'ArrowDown -': STATUS.NOTHING,
  'ArrowLeft -': STATUS.STAND,
  'ArrowRight -': STATUS.STAND,
  'a +': STATUS.SPEEDUP,
  'a -': STATUS.SPEEDNORMAL,
  'z +': STATUS.SPEEDUPUP,
  'z -': STATUS.SPEEDUPNORMAL,
}