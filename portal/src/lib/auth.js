const SESSION_KEY = 'portal_auth'

export function getSession() {
  try {
    return JSON.parse(sessionStorage.getItem(SESSION_KEY))
  } catch {
    return null
  }
}

export function setSession(user) {
  sessionStorage.setItem(SESSION_KEY, JSON.stringify({ user, loggedIn: true }))
}

export function clearSession() {
  sessionStorage.removeItem(SESSION_KEY)
}

export function checkPin(pin) {
  const eliPin = import.meta.env.VITE_ELI_PIN
  const attorneyPin = import.meta.env.VITE_ATTORNEY_PIN
  if (pin === eliPin) return 'eli'
  if (pin === attorneyPin) return 'attorney'
  return null
}
