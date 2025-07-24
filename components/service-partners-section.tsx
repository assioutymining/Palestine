"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog"
import {
  CheckCircle,
  Printer,
  Palette,
  Megaphone,
  Code,
  Smartphone,
  PenTool,
  Edit,
  Clock,
  User,
  Heart,
  Plus,
  MessageCircle,
  FileText,
  Sparkles,
  Star,
  Phone,
  Mail,
  Globe,
} from "lucide-react"

interface ServicePartnersSectionProps {
  language: "ar" | "en"
}

export function ServicePartnersSection({ language }: ServicePartnersSectionProps) {
  const [activeTab, setActiveTab] = useState<"partners" | "requests">("partners")
  const [newPartnerForm, setNewPartnerForm] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    skills: "",
    portfolio: "",
    availability: "",
  })

  const content = {
    ar: {
      title: "شركاء الخدمات المجانية",
      subtitle: "انضم كشريك لتقديم خدماتك المهنية مجاناً لدعم الحملة",
      partnersTab: "الشركاء المتاحون",
      requestsTab: "طلبات العمل",
      joinAsPartner: "انضم كشريك خدمات",
      submitRequest: "اطلب خدمة",
      serviceTypes: {
        printing: "خدمات الطباعة والنشر",
        design: "التصميم الجرافيكي",
        advertising: "الإعلان والتسويق",
        programming: "البرمجة والتطوير",
        mobile: "تطوير التطبيقات",
        content: "كتابة المحتوى",
        blogging: "التدوين والنشر",
      },
      form: {
        name: "الاسم الكامل",
        email: "البريد الإلكتروني",
        phone: "رقم الهاتف",
        serviceType: "نوع الخدمة",
        skills: "المهارات والخبرات",
        portfolio: "رابط أعمال سابقة",
        availability: "الوقت المتاح",
        title: "عنوان الطلب",
        description: "وصف تفصيلي للمطلوب",
        deadline: "الموعد النهائي",
        priority: "الأولوية",
      },
      status: {
        available: "متاح",
        busy: "مشغول",
        pending: "في الانتظار",
        inProgress: "قيد التنفيذ",
        completed: "مكتمل",
      },
      priority: {
        high: "عالية",
        medium: "متوسطة",
        low: "منخفضة",
      },
      acceptRequest: "قبول الطلب",
      viewProfile: "عرض الملف الشخصي",
      contactPartner: "تواصل مع الشريك",
      donateService: "تبرع بالخدمة",
      servicesOffered: "الخدمات المقدمة",
      activeRequests: "الطلبات النشطة",
      completedProjects: "المشاريع المكتملة",
      requestService: "طلب خدمة",
      yesIDonate: "نعم، أريد التبرع",
      cancel: "إلغاء",
      close: "إغلاق",
      donationSuccess: "تم التسجيل بنجاح!",
      thankYouDonation: "شكراً لك على رغبتك في التبرع بخدماتك",
      contactSuccess: "تم إرسال رسالة التواصل!",
      thankYouContact: "سيتم التواصل معك قريباً",
      requestSuccess: "تم إرسال طلب الخدمة!",
      thankYouRequest: "سيتم مراجعة طلبك والرد عليك قريباً",
    },
    en: {
      title: "Free Service Partners",
      subtitle: "Join as a partner to provide your professional services for free to support the campaign",
      partnersTab: "Available Partners",
      requestsTab: "Work Requests",
      joinAsPartner: "Join as Service Partner",
      submitRequest: "Request Service",
      serviceTypes: {
        printing: "Printing & Publishing Services",
        design: "Graphic Design",
        advertising: "Advertising & Marketing",
        programming: "Programming & Development",
        mobile: "Mobile App Development",
        content: "Content Writing",
        blogging: "Blogging & Publishing",
      },
      form: {
        name: "Full Name",
        email: "Email Address",
        phone: "Phone Number",
        serviceType: "Service Type",
        skills: "Skills & Experience",
        portfolio: "Portfolio Link",
        availability: "Available Time",
        title: "Request Title",
        description: "Detailed Description",
        deadline: "Deadline",
        priority: "Priority",
      },
      status: {
        available: "Available",
        busy: "Busy",
        pending: "Pending",
        inProgress: "In Progress",
        completed: "Completed",
      },
      priority: {
        high: "High",
        medium: "Medium",
        low: "Low",
      },
      acceptRequest: "Accept Request",
      viewProfile: "View Profile",
      contactPartner: "Contact Partner",
      donateService: "Donate Service",
      servicesOffered: "Services Offered",
      activeRequests: "Active Requests",
      completedProjects: "Completed Projects",
      requestService: "Request Service",
      yesIDonate: "Yes, I want to donate",
      cancel: "Cancel",
      close: "Close",
      donationSuccess: "Registration Successful!",
      thankYouDonation: "Thank you for wanting to donate your services",
      contactSuccess: "Contact message sent!",
      thankYouContact: "We will contact you soon",
      requestSuccess: "Service request sent!",
      thankYouRequest: "Your request will be reviewed and we will respond soon",
    },
  }

  const t = content[language]

  const servicePartners = [
    {
      id: 1,
      name: "أحمد محمد - مطبعة النور",
      serviceType: "printing",
      skills: "طباعة البوسترات، البروشورات، اللافتات الإعلانية",
      status: "available",
      completedProjects: 15,
      rating: 4.8,
      portfolio: "https://example.com/portfolio1",
      phone: "+20 100 123 4567",
      email: "ahmed@example.com",
    },
    {
      id: 2,
      name: "فاطمة علي - مصممة جرافيك",
      serviceType: "design",
      skills: "تصميم الهوية البصرية، البوسترات، وسائل التواصل الاجتماعي",
      status: "busy",
      completedProjects: 23,
      rating: 4.9,
      portfolio: "https://example.com/portfolio2",
      phone: "+20 101 234 5678",
      email: "fatma@example.com",
    },
    {
      id: 3,
      name: "محمود حسن - مطور ويب",
      serviceType: "programming",
      skills: "تطوير المواقع، تطبيقات الويب، قواعد البيانات",
      status: "available",
      completedProjects: 8,
      rating: 4.7,
      portfolio: "https://example.com/portfolio3",
      phone: "+20 102 345 6789",
      email: "mahmoud@example.com",
    },
    {
      id: 4,
      name: "نورا أحمد - كاتبة محتوى",
      serviceType: "content",
      skills: "كتابة المقالات، المحتوى التسويقي، السوشيال ميديا",
      status: "available",
      completedProjects: 31,
      rating: 4.8,
      portfolio: "https://example.com/portfolio4",
      phone: "+20 103 456 7890",
      email: "nora@example.com",
    },
    {
      id: 5,
      name: "خالد عبدالله - مسوق رقمي",
      serviceType: "advertising",
      skills: "إدارة الحملات الإعلانية، السوشيال ميديا، التسويق الرقمي",
      status: "available",
      completedProjects: 19,
      rating: 4.6,
      portfolio: "https://example.com/portfolio5",
      phone: "+20 104 567 8901",
      email: "khaled@example.com",
    },
  ]

  const workRequests = [
    {
      id: 1,
      title: "تصميم بوستر إعلاني للحملة الطارئة",
      description: "نحتاج تصميم بوستر جذاب للحملة الطارئة لدعم غزة، يتضمن الألوان الفلسطينية والمعلومات الأساسية",
      serviceType: "design",
      deadline: "2024-02-10",
      priority: "high",
      status: "pending",
      createdAt: "2024-02-05",
    },
    {
      id: 2,
      title: "طباعة 1000 بروشور للحملة",
      description: "طباعة بروشورات تعريفية بالحملة لتوزيعها في المناطق المختلفة",
      serviceType: "printing",
      deadline: "2024-02-15",
      priority: "medium",
      status: "inProgress",
      assignedTo: "أحمد محمد - مطبعة النور",
      createdAt: "2024-02-03",
    },
    {
      id: 3,
      title: "كتابة محتوى لموقع الحملة",
      description: "كتابة محتوى تعريفي بأهداف الحملة وطرق المشاركة باللغتين العربية والإنجليزية",
      serviceType: "content",
      deadline: "2024-02-12",
      priority: "medium",
      status: "pending",
      createdAt: "2024-02-04",
    },
    {
      id: 4,
      title: "تطوير تطبيق موبايل للتبرعات",
      description: "تطوير تطبيق بسيط للهواتف الذكية لتسهيل عملية التبرع والمتابعة",
      serviceType: "mobile",
      deadline: "2024-03-01",
      priority: "high",
      status: "pending",
      createdAt: "2024-02-01",
    },
  ]

  const getServiceIcon = (serviceType: string) => {
    const icons = {
      printing: Printer,
      design: Palette,
      advertising: Megaphone,
      programming: Code,
      mobile: Smartphone,
      content: PenTool,
      blogging: Edit,
    }
    return icons[serviceType] || Code
  }

  const getStatusColor = (status: string) => {
    const colors = {
      available: "bg-green-100 text-green-800 border-green-200",
      busy: "bg-red-100 text-red-800 border-red-200",
      pending: "bg-yellow-100 text-yellow-800 border-yellow-200",
      inProgress: "bg-blue-100 text-blue-800 border-blue-200",
      completed: "bg-gray-100 text-gray-800 border-gray-200",
    }
    return colors[status] || colors.pending
  }

  const getPriorityColor = (priority: string) => {
    const colors = {
      high: "bg-red-100 text-red-800 border-red-200",
      medium: "bg-yellow-100 text-yellow-800 border-yellow-200",
      low: "bg-green-100 text-green-800 border-green-200",
    }
    return colors[priority] || colors.medium
  }

  const handleSubmitPartner = () => {
    console.log("New partner:", newPartnerForm)
    setNewPartnerForm({
      name: "",
      email: "",
      phone: "",
      serviceType: "",
      skills: "",
      portfolio: "",
      availability: "",
    })
  }

  return (
    <section
      className="py-16 bg-gradient-to-b from-purple-50 via-white to-pink-50 relative overflow-hidden"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-pink-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-10 w-32 h-32 bg-indigo-500 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-8 w-8 text-purple-600 animate-pulse" />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-transparent">
              {t.title}
            </h2>
            <Sparkles className="h-8 w-8 text-pink-600 animate-pulse" />
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">{t.subtitle}</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-1 shadow-lg border">
            <button
              onClick={() => setActiveTab("partners")}
              className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === "partners"
                  ? "bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg transform scale-105"
                  : "text-gray-600 hover:text-purple-600 hover:bg-purple-50"
              }`}
            >
              {t.partnersTab}
            </button>
            <button
              onClick={() => setActiveTab("requests")}
              className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === "requests"
                  ? "bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg transform scale-105"
                  : "text-gray-600 hover:text-purple-600 hover:bg-purple-50"
              }`}
            >
              {t.requestsTab}
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                <Plus className="h-4 w-4 mr-2" />
                {t.joinAsPartner}
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-purple-600" />
                  {t.joinAsPartner}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>{t.form.name}</Label>
                    <Input
                      value={newPartnerForm.name}
                      onChange={(e) => setNewPartnerForm({ ...newPartnerForm, name: e.target.value })}
                      className="border-purple-200 focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <Label>{t.form.email}</Label>
                    <Input
                      type="email"
                      value={newPartnerForm.email}
                      onChange={(e) => setNewPartnerForm({ ...newPartnerForm, email: e.target.value })}
                      className="border-purple-200 focus:border-purple-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>{t.form.phone}</Label>
                    <Input
                      value={newPartnerForm.phone}
                      onChange={(e) => setNewPartnerForm({ ...newPartnerForm, phone: e.target.value })}
                      className="border-purple-200 focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <Label>{t.form.serviceType}</Label>
                    <Select onValueChange={(value) => setNewPartnerForm({ ...newPartnerForm, serviceType: value })}>
                      <SelectTrigger className="border-purple-200 focus:border-purple-500">
                        <SelectValue placeholder={t.form.serviceType} />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(t.serviceTypes).map(([key, value]) => (
                          <SelectItem key={key} value={key}>
                            {value}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label>{t.form.skills}</Label>
                  <Textarea
                    value={newPartnerForm.skills}
                    onChange={(e) => setNewPartnerForm({ ...newPartnerForm, skills: e.target.value })}
                    rows={3}
                    className="border-purple-200 focus:border-purple-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>{t.form.portfolio}</Label>
                    <Input
                      value={newPartnerForm.portfolio}
                      onChange={(e) => setNewPartnerForm({ ...newPartnerForm, portfolio: e.target.value })}
                      placeholder="https://..."
                      className="border-purple-200 focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <Label>{t.form.availability}</Label>
                    <Input
                      value={newPartnerForm.availability}
                      onChange={(e) => setNewPartnerForm({ ...newPartnerForm, availability: e.target.value })}
                      placeholder={language === "ar" ? "مثال: 10 ساعات أسبوعياً" : "e.g., 10 hours/week"}
                      className="border-purple-200 focus:border-purple-500"
                    />
                  </div>
                </div>

                <Button
                  onClick={handleSubmitPartner}
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800"
                >
                  {t.joinAsPartner}
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Content */}
        {activeTab === "partners" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicePartners.map((partner) => {
              const IconComponent = getServiceIcon(partner.serviceType)
              return (
                <Card
                  key={partner.id}
                  className="border-l-4 border-l-purple-500 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-white to-purple-50 shadow-lg"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl shadow-lg">
                          <IconComponent className="h-8 w-8 text-purple-600" />
                        </div>
                        <div>
                          <CardTitle className="text-lg font-bold">{partner.name}</CardTitle>
                          <CardDescription className="font-medium">
                            {t.serviceTypes[partner.serviceType]}
                          </CardDescription>
                        </div>
                      </div>
                      <Badge className={`${getStatusColor(partner.status)} border font-semibold`}>
                        {t.status[partner.status]}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm text-gray-700 mb-2">{t.servicesOffered}:</h4>
                        <p className="text-sm text-gray-600 bg-white/80 p-3 rounded-lg">{partner.skills}</p>
                      </div>

                      <div className="flex justify-between text-sm bg-white/80 p-3 rounded-lg">
                        <div>
                          <span className="font-semibold">{t.completedProjects}:</span>
                          <span className="ml-1 text-purple-600 font-bold">{partner.completedProjects}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <span className="font-bold text-yellow-600">{partner.rating}</span>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        {/* Donate Service Button */}
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              size="sm"
                              className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 shadow-md hover:shadow-lg transform hover:scale-105 transition-all"
                            >
                              <Heart className="h-3 w-3 mr-1" />
                              {t.donateService}
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-lg">
                            <DialogHeader>
                              <DialogTitle className="flex items-center gap-2">
                                <Heart className="h-5 w-5 text-purple-600" />
                                {t.donateService}
                              </DialogTitle>
                            </DialogHeader>
                            <div className="space-y-4">
                              <div className="bg-purple-50 p-4 rounded-lg">
                                <p className="text-gray-700 font-medium">
                                  {language === "ar"
                                    ? `هل تريد التبرع بخدماتك لدعم الحملة؟ سيتم إشعارك بالطلبات المتاحة في مجال ${t.serviceTypes[partner.serviceType]}`
                                    : `Do you want to donate your services to support the campaign? You will be notified of available requests in ${t.serviceTypes[partner.serviceType]}`}
                                </p>
                              </div>
                              <div className="flex gap-2">
                                <Dialog>
                                  <DialogTrigger asChild>
                                    <Button className="flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800">
                                      <CheckCircle className="mr-2 h-4 w-4" />
                                      {t.yesIDonate}
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
                                      <p className="text-gray-600">{t.thankYouDonation}</p>
                                      <div className="bg-green-50 p-4 rounded-lg">
                                        <p className="text-green-800 font-semibold">
                                          {t.serviceTypes[partner.serviceType]}
                                        </p>
                                      </div>
                                      <DialogClose asChild>
                                        <Button className="w-full bg-green-600 hover:bg-green-700">{t.close}</Button>
                                      </DialogClose>
                                    </div>
                                  </DialogContent>
                                </Dialog>
                                <DialogClose asChild>
                                  <Button variant="outline" className="flex-1 bg-transparent">
                                    {t.cancel}
                                  </Button>
                                </DialogClose>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>

                        {/* View Profile Button */}
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              size="sm"
                              variant="outline"
                              className="flex-1 bg-white/80 backdrop-blur-sm border-2 border-purple-200 hover:bg-purple-50 shadow-md"
                            >
                              <User className="h-3 w-3 mr-1" />
                              {t.viewProfile}
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl">
                            <DialogHeader>
                              <DialogTitle className="flex items-center gap-2">
                                <IconComponent className="h-6 w-6 text-purple-600" />
                                {partner.name}
                              </DialogTitle>
                            </DialogHeader>
                            <div className="space-y-6">
                              <div className="flex items-center gap-4 bg-purple-50 p-4 rounded-lg">
                                <div className="p-4 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl shadow-lg">
                                  <IconComponent className="h-12 w-12 text-purple-600" />
                                </div>
                                <div className="flex-1">
                                  <h3 className="text-2xl font-bold text-purple-800">{partner.name}</h3>
                                  <p className="text-purple-600 font-medium">{t.serviceTypes[partner.serviceType]}</p>
                                  <div className="flex items-center gap-2 mt-2">
                                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                                    <span className="font-bold text-yellow-600">{partner.rating}</span>
                                    <span className="text-gray-500">
                                      ({partner.completedProjects} {t.completedProjects})
                                    </span>
                                  </div>
                                </div>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-gray-50 p-4 rounded-lg">
                                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                                    <PenTool className="h-4 w-4 text-purple-600" />
                                    {t.servicesOffered}:
                                  </h4>
                                  <p className="text-gray-600">{partner.skills}</p>
                                </div>

                                <div className="bg-gray-50 p-4 rounded-lg">
                                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                                    <Globe className="h-4 w-4 text-purple-600" />
                                    {language === "ar" ? "أعمال سابقة" : "Portfolio"}:
                                  </h4>
                                  <a
                                    href={partner.portfolio}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-purple-600 hover:underline font-medium"
                                  >
                                    {partner.portfolio}
                                  </a>
                                </div>

                                <div className="bg-gray-50 p-4 rounded-lg">
                                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                                    <Phone className="h-4 w-4 text-purple-600" />
                                    {language === "ar" ? "رقم الهاتف" : "Phone"}:
                                  </h4>
                                  <p className="text-gray-600 font-medium">{partner.phone}</p>
                                </div>

                                <div className="bg-gray-50 p-4 rounded-lg">
                                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                                    <Mail className="h-4 w-4 text-purple-600" />
                                    {language === "ar" ? "البريد الإلكتروني" : "Email"}:
                                  </h4>
                                  <p className="text-gray-600 font-medium">{partner.email}</p>
                                </div>
                              </div>

                              <div className="flex gap-3">
                                {/* Contact Partner Button */}
                                <Dialog>
                                  <DialogTrigger asChild>
                                    <Button className="flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800">
                                      <MessageCircle className="mr-2 h-4 w-4" />
                                      {t.contactPartner}
                                    </Button>
                                  </DialogTrigger>
                                  <DialogContent className="max-w-sm">
                                    <DialogHeader>
                                      <DialogTitle className="text-center text-green-700">
                                        <MessageCircle className="h-8 w-8 mx-auto mb-2 text-green-600" />
                                        {t.contactSuccess}
                                      </DialogTitle>
                                    </DialogHeader>
                                    <div className="text-center space-y-4">
                                      <p className="text-gray-600">{t.thankYouContact}</p>
                                      <div className="bg-green-50 p-4 rounded-lg">
                                        <p className="text-green-800 font-semibold">{partner.name}</p>
                                        <p className="text-green-600 text-sm">{partner.phone}</p>
                                      </div>
                                      <DialogClose asChild>
                                        <Button className="w-full bg-green-600 hover:bg-green-700">{t.close}</Button>
                                      </DialogClose>
                                    </div>
                                  </DialogContent>
                                </Dialog>

                                {/* Request Service Button */}
                                <Dialog>
                                  <DialogTrigger asChild>
                                    <Button
                                      variant="outline"
                                      className="flex-1 bg-white border-2 border-purple-200 hover:bg-purple-50"
                                    >
                                      <FileText className="mr-2 h-4 w-4" />
                                      {t.requestService}
                                    </Button>
                                  </DialogTrigger>
                                  <DialogContent className="max-w-sm">
                                    <DialogHeader>
                                      <DialogTitle className="text-center text-purple-700">
                                        <FileText className="h-8 w-8 mx-auto mb-2 text-purple-600" />
                                        {t.requestSuccess}
                                      </DialogTitle>
                                    </DialogHeader>
                                    <div className="text-center space-y-4">
                                      <p className="text-gray-600">{t.thankYouRequest}</p>
                                      <div className="bg-purple-50 p-4 rounded-lg">
                                        <p className="text-purple-800 font-semibold">
                                          {t.serviceTypes[partner.serviceType]}
                                        </p>
                                        <p className="text-purple-600 text-sm">{partner.name}</p>
                                      </div>
                                      <DialogClose asChild>
                                        <Button className="w-full bg-purple-600 hover:bg-purple-700">{t.close}</Button>
                                      </DialogClose>
                                    </div>
                                  </DialogContent>
                                </Dialog>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        )}

        {activeTab === "requests" && (
          <div className="space-y-6">
            {workRequests.map((request) => {
              const IconComponent = getServiceIcon(request.serviceType)
              return (
                <Card
                  key={request.id}
                  className="border-l-4 border-l-orange-500 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-r from-white to-orange-50"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3 flex-1">
                        <div className="p-3 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl shadow-lg">
                          <IconComponent className="h-8 w-8 text-orange-600" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl font-bold">{request.title}</CardTitle>
                          <CardDescription className="mt-2 font-medium">{request.description}</CardDescription>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Badge className={`${getPriorityColor(request.priority)} border font-semibold`}>
                          {t.priority[request.priority]}
                        </Badge>
                        <Badge className={`${getStatusColor(request.status)} border font-semibold`}>
                          {t.status[request.status]}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-4">
                      <div className="bg-white/80 p-3 rounded-lg">
                        <span className="font-semibold text-gray-700">{t.form.serviceType}:</span>
                        <p className="font-medium text-orange-600">{t.serviceTypes[request.serviceType]}</p>
                      </div>
                      <div className="bg-white/80 p-3 rounded-lg">
                        <span className="font-semibold text-gray-700">{t.form.deadline}:</span>
                        <p className="font-medium">{request.deadline}</p>
                      </div>
                      <div className="bg-white/80 p-3 rounded-lg">
                        <span className="font-semibold text-gray-700">تاريخ الإنشاء:</span>
                        <p className="font-medium">{request.createdAt}</p>
                      </div>
                      {request.assignedTo && (
                        <div className="bg-white/80 p-3 rounded-lg">
                          <span className="font-semibold text-gray-700">مُسند إلى:</span>
                          <p className="font-medium text-blue-600">{request.assignedTo}</p>
                        </div>
                      )}
                    </div>

                    <div className="flex gap-2">
                      {request.status === "pending" && (
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 shadow-md"
                        >
                          <CheckCircle className="h-3 w-3 mr-1" />
                          {t.acceptRequest}
                        </Button>
                      )}
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-white/80 backdrop-blur-sm border-2 hover:bg-gray-50 shadow-md"
                      >
                        <Clock className="h-3 w-3 mr-1" />
                        {language === "ar" ? "عرض التفاصيل" : "View Details"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        )}

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="text-center bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <User className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-purple-600 mb-2">{servicePartners.length}</div>
              <p className="text-purple-700 font-medium">{language === "ar" ? "شريك خدمات" : "Service Partners"}</p>
            </CardContent>
          </Card>
          <Card className="text-center bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-orange-600 mb-2">{workRequests.length}</div>
              <p className="text-orange-700 font-medium">{language === "ar" ? "طلب عمل" : "Work Requests"}</p>
            </CardContent>
          </Card>
          <Card className="text-center bg-gradient-to-br from-green-50 to-green-100 border-green-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">
                {servicePartners.reduce((sum, partner) => sum + partner.completedProjects, 0)}
              </div>
              <p className="text-green-700 font-medium">{language === "ar" ? "مشروع مكتمل" : "Completed Projects"}</p>
            </CardContent>
          </Card>
          <Card className="text-center bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {servicePartners.filter((p) => p.status === "available").length}
              </div>
              <p className="text-blue-700 font-medium">{language === "ar" ? "شريك متاح" : "Available Partners"}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
