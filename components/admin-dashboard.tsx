"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import {
  X,
  Plus,
  Edit,
  Trash2,
  ImageIcon,
  Settings,
  Users,
  BarChart3,
  Store,
  AlertTriangle,
  HandHeart,
  PenTool,
  Calendar,
} from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

interface AdminDashboardProps {
  language: "ar" | "en"
  onClose: () => void
}

export function AdminDashboard({ language, onClose }: AdminDashboardProps) {
  const [images, setImages] = useState([
    {
      id: 1,
      url: "/placeholder.svg?height=200&width=300",
      caption: language === "ar" ? "طفل فلسطيني في غزة" : "Palestinian child in Gaza",
    },
    {
      id: 2,
      url: "/placeholder.svg?height=200&width=300",
      caption: language === "ar" ? "الدمار في غزة" : "Destruction in Gaza",
    },
    {
      id: 3,
      url: "/placeholder.svg?height=200&width=300",
      caption: language === "ar" ? "عائلات فلسطينية في الخيام" : "Palestinian families in tents",
    },
    {
      id: 4,
      url: "/placeholder.svg?height=200&width=300",
      caption: language === "ar" ? "الطواقم الطبية الفلسطينية" : "Palestinian medical teams",
    },
  ])

  const [campaigns, setCampaigns] = useState([
    {
      id: 1,
      title: language === "ar" ? "جنيه واحد لفلسطين" : "One Pound for Palestine",
      status: "active",
      participants: 2500000,
    },
    {
      id: 2,
      title: language === "ar" ? "دعم الطوارئ الطبي" : "Medical Emergency Support",
      status: "active",
      participants: 150000,
    },
  ])

  const [emergencyCampaigns, setEmergencyCampaigns] = useState([
    {
      id: 1,
      title: { ar: "إغاثة عاجلة لغزة", en: "Urgent Relief for Gaza" },
      description: {
        ar: "حملة طارئة لتوفير المساعدات الطبية والغذائية",
        en: "Emergency campaign for medical and food aid",
      },
      targetAmount: 1000000,
      currentAmount: 750000,
      deadline: "2024-02-15",
      priority: "high",
      status: "active",
    },
    {
      id: 2,
      title: { ar: "دعم المستشفيات", en: "Hospital Support" },
      description: { ar: "توفير المعدات الطبية للمستشفيات", en: "Providing medical equipment for hospitals" },
      targetAmount: 500000,
      currentAmount: 320000,
      deadline: "2024-02-20",
      priority: "medium",
      status: "active",
    },
  ])

  const [supportCategories, setSupportCategories] = useState([
    {
      id: 1,
      title: { ar: "الدعم الطبي", en: "Medical Support" },
      description: { ar: "توفير الأدوية والمعدات الطبية", en: "Providing medicines and medical equipment" },
      icon: "Heart",
      items: [
        { ar: "أدوية أساسية", en: "Essential medicines", cost: 100 },
        { ar: "معدات طبية", en: "Medical equipment", cost: 500 },
        { ar: "مستلزمات جراحية", en: "Surgical supplies", cost: 300 },
      ],
    },
    {
      id: 2,
      title: { ar: "الدعم الغذائي", en: "Food Support" },
      description: { ar: "توفير الطعام والمياه النظيفة", en: "Providing food and clean water" },
      icon: "Apple",
      items: [
        { ar: "وجبة غذائية", en: "Food meal", cost: 25 },
        { ar: "مياه نظيفة", en: "Clean water", cost: 10 },
        { ar: "حليب للأطفال", en: "Baby formula", cost: 50 },
      ],
    },
    {
      id: 3,
      title: { ar: "الدعم التعليمي", en: "Educational Support" },
      description: { ar: "توفير الكتب والأدوات المدرسية", en: "Providing books and school supplies" },
      icon: "BookOpen",
      items: [
        { ar: "حقيبة مدرسية", en: "School bag", cost: 75 },
        { ar: "كتب دراسية", en: "Textbooks", cost: 150 },
        { ar: "أدوات كتابة", en: "Writing supplies", cost: 30 },
      ],
    },
    {
      id: 4,
      title: { ar: "المأوى والإسكان", en: "Shelter & Housing" },
      description: { ar: "توفير المأوى المؤقت ومواد البناء", en: "Providing temporary shelter and building materials" },
      icon: "Home",
      items: [
        { ar: "خيمة عائلية", en: "Family tent", cost: 200 },
        { ar: "بطانيات", en: "Blankets", cost: 40 },
        { ar: "مواد بناء أساسية", en: "Basic building materials", cost: 800 },
      ],
    },
  ])

  const [seminars, setSeminars] = useState([
    {
      id: 1,
      title: {
        ar: "ندوة: دور الشباب في دعم القضية الفلسطينية",
        en: "Seminar: Youth Role in Supporting Palestinian Cause"
      },
      description: {
        ar: "ندوة تفاعلية حول كيفية مساهمة الشباب المصري في دعم الشعب الفلسطيني",
        en: "Interactive seminar on how Egyptian youth can contribute to supporting the Palestinian people"
      },
      image: "/placeholder.svg?height=300&width=400",
      date: "2024-02-15",
      time: "19:00",
      location: {
        ar: "قاعة المؤتمرات - جامعة القاهرة",
        en: "Conference Hall - Cairo University"
      },
      speaker: {
        ar: "د. أحمد محمود - خبير في الشؤون الفلسطينية",
        en: "Dr. Ahmed Mahmoud - Palestinian Affairs Expert"
      },
      maxAttendees: 300,
      type: "offline",
      status: "active"
    },
    {
      id: 2,
      title: {
        ar: "محاضرة: تاريخ فلسطين والنكبة",
        en: "Lecture: History of Palestine and the Nakba"
      },
      description: {
        ar: "محاضرة تاريخية شاملة عن تاريخ فلسطين منذ العصور القديمة حتى اليوم",
        en: "Comprehensive historical lecture about Palestine's history from ancient times to today"
      },
      image: "/placeholder.svg?height=300&width=400",
      date: "2024-02-20",
      time: "20:00",
      location: {
        ar: "عبر الإنترنت - Zoom",
        en: "Online - Zoom"
      },
      speaker: {
        ar: "أ.د. فاطمة الزهراء - أستاذ التاريخ الحديث",
        en: "Prof. Fatima Al-Zahra - Modern History Professor"
      },
      maxAttendees: 500,
      type: "online",
      status: "active"
    }
  ])

  const [serviceRequests, setServiceRequests] = useState([
    {
      id: 1,
      title: "تصميم بوستر إعلاني للحملة الطارئة",
      description: "نحتاج تصميم بوستر جذاب للحملة الطارئة لدعم غزة",
      serviceType: "design",
      deadline: "2024-02-10",
      priority: "high",
      status: "pending",
      createdAt: "2024-02-05",
    },
    {
      id: 2,
      title: "طباعة 1000 بروشور للحملة",
      description: "طباعة بروشورات تعريفية بالحملة لتوزيعها",
      serviceType: "printing",
      deadline: "2024-02-15",
      priority: "medium",
      status: "inProgress",
      createdAt: "2024-02-03",
    },
  ])

  const [newRequestForm, setNewRequestForm] = useState({
    title: "",
    description: "",
    serviceType: "",
    deadline: "",
    priority: "medium",
  })

  const [newImage, setNewImage] = useState({ url: "", caption: "" })
  const [newCampaign, setNewCampaign] = useState({ title: "", description: "", targetAmount: "" })
  const [newEmergencyCampaign, setNewEmergencyCampaign] = useState({
    title: { ar: "", en: "" },
    description: { ar: "", en: "" },
    targetAmount: "",
    deadline: "",
    priority: "medium",
  })
  const [newSupportCategory, setNewSupportCategory] = useState({
    title: { ar: "", en: "" },
    description: { ar: "", en: "" },
    icon: "Heart",
    items: [{ ar: "", en: "", cost: 0 }],
  })
  const [newSeminar, setNewSeminar] = useState({
    title: { ar: "", en: "" },
    description: { ar: "", en: "" },
    image: "",
    date: "",
    time: "",
    location: { ar: "", en: "" },
    speaker: { ar: "", en: "" },
    maxAttendees: "",
    type: "offline",
  })
  const [newCategory, setNewCategory] = useState({
    icon: "Store",
    title: { ar: "", en: "" },
    description: { ar: "", en: "" },
    items: [{ ar: "", en: "" }],
  })

  const [donationCategories, setDonationCategories] = useState([
    {
      id: 1,
      icon: "UtensilsCrossed",
      title: { ar: "المطاعم", en: "Restaurants" },
      description: { ar: "المطاعم والوجبات السريعة", en: "Restaurants and fast food" },
      items: [
        { ar: "1 جنيه لكل وجبة (وجبات سريعة)", en: "1 EGP per meal (fast food)" },
        { ar: "5 جنيه لكل طبق لحوم أو أسماك", en: "5 EGP per meat/fish dish" },
      ],
    },
    {
      id: 2,
      icon: "Coffee",
      title: { ar: "المقاهي ومحلات العصائر", en: "Cafes & Juice Shops" },
      description: { ar: "المقاهي ومحلات المشروبات", en: "Cafes and beverage shops" },
      items: [{ ar: "1 جنيه لكل مشروب", en: "1 EGP per beverage" }],
    },
    {
      id: 3,
      icon: "Car",
      title: { ar: "سائقي المواصلات", en: "Transportation Drivers" },
      description: { ar: "سائقي التاكسي والمواصلات", en: "Taxi and transport drivers" },
      items: [{ ar: "1 جنيه لكل رحلة", en: "1 EGP per ride" }],
    },
    {
      id: 4,
      icon: "Shirt",
      title: { ar: "محلات الملابس والأحذية", en: "Clothing & Footwear" },
      description: { ar: "محلات الملابس والأحذية", en: "Clothing and footwear stores" },
      items: [{ ar: "3 جنيه لكل قطعة مباعة", en: "3 EGP per item sold" }],
    },
    {
      id: 5,
      icon: "Wheat",
      title: { ar: "المخابز", en: "Bakeries" },
      description: { ar: "المخابز ومحلات الخبز", en: "Bakeries and bread shops" },
      items: [{ ar: "50 جنيه لكل شكارة دقيق", en: "50 EGP per wheat bag" }],
    },
  ])

  const [editingCategory, setEditingCategory] = useState(null)

  const content = {
    ar: {
      title: "لوحة التحكم الإدارية",
      close: "إغلاق",
      imagesTab: "إدارة الصور",
      campaignsTab: "إدارة الحملات",
      emergencyTab: "الحملات الطارئة",
      supportTab: "فئات الدعم",
      seminarsTab: "إدارة الندوات",
      categoriesTab: "فئات التبرع",
      statisticsTab: "الإحصائيات",
      addImage: "إضافة صورة جديدة",
      addSeminar: "إضافة ندوة جديدة",
      editImage: "تعديل الصورة",
      deleteImage: "حذف الصورة",
      imageUrl: "رابط الصورة",
      imageCaption: "وصف الصورة",
      save: "حفظ",
      cancel: "إلغاء",
      addCampaign: "إضافة حملة جديدة",
      addEmergencyCampaign: "إضافة حملة طارئة",
      addSupportCategory: "إضافة فئة دعم",
      campaignTitle: "عنوان الحملة",
      campaignDescription: "وصف الحملة",
      targetAmount: "المبلغ المستهدف",
      currentAmount: "المبلغ الحالي",
      deadline: "الموعد النهائي",
      priority: "الأولوية",
      status: "الحالة",
      participants: "المشاركون",
      active: "نشطة",
      inactive: "غير نشطة",
      high: "عالية",
      medium: "متوسطة",
      low: "منخفضة",
      totalDonations: "إجمالي التبرعات",
      totalParticipants: "إجمالي المشاركين",
      activeCampaigns: "الحملات النشطة",
      uploadImage: "رفع صورة",
      categoryTitle: "اسم الفئة",
      categoryIcon: "أيقونة الفئة",
      donationItems: "عناصر التبرع",
      supportItems: "عناصر الدعم",
      addItem: "إضافة عنصر",
      removeItem: "حذف عنصر",
      itemCost: "التكلفة",
      iconOptions: "خيارات الأيقونات",
      progress: "التقدم",
      serviceRequestsTab: "طلبات الخدمات",
      addServiceRequest: "إضافة طلب خدمة",
      seminarTitle: "عنوان الندوة",
      seminarDescription: "وصف الندوة",
      seminarDate: "تاريخ الندوة",
      seminarTime: "وقت الندوة",
      seminarLocation: "مكان الندوة",
      seminarSpeaker: "المحاضر",
      maxAttendees: "الحد الأقصى للحضور",
      seminarType: "نوع الندوة",
      online: "عبر الإنترنت",
      offline: "حضوري",
      form: {
        title: "عنوان الطلب",
        description: "وصف الطلب",
        serviceType: "نوع الخدمة",
        deadline: "الموعد النهائي",
        priority: "الأولوية",
      },
      status: {
        pending: "قيد الانتظار",
        inProgress: "قيد التنفيذ",
        completed: "مكتمل",
        cancelled: "ملغى",
      },
    },
    en: {
      title: "Admin Dashboard",
      close: "Close",
      imagesTab: "Manage Images",
      campaignsTab: "Manage Campaigns",
      emergencyTab: "Emergency Campaigns",
      supportTab: "Support Categories",
      seminarsTab: "Manage Seminars",
      categoriesTab: "Donation Categories",
      statisticsTab: "Statistics",
      addImage: "Add New Image",
      addSeminar: "Add New Seminar",
      editImage: "Edit Image",
      deleteImage: "Delete Image",
      imageUrl: "Image URL",
      imageCaption: "Image Caption",
      save: "Save",
      cancel: "Cancel",
      addCampaign: "Add New Campaign",
      addEmergencyCampaign: "Add Emergency Campaign",
      addSupportCategory: "Add Support Category",
      campaignTitle: "Campaign Title",
      campaignDescription: "Campaign Description",
      targetAmount: "Target Amount",
      currentAmount: "Current Amount",
      deadline: "Deadline",
      priority: "Priority",
      status: "Status",
      participants: "Participants",
      active: "Active",
      inactive: "Inactive",
      high: "High",
      medium: "Medium",
      low: "Low",
      totalDonations: "Total Donations",
      totalParticipants: "Total Participants",
      activeCampaigns: "Active Campaigns",
      uploadImage: "Upload Image",
      categoryTitle: "Category Title",
      categoryIcon: "Category Icon",
      donationItems: "Donation Items",
      supportItems: "Support Items",
      addItem: "Add Item",
      removeItem: "Remove Item",
      itemCost: "Cost",
      iconOptions: "Icon Options",
      progress: "Progress",
      serviceRequestsTab: "Service Requests",
      addServiceRequest: "Add Service Request",
      seminarTitle: "Seminar Title",
      seminarDescription: "Seminar Description",
      seminarDate: "Seminar Date",
      seminarTime: "Seminar Time",
      seminarLocation: "Seminar Location",
      seminarSpeaker: "Speaker",
      maxAttendees: "Max Attendees",
      seminarType: "Seminar Type",
      online: "Online",
      offline: "In-Person",
      form: {
        title: "Request Title",
        description: "Request Description",
        serviceType: "Service Type",
        deadline: "Deadline",
        priority: "Priority",
      },
      status: {
        pending: "Pending",
        inProgress: "In Progress",
        completed: "Completed",
        cancelled: "Cancelled",
      },
    },
  }

  const t = content[language]

  const handleAddImage = () => {
    if (newImage.url && newImage.caption) {
      setImages([...images, { id: Date.now(), url: newImage.url, caption: newImage.caption }])
      setNewImage({ url: "", caption: "" })
    }
  }

  const handleDeleteImage = (id: number) => {
    setImages(images.filter((img) => img.id !== id))
  }

  const handleAddCampaign = () => {
    if (newCampaign.title && newCampaign.description) {
      setCampaigns([
        ...campaigns,
        {
          id: Date.now(),
          title: newCampaign.title,
          status: "active",
          participants: 0,
        },
      ])
      setNewCampaign({ title: "", description: "", targetAmount: "" })
    }
  }

  const handleAddCategory = () => {
    if (newCategory.title.ar && newCategory.title.en && newCategory.items[0].ar && newCategory.items[0].en) {
      setDonationCategories([
        ...donationCategories,
        {
          id: Date.now(),
          ...newCategory,
        },
      ])
      setNewCategory({
        icon: "Store",
        title: { ar: "", en: "" },
        description: { ar: "", en: "" },
        items: [{ ar: "", en: "" }],
      })
    }
  }

  const handleDeleteCategory = (id) => {
    setDonationCategories(donationCategories.filter((cat) => cat.id !== id))
  }

  const handleAddEmergencyCampaign = () => {
    if (newEmergencyCampaign.title.ar && newEmergencyCampaign.title.en && newEmergencyCampaign.targetAmount) {
      setEmergencyCampaigns([
        ...emergencyCampaigns,
        {
          id: Date.now(),
          ...newEmergencyCampaign,
          targetAmount: Number.parseInt(newEmergencyCampaign.targetAmount),
          currentAmount: 0,
          status: "active",
        },
      ])
      setNewEmergencyCampaign({
        title: { ar: "", en: "" },
        description: { ar: "", en: "" },
        targetAmount: "",
        deadline: "",
        priority: "medium",
      })
    }
  }

  const handleAddSupportCategory = () => {
    if (newSupportCategory.title.ar && newSupportCategory.title.en && newSupportCategory.items[0].ar) {
      setSupportCategories([
        ...supportCategories,
        {
          id: Date.now(),
          ...newSupportCategory,
        },
      ])
      setNewSupportCategory({
        title: { ar: "", en: "" },
        description: { ar: "", en: "" },
        icon: "Heart",
        items: [{ ar: "", en: "", cost: 0 }],
      })
    }
  }

  const handleAddSeminar = () => {
    if (newSeminar.title.ar && newSeminar.title.en && newSeminar.date && newSeminar.time) {
      setSeminars([
        ...seminars,
        {
          id: Date.now(),
          ...newSeminar,
          maxAttendees: Number.parseInt(newSeminar.maxAttendees) || 100,
          status: "active",
        },
      ])
      setNewSeminar({
        title: { ar: "", en: "" },
        description: { ar: "", en: "" },
        image: "",
        date: "",
        time: "",
        location: { ar: "", en: "" },
        speaker: { ar: "", en: "" },
        maxAttendees: "",
        type: "offline",
      })
    }
  }

  const handleAddServiceRequest = () => {
    if (newRequestForm.title && newRequestForm.description && newRequestForm.serviceType) {
      setServiceRequests([
        ...serviceRequests,
        {
          id: Date.now(),
          ...newRequestForm,
          status: "pending",
          createdAt: new Date().toISOString().split("T")[0],
        },
      ])
      setNewRequestForm({
        title: "",
        description: "",
        serviceType: "",
        deadline: "",
        priority: "medium",
      })
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "text-red-600 bg-red-100"
      case "medium":
        return "text-yellow-600 bg-yellow-100"
      case "low":
        return "text-green-600 bg-green-100"
      default:
        return "text-gray-600 bg-gray-100"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "text-gray-600 bg-gray-100"
      case "inProgress":
        return "text-blue-600 bg-blue-100"
      case "completed":
        return "text-green-600 bg-green-100"
      case "cancelled":
        return "text-red-600 bg-red-100"
      default:
        return "text-gray-600 bg-gray-100"
    }
  }

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <div className="bg-white rounded-lg w-full max-w-6xl max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <Settings className="h-6 w-6" />
            {t.title}
          </h2>
          <Button variant="outline" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
            {t.close}
          </Button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
          <Tabs defaultValue="images" className="w-full">
            <TabsList className="grid w-full grid-cols-8">
              <TabsTrigger value="images" className="flex items-center gap-2">
                <ImageIcon className="h-4 w-4" />
                {t.imagesTab}
              </TabsTrigger>
              <TabsTrigger value="emergency" className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4" />
                {t.emergencyTab}
              </TabsTrigger>
              <TabsTrigger value="support" className="flex items-center gap-2">
                <HandHeart className="h-4 w-4" />
                {t.supportTab}
              </TabsTrigger>
              <TabsTrigger value="seminars" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {t.seminarsTab}
              </TabsTrigger>
              <TabsTrigger value="service-requests" className="flex items-center gap-2">
                <PenTool className="h-4 w-4" />
                {t.serviceRequestsTab}
              </TabsTrigger>
              <TabsTrigger value="categories" className="flex items-center gap-2">
                <Store className="h-4 w-4" />
                {t.categoriesTab}
              </TabsTrigger>
              <TabsTrigger value="campaigns" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                {t.campaignsTab}
              </TabsTrigger>
              <TabsTrigger value="statistics" className="flex items-center gap-2">
                <BarChart3 className="h-4 w-4" />
                {t.statisticsTab}
              </TabsTrigger>
            </TabsList>

            {/* Images Tab */}
            <TabsContent value="images" className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">{t.imagesTab}</h3>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-green-600 hover:bg-green-700">
                      <Plus className="h-4 w-4 mr-2" />
                      {t.addImage}
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{t.addImage}</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="imageUrl">{t.imageUrl}</Label>
                        <Input
                          id="imageUrl"
                          value={newImage.url}
                          onChange={(e) => setNewImage({ ...newImage, url: e.target.value })}
                          placeholder="https://example.com/image.jpg"
                        />
                      </div>
                      <div>
                        <Label htmlFor="imageCaption">{t.imageCaption}</Label>
                        <Input
                          id="imageCaption"
                          value={newImage.caption}
                          onChange={(e) => setNewImage({ ...newImage, caption: e.target.value })}
                        />
                      </div>
                      <Button onClick={handleAddImage} className="w-full">
                        {t.save}
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {images.map((image) => (
                  <Card key={image.id}>
                    <CardContent className="p-4">
                      <img
                        src={image.url || "/placeholder.svg"}
                        alt={image.caption}
                        className="w-full h-32 object-cover rounded mb-3"
                      />
                      <p className="text-sm text-gray-600 mb-3">{image.caption}</p>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                          <Edit className="h-3 w-3 mr-1" />
                          {language === "ar" ? "تعديل" : "Edit"}
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 text-red-600 hover:text-red-700 bg-transparent"
                          onClick={() => handleDeleteImage(image.id)}
                        >
                          <Trash2 className="h-3 w-3 mr-1" />
                          {language === "ar" ? "حذف" : "Delete"}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Seminars Tab */}
            <TabsContent value="seminars" className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">{t.seminarsTab}</h3>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-purple-600 hover:bg-purple-700">
                      <Plus className="h-4 w-4 mr-2" />
                      {t.addSeminar}
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl">
                    <DialogHeader>
                      <DialogTitle>{t.addSeminar}</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 max-h-96 overflow-y-auto">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label>{t.seminarTitle} (العربية)</Label>
                          <Input
                            value={newSeminar.title.ar}
                            onChange={(e) =>
                              setNewSeminar({
                                ...newSeminar,
                                title: { ...newSeminar.title, ar: e.target.value },
                              })
                            }
                          />
                        </div>
                        <div>
                          <Label>{t.seminarTitle} (English)</Label>
                          <Input
                            value={newSeminar.title.en}
                            onChange={(e) =>
                              setNewSeminar({
                                ...newSeminar,
                                title: { ...newSeminar.title, en: e.target.value },
                              })
                            }
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label>{t.seminarDescription} (العربية)</Label>
                          <Textarea
                            value={newSeminar.description.ar}
                            onChange={(e) =>
                              setNewSeminar({
                                ...newSeminar,
                                description: { ...newSeminar.description, ar: e.target.value },
                              })
                            }
                            rows={3}
                          />
                        </div>
                        <div>
                          <Label>{t.seminarDescription} (English)</Label>
                          <Textarea
                            value={newSeminar.description.en}
                            onChange={(e) =>
                              setNewSeminar({
                                ...newSeminar,
                                description: { ...newSeminar.description, en: e.target.value },
                              })
                            }
                            rows={3}
                          />
                        </div>
                      </div>

                      <div>
                        <Label>{t.imageUrl}</Label>
                        <Input
                          value={newSeminar.image}
                          onChange={(e) => setNewSeminar({ ...newSeminar, image: e.target.value })}
                          placeholder="https://example.com/seminar-image.jpg"
                        />
                      </div>

                      <div className="grid grid-cols-4 gap-4">
                        <div>
                          <Label>{t.seminarDate}</Label>
                          <Input
                            type="date"
                            value={newSeminar.date}
                            onChange={(e) => setNewSeminar({ ...newSeminar, date: e.target.value })}
                          />
                        </div>
                        <div>
                          <Label>{t.seminarTime}</Label>
                          <Input
                            type="time"
                            value={newSeminar.time}
                            onChange={(e) => setNewSeminar({ ...newSeminar, time: e.target.value })}
                          />
                        </div>
                        <div>
                          <Label>{t.maxAttendees}</Label>
                          <Input
                            type="number"
                            value={newSeminar.maxAttendees}
                            onChange={(e) => setNewSeminar({ ...newSeminar, maxAttendees: e.target.value })}
                            placeholder="100"
                          />
                        </div>
                        <div>
                          <Label>{t.seminarType}</Label>
                          <Select
                            onValueChange={(value) => setNewSeminar({ ...newSeminar, type: value })}
                            value={newSeminar.type}
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="offline">{t.offline}</SelectItem>
                              <SelectItem value="online">{t.online}</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label>{t.seminarLocation} (العربية)</Label>
                          <Input
                            value={newSeminar.location.ar}
                            onChange={(e) =>
                              setNewSeminar({
                                ...newSeminar,
                                location: { ...newSeminar.location, ar: e.target.value },
                              })
                            }
                          />
                        </div>
                        <div>
                          <Label>{t.seminarLocation} (English)</Label>
                          <Input
                            value={newSeminar.location.en}
                            onChange={(e) =>
                              setNewSeminar({
                                ...newSeminar,
                                location: { ...newSeminar.location, en: e.target.value },
                              })
                            }
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label>{t.seminarSpeaker} (العربية)</Label>
                          <Input
                            value={newSeminar.speaker.ar}
                            onChange={(e) =>
                              setNewSeminar({
                                ...newSeminar,
                                speaker: { ...newSeminar.speaker, ar: e.target.value },
                              })
                            }
                          />
                        </div>
                        <div>
                          <Label>{t.seminarSpeaker} (English)</Label>
                          <Input
                            value={newSeminar.speaker.en}
                            onChange={(e) =>
                              setNewSeminar({
                                ...newSeminar,
                                speaker: { ...newSeminar.speaker, en: e.target.value },
                              })
                            }
                          />
                        </div>
                      </div>

                      <Button onClick={handleAddSeminar} className="w-full">
                        {t.save}
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              <div className="space-y-4">
                {seminars.map((seminar) => (
                  <Card key={seminar.id} className="border-l-4 border-l-purple-500">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <CardTitle className="text-lg">{seminar.title[language]}</CardTitle>
                            <Badge className={`${seminar.type === 'online' ? 'bg-blue-500' : 'bg-green-500'} text-white`}>
                              {t[seminar.type]}
                            </Badge>
                          </div>
                          <CardDescription className="mb-3">{seminar.description[language]}</CardDescription>
                          <div className="grid grid-cols-4 gap-4 text-sm">
                            <div>
                              <span className="font-medium">{t.seminarDate}:</span>
                              <p>{seminar.date}</p>
                            </div>
                            <div>
                              <span className="font-medium">{t.seminarTime}:</span>
                              <p>{seminar.time}</p>
                            </div>
                            <div>
                              <span className="font-medium">{t.seminarLocation}:</span>
                              <p>{seminar.location[language]}</p>
                            </div>
                            <div>
                              <span className="font-medium">{t.maxAttendees}:</span>
                              <p>{seminar.maxAttendees}</p>
                            </div>
                          </div>
                          <div className="mt-3 bg-gray-50 rounded p-2">
                            <span className="font-medium text-sm">{t.seminarSpeaker}:</span>
                            <p className="text-sm">{seminar.speaker[language]}</p>
                          </div>
                        </div>
                        <div className="flex gap-2 ml-4">
                          <Button size="sm" variant="outline">
                            <Edit className="h-3 w-3 mr-1" />
                            {language === "ar" ? "تعديل" : "Edit"}
                          </Button>
                          <Button size="sm" variant="outline" className="text-red-600 bg-transparent">
                            <Trash2 className="h-3 w-3 mr-1" />
                            {language === "ar" ? "حذف" : "Delete"}
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Emergency Campaigns Tab - Previous code remains the same */}
            <TabsContent value="emergency" className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">{t.emergencyTab}</h3>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-red-600 hover:bg-red-700">
                      <Plus className="h-4 w-4 mr-2" />
                      {t.addEmergencyCampaign}
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>{t.addEmergencyCampaign}</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 max-h-96 overflow-y-auto">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label>{t.campaignTitle} (العربية)</Label>
                          <Input
                            value={newEmergencyCampaign.title.ar}
                            onChange={(e) =>
                              setNewEmergencyCampaign({
                                ...newEmergencyCampaign,
                                title: { ...newEmergencyCampaign.title, ar: e.target.value },
                              })
                            }
                          />
                        </div>
                        <div>
                          <Label>{t.campaignTitle} (English)</Label>
                          <Input
                            value={newEmergencyCampaign.title.en}
                            onChange={(e) =>
                              setNewEmergencyCampaign({
                                ...newEmergencyCampaign,
                                title: { ...newEmergencyCampaign.title, en: e.target.value },
                              })
                            }
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label>{t.campaignDescription} (العربية)</Label>
                          <Textarea
                            value={newEmergencyCampaign.description.ar}
                            onChange={(e) =>
                              setNewEmergencyCampaign({
                                ...newEmergencyCampaign,
                                description: { ...newEmergencyCampaign.description, ar: e.target.value },
                              })
                            }
                            rows={3}
                          />
                        </div>
                        <div>
                          <Label>{t.campaignDescription} (English)</Label>
                          <Textarea
                            value={newEmergencyCampaign.description.en}
                            onChange={(e) =>
                              setNewEmergencyCampaign({
                                ...newEmergencyCampaign,
                                description: { ...newEmergencyCampaign.description, en: e.target.value },
                              })
                            }
                            rows={3}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <Label>{t.targetAmount}</Label>
                          <Input
                            type="number"
                            value={newEmergencyCampaign.targetAmount}
                            onChange={(e) =>
                              setNewEmergencyCampaign({ ...newEmergencyCampaign, targetAmount: e.target.value })
                            }
                          />
                        </div>
                        <div>
                          <Label>{t.deadline}</Label>
                          <Input
                            type="date"
                            value={newEmergencyCampaign.deadline}
                            onChange={(e) =>
                              setNewEmergencyCampaign({ ...newEmergencyCampaign, deadline: e.target.value })
                            }
                          />
                        </div>
                        <div>
                          <Label>{t.priority}</Label>
                          <select
                            className="w-full p-2 border rounded"
                            value={newEmergencyCampaign.priority}
                            onChange={(e) =>
                              setNewEmergencyCampaign({ ...newEmergencyCampaign, priority: e.target.value })
                            }
                          >
                            <option value="high">{t.high}</option>
                            <option value="medium">{t.medium}</option>
                            <option value="low">{t.low}</option>
                          </select>
                        </div>
                      </div>

                      <Button onClick={handleAddEmergencyCampaign} className="w-full">
                        {t.save}
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              <div className="space-y-4">
                {emergencyCampaigns.map((campaign) => (
                  <Card key={campaign.id} className="border-l-4 border-l-red-500">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <CardTitle className="text-lg">{campaign.title[language]}</CardTitle>
                            <span className={`px-2 py-1 rounded-full text-xs ${getPriorityColor(campaign.priority)}`}>
                              {t[campaign.priority]}
                            </span>
                          </div>
                          <CardDescription className="mb-3">{campaign.description[language]}</CardDescription>
                          <div className="grid grid-cols-3 gap-4 text-sm">
                            <div>
                              <span className="font-medium">{t.targetAmount}:</span>
                              <p>
                                {campaign.targetAmount.toLocaleString()} {language === "ar" ? "جنيه" : "EGP"}
                              </p>
                            </div>
                            <div>
                              <span className="font-medium">{t.currentAmount}:</span>
                              <p>
                                {campaign.currentAmount.toLocaleString()} {language === "ar" ? "جنيه" : "EGP"}
                              </p>
                            </div>
                            <div>
                              <span className="font-medium">{t.deadline}:</span>
                              <p>{campaign.deadline}</p>
                            </div>
                          </div>
                          <div className="mt-3">
                            <div className="flex justify-between text-sm mb-1">
                              <span>{t.progress}</span>
                              <span>{Math.round((campaign.currentAmount / campaign.targetAmount) * 100)}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-red-600 h-2 rounded-full"
                                style={{ width: `${(campaign.currentAmount / campaign.targetAmount) * 100}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2 ml-4">
                          <Button size="sm" variant="outline">
                            <Edit className="h-3 w-3 mr-1" />
                            {language === "ar" ? "تعديل" : "Edit"}
                          </Button>
                          <Button size="sm" variant="outline" className="text-red-600 bg-transparent">
                            <Trash2 className="h-3 w-3 mr-1" />
                            {language === "ar" ? "حذف" : "Delete"}
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Support Categories Tab - Previous code remains the same */}
            <TabsContent value="support" className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">{t.supportTab}</h3>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      <Plus className="h-4 w-4 mr-2" />
                      {t.addSupportCategory}
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>{t.addSupportCategory}</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 max-h-96 overflow-y-auto">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label>{t.categoryTitle} (العربية)</Label>
                          <Input
                            value={newSupportCategory.title.ar}
                            onChange={(e) =>
                              setNewSupportCategory({
                                ...newSupportCategory,
                                title: { ...newSupportCategory.title, ar: e.target.value },
                              })
                            }
                          />
                        </div>
                        <div>
                          <Label>{t.categoryTitle} (English)</Label>
                          <Input
                            value={newSupportCategory.title.en}
                            onChange={(e) =>
                              setNewSupportCategory({
                                ...newSupportCategory,
                                title: { ...newSupportCategory.title, en: e.target.value },
                              })
                            }
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label>{t.campaignDescription} (العربية)</Label>
                          <Textarea
                            value={newSupportCategory.description.ar}
                            onChange={(e) =>
                              setNewSupportCategory({
                                ...newSupportCategory,
                                description: { ...newSupportCategory.description, ar: e.target.value },
                              })
                            }
                            rows={2}
                          />
                        </div>
                        <div>
                          <Label>{t.campaignDescription} (English)</Label>
                          <Textarea
                            value={newSupportCategory.description.en}
                            onChange={(e) =>
                              setNewSupportCategory({
                                ...newSupportCategory,
                                description: { ...newSupportCategory.description, en: e.target.value },
                              })
                            }
                            rows={2}
                          />
                        </div>
                      </div>

                      <div>
                        <Label>{t.categoryIcon}</Label>
                        <div className="grid grid-cols-6 gap-2 mt-2">
                          {["Heart", "Apple", "BookOpen", "Home", "Shield", "Stethoscope"].map((icon) => (
                            <button
                              key={icon}
                              type="button"
                              onClick={() => setNewSupportCategory({ ...newSupportCategory, icon })}
                              className={`p-2 border rounded ${newSupportCategory.icon === icon ? "border-blue-500 bg-blue-50" : "border-gray-200"}`}
                            >
                              {icon}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <Label>{t.supportItems}</Label>
                          <Button
                            type="button"
                            size="sm"
                            onClick={() =>
                              setNewSupportCategory({
                                ...newSupportCategory,
                                items: [...newSupportCategory.items, { ar: "", en: "", cost: 0 }],
                              })
                            }
                          >
                            <Plus className="h-3 w-3 mr-1" />
                            {t.addItem}
                          </Button>
                        </div>
                        {newSupportCategory.items.map((item, index) => (
                          <div key={index} className="grid grid-cols-5 gap-2 mb-2">
                            <Input
                              placeholder="العربية"
                              value={item.ar}
                              onChange={(e) => {
                                const newItems = [...newSupportCategory.items]
                                newItems[index].ar = e.target.value
                                setNewSupportCategory({ ...newSupportCategory, items: newItems })
                              }}
                            />
                            <Input
                              placeholder="English"
                              value={item.en}
                              onChange={(e) => {
                                const newItems = [...newSupportCategory.items]
                                newItems[index].en = e.target.value
                                setNewSupportCategory({ ...newSupportCategory, items: newItems })
                              }}
                            />
                            <Input
                              type="number"
                              placeholder={t.itemCost}
                              value={item.cost}
                              onChange={(e) => {
                                const newItems = [...newSupportCategory.items]
                                newItems[index].cost = Number.parseInt(e.target.value) || 0
                                setNewSupportCategory({ ...newSupportCategory, items: newItems })
                              }}
                            />
                            <span className="text-sm text-gray-500 flex items-center">
                              {language === "ar" ? "جنيه" : "EGP"}
                            </span>
                            {newSupportCategory.items.length > 1 && (
                              <Button
                                type="button"
                                size="sm"
                                variant="outline"
                                onClick={() => {
                                  const newItems = newSupportCategory.items.filter((_, i) => i !== index)
                                  setNewSupportCategory({ ...newSupportCategory, items: newItems })
                                }}
                              >
                                <Trash2 className="h-3 w-3" />
                              </Button>
                            )}
                          </div>
                        ))}
                      </div>

                      <Button onClick={handleAddSupportCategory} className="w-full">
                        {t.save}
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {supportCategories.map((category) => (
                  <Card key={category.id} className="border-l-4 border-l-blue-500">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-2">
                          <div className="p-2 bg-blue-100 rounded-lg">
                            <span className="text-blue-600">{category.icon}</span>
                          </div>
                          <div>
                            <CardTitle className="text-lg">{category.title[language]}</CardTitle>
                            <CardDescription>{category.description[language]}</CardDescription>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Edit className="h-3 w-3 mr-1" />
                            {language === "ar" ? "تعديل" : "Edit"}
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="text-red-600 hover:text-red-700 bg-transparent"
                          >
                            <Trash2 className="h-3 w-3 mr-1" />
                            {language === "ar" ? "حذف" : "Delete"}
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {category.items.map((item, index) => (
                          <div key={index} className="flex justify-between items-center bg-gray-50 p-2 rounded">
                            <span className="text-sm">{item[language]}</span>
                            <span className="text-sm font-medium text-blue-600">
                              {item.cost} {language === "ar" ? "جنيه" : "EGP"}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Service Requests Tab - Previous code remains the same */}
            <TabsContent value="service-requests" className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">{t.serviceRequestsTab}</h3>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-purple-600 hover:bg-purple-700">
                      <Plus className="h-4 w-4 mr-2" />
                      {t.addServiceRequest}
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>{t.addServiceRequest}</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 max-h-96 overflow-y-auto">
                      <div>
                        <Label>{t.form.title}</Label>
                        <Input
                          value={newRequestForm.title}
                          onChange={(e) => setNewRequestForm({ ...newRequestForm, title: e.target.value })}
                        />
                      </div>

                      <div>
                        <Label>{t.form.description}</Label>
                        <Textarea
                          value={newRequestForm.description}
                          onChange={(e) => setNewRequestForm({ ...newRequestForm, description: e.target.value })}
                          rows={4}
                        />
                      </div>

                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <Label>{t.form.serviceType}</Label>
                          <Select
                            onValueChange={(value) => setNewRequestForm({ ...newRequestForm, serviceType: value })}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder={t.form.serviceType} />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="printing">
                                {language === "ar" ? "خدمات الطباعة والنشر" : "Printing & Publishing Services"}
                              </SelectItem>
                              <SelectItem value="design">
                                {language === "ar" ? "التصميم الجرافيكي" : "Graphic Design"}
                              </SelectItem>
                              <SelectItem value="advertising">
                                {language === "ar" ? "الإعلان والتسويق" : "Advertising & Marketing"}
                              </SelectItem>
                              <SelectItem value="programming">
                                {language === "ar" ? "البرمجة والتطوير" : "Programming & Development"}
                              </SelectItem>
                              <SelectItem value="mobile">
                                {language === "ar" ? "تطوير التطبيقات" : "Mobile App Development"}
                              </SelectItem>
                              <SelectItem value="content">
                                {language === "ar" ? "كتابة المحتوى" : "Content Writing"}
                              </SelectItem>
                              <SelectItem value="blogging">
                                {language === "ar" ? "التدوين والنشر" : "Blogging & Publishing"}
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label>{t.form.deadline}</Label>
                          <Input
                            type="date"
                            value={newRequestForm.deadline}
                            onChange={(e) => setNewRequestForm({ ...newRequestForm, deadline: e.target.value })}
                          />
                        </div>
                        <div>
                          <Label>{t.form.priority}</Label>
                          <Select onValueChange={(value) => setNewRequestForm({ ...newRequestForm, priority: value })}>
                            <SelectTrigger>
                              <SelectValue placeholder={t.form.priority} />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="high">{t.high}</SelectItem>
                              <SelectItem value="medium">{t.medium}</SelectItem>
                              <SelectItem value="low">{t.low}</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <Button onClick={handleAddServiceRequest} className="w-full">
                        {t.save}
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              <div className="space-y-4">
                {serviceRequests.map((request) => (
                  <Card key={request.id} className="border-l-4 border-l-purple-500">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <CardTitle className="text-lg">{request.title}</CardTitle>
                            <Badge className={`${getPriorityColor(request.priority)} border`}>
                              {t[request.priority]}
                            </Badge>
                            <Badge className={`${getStatusColor(request.status)} border`}>
                              {t.status[request.status]}
                            </Badge>
                          </div>
                          <CardDescription className="mb-3">{request.description}</CardDescription>
                          <div className="grid grid-cols-3 gap-4 text-sm">
                            <div>
                              <span className="font-medium">{t.form.serviceType}:</span>
                              <p>{request.serviceType}</p>
                            </div>
                            <div>
                              <span className="font-medium">{t.form.deadline}:</span>
                              <p>{request.deadline}</p>
                            </div>
                            <div>
                              <span className="font-medium">تاريخ الإنشاء:</span>
                              <p>{request.createdAt}</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2 ml-4">
                          <Button size="sm" variant="outline">
                            <Edit className="h-3 w-3 mr-1" />
                            {language === "ar" ? "تعديل" : "Edit"}
                          </Button>
                          <Button size="sm" variant="outline" className="text-red-600 bg-transparent">
                            <Trash2 className="h-3 w-3 mr-1" />
                            {language === "ar" ? "حذف" : "Delete"}
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Donation Categories Tab - Previous code remains the same */}
            <TabsContent value="categories" className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">{t.categoriesTab}</h3>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-green-600 hover:bg-green-700">
                      <Plus className="h-4 w-4 mr-2" />
                      {t.addItem}
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>{t.addItem}</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 max-h-96 overflow-y-auto">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label>{t.categoryTitle} (العربية)</Label>
                          <Input
                            value={newCategory.title.ar}
                            onChange={(e) =>
                              setNewCategory({
                                ...newCategory,
                                title: { ...newCategory.title, ar: e.target.value },
                              })
                            }
                          />
                        </div>
                        <div>
                          <Label>{t.categoryTitle} (English)</Label>
                          <Input
                            value={newCategory.title.en}
                            onChange={(e) =>
                              setNewCategory({
                                ...newCategory,
                                title: { ...newCategory.title, en: e.target.value },
                              })
                            }
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label>{t.campaignDescription} (العربية)</Label>
                          <Textarea
                            value={newCategory.description.ar}
                            onChange={(e) =>
                              setNewCategory({
                                ...newCategory,
                                description: { ...newCategory.description, ar: e.target.value },
                              })
                            }
                            rows={2}
                          />
                        </div>
                        <div>
                          <Label>{t.campaignDescription} (English)</Label>
                          <Textarea
                            value={newCategory.description.en}
                            onChange={(e) =>
                              setNewCategory({
                                ...newCategory,
                                description: { ...newCategory.description, en: e.target.value },
                              })
                            }
                            rows={2}
                          />
                        </div>
                      </div>

                      <div>
                        <Label>{t.categoryIcon}</Label>
                        <div className="grid grid-cols-6 gap-2 mt-2">
                          {["Heart", "Apple", "BookOpen", "Home", "Shield", "Stethoscope"].map((icon) => (
                            <button
                              key={icon}
                              type="button"
                              onClick={() => setNewCategory({ ...newCategory, icon })}
                              className={`p-2 border rounded ${newCategory.icon === icon ? "border-blue-500 bg-blue-50" : "border-gray-200"}`}
                            >
                              {icon}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <Label>{t.donationItems}</Label>
                          <Button
                            type="button"
                            size="sm"
                            onClick={() =>
                              setNewCategory({
                                ...newCategory,
                                items: [...newCategory.items, { ar: "", en: "" }],
                              })
                            }
                          >
                            <Plus className="h-3 w-3 mr-1" />
                            {t.addItem}
                          </Button>
                        </div>
                        {newCategory.items.map((item, index) => (
                          <div key={index} className="grid grid-cols-4 gap-2 mb-2">
                            <Input
                              placeholder="العربية"
                              value={item.ar}
                              onChange={(e) => {
                                const newItems = [...newCategory.items]
                                newItems[index].ar = e.target.value
                                setNewCategory({ ...newCategory, items: newItems })
                              }}
                            />
                            <Input
                              placeholder="English"
                              value={item.en}
                              onChange={(e) => {
                                const newItems = [...newCategory.items]
                                newItems[index].en = e.target.value
                                setNewCategory({ ...newCategory, items: newItems })
                              }}
                            />
                            <span className="text-sm text-gray-500 flex items-center">
                              {language === "ar" ? "جنيه" : "EGP"}
                            </span>
                            {newCategory.items.length > 1 && (
                              <Button
                                type="button"
                                size="sm"
                                variant="outline"
                                onClick={() => {
                                  const newItems = newCategory.items.filter((_, i) => i !== index)
                                  setNewCategory({ ...newCategory, items: newItems })
                                }}
                              >
                                <Trash2 className="h-3 w-3" />
                              </Button>
                            )}
                          </div>
                        ))}
                      </div>

                      <Button onClick={handleAddCategory} className="w-full">
                        {t.save}
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {donationCategories.map((category) => (
                  <Card key={category.id} className="border-l-4 border-l-green-500">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <CardTitle className="text-lg">{category.title?.[language] || "Untitled"}</CardTitle>
                          </div>
                          <CardDescription className="mb-3">{category.description?.[language] || ""}</CardDescription>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="font-medium">{t.categoryIcon}:</span>
                              <p>{category.icon}</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2 ml-4">
                          <Button size="sm" variant="outline">
                            <Edit className="h-3 w-3 mr-1" />
                            {language === "ar" ? "تعديل" : "Edit"}
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="text-red-600 bg-transparent"
                            onClick={() => handleDeleteCategory(category.id)}
                          >
                            <Trash2 className="h-3 w-3 mr-1" />
                            {language === "ar" ? "حذف" : "Delete"}
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {category.items?.map((item, index) => (
                          <div key={index} className="flex justify-between items-center bg-gray-50 p-2 rounded">
                            <span className="text-sm">{item?.[language] || "No description"}</span>
                            <span className="text-sm font-medium text-blue-600">
                              {language === "ar" ? "جنيه" : "EGP"}
                            </span>
                          </div>
                        )) || []}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Campaigns Tab - Previous code remains the same */}
            <TabsContent value="campaigns" className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">{t.campaignsTab}</h3>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      <Plus className="h-4 w-4 mr-2" />
                      {t.addCampaign}
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>{t.addCampaign}</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 max-h-96 overflow-y-auto">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label>{t.campaignTitle} (العربية)</Label>
                          <Input
                            value={newCampaign.title}
                            onChange={(e) =>
                              setNewCampaign({
                                ...newCampaign,
                                title: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div>
                          <Label>{t.campaignTitle} (English)</Label>
                          <Input
                            value={newCampaign.title}
                            onChange={(e) =>
                              setNewCampaign({
                                ...newCampaign,
                                title: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label>{t.campaignDescription} (العربية)</Label>
                          <Textarea
                            value={newCampaign.description}
                            onChange={(e) =>
                              setNewCampaign({
                                ...newCampaign,
                                description: e.target.value,
                              })
                            }
                            rows={2}
                          />
                        </div>
                        <div>
                          <Label>{t.campaignDescription} (English)</Label>
                          <Textarea
                            value={newCampaign.description}
                            onChange={(e) =>
                              setNewCampaign({
                                ...newCampaign,
                                description: e.target.value,
                              })
                            }
                            rows={2}
                          />
                        </div>
                      </div>

                      <div>
                        <Label>{t.targetAmount}</Label>
                        <Input
                          type="number"
                          value={newCampaign.targetAmount}
                          onChange={(e) =>
                            setNewCampaign({
                              ...newCampaign,
                              targetAmount: e.target.value,
                            })
                          }
                        />
                      </div>

                      <Button onClick={handleAddCampaign} className="w-full">
                        {t.save}
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {campaigns.map((campaign) => (
                  <Card key={campaign.id} className="border-l-4 border-l-blue-500">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <CardTitle className="text-lg">{campaign.title}</CardTitle>
                          </div>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="font-medium">{t.participants}:</span>
                              <p>{campaign.participants.toLocaleString()}</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2 ml-4">
                          <Button size="sm" variant="outline">
                            <Edit className="h-3 w-3 mr-1" />
                            {language === "ar" ? "تعديل" : "Edit"}
                          </Button>
                          <Button size="sm" variant="outline" className="text-red-600 bg-transparent">
                            <Trash2 className="h-3 w-3 mr-1" />
                            {language === "ar" ? "حذف" : "Delete"}
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Statistics Tab - Previous code remains the same */}
            <TabsContent value="statistics\
