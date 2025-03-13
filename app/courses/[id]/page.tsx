"use client"

import { useLanguage } from "@/components/language-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Calendar, Clock, Users, BookOpen, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function CoursePage({ params }: { params: { id: string } }) {
  const { language } = useLanguage()
  // Kurs ID ni o'qish va ishlatish jarayonini to'g'rilash
  // params.id dan olingan qiymat string bo'ladi, uni number ga o'girishda xatolik bo'lishi mumkin
  // Shuning uchun try-catch blokidan foydalanish kerak
  let courseId
  try {
    courseId = Number.parseInt(params.id)
  } catch (error) {
    console.error("Error parsing course ID:", error)
    courseId = 0
  }

  // Courses data - in a real app, this would come from an API or database
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
      detailedDescription: {
        en: "This course provides a comprehensive introduction to the field of robotics. You'll learn about the fundamental components of robots, how they work, and how to build and program your own simple robots. The course covers mechanical design, electronics, and programming concepts essential for robotics.\n\nBy the end of this course, you'll have built your own line-following robot and gained a solid understanding of robotics principles that will prepare you for more advanced projects.",
        ru: "Этот курс представляет собой всестороннее введение в область робототехники. Вы узнаете об основных компонентах роботов, как они работают, и как создавать и программировать собственных простых роботов. Курс охватывает механическое проектирование, электронику и концепции программирования, необходимые для робототехники.\n\nК концу этого курса вы построите своего собственного робота, следующего по линии, и получите прочное понимание принципов робототехники, которые подготовят вас к более сложным проектам.",
        uz: "Bu kurs robototexnika sohasiga keng qamrovli kirish imkonini beradi. Siz robotlarning asosiy komponentlari, ularning ishlashi va o'zingizning oddiy robotlaringizni qanday yaratish va dasturlash haqida o'rganasiz. Kurs robototexnika uchun zarur bo'lgan mexanik dizayn, elektronika va dasturlash tushunchalarini qamrab oladi.\n\nUshbu kurs oxirida siz o'zingizning chiziq bo'ylab harakatlanuvchi robotingizni yaratgan bo'lasiz va sizni yanada murakkab loyihalarga tayyorlaydigan robototexnika prinsiplarini mustahkam tushunib olasiz.",
      },
      image: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?q=80&w=1974&auto=format&fit=crop",
      category: "beginner",
      duration: {
        en: "4 weeks",
        ru: "4 недели",
        uz: "4 hafta",
      },
      schedule: {
        en: "Mondays and Wednesdays, 18:00-20:00",
        ru: "Понедельник и среда, 18:00-20:00",
        uz: "Dushanba va chorshanba, 18:00-20:00",
      },
      startDate: {
        en: "February 15, 2024",
        ru: "15 февраля 2024 г.",
        uz: "2024-yil 15-fevral",
      },
      students: 24,
      price: {
        en: "$199",
        ru: "199$",
        uz: "199$",
      },
      instructor: {
        name: "Dr. Robert Chen",
        title: {
          en: "Robotics Engineer",
          ru: "Инженер-робототехник",
          uz: "Robototexnika muhandisi",
        },
        bio: {
          en: "Dr. Chen has over 10 years of experience in robotics research and education. He has worked on projects ranging from industrial automation to educational robots.",
          ru: "Доктор Чен имеет более чем 10-летний опыт исследований и образования в области робототехники. Он работал над проектами от промышленной автоматизации до образовательных роботов.",
          uz: "Dr. Chen robototexnika tadqiqoti va ta'limi sohasida 10 yildan ortiq tajribaga ega. U sanoat avtomatlashtirish va ta'lim robotlari kabi loyihalar ustida ishlagan.",
        },
      },
      syllabus: {
        en: [
          {
            week: 1,
            title: "Introduction to Robotics",
            topics: ["History of robotics", "Types of robots", "Basic components", "Safety guidelines"],
          },
          {
            week: 2,
            title: "Mechanical Design",
            topics: ["Robot chassis design", "Motors and actuators", "Power systems", "Building your first chassis"],
          },
          {
            week: 3,
            title: "Electronics and Sensors",
            topics: ["Basic electronics", "Microcontrollers", "Sensors overview", "Wiring your robot"],
          },
          {
            week: 4,
            title: "Programming and Final Project",
            topics: [
              "Basic programming concepts",
              "Robot control",
              "Line following algorithm",
              "Final project assembly and testing",
            ],
          },
        ],
        ru: [
          {
            week: 1,
            title: "Введение в робототехнику",
            topics: ["История робототехники", "Типы роботов", "Основные компоненты", "Правила безопасности"],
          },
          {
            week: 2,
            title: "Механическое проектирование",
            topics: ["Проектирование шасси робота", "Двигатели и приводы", "Системы питания", "Создание первого шасси"],
          },
          {
            week: 3,
            title: "Электроника и датчики",
            topics: ["Основы электроники", "Микроконтроллеры", "Обзор датчиков", "Подключение робота"],
          },
          {
            week: 4,
            title: "Программирование и итоговый проект",
            topics: [
              "Основные концепции программирования",
              "Управление роботом",
              "Алгоритм следования по линии",
              "Сборка и тестирование итогового проекта",
            ],
          },
        ],
        uz: [
          {
            week: 1,
            title: "Robototexnikaga kirish",
            topics: ["Robototexnika tarixi", "Robotlar turlari", "Asosiy komponentlar", "Xavfsizlik qoidalari"],
          },
          {
            week: 2,
            title: "Mexanik dizayn",
            topics: [
              "Robot shassi dizayni",
              "Motorlar va aktuatorlar",
              "Quvvat tizimlari",
              "Birinchi shassini yaratish",
            ],
          },
          {
            week: 3,
            title: "Elektronika va sensorlar",
            topics: ["Asosiy elektronika", "Mikrokontrollerlar", "Sensorlar sharhi", "Robotni ulash"],
          },
          {
            week: 4,
            title: "Dasturlash va yakuniy loyiha",
            topics: [
              "Asosiy dasturlash tushunchalari",
              "Robot boshqaruvi",
              "Chiziq bo'ylab harakatlanish algoritmi",
              "Yakuniy loyihani yig'ish va sinash",
            ],
          },
        ],
      },
    },
    // Add more courses as needed
  ]

  // Kursni topishda xatolikni oldini olish uchun try-catch blokidan foydalanish
  let course
  try {
    course = courses.find((c) => c.id === courseId)
  } catch (error) {
    console.error("Error finding course:", error)
    course = undefined
  }

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">
              {language === "en" && "Course not found"}
              {language === "ru" && "Курс не найден"}
              {language === "uz" && "Kurs topilmadi"}
            </h1>
            <Button asChild>
              <Link href="/courses">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {language === "en" && "Back to Courses"}
                {language === "ru" && "Назад к курсам"}
                {language === "uz" && "Kurslarga qaytish"}
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
            <Link href="/courses">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {language === "en" && "Back to Courses"}
              {language === "ru" && "Назад к курсам"}
              {language === "uz" && "Kurslarga qaytish"}
            </Link>
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className="lg:col-span-2">
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden mb-6">
                <Image
                  src={course.image || "/placeholder.svg"}
                  alt={course.title[language as keyof typeof course.title]}
                  fill
                  className="object-cover"
                />
              </div>

              <h1 className="text-3xl font-bold mb-4">{course.title[language as keyof typeof course.title]}</h1>

              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="secondary">
                  {language === "en" && course.category === "beginner" && "Beginner"}
                  {language === "ru" && course.category === "beginner" && "Начальный"}
                  {language === "uz" && course.category === "beginner" && "Boshlang'ich"}

                  {language === "en" && course.category === "intermediate" && "Intermediate"}
                  {language === "ru" && course.category === "intermediate" && "Средний"}
                  {language === "uz" && course.category === "intermediate" && "O'rta"}

                  {language === "en" && course.category === "advanced" && "Advanced"}
                  {language === "ru" && course.category === "advanced" && "Продвинутый"}
                  {language === "uz" && course.category === "advanced" && "Yuqori"}
                </Badge>
                <Badge variant="outline">{course.duration[language as keyof typeof course.duration]}</Badge>
              </div>

              <div className="prose dark:prose-invert max-w-none mb-8">
                <p className="text-lg">
                  {course.detailedDescription[language as keyof typeof course.detailedDescription]}
                </p>
              </div>
            </div>

            <div>
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>
                    {language === "en" && "Course Details"}
                    {language === "ru" && "Детали курса"}
                    {language === "uz" && "Kurs tafsilotlari"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      <div>
                        <h3 className="font-medium text-sm">
                          {language === "en" && "Start Date"}
                          {language === "ru" && "Дата начала"}
                          {language === "uz" && "Boshlanish sanasi"}
                        </h3>
                        <p>{course.startDate[language as keyof typeof course.startDate]}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      <div>
                        <h3 className="font-medium text-sm">
                          {language === "en" && "Schedule"}
                          {language === "ru" && "Расписание"}
                          {language === "uz" && "Jadval"}
                        </h3>
                        <p>{course.schedule[language as keyof typeof course.schedule]}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      <div>
                        <h3 className="font-medium text-sm">
                          {language === "en" && "Class Size"}
                          {language === "ru" && "Размер класса"}
                          {language === "uz" && "Sinf hajmi"}
                        </h3>
                        <p>
                          {language === "en" && `${course.students} students max`}
                          {language === "ru" && `Максимум ${course.students} студентов`}
                          {language === "uz" && `Maksimum ${course.students} o'quvchi`}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-primary" />
                      <div>
                        <h3 className="font-medium text-sm">
                          {language === "en" && "Duration"}
                          {language === "ru" && "Продолжительность"}
                          {language === "uz" && "Davomiyligi"}
                        </h3>
                        <p>{course.duration[language as keyof typeof course.duration]}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-primary" />
                      <div>
                        <h3 className="font-medium text-sm">
                          {language === "en" && "Certificate"}
                          {language === "ru" && "Сертификат"}
                          {language === "uz" && "Sertifikat"}
                        </h3>
                        <p>
                          {language === "en" && "Certificate of Completion"}
                          {language === "ru" && "Сертификат об окончании"}
                          {language === "uz" && "Tugatish sertifikati"}
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <div className="text-center mb-2">
                        <span className="text-2xl font-bold">
                          {course.price[language as keyof typeof course.price]}
                        </span>
                      </div>
                      <Button asChild className="w-full">
                        <Link href={`/enroll?course=${course.id}`}>
                          {language === "en" && "Enroll Now"}
                          {language === "ru" && "Записаться"}
                          {language === "uz" && "Ro'yxatdan o'tish"}
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>
                    {language === "en" && "Instructor"}
                    {language === "ru" && "Преподаватель"}
                    {language === "uz" && "O'qituvchi"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full bg-muted mb-4 overflow-hidden relative">
                      <Image
                        src="/placeholder.svg?height=96&width=96"
                        alt={course.instructor.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-bold text-lg">{course.instructor.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {course.instructor.title[language as keyof typeof course.instructor.title]}
                    </p>
                    <p className="text-sm">{course.instructor.bio[language as keyof typeof course.instructor.bio]}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Tabs defaultValue="syllabus" className="mb-8">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="syllabus">
                {language === "en" && "Course Syllabus"}
                {language === "ru" && "Программа курса"}
                {language === "uz" && "Kurs dasturi"}
              </TabsTrigger>
              <TabsTrigger value="requirements">
                {language === "en" && "Requirements"}
                {language === "ru" && "Требования"}
                {language === "uz" && "Talablar"}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="syllabus">
              <Card>
                <CardHeader>
                  <CardTitle>
                    {language === "en" && "Course Syllabus"}
                    {language === "ru" && "Программа курса"}
                    {language === "uz" && "Kurs dasturi"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {course.syllabus[language as keyof typeof course.syllabus].map((week) => (
                      <div key={week.week} className="border-b pb-4 last:border-0 last:pb-0">
                        <h3 className="font-bold text-lg mb-2">
                          {language === "en" && `Week ${week.week}: ${week.title}`}
                          {language === "ru" && `Неделя ${week.week}: ${week.title}`}
                          {language === "uz" && `${week.week}-hafta: ${week.title}`}
                        </h3>
                        <ul className="list-disc pl-5 space-y-1">
                          {week.topics.map((topic, index) => (
                            <li key={index}>{topic}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="requirements">
              <Card>
                <CardHeader>
                  <CardTitle>
                    {language === "en" && "Course Requirements"}
                    {language === "ru" && "Требования к курсу"}
                    {language === "uz" && "Kurs talablari"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    {language === "en" && (
                      <>
                        <li>No prior robotics experience required</li>
                        <li>Basic computer skills</li>
                        <li>Laptop with internet connection</li>
                        <li>Interest in robotics and willingness to learn</li>
                        <li>All materials and components will be provided during the course</li>
                      </>
                    )}
                    {language === "ru" && (
                      <>
                        <li>Предварительный опыт в робототехнике не требуется</li>
                        <li>Базовые компьютерные навыки</li>
                        <li>Ноутбук с подключением к интернету</li>
                        <li>Интерес к робототехнике и желание учиться</li>
                        <li>Все материалы и компоненты будут предоставлены во время курса</li>
                      </>
                    )}
                    {language === "uz" && (
                      <>
                        <li>Oldingi robototexnika tajribasi talab qilinmaydi</li>
                        <li>Asosiy kompyuter ko'nikmalari</li>
                        <li>Internet ulanishiga ega noutbuk</li>
                        <li>Robototexnikaga qiziqish va o'rganish istagi</li>
                        <li>Barcha materiallar va komponentlar kurs davomida taqdim etiladi</li>
                      </>
                    )}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  )
}

