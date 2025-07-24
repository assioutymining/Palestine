"use client"

import { useState, useEffect } from "react"
import { Heart, Clock, Star } from "lucide-react"

interface NewsTickerSectionProps {
  language: "ar" | "en"
}

export function NewsTickerSection({ language }: NewsTickerSectionProps) {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Sample news data - in real app this would come from admin dashboard
  const newsItems = [
    {
      id: 1,
      text: {
        ar: "عاجل: وصول 500 ألف جنيه من التبرعات خلال الساعات الماضية لدعم الأطفال في غزة",
        en: "Breaking: 500,000 EGP in donations received in the past hours to support children in Gaza",
      },
      priority: "high",
    },
    {
      id: 2,
      text: {
        ar: "تحديث: انضمام 10,000 مشارك جديد للحملة اليوم من جميع أنحاء مصر",
        en: "Update: 10,000 new participants joined the campaign today from all over Egypt",
      },
      priority: "medium",
    },
    {
      id: 3,
      text: {
        ar: "إنجاز: تم توزيع 2000 وجبة غذائية على العائلات الفلسطينية النازحة",
        en: "Achievement: 2000 food meals distributed to displaced Palestinian families",
      },
      priority: "medium",
    },
    {
      id: 4,
      text: {
        ar: "شكراً لكم: بفضل تبرعاتكم تم توفير الأدوية الأساسية لـ 500 طفل فلسطيني",
        en: "Thank you: Thanks to your donations, essential medicines were provided to 500 Palestinian children",
      },
      priority: "low",
    },
  ]

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString(language === "ar" ? "ar-EG" : "en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: language === "en",
    })
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString(language === "ar" ? "ar-EG" : "en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const content = {
    ar: {
      breaking: "عاجل",
      liveNews: "الأخبار المباشرة",
      now: "الآن",
    },
    en: {
      breaking: "BREAKING",
      liveNews: "LIVE NEWS",
      now: "NOW",
    },
  }

  const t = content[language]

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-r from-red-900 via-red-800 to-red-900 text-white shadow-2xl border-t-4 border-yellow-400">
      {/* Top section with time and date */}
      <div className="bg-black/30 px-4 py-2 flex items-center justify-between text-sm">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-yellow-400" />
            <span className="font-mono text-yellow-400">{formatTime(currentTime)}</span>
          </div>
          <div className="text-gray-300">{formatDate(currentTime)}</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          <span className="text-red-400 font-bold">{t.liveNews}</span>
        </div>
      </div>

      {/* News ticker */}
      <div className="relative overflow-hidden bg-gradient-to-r from-red-800 to-red-900 py-3">
        <div className="flex items-center">
          {/* Breaking news label */}
          <div className="bg-yellow-500 text-black px-4 py-2 font-bold text-sm flex items-center gap-2 flex-shrink-0">
            <Star className="h-4 w-4 animate-spin" />
            {t.breaking}
          </div>

          {/* Scrolling news content */}
          <div className="flex-1 overflow-hidden">
            <div className="animate-scroll-right flex items-center whitespace-nowrap">
              {newsItems.map((item, index) => (
                <div key={item.id} className="flex items-center">
                  <span className="px-6 text-lg font-medium">{item.text[language]}</span>

                  {/* Logo separator between news items */}
                  {index < newsItems.length - 1 && (
                    <div className="flex items-center px-4">
                      <div className="flex items-center gap-2 bg-white/10 rounded-full px-3 py-1">
                        <Heart className="h-4 w-4 text-red-400 animate-pulse" />
                        <span className="text-sm font-bold text-yellow-400">
                          {language === "ar" ? "جنيه لفلسطين" : "One Pound Palestine"}
                        </span>
                        <Heart className="h-4 w-4 text-red-400 animate-pulse" />
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Repeat the news items for continuous scroll */}
              {newsItems.map((item, index) => (
                <div key={`repeat-${item.id}`} className="flex items-center">
                  <span className="px-6 text-lg font-medium">{item.text[language]}</span>

                  {index < newsItems.length - 1 && (
                    <div className="flex items-center px-4">
                      <div className="flex items-center gap-2 bg-white/10 rounded-full px-3 py-1">
                        <Heart className="h-4 w-4 text-red-400 animate-pulse" />
                        <span className="text-sm font-bold text-yellow-400">
                          {language === "ar" ? "جنيه لفلسطين" : "One Pound Palestine"}
                        </span>
                        <Heart className="h-4 w-4 text-red-400 animate-pulse" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-red-800 to-transparent pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-red-900 to-transparent pointer-events-none"></div>
      </div>

      {/* Bottom accent line */}
      <div className="h-1 bg-gradient-to-r from-yellow-400 via-red-500 to-green-500"></div>

      <style jsx>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        .animate-scroll-right {
          animation: scroll-right 60s linear infinite;
        }
      `}</style>
    </div>
  )
}
