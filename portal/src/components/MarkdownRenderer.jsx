import { Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import { preprocessWikiLinks } from '@/lib/content'

function InternalLink({ href, children }) {
  if (href?.startsWith('/')) {
    return <Link to={href} className="text-primary underline underline-offset-2">{children}</Link>
  }
  return <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
}

export default function MarkdownRenderer({ content }) {
  if (!content) return <p className="text-muted-foreground">Content not found.</p>

  const processed = preprocessWikiLinks(content)

  return (
    <div className="prose prose-slate max-w-none
      [&_h1]:text-2xl [&_h1]:font-semibold [&_h1]:mb-4 [&_h1]:text-foreground
      [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:mt-6 [&_h2]:mb-3 [&_h2]:text-foreground
      [&_h3]:text-base [&_h3]:font-semibold [&_h3]:mt-4 [&_h3]:mb-2 [&_h3]:text-foreground
      [&_p]:text-sm [&_p]:leading-relaxed [&_p]:mb-3 [&_p]:text-foreground
      [&_ul]:text-sm [&_ul]:mb-3 [&_ul]:pl-5 [&_ul]:list-disc
      [&_ol]:text-sm [&_ol]:mb-3 [&_ol]:pl-5 [&_ol]:list-decimal
      [&_li]:mb-1 [&_li]:text-foreground
      [&_strong]:font-semibold [&_strong]:text-foreground
      [&_blockquote]:border-l-4 [&_blockquote]:border-border [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground
      [&_code]:text-xs [&_code]:bg-muted [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded
      [&_pre]:bg-muted [&_pre]:p-4 [&_pre]:rounded-md [&_pre]:overflow-x-auto [&_pre]:text-xs
      [&_table]:w-full [&_table]:text-sm [&_table]:border-collapse
      [&_th]:text-left [&_th]:p-2 [&_th]:border [&_th]:border-border [&_th]:bg-muted [&_th]:font-semibold
      [&_td]:p-2 [&_td]:border [&_td]:border-border
      [&_hr]:border-border [&_hr]:my-4
    ">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{ a: InternalLink }}
      >
        {processed}
      </ReactMarkdown>
    </div>
  )
}
