import { useState } from 'react'
import Layout from '@/components/Layout'
import MarkdownRenderer from '@/components/MarkdownRenderer'
import { getFile } from '@/lib/content'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

const patterns = [
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

export default function PatternsPage() {
  const [selected, setSelected] = useState(null)
  const content = selected ? getFile(`patterns/${selected}.md`) : null

  return (
    <Layout>
      <div className="flex items-center gap-3 mb-6">
        {selected && (
          <Button variant="ghost" size="sm" onClick={() => setSelected(null)} className="text-xs">
            ← Back
          </Button>
        )}
        <h1 className="text-xl font-semibold text-foreground">
          {selected ? patterns.find(p => p.id === selected)?.label : 'Behavioral Patterns'}
        </h1>
        {selected && <Badge variant="secondary">{selected}</Badge>}
      </div>

      {!selected ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {patterns.map((p) => (
            <Card
              key={p.id}
              className="cursor-pointer hover:shadow-md transition-shadow hover:border-foreground/20"
              onClick={() => setSelected(p.id)}
            >
              <CardHeader className="pb-4">
                <Badge variant="outline" className="w-fit text-xs mb-2">{p.id}</Badge>
                <CardTitle className="text-sm">{p.label}</CardTitle>
              </CardHeader>
            </Card>
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
