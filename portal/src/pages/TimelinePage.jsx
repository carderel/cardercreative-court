import Layout from '@/components/Layout'
import MarkdownRenderer from '@/components/MarkdownRenderer'
import { getFile } from '@/lib/content'

export default function TimelinePage() {
  const content = getFile('timeline/chronological-index.md')

  return (
    <Layout>
      <h1 className="text-xl font-semibold text-foreground mb-6">Timeline</h1>
      <MarkdownRenderer content={content} />
    </Layout>
  )
}
