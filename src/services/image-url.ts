const getCroppedImageUrl = (url: string) => {
  if (!url) return ''
  const target = 'media/'
  const ind = url.indexOf(target) + target.length
  return `${url.slice(0, ind)}crop/600/400/${url.slice(ind)}`
}

export default getCroppedImageUrl
