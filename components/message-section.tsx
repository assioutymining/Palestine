"use client"

import { Heart, Star, Sparkles } from "lucide-react"

interface MessageSectionProps {
  language: "ar" | "en"
}

export function MessageSection({ language }: MessageSectionProps) {
  const content = {
    ar: {
      headerTitle: "رسالة من أرض الكنانة إلى أرض الإمامة",
      title: "رسالة إلى أهلنا في فلسطين",
      message: `أحبتنا في فلسطين الحبيبة،

نكتب إليكم هذه الكلمات ونحن نحمل في قلوبنا كل الحب والتقدير لصمودكم الأسطوري. نعلم أن الكلمات قد تبدو عاجزة أمام عظمة تضحياتكم، لكننا نريد أن نقول لكم: لستم وحدكم.

كل جنيه نتبرع به هو رسالة حب، كل دعاء نرفعه هو صرخة تضامن، وكل دمعة نذرفها هي شاهد على أنكم في قلوبنا دائماً.

نعدكم أن نبقى أوفياء لقضيتكم العادلة، وأن نستمر في دعمكم بكل ما نملك. فلسطين ستبقى حرة، والقدس ستعود، وأنتم ستنتصرون بإذن الله.

من أرض الكنانة إلى أرض الإمامة، نرسل لكم كل الحب والدعم.

إخوانكم في مصر 🇪🇬❤️🇵🇸`,
    },
    en: {
      headerTitle: "A Message from the Land of Kinana to the Land of Leadership",
      title: "A Message to Our People in Palestine",
      message: `Our beloved ones in dear Palestine,

We write these words carrying in our hearts all the love and appreciation for your legendary steadfastness. We know that words may seem inadequate before the greatness of your sacrifices, but we want to tell you: you are not alone.

Every pound we donate is a message of love, every prayer we raise is a cry of solidarity, and every tear we shed is a witness that you are always in our hearts.

We promise you to remain faithful to your just cause, and to continue supporting you with everything we have. Palestine will remain free, Jerusalem will return, and you will triumph, God willing.

From the Land of Kinana to the Land of Leadership, we send you all our love and support.

Your brothers in Egypt 🇪🇬❤️🇵🇸`,
    },
  }

  const t = content[language]

  return (
    <section className="py-16 bg-gradient-to-b from-red-50 via-white to-green-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-red-500 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-green-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-yellow-500 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-36 h-36 bg-black rounded-full blur-2xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Title */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Star className="h-8 w-8 text-green-600 animate-pulse" />
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-700 via-yellow-600 to-red-700 bg-clip-text text-transparent">
              {t.headerTitle}
            </h1>
            <Star className="h-8 w-8 text-red-600 animate-pulse" />
          </div>
          <div className="flex justify-center">
            <div className="w-32 h-1 bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 rounded-full"></div>
          </div>
        </div>

        {/* Message Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
            {/* Card Header */}
            <div className="bg-gradient-to-r from-green-600 via-red-600 to-black text-white p-6">
              <div className="flex items-center justify-center gap-3">
                <Heart className="h-8 w-8 animate-pulse" />
                <h2 className="text-2xl md:text-3xl font-bold text-center">{t.title}</h2>
                <Heart className="h-8 w-8 animate-pulse" />
              </div>
            </div>

            {/* Card Content */}
            <div className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                {t.message.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="mb-6 text-lg leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Card Footer */}
            <div className="bg-gradient-to-r from-green-50 to-red-50 p-6">
              <div className="flex items-center justify-center gap-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-6 w-6 text-green-600 animate-pulse" />
                  <span className="text-2xl">🇪🇬</span>
                </div>
                <Heart className="h-8 w-8 text-red-600 animate-pulse" />
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🇵🇸</span>
                  <Sparkles className="h-6 w-6 text-red-600 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom decorative elements */}
        <div className="text-center mt-12">
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-1 bg-green-500 rounded-full animate-pulse"></div>
            <Heart className="h-6 w-6 text-red-600 animate-pulse" />
            <div className="w-16 h-1 bg-red-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
