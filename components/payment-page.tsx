"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, ArrowRight, CreditCard, Smartphone, Building, CheckCircle, Loader2 } from "lucide-react"

interface PaymentPageProps {
  language: "ar" | "en"
  onBack: () => void
  onComplete: () => void
}

export function PaymentPage({ language, onBack, onComplete }: PaymentPageProps) {
  const [selectedMethod, setSelectedMethod] = useState<string>("")
  const [paymentData, setPaymentData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    phoneNumber: "",
    walletNumber: "",
  })
  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentSuccess, setPaymentSuccess] = useState(false)

  const content = {
    ar: {
      title: "اختر طريقة الدفع",
      subtitle: "اختر الطريقة المناسبة لك لإتمام التبرع",
      paymentMethods: "طرق الدفع المتاحة",
      cardPayment: "الدفع بالبطاقة",
      mobileWallet: "المحفظة الإلكترونية",
      bankTransfer: "التحويل البنكي",
      cardNumber: "رقم البطاقة",
      expiryDate: "تاريخ الانتهاء",
      cvv: "رمز الأمان",
      phoneNumber: "رقم الهاتف",
      walletNumber: "رقم المحفظة",
      processPayment: "إتمام الدفع",
      back: "رجوع",
      processing: "جاري المعالجة...",
      success: "تم الدفع بنجاح!",
      successMessage: "شكراً لك! تم تسجيل تبرعك بنجاح وسيتم خصم المبلغ يومياً",
      backToHome: "العودة للرئيسية",
      testMode: "وضع التجربة - لن يتم خصم أي مبالغ فعلية",
    },
    en: {
      title: "Choose Payment Method",
      subtitle: "Select the most convenient method to complete your donation",
      paymentMethods: "Available Payment Methods",
      cardPayment: "Card Payment",
      mobileWallet: "Mobile Wallet",
      bankTransfer: "Bank Transfer",
      cardNumber: "Card Number",
      expiryDate: "Expiry Date",
      cvv: "CVV",
      phoneNumber: "Phone Number",
      walletNumber: "Wallet Number",
      processPayment: "Process Payment",
      back: "Back",
      processing: "Processing...",
      success: "Payment Successful!",
      successMessage: "Thank you! Your donation has been registered successfully and the amount will be deducted daily",
      backToHome: "Back to Home",
      testMode: "Test Mode - No actual charges will be made",
    },
  }

  const t = content[language]

  const paymentMethods = [
    {
      id: "card",
      name: language === "ar" ? "بطاقة ائتمان/خصم" : "Credit/Debit Card",
      icon: CreditCard,
      description: language === "ar" ? "فيزا، ماستركارد، أو بطاقات محلية" : "Visa, Mastercard, or local cards",
    },
    {
      id: "vodafone-cash",
      name: "Vodafone Cash",
      icon: Smartphone,
      description: language === "ar" ? "ادفع من محفظة فودافون كاش" : "Pay with Vodafone Cash wallet",
    },
    {
      id: "orange-money",
      name: "Orange Money",
      icon: Smartphone,
      description: language === "ar" ? "ادفع من محفظة أورانج موني" : "Pay with Orange Money wallet",
    },
    {
      id: "etisalat-cash",
      name: "Etisalat Cash",
      icon: Smartphone,
      description: language === "ar" ? "ادفع من محفظة اتصالات كاش" : "Pay with Etisalat Cash wallet",
    },
    {
      id: "fawry",
      name: "Fawry",
      icon: Building,
      description: language === "ar" ? "ادفع من خلال فوري" : "Pay through Fawry",
    },
    {
      id: "instapay",
      name: "InstaPay",
      icon: Smartphone,
      description: language === "ar" ? "ادفع من خلال انستاباي" : "Pay through InstaPay",
    },
  ]

  const handlePayment = async () => {
    setIsProcessing(true)

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 3000))

    setIsProcessing(false)
    setPaymentSuccess(true)
  }

  if (paymentSuccess) {
    return (
      <div
        className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12 flex items-center justify-center"
        dir={language === "ar" ? "rtl" : "ltr"}
      >
        <Card className="max-w-md w-full mx-4">
          <CardContent className="p-8 text-center">
            <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-green-800 mb-4">{t.success}</h2>
            <p className="text-gray-600 mb-6">{t.successMessage}</p>
            <Button onClick={onComplete} className="w-full bg-green-600 hover:bg-green-700">
              {t.backToHome}
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12" dir={language === "ar" ? "rtl" : "ltr"}>
      <div className="container mx-auto px-4 max-w-2xl">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-green-800">{t.title}</CardTitle>
            <CardDescription className="text-lg">{t.subtitle}</CardDescription>
            <div className="bg-yellow-100 border border-yellow-400 rounded-lg p-3 mt-4">
              <p className="text-yellow-800 text-sm">{t.testMode}</p>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Payment Methods */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{t.paymentMethods}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {paymentMethods.map((method) => {
                    const IconComponent = method.icon
                    return (
                      <button
                        key={method.id}
                        onClick={() => setSelectedMethod(method.id)}
                        className={`p-4 border-2 rounded-lg text-left transition-all ${
                          selectedMethod === method.id
                            ? "border-green-500 bg-green-50"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <IconComponent className="h-8 w-8 text-green-600" />
                          <div>
                            <h4 className="font-semibold">{method.name}</h4>
                            <p className="text-sm text-gray-600">{method.description}</p>
                          </div>
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Payment Form */}
              {selectedMethod && (
                <div className="space-y-4">
                  {selectedMethod === "card" && (
                    <>
                      <div>
                        <Label htmlFor="cardNumber">{t.cardNumber}</Label>
                        <Input
                          id="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          value={paymentData.cardNumber}
                          onChange={(e) => setPaymentData({ ...paymentData, cardNumber: e.target.value })}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiryDate">{t.expiryDate}</Label>
                          <Input
                            id="expiryDate"
                            placeholder="MM/YY"
                            value={paymentData.expiryDate}
                            onChange={(e) => setPaymentData({ ...paymentData, expiryDate: e.target.value })}
                          />
                        </div>
                        <div>
                          <Label htmlFor="cvv">{t.cvv}</Label>
                          <Input
                            id="cvv"
                            placeholder="123"
                            value={paymentData.cvv}
                            onChange={(e) => setPaymentData({ ...paymentData, cvv: e.target.value })}
                          />
                        </div>
                      </div>
                    </>
                  )}

                  {(selectedMethod === "vodafone-cash" ||
                    selectedMethod === "orange-money" ||
                    selectedMethod === "etisalat-cash") && (
                    <div>
                      <Label htmlFor="phoneNumber">{t.phoneNumber}</Label>
                      <Input
                        id="phoneNumber"
                        placeholder="01xxxxxxxxx"
                        value={paymentData.phoneNumber}
                        onChange={(e) => setPaymentData({ ...paymentData, phoneNumber: e.target.value })}
                      />
                    </div>
                  )}

                  {(selectedMethod === "fawry" || selectedMethod === "instapay") && (
                    <div>
                      <Label htmlFor="walletNumber">{t.walletNumber}</Label>
                      <Input
                        id="walletNumber"
                        placeholder="01xxxxxxxxx"
                        value={paymentData.walletNumber}
                        onChange={(e) => setPaymentData({ ...paymentData, walletNumber: e.target.value })}
                      />
                    </div>
                  )}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-4 pt-6">
                <Button
                  type="button"
                  variant="outline"
                  onClick={onBack}
                  className="flex-1 bg-transparent"
                  disabled={isProcessing}
                >
                  {language === "ar" ? <ArrowRight className="mr-2 h-4 w-4" /> : <ArrowLeft className="mr-2 h-4 w-4" />}
                  {t.back}
                </Button>
                <Button
                  onClick={handlePayment}
                  className="flex-1 bg-green-600 hover:bg-green-700"
                  disabled={!selectedMethod || isProcessing}
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      {t.processing}
                    </>
                  ) : (
                    <>
                      {t.processPayment}
                      {language === "ar" ? (
                        <ArrowLeft className="ml-2 h-4 w-4" />
                      ) : (
                        <ArrowRight className="ml-2 h-4 w-4" />
                      )}
                    </>
                  )}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
