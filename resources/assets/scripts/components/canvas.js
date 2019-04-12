import * as PIXI from 'pixi.js'

class Canvas {
  constructor() {

  }

  init() {
    const windowSize = {
      width: window.innerWidth,
      height: window.innerHeight,
    }

    const app = new PIXI.Application({
      width: windowSize.width,
      height: windowSize.height,
      transparent: true,
    })


    const rect = new PIXI.Graphics()
      .beginFill(0x00ff00)
      .drawRect(0, 0, windowSize.width, windowSize.height)

    rect.filters = [new PIXI.filters.NoiseFilter()]

    app.stage.addChild(rect)
    document.body.appendChild(app.view)
  }
}

export default Canvas
