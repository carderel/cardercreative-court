// All markdown files are imported at build time via Vite glob
const allFiles = import.meta.glob('../../wiki/**/*.md', { query: '?raw', import: 'default', eager: true })

function normalize(path) {
  return path.replace(/^\.\.\/\.\.\/wiki\//, '')
}

export function getFile(relativePath) {
  const key = `../../wiki/${relativePath}`
  return allFiles[key] ?? null
}

export function getFilesInDir(dir) {
  const prefix = `../../wiki/${dir}/`
  return Object.entries(allFiles)
    .filter(([k]) => k.startsWith(prefix) && !k.slice(prefix.length).includes('/'))
    .map(([k, v]) => ({ path: normalize(k), content: v }))
}

export function getAllFilesInDir(dir) {
  const prefix = `../../wiki/${dir}/`
  return Object.entries(allFiles)
    .filter(([k]) => k.startsWith(prefix))
    .map(([k, v]) => ({ path: normalize(k), content: v }))
}

export function getSlug(path) {
  return path.replace(/\.md$/, '').split('/').pop()
}

function wikiPathToRoute(rawPath) {
  // Strip leading relative segments (../../, ../, etc)
  const cleaned = rawPath.trim().replace(/^(\.\.\/)+/, '').replace(/\/$/, '')
  const top = cleaned.split('/')[0]
  switch (top) {
    case 'entities':   return '/people'
    case 'patterns':   return '/patterns'
    case 'arcs':       return '/arcs'
    case 'events':     return '/events'
    case 'analysis':   return '/summary'
    case 'timeline':   return '/timeline'
    case 'docs':       return '/files'
    case 'incidents':  return '/patterns'
    default:
      // bare RF-xx segment (relative incident link like ../RF-04/...)
      if (/^RF-\d+/.test(top)) return '/patterns'
      return '/'
  }
}

function wikiPathToLabel(rawPath) {
  const cleaned = rawPath.trim().replace(/^(\.\.\/)+/, '').replace(/\.md$/, '')
  return cleaned.split('/').pop().replace(/-/g, ' ')
}

export function preprocessWikiLinks(markdown) {
  return markdown.replace(/\[\[([^\]|]+?)(?:\|([^\]]+?))?\]\]/g, (_, path, display) => {
    const route = wikiPathToRoute(path)
    const label = display?.trim() || wikiPathToLabel(path)
    return `[${label}](${route})`
  })
}
