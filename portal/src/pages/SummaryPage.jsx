import { useState } from 'react'
import Layout from '@/components/Layout'
import MarkdownRenderer from '@/components/MarkdownRenderer'
import { getFile } from '@/lib/content'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

const docs = [
  { label: 'Executive Summary', file: 'analysis/executive-summary.md' },
  { label: 'Phase 2 Pattern Synthesis', file: 'analysis/phase2-pattern-synthesis.md' },
  { label: 'Attorney Prep — Abby Household', file: 'analysis/attorney-prep-abby-household.md' },
  { label: 'CP3 Human Review', file: 'analysis/cp3-human-review.md' },
]

export default function SummaryPage() {
  const [active, setActive] = useState(docs[0].file)
  const content = getFile(active)

  return (
    <Layout breadcrumbs={[{ label: 'Executive Summary' }]}>
      <div className="flex items-center gap-2 mb-6">
        <h1 className="text-xl font-semibold text-foreground">Executive Summary</h1>
      </div>
      <div className="flex flex-wrap gap-2 mb-6">
        {docs.map((d) => (
          <Button
            key={d.file}
            variant={active === d.file ? 'default' : 'outline'}
            size="sm"
            onClick={() => setActive(d.file)}
            className="text-xs"
          >
            {d.label}
          </Button>
        ))}
      </div>
      <Separator className="mb-6" />
      <MarkdownRenderer content={content} />
    </Layout>
  )
}
