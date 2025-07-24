"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Clock, Target, TrendingUp } from "lucide-react"

interface EmergencyCampaignsProps {
  language: "ar" | "en"
}

export function EmergencyCampaigns({ language }: EmergencyCampaignsProps) {
  const emergencyCampaigns = [
    {
      id: 1,
      title: { ar: "إغاثة عاجلة لغزة", en: "Urgent Relief for Gaza" },
      description: {
        ar: "حملة طارئة لتوفير المساعدات الطبية والغذائية العاجلة لأهالي غزة",
        en: "Emergency campaign to provide urgent medical and food aid to Gaza residents",
      },
      targetAmount: 1000000,
      currentAmount: 750000,
      deadline: "2024-02-15",
      priority: "high",
      status: "active",
      daysLeft: 5,
    },
    {
      id: 2,
      title: { ar: "دعم المستشفيات الميدانية", en: "Field Hospital Support" },
      description: {
        ar: "توفير المعدات الطبية والأدوية للمستشفيات الميدانية",
        en: "Providing medical equipment and medicines for field hospitals",
      },
      targetAmount: 500000,
      currentAmount: 320000,
      deadline: "2024-02-20",
      priority: "high",
      status: "active",
      daysLeft: 10,
    },
    {
      id: 3,
      title: { ar: "مياه نظيفة للعائلات النازحة", en: "Clean Water for Displaced Families" },
      description: {
        ar: "توفير المياه النظيفة والآمنة للعائلات النازحة",
        en: "Providing clean and safe water for displaced families",
      },
      targetAmount: 300000,
      currentAmount: 180000,
      deadline: "2024-02-25",
      priority: "medium",
      status: "active",
      daysLeft: 15,
    },
  ]

  const content = {
    ar: {
      title: "الحملات الطارئة",
      subtitle: "حملات عاجلة تحتاج لدعمكم الفوري",
      donateNow: "تبرع الآن",
      target: "الهدف",
      raised: "تم جمعه",
      daysLeft: "يوم متبقي",
      progress: "التقدم",
      high: "عالية",
      medium: "متوسطة",
      low: "منخفضة",
      egp: "جنيه",
      viewAll: "عرض جميع الحملات الطارئة",
    },
    en: {
      title: "Emergency Campaigns",
      subtitle: "Urgent campaigns that need your immediate support",
      donateNow: "Donate Now",
      target: "Target",
      raised: "Raised",
      daysLeft: "days left",
      progress: "Progress",
      high: "High",
      medium: "Medium",
      low: "Low",
      egp: "EGP",
      viewAll: "View All Emergency Campaigns",
    },
  }

  const t = content[language]

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 border-red-200"
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "low":
        return "bg-green-100 text-green-800 border-green-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getProgressColor = (percentage: number) => {
    if (percentage >= 80) return "bg-green-600"
    if (percentage >= 50) return "bg-yellow-600"
    return "bg-red-600"
  }

  return (
    <section className="py-12 bg-gradient-to-b from-red-50 to-white" dir={language === "ar" ? "rtl" : "ltr"}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <AlertTriangle className="h-8 w-8 text-red-600" />
            <h2 className="text-4xl font-bold text-red-800">{t.title}</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {emergencyCampaigns.map((campaign) => {
            const progressPercentage = (campaign.currentAmount / campaign.targetAmount) * 100
            return (
              <Card key={campaign.id} className="border-l-4 border-l-red-500 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge className={`${getPriorityColor(campaign.priority)} border`}>{t[campaign.priority]}</Badge>
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>
                        {campaign.daysLeft} {t.daysLeft}
                      </span>
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight">{campaign.title[language]}</CardTitle>
                  <CardDescription className="text-sm">{campaign.description[language]}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Progress Bar */}
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="font-medium">{t.progress}</span>
                        <span className="font-bold">{Math.round(progressPercentage)}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className={`h-3 rounded-full transition-all ${getProgressColor(progressPercentage)}`}
                          style={{ width: `${progressPercentage}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Amount Info */}
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center justify-center gap-1 mb-1">
                          <Target className="h-4 w-4 text-gray-600" />
                          <span className="font-medium text-gray-600">{t.target}</span>
                        </div>
                        <p className="font-bold text-lg">{campaign.targetAmount.toLocaleString()}</p>
                        <p className="text-xs text-gray-500">{t.egp}</p>
                      </div>
                      <div className="text-center p-3 bg-green-50 rounded-lg">
                        <div className="flex items-center justify-center gap-1 mb-1">
                          <TrendingUp className="h-4 w-4 text-green-600" />
                          <span className="font-medium text-green-600">{t.raised}</span>
                        </div>
                        <p className="font-bold text-lg text-green-700">{campaign.currentAmount.toLocaleString()}</p>
                        <p className="text-xs text-gray-500">{t.egp}</p>
                      </div>
                    </div>

                    {/* Donate Button */}
                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white">{t.donateNow}</Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="border-red-500 text-red-600 hover:bg-red-50 bg-transparent">
            {t.viewAll}
          </Button>
        </div>
      </div>
    </section>
  )
}
