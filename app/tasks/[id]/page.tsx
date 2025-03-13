"use client"

import type React from "react"

import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Clock, Award, ArrowLeft, FileText, Code, Upload } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function TaskPage({ params }: { params: { id: string } }) {
  const { language } = useLanguage()
  const router = useRouter()
  const taskId = Number.parseInt(params.id)
  const [activeTab, setActiveTab] = useState("description")
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [codeValue, setCodeValue] = useState("")
  const [fileUploaded, setFileUploaded] = useState(false)
  const [fileName, setFileName] = useState("")

  // Task data - in a real app, this would come from an API or database
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
      detailedDescription: {
        en: "In this task, you will create an algorithm that enables a robot to follow a black line on a white surface. The robot is equipped with two infrared sensors positioned at the front, which can detect the contrast between the black line and the white surface.\n\nYour program should continuously read the sensor values and adjust the motor speeds accordingly to keep the robot on the line. If the robot starts to veer off the line, your algorithm should correct its course.\n\nThe robot has two motors controlling the left and right wheels. You can control the speed and direction of each motor independently.",
        ru: "В этом задании вы создадите алгоритм, который позволяет роботу следовать по черной линии на белой поверхности. Робот оснащен двумя инфракрасными датчиками, расположенными спереди, которые могут обнаруживать контраст между черной линией и белой поверхностью.\n\nВаша программа должна постоянно считывать значения датчиков и соответствующим образом регулировать скорость двигателей, чтобы удерживать робота на линии. Если робот начинает отклоняться от линии, ваш алгоритм должен исправить его курс.\n\nРобот имеет два двигателя, управляющих левым и правым колесами. Вы можете независимо управлять скоростью и направлением каждого двигателя.",
        uz: "Ushbu topshiriqda siz robotga oq sirtdagi qora chiziq bo'ylab harakatlanishga imkon beruvchi algoritm yaratishingiz kerak. Robot old qismida joylashgan ikkita infraqizil sensorlar bilan jihozlangan bo'lib, ular qora chiziq va oq sirt o'rtasidagi kontrastni aniqlay oladi.\n\nDasturingiz uzluksiz ravishda sensor qiymatlarini o'qishi va robotni chiziqda ushlab turish uchun motor tezliklarini tegishli ravishda sozlashi kerak. Agar robot chiziqdan chetga chiqishni boshlasa, algoritmingiz uning yo'nalishini to'g'rilashi kerak.\n\nRobotda chap va o'ng g'ildiraklarni boshqaradigan ikkita motor bor. Siz har bir motorning tezligi va yo'nalishini mustaqil ravishda boshqarishingiz mumkin.",
      },
      requirements: {
        en: [
          "Your code should be written in Arduino programming language (C/C++).",
          "The program should continuously read the values from two infrared sensors.",
          "Based on the sensor readings, the program should adjust the speed of the left and right motors to keep the robot on the line.",
          "Include comments in your code explaining your algorithm and logic.",
          "Your solution should handle different scenarios, such as straight lines, curves, and intersections.",
        ],
        ru: [
          "Ваш код должен быть написан на языке программирования Arduino (C/C++).",
          "Программа должна постоянно считывать значения с двух инфракрасных датчиков.",
          "На основе показаний датчиков программа должна регулировать скорость левого и правого двигателей, чтобы удерживать робота на линии.",
          "Включите комментарии в свой код, объясняющие ваш алгоритм и логику.",
          "Ваше решение должно обрабатывать различные сценарии, такие как прямые линии, повороты и перекрестки.",
        ],
        uz: [
          "Kodingiz Arduino dasturlash tilida (C/C++) yozilgan bo'lishi kerak.",
          "Dastur ikkita infraqizil sensorlardan qiymatlarni uzluksiz o'qishi kerak.",
          "Sensor ko'rsatkichlariga asoslanib, dastur robotni chiziqda ushlab turish uchun chap va o'ng motorlarning tezligini sozlashi kerak.",
          "Kodingizga algoritmingiz va mantiqingizni tushuntiruvchi izohlar kiriting.",
          "Yechimingiz to'g'ri chiziqlar, burilishlar va chorrahalar kabi turli xil stsenariylarni hal qilishi kerak.",
        ],
      },
      hints: {
        en: [
          "Start by understanding how the infrared sensors work. They typically return higher values when they detect a dark surface and lower values when they detect a light surface.",
          "A simple approach is to use a proportional control algorithm, where the difference between the two sensor readings determines how much to adjust the motor speeds.",
          "Test your algorithm with different line configurations to ensure it works in various scenarios.",
        ],
        ru: [
          "Начните с понимания того, как работают инфракрасные датчики. Обычно они возвращают более высокие значения, когда обнаруживают темную поверхность, и более низкие значения, когда обнаруживают светлую поверхность.",
          "Простой подход — использовать алгоритм пропорционального управления, где разница между двумя показаниями датчиков определяет, насколько нужно регулировать скорость двигателей.",
          "Протестируйте свой алгоритм с различными конфигурациями линий, чтобы убедиться, что он работает в различных сценариях.",
        ],
        uz: [
          "Infraqizil sensorlar qanday ishlashini tushunishdan boshlang. Ular odatda qora sirtni aniqlaganda yuqori qiymatlarni va yorug' sirtni aniqlaganda past qiymatlarni qaytaradi.",
          "Oddiy yondashuv - proporsional boshqaruv algoritmidan foydalanish, bunda ikki sensor ko'rsatkichlari o'rtasidagi farq motor tezliklarini qanchalik sozlash kerakligini aniqlaydi.",
          "Algoritmingizni turli xil chiziq konfiguratsiyalari bilan sinab ko'ring, u turli xil stsenariylarda ishlashiga ishonch hosil qiling.",
        ],
      },
      sampleCode: {
        en: `// Define pins for sensors and motors
const int leftSensorPin = A0;
const int rightSensorPin = A1;
const int leftMotorPin1 = 2;
const int leftMotorPin2 = 3;
const int rightMotorPin1 = 4;
const int rightMotorPin2 = 5;

// Variables to store sensor readings
int leftSensorValue = 0;
int rightSensorValue = 0;

void setup() {
  // Initialize serial communication
  Serial.begin(9600);
  
  // Set motor pins as outputs
  pinMode(leftMotorPin1, OUTPUT);
  pinMode(leftMotorPin2, OUTPUT);
  pinMode(rightMotorPin1, OUTPUT);
  pinMode(rightMotorPin2, OUTPUT);
}

void loop() {
  // Read sensor values
  leftSensorValue = analogRead(leftSensorPin);
  rightSensorValue = analogRead(rightSensorPin);
  
  // Print sensor values for debugging
  Serial.print("Left sensor: ");
  Serial.print(leftSensorValue);
  Serial.print(" | Right sensor: ");
  Serial.println(rightSensorValue);
  
  // TODO: Implement your line following algorithm here
  // Use the sensor values to control the motors
  
  // Example: If left sensor detects the line, turn right
  // If right sensor detects the line, turn left
  
  delay(100); // Small delay for stability
}

// Function to control the left motor
void setLeftMotor(int speed) {
  // TODO: Implement motor control
}

// Function to control the right motor
void setRightMotor(int speed) {
  // TODO: Implement motor control
}`,
        ru: `// Определение пинов для датчиков и моторов
const int leftSensorPin = A0;
const int rightSensorPin = A1;
const int leftMotorPin1 = 2;
const int leftMotorPin2 = 3;
const int rightMotorPin1 = 4;
const int rightMotorPin2 = 5;

// Переменные для хранения показаний датчиков
int leftSensorValue = 0;
int rightSensorValue = 0;

void setup() {
  // Инициализация последовательной связи
  Serial.begin(9600);
  
  // Установка пинов моторов как выходов
  pinMode(leftMotorPin1, OUTPUT);
  pinMode(leftMotorPin2, OUTPUT);
  pinMode(rightMotorPin1, OUTPUT);
  pinMode(rightMotorPin2, OUTPUT);
}

void loop() {
  // Чтение значений датчиков
  leftSensorValue = analogRead(leftSensorPin);
  rightSensorValue = analogRead(rightSensorPin);
  
  // Вывод значений датчиков для отладки
  Serial.print("Левый датчик: ");
  Serial.print(leftSensorValue);
  Serial.print(" | Правый датчик: ");
  Serial.println(rightSensorValue);
  
  // TODO: Реализуйте здесь свой алгоритм следования по линии
  // Используйте значения датчиков для управления моторами
  
  // Пример: Если левый датчик обнаруживает линию, поверните направо
  // Если правый датчик обнаруживает линию, поверните налево
  
  delay(100); // Небольшая задержка для стабильности
}

// Функция для управления левым мотором
void setLeftMotor(int speed) {
  // TODO: Реализуйте управление мотором
}

// Функция для управления правым мотором
void setRightMotor(int speed) {
  // TODO: Реализуйте управление мотором
}`,
        uz: `// Sensorlar va motorlar uchun pinlarni aniqlash
const int leftSensorPin = A0;
const int rightSensorPin = A1;
const int leftMotorPin1 = 2;
const int leftMotorPin2 = 3;
const int rightMotorPin1 = 4;
const int rightMotorPin2 = 5;

// Sensor ko'rsatkichlarini saqlash uchun o'zgaruvchilar
int leftSensorValue = 0;
int rightSensorValue = 0;

void setup() {
  // Serial aloqani ishga tushirish
  Serial.begin(9600);
  
  // Motor pinlarini chiqish sifatida o'rnatish
  pinMode(leftMotorPin1, OUTPUT);
  pinMode(leftMotorPin2, OUTPUT);
  pinMode(rightMotorPin1, OUTPUT);
  pinMode(rightMotorPin2, OUTPUT);
}

void loop() {
  // Sensor qiymatlarini o'qish
  leftSensorValue = analogRead(leftSensorPin);
  rightSensorValue = analogRead(rightSensorPin);
  
  // Nosozliklarni bartaraf etish uchun sensor qiymatlarini chop etish
  Serial.print("Chap sensor: ");
  Serial.print(leftSensorValue);
  Serial.print(" | O'ng sensor: ");
  Serial.println(rightSensorValue);
  
  // TODO: Bu yerda chiziq bo'ylab harakatlanish algoritmingizni amalga oshiring
  // Motorlarni boshqarish uchun sensor qiymatlaridan foydalaning
  
  // Misol: Agar chap sensor chiziqni aniqlasa, o'ngga buriladi
  // Agar o'ng sensor chiziqni aniqlasa, chapga buriladi
  
  delay(100); // Barqarorlik uchun kichik kechikish
}

// Chap motorni boshqarish uchun funksiya
void setLeftMotor(int speed) {
  // TODO: Motor boshqaruvini amalga oshiring
}

// O'ng motorni boshqarish uchun funksiya
void setRightMotor(int speed) {
  // TODO: Motor boshqaruvini amalga oshiring
}`,
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
    },
    // Add more tasks as needed
  ]

  const task = tasks.find((t) => t.id === taskId)

  if (!task) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">
              {language === "en" && "Task not found"}
              {language === "ru" && "Задание не найдено"}
              {language === "uz" && "Topshiriq topilmadi"}
            </h1>
            <Button asChild>
              <Link href="/tasks">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {language === "en" && "Back to Tasks"}
                {language === "ru" && "Назад к заданиям"}
                {language === "uz" && "Topshiriqlarga qaytish"}
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)

    // Simulate submission process
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
    }, 2000)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFileName(file.name)
      setFileUploaded(true)
    }
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
        <div className="container mx-auto px-4 py-8">
          <div className="mb-6">
            <Button variant="outline" asChild className="mb-4">
              <Link href="/tasks">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {language === "en" && "Back to Tasks"}
                {language === "ru" && "Назад к заданиям"}
                {language === "uz" && "Topshiriqlarga qaytish"}
              </Link>
            </Button>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold">{task.title[language as keyof typeof task.title]}</h1>
                <div className="flex items-center gap-4 mt-2">
                  <span
                    className={`inline-block px-2 py-1 text-xs rounded-full ${getDifficultyColor(task.difficulty[language as keyof typeof task.difficulty])}`}
                  >
                    {task.difficulty[language as keyof typeof task.difficulty]}
                  </span>
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
                </div>
              </div>
              {!submitted && (
                <Button onClick={() => setActiveTab("submit")} className="md:self-start">
                  {language === "en" && "Submit Solution"}
                  {language === "ru" && "Отправить решение"}
                  {language === "uz" && "Yechimni yuborish"}
                </Button>
              )}
            </div>
          </div>

          {submitted ? (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-center text-green-600">
                  {language === "en" && "Solution Submitted Successfully!"}
                  {language === "ru" && "Решение успешно отправлено!"}
                  {language === "uz" && "Yechim muvaffaqiyatli yuborildi!"}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <p className="text-lg mb-4">
                  {language === "en" && "Your solution has been submitted and will be reviewed soon."}
                  {language === "ru" && "Ваше решение было отправлено и будет рассмотрено в ближайшее время."}
                  {language === "uz" && "Sizning yechimingiz yuborildi va tez orada ko'rib chiqiladi."}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                  <Button variant="outline" asChild>
                    <Link href="/tasks">
                      {language === "en" && "Back to Tasks"}
                      {language === "ru" && "Назад к заданиям"}
                      {language === "uz" && "Topshiriqlarga qaytish"}
                    </Link>
                  </Button>
                  <Button asChild>
                    <Link href={`/courses/${task.relatedCourse}`}>
                      {language === "en" && "Go to Related Course"}
                      {language === "ru" && "Перейти к связанному курсу"}
                      {language === "uz" && "Bog'liq kursga o'tish"}
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="description" className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  {language === "en" && "Description"}
                  {language === "ru" && "Описание"}
                  {language === "uz" && "Tavsif"}
                </TabsTrigger>
                <TabsTrigger value="hints" className="flex items-center gap-2">
                  <Code className="h-4 w-4" />
                  {language === "en" && "Hints & Code"}
                  {language === "ru" && "Подсказки и код"}
                  {language === "uz" && "Maslahatlar va kod"}
                </TabsTrigger>
                <TabsTrigger value="submit" className="flex items-center gap-2">
                  <Upload className="h-4 w-4" />
                  {language === "en" && "Submit"}
                  {language === "ru" && "Отправить"}
                  {language === "uz" && "Yuborish"}
                </TabsTrigger>
              </TabsList>

              <TabsContent value="description">
                <Card>
                  <CardHeader>
                    <CardTitle>
                      {language === "en" && "Task Description"}
                      {language === "ru" && "Описание задания"}
                      {language === "uz" && "Topshiriq tavsifi"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-2">
                        {language === "en" && "Overview"}
                        {language === "ru" && "Обзор"}
                        {language === "uz" && "Umumiy ma'lumot"}
                      </h3>
                      <p className="whitespace-pre-line">
                        {task.detailedDescription[language as keyof typeof task.detailedDescription]}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-2">
                        {language === "en" && "Requirements"}
                        {language === "ru" && "Требования"}
                        {language === "uz" && "Talablar"}
                      </h3>
                      <ul className="list-disc pl-5 space-y-1">
                        {task.requirements[language as keyof typeof task.requirements].map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="hints">
                <Card>
                  <CardHeader>
                    <CardTitle>
                      {language === "en" && "Hints & Sample Code"}
                      {language === "ru" && "Подсказки и пример кода"}
                      {language === "uz" && "Maslahatlar va namuna kod"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-2">
                        {language === "en" && "Helpful Hints"}
                        {language === "ru" && "Полезные подсказки"}
                        {language === "uz" && "Foydali maslahatlar"}
                      </h3>
                      <ul className="list-disc pl-5 space-y-1">
                        {task.hints[language as keyof typeof task.hints].map((hint, index) => (
                          <li key={index}>{hint}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-2">
                        {language === "en" && "Sample Code"}
                        {language === "ru" && "Пример кода"}
                        {language === "uz" && "Namuna kod"}
                      </h3>
                      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
                        <pre className="text-sm">
                          <code>{task.sampleCode[language as keyof typeof task.sampleCode]}</code>
                        </pre>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="submit">
                <Card>
                  <CardHeader>
                    <CardTitle>
                      {language === "en" && "Submit Your Solution"}
                      {language === "ru" && "Отправить ваше решение"}
                      {language === "uz" && "Yechimingizni yuboring"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="solution-method">
                          {language === "en" && "Choose submission method"}
                          {language === "ru" && "Выберите метод отправки"}
                          {language === "uz" && "Yuborish usulini tanlang"}
                        </Label>
                        <Tabs defaultValue="code" className="w-full">
                          <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="code">
                              {language === "en" && "Write Code"}
                              {language === "ru" && "Написать код"}
                              {language === "uz" && "Kod yozish"}
                            </TabsTrigger>
                            <TabsTrigger value="file">
                              {language === "en" && "Upload File"}
                              {language === "ru" && "Загрузить файл"}
                              {language === "uz" && "Fayl yuklash"}
                            </TabsTrigger>
                          </TabsList>
                          <TabsContent value="code" className="mt-4">
                            <div className="space-y-2">
                              <Label htmlFor="code">
                                {language === "en" && "Your Code"}
                                {language === "ru" && "Ваш код"}
                                {language === "uz" && "Kodingiz"}
                              </Label>
                              <Textarea
                                id="code"
                                placeholder={
                                  language === "en"
                                    ? "Paste or write your code here..."
                                    : language === "ru"
                                      ? "Вставьте или напишите свой код здесь..."
                                      : "Kodingizni shu yerga joylashtiring yoki yozing..."
                                }
                                className="font-mono min-h-[300px]"
                                value={codeValue}
                                onChange={(e) => setCodeValue(e.target.value)}
                                required
                              />
                            </div>
                          </TabsContent>
                          <TabsContent value="file" className="mt-4">
                            <div className="space-y-4">
                              <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-6 text-center">
                                <Input
                                  id="file-upload"
                                  type="file"
                                  className="hidden"
                                  accept=".c,.cpp,.ino,.py,.js"
                                  onChange={handleFileChange}
                                />
                                {fileUploaded ? (
                                  <div className="flex flex-col items-center">
                                    <CheckCircle className="h-12 w-12 text-green-500 mb-2" />
                                    <p className="text-sm font-medium">{fileName}</p>
                                    <p className="text-xs text-muted-foreground mb-2">
                                      {language === "en" && "File uploaded successfully"}
                                      {language === "ru" && "Файл успешно загружен"}
                                      {language === "uz" && "Fayl muvaffaqiyatli yuklandi"}
                                    </p>
                                    <Button
                                      variant="outline"
                                      size="sm"
                                      onClick={() => {
                                        setFileUploaded(false)
                                        setFileName("")
                                      }}
                                    >
                                      {language === "en" && "Remove"}
                                      {language === "ru" && "Удалить"}
                                      {language === "uz" && "O'chirish"}
                                    </Button>
                                  </div>
                                ) : (
                                  <label htmlFor="file-upload" className="cursor-pointer">
                                    <div className="flex flex-col items-center">
                                      <Upload className="h-12 w-12 text-gray-400 mb-2" />
                                      <p className="text-sm font-medium">
                                        {language === "en" && "Click to upload or drag and drop"}
                                        {language === "ru" && "Нажмите для загрузки или перетащите файл"}
                                        {language === "uz" && "Yuklash uchun bosing yoki faylni tashlang"}
                                      </p>
                                      <p className="text-xs text-muted-foreground">
                                        {language === "en" && "C, C++, Arduino (.ino), Python, or JavaScript files"}
                                        {language === "ru" && "Файлы C, C++, Arduino (.ino), Python или JavaScript"}
                                        {language === "uz" && "C, C++, Arduino (.ino), Python yoki JavaScript fayllari"}
                                      </p>
                                    </div>
                                  </label>
                                )}
                              </div>
                            </div>
                          </TabsContent>
                        </Tabs>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="comments">
                          {language === "en" && "Comments (optional)"}
                          {language === "ru" && "Комментарии (необязательно)"}
                          {language === "uz" && "Izohlar (ixtiyoriy)"}
                        </Label>
                        <Textarea
                          id="comments"
                          placeholder={
                            language === "en"
                              ? "Add any comments or notes about your solution..."
                              : language === "ru"
                                ? "Добавьте любые комментарии или заметки о вашем решении..."
                                : "Yechimingiz haqida izohlar yoki eslatmalar qo'shing..."
                          }
                          className="min-h-[100px]"
                        />
                      </div>

                      <Button type="submit" className="w-full" disabled={submitting || (!codeValue && !fileUploaded)}>
                        {submitting ? (
                          <>
                            <div className="animate-spin mr-2 h-4 w-4 border-2 border-current border-t-transparent rounded-full" />
                            {language === "en" && "Submitting..."}
                            {language === "ru" && "Отправка..."}
                            {language === "uz" && "Yuborilmoqda..."}
                          </>
                        ) : (
                          <>
                            {language === "en" && "Submit Solution"}
                            {language === "ru" && "Отправить решение"}
                            {language === "uz" && "Yechimni yuborish"}
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

