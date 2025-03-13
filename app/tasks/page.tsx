"use client"

import { useLanguage } from "@/components/language-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle, Clock, Award } from "lucide-react"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function TasksPage() {
  const { t, language } = useLanguage()
  const [searchQuery, setSearchQuery] = useState("")
  const [difficultyFilter, setDifficultyFilter] = useState("all")

  const tasks = [
    {
      id: 1,
      title: {
        en: "Program a Line Following Algorithm",
        ru: "Программирование алгоритма следования по линии",
        uz: "Chiziq bo'ylab harakatlanish algoritmini dasturlash",
      },
      description: {
        en: "Write a program that allows a robot to follow a black line on a white surface using infrared sensors.",
        ru: "Напишите программу, которая позволяет роботу следовать по черной линии на белой поверхности с помощью инфракрасных датчиков.",
        uz: "Infraqizil sensorlar yordamida robotga oq sirtdagi qora chiziq bo'ylab harakatlanishga imkon beruvchi dastur yozing.",
      },
      points: 100,
      estimatedTime: {
        en: "2 hours",
        ru: "2 часа",
        uz: "2 soat",
      },
      difficulty: {
        en: "Beginner",
        ru: "Начальный",
        uz: "Boshlang'ich",
      },
      relatedCourse: 1,
      status: {
        en: "Not Started",
        ru: "Не начато",
        uz: "Boshlanmagan",
      },
    },
    {
      id: 2,
      title: {
        en: "Build a Simple Neural Network",
        ru: "Создание простой нейронной сети",
        uz: "Oddiy neyron tarmoqni yaratish",
      },
      description: {
        en: "Implement a basic neural network from scratch using Python to classify simple patterns.",
        ru: "Реализуйте базовую нейронную сеть с нуля, используя Python, для классификации простых шаблонов.",
        uz: "Oddiy naqshlarni tasniflash uchun Python yordamida asosiy neyron tarmoqni noldan amalga oshiring.",
      },
      points: 200,
      estimatedTime: {
        en: "4 hours",
        ru: "4 часа",
        uz: "4 soat",
      },
      difficulty: {
        en: "Intermediate",
        ru: "Средний",
        uz: "O'rta",
      },
      relatedCourse: 2,
      status: {
        en: "Not Started",
        ru: "Не начато",
        uz: "Boshlanmagan",
      },
    },
    {
      id: 3,
      title: {
        en: "Implement Obstacle Avoidance",
        ru: "Реализация избегания препятствий",
        uz: "To'siqlardan qochishni amalga oshirish",
      },
      description: {
        en: "Program a robot to detect obstacles using ultrasonic sensors and navigate around them.",
        ru: "Запрограммируйте робота на обнаружение препятствий с помощью ультразвуковых датчиков и обход их.",
        uz: "Robotni ultratovush sensorlari yordamida to'siqlarni aniqlash va ularni aylanib o'tishga dasturlang.",
      },
      points: 150,
      estimatedTime: {
        en: "3 hours",
        ru: "3 часа",
        uz: "3 soat",
      },
      difficulty: {
        en: "Beginner",
        ru: "Начальный",
        uz: "Boshlang'ich",
      },
      relatedCourse: 1,
      status: {
        en: "In Progress",
        ru: "В процессе",
        uz: "Jarayonda",
      },
    },
    {
      id: 4,
      title: {
        en: "Create a Voice Command System",
        ru: "Создание системы голосовых команд",
        uz: "Ovozli buyruqlar tizimini yaratish",
      },
      description: {
        en: "Develop a system that can recognize and respond to basic voice commands using a microphone and speech recognition library.",
        ru: "Разработайте систему, которая может распознавать базовые голосовые команды и реагировать на них, используя микрофон и библиотеку распознавания речи.",
        uz: "Mikrofon va nutqni tanib olish kutubxonasidan foydalangan holda asosiy ovozli buyruqlarni taniy oladigan va ularga javob beradigan tizimni ishlab chiqing.",
      },
      points: 250,
      estimatedTime: {
        en: "5 hours",
        ru: "5 часов",
        uz: "5 soat",
      },
      difficulty: {
        en: "Intermediate",
        ru: "Средний",
        uz: "O'rta",
      },
      relatedCourse: 3,
      status: {
        en: "Not Started",
        ru: "Не начато",
        uz: "Boshlanmagan",
      },
    },
    {
      id: 5,
      title: {
        en: "Implement Computer Vision for Object Detection",
        ru: "Реализация компьютерного зрения для обнаружения объектов",
        uz: "Obyektlarni aniqlash uchun kompyuter ko'rishini amalga oshirish",
      },
      description: {
        en: "Use OpenCV to implement a system that can detect and track specific objects in a video stream.",
        ru: "Используйте OpenCV для реализации системы, которая может обнаруживать и отслеживать определенные объекты в видеопотоке.",
        uz: "Video oqimida ma'lum obyektlarni aniqlay oladigan va kuzatib boradigan tizimni amalga oshirish uchun OpenCV dan foydalaning.",
      },
      points: 300,
      estimatedTime: {
        en: "6 hours",
        ru: "6 часов",
        uz: "6 soat",
      },
      difficulty: {
        en: "Advanced",
        ru: "Продвинутый",
        uz: "Yuqori",
      },
      relatedCourse: 4,
      status: {
        en: "Completed",
        ru: "Завершено",
        uz: "Bajarilgan",
      },
    },
    {
      id: 6,
      title: {
        en: "Create a Weather Data Logger",
        ru: "Создание регистратора данных о погоде",
        uz: "Ob-havo ma'lumotlarini qayd qiluvchi qurilma yaratish",
      },
      description: {
        en: "Build a system that collects temperature, humidity, and pressure data and logs it to a database.",
        ru: "Создайте систему, которая собирает данные о температуре, влажности и давлении и записывает их в базу данных.",
        uz: "Harorat, namlik va bosim ma'lumotlarini to'playdigan va ma'lumotlar bazasiga yozadigan tizim yarating.",
      },
      points: 200,
      estimatedTime: {
        en: "4 hours",
        ru: "4 часа",
        uz: "4 soat",
      },
      difficulty: {
        en: "Intermediate",
        ru: "Средний",
        uz: "O'rta",
      },
      relatedCourse: 5,
      status: {
        en: "Not Started",
        ru: "Не начато",
        uz: "Boshlanmagan",
      },
    },
  ]

  const pageTitle = {
    en: "Practical Tasks",
    ru: "Практические задания",
    uz: "Amaliy topshiriqlar",
  }

  const pageDescription = {
    en: "Complete these hands-on tasks to apply your knowledge and earn points.",
    ru: "Выполните эти практические задания, чтобы применить свои знания и заработать баллы.",
    uz: "Bilimlaringizni qo'llash va ball to'plash uchun ushbu amaliy topshiriqlarni bajaring.",
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
      case "Завершено":
      case "Bajarilgan":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
      case "In Progress":
      case "В процессе":
      case "Jarayonda":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Completed":
      case "Завершено":
      case "Bajarilgan":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "In Progress":
      case "В процессе":
      case "Jarayonda":
        return <Clock className="h-4 w-4 text-blue-500" />
      default:
        return null
    }
  }

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title[language as keyof typeof task.title]
      .toLowerCase()
      .includes(searchQuery.toLowerCase())

    const matchesDifficulty =
      difficultyFilter === "all" || task.difficulty.en.toLowerCase() === difficultyFilter.toLowerCase()

    return matchesSearch && matchesDifficulty
  })

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

          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1">
              <Input
                placeholder={
                  language === "en"
                    ? "Search tasks..."
                    : language === "ru"
                      ? "Поиск заданий..."
                      : "Topshiriqlarni qidirish..."
                }
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="w-full md:w-64">
              <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
                <SelectTrigger>
                  <SelectValue
                    placeholder={
                      language === "en"
                        ? "Filter by difficulty"
                        : language === "ru"
                          ? "Фильтр по сложности"
                          : "Qiyinlik bo'yicha filtrlash"
                    }
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">
                    {language === "en" && "All Difficulties"}
                    {language === "ru" && "Все уровни сложности"}
                    {language === "uz" && "Barcha qiyinliklar"}
                  </SelectItem>
                  <SelectItem value="beginner">
                    {language === "en" && "Beginner"}
                    {language === "ru" && "Начальный"}
                    {language === "uz" && "Boshlang'ich"}
                  </SelectItem>
                  <SelectItem value="intermediate">
                    {language === "en" && "Intermediate"}
                    {language === "ru" && "Средний"}
                    {language === "uz" && "O'rta"}
                  </SelectItem>
                  <SelectItem value="advanced">
                    {language === "en" && "Advanced"}
                    {language === "ru" && "Продвинутый"}
                    {language === "uz" && "Yuqori"}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTasks.map((task) => (
              <Card key={task.id} className="flex flex-col h-full">
                <CardHeader>
                  <div className="flex justify-between items-start gap-2">
                    <CardTitle className="text-xl">{task.title[language as keyof typeof task.title]}</CardTitle>
                    <div className="flex items-center gap-2">
                      <span
                        className={`inline-block px-2 py-1 text-xs rounded-full ${getDifficultyColor(task.difficulty[language as keyof typeof task.difficulty])}`}
                      >
                        {task.difficulty[language as keyof typeof task.difficulty]}
                      </span>
                      {task.status[language as keyof typeof task.status] !== "Not Started" &&
                        task.status[language as keyof typeof task.status] !== "Не начато" &&
                        task.status[language as keyof typeof task.status] !== "Boshlanmagan" && (
                          <span
                            className={`inline-flex items-center gap-1 px-2 py-1 text-xs rounded-full ${getStatusColor(task.status[language as keyof typeof task.status])}`}
                          >
                            {getStatusIcon(task.status[language as keyof typeof task.status])}
                            {task.status[language as keyof typeof task.status]}
                          </span>
                        )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-4">
                    {task.description[language as keyof typeof task.description]}
                  </p>
                  <div className="flex flex-col gap-2 mt-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Award className="h-4 w-4 text-yellow-500" />
                      <span>
                        {language === "en" && `${task.points} points`}
                        {language === "ru" && `${task.points} баллов`}
                        {language === "uz" && `${task.points} ball`}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-blue-500" />
                      <span>{task.estimatedTime[language as keyof typeof task.estimatedTime]}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>
                        {language === "en" && "Related to Course #" + task.relatedCourse}
                        {language === "ru" && "Связано с курсом #" + task.relatedCourse}
                        {language === "uz" && "Kurs #" + task.relatedCourse + " bilan bog'liq"}
                      </span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href={`/tasks/${task.id}`}>
                      {task.status[language as keyof typeof task.status] === "Completed" ||
                      task.status[language as keyof typeof task.status] === "Завершено" ||
                      task.status[language as keyof typeof task.status] === "Bajarilgan" ? (
                        <>
                          {language === "en" && "View Solution"}
                          {language === "ru" && "Посмотреть решение"}
                          {language === "uz" && "Yechimni ko'rish"}
                        </>
                      ) : task.status[language as keyof typeof task.status] === "In Progress" ||
                        task.status[language as keyof typeof task.status] === "В процессе" ||
                        task.status[language as keyof typeof task.status] === "Jarayonda" ? (
                        <>
                          {language === "en" && "Continue Task"}
                          {language === "ru" && "Продолжить задание"}
                          {language === "uz" && "Topshiriqni davom ettirish"}
                        </>
                      ) : (
                        <>
                          {language === "en" && "Start Task"}
                          {language === "ru" && "Начать задание"}
                          {language === "uz" && "Topshiriqni boshlash"}
                        </>
                      )}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredTasks.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">
                {language === "en" && "No tasks found matching your criteria."}
                {language === "ru" && "Не найдено заданий, соответствующих вашим критериям."}
                {language === "uz" && "Mezonlaringizga mos topshiriqlar topilmadi."}
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

