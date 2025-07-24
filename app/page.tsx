"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, Globe, Phone, QrCode, Settings, Sparkles, Star } from "lucide-react"
import { HeroSection } from "@/components/hero-section"
import { DonationCategories } from "@/components/donation-categories"
import { PartnerSection } from "@/components/partner-section"
import { ServicePartnersSection } from "@/components/service-partners-section"
import { LiveStats } from "@/components/live-stats"
import { LanguageToggle } from "@/components/language-toggle"
import { MessageSection } from "@/components/message-section"
import { EmergencyCampaigns } from "@/components/emergency-campaigns"
import { SupportCategories } from "@/components/support-categories"
import { SeminarsSection } from "@/components/seminars-section"
import { AdminDashboard } from "@/components/admin-dashboard"
import { JoinPage } from "@/components/join-page"
import { PaymentPage } from "@/components/payment-page"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export default function HomePage() {
  const [language, setLanguage] = useState<"ar" | "en">("ar")
  const [currentPage, setCurrentPage] = useState<"home" | "join" | "payment" | "admin">("home")
  const [showAdmin, setShowAdmin] = useState(false)
  const [adminCode, setAdminCode] = useState("")
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false)

  const handleAdminAccess = () => {
    if (adminCode === "2020") {
      setIsAdminAuthenticated(true)
      setShowAdmin(true)
      setAdminCode("")
    } else {
      alert(language === "ar" ? "رمز الإدارة غير صحيح" : "Invalid admin code")
    }
  }

  const handleDonateNow = () => {
    setCurrentPage("join")
  }

  const content = {
    ar: {
      title: "جنيه واحد لفلسطين",
      subtitle: "لسنا عاجزين... كل جنيه وقفة مع فلسطين",
      apologyText: "آسفين خذلناكم",
      joinCampaign: "انضم للحملة",
      howItWorks: "كيف تعمل الحملة",
      becomePartner: "كن شريكاً",
      servicePartners: "شركاء الخدمات المجانية",
      liveStats: "الإحصائيات المباشرة",
      emergencyCampaigns: "الحملات الطارئة",
      supportCategories: "فئات الدعم",
      seminarsSection: "الندوات والفعاليات",
      donateNow: "تبرع الآن",
      joinAsPartner: "انضم كشريك",
      adminAccess: "دخول الإدارة",
      adminCode: "رمز الإدارة",
      enterAdminCode: "أدخل رمز الإدارة",
      login: "دخول",
    },
    en: {
      title: "One Pound for Palestine",
      subtitle: "We are not helpless... Every Pound is a Stand for Palestine",
      apologyText: "Sorry, we let you down",
      joinCampaign: "Join the Campaign",
      howItWorks: "How It Works",
      becomePartner: "Become a Partner",
      servicePartners: "Free Service Partners",
      liveStats: "Live Statistics",
      emergencyCampaigns: "Emergency Campaigns",
      supportCategories: "Support Categories",
      seminarsSection: "Seminars & Events",
      donateNow: "Donate Now",
      joinAsPartner: "Join as Partner",
      adminAccess: "Admin Access",
      adminCode: "Admin Code",
      enterAdminCode: "Enter admin code",
      login: "Login",
    },
  }

  const t = content[language]

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-red-50 relative overflow-hidden"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      {/* Background decorative elements */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-green-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-red-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-500 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Header */}
      <header className="border-b bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Heart className="h-10 w-10 text-red-600 animate-pulse" />
              <Sparkles className="h-4 w-4 text-yellow-500 absolute -top-1 -right-1 animate-spin" />
            </div>
            <button onClick={() => setCurrentPage("home")}>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-green-700 to-red-600 bg-clip-text text-transparent cursor-pointer hover:scale-105 transition-transform">
                {t.title}
              </h1>
            </button>
          </div>
          <div className="flex items-center gap-4">
            <LanguageToggle language={language} onLanguageChange={setLanguage} />
            <Button
              onClick={() => setCurrentPage("join")}
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              <Heart className="mr-2 h-4 w-4 animate-pulse" />
              {t.joinCampaign}
            </Button>
            {/* Admin Button */}
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="p-2 bg-white/80 backdrop-blur-sm border-2 border-gray-200 hover:bg-gray-50 shadow-md"
                >
                  <Settings className="h-4 w-4" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-sm">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5 text-gray-600" />
                    {t.adminAccess}
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label>{t.adminCode}</Label>
                    <Input
                      type="password"
                      value={adminCode}
                      onChange={(e) => setAdminCode(e.target.value)}
                      placeholder={t.enterAdminCode}
                      className="border-gray-300 focus:border-blue-500"
                    />
                  </div>
                  <Button
                    onClick={handleAdminAccess}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                  >
                    {t.login}
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </header>

      {/* Apology Banner */}
      <div className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white py-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-6xl md:text-8xl font-bold animate-pulse drop-shadow-2xl">{t.apologyText}</h2>
          <div className="mt-4 flex justify-center">
            <div className="w-32 h-1 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Conditional Page Rendering */}
      {currentPage === "home" && (
        <>
          {/* Emotional Message Section */}
          <MessageSection language={language} />

          {/* Hero Section */}
          <HeroSection language={language} />

          {/* Emergency Campaigns */}
          <EmergencyCampaigns language={language} />

          {/* Support Categories */}
          <SupportCategories language={language} />

          {/* Seminars Section */}
          <SeminarsSection language={language} />

          {/* Service Partners Section */}
          <ServicePartnersSection language={language} />

          {/* Live Stats */}
          <section className="py-16 bg-gradient-to-b from-white to-green-50 relative">
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-10 left-10 w-32 h-32 bg-green-500 rounded-full blur-2xl"></div>
              <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500 rounded-full blur-2xl"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Sparkles className="h-8 w-8 text-green-600 animate-pulse" />
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-green-700 to-blue-700 bg-clip-text text-transparent">
                    {t.liveStats}
                  </h2>
                  <Sparkles className="h-8 w-8 text-blue-600 animate-pulse" />
                </div>
              </div>
              <LiveStats language={language} />
            </div>
          </section>

          {/* How It Works */}
          <section className="py-16 bg-gradient-to-b from-green-50 to-white relative">
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-20 right-20 w-48 h-48 bg-green-500 rounded-full blur-3xl"></div>
              <div className="absolute bottom-20 left-20 w-36 h-36 bg-yellow-500 rounded-full blur-2xl"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Star className="h-8 w-8 text-green-600 animate-pulse" />
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-green-700 to-yellow-600 bg-clip-text text-transparent">
                    {t.howItWorks}
                  </h2>
                  <Star className="h-8 w-8 text-yellow-600 animate-pulse" />
                </div>
              </div>
              <DonationCategories language={language} />
            </div>
          </section>

          {/* Partner Section */}
          <section className="py-16 bg-gradient-to-b from-white to-blue-50 relative">
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-10 left-1/4 w-40 h-40 bg-blue-500 rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 right-1/4 w-32 h-32 bg-purple-500 rounded-full blur-2xl"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Users className="h-8 w-8 text-blue-600 animate-pulse" />
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">
                    {t.becomePartner}
                  </h2>
                  <Users className="h-8 w-8 text-purple-600 animate-pulse" />
                </div>
              </div>
              <PartnerSection language={language} />
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-20 bg-gradient-to-r from-green-600 via-red-600 to-black text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-500 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white rounded-full blur-3xl animate-pulse"></div>
            </div>
            <div className="container mx-auto px-4 text-center relative z-10">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Sparkles className="h-10 w-10 text-yellow-300 animate-spin" />
                <h2 className="text-5xl font-bold">
                  {language === "ar"
                    ? "تخيل لو 10 مليون مصري تبرعوا بجنيه واحد يومياً"
                    : "Imagine if 10 million Egyptians donate 1 pound daily"}
                </h2>
                <Sparkles className="h-10 w-10 text-yellow-300 animate-spin" />
              </div>
              <p className="text-2xl mb-10 opacity-90 font-medium">
                {language === "ar"
                  ? "هذا يعني 10 مليون جنيه كل يوم لدعم فلسطين"
                  : "That means 10 million pounds every day to support Palestine"}
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-green-600 hover:bg-gray-100 shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 text-lg px-8 py-4"
                  onClick={handleDonateNow}
                >
                  <Heart className="mr-3 h-6 w-6 animate-pulse" />
                  {t.donateNow}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-green-600 bg-transparent shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 text-lg px-8 py-4"
                >
                  <Users className="mr-3 h-6 w-6" />
                  {t.joinAsPartner}
                </Button>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-16 relative">
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-10 left-10 w-32 h-32 bg-green-500 rounded-full blur-2xl"></div>
              <div className="absolute bottom-10 right-10 w-40 h-40 bg-red-500 rounded-full blur-3xl"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <Heart className="h-8 w-8 text-red-600 animate-pulse" />
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-red-400 bg-clip-text text-transparent">
                      {t.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {language === "ar"
                      ? "حملة تضامنية لدعم فلسطين من خلال التبرعات اليومية الصغيرة"
                      : "A solidarity campaign to support Palestine through small daily donations"}
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-6 text-xl text-green-400">
                    {language === "ar" ? "طرق التبرع" : "Donation Methods"}
                  </h4>
                  <div className="space-y-3 text-gray-300">
                    <div className="flex items-center gap-3 hover:text-white transition-colors">
                      <Phone className="h-5 w-5 text-green-400" />
                      <span className="text-lg">{language === "ar" ? "رصيد الهاتف" : "Phone Credit"}</span>
                    </div>
                    <div className="flex items-center gap-3 hover:text-white transition-colors">
                      <QrCode className="h-5 w-5 text-green-400" />
                      <span className="text-lg">{language === "ar" ? "كود QR" : "QR Code"}</span>
                    </div>
                    <div className="flex items-center gap-3 hover:text-white transition-colors">
                      <Globe className="h-5 w-5 text-green-400" />
                      <span className="text-lg">{language === "ar" ? "تحويل بنكي" : "Bank Transfer"}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold mb-6 text-xl text-red-400">
                    {language === "ar" ? "تواصل معنا" : "Contact Us"}
                  </h4>
                  <div className="space-y-3 text-gray-300">
                    <p className="text-lg hover:text-white transition-colors cursor-pointer">
                      info@onepoundpalestine.org
                    </p>
                    <p className="text-lg hover:text-white transition-colors cursor-pointer">+20 100 000 0000</p>
                    <div className="flex gap-4 mt-6">
                      <Badge
                        variant="secondary"
                        className="bg-blue-600 text-white hover:bg-blue-700 cursor-pointer transition-colors px-4 py-2"
                      >
                        Facebook
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="bg-sky-500 text-white hover:bg-sky-600 cursor-pointer transition-colors px-4 py-2"
                      >
                        Twitter
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="bg-pink-600 text-white hover:bg-pink-700 cursor-pointer transition-colors px-4 py-2"
                      >
                        Instagram
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-700 mt-12 pt-8 text-center">
                <p className="text-gray-400 text-lg">
                  {language === "ar"
                    ? "© 2024 جنيه واحد لفلسطين. جميع الحقوق محفوظة."
                    : "© 2024 One Pound for Palestine. All rights reserved."}
                </p>
              </div>
            </div>
          </footer>
        </>
      )}

      {currentPage === "join" && (
        <JoinPage
          language={language}
          onBack={() => setCurrentPage("home")}
          onProceedToPayment={() => setCurrentPage("payment")}
        />
      )}

      {currentPage === "payment" && (
        <PaymentPage
          language={language}
          onBack={() => setCurrentPage("join")}
          onComplete={() => setCurrentPage("home")}
        />
      )}

      {/* Admin Dashboard */}
      {showAdmin && isAdminAuthenticated && (
        <AdminDashboard
          language={language}
          onClose={() => {
            setShowAdmin(false)
            setIsAdminAuthenticated(false)
          }}
        />
      )}
    </div>
  )
}
