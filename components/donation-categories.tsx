"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  UtensilsCrossed,
  Coffee,
  Car,
  Shirt,
  Wheat,
  Apple,
  ShoppingCart,
  Gem,
  Building,
  Phone,
  Store,
  Heart,
} from "lucide-react"

interface DonationCategoriesProps {
  language: "ar" | "en"
  categories?: Array<{
    id: number
    icon: string
    title: { ar: string; en: string }
    items: Array<{ ar: string; en: string }>
  }>
}

export function DonationCategories({ language, categories }: DonationCategoriesProps) {
  const defaultCategories = [
    {
      id: 1,
      icon: "UtensilsCrossed",
      title: { ar: "المطاعم", en: "Restaurants" },
      items: [
        { ar: "1 جنيه لكل وجبة (وجبات سريعة)", en: "1 EGP per meal (fast food)" },
        { ar: "5 جنيه لكل طبق لحوم أو أسماك", en: "5 EGP per meat/fish dish" },
      ],
    },
    {
      id: 2,
      icon: "Coffee",
      title: { ar: "المقاهي ومحلات العصائر", en: "Cafes & Juice Shops" },
      items: [{ ar: "1 جنيه لكل مشروب", en: "1 EGP per beverage" }],
    },
    {
      id: 3,
      icon: "Car",
      title: { ar: "سائقي المواصلات", en: "Transportation Drivers" },
      items: [{ ar: "1 جنيه لكل رحلة", en: "1 EGP per ride" }],
    },
    {
      id: 4,
      icon: "Shirt",
      title: { ar: "محلات الملابس والأحذية", en: "Clothing & Footwear" },
      items: [{ ar: "3 جنيه لكل قطعة مباعة", en: "3 EGP per item sold" }],
    },
    {
      id: 5,
      icon: "Wheat",
      title: { ar: "المخابز", en: "Bakeries" },
      items: [{ ar: "50 جنيه لكل شكارة دقيق", en: "50 EGP per wheat bag" }],
    },
    {
      id: 6,
      icon: "Apple",
      title: { ar: "بائعي الفاكهة والخضار", en: "Fruit & Vegetable Sellers" },
      items: [
        { ar: "1 جنيه لكل كيلو فاكهة", en: "1 EGP per kg fruit" },
        { ar: "0.5 جنيه لكل كيلو خضار", en: "0.5 EGP per kg vegetable" },
      ],
    },
    {
      id: 7,
      icon: "ShoppingCart",
      title: { ar: "تجار البقالة", en: "Grocery Traders" },
      items: [{ ar: "1 جنيه لكل كرتونة أو عبوة مباعة", en: "1 EGP per carton/packet sold" }],
    },
    {
      id: 8,
      icon: "Gem",
      title: { ar: "محلات الذهب والمعادن", en: "Gold & Metal Stores" },
      items: [
        { ar: "1 جنيه لكل جرام ذهب", en: "1 EGP per gram of gold" },
        { ar: "1 جنيه لكل قيراط مجوهرات", en: "1 EGP per carat of jewelry" },
      ],
    },
    {
      id: 9,
      icon: "Building",
      title: { ar: "مواد البناء", en: "Construction Materials" },
      items: [{ ar: "5 جنيه لكل شكارة أسمنت أو جالون دهان", en: "5 EGP per cement bag or paint gallon" }],
    },
    {
      id: 10,
      icon: "Phone",
      title: { ar: "شركات الاتصالات", en: "Telecom Companies" },
      items: [
        { ar: "1 جنيه من كل خط شهرياً", en: "1 EGP per phone line/month" },
        { ar: "إمكانية التبرع برصيد الهاتف", en: "Phone credit donations available" },
      ],
    },
  ]

  const categoriesToShow = categories || defaultCategories

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categoriesToShow.map((category, index) => {
        const IconComponent = getIconComponent(category.icon)
        return (
          <Card key={category.id || index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <IconComponent className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-lg">{category.title[language]}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">
                      {item[language]}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )

  function getIconComponent(iconName: string) {
    const icons = {
      UtensilsCrossed,
      Coffee,
      Car,
      Shirt,
      Wheat,
      Apple,
      ShoppingCart,
      Gem,
      Building,
      Phone,
      Store,
      Heart,
    }
    return icons[iconName] || Store
  }
}
