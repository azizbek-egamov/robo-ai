"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useLanguage } from "@/components/language-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, CheckCircle } from "lucide-react"
import Link from "next/link"

// URL parametridan kurs ID sini olish uchun useSearchParams hook ni qo'shamiz
import { useSearchParams } from "next/navigation"

export default function EnrollPage() {
  const { language } = useLanguage()

  // Telefon raqami uchun o'zgarishlar

  // useState qismida formData ni o'zgartirish
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "+998 ", // Oldindan +998 bilan to'ldirish
    courseId: "",
    comments: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  // Courses data - in a real app, this would come from an API or database
  const courses = [
    {
      id: 1,
      title: {
        en: "Introduction to Robotics",
        ru: "Введение в робототехнику",
        uz: "Robototexnikaga kirish",
      },
    },
    {
      id: 2,
      title: {
        en: "AI Fundamentals",
        ru: "Основы искусственного интеллекта",
        uz: "Sun'iy intellekt asoslari",
      },
    },
    {
      id: 3,
      title: {
        en: "Programming for Robotics",
        ru: "Программирование для робототехники",
        uz: "Robototexnika uchun dasturlash",
      },
    },
    {
      id: 4,
      title: {
        en: "Machine Learning for Robotics",
        ru: "Машинное обучение для робототехники",
        uz: "Robototexnika uchun mashinali o'rganish",
      },
    },
    {
      id: 5,
      title: {
        en: "Sensor Integration",
        ru: "Интеграция датчиков",
        uz: "Sensorlarni integratsiyalash",
      },
    },
    {
      id: 6,
      title: {
        en: "Advanced AI for Robotics",
        ru: "Продвинутый ИИ для робототехники",
        uz: "Robototexnika uchun ilg'or sun'iy intellekt",
      },
    },
  ]

  // useSearchParams hook ni qo'llab, URL parametridan kurs ID sini olish
  const searchParams = useSearchParams()
  const courseIdParam = searchParams.get("course")

  // useEffect orqali kurs ID si o'zgarganida formData ni yangilash
  useEffect(() => {
    if (courseIdParam) {
      try {
        const parsedCourseId = Number.parseInt(courseIdParam, 10)
        if (!isNaN(parsedCourseId)) {
          setFormData((prev) => ({ ...prev, courseId: parsedCourseId.toString() }))
        }
      } catch (error) {
        console.error("Error parsing course ID:", error)
      }
    }
  }, [courseIdParam])

  const pageContent = {
    en: {
      title: "Course Enrollment",
      description: "Fill out the form below to enroll in one of our courses.",
      firstName: "First Name",
      lastName: "Last Name",
      phone: "Phone Number",
      phoneFormat: "Format: +998 XX XXX XX XX",
      course: "Select Course",
      selectCourse: "Select a course",
      comments: "Comments (Optional)",
      commentsPlaceholder: "Any additional information or questions...",
      submit: "Submit Enrollment",
      submitting: "Submitting...",
      backToCourses: "Back to Courses",
      successTitle: "Enrollment Submitted!",
      successMessage:
        "Thank you for enrolling in our course. We will contact you shortly to confirm your enrollment and provide further details.",
      errors: {
        firstNameRequired: "First name is required",
        lastNameRequired: "Last name is required",
        phoneRequired: "Phone number is required",
        phoneInvalid: "Please enter a valid phone number",
        courseRequired: "Please select a course",
      },
    },
    ru: {
      title: "Запись на курс",
      description: "Заполните форму ниже, чтобы записаться на один из наших курсов.",
      firstName: "Имя",
      lastName: "Фамилия",
      phone: "Номер телефона",
      phoneFormat: "Формат: +998 XX XXX XX XX",
      course: "Выберите курс",
      selectCourse: "Выберите курс",
      comments: "Комментарии (Необязательно)",
      commentsPlaceholder: "Любая дополнительная информация или вопросы...",
      submit: "Отправить заявку",
      submitting: "Отправка...",
      backToCourses: "Назад к курсам",
      successTitle: "Заявка отправлена!",
      successMessage:
        "Спасибо за запись на наш курс. Мы свяжемся с вами в ближайшее время для подтверждения вашей записи и предоставления дополнительной информации.",
      errors: {
        firstNameRequired: "Имя обязательно",
        lastNameRequired: "Фамилия обязательна",
        phoneRequired: "Номер телефона обязателен",
        phoneInvalid: "Пожалуйста, введите действительный номер телефона",
        courseRequired: "Пожалуйста, выберите курс",
      },
    },
    uz: {
      title: "Kursga ro'yxatdan o'tish",
      description: "Kurslarimizdan biriga ro'yxatdan o'tish uchun quyidagi formani to'ldiring.",
      firstName: "Ism",
      lastName: "Familiya",
      phone: "Telefon raqami",
      phoneFormat: "Format: +998 XX XXX XX XX",
      course: "Kursni tanlang",
      selectCourse: "Kursni tanlang",
      comments: "Izohlar (Ixtiyoriy)",
      commentsPlaceholder: "Qo'shimcha ma'lumot yoki savollar...",
      submit: "Ro'yxatdan o'tish",
      submitting: "Yuborilmoqda...",
      backToCourses: "Kurslarga qaytish",
      successTitle: "Ro'yxatdan o'tish yuborildi!",
      successMessage:
        "Kursimizga ro'yxatdan o'tganingiz uchun rahmat. Tez orada siz bilan bog'lanib, ro'yxatdan o'tganingizni tasdiqlaymiz va qo'shimcha ma'lumotlarni taqdim etamiz.",
      errors: {
        firstNameRequired: "Ism kiritilishi shart",
        lastNameRequired: "Familiya kiritilishi shart",
        phoneRequired: "Telefon raqami kiritilishi shart",
        phoneInvalid: "Iltimos, to'g'ri telefon raqamini kiriting",
        courseRequired: "Iltimos, kursni tanlang",
      },
    },
  }

  const content = pageContent[language as keyof typeof pageContent]

  // handleChange funksiyasini o'zgartirish
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target

    // Telefon raqami uchun maxsus ishlov berish
    if (name === "phone") {
      // Faqat +998 va raqamlarni qoldirish
      let phoneNumber = value

      // Agar foydalanuvchi +998 ni o'chirmoqchi bo'lsa, ruxsat bermaslik
      if (!phoneNumber.startsWith("+998 ")) {
        phoneNumber = "+998 "
      }

      // +998 dan keyingi qismni olish
      const numberPart = phoneNumber.substring(5).replace(/\D/g, "")

      // Maksimal 9 ta raqam cheklovi
      const limitedNumber = numberPart.substring(0, 9)

      // Raqamlarni formatlash: XX XXX XX XX
      let formattedNumber = "+998 "

      if (limitedNumber.length > 0) {
        formattedNumber += limitedNumber.substring(0, 2)
      }

      if (limitedNumber.length > 2) {
        formattedNumber += " " + limitedNumber.substring(2, 5)
      }

      if (limitedNumber.length > 5) {
        formattedNumber += " " + limitedNumber.substring(5, 7)
      }

      if (limitedNumber.length > 7) {
        formattedNumber += " " + limitedNumber.substring(7, 9)
      }

      setFormData((prev) => ({ ...prev, phone: formattedNumber }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleCourseChange = (value: string) => {
    setFormData((prev) => ({ ...prev, courseId: value }))
  }

  // Validatsiya funksiyasini o'zgartirish
  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.firstName.trim()) {
      newErrors.firstName = content.errors.firstNameRequired
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = content.errors.lastNameRequired
    }

    // Telefon raqami validatsiyasi
    if (formData.phone.length < 15) {
      // +998 XX XXX XX XX = 15 belgi
      newErrors.phone = content.errors.phoneRequired
    }

    if (!formData.courseId) {
      newErrors.courseId = content.errors.courseRequired
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)

      // In a real app, you would send the data to your backend here
      console.log("Form submitted:", formData)
    }, 1500)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <Button variant="outline" asChild className="mb-6">
            <Link href="/courses">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {content.backToCourses}
            </Link>
          </Button>

          {isSubmitted ? (
            <Card className="max-w-md mx-auto">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-300" />
                  </div>
                </div>
                <CardTitle className="text-center">{content.successTitle}</CardTitle>
                <CardDescription className="text-center">{content.successMessage}</CardDescription>
              </CardHeader>
              <CardFooter className="flex justify-center">
                <Button asChild>
                  <Link href="/courses">{content.backToCourses}</Link>
                </Button>
              </CardFooter>
            </Card>
          ) : (
            <Card className="max-w-md mx-auto">
              <CardHeader>
                <CardTitle>{content.title}</CardTitle>
                <CardDescription>{content.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">{content.firstName} *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={errors.firstName ? "border-red-500" : ""}
                    />
                    {errors.firstName && <p className="text-sm text-red-500">{errors.firstName}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="lastName">{content.lastName} *</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={errors.lastName ? "border-red-500" : ""}
                    />
                    {errors.lastName && <p className="text-sm text-red-500">{errors.lastName}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">{content.phone} *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={errors.phone ? "border-red-500" : ""}
                    />
                    <p className="text-xs text-muted-foreground">{content.phoneFormat}</p>
                    {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="course">{content.course} *</Label>
                    <Select value={formData.courseId} onValueChange={handleCourseChange}>
                      <SelectTrigger className={errors.courseId ? "border-red-500" : ""}>
                        <SelectValue placeholder={content.selectCourse} />
                      </SelectTrigger>
                      <SelectContent>
                        {courses.map((course) => (
                          <SelectItem key={course.id} value={course.id.toString()}>
                            {course.title[language as keyof typeof course.title]}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.courseId && <p className="text-sm text-red-500">{errors.courseId}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="comments">{content.comments}</Label>
                    <Textarea
                      id="comments"
                      name="comments"
                      value={formData.comments}
                      onChange={handleChange}
                      placeholder={content.commentsPlaceholder}
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                        {content.submitting}
                      </>
                    ) : (
                      content.submit
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

