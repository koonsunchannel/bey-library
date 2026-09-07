export const ADMIN_STORE_KEY = 'bey-admin-logged-in'

export function isAdmin(): boolean {
  if (typeof window === 'undefined') return false
  return window.localStorage.getItem(ADMIN_STORE_KEY) === 'true'
}

export function setAdmin(value: boolean) {
  if (typeof window === 'undefined') return
  window.localStorage.setItem(ADMIN_STORE_KEY, value ? 'true' : 'false')
}

export function clearAdmin() {
  if (typeof window === 'undefined') return
  window.localStorage.removeItem(ADMIN_STORE_KEY)
}