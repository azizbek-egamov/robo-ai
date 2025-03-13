"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function FeaturedCourses() {
  const { t } = useLanguage()

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
    },
  ]

  const { language } = useLanguage()

  return (
    <section className="py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">{t("featuredCourses")}</h2>
        <Button variant="ghost" asChild>
          <Link href="/courses">{t("viewAll")}</Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
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
              <p className="text-muted-foreground">{course.description[language as keyof typeof course.description]}</p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href={`/courses/${course.id}`}>{t("learnMore")}</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

