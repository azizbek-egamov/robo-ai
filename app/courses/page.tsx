"use client"

import { useLanguage } from "@/components/language-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CoursesPage() {
  const { t, language } = useLanguage()

  const courseCategories = {
    en: [
      { id: "beginner", name: "Beginner" },
      { id: "intermediate", name: "Intermediate" },
      { id: "advanced", name: "Advanced" },
    ],
    ru: [
      { id: "beginner", name: "Начальный" },
      { id: "intermediate", name: "Средний" },
      { id: "advanced", name: "Продвинутый" },
    ],
    uz: [
      { id: "beginner", name: "Boshlang'ich" },
      { id: "intermediate", name: "O'rta" },
      { id: "advanced", name: "Yuqori" },
    ],
  }

  const courses = [
    {
      id: 1,
      title: {
        en: "Introduction to Robotics",
        ru: "Введение в робототехнику",
        uz: "Robototexnikaga kirish",
      },
      description: {
        en: "Learn the basics of robotics and build your first robot",
        ru: "Изучите основы робототехники и соберите своего первого робота",
        uz: "Robototexnika asoslarini o'rganing va birinchi robotingizni yarating",
      },
      image: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?q=80&w=1974&auto=format&fit=crop",
      category: "beginner",
      duration: {
        en: "4 weeks",
        ru: "4 недели",
        uz: "4 hafta",
      },
    },
    {
      id: 2,
      title: {
        en: "AI Fundamentals",
        ru: "Основы искусственного интеллекта",
        uz: "Sun'iy intellekt asoslari",
      },
      description: {
        en: "Understand the core concepts of artificial intelligence",
        ru: "Поймите основные концепции искусственного интеллекта",
        uz: "Sun'iy intellektning asosiy tushunchalarini tushunish",
      },
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
      category: "beginner",
      duration: {
        en: "6 weeks",
        ru: "6 недель",
        uz: "6 hafta",
      },
    },
    {
      id: 3,
      title: {
        en: "Programming for Robotics",
        ru: "Программирование для робототехники",
        uz: "Robototexnika uchun dasturlash",
      },
      description: {
        en: "Learn how to program robots using Python",
        ru: "Узнайте, как программировать роботов с помощью Python",
        uz: "Python yordamida robotlarni dasturlashni o'rganing",
      },
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop",
      category: "intermediate",
      duration: {
        en: "8 weeks",
        ru: "8 недель",
        uz: "8 hafta",
      },
    },
    {
      id: 4,
      title: {
        en: "Machine Learning for Robotics",
        ru: "Машинное обучение для робототехники",
        uz: "Robototexnika uchun mashinali o'rganish",
      },
      description: {
        en: "Apply machine learning algorithms to robotic systems",
        ru: "Применяйте алгоритмы машинного обучения к робототехническим системам",
        uz: "Robototexnika tizimlariga mashinali o'rganish algoritmlarini qo'llash",
      },
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop",
      category: "advanced",
      duration: {
        en: "10 weeks",
        ru: "10 недель",
        uz: "10 hafta",
      },
    },
    {
      id: 5,
      title: {
        en: "Sensor Integration",
        ru: "Интеграция датчиков",
        uz: "Sensorlarni integratsiyalash",
      },
      description: {
        en: "Learn how to integrate various sensors into your robots",
        ru: "Узнайте, как интегрировать различные датчики в ваших роботов",
        uz: "Robotlaringizga turli xil sensorlarni qanday integratsiya qilishni o'rganing",
      },
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop",
      category: "intermediate",
      duration: {
        en: "6 weeks",
        ru: "6 недель",
        uz: "6 hafta",
      },
    },
    {
      id: 6,
      title: {
        en: "Advanced AI for Robotics",
        ru: "Продвинутый ИИ для робототехники",
        uz: "Robototexnika uchun ilg'or sun'iy intellekt",
      },
      description: {
        en: "Implement advanced AI algorithms in robotic systems",
        ru: "Внедряйте продвинутые алгоритмы ИИ в робототехнические системы",
        uz: "Robototexnika tizimlarida ilg'or sun'iy intellekt algoritmlarini joriy qilish",
      },
      image: "https://images.unsplash.com/photo-1673288895439-0e4883ea8dad?q=80&w=2070&auto=format&fit=crop",
      category: "advanced",
      duration: {
        en: "12 weeks",
        ru: "12 недель",
        uz: "12 hafta",
      },
    },
  ]

  const pageTitle = {
    en: "Courses",
    ru: "Курсы",
    uz: "Kurslar",
  }

  const pageDescription = {
    en: "Explore our comprehensive range of robotics and AI courses designed for students of all levels.",
    ru: "Изучите наш комплексный набор курсов по робототехнике и ИИ, разработанных для студентов всех уровней.",
    uz: "Barcha darajadagi o'quvchilar uchun mo'ljallangan robototexnika va sun'iy intellekt kurslarimizning keng doirasini o'rganing.",
  }

  const filterByCategory = (category: string) => {
    return courses.filter((course) => course.category === category)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">{pageTitle[language as keyof typeof pageTitle]}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {pageDescription[language as keyof typeof pageDescription]}
            </p>
          </div>

          <Tabs defaultValue="beginner" className="mb-12">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              {courseCategories[language as keyof typeof courseCategories].map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {courseCategories[language as keyof typeof courseCategories].map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filterByCategory(category.id).map((course) => (
                    <Card key={course.id} className="overflow-hidden">
                      <div className="relative h-48">
                        <Image
                          src={course.image || "/placeholder.svg"}
                          alt={course.title[language as keyof typeof course.title]}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>{course.title[language as keyof typeof course.title]}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">
                          {course.description[language as keyof typeof course.description]}
                        </p>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <span className="inline-block px-2 py-1 rounded-full bg-primary/10 text-primary">
                            {course.duration[language as keyof typeof course.duration]}
                          </span>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button asChild className="w-full">
                          <Link href={`/courses/${course.id}`}>
                            {language === "en" && "Enroll Now"}
                            {language === "ru" && "Записаться"}
                            {language === "uz" && "Ro'yxatdan o'tish"}
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  )
}

