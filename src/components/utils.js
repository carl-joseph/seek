export const getAspectRatioClass = (aspectRatio, defaultClass = "ratio-4-5") => {
  if (aspectRatio === "landscape") return "ratio-4-3"
  if (aspectRatio === "portrait") return "ratio-4-5"
  if (aspectRatio === "square") return "ratio-1-1"
  return defaultClass
}
