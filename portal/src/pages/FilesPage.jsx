import { useState } from 'react'
import Layout from '@/components/Layout'
import MarkdownRenderer from '@/components/MarkdownRenderer'
import { getFile } from '@/lib/content'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'

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
    description: 'Google Timeline export, public records, salary documentation.',
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
  {
    id: 'spp-violations',
    label: 'SPP Contempt Violations',
    description: 'Provision-by-provision SPP violation analysis. Motion-ready contempt documentation.',
    doc: 'docs/spp-violations/INDEX.md',
    icon: '📋',
  },
]

const sppSections = [
  { id: 'section-III-A-parenting-time', label: '§III.A', description: 'Parenting Time / Visit Refusals', severity: 'Critical' },
  { id: 'section-III-D-communication', label: '§III.D', description: 'Communication / Phone Blocking', severity: 'Critical' },
  { id: 'section-III-significant-other', label: '§III', description: 'Significant Other Rule (Gary)', severity: 'Serious' },
  { id: 'section-IV-B-relocation', label: '§IV.B', description: 'Relocation Notice', severity: 'Serious' },
  { id: 'section-IV-D-medical', label: '§IV.D', description: 'Medical Exclusion', severity: 'Significant' },
  { id: 'section-IV-F-childcare', label: '§IV.F', description: 'Childcare Billing on Refused Visits', severity: 'Significant' },
  { id: 'section-IV-G-information', label: '§IV.G', description: 'Information Sharing', severity: 'Significant' },
]

const severityVariant = { Critical: 'destructive', Serious: 'secondary', Significant: 'outline' }

export default function FilesPage() {
  const [selected, setSelected] = useState(null)
  const [sppSection, setSppSection] = useState(null)

  const category = categories.find(c => c.id === selected)

  const sppContent = sppSection
    ? getFile(`docs/spp-violations/${sppSection}.md`)
    : getFile('docs/spp-violations/INDEX.md')

  const content = selected === 'spp-violations' ? sppContent : category ? getFile(category.doc) : null

  const breadcrumbs = sppSection
    ? [{ label: 'Files', path: '/files' }, { label: 'SPP Violations', path: undefined, onClick: () => setSppSection(null) }, { label: sppSections.find(s => s.id === sppSection)?.label }]
    : selected
    ? [{ label: 'Files', path: '/files' }, { label: category?.label }]
    : [{ label: 'Files' }]

  function handleBack() {
    if (sppSection) { setSppSection(null) }
    else { setSelected(null) }
  }

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <div className="flex items-center gap-3 mb-6">
        {selected && (
          <Button variant="ghost" size="sm" onClick={handleBack} className="text-xs">← Back</Button>
        )}
        <h1 className="text-xl font-semibold text-foreground">
          {sppSection
            ? sppSections.find(s => s.id === sppSection)?.description
            : category?.label ?? 'Files'}
        </h1>
      </div>

      {/* Category grid */}
      {!selected && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <Card
              key={cat.id}
              className="cursor-pointer hover:shadow-md transition-shadow hover:border-foreground/20"
              onClick={() => { setSelected(cat.id); setSppSection(null) }}
            >
              <CardHeader>
                <div className="text-2xl mb-2">{cat.icon}</div>
                <CardTitle className="text-sm">{cat.label}</CardTitle>
                <CardDescription className="text-xs leading-relaxed">{cat.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      )}

      {/* SPP Violations — index + section sub-navigation */}
      {selected === 'spp-violations' && !sppSection && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {sppSections.map((s) => (
              <Card
                key={s.id}
                className="cursor-pointer hover:shadow-md transition-shadow hover:border-foreground/20"
                onClick={() => setSppSection(s.id)}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="outline" className="text-xs font-mono">{s.label}</Badge>
                    <Badge variant={severityVariant[s.severity] ?? 'outline'} className="text-xs">{s.severity}</Badge>
                  </div>
                  <CardTitle className="text-sm">{s.description}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
          <Separator className="mb-6" />
          <MarkdownRenderer content={getFile('docs/spp-violations/INDEX.md')} />
        </>
      )}

      {/* SPP section detail */}
      {selected === 'spp-violations' && sppSection && (
        <>
          <Separator className="mb-6" />
          <MarkdownRenderer content={content} />
        </>
      )}

      {/* Standard category content */}
      {selected && selected !== 'spp-violations' && (
        <>
          <Separator className="mb-6" />
          <MarkdownRenderer content={content} />
        </>
      )}
    </Layout>
  )
}
