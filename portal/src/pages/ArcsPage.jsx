import { useState } from 'react'
import Layout from '@/components/Layout'
import MarkdownRenderer from '@/components/MarkdownRenderer'
import { getFilesInDir, getFile, getSlug, RF_NAMES } from '@/lib/content'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

function normalizeRf(raw) {
  return raw.replace(/^RF(\d+)$/, (_, n) => `RF-${n.padStart(2, '0')}`)
}

function parseArcLabel(path) {
  const slug = getSlug(path)
  const match = slug.match(/^ARC-(RF\d+)-(\d+)(-CANDIDATE)?$/)
  if (!match) return { rf: '?', rfKey: '?', num: slug, candidate: false }
  const rfKey = normalizeRf(match[1])
  return { rf: match[1], rfKey, num: match[2], candidate: !!match[3] }
}

export default function ArcsPage() {
  const [selected, setSelected] = useState(null)
  const arcs = getFilesInDir('arcs').sort((a, b) => a.path.localeCompare(b.path))
  const content = selected ? getFile(`arcs/${selected}.md`) : null

  const grouped = arcs.reduce((acc, arc) => {
    const { rfKey } = parseArcLabel(arc.path)
    if (!acc[rfKey]) acc[rfKey] = []
    acc[rfKey].push(arc)
    return acc
  }, {})

  const breadcrumbs = selected
    ? [{ label: 'Pattern Arcs', path: '/arcs' }, { label: selected }]
    : [{ label: 'Pattern Arcs' }]

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <div className="flex items-center gap-3 mb-6">
        {selected && (
          <Button variant="ghost" size="sm" onClick={() => setSelected(null)} className="text-xs">
            ← Back
          </Button>
        )}
        <h1 className="text-xl font-semibold text-foreground">
          {selected || 'Pattern Arcs'}
        </h1>
      </div>

      {!selected ? (
        <div className="flex flex-col gap-6">
          {Object.entries(grouped).map(([rf, items]) => (
            <div key={rf}>
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="outline" className="text-xs">{rf}</Badge>
                {RF_NAMES[rf] && (
                  <span className="text-sm text-muted-foreground">{RF_NAMES[rf]}</span>
                )}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {items.map((arc) => {
                  const slug = getSlug(arc.path)
                  const { num, candidate, rfKey } = parseArcLabel(arc.path)
                  return (
                    <Card
                      key={arc.path}
                      className="cursor-pointer hover:shadow-md transition-shadow hover:border-foreground/20"
                      onClick={() => setSelected(slug)}
                    >
                      <CardHeader className="pb-4">
                        <div className="flex items-center gap-2">
                          <CardTitle className="text-sm">{slug}</CardTitle>
                          {candidate && <Badge variant="secondary" className="text-xs">Candidate</Badge>}
                        </div>
                        {RF_NAMES[rfKey] && (
                          <CardDescription className="text-xs">{RF_NAMES[rfKey]}</CardDescription>
                        )}
                      </CardHeader>
                    </Card>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          <Separator className="mb-6" />
          <MarkdownRenderer content={content} />
        </>
      )}
    </Layout>
  )
}
