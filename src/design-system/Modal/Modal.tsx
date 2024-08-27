"use client"

import { cn } from "@/utils/cn"

interface ModalProps {
  close?: () => void
  children?: React.ReactNode
}

export function Modal({ close, children }: ModalProps) {
  return (
    <div
      onClick={close}
      className={cn(
        "fixed top-0 left-0 bottom-0 right-0 w-screen h-screen",
        "flex justify-center items-center",
        "z-30 p-4",
        "backdrop-blur-sm bg-slate-600/50 dark:bg-slate-300/20"
      )}
    >
      {children}
    </div>
  )
}
