"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, TrendingUp, Sparkles, Star } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog"

interface HeroSectionProps {
  language: "ar" | "en"
}

export function HeroSection({ language }: HeroSectionProps) {
  const content = {
    ar: {
      title: "لسنا عاجزين... كل جنيه وقفة مع فلسطين",
      description: "انضم لملايين المصريين في حملة تضامنية تاريخية لدعم فلسطين من خلال التبرعات اليومية الصغيرة",
      joinNow: "انضم الآن",
      learnMore: "اعرف أكثر",
      dailyGoal: "الهدف اليومي",
      participants: "المشاركون",
      totalRaised: "إجمالي التبرعات",
    },
    en: {
      title: "We are not helpless... Every Pound is a Stand for Palestine",
      description:
        "Join millions of Egyptians in a historic solidarity campaign to support Palestine through small daily donations",
      joinNow: "Join Now",
      learnMore: "Learn More",
      dailyGoal: "Daily Goal",
      participants: "Participants",
      totalRaised: "Total Raised",
    },
  }

  const t = content[language]

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-red-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-green-500 rounded-full blur-xl"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-red-500 rounded-full blur-lg"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-yellow-500 rounded-full blur-xl"></div>
        <div className="absolute bottom-32 right-1/3 w-12 h-12 bg-blue-500 rounded-full blur-lg"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-6 w-6 text-yellow-500 animate-pulse" />
              <span className="text-sm font-medium text-gray-600 bg-yellow-100 px-3 py-1 rounded-full">
                {language === "ar" ? "حملة شعبية مصرية" : "Egyptian Popular Campaign"}
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-green-700 via-red-600 to-black bg-clip-text text-transparent leading-tight">
              {t.title}
            </h1>

            <p className="text-xl text-gray-700 leading-relaxed font-medium">{t.description}</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                  >
                    <Heart className="mr-2 h-5 w-5 animate-pulse" />
                    {t.joinNow}
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                      <Heart className="h-5 w-5 text-red-600" />
                      {t.joinNow}
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      {language === "ar"
                        ? "انضم إلى ملايين المصريين في دعم فلسطين بتبرع يومي بسيط يبدأ من جنيه واحد فقط"
                        : "Join millions of Egyptians in supporting Palestine with a simple daily donation starting from just one pound"}
                    </p>
                    <div className="flex gap-2">
                      <Button className="flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800">
                        {language === "ar" ? "ابدأ التبرع" : "Start Donating"}
                      </Button>
                      <DialogClose asChild>
                        <Button variant="outline" className="flex-1 bg-transparent border-gray-300 hover:bg-gray-50">
                          {language === "ar" ? "إغلاق" : "Close"}
                        </Button>
                      </DialogClose>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-green-600 text-green-700 hover:bg-green-50 bg-white/80 backdrop-blur-sm shadow-md"
                  >
                    {t.learnMore}
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                      <Star className="h-5 w-5 text-yellow-500" />
                      {t.learnMore}
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 max-h-96 overflow-y-auto">
                    <div>
                      <h4 className="font-semibold mb-2 text-green-700">
                        {language === "ar" ? "كيف تعمل الحملة؟" : "How does the campaign work?"}
                      </h4>
                      <p className="text-gray-600 mb-4">
                        {language === "ar"
                          ? "حملة شعبية مصرية تهدف لجمع التبرعات اليومية البسيطة من المواطنين والشركات لدعم الشعب الفلسطيني"
                          : "An Egyptian popular campaign aimed at collecting simple daily donations from citizens and companies to support the Palestinian people"}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-red-700">
                        {language === "ar" ? "طرق المشاركة:" : "Ways to participate:"}
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        <li>
                          {language === "ar" ? "تبرع يومي يبدأ من جنيه واحد" : "Daily donation starting from one pound"}
                        </li>
                        <li>{language === "ar" ? "انضم كشريك تجاري" : "Join as a business partner"}</li>
                        <li>
                          {language === "ar"
                            ? "قدم خدماتك المهنية مجاناً"
                            : "Provide your professional services for free"}
                        </li>
                        <li>{language === "ar" ? "انشر الحملة في دوائرك" : "Spread the campaign in your circles"}</li>
                      </ul>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-green-800 mb-1">10M</h3>
                <p className="text-green-600 font-medium">{t.dailyGoal}</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-blue-800 mb-1">2.5M</h3>
                <p className="text-blue-600 font-medium">{t.participants}</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200 sm:col-span-2 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-red-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Heart className="h-10 w-10 text-white animate-pulse" />
                </div>
                <h3 className="text-4xl font-bold text-red-800 mb-1">45,230,000</h3>
                <p className="text-red-600 font-medium">{t.totalRaised} EGP</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
