import { useState } from 'react'
import Layout from '@/components/Layout'
import MarkdownRenderer from '@/components/MarkdownRenderer'
import { getFilesInDir, getFile, getSlug } from '@/lib/content'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

function formatEventLabel(slug) {
  return slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
}

export default function EventsPage() {
  const [selected, setSelected] = useState(null)
  const events = getFilesInDir('events').sort((a, b) => a.path.localeCompare(b.path))
  const content = selected ? getFile(`events/${selected}.md`) : null

  return (
    <Layout>
      <div className="flex items-center gap-3 mb-6">
        {selected && (
          <Button variant="ghost" size="sm" onClick={() => setSelected(null)} className="text-xs">
            ← Back
          </Button>
        )}
        <h1 className="text-xl font-semibold text-foreground">
          {selected ? formatEventLabel(selected) : 'Key Events'}
        </h1>
      </div>

      {!selected ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {events.map((event) => {
            const slug = getSlug(event.path)
            return (
              <Card
                key={event.path}
                className="cursor-pointer hover:shadow-md transition-shadow hover:border-foreground/20"
                onClick={() => setSelected(slug)}
              >
                <CardHeader className="pb-4">
                  <CardTitle className="text-sm">{formatEventLabel(slug)}</CardTitle>
                </CardHeader>
              </Card>
            )
          })}
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
