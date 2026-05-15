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

export const RF_NAMES = {
  'RF-01': 'Parental Alienation',
  'RF-02': 'Gatekeeping / Access Denial',
  'RF-03': 'Weaponized Logistics',
  'RF-04': 'Emotional Manipulation (DARVO)',
  'RF-05': 'Intimidation / Legal Threats',
  'RF-06': 'Financial Coercion',
  'RF-07': 'Boundary Violations',
  'RF-08': 'Triangulation / Child Coaching',
  'RF-09': 'Gaslighting',
  'RF-10': 'Refusal to Co-Parent',
  'RF-11': 'Inappropriate Child Involvement',
  'RF-12': 'Strategic Communication',
  'RF-13': 'Escalation Patterns',
  'RF-14': 'Substance / Safety',
  'RF-15': 'False Allegations / Projection',
}

function wikiPathToRoute(rawPath) {
  // Strip leading relative segments (../../, ../, etc)
  const cleaned = rawPath.trim().replace(/^(\.\.\/)+/, '').replace(/\/$/, '')
  const top = cleaned.split('/')[0]
  switch (top) {
    case 'entities':        return '/people'
    case 'patterns':        return '/patterns'
    case 'arcs':            return '/arcs'
    case 'events':          return '/events'
    case 'analysis':        return '/summary'
    case 'timeline':        return '/timeline'
    case 'docs':            return '/files'
    case 'spp-violations':  return '/files'
    case 'incidents':       return '/incidents'
    default:
      if (/^RF-\d+/.test(top)) return '/incidents'
      // SPP section pages referenced relatively (e.g. from inside spp-violations/)
      if (/^section-/.test(top)) return '/files'
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
    let label = display?.trim() || wikiPathToLabel(path)
    if (/^RF-\d+$/.test(label) && RF_NAMES[label]) {
      label = `${label} — ${RF_NAMES[label]}`
    }
    return `[${label}](${route})`
  })
}
