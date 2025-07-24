"use client"

import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

interface LanguageToggleProps {
  language: "ar" | "en"
  onLanguageChange: (language: "ar" | "en") => void
}

export function LanguageToggle({ language, onLanguageChange }: LanguageToggleProps) {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => onLanguageChange(language === "ar" ? "en" : "ar")}
      className="flex items-center gap-2"
    >
      <Globe className="h-4 w-4" />
      {language === "ar" ? "English" : "العربية"}
    </Button>
  )
}
