"use client"

import { useLanguage } from "@/components/language-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Download, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function ResourcePage({ params }: { params: { category: string; id: string } }) {
  const { language } = useLanguage()
  const { category, id } = params
  const [content, setContent] = useState<string>("")

  // Resources data - in a real app, this would come from an API or database
  const resourcesData = {
    tutorials: [
      {
        id: "1",
        title: {
          en: "Getting Started with Arduino",
          ru: "Начало работы с Arduino",
          uz: "Arduino bilan ishlashni boshlash",
        },
        description: {
          en: "A comprehensive guide to setting up and programming your first Arduino project.",
          ru: "Полное руководство по настройке и программированию вашего первого проекта Arduino.",
          uz: "Birinchi Arduino loyihangizni sozlash va dasturlash bo'yicha keng qamrovli qo'llanma.",
        },
        content: {
          en: "# Getting Started with Arduino\n\n## Introduction\n\nArduino is an open-source electronics platform based on easy-to-use hardware and software. It's intended for anyone making interactive projects.\n\n## What You'll Need\n\n- Arduino board (UNO recommended for beginners)\n- USB cable\n- Computer with Arduino IDE installed\n- Basic electronic components (LEDs, resistors, breadboard)\n\n## Step 1: Install the Arduino IDE\n\n1. Go to arduino.cc/en/software\n2. Download the version for your operating system\n3. Install the software following the instructions",
          ru: "# Начало работы с Arduino\n\n## Введение\n\nArduino — это платформа с открытым исходным кодом, основанная на простом в использовании оборудовании и программном обеспечении. Она предназначена для всех, кто создает интерактивные проекты.\n\n## Что вам понадобится\n\n- Плата Arduino (для начинающих рекомендуется UNO)\n- USB-кабель\n- Компьютер с установленной Arduino IDE\n- Базовые электронные компоненты (светодиоды, резисторы, макетная плата)",
          uz: "# Arduino bilan ishlashni boshlash\n\n## Kirish\n\nArduino - bu foydalanish oson bo'lgan apparat va dasturiy ta'minotga asoslangan ochiq manbali elektronika platformasi. U interaktiv loyihalar yaratayotgan har bir kishi uchun mo'ljallangan.\n\n## Sizga nima kerak bo'ladi\n\n- Arduino plata (boshlang'ichlar uchun UNO tavsiya etiladi)\n- USB kabeli\n- Arduino IDE o'rnatilgan kompyuter\n- Asosiy elektron komponentlar (LED chiroqlar, rezistorlar, maket platasi)",
        },
        image: "https://images.unsplash.com/photo-1553406830-ef2513450d76?q=80&w=1974&auto=format&fit=crop",
        downloadable: false,
        externalLink: false,
      },
      {
        id: "2",
        title: {
          en: "Introduction to Python for Robotics",
          ru: "Введение в Python для робототехники",
          uz: "Robototexnika uchun Python ga kirish",
        },
        description: {
          en: "Learn the basics of Python programming specifically for robotics applications.",
          ru: "Изучите основы программирования на Python специально для приложений робототехники.",
          uz: "Aynan robototexnika ilovalar uchun Python dasturlashning asoslarini o'rganing.",
        },
        content: {
          en: "# Introduction to Python for Robotics\n\n## Why Python for Robotics?\n\nPython has become one of the most popular programming languages for robotics due to its:\n\n- Simplicity and readability\n- Rich ecosystem of libraries\n- Strong community support\n- Cross-platform compatibility\n- Integration with hardware",
          ru: "# Введение в Python для робототехники\n\n## Почему Python для робототехники?\n\nPython стал одним из самых популярных языков программирования для робототехники благодаря:\n\n- Простоте и читаемости\n- Богатой экосистеме библиотек\n- Сильной поддержке сообщества\n- Кроссплатформенной совместимости\n- Интеграции с оборудованием",
          uz: "# Robototexnika uchun Python ga kirish\n\n## Nima uchun robototexnika uchun Python?\n\nPython quyidagi xususiyatlari tufayli robototexnika uchun eng mashhur dasturlash tillaridan biriga aylandi:\n\n- Soddalik va o'qilishi\n- Kutubxonalarning boy ekotizimi\n- Kuchli hamjamiyat qo'llab-quvvatlashi\n- Platformalararo moslashuvchanlik\n- Apparat bilan integratsiya",
        },
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop",
        downloadable: false,
        externalLink: false,
      },
    ],
    videos: [
      {
        id: "1",
        title: {
          en: "Building Your First Robot",
          ru: "Создание вашего первого робота",
          uz: "Birinchi robotingizni yaratish",
        },
        description: {
          en: "A step-by-step video tutorial on building a simple robot from scratch.",
          ru: "Пошаговый видеоурок по созданию простого робота с нуля.",
          uz: "Oddiy robotni noldan yaratish bo'yicha bosqichma-bosqich video qo'llanma.",
        },
        videoUrl: "https://www.youtube.com/watch?v=example1",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop",
        external: true,
      },
    ],
    books: [
      {
        id: "1",
        title: {
          en: "Robotics: A Beginner's Guide",
          ru: "Робототехника: руководство для начинающих",
          uz: "Robototexnika: boshlang'ich qo'llanma",
        },
        description: {
          en: "A comprehensive introduction to robotics for beginners.",
          ru: "Всестороннее введение в робототехнику для начинающих.",
          uz: "Boshlang'ichlar uchun robototexnikaga keng qamrovli kirish.",
        },
        content: {
          en: "# Robotics: A Beginner's Guide\n\n## Chapter 1: Introduction to Robotics\n\nRobotics is an interdisciplinary field that combines mechanical engineering, electrical engineering, and computer science. This book will guide you through the basics of robotics, from understanding the components to building your first robot.",
          ru: "# Робототехника: руководство для начинающих\n\n## Глава 1: Введение в робототехнику\n\nРобототехника — это междисциплинарная область, объединяющая машиностроение, электротехнику и информатику. Эта книга проведет вас через основы робототехники, от понимания компонентов до создания вашего первого робота.",
          uz: "# Robototexnika: boshlang'ich qo'llanma\n\n## 1-bob: Robototexnikaga kirish\n\nRobototexnika - bu mexanik muhandislik, elektr muhandisligi va kompyuter fanlarini birlashtirgan fanlararo soha. Ushbu kitob sizni robototexnika asoslaridan, komponentlarni tushunishdan tortib birinchi robotingizni yaratishgacha bo'lgan yo'lda yo'naltiradi.",
        },
        image: "https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=2076&auto=format&fit=crop",
        downloadable: false,
        externalLink: false,
      },
    ],
  }

  useEffect(() => {
    // Find the resource based on category and id
    const categoryData = resourcesData[category as keyof typeof resourcesData]
    if (categoryData) {
      const resource = categoryData.find((item) => item.id === id)
      if (resource && "content" in resource) {
        setContent(resource.content[language as keyof typeof resource.title] || "")
      }
    }
  }, [category, id, language])

  // Find the current resource
  const categoryData = resourcesData[category as keyof typeof resourcesData] || []
  const resource = categoryData.find((item) => item.id === id)

  if (!resource) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">
              {language === "en" && "Resource not found"}
              {language === "ru" && "Ресурс не найден"}
              {language === "uz" && "Resurs topilmadi"}
            </h1>
            <Button asChild>
              <Link href="/resources">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {language === "en" && "Back to Resources"}
                {language === "ru" && "Назад к ресурсам"}
                {language === "uz" && "Resurslarga qaytish"}
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <Button variant="outline" asChild className="mb-6">
            <Link href="/resources">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {language === "en" && "Back to Resources"}
              {language === "ru" && "Назад к ресурсам"}
              {language === "uz" && "Resurslarga qaytish"}
            </Link>
          </Button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>{resource.title[language as keyof typeof resource.title]}</CardTitle>
                </CardHeader>
                <CardContent>
                  {/* For videos */}
                  {"videoUrl" in resource && (
                    <div className="aspect-video bg-muted rounded-md mb-6 flex items-center justify-center">
                      <div className="text-center">
                        <Button asChild>
                          <Link href={resource.videoUrl} target="_blank" className="flex items-center gap-2">
                            <ExternalLink className="h-4 w-4" />
                            {language === "en" && "Watch Video on YouTube"}
                            {language === "ru" && "Смотреть видео на YouTube"}
                            {language === "uz" && "YouTube da videoni ko'rish"}
                          </Link>
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* For content-based resources */}
                  {"content" in resource && (
                    <div className="prose dark:prose-invert max-w-none">
                      {content.split("\n").map((line, index) => {
                        if (line.startsWith("# ")) {
                          return (
                            <h1 key={index} className="text-3xl font-bold mt-6 mb-4">
                              {line.substring(2)}
                            </h1>
                          )
                        } else if (line.startsWith("## ")) {
                          return (
                            <h2 key={index} className="text-2xl font-bold mt-5 mb-3">
                              {line.substring(3)}
                            </h2>
                          )
                        } else if (line.startsWith("- ")) {
                          return (
                            <li key={index} className="ml-6">
                              {line.substring(2)}
                            </li>
                          )
                        } else if (line === "") {
                          return <br key={index} />
                        } else {
                          return (
                            <p key={index} className="mb-4">
                              {line}
                            </p>
                          )
                        }
                      })}
                    </div>
                  )}

                  {/* For downloadable resources */}
                  {"downloadable" in resource && resource.downloadable && (
                    <Button asChild className="mt-6">
                      <Link href={"link" in resource ? resource.link : "#"} className="flex items-center gap-2">
                        <Download className="h-4 w-4" />
                        {language === "en" && "Download Resource"}
                        {language === "ru" && "Скачать ресурс"}
                        {language === "uz" && "Resursni yuklab olish"}
                      </Link>
                    </Button>
                  )}
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>
                    {language === "en" && "Resource Information"}
                    {language === "ru" && "Информация о ресурсе"}
                    {language === "uz" && "Resurs haqida ma'lumot"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {"image" in resource && (
                    <div className="relative h-48 mb-4 rounded-md overflow-hidden">
                      <Image
                        src={resource.image || "/placeholder.svg"}
                        alt={resource.title[language as keyof typeof resource.title]}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <p className="text-muted-foreground mb-6">
                    {resource.description[language as keyof typeof resource.description]}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-1">
                        {language === "en" && "Category"}
                        {language === "ru" && "Категория"}
                        {language === "uz" && "Kategoriya"}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {language === "en" && category === "tutorials" && "Tutorial"}
                        {language === "ru" && category === "tutorials" && "Руководство"}
                        {language === "uz" && category === "tutorials" && "Qo'llanma"}

                        {language === "en" && category === "videos" && "Video"}
                        {language === "ru" && category === "videos" && "Видео"}
                        {language === "uz" && category === "videos" && "Video"}

                        {language === "en" && category === "books" && "Book"}
                        {language === "ru" && category === "books" && "Книга"}
                        {language === "uz" && category === "books" && "Kitob"}

                        {language === "en" && category === "downloads" && "Download"}
                        {language === "ru" && category === "downloads" && "Загрузка"}
                        {language === "uz" && category === "downloads" && "Yuklama"}
                      </p>
                    </div>

                    {"external" in resource && resource.external && (
                      <div>
                        <h3 className="font-medium mb-1">
                          {language === "en" && "Source"}
                          {language === "ru" && "Источник"}
                          {language === "uz" && "Manba"}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {language === "en" && "External resource"}
                          {language === "ru" && "Внешний ресурс"}
                          {language === "uz" && "Tashqi resurs"}
                        </p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>
                    {language === "en" && "Related Resources"}
                    {language === "ru" && "Связанные ресурсы"}
                    {language === "uz" && "Bog'liq resurslar"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {categoryData
                      .filter((item) => item.id !== id)
                      .slice(0, 3)
                      .map((item) => (
                        <li key={item.id} className="border-b pb-2 last:border-0 last:pb-0">
                          <Link href={`/resources/${category}/${item.id}`} className="hover:text-primary block">
                            {item.title[language as keyof typeof item.title]}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

