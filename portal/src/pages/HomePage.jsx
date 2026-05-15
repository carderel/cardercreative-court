import { useNavigate } from 'react-router-dom'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import Layout from '@/components/Layout'

const sections = [
  {
    title: 'Executive Summary',
    description: 'High-level overview of findings, key patterns, and case context.',
    path: '/summary',
    icon: '📋',
  },
  {
    title: 'Behavioral Patterns',
    description: '15 documented red flag categories with supporting evidence.',
    path: '/patterns',
    icon: '🔍',
  },
  {
    title: 'Timeline',
    description: 'Chronological index of all documented incidents and events.',
    path: '/timeline',
    icon: '📅',
  },
  {
    title: 'People',
    description: 'Profiles of all parties: Melissa, Olivia, Gary Hale, Abby, and others.',
    path: '/people',
    icon: '👤',
  },
  {
    title: 'Pattern Arcs',
    description: 'How each behavioral pattern evolved over time across three phases.',
    path: '/arcs',
    icon: '📈',
  },
  {
    title: 'Key Events',
    description: 'Major compound incidents and legal milestones.',
    path: '/events',
    icon: '⚡',
  },
  {
    title: 'Files',
    description: 'Legal documents, police reports, financial records, recordings, and evidence.',
    path: '/files',
    icon: '📁',
  },
]

export default function HomePage() {
  const navigate = useNavigate()

  return (
    <Layout>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-foreground">Case Overview</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Select a section to review case documentation.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sections.map((section) => (
          <Card
            key={section.path}
            className="cursor-pointer hover:shadow-md transition-shadow hover:border-foreground/20"
            onClick={() => navigate(section.path)}
          >
            <CardHeader>
              <div className="text-2xl mb-2">{section.icon}</div>
              <CardTitle className="text-base">{section.title}</CardTitle>
              <CardDescription className="text-xs leading-relaxed">
                {section.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </Layout>
  )
}
