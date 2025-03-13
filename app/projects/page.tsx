"use client"

import { useLanguage } from "@/components/language-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

export default function ProjectsPage() {
  const { t, language } = useLanguage()

  const projects = [
    {
      id: 1,
      title: {
        en: "Line Following Robot",
        ru: "Робот, следующий по линии",
        uz: "Chiziq bo'ylab harakatlanuvchi robot",
      },
      description: {
        en: "Build a robot that can follow a line using sensors. This project teaches you about sensors, motors, and basic programming logic.",
        ru: "Создайте робота, который может следовать по линии с помощью датчиков. Этот проект научит вас работе с датчиками, моторами и базовой логике программирования.",
        uz: "Sensorlar yordamida chiziq bo'ylab harakatlanadigan robot yarating. Bu loyiha sizga sensorlar, motorlar va asosiy dasturlash mantiqini o'rgatadi.",
      },
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop",
      difficulty: {
        en: "Beginner",
        ru: "Начальный",
        uz: "Boshlang'ich",
      },
      tags: ["Arduino", "Sensors", "Motors"],
    },
    {
      id: 2,
      title: {
        en: "Voice Controlled Robot",
        ru: "Робот с голосовым управлением",
        uz: "Ovoz bilan boshqariladigan robot",
      },
      description: {
        en: "Create a robot that responds to voice commands. Learn about speech recognition, microcontrollers, and wireless communication.",
        ru: "Создайте робота, который реагирует на голосовые команды. Изучите распознавание речи, микроконтроллеры и беспроводную связь.",
        uz: "Ovozli buyruqlarga javob beradigan robot yarating. Nutqni tanib olish, mikrokontrollerlar va simsiz aloqa haqida o'rganing.",
      },
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop",
      difficulty: {
        en: "Intermediate",
        ru: "Средний",
        uz: "O'rta",
      },
      tags: ["Raspberry Pi", "Speech Recognition", "Python"],
    },
    {
      id: 3,
      title: {
        en: "Obstacle Avoiding Robot",
        ru: "Робот, избегающий препятствий",
        uz: "To'siqlardan qochadigan robot",
      },
      description: {
        en: "Build a robot that can detect and avoid obstacles in its path. This project covers ultrasonic sensors, servo motors, and decision algorithms.",
        ru: "Создайте робота, который может обнаруживать и избегать препятствий на своем пути. Этот проект охватывает ультразвуковые датчики, сервомоторы и алгоритмы принятия решений.",
        uz: "Yo'lidagi to'siqlarni aniqlay oladigan va ulardan qocha oladigan robot yarating. Bu loyiha ultratovush sensorlari, servo motorlar va qaror qabul qilish algoritmlarini qamrab oladi.",
      },
      image: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?q=80&w=1974&auto=format&fit=crop",
      difficulty: {
        en: "Beginner",
        ru: "Начальный",
        uz: "Boshlang'ich",
      },
      tags: ["Arduino", "Ultrasonic Sensors", "Servo Motors"],
    },
    {
      id: 4,
      title: {
        en: "Face Recognition Robot",
        ru: "Робот с распознаванием лиц",
        uz: "Yuzni tanib oladigan robot",
      },
      description: {
        en: "Create a robot that can recognize and respond to different faces. Learn about computer vision, machine learning, and human-robot interaction.",
        ru: "Создайте робота, который может распознавать разные лица и реагировать на них. Изучите компьютерное зрение, машинное обучение и взаимодействие человека с роботом.",
        uz: "Turli yuzlarni tanib oladigan va ularga javob beradigan robot yarating. Kompyuter ko'rishi, mashinali o'rganish va inson-robot o'zaro ta'siri haqida o'rganing.",
      },
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
      difficulty: {
        en: "Advanced",
        ru: "Продвинутый",
        uz: "Yuqori",
      },
      tags: ["OpenCV", "TensorFlow", "Raspberry Pi"],
    },
    {
      id: 5,
      title: {
        en: "Weather Station Robot",
        ru: "Робот-метеостанция",
        uz: "Ob-havo stansiyasi roboti",
      },
      description: {
        en: "Build a robot that collects and displays weather data. This project teaches you about environmental sensors, data processing, and visualization.",
        ru: "Создайте робота, который собирает и отображает данные о погоде. Этот проект научит вас работе с датчиками окружающей среды, обработке данных и визуализации.",
        uz: "Ob-havo ma'lumotlarini to'playdigan va ko'rsatadigan robot yarating. Bu loyiha sizga atrof-muhit sensorlari, ma'lumotlarni qayta ishlash va vizualizatsiya haqida o'rgatadi.",
      },
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop",
      difficulty: {
        en: "Intermediate",
        ru: "Средний",
        uz: "O'rta",
      },
      tags: ["Arduino", "Environmental Sensors", "Data Visualization"],
    },
    {
      id: 6,
      title: {
        en: "Autonomous Drone",
        ru: "Автономный дрон",
        uz: "Avtonom dron",
      },
      description: {
        en: "Create a drone that can navigate autonomously. Learn about flight controllers, GPS, and autonomous navigation algorithms.",
        ru: "Создайте дрон, который может автономно перемещаться. Изучите полетные контроллеры, GPS и алгоритмы автономной навигации.",
        uz: "Mustaqil ravishda harakatlanadigan dron yarating. Parvoz kontrollerlari, GPS va avtonom navigatsiya algoritmlari haqida o'rganing.",
      },
      image: "https://images.unsplash.com/photo-1673288895439-0e4883ea8dad?q=80&w=2070&auto=format&fit=crop",
      difficulty: {
        en: "Advanced",
        ru: "Продвинутый",
        uz: "Yuqori",
      },
      tags: ["Flight Controllers", "GPS", "Computer Vision"],
    },
  ]

  const pageTitle = {
    en: "Projects",
    ru: "Проекты",
    uz: "Loyihalar",
  }

  const pageDescription = {
    en: "Explore our collection of hands-on robotics and AI projects for students of all skill levels.",
    ru: "Изучите нашу коллекцию практических проектов по робототехнике и ИИ для студентов всех уровней подготовки.",
    uz: "Barcha malaka darajasidagi o'quvchilar uchun robototexnika va sun'iy intellekt bo'yicha amaliy loyihalar to'plamimizni o'rganing.",
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
      case "Начальный":
      case "Boshlang'ich":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
      case "Intermediate":
      case "Средний":
      case "O'rta":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
      case "Advanced":
      case "Продвинутый":
      case "Yuqori":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100"
    }
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title[language as keyof typeof project.title]}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{project.title[language as keyof typeof project.title]}</CardTitle>
                    <span
                      className={`inline-block px-2 py-1 text-xs rounded-full ${getDifficultyColor(project.difficulty[language as keyof typeof project.difficulty])}`}
                    >
                      {project.difficulty[language as keyof typeof project.difficulty]}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {project.description[language as keyof typeof project.description]}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href={`/projects/${project.id}`}>
                      {language === "en" && "View Project"}
                      {language === "ru" && "Посмотреть проект"}
                      {language === "uz" && "Loyihani ko'rish"}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

