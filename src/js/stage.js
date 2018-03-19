let fps = 0;

const STAGE = {
  fpsDOM: document.querySelector('.fps'),
  refreshFPS: () => { fps++ },
  startCalcFPS: () => {
    STAGE.fpsDOM.innerText = `fps: 60`
    setInterval(() => {
      STAGE.fpsDOM.innerText = `fps: ${fps}`
      fps = 0;
    }, 1000)
  }
}

export default STAGE