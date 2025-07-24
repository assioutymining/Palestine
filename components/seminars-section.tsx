"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Calendar, Clock, MapPin, User, Users, Video, CheckCircle, Sparkles } from "lucide-react"

interface SeminarsSectionProps {
  language: "ar" | "en"
}

export function SeminarsSection({ language }: SeminarsSectionProps) {
  const [attendanceConfirmed, setAttendanceConfirmed] = useState<number[]>([])

  const handleAttendanceConfirm = (seminarId: number) => {
    setAttendanceConfirmed((prev) => [...prev, seminarId])

    // Show confirmation animation
    setTimeout(() => {
      alert(
        language === "ar"
          ? "تم تأكيد حضورك بنجاح! سيتم إرسال تفاصيل الندوة قريباً"
          : "Your attendance has been confirmed successfully! Seminar details will be sent soon",
      )
    }, 500)
  }

  // Sample seminars data - in real app this would come from admin dashboard
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
      maxAttendees: 300,
      currentAttendees: 245,
      type: "offline",
      status: "active",
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
      maxAttendees: 500,
      currentAttendees: 387,
      type: "online",
      status: "active",
    },
    {
      id: 3,
      title: {
        ar: "ورشة عمل: كيفية تنظيم حملات التبرع الفعالة",
        en: "Workshop: How to Organize Effective Donation Campaigns",
      },
      description: {
        ar: "ورشة عمل تطبيقية لتعلم أساليب تنظيم وإدارة حملات التبرع المجتمعية بطريقة فعالة ومؤثرة",
        en: "Practical workshop to learn methods of organizing and managing community donation campaigns effectively and impactfully",
      },
      image: "/placeholder.svg?height=300&width=400",
      date: "2024-02-25",
      time: "18:30",
      location: {
        ar: "مركز الشباب - الإسكندرية",
        en: "Youth Center - Alexandria",
      },
      speaker: {
        ar: "أ. سارة أحمد - خبيرة في العمل الخيري",
        en: "Ms. Sara Ahmed - Charity Work Expert",
      },
      maxAttendees: 150,
      currentAttendees: 89,
      type: "offline",
      status: "active",
    },
  ]

  const content = {
    ar: {
      title: "الندوات والفعاليات",
      subtitle: "انضم إلى فعالياتنا التعليمية والتوعوية لدعم القضية الفلسطينية",
      date: "التاريخ",
      time: "الوقت",
      location: "المكان",
      speaker: "المحاضر",
      attendees: "المشاركون",
      online: "عبر الإنترنت",
      offline: "حضوري",
      confirmAttendance: "حاضر بإذن الله",
      confirmed: "تم التأكيد",
      viewDetails: "عرض التفاصيل",
      available: "متاح",
      almostFull: "شارف على الامتلاء",
      full: "مكتمل",
      registerNow: "سجل الآن",
      seminarDetails: "تفاصيل الندوة",
    },
    en: {
      title: "Seminars & Events",
      subtitle: "Join our educational and awareness events to support the Palestinian cause",
      date: "Date",
      time: "Time",
      location: "Location",
      speaker: "Speaker",
      attendees: "Attendees",
      online: "Online",
      offline: "In-Person",
      confirmAttendance: "I'll Attend",
      confirmed: "Confirmed",
      viewDetails: "View Details",
      available: "Available",
      almostFull: "Almost Full",
      full: "Full",
      registerNow: "Register Now",
      seminarDetails: "Seminar Details",
    },
  }

  const t = content[language]

  const getAvailabilityStatus = (current: number, max: number) => {
    const percentage = (current / max) * 100
    if (percentage >= 100) return "full"
    if (percentage >= 80) return "almostFull"
    return "available"
  }

  const getAvailabilityColor = (status: string) => {
    switch (status) {
      case "full":
        return "bg-red-500"
      case "almostFull":
        return "bg-yellow-500"
      default:
        return "bg-green-500"
    }
  }

  return (
    <section className="py-16 bg-gradient-to-b from-purple-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Calendar className="h-8 w-8 text-purple-600 animate-pulse" />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent">
              {t.title}
            </h2>
            <Calendar className="h-8 w-8 text-blue-600 animate-pulse" />
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {seminars.map((seminar) => {
            const availabilityStatus = getAvailabilityStatus(seminar.currentAttendees, seminar.maxAttendees)
            const isConfirmed = attendanceConfirmed.includes(seminar.id)

            return (
              <Card
                key={seminar.id}
                className="group hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-purple-100 hover:border-purple-300 bg-white/80 backdrop-blur-sm"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={seminar.image || "/placeholder.svg"}
                    alt={seminar.title[language]}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge
                      className={`${seminar.type === "online" ? "bg-blue-500" : "bg-green-500"} text-white shadow-lg`}
                    >
                      {seminar.type === "online" ? (
                        <>
                          <Video className="h-3 w-3 mr-1" /> {t.online}
                        </>
                      ) : (
                        <>
                          <MapPin className="h-3 w-3 mr-1" /> {t.offline}
                        </>
                      )}
                    </Badge>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge className={`${getAvailabilityColor(availabilityStatus)} text-white shadow-lg`}>
                      {t[availabilityStatus]}
                    </Badge>
                  </div>
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
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="h-4 w-4 text-purple-500" />
                      <span>{seminar.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="h-4 w-4 text-blue-500" />
                      <span>{seminar.time}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="line-clamp-1">{seminar.location[language]}</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <User className="h-4 w-4 text-indigo-500 flex-shrink-0" />
                    <span className="line-clamp-1">{seminar.speaker[language]}</span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users className="h-4 w-4 text-orange-500" />
                      <span>
                        {seminar.currentAttendees}/{seminar.maxAttendees}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500">
                      {Math.round((seminar.currentAttendees / seminar.maxAttendees) * 100)}%{" "}
                      {language === "ar" ? "ممتلئ" : "full"}
                    </div>
                  </div>

                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-300 ${getAvailabilityColor(availabilityStatus)}`}
                      style={{ width: `${(seminar.currentAttendees / seminar.maxAttendees) * 100}%` }}
                    ></div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 border-purple-200 hover:bg-purple-50 bg-transparent"
                        >
                          {t.viewDetails}
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle className="text-xl font-bold text-purple-700">{t.seminarDetails}</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <img
                            src={seminar.image || "/placeholder.svg"}
                            alt={seminar.title[language]}
                            className="w-full h-48 object-cover rounded-lg"
                          />
                          <h3 className="text-lg font-bold">{seminar.title[language]}</h3>
                          <p className="text-gray-600">{seminar.description[language]}</p>

                          <div className="grid grid-cols-2 gap-4 text-sm bg-gray-50 p-4 rounded-lg">
                            <div>
                              <span className="font-medium text-gray-700">{t.date}:</span>
                              <p>{seminar.date}</p>
                            </div>
                            <div>
                              <span className="font-medium text-gray-700">{t.time}:</span>
                              <p>{seminar.time}</p>
                            </div>
                            <div className="col-span-2">
                              <span className="font-medium text-gray-700">{t.location}:</span>
                              <p>{seminar.location[language]}</p>
                            </div>
                            <div className="col-span-2">
                              <span className="font-medium text-gray-700">{t.speaker}:</span>
                              <p>{seminar.speaker[language]}</p>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>

                    <Button
                      size="sm"
                      className={`flex-1 transition-all duration-300 ${
                        isConfirmed
                          ? "bg-green-600 hover:bg-green-700 text-white"
                          : "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105"
                      }`}
                      onClick={() => handleAttendanceConfirm(seminar.id)}
                      disabled={isConfirmed || availabilityStatus === "full"}
                    >
                      {isConfirmed ? (
                        <>
                          <CheckCircle className="h-4 w-4 mr-1" />
                          {t.confirmed}
                        </>
                      ) : (
                        <>
                          <Sparkles className="h-4 w-4 mr-1 animate-pulse" />
                          {t.confirmAttendance}
                        </>
                      )}
                    </Button>
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
