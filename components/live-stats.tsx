"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, Users, Building2, Heart, MapPin, Clock } from "lucide-react"

interface LiveStatsProps {
  language: "ar" | "en"
}

export function LiveStats({ language }: LiveStatsProps) {
  const [stats, setStats] = useState({
    todayDonations: 8750000,
    totalParticipants: 2500000,
    businessPartners: 15000,
    totalRaised: 45230000,
    dailyGoal: 10000000,
  })

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) => ({
        ...prev,
        todayDonations: prev.todayDonations + Math.floor(Math.random() * 100),
        totalParticipants: prev.totalParticipants + Math.floor(Math.random() * 10),
        totalRaised: prev.totalRaised + Math.floor(Math.random() * 100),
      }))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const content = {
    ar: {
      todayDonations: "تبرعات اليوم",
      totalParticipants: "إجمالي المشاركين",
      businessPartners: "الشركاء التجاريين",
      totalRaised: "إجمالي المبلغ المجمع",
      dailyProgress: "تقدم اليوم",
      governorates: "المحافظات المشاركة",
      lastUpdate: "آخر تحديث",
      egp: "جنيه مصري",
      participant: "مشارك",
      partner: "شريك",
      topGovernorates: [
        { name: "القاهرة", amount: 2500000 },
        { name: "الجيزة", amount: 1800000 },
        { name: "الإسكندرية", amount: 1200000 },
        { name: "الشرقية", amount: 800000 },
      ],
    },
    en: {
      todayDonations: "Today's Donations",
      totalParticipants: "Total Participants",
      businessPartners: "Business Partners",
      totalRaised: "Total Amount Raised",
      dailyProgress: "Today's Progress",
      governorates: "Participating Governorates",
      lastUpdate: "Last Updated",
      egp: "EGP",
      participant: "Participant",
      partner: "Partner",
      topGovernorates: [
        { name: "Cairo", amount: 2500000 },
        { name: "Giza", amount: 1800000 },
        { name: "Alexandria", amount: 1200000 },
        { name: "Sharqia", amount: 800000 },
      ],
    },
  }

  const t = content[language]
  const progressPercentage = (stats.todayDonations / stats.dailyGoal) * 100

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat(language === "ar" ? "ar-EG" : "en-US").format(num)
  }

  return (
    <div className="space-y-8">
      {/* Main Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-green-700 flex items-center gap-2">
              <Heart className="h-4 w-4" />
              {t.todayDonations}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-800">{formatNumber(stats.todayDonations)}</div>
            <p className="text-xs text-green-600">{t.egp}</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-blue-700 flex items-center gap-2">
              <Users className="h-4 w-4" />
              {t.totalParticipants}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-800">{formatNumber(stats.totalParticipants)}</div>
            <p className="text-xs text-blue-600">{t.participant}</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-purple-700 flex items-center gap-2">
              <Building2 className="h-4 w-4" />
              {t.businessPartners}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-800">{formatNumber(stats.businessPartners)}</div>
            <p className="text-xs text-purple-600">{t.partner}</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-red-700 flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              {t.totalRaised}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-800">{formatNumber(stats.totalRaised)}</div>
            <p className="text-xs text-red-600">{t.egp}</p>
          </CardContent>
        </Card>
      </div>

      {/* Daily Progress */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-green-600" />
            {t.dailyProgress}
          </CardTitle>
          <CardDescription>
            {formatNumber(stats.todayDonations)} / {formatNumber(stats.dailyGoal)} {t.egp}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Progress value={progressPercentage} className="h-3 mb-2" />
          <div className="flex justify-between text-sm text-gray-600">
            <span>{Math.round(progressPercentage)}%</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {t.lastUpdate}: {new Date().toLocaleTimeString(language === "ar" ? "ar-EG" : "en-US")}
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Top Governorates */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-blue-600" />
            {t.governorates}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {t.topGovernorates.map((gov, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-sm font-bold text-blue-600">
                    {index + 1}
                  </div>
                  <span className="font-medium">{gov.name}</span>
                </div>
                <div className="text-right">
                  <div className="font-bold">{formatNumber(gov.amount)}</div>
                  <div className="text-xs text-gray-500">{t.egp}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
