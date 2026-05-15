import { useState } from 'react'
import Layout from '@/components/Layout'
import MarkdownRenderer from '@/components/MarkdownRenderer'
import { getFile } from '@/lib/content'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

const categories = [
  {
    id: 'legal',
    label: 'Legal Documents',
    description: 'Court filings, shared parenting plan, dissolution decree, police reports.',
    doc: 'docs/legal-documents.md',
    icon: '⚖️',
  },
  {
    id: 'financial',
    label: 'Financial Records',
    description: 'Child support worksheet, payment history, childcare receipt log.',
    doc: 'docs/financial-records.md',
    icon: '💰',
  },
  {
    id: 'medical',
    label: 'Medical Records',
    description: "Eli's medical history, ER visits, Olivia's medical documents.",
    doc: 'docs/medical-records.md',
    icon: '🏥',
  },
  {
    id: 'evidence',
    label: 'Evidence',
    description: "Google Timeline export, public records, salary documentation.",
    doc: 'docs/public-records-and-evidence.md',
    icon: '🔎',
  },
  {
    id: 'gary-hale',
    label: 'Gary Hale Records',
    description: 'Criminal case documentation, photos.',
    doc: 'docs/gary-hale-records.md',
    icon: '📄',
  },
  {
    id: 'recordings',
    label: 'Call Recordings',
    description: 'Recorded phone calls including Melissa calls and Olivia calls.',
    doc: 'docs/call-recordings.md',
    icon: '🎙️',
  },
]

export default function FilesPage() {
  const [selected, setSelected] = useState(null)
  const category = categories.find(c => c.id === selected)
  const content = category ? getFile(category.doc) : null

  return (
    <Layout>
      <div className="flex items-center gap-3 mb-6">
        {selected && (
          <Button variant="ghost" size="sm" onClick={() => setSelected(null)} className="text-xs">
            ← Back
          </Button>
        )}
        <h1 className="text-xl font-semibold text-foreground">
          {category ? category.label : 'Files'}
        </h1>
      </div>

      {!selected ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <Card
              key={cat.id}
              className="cursor-pointer hover:shadow-md transition-shadow hover:border-foreground/20"
              onClick={() => setSelected(cat.id)}
            >
              <CardHeader>
                <div className="text-2xl mb-2">{cat.icon}</div>
                <CardTitle className="text-sm">{cat.label}</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  {cat.description}
                </CardDescription>
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
