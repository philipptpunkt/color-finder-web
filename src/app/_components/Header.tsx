"use client"

import { cn } from "@/utils/cn"

import { useTheme } from "next-themes"

interface HeaderProps {
  onThemeToggle: () => void
}

export function Header({ onThemeToggle }: HeaderProps) {
  const { theme } = useTheme()
  const isDarkMode = theme === "dark"
  return (
    <header
      className={cn([
        "fixed",
        "top-0",
        "left-0",
        "right-0",
        "z-50",
        "bg-neutral-200 dark:bg-neutral-900",
        "backdrop-blur-sm",
        "border-b",
        "border-border",
      ])}
    >
      <div
        className={cn([
          "max-w-7xl",
          "mx-auto",
          "px-6",
          "h-16",
          "flex",
          "items-center",
          "justify-between",
        ])}
      >
        {/* Logo */}
        <div className={cn(["flex", "items-center", "space-x-3"])}>
          <div
            className={cn([
              "w-10",
              "h-10",
              "rounded-xl",
              "bg-gradient-to-br",
              "from-primary-500",
              "to-secondary-500",
              "flex",
              "items-center",
              "justify-center",
            ])}
          >
            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
          </div>
          <h1 className={cn(["text-2xl", "font-bold", "text-text"])}>
            ColorFinder
          </h1>
        </div>

        {/* Navigation */}
        <nav className={cn(["hidden", "md:flex", "items-center", "space-x-8"])}>
          <a
            href="#tools"
            className={cn([
              "text-text-secondary",
              "hover:text-text",
              "transition-colors",
              "font-medium",
            ])}
          >
            Tools
          </a>
          <a
            href="#features"
            className={cn([
              "text-text-secondary",
              "hover:text-text",
              "transition-colors",
              "font-medium",
            ])}
          >
            Features
          </a>
          <a
            href="#about"
            className={cn([
              "text-text-secondary",
              "hover:text-text",
              "transition-colors",
              "font-medium",
            ])}
          >
            About
          </a>

          {/* Theme Toggle */}
          <button
            onClick={onThemeToggle}
            className={cn([
              "p-2",
              "rounded-lg",
              "bg-surface",
              "border",
              "border-border",
              "hover:bg-surface",
              "transition-colors",
            ])}
          >
            {isDarkMode ? (
              <svg
                className="w-5 h-5 text-text"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5 text-text"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile Theme Toggle */}
        <button
          onClick={onThemeToggle}
          className={cn([
            "md:hidden",
            "p-2",
            "rounded-lg",
            "bg-surface",
            "border",
            "border-border",
          ])}
        >
          {isDarkMode ? (
            <svg
              className="w-5 h-5 text-text"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5 text-text"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          )}
        </button>
      </div>
    </header>
  )
}
