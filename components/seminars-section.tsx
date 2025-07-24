"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Users, Sparkles, CheckCircle, Heart } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface SeminarsSectionProps {
  language: "ar" | "en"
}

export function SeminarsSection({ language }: SeminarsSectionProps) {
  const [attendanceConfirmed, setAttendanceConfirmed] = useState<{ [key: number]: boolean }>({})
  const [showConfirmation, setShowConfirmation] = useState<{ [key: number]: boolean }>({})

  const seminars = [
    {
      id: 1,
      title: {
        ar: "ندوة: دور الشباب في دعم القضية الفلسطينية",
        en: "Seminar: Youth Role in Supporting Palestinian Cause",
      },
      description: {
        ar: "ندوة تفاعلية حول كيفية مساهمة الشباب المصري في دعم الشعب الفلسطيني من خلال المبادرات المجتمعية والتبرعات",
        en: "Interactive seminar on how Egyptian youth can contribute to supporting the Palestinian people through community initiatives and donations",
      },
      image: "/placeholder.svg?height=300&width=400",
      date: "2024-02-15",
      time: "19:00",
      location: {
        ar: "قاعة المؤتمرات - جامعة القاهرة",
        en: "Conference Hall - Cairo University",
      },
      speaker: {
        ar: "د. أحمد محمود - خبير في الشؤون الفلسطينية",
        en: "Dr. Ahmed Mahmoud - Palestinian Affairs Expert",
      },
      attendees: 250,
      maxAttendees: 300,
      type: "offline",
    },
    {
      id: 2,
      title: {
        ar: "محاضرة: تاريخ فلسطين والنكبة",
        en: "Lecture: History of Palestine and the Nakba",
      },
      description: {
        ar: "محاضرة تاريخية شاملة عن تاريخ فلسطين منذ العصور القديمة حتى اليوم، مع التركيز على أحداث النكبة وتأثيرها",
        en: "Comprehensive historical lecture about Palestine's history from ancient times to today, focusing on the Nakba events and their impact",
      },
      image: "/placeholder.svg?height=300&width=400",
      date: "2024-02-20",
      time: "20:00",
      location: {
        ar: "عبر الإنترنت - Zoom",
        en: "Online - Zoom",
      },
      speaker: {
        ar: "أ.د. فاطمة الزهراء - أستاذ التاريخ الحديث",
        en: "Prof. Fatima Al-Zahra - Modern History Professor",
      },
      attendees: 450,
      maxAttendees: 500,
      type: "online",
    },
    {
      id: 3,
      title: {
        ar: "ورشة عمل: كيفية تنظيم حملات التبرع الفعالة",
        en: "Workshop: How to Organize Effective Donation Campaigns",
      },
      description: {
        ar: "ورشة عمل تطبيقية لتعليم المشاركين كيفية تنظيم وإدارة حملات التبرع بطريقة فعالة ومؤثرة",
        en: "Practical workshop to teach participants how to organize and manage donation campaigns effectively and impactfully",
      },
      image: "/placeholder.svg?height=300&width=400",
      date: "2024-02-25",
      time: "18:30",
      location: {
        ar: "مركز الشباب - الإسكندرية",
        en: "Youth Center - Alexandria",
      },
      speaker: {
        ar: "م. محمد علي - مدير المبادرات الخيرية",
        en: "Eng. Mohamed Ali - Charitable Initiatives Director",
      },
      attendees: 80,
      maxAttendees: 100,
      type: "offline",
    },
  ]

  const content = {
    ar: {
      title: "الندوات والفعاليات",
      subtitle: "انضم إلينا في فعالياتنا التثقيفية والتوعوية",
      attendButton: "حاضر بإذن الله",
      confirmed: "تم التأكيد",
      date: "التاريخ",
      time: "الوقت",
      location: "المكان",
      speaker: "المحاضر",
      attendees: "المشاركون",
      available: "متاح",
      online: "عبر الإنترنت",
      offline: "حضوري",
      confirmationTitle: "تأكيد الحضور",
      confirmationMessage: "شكراً لك! تم تأكيد حضورك للفعالية. سنرسل لك تفاصيل الحضور قريباً.",
      close: "إغلاق",
    },
    en: {
      title: "Seminars & Events",
      subtitle: "Join us in our educational and awareness events",
      attendButton: "I'll Attend, God Willing",
      confirmed: "Confirmed",
      date: "Date",
      time: "Time",
      location: "Location",
      speaker: "Speaker",
      attendees: "Attendees",
      available: "Available",
      online: "Online",
      offline: "In-Person",
      confirmationTitle: "Attendance Confirmation",
      confirmationMessage: "Thank you! Your attendance has been confirmed. We'll send you attendance details soon.",
      close: "Close",
    },
  }

  const t = content[language]

  const handleAttendance = (seminarId: number) => {
    setAttendanceConfirmed((prev) => ({ ...prev, [seminarId]: true }))
    setShowConfirmation((prev) => ({ ...prev, [seminarId]: true }))

    // Auto close confirmation after 3 seconds
    setTimeout(() => {
      setShowConfirmation((prev) => ({ ...prev, [seminarId]: false }))
    }, 3000)
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return language === "ar"
      ? date.toLocaleDateString("ar-EG", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : date.toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })
  }

  return (
    <section className="py-16 bg-gradient-to-b from-purple-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-indigo-500 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-pink-500 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Calendar className="h-8 w-8 text-purple-600 animate-pulse" />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-700 to-indigo-700 bg-clip-text text-transparent">
              {t.title}
            </h2>
            <Calendar className="h-8 w-8 text-indigo-600 animate-pulse" />
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t.subtitle}</p>
          <div className="mt-4 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"></div>
          </div>
        </div>

        {/* Seminars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {seminars.map((seminar) => (
            <Card
              key={seminar.id}
              className="group hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-0 shadow-lg bg-white/80 backdrop-blur-sm"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={seminar.image || "/placeholder.svg"}
                  alt={seminar.title[language]}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge
                    className={`${
                      seminar.type === "online" ? "bg-blue-500 hover:bg-blue-600" : "bg-green-500 hover:bg-green-600"
                    } text-white shadow-lg`}
                  >
                    {t[seminar.type]}
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-bold text-gray-800 line-clamp-2 group-hover:text-purple-700 transition-colors">
                  {seminar.title[language]}
                </CardTitle>
                <CardDescription className="text-gray-600 line-clamp-3">
                  {seminar.description[language]}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Event Details */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="h-4 w-4 text-purple-500" />
                    <span className="font-medium">{t.date}:</span>
                    <span>{formatDate(seminar.date)}</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="h-4 w-4 text-indigo-500" />
                    <span className="font-medium">{t.time}:</span>
                    <span>{seminar.time}</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="h-4 w-4 text-green-500" />
                    <span className="font-medium">{t.location}:</span>
                    <span className="line-clamp-1">{seminar.location[language]}</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users className="h-4 w-4 text-blue-500" />
                    <span className="font-medium">{t.attendees}:</span>
                    <span>
                      {seminar.attendees}/{seminar.maxAttendees}
                    </span>
                    <Badge variant="outline" className="text-xs">
                      {seminar.maxAttendees - seminar.attendees} {t.available}
                    </Badge>
                  </div>
                </div>

                {/* Speaker Info */}
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">{t.speaker}:</span>
                    <br />
                    {seminar.speaker[language]}
                  </p>
                </div>

                {/* Attendance Button */}
                <div className="pt-2">
                  {attendanceConfirmed[seminar.id] ? (
                    <Button disabled className="w-full bg-green-500 hover:bg-green-500 text-white shadow-lg">
                      <CheckCircle className="mr-2 h-4 w-4" />
                      {t.confirmed}
                    </Button>
                  ) : (
                    <Button
                      onClick={() => handleAttendance(seminar.id)}
                      className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                    >
                      <Heart className="mr-2 h-4 w-4 animate-pulse" />
                      {t.attendButton}
                    </Button>
                  )}
                </div>
              </CardContent>

              {/* Confirmation Dialog */}
              <Dialog
                open={showConfirmation[seminar.id]}
                onOpenChange={(open) => setShowConfirmation((prev) => ({ ...prev, [seminar.id]: open }))}
              >
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-2 text-green-600">
                      <CheckCircle className="h-6 w-6" />
                      {t.confirmationTitle}
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                        <CheckCircle className="h-8 w-8 text-green-600" />
                      </div>
                      <p className="text-gray-700 leading-relaxed">{t.confirmationMessage}</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="font-semibold text-green-800 mb-2">{seminar.title[language]}</h4>
                      <div className="text-sm text-green-700 space-y-1">
                        <p>
                          {formatDate(seminar.date)} - {seminar.time}
                        </p>
                        <p>{seminar.location[language]}</p>
                      </div>
                    </div>
                    <Button
                      onClick={() => setShowConfirmation((prev) => ({ ...prev, [seminar.id]: false }))}
                      className="w-full bg-green-600 hover:bg-green-700"
                    >
                      {t.close}
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-white shadow-2xl">
            <Sparkles className="h-12 w-12 mx-auto mb-4 animate-pulse" />
            <h3 className="text-2xl font-bold mb-4">
              {language === "ar"
                ? "لا تفوت الفرصة للمشاركة في فعالياتنا القادمة"
                : "Don't miss the opportunity to participate in our upcoming events"}
            </h3>
            <p className="text-lg opacity-90">
              {language === "ar"
                ? "كن جزءاً من التغيير وساهم في نشر الوعي حول القضية الفلسطينية"
                : "Be part of the change and contribute to raising awareness about the Palestinian cause"}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
