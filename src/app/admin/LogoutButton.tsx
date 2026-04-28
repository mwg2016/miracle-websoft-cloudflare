'use client'
import { LogOut } from 'lucide-react'

export default function LogoutButton() {
  async function logout() {
    await fetch('/api/admin/logout', { method: 'POST' })
    window.location.href = '/admin/login'
  }
  return (
    <button
      onClick={logout}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
        background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
        color: 'rgba(255,255,255,0.6)', fontSize: '0.78rem',
        padding: '0.4rem 0.85rem', borderRadius: 8, cursor: 'pointer',
      }}
    >
      <LogOut size={12} /> Logout
    </button>
  )
}
