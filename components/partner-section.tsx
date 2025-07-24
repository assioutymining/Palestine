"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Building2, Store, Users } from "lucide-react"

interface PartnerSectionProps {
  language: "ar" | "en"
}

export function PartnerSection({ language }: PartnerSectionProps) {
  const [formData, setFormData] = useState({
    businessName: "",
    businessType: "",
    contactName: "",
    phone: "",
    email: "",
    address: "",
    description: "",
  })

  const content = {
    ar: {
      title: "انضم كشريك في الحملة",
      description: 'سجل عملك كشريك رسمي في حملة "جنيه واحد لفلسطين" واحصل على شارة التحقق',
      benefits: ["شارة تحقق رسمية للعمل", "ملصقات رقمية للمشاركة", "إحصائيات مساهماتك", "شهادة تقدير"],
      form: {
        businessName: "اسم العمل/المحل",
        businessType: "نوع العمل",
        contactName: "اسم المسؤول",
        phone: "رقم الهاتف",
        email: "البريد الإلكتروني",
        address: "العنوان",
        description: "وصف العمل",
        submit: "انضم كشريك",
      },
      businessTypes: ["مطعم", "مقهى", "محل ملابس", "مخبز", "بقالة", "صيدلية", "محل ذهب", "مواد بناء", "أخرى"],
      partners: "الشركاء المسجلون",
      verified: "شريك معتمد",
    },
    en: {
      title: "Join as a Campaign Partner",
      description:
        'Register your business as an official partner in the "One Pound for Palestine" campaign and get verified',
      benefits: [
        "Official business verification badge",
        "Digital stickers for sharing",
        "Your contribution statistics",
        "Certificate of appreciation",
      ],
      form: {
        businessName: "Business Name",
        businessType: "Business Type",
        contactName: "Contact Person",
        phone: "Phone Number",
        email: "Email Address",
        address: "Address",
        description: "Business Description",
        submit: "Join as Partner",
      },
      businessTypes: [
        "Restaurant",
        "Cafe",
        "Clothing Store",
        "Bakery",
        "Grocery",
        "Pharmacy",
        "Gold Shop",
        "Construction Materials",
        "Other",
      ],
      partners: "Registered Partners",
      verified: "Verified Partner",
    },
  }

  const t = content[language]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Partner registration:", formData)
  }

  const samplePartners = [
    { name: "مطعم أبو طارق", type: "مطعم", location: "القاهرة" },
    { name: "مقهى النيل", type: "مقهى", location: "الجيزة" },
    { name: "محل الأمل للملابس", type: "ملابس", location: "الإسكندرية" },
    { name: "مخبز الفجر", type: "مخبز", location: "المنصورة" },
  ]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Registration Form */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building2 className="h-6 w-6 text-green-600" />
            {t.title}
          </CardTitle>
          <CardDescription>{t.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <h4 className="font-semibold mb-3">{language === "ar" ? "مزايا الشراكة:" : "Partnership Benefits:"}</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {t.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="businessName">{t.form.businessName}</Label>
              <Input
                id="businessName"
                value={formData.businessName}
                onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                required
              />
            </div>

            <div>
              <Label htmlFor="businessType">{t.form.businessType}</Label>
              <Select onValueChange={(value) => setFormData({ ...formData, businessType: value })}>
                <SelectTrigger>
                  <SelectValue placeholder={t.form.businessType} />
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="contactName">{t.form.contactName}</Label>
                <Input
                  id="contactName"
                  value={formData.contactName}
                  onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone">{t.form.phone}</Label>
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
              <Label htmlFor="email">{t.form.email}</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div>
              <Label htmlFor="address">{t.form.address}</Label>
              <Input
                id="address"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                required
              />
            </div>

            <div>
              <Label htmlFor="description">{t.form.description}</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={3}
              />
            </div>

            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
              <Users className="mr-2 h-4 w-4" />
              {t.form.submit}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Sample Partners */}
      <div>
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Store className="h-6 w-6 text-green-600" />
          {t.partners}
        </h3>
        <div className="space-y-4">
          {samplePartners.map((partner, index) => (
            <Card key={index} className="border-l-4 border-l-green-500">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold">{partner.name}</h4>
                    <p className="text-sm text-gray-600">{partner.location}</p>
                  </div>
                  <div className="text-right">
                    <Badge variant="secondary" className="mb-1">
                      {partner.type}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-green-600">
                      <CheckCircle className="h-3 w-3" />
                      {t.verified}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-6 p-4 bg-green-50 rounded-lg">
          <p className="text-sm text-green-800">
            {language === "ar"
              ? "انضم إلى أكثر من 15,000 شريك مسجل في الحملة"
              : "Join over 15,000 registered partners in the campaign"}
          </p>
        </div>
      </div>
    </div>
  )
}
