"use client"

export function copyTextToClipboard(text: string) {
  if ("clipboard" in navigator) {
    return navigator.clipboard.writeText(text)
  } else {
    return document.execCommand("copy", true, text)
  }
}
