"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, ArrowRight, User, MapPin, CreditCard } from "lucide-react"

interface JoinPageProps {
  language: "ar" | "en"
  onBack: () => void
  onProceedToPayment: () => void
}

export function JoinPage({ language, onBack, onProceedToPayment }: JoinPageProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    governorate: "",
    donationType: "individual",
    dailyAmount: "1",
    businessName: "",
    businessType: "",
    agreeTerms: false,
  })

  const content = {
    ar: {
      title: "انضم لحملة جنيه واحد لفلسطين",
      subtitle: "املأ البيانات التالية للانضمام للحملة",
      personalInfo: "البيانات الشخصية",
      fullName: "الاسم الكامل",
      phone: "رقم الهاتف",
      email: "البريد الإلكتروني",
      governorate: "المحافظة",
      donationType: "نوع التبرع",
      individual: "فردي",
      business: "تجاري",
      dailyAmount: "المبلغ اليومي (جنيه)",
      businessInfo: "بيانات العمل",
      businessName: "اسم العمل/المحل",
      businessType: "نوع العمل",
      agreeTerms: "أوافق على الشروط والأحكام",
      back: "رجوع",
      proceedToPayment: "المتابعة للدفع",
      governorates: [
        "القاهرة",
        "الجيزة",
        "الإسكندرية",
        "الشرقية",
        "المنوفية",
        "القليوبية",
        "البحيرة",
        "كفر الشيخ",
        "الغربية",
        "الدقهلية",
        "دمياط",
        "بورسعيد",
        "الإسماعيلية",
        "السويس",
        "شمال سيناء",
        "جنوب سيناء",
        "الفيوم",
        "بني سويف",
        "المنيا",
        "أسيوط",
        "سوهاج",
        "قنا",
        "الأقصر",
        "أسوان",
        "البحر الأحمر",
        "الوادي الجديد",
        "مطروح",
      ],
      businessTypes: ["مطعم", "مقهى", "محل ملابس", "مخبز", "بقالة", "صيدلية", "محل ذهب", "مواد بناء", "خدمات", "أخرى"],
    },
    en: {
      title: "Join One Pound for Palestine Campaign",
      subtitle: "Fill in the following information to join the campaign",
      personalInfo: "Personal Information",
      fullName: "Full Name",
      phone: "Phone Number",
      email: "Email Address",
      governorate: "Governorate",
      donationType: "Donation Type",
      individual: "Individual",
      business: "Business",
      dailyAmount: "Daily Amount (EGP)",
      businessInfo: "Business Information",
      businessName: "Business/Shop Name",
      businessType: "Business Type",
      agreeTerms: "I agree to the terms and conditions",
      back: "Back",
      proceedToPayment: "Proceed to Payment",
      governorates: [
        "Cairo",
        "Giza",
        "Alexandria",
        "Sharqia",
        "Monufia",
        "Qalyubia",
        "Beheira",
        "Kafr El Sheikh",
        "Gharbia",
        "Dakahlia",
        "Damietta",
        "Port Said",
        "Ismailia",
        "Suez",
        "North Sinai",
        "South Sinai",
        "Fayoum",
        "Beni Suef",
        "Minya",
        "Asyut",
        "Sohag",
        "Qena",
        "Luxor",
        "Aswan",
        "Red Sea",
        "New Valley",
        "Matrouh",
      ],
      businessTypes: [
        "Restaurant",
        "Cafe",
        "Clothing Store",
        "Bakery",
        "Grocery",
        "Pharmacy",
        "Gold Shop",
        "Construction Materials",
        "Services",
        "Other",
      ],
    },
  }

  const t = content[language]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.agreeTerms) {
      alert(language === "ar" ? "يجب الموافقة على الشروط والأحكام" : "You must agree to the terms and conditions")
      return
    }
    onProceedToPayment()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12" dir={language === "ar" ? "rtl" : "ltr"}>
      <div className="container mx-auto px-4 max-w-2xl">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-green-800">{t.title}</CardTitle>
            <CardDescription className="text-lg">{t.subtitle}</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                  <User className="h-5 w-5" />
                  {t.personalInfo}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fullName">{t.fullName}</Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">{t.phone}</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">{t.email}</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="governorate">{t.governorate}</Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, governorate: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder={t.governorate} />
                    </SelectTrigger>
                    <SelectContent>
                      {t.governorates.map((gov, index) => (
                        <SelectItem key={index} value={gov}>
                          {gov}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Donation Type */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  {t.donationType}
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  <Button
                    type="button"
                    variant={formData.donationType === "individual" ? "default" : "outline"}
                    onClick={() => setFormData({ ...formData, donationType: "individual" })}
                    className="h-16"
                  >
                    {t.individual}
                  </Button>
                  <Button
                    type="button"
                    variant={formData.donationType === "business" ? "default" : "outline"}
                    onClick={() => setFormData({ ...formData, donationType: "business" })}
                    className="h-16"
                  >
                    {t.business}
                  </Button>
                </div>

                <div>
                  <Label htmlFor="dailyAmount">{t.dailyAmount}</Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, dailyAmount: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="1" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 {language === "ar" ? "جنيه" : "EGP"}</SelectItem>
                      <SelectItem value="2">2 {language === "ar" ? "جنيه" : "EGP"}</SelectItem>
                      <SelectItem value="5">5 {language === "ar" ? "جنيه" : "EGP"}</SelectItem>
                      <SelectItem value="10">10 {language === "ar" ? "جنيه" : "EGP"}</SelectItem>
                      <SelectItem value="20">20 {language === "ar" ? "جنيه" : "EGP"}</SelectItem>
                      <SelectItem value="50">50 {language === "ar" ? "جنيه" : "EGP"}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Business Information */}
              {formData.donationType === "business" && (
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    {t.businessInfo}
                  </h3>

                  <div>
                    <Label htmlFor="businessName">{t.businessName}</Label>
                    <Input
                      id="businessName"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      required={formData.donationType === "business"}
                    />
                  </div>

                  <div>
                    <Label htmlFor="businessType">{t.businessType}</Label>
                    <Select onValueChange={(value) => setFormData({ ...formData, businessType: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder={t.businessType} />
                      </SelectTrigger>
                      <SelectContent>
                        {t.businessTypes.map((type, index) => (
                          <SelectItem key={index} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}

              {/* Terms Agreement */}
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="agreeTerms"
                  checked={formData.agreeTerms}
                  onCheckedChange={(checked) => setFormData({ ...formData, agreeTerms: checked as boolean })}
                />
                <Label htmlFor="agreeTerms" className="text-sm">
                  {t.agreeTerms}
                </Label>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-6">
                <Button type="button" variant="outline" onClick={onBack} className="flex-1 bg-transparent">
                  {language === "ar" ? <ArrowRight className="mr-2 h-4 w-4" /> : <ArrowLeft className="mr-2 h-4 w-4" />}
                  {t.back}
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-green-600 hover:bg-green-700"
                  disabled={!formData.agreeTerms}
                >
                  {t.proceedToPayment}
                  {language === "ar" ? <ArrowLeft className="ml-2 h-4 w-4" /> : <ArrowRight className="ml-2 h-4 w-4" />}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
