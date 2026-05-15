import { Link, useNavigate } from 'react-router-dom'
import { clearSession } from '@/lib/auth'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

export default function Layout({ children }) {
  const navigate = useNavigate()

  function handleLogout() {
    clearSession()
    navigate('/login')
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex flex-col gap-0.5 no-underline">
            <span className="text-sm font-semibold tracking-wide text-foreground uppercase">
              Carder v. Moose
            </span>
            <span className="text-xs text-muted-foreground">Case Documentation Portal</span>
          </Link>
          <Button variant="ghost" size="sm" onClick={handleLogout} className="text-muted-foreground">
            Sign out
          </Button>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-6 py-8">
        {children}
      </main>
    </div>
  )
}
