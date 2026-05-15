import { useState } from 'react'
import Layout from '@/components/Layout'
import MarkdownRenderer from '@/components/MarkdownRenderer'
import { getFilesInDir, getFile, getSlug } from '@/lib/content'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

const categories = [
  { id: 'RF-01', label: 'Parental Alienation' },
  { id: 'RF-02', label: 'Gatekeeping / Access Denial' },
  { id: 'RF-03', label: 'Weaponized Logistics' },
  { id: 'RF-04', label: 'Emotional Manipulation (DARVO)' },
  { id: 'RF-05', label: 'Intimidation / Legal Threats' },
  { id: 'RF-06', label: 'Financial Coercion' },
  { id: 'RF-07', label: 'Boundary Violations' },
  { id: 'RF-08', label: 'Triangulation / Child Coaching' },
  { id: 'RF-09', label: 'Gaslighting' },
  { id: 'RF-10', label: 'Refusal to Co-Parent' },
  { id: 'RF-11', label: 'Inappropriate Child Involvement' },
  { id: 'RF-12', label: 'Strategic Communication' },
  { id: 'RF-13', label: 'Escalation Patterns' },
  { id: 'RF-14', label: 'Substance / Safety' },
  { id: 'RF-15', label: 'False Allegations / Projection' },
]

function parseIncidentSlug(slug) {
  // e.g. 2022-08-29_RF01-B001-S001
  const match = slug.match(/^(\d{4}-\d{2}-\d{2})_(.+)$/)
  if (match) return { date: match[1], signal: match[2] }
  return { date: '', signal: slug }
}

function parseSeverity(content) {
  const m = content?.match(/\*\*Severity:\*\*\s*(Sev-\d)/i)
  return m ? m[1] : null
}

function parseSummary(content) {
  const m = content?.match(/## Summary\s*\n+([\s\S]+?)(?:\n---|\n##|$)/)
  if (!m) return ''
  return m[1].trim().slice(0, 160) + (m[1].trim().length > 160 ? '…' : '')
}

const severityColor = {
  'Sev-1': 'bg-yellow-100 text-yellow-800 border-yellow-200',
  'Sev-2': 'bg-orange-100 text-orange-800 border-orange-200',
  'Sev-3': 'bg-red-100 text-red-800 border-red-200',
}

export default function IncidentsPage() {
  const [rf, setRf] = useState(null)
  const [incident, setIncident] = useState(null)

  const category = categories.find(c => c.id === rf)
  const incidentFiles = rf ? getFilesInDir(`incidents/${rf}`).sort((a, b) => a.path.localeCompare(b.path)) : []
  const incidentContent = incident ? getFile(`incidents/${rf}/${incident}.md`) : null

  const breadcrumbs = incident
    ? [{ label: 'Incidents', path: '/incidents' }, { label: `${rf} — ${category?.label}`, path: undefined, onClick: () => { setIncident(null) } }, { label: incident }]
    : rf
    ? [{ label: 'Incidents', path: '/incidents' }, { label: `${rf} — ${category?.label}` }]
    : [{ label: 'Incidents' }]

  function handleBackToCategories() { setRf(null); setIncident(null) }
  function handleBackToList() { setIncident(null) }

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <div className="flex items-center gap-3 mb-6">
        {incident && (
          <Button variant="ghost" size="sm" onClick={handleBackToList} className="text-xs">← Back</Button>
        )}
        {rf && !incident && (
          <Button variant="ghost" size="sm" onClick={handleBackToCategories} className="text-xs">← Back</Button>
        )}
        <h1 className="text-xl font-semibold text-foreground">
          {incident ? incident : rf ? `${rf} — ${category?.label}` : 'Incidents'}
        </h1>
        {rf && !incident && (
          <Badge variant="secondary" className="text-xs">{incidentFiles.length} incidents</Badge>
        )}
      </div>

      {/* Level 1 — RF category grid */}
      {!rf && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {categories.map((cat) => {
            const files = getFilesInDir(`incidents/${cat.id}`)
            return (
              <Card
                key={cat.id}
                className="cursor-pointer hover:shadow-md transition-shadow hover:border-foreground/20"
                onClick={() => setRf(cat.id)}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-1">
                    <Badge variant="outline" className="text-xs">{cat.id}</Badge>
                    <span className="text-xs text-muted-foreground">{files.length} signals</span>
                  </div>
                  <CardTitle className="text-sm">{cat.label}</CardTitle>
                </CardHeader>
              </Card>
            )
          })}
        </div>
      )}

      {/* Level 2 — Incident list */}
      {rf && !incident && (
        <>
          <Separator className="mb-6" />
          <div className="flex flex-col gap-2">
            {incidentFiles.map((f) => {
              const slug = getSlug(f.path)
              const { date, signal } = parseIncidentSlug(slug)
              const severity = parseSeverity(f.content)
              const summary = parseSummary(f.content)
              return (
                <div
                  key={f.path}
                  className="flex flex-col gap-1 p-3 rounded-md border border-border hover:bg-muted/50 cursor-pointer transition-colors"
                  onClick={() => setIncident(slug)}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-medium text-foreground">{signal}</span>
                    <span className="text-xs text-muted-foreground">{date}</span>
                    {severity && (
                      <span className={`text-xs px-1.5 py-0.5 rounded border font-medium ${severityColor[severity] ?? ''}`}>
                        {severity}
                      </span>
                    )}
                  </div>
                  {summary && (
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{summary}</p>
                  )}
                </div>
              )
            })}
          </div>
        </>
      )}

      {/* Level 3 — Incident detail */}
      {incident && (
        <>
          <Separator className="mb-6" />
          <MarkdownRenderer content={incidentContent} />
        </>
      )}
    </Layout>
  )
}
