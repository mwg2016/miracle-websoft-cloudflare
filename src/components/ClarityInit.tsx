'use client'
import { useEffect } from 'react'

type IdleWindow = Window & {
  requestIdleCallback?: (callback: () => void) => number
  cancelIdleCallback?: (handle: number) => void
}

export default function ClarityInit() {
  useEffect(() => {
    let cancelled = false
    const win = window as IdleWindow

    const init = () => {
      void import('@microsoft/clarity').then(({ default: Clarity }) => {
        if (!cancelled) Clarity.init('wikuue0e88')
      })
    }

    const usesIdleCallback = Boolean(win.requestIdleCallback)
    const handle = usesIdleCallback && win.requestIdleCallback
      ? win.requestIdleCallback(init)
      : window.setTimeout(init, 2000)

    return () => {
      cancelled = true
      if (usesIdleCallback && win.cancelIdleCallback) {
        win.cancelIdleCallback(handle)
      } else {
        window.clearTimeout(handle)
      }
    }
  }, [])
  return null
}
