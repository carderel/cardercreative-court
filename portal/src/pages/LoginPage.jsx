import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { checkPin, setSession } from '@/lib/auth'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

export default function LoginPage() {
  const [pin, setPin] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    const user = checkPin(pin)
    if (user) {
      setSession(user)
      navigate('/')
    } else {
      setError('Incorrect PIN. Please try again.')
      setPin('')
    }
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Confidential</p>
          <h1 className="text-xl font-semibold text-foreground">Carder v. Moose</h1>
          <p className="text-sm text-muted-foreground mt-1">Case Documentation Portal</p>
        </div>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Access Required</CardTitle>
            <CardDescription className="text-xs">Enter your PIN to continue.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="pin" className="text-xs">PIN</Label>
                <Input
                  id="pin"
                  type="password"
                  value={pin}
                  onChange={(e) => { setPin(e.target.value); setError('') }}
                  placeholder="••••••"
                  autoFocus
                />
              </div>
              {error && <p className="text-xs text-destructive">{error}</p>}
              <Button type="submit" className="w-full">Enter</Button>
            </form>
          </CardContent>
        </Card>
        <p className="text-center text-xs text-muted-foreground mt-6">
          Attorney use only. Not for distribution.
        </p>
      </div>
    </div>
  )
}
