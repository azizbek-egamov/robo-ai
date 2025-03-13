"use client"

import { useLanguage } from "@/components/language-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Video, Book, Download, ExternalLink } from "lucide-react"
import Image from "next/image"

export default function ResourcesPage() {
  const { t, language } = useLanguage()

  const resourceCategories = {
    en: [
      { id: "tutorials", name: "Tutorials", icon: <FileText className="h-4 w-4" /> },
      { id: "videos", name: "Video Lessons", icon: <Video className="h-4 w-4" /> },
      { id: "books", name: "Books", icon: <Book className="h-4 w-4" /> },
      { id: "downloads", name: "Downloads", icon: <Download className="h-4 w-4" /> },
    ],
    ru: [
      { id: "tutorials", name: "Руководства", icon: <FileText className="h-4 w-4" /> },
      { id: "videos", name: "Видеоуроки", icon: <Video className="h-4 w-4" /> },
      { id: "books", name: "Книги", icon: <Book className="h-4 w-4" /> },
      { id: "downloads", name: "Загрузки", icon: <Download className="h-4 w-4" /> },
    ],
    uz: [
      { id: "tutorials", name: "Qo'llanmalar", icon: <FileText className="h-4 w-4" /> },
      { id: "videos", name: "Video darslar", icon: <Video className="h-4 w-4" /> },
      { id: "books", name: "Kitoblar", icon: <Book className="h-4 w-4" /> },
      { id: "downloads", name: "Yuklamalar", icon: <Download className="h-4 w-4" /> },
    ],
  }

  const resources = {
    tutorials: [
      {
        id: 1,
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
        image: "https://images.unsplash.com/photo-1553406830-ef2513450d76?q=80&w=1974&auto=format&fit=crop",
      },
      {
        id: 2,
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
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop",
      },
      {
        id: 3,
        title: {
          en: "Sensor Integration Guide",
          ru: "Руководство по интеграции датчиков",
          uz: "Sensorlarni integratsiyalash bo'yicha qo'llanma",
        },
        description: {
          en: "How to connect and program various sensors for your robotics projects.",
          ru: "Как подключать и программировать различные датчики для ваших проектов по робототехнике.",
          uz: "Robototexnika loyihalaringiz uchun turli xil sensorlarni qanday ulash va dasturlash.",
        },
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop",
      },
    ],
    videos: [
      {
        id: 1,
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
        link: "https://www.youtube.com/watch?v=example1",
        external: true,
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop",
      },
      {
        id: 2,
        title: {
          en: "Machine Learning Basics",
          ru: "Основы машинного обучения",
          uz: "Mashinali o'rganish asoslari",
        },
        description: {
          en: "An introduction to machine learning concepts for robotics applications.",
          ru: "Введение в концепции машинного обучения для приложений робототехники.",
          uz: "Robototexnika ilovalar uchun mashinali o'rganish tushunchalari bilan tanishish.",
        },
        link: "https://www.youtube.com/watch?v=example2",
        external: true,
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
      },
      {
        id: 3,
        title: {
          en: "Programming Servo Motors",
          ru: "Программирование сервомоторов",
          uz: "Servo motorlarni dasturlash",
        },
        description: {
          en: "Learn how to program servo motors for precise movement control.",
          ru: "Узнайте, как программировать сервомоторы для точного управления движением.",
          uz: "Aniq harakat boshqaruvi uchun servo motorlarni qanday dasturlashni o'rganing.",
        },
        link: "https://www.youtube.com/watch?v=example3",
        external: true,
        image: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?q=80&w=1974&auto=format&fit=crop",
      },
    ],
    books: [
      {
        id: 1,
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
        image: "https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=2076&auto=format&fit=crop",
      },
      {
        id: 2,
        title: {
          en: "Artificial Intelligence in Robotics",
          ru: "Искусственный интеллект в робототехнике",
          uz: "Robototexnikada sun'iy intellekt",
        },
        description: {
          en: "Explore how AI is transforming the field of robotics.",
          ru: "Узнайте, как ИИ трансформирует область робототехники.",
          uz: "Sun'iy intellekt robototexnika sohasini qanday o'zgartirayotganini o'rganing.",
        },
        image: "https://images.unsplash.com/photo-1673288895439-0e4883ea8dad?q=80&w=2070&auto=format&fit=crop",
      },
      {
        id: 3,
        title: {
          en: "Python Programming for Robotics",
          ru: "Программирование на Python для робототехники",
          uz: "Robototexnika uchun Python dasturlash",
        },
        description: {
          en: "A practical guide to using Python for robotics projects.",
          ru: "Практическое руководство по использованию Python для проектов робототехники.",
          uz: "Robototexnika loyihalari uchun Python dan foydalanish bo'yicha amaliy qo'llanma.",
        },
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop",
      },
    ],
    downloads: [
      {
        id: 1,
        title: {
          en: "Arduino Project Templates",
          ru: "Шаблоны проектов Arduino",
          uz: "Arduino loyiha shablonlari",
        },
        description: {
          en: "A collection of template code for common Arduino projects.",
          ru: "Коллекция шаблонного кода для распространенных проектов Arduino.",
          uz: "Keng tarqalgan Arduino loyihalari uchun shablon kodlar to'plami.",
        },
        link: "/downloads/arduino-templates.zip",
      },
      {
        id: 2,
        title: {
          en: "Robotics Simulation Software",
          ru: "Программное обеспечение для симуляции робототехники",
          uz: "Robototexnika simulyatsiya dasturi",
        },
        description: {
          en: "Software for simulating and testing robot designs before building.",
          ru: "Программное обеспечение для моделирования и тестирования конструкций роботов перед сборкой.",
          uz: "Robotlarni yaratishdan oldin loyihalarni simulyatsiya qilish va sinab ko'rish uchun dasturiy ta'minot.",
        },
        link: "/downloads/robotics-simulation.zip",
      },
      {
        id: 3,
        title: {
          en: "Sensor Data Sheets",
          ru: "Технические характеристики датчиков",
          uz: "Sensor ma'lumotnomalari",
        },
        description: {
          en: "Technical specifications and datasheets for commonly used sensors.",
          ru: "Технические характеристики и спецификации для часто используемых датчиков.",
          uz: "Tez-tez ishlatiladigan sensorlar uchun texnik xususiyatlar va ma'lumotnomalar.",
        },
        link: "/downloads/sensor-datasheets.zip",
      },
    ],
  }

  const pageTitle = {
    en: "Learning Resources",
    ru: "Учебные материалы",
    uz: "O'quv materiallari",
  }

  const pageDescription = {
    en: "Access our comprehensive collection of tutorials, videos, books, and downloadable resources to enhance your learning.",
    ru: "Получите доступ к нашей обширной коллекции руководств, видео, книг и загружаемых ресурсов для улучшения вашего обучения.",
    uz: "O'rganishingizni yaxshilash uchun qo'llanmalar, videolar, kitoblar va yuklab olinadigan resurslarning keng to'plamiga kiring.",
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

          <Tabs defaultValue="tutorials" className="mb-12">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              {resourceCategories[language as keyof typeof resourceCategories].map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                  {category.icon}
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="tutorials">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resources.tutorials.map((resource) => (
                  <Card key={resource.id} className="flex flex-col h-full overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src={resource.image || "/placeholder.svg"}
                        alt={resource.title[language as keyof typeof resource.title]}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{resource.title[language as keyof typeof resource.title]}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground">
                        {resource.description[language as keyof typeof resource.description]}
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button asChild className="w-full">
                        <Link href={`/resources/tutorials/${resource.id}`}>
                          {language === "en" && "Read Tutorial"}
                          {language === "ru" && "Читать руководство"}
                          {language === "uz" && "Qo'llanmani o'qish"}
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="videos">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resources.videos.map((resource) => (
                  <Card key={resource.id} className="flex flex-col h-full overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src={resource.image || "/placeholder.svg"}
                        alt={resource.title[language as keyof typeof resource.title]}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-black/50 rounded-full p-3">
                          <Video className="h-8 w-8 text-white" />
                        </div>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle>{resource.title[language as keyof typeof resource.title]}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground">
                        {resource.description[language as keyof typeof resource.description]}
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button asChild className="w-full" variant={resource.external ? "outline" : "default"}>
                        <Link
                          href={resource.link || `/resources/videos/${resource.id}`}
                          target={resource.external ? "_blank" : "_self"}
                          className="flex items-center gap-2"
                        >
                          {resource.external ? <ExternalLink className="h-4 w-4" /> : null}
                          {language === "en" && "Watch Video"}
                          {language === "ru" && "Смотреть видео"}
                          {language === "uz" && "Videoni ko'rish"}
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="books">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resources.books.map((resource) => (
                  <Card key={resource.id} className="flex flex-col h-full overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src={resource.image || "/placeholder.svg"}
                        alt={resource.title[language as keyof typeof resource.title]}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{resource.title[language as keyof typeof resource.title]}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground">
                        {resource.description[language as keyof typeof resource.description]}
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button asChild className="w-full">
                        <Link href={`/resources/books/${resource.id}`}>
                          {language === "en" && "Read Book"}
                          {language === "ru" && "Читать книгу"}
                          {language === "uz" && "Kitobni o'qish"}
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="downloads">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resources.downloads.map((resource) => (
                  <Card key={resource.id} className="flex flex-col h-full">
                    <CardHeader>
                      <CardTitle>{resource.title[language as keyof typeof resource.title]}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground">
                        {resource.description[language as keyof typeof resource.description]}
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button asChild className="w-full" variant="outline">
                        <Link href={resource.link} className="flex items-center gap-2">
                          <Download className="h-4 w-4" />
                          {language === "en" && "Download"}
                          {language === "ru" && "Скачать"}
                          {language === "uz" && "Yuklab olish"}
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  )
}

