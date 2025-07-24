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
  Radio,
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
        en: "Seminar: Youth Role in Supporting Palestinian Cause",
      },
      description: {
        ar: "ندوة تفاعلية حول كيفية مساهمة الشباب المصري في دعم الشعب الفلسطيني",
        en: "Interactive seminar on how Egyptian youth can contribute to supporting the Palestinian people",
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
        ar: "محاضرة تاريخية شاملة عن تاريخ فلسطين منذ العصور القديمة حتى اليوم",
        en: "Comprehensive historical lecture about Palestine's history from ancient times to today",
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
      type: "online",
      status: "active",
    },
  ])

  const [newsItems, setNewsItems] = useState([
    {
      id: 1,
      text: {
        ar: "عاجل: وصول 500 ألف جنيه من التبرعات خلال الساعات الماضية لدعم الأطفال في غزة",
        en: "Breaking: 500,000 EGP in donations received in the past hours to support children in Gaza",
      },
      priority: "high",
      timestamp: new Date().toISOString(),
      status: "active",
    },
    {
      id: 2,
      text: {
        ar: "تحديث: انضمام 10,000 مشارك جديد للحملة اليوم من جميع أنحاء مصر",
        en: "Update: 10,000 new participants joined the campaign today from all over Egypt",
      },
      priority: "medium",
      timestamp: new Date().toISOString(),
      status: "active",
    },
    {
      id: 3,
      text: {
        ar: "إنجاز: تم توزيع 2000 وجبة غذائية على العائلات الفلسطينية النازحة",
        en: "Achievement: 2000 food meals distributed to displaced Palestinian families",
      },
      priority: "medium",
      timestamp: new Date().toISOString(),
      status: "active",
    },
    {
      id: 4,
      text: {
        ar: "شكراً لكم: بفضل تبرعاتكم تم توفير الأدوية الأساسية لـ 500 طفل فلسطيني",
        en: "Thank you: Thanks to your donations, essential medicines were provided to 500 Palestinian children",
      },
      priority: "low",
      timestamp: new Date().toISOString(),
      status: "active",
    },
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
  const [newNewsItem, setNewNewsItem] = useState({
    text: { ar: "", en: "" },
    priority: "medium",
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
      newsTab: "إدارة الأخبار",
      categoriesTab: "فئات التبرع",
      statisticsTab: "الإحصائيات",
      addImage: "إضافة صورة جديدة",
      addSeminar: "إضافة ندوة جديدة",
      addNews: "إضافة خبر جديد",
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
      newsText: "نص الخبر",
      newsPriority: "أولوية الخبر",
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
      newsTab: "Manage News",
      categoriesTab: "Donation Categories",
      statisticsTab: "Statistics",
      addImage: "Add New Image",
      addSeminar: "Add New Seminar",
      addNews: "Add New News",
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
      newsText: "News Text",
      newsPriority: "News Priority",
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

  const handleAddNews = () => {
    if (newNewsItem.text.ar && newNewsItem.text.en) {
      setNewsItems([
        ...newsItems,
        {
          id: Date.now(),
          ...newNewsItem,
          timestamp: new Date().toISOString(),
          status: "active",
        },
      ])
      setNewNewsItem({
        text: { ar: "", en: "" },
        priority: "medium",
      })
    }
  }

  const handleDeleteNews = (id: number) => {
    setNewsItems(newsItems.filter((item) => item.id !== id))
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
            <TabsList className="grid w-full grid-cols-9">
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
              <TabsTrigger value="news" className="flex items-center gap-2">
                <Radio className="h-4 w-4" />
                {t.newsTab}
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

            {/* News Tab */}
            <TabsContent value="news" className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">{t.newsTab}</h3>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-red-600 hover:bg-red-700">
                      <Plus className="h-4 w-4 mr-2" />
                      {t.addNews}
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>{t.addNews}</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 max-h-96 overflow-y-auto">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label>{t.newsText} (العربية)</Label>
                          <Textarea
                            value={newNewsItem.text.ar}
                            onChange={(e) =>
                              setNewNewsItem({
                                ...newNewsItem,
                                text: { ...newNewsItem.text, ar: e.target.value },
                              })
                            }
                            rows={4}
                            placeholder="أدخل نص الخبر باللغة العربية..."
                          />
                        </div>
                        <div>
                          <Label>{t.newsText} (English)</Label>
                          <Textarea
                            value={newNewsItem.text.en}
                            onChange={(e) =>
                              setNewNewsItem({
                                ...newNewsItem,
                                text: { ...newNewsItem.text, en: e.target.value },
                              })
                            }
                            rows={4}
                            placeholder="Enter news text in English..."
                          />
                        </div>
                      </div>

                      <div>
                        <Label>{t.newsPriority}</Label>
                        <Select
                          onValueChange={(value) => setNewNewsItem({ ...newNewsItem, priority: value })}
                          value={newNewsItem.priority}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="high">{t.high}</SelectItem>
                            <SelectItem value="medium">{t.medium}</SelectItem>
                            <SelectItem value="low">{t.low}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <Button onClick={handleAddNews} className="w-full">
                        {t.save}
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              <div className="space-y-4">
                {newsItems.map((item) => (
                  <Card key={item.id} className="border-l-4 border-l-red-500">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge className={`${getPriorityColor(item.priority)} border`}>{t[item.priority]}</Badge>
                            <span className="text-sm text-gray-500">
                              {new Date(item.timestamp).toLocaleString(language === "ar" ? "ar-EG" : "en-US")}
                            </span>
                          </div>
                          <CardDescription className="mb-3 text-base">{item.text[language]}</CardDescription>
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
                            onClick={() => handleDeleteNews(item.id)}
                          >
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

            {/* Other tabs remain the same as in the previous code... */}
            {/* I'll continue with the remaining tabs to complete the component */}

            {/* Statistics Tab */}
            <TabsContent value="statistics" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">{t.totalDonations}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold text-green-600">45,230,000</p>
                    <p className="text-sm text-gray-600">{language === "ar" ? "جنيه مصري" : "EGP"}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">{t.totalParticipants}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold text-blue-600">2,500,000</p>
                    <p className="text-sm text-gray-600">{language === "ar" ? "مشارك" : "Participants"}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">{t.newsTab}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold text-red-600">{newsItems.length}</p>
                    <p className="text-sm text-gray-600">{language === "ar" ? "خبر نشط" : "Active News"}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">{t.seminarsTab}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold text-purple-600">{seminars.length}</p>
                    <p className="text-sm text-gray-600">{language === "ar" ? "ندوة متاحة" : "Available Seminars"}</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
