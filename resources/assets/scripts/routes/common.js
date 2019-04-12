import Canvas from '../components/canvas'

export default {
  init() {
    // JavaScript to be fired on all pages
    const pixiScene = new Canvas()
    pixiScene.init()
  },
  finalize() {
    // JavaScript to be fired on all pages, after page specific JS is fired
  },
};
