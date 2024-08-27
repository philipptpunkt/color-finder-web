"use client"

import React, { createContext, useContext, useState } from "react"
import { Toast, ToastMessageType } from "./Toast"
import { AnimatePresence, motion } from "framer-motion"

export function removeItem<T>(arr: T[], item: T) {
  const index = arr.indexOf(item)
  if (index > -1) arr.splice(index, 1)
}

type ToastMessage = {
  id: number
  type: ToastMessageType
  title: string
  message?: string
}

interface ToastContextProps {
  showToast: ({ title, type, message }: Omit<ToastMessage, "id">) => void
}

const ToastContext = createContext<ToastContextProps>({
  showToast: () => undefined,
})

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeToasts, setActiveToasts] = useState<ToastMessage[]>([])

  const showToast = ({ title, type, message }: Omit<ToastMessage, "id">) => {
    const timestamp = Date.now()

    const newToast = {
      id: timestamp,
      title,
      type,
      message,
    }

    setActiveToasts((prev) => [...prev, newToast])

    setTimeout(() => {
      removeToast(newToast.id)
    }, 3000)
  }

  const removeToast = (id: number) => {
    setActiveToasts((prevToasts) =>
      prevToasts.filter((toast) => toast.id !== id)
    )
  }

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <ul className="fixed bottom-4 px-2 min-[408px]:px-0 min-[408px]:right-2">
        <AnimatePresence mode="popLayout">
          {activeToasts.map((toast) => {
            return (
              <motion.li
                key={toast.id}
                layout
                initial={{ y: 100, opacity: 1 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                transition={{ type: "spring" }}
                className="w-full sm:w-[400px]"
                onClick={() => removeToast(toast.id)}
              >
                <Toast
                  type={toast.type}
                  title={toast.title}
                  message={toast.message}
                  close={() => removeToast(toast.id)}
                />
              </motion.li>
            )
          })}
        </AnimatePresence>
      </ul>
    </ToastContext.Provider>
  )
}

export const useToast = () => {
  return useContext(ToastContext)
}
