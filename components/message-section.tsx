"use client"

import { Heart, Star, Sparkles } from "lucide-react"

interface MessageSectionProps {
  language: "ar" | "en"
}

export function MessageSection({ language }: MessageSectionProps) {
  const content = {
    ar: {
      preMessage: "رسالة من أرض الكنانة إلى أرض الإمامة",
      message:
        "إخواننا في فلسطين، نعتذر لكم عن تقصيرنا، ولكننا لن نترككم وحدكم. كل جنيه نتبرع به هو رسالة حب ودعم لكم. معاً سنقف بجانبكم حتى تحرير فلسطين.",
      signature: "- الشعب المصري",
    },
    en: {
      preMessage: "A message from the land of Kinana to the land of Imama",
      message:
        "Our brothers in Palestine, we apologize for our shortcomings, but we will not leave you alone. Every pound we donate is a message of love and support for you. Together we will stand by you until the liberation of Palestine.",
      signature: "- The Egyptian People",
    },
  }

  const t = content[language]

  return (
    <section className="py-16 bg-gradient-to-b from-white to-green-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-48 h-48 bg-green-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-red-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-yellow-500 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-blue-500 rounded-full blur-2xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Pre-message */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Star className="h-6 w-6 text-yellow-600 animate-pulse" />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-green-700 to-red-600 bg-clip-text text-transparent">
                {t.preMessage}
              </h3>
              <Star className="h-6 w-6 text-yellow-600 animate-pulse" />
            </div>
          </div>

          {/* Main message card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border-2 border-green-200 p-8 md:p-12 relative overflow-hidden">
            {/* Decorative elements inside card */}
            <div className="absolute top-4 left-4">
              <Heart className="h-8 w-8 text-red-500 animate-pulse opacity-20" />
            </div>
            <div className="absolute top-4 right-4">
              <Sparkles className="h-8 w-8 text-yellow-500 animate-spin opacity-20" />
            </div>
            <div className="absolute bottom-4 left-4">
              <Sparkles className="h-8 w-8 text-green-500 animate-spin opacity-20" />
            </div>
            <div className="absolute bottom-4 right-4">
              <Heart className="h-8 w-8 text-red-500 animate-pulse opacity-20" />
            </div>

            {/* Message content */}
            <div className="relative z-10">
              <div className="text-6xl text-green-600 mb-4 opacity-30">"</div>
              <p className="text-xl md:text-2xl leading-relaxed text-gray-800 font-medium mb-8">{t.message}</p>
              <div className="text-6xl text-green-600 mb-4 opacity-30 rotate-180">"</div>

              {/* Signature */}
              <div className="flex items-center justify-center gap-2 mt-6">
                <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-green-600"></div>
                <p className="text-lg font-bold bg-gradient-to-r from-green-700 to-red-600 bg-clip-text text-transparent">
                  {t.signature}
                </p>
                <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-red-600"></div>
              </div>
            </div>

            {/* Floating hearts animation */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <Heart
                className="absolute top-1/4 left-1/4 h-4 w-4 text-red-400 animate-bounce opacity-40"
                style={{ animationDelay: "0s" }}
              />
              <Heart
                className="absolute top-3/4 right-1/4 h-3 w-3 text-red-400 animate-bounce opacity-40"
                style={{ animationDelay: "1s" }}
              />
              <Heart
                className="absolute top-1/2 left-3/4 h-5 w-5 text-red-400 animate-bounce opacity-40"
                style={{ animationDelay: "2s" }}
              />
              <Sparkles
                className="absolute top-1/3 right-1/3 h-4 w-4 text-yellow-400 animate-pulse opacity-40"
                style={{ animationDelay: "0.5s" }}
              />
              <Sparkles
                className="absolute bottom-1/3 left-1/3 h-3 w-3 text-yellow-400 animate-pulse opacity-40"
                style={{ animationDelay: "1.5s" }}
              />
            </div>
          </div>

          {/* Bottom decorative line */}
          <div className="mt-8 flex justify-center">
            <div className="w-64 h-1 bg-gradient-to-r from-green-600 via-yellow-500 to-red-600 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
