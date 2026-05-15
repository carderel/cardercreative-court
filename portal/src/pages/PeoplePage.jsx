import { useState } from 'react'
import Layout from '@/components/Layout'
import MarkdownRenderer from '@/components/MarkdownRenderer'
import { getFile } from '@/lib/content'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

const people = [
  { id: 'melissa', label: 'Melissa Moose', role: 'Defendant / Mother' },
  { id: 'eli', label: 'Eli Carder', role: 'Plaintiff / Father' },
  { id: 'olivia', label: 'Olivia', role: 'Child Subject' },
  { id: 'gary', label: 'Gary Hale', role: "Melissa's Boyfriend" },
  { id: 'abby', label: 'Abby', role: "Eli's Partner" },
  { id: 'alice', label: 'Alice', role: "Eli & Abby's Daughter" },
]

export default function PeoplePage() {
  const [selected, setSelected] = useState(null)
  const content = selected ? getFile(`entities/${selected}.md`) : null
  const person = people.find(p => p.id === selected)

  const breadcrumbs = selected
    ? [{ label: 'People', path: '/people' }, { label: person.label }]
    : [{ label: 'People' }]

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <div className="flex items-center gap-3 mb-6">
        {selected && (
          <Button variant="ghost" size="sm" onClick={() => setSelected(null)} className="text-xs">
            ← Back
          </Button>
        )}
        <h1 className="text-xl font-semibold text-foreground">
          {person ? person.label : 'People'}
        </h1>
        {person && <span className="text-xs text-muted-foreground">{person.role}</span>}
      </div>

      {!selected ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {people.map((p) => (
            <Card
              key={p.id}
              className="cursor-pointer hover:shadow-md transition-shadow hover:border-foreground/20"
              onClick={() => setSelected(p.id)}
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-sm">{p.label}</CardTitle>
                <p className="text-xs text-muted-foreground">{p.role}</p>
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
