import { CRTFilter } from 'pixi-filters'

export const noise = () => {
  const noiseFilter = new CRTFilter()

  noiseFilter.curvature = 5
  noiseFilter.lineWidth = 3
  noiseFilter.lineContrast = 0 // 0.4
  noiseFilter.noise = 0.3
  noiseFilter.noiseSize = 1
  noiseFilter.vignetting = 0.3
  noiseFilter.vignettingAlpha = 1
  noiseFilter.vignettingBlur = 0.3

  return noiseFilter
}
