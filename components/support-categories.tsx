"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog"
import { Heart, Apple, BookOpen, Home, Shield, Stethoscope, CreditCard, Eye, CheckCircle, Sparkles } from "lucide-react"

interface SupportCategoriesProps {
  language: "ar" | "en"
}

export function SupportCategories({ language }: SupportCategoriesProps) {
  const supportCategories = [
    {
      id: 1,
      title: { ar: "الدعم الطبي", en: "Medical Support" },
      description: {
        ar: "توفير الأدوية والمعدات الطبية الأساسية",
        en: "Providing essential medicines and medical equipment",
      },
      icon: "Heart",
      color: "red",
      items: [
        { ar: "أدوية أساسية", en: "Essential medicines", cost: 100 },
        { ar: "معدات طبية", en: "Medical equipment", cost: 500 },
        { ar: "مستلزمات جراحية", en: "Surgical supplies", cost: 300 },
        { ar: "أجهزة تنفس صناعي", en: "Ventilators", cost: 2000 },
      ],
    },
    {
      id: 2,
      title: { ar: "الدعم الغذائي", en: "Food Support" },
      description: {
        ar: "توفير الطعام والمياه النظيفة للعائلات المحتاجة",
        en: "Providing food and clean water for families in need",
      },
      icon: "Apple",
      color: "green",
      items: [
        { ar: "وجبة غذائية كاملة", en: "Complete food meal", cost: 25 },
        { ar: "مياه نظيفة (20 لتر)", en: "Clean water (20L)", cost: 10 },
        { ar: "حليب للأطفال", en: "Baby formula", cost: 50 },
        { ar: "سلة غذائية شهرية", en: "Monthly food basket", cost: 200 },
      ],
    },
    {
      id: 3,
      title: { ar: "الدعم التعليمي", en: "Educational Support" },
      description: {
        ar: "توفير الكتب والأدوات المدرسية للأطفال",
        en: "Providing books and school supplies for children",
      },
      icon: "BookOpen",
      color: "blue",
      items: [
        { ar: "حقيبة مدرسية مع أدوات", en: "School bag with supplies", cost: 75 },
        { ar: "كتب دراسية", en: "Textbooks", cost: 150 },
        { ar: "أدوات كتابة ورسم", en: "Writing and drawing supplies", cost: 30 },
        { ar: "جهاز لوحي تعليمي", en: "Educational tablet", cost: 800 },
      ],
    },
    {
      id: 4,
      title: { ar: "المأوى والإسكان", en: "Shelter & Housing" },
      description: {
        ar: "توفير المأوى المؤقت ومواد البناء الأساسية",
        en: "Providing temporary shelter and basic building materials",
      },
      icon: "Home",
      color: "orange",
      items: [
        { ar: "خيمة عائلية", en: "Family tent", cost: 200 },
        { ar: "بطانيات وفرش", en: "Blankets and mattresses", cost: 80 },
        { ar: "مواد بناء أساسية", en: "Basic building materials", cost: 800 },
        { ar: "مولد كهرباء صغير", en: "Small generator", cost: 1200 },
      ],
    },
    {
      id: 5,
      title: { ar: "الحماية والأمان", en: "Protection & Safety" },
      description: { ar: "توفير معدات الحماية والإسعافات الأولية", en: "Providing protection equipment and first aid" },
      icon: "Shield",
      color: "purple",
      items: [
        { ar: "حقيبة إسعافات أولية", en: "First aid kit", cost: 60 },
        { ar: "معدات حماية شخصية", en: "Personal protection equipment", cost: 120 },
        { ar: "مصباح طوارئ", en: "Emergency flashlight", cost: 25 },
        { ar: "راديو طوارئ", en: "Emergency radio", cost: 40 },
      ],
    },
    {
      id: 6,
      title: { ar: "الرعاية النفسية", en: "Psychological Care" },
      description: { ar: "دعم الصحة النفسية والعلاج النفسي", en: "Mental health support and psychological treatment" },
      icon: "Stethoscope",
      color: "teal",
      items: [
        { ar: "جلسة علاج نفسي", en: "Psychological therapy session", cost: 150 },
        { ar: "أنشطة ترفيهية للأطفال", en: "Recreational activities for children", cost: 100 },
        { ar: "ورش دعم نفسي", en: "Psychological support workshops", cost: 200 },
        { ar: "برامج إعادة تأهيل", en: "Rehabilitation programs", cost: 500 },
      ],
    },
  ]

  const content = {
    ar: {
      title: "فئات الدعم المتاحة",
      subtitle: "اختر نوع الدعم الذي تريد تقديمه",
      donate: "تبرع",
      egp: "جنيه",
      startingFrom: "يبدأ من",
      viewDetails: "عرض التفاصيل",
      selectAmount: "اختر المبلغ",
      donationSuccess: "تم التبرع بنجاح!",
      thankYou: "شكراً لك على دعمك للشعب الفلسطيني",
      donationAmount: "مبلغ التبرع",
      confirmDonation: "تأكيد التبرع",
      cancel: "إلغاء",
      close: "إغلاق",
      itemDetails: "تفاصيل العناصر",
      totalCost: "التكلفة الإجمالية",
    },
    en: {
      title: "Available Support Categories",
      subtitle: "Choose the type of support you want to provide",
      donate: "Donate",
      egp: "EGP",
      startingFrom: "Starting from",
      viewDetails: "View Details",
      selectAmount: "Select Amount",
      donationSuccess: "Donation Successful!",
      thankYou: "Thank you for supporting the Palestinian people",
      donationAmount: "Donation Amount",
      confirmDonation: "Confirm Donation",
      cancel: "Cancel",
      close: "Close",
      itemDetails: "Item Details",
      totalCost: "Total Cost",
    },
  }

  const t = content[language]

  const getIconComponent = (iconName: string) => {
    const icons = {
      Heart,
      Apple,
      BookOpen,
      Home,
      Shield,
      Stethoscope,
    }
    return icons[iconName] || Heart
  }

  const getColorClasses = (color: string) => {
    const colors = {
      red: "border-red-500 bg-gradient-to-br from-red-50 to-red-100",
      green: "border-green-500 bg-gradient-to-br from-green-50 to-green-100",
      blue: "border-blue-500 bg-gradient-to-br from-blue-50 to-blue-100",
      orange: "border-orange-500 bg-gradient-to-br from-orange-50 to-orange-100",
      purple: "border-purple-500 bg-gradient-to-br from-purple-50 to-purple-100",
      teal: "border-teal-500 bg-gradient-to-br from-teal-50 to-teal-100",
    }
    return colors[color] || colors.red
  }

  const getIconColor = (color: string) => {
    const colors = {
      red: "text-red-600",
      green: "text-green-600",
      blue: "text-blue-600",
      orange: "text-orange-600",
      purple: "text-purple-600",
      teal: "text-teal-600",
    }
    return colors[color] || colors.red
  }

  const getButtonColor = (color: string) => {
    const colors = {
      red: "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800",
      green: "bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800",
      blue: "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800",
      orange: "bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800",
      purple: "bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800",
      teal: "bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800",
    }
    return colors[color] || colors.red
  }

  return (
    <section
      className="py-16 bg-gradient-to-b from-blue-50 via-white to-purple-50 relative overflow-hidden"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-green-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-8 w-8 text-blue-600 animate-pulse" />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">
              {t.title}
            </h2>
            <Sparkles className="h-8 w-8 text-purple-600 animate-pulse" />
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {supportCategories.map((category) => {
            const IconComponent = getIconComponent(category.icon)
            const minCost = Math.min(...category.items.map((item) => item.cost))

            return (
              <Card
                key={category.id}
                className={`border-l-4 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${getColorClasses(category.color)} shadow-lg`}
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-3 rounded-xl shadow-lg ${getColorClasses(category.color)}`}>
                      <IconComponent className={`h-8 w-8 ${getIconColor(category.color)}`} />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold">{category.title[language]}</CardTitle>
                      <CardDescription className="text-sm font-medium">
                        {category.description[language]}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="text-center">
                    <Badge variant="secondary" className="text-sm font-semibold bg-white/80 backdrop-blur-sm shadow-sm">
                      {t.startingFrom} {minCost} {t.egp}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {category.items.slice(0, 3).map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center bg-white/80 backdrop-blur-sm p-3 rounded-lg border shadow-sm hover:shadow-md transition-shadow"
                      >
                        <span className="text-sm font-medium">{item[language]}</span>
                        <span className={`font-bold text-lg ${getIconColor(category.color)}`}>
                          {item.cost} {t.egp}
                        </span>
                      </div>
                    ))}
                    {category.items.length > 3 && (
                      <div className="text-center text-sm text-gray-500 font-medium">
                        +{category.items.length - 3} {language === "ar" ? "عنصر آخر" : "more items"}
                      </div>
                    )}
                  </div>

                  <div className="space-y-3">
                    {/* Donate Button */}
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          className={`w-full ${getButtonColor(category.color)} text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200`}
                        >
                          <CreditCard className="mr-2 h-4 w-4" />
                          {t.donate}
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-md">
                        <DialogHeader>
                          <DialogTitle className="flex items-center gap-2">
                            <IconComponent className={`h-5 w-5 ${getIconColor(category.color)}`} />
                            {t.donate} - {category.title[language]}
                          </DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div className="text-center p-4 bg-gray-50 rounded-lg">
                            <p className="text-gray-600 mb-2">{t.donationAmount}:</p>
                            <div className="grid grid-cols-2 gap-2">
                              {category.items.slice(0, 4).map((item, index) => (
                                <Button
                                  key={index}
                                  variant="outline"
                                  size="sm"
                                  className="text-xs bg-white hover:bg-gray-100"
                                >
                                  {item.cost} {t.egp}
                                </Button>
                              ))}
                            </div>
                          </div>

                          <Dialog>
                            <DialogTrigger asChild>
                              <Button className={`w-full ${getButtonColor(category.color)} text-white`}>
                                <CheckCircle className="mr-2 h-4 w-4" />
                                {t.confirmDonation}
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-sm">
                              <DialogHeader>
                                <DialogTitle className="text-center text-green-700">
                                  <CheckCircle className="h-8 w-8 mx-auto mb-2 text-green-600" />
                                  {t.donationSuccess}
                                </DialogTitle>
                              </DialogHeader>
                              <div className="text-center space-y-4">
                                <p className="text-gray-600">{t.thankYou}</p>
                                <div className="bg-green-50 p-4 rounded-lg">
                                  <p className="text-green-800 font-semibold">{category.title[language]}</p>
                                  <p className="text-green-600">
                                    {minCost} {t.egp}
                                  </p>
                                </div>
                                <DialogClose asChild>
                                  <Button className="w-full bg-green-600 hover:bg-green-700">{t.close}</Button>
                                </DialogClose>
                              </div>
                            </DialogContent>
                          </Dialog>

                          <DialogClose asChild>
                            <Button variant="outline" className="w-full bg-transparent">
                              {t.cancel}
                            </Button>
                          </DialogClose>
                        </div>
                      </DialogContent>
                    </Dialog>

                    {/* View Details Button */}
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full bg-white/80 backdrop-blur-sm border-2 hover:bg-white shadow-md"
                        >
                          <Eye className="mr-2 h-4 w-4" />
                          {t.viewDetails}
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle className="flex items-center gap-2">
                            <IconComponent className={`h-6 w-6 ${getIconColor(category.color)}`} />
                            {category.title[language]} - {t.itemDetails}
                          </DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4 max-h-96 overflow-y-auto">
                          <p className="text-gray-600 font-medium">{category.description[language]}</p>

                          <div className="space-y-3">
                            {category.items.map((item, index) => (
                              <div
                                key={index}
                                className="flex justify-between items-center bg-gray-50 p-4 rounded-lg border hover:bg-gray-100 transition-colors"
                              >
                                <div>
                                  <span className="font-medium">{item[language]}</span>
                                </div>
                                <div className="text-right">
                                  <span className={`font-bold text-lg ${getIconColor(category.color)}`}>
                                    {item.cost} {t.egp}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>

                          <div className="bg-gray-100 p-4 rounded-lg">
                            <div className="flex justify-between items-center">
                              <span className="font-semibold">{t.totalCost}:</span>
                              <span className={`font-bold text-xl ${getIconColor(category.color)}`}>
                                {category.items.reduce((sum, item) => sum + item.cost, 0)} {t.egp}
                              </span>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
