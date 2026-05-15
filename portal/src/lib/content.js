// All markdown files are imported at build time via Vite glob
const allFiles = import.meta.glob('../wiki/**/*.md', { query: '?raw', import: 'default', eager: true })

function normalize(path) {
  return path.replace(/^\.\.\/wiki\//, '')
}

export function getFile(relativePath) {
  const key = `../wiki/${relativePath}`
  return allFiles[key] ?? null
}

export function getFilesInDir(dir) {
  const prefix = `../wiki/${dir}/`
  return Object.entries(allFiles)
    .filter(([k]) => k.startsWith(prefix) && !k.slice(prefix.length).includes('/'))
    .map(([k, v]) => ({ path: normalize(k), content: v }))
}

export function getAllFilesInDir(dir) {
  const prefix = `../wiki/${dir}/`
  return Object.entries(allFiles)
    .filter(([k]) => k.startsWith(prefix))
    .map(([k, v]) => ({ path: normalize(k), content: v }))
}

export function getSlug(path) {
  return path.replace(/\.md$/, '').split('/').pop()
}
