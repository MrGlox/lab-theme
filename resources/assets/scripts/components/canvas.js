import * as PIXI from 'pixi.js'
import { noise } from './noise'

class Canvas {
  constructor() {
    this.app = {}
    this.graphics = []

    this.windowSize = {
      width: window.innerWidth,
      height: window.innerHeight,
    }

    this.onResize = this.onResize.bind(this)
  }

  init() {
    this.app = new PIXI.Application({
      width: this.windowSize.width,
      height: this.windowSize.height,
      transparent: true,
    })

    const noiseFilter = noise()
    const rect = new PIXI.Graphics()
      .beginFill(0x060826) // 0xfff
      .drawRect(0, 0, this.windowSize.width * 2, this.windowSize.height * 2)

    rect.filters = [noiseFilter]
    rect.alpha = 0.1

    this.graphics.push(rect)

    this.app.stage.addChild(rect)

    // Listen for animate update
    this.app.ticker.add(() => {
      noiseFilter.seed += 0.01
      noiseFilter.time += 0.01
    })

    document.body.appendChild(this.app.view)
    window.addEventListener('resize', this.onResize)
  }

  onResize() {
    this.windowSize = {
      width: window.innerWidth,
      height: window.innerHeight,
    }

    this.graphics.map(graphic => {
      graphic.width = this.windowSize.width
      graphic.height = this.windowSize.height
    })

    this.app.renderer.resize(this.windowSize.width, this.windowSize.height)
  }
}

export default Canvas
