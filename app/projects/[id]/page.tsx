"use client"

import { useLanguage } from "@/components/language-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, CheckCircle, Download, FileText, PenToolIcon as Tool } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ProjectPage({ params }: { params: { id: string } }) {
  const { language } = useLanguage()
  const projectId = Number.parseInt(params.id)

  // Projects data - in a real app, this would come from an API or database
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
      detailedDescription: {
        en: "Line following robots are a great introduction to robotics and automation. These robots use sensors to detect a line on the ground and navigate along it. This project will teach you the fundamentals of robotics, including sensor integration, motor control, and programming logic.\n\nYou'll learn how to use infrared sensors to detect the contrast between a dark line and a light background, and how to program your robot to adjust its movement based on sensor readings. This project is perfect for beginners who want to get started with robotics and programming.",
        ru: "Роботы, следующие по линии, — отличное введение в робототехнику и автоматизацию. Эти роботы используют датчики для обнаружения линии на земле и навигации по ней. Этот проект научит вас основам робототехники, включая интеграцию датчиков, управление двигателями и логику программирования.\n\nВы узнаете, как использовать инфракрасные датчики для обнаружения контраста между темной линией и светлым фоном, и как запрограммировать вашего робота для корректировки движения на основе показаний датчиков. Этот проект идеально подходит для начинающих, которые хотят начать работу с робототехникой и программированием.",
        uz: "Chiziq bo'ylab harakatlanuvchi robotlar robototexnika va avtomatlashtirish bilan tanishish uchun ajoyib imkoniyat. Bu robotlar yerda chiziqni aniqlash va u bo'ylab harakatlanish uchun sensorlardan foydalanadi. Bu loyiha sizga sensor integratsiyasi, motor boshqaruvi va dasturlash mantiqini o'z ichiga olgan robototexnika asoslarini o'rgatadi.\n\nSiz infraqizil sensorlardan qora chiziq va yorug' fon o'rtasidagi kontrastni aniqlash uchun qanday foydalanishni va robotingizni sensor ko'rsatkichlariga asoslanib harakatini sozlash uchun qanday dasturlashni o'rganasiz. Bu loyiha robototexnika va dasturlashni o'rganishni boshlashni xohlaydigan boshlang'ichlar uchun juda mos keladi.",
      },
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop",
      difficulty: {
        en: "Beginner",
        ru: "Начальный",
        uz: "Boshlang'ich",
      },
      tags: ["Arduino", "Sensors", "Motors"],
      materials: {
        en: [
          "Arduino UNO or compatible board",
          "Chassis kit with motors and wheels",
          "2x IR line tracking sensors",
          "L298N motor driver module",
          "Jumper wires",
          "Battery pack (6-12V)",
          "Breadboard (optional)",
        ],
        ru: [
          "Arduino UNO или совместимая плата",
          "Набор шасси с моторами и колесами",
          "2 ИК-датчика отслеживания линии",
          "Модуль драйвера двигателя L298N",
          "Соединительные провода",
          "Батарейный блок (6-12В)",
          "Макетная плата (опционально)",
        ],
        uz: [
          "Arduino UNO yoki mos keladigan plata",
          "Motorlar va g'ildiraklar bilan shassi to'plami",
          "2x IR chiziqni kuzatish sensorlari",
          "L298N motor drayveri moduli",
          "Ulovchi simlar",
          "Batareya bloki (6-12V)",
          "Maket platasi (ixtiyoriy)",
        ],
      },
      steps: {
        en: [
          {
            title: "Assemble the chassis",
            description:
              "Mount the motors to the chassis and attach the wheels. Make sure everything is securely fastened.",
          },
          {
            title: "Connect the motor driver",
            description: "Wire the L298N motor driver to the Arduino and connect the motors to the driver.",
          },
          {
            title: "Mount the sensors",
            description: "Attach the IR sensors to the front of the chassis, pointing downward to detect the line.",
          },
          {
            title: "Write the code",
            description: "Program the Arduino to read the sensor values and control the motors accordingly.",
          },
          {
            title: "Test and calibrate",
            description: "Test your robot on a line track and adjust the sensor sensitivity and motor speed as needed.",
          },
        ],
        ru: [
          {
            title: "Соберите шасси",
            description: "Установите моторы на шасси и прикрепите колеса. Убедитесь, что все надежно закреплено.",
          },
          {
            title: "Подключите драйвер двигателя",
            description: "Подключите драйвер двигателя L298N к Arduino и подключите моторы к драйверу.",
          },
          {
            title: "Установите датчики",
            description: "Прикрепите ИК-датчики к передней части шасси, направив их вниз для обнаружения линии.",
          },
          {
            title: "Напишите код",
            description:
              "Запрограммируйте Arduino для считывания значений датчиков и соответствующего управления моторами.",
          },
          {
            title: "Тестирование и калибровка",
            description:
              "Протестируйте вашего робота на линейной трассе и при необходимости отрегулируйте чувствительность датчиков и скорость моторов.",
          },
        ],
        uz: [
          {
            title: "Shassini yig'ing",
            description:
              "Motorlarni shassiga o'rnating va g'ildiraklarni biriktiring. Hamma narsa mahkam o'rnatilganiga ishonch hosil qiling.",
          },
          {
            title: "Motor drayverini ulang",
            description: "L298N motor drayverini Arduino ga ulang va motorlarni drayverga ulang.",
          },
          {
            title: "Sensorlarni o'rnating",
            description: "IR sensorlarni shassi old qismiga, chiziqni aniqlash uchun pastga qaratib o'rnating.",
          },
          {
            title: "Kodni yozing",
            description:
              "Arduino ni sensor qiymatlarini o'qish va motorlarni tegishli ravishda boshqarish uchun dasturlang.",
          },
          {
            title: "Sinov va kalibrlash",
            description:
              "Robotingizni chiziq trekida sinab ko'ring va kerak bo'lsa, sensor sezgirligi va motor tezligini sozlang.",
          },
        ],
      },
      codeSnippet: `
// Basic line following code for Arduino
const int leftSensorPin = A0;
const int rightSensorPin = A1;
const int leftMotorPin1 = 2;
const int leftMotorPin2 = 3;
const int rightMotorPin1 = 4;
const int rightMotorPin2 = 5;

void setup() {
  pinMode(leftMotorPin1, OUTPUT);
  pinMode(leftMotorPin2, OUTPUT);
  pinMode(rightMotorPin1, OUTPUT);
  pinMode(rightMotorPin2, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  int leftSensorValue = analogRead(leftSensorPin);
  int rightSensorValue = analogRead(rightSensorPin);
  
  Serial.print("Left: ");
  Serial.print(leftSensorValue);
  Serial.print(" Right: ");
  Serial.println(rightSensorValue);
  
  // Adjust these threshold values based on your sensors
  if (leftSensorValue > 500 && rightSensorValue > 500) {
    // Both sensors on the line - move forward
    moveForward();
  } else if (leftSensorValue > 500 && rightSensorValue <= 500) {
    // Left sensor on the line - turn left
    turnLeft();
  } else if (leftSensorValue <= 500 && rightSensorValue > 500) {
    // Right sensor on the line - turn right
    turnRight();
  } else {
    // Both sensors off the line - stop or search
    stop();
  }
  
  delay(10);
}

void moveForward() {
  digitalWrite(leftMotorPin1, HIGH);
  digitalWrite(leftMotorPin2, LOW);
  digitalWrite(rightMotorPin1, HIGH);
  digitalWrite(rightMotorPin2, LOW);
}

void turnLeft() {
  digitalWrite(leftMotorPin1, LOW);
  digitalWrite(leftMotorPin2, LOW);
  digitalWrite(rightMotorPin1, HIGH);
  digitalWrite(rightMotorPin2, LOW);
}

void turnRight() {
  digitalWrite(leftMotorPin1, HIGH);
  digitalWrite(leftMotorPin2, LOW);
  digitalWrite(rightMotorPin1, LOW);
  digitalWrite(rightMotorPin2, LOW);
}

void stop() {
  digitalWrite(leftMotorPin1, LOW);
  digitalWrite(leftMotorPin2, LOW);
  digitalWrite(rightMotorPin1, LOW);
  digitalWrite(rightMotorPin2, LOW);
}
      `,
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
      detailedDescription: {
        en: "Voice controlled robots represent an exciting intersection of robotics and artificial intelligence. This project will teach you how to create a robot that can understand and respond to your voice commands.\n\nYou'll learn about speech recognition technology, how to process audio signals, and how to translate recognized commands into robot actions. This project combines hardware and software skills, making it perfect for intermediate learners who want to expand their knowledge of both robotics and programming.",
        ru: "Роботы с голосовым управлением представляют собой увлекательное пересечение робототехники и искусственного интеллекта. Этот проект научит вас создавать робота, который может понимать ваши голосовые команды и реагировать на них.\n\nВы узнаете о технологии распознавания речи, о том, как обрабатывать аудиосигналы и как преобразовывать распознанные команды в действия робота. Этот проект сочетает в себе навыки работы с оборудованием и программным обеспечением, что делает его идеальным для учащихся среднего уровня, которые хотят расширить свои знания как в области робототехники, так и программирования.",
        uz: "Ovoz bilan boshqariladigan robotlar robototexnika va sun'iy intellektning qiziqarli kesishmasini ifodalaydi. Bu loyiha sizga ovozli buyruqlaringizni tushuna oladigan va ularga javob bera oladigan robot yaratishni o'rgatadi.\n\nSiz nutqni tanib olish texnologiyasi, audio signallarni qanday qayta ishlash va tanilgan buyruqlarni robot harakatlariga qanday tarjima qilish haqida o'rganasiz. Bu loyiha apparat va dasturiy ta'minot ko'nikmalarini birlashtiradi, bu esa ham robototexnika, ham dasturlash bo'yicha bilimlarini kengaytirmoqchi bo'lgan o'rta darajadagi o'quvchilar uchun juda mos keladi.",
      },
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop",
      difficulty: {
        en: "Intermediate",
        ru: "Средний",
        uz: "O'rta",
      },
      tags: ["Raspberry Pi", "Speech Recognition", "Python"],
      materials: {
        en: [
          "Raspberry Pi (3 or 4 recommended)",
          "Microphone (USB or compatible with Raspberry Pi)",
          "Chassis kit with motors and wheels",
          "L298N motor driver module",
          "Jumper wires",
          "Power bank for Raspberry Pi",
          "Battery pack for motors (6-12V)",
          "Speaker (optional for voice feedback)",
        ],
        ru: [
          "Raspberry Pi (рекомендуется 3 или 4)",
          "Микрофон (USB или совместимый с Raspberry Pi)",
          "Набор шасси с моторами и колесами",
          "Модуль драйвера двигателя L298N",
          "Соединительные провода",
          "Внешний аккумулятор для Raspberry Pi",
          "Батарейный блок для моторов (6-12В)",
          "Динамик (опционально для голосовой обратной связи)",
        ],
        uz: [
          "Raspberry Pi (3 yoki 4 tavsiya etiladi)",
          "Mikrofon (USB yoki Raspberry Pi bilan mos keladigan)",
          "Motorlar va g'ildiraklar bilan shassi to'plami",
          "L298N motor drayveri moduli",
          "Ulovchi simlar",
          "Raspberry Pi uchun quvvat banki",
          "Motorlar uchun batareya bloki (6-12V)",
          "Dinamik (ovozli fikr-mulohaza uchun ixtiyoriy)",
        ],
      },
      steps: {
        en: [
          {
            title: "Set up Raspberry Pi",
            description: "Install Raspbian OS and configure the necessary software for speech recognition.",
          },
          {
            title: "Assemble the robot chassis",
            description: "Mount the motors, wheels, and Raspberry Pi to the chassis.",
          },
          {
            title: "Connect the motor driver",
            description: "Wire the L298N motor driver to the Raspberry Pi GPIO pins and connect the motors.",
          },
          {
            title: "Install speech recognition libraries",
            description:
              "Install the necessary Python libraries for speech recognition (e.g., SpeechRecognition, PyAudio).",
          },
          {
            title: "Write the code",
            description: "Program the Raspberry Pi to listen for voice commands and control the motors accordingly.",
          },
          {
            title: "Test and refine",
            description: "Test your robot with different voice commands and refine the recognition accuracy.",
          },
        ],
        ru: [
          {
            title: "Настройте Raspberry Pi",
            description:
              "Установите ОС Raspbian и настройте необходимое программное обеспечение для распознавания речи.",
          },
          {
            title: "Соберите шасси робота",
            description: "Установите моторы, колеса и Raspberry Pi на шасси.",
          },
          {
            title: "Подключите драйвер двигателя",
            description: "Подключите драйвер двигателя L298N к контактам GPIO Raspberry Pi и подключите моторы.",
          },
          {
            title: "Установите библиотеки распознавания речи",
            description:
              "Установите необходимые библиотеки Python для распознавания речи (например, SpeechRecognition, PyAudio).",
          },
          {
            title: "Напишите код",
            description:
              "Запрограммируйте Raspberry Pi для прослушивания голосовых команд и соответствующего управления моторами.",
          },
          {
            title: "Тестирование и улучшение",
            description:
              "Протестируйте вашего робота с различными голосовыми командами и улучшите точность распознавания.",
          },
        ],
        uz: [
          {
            title: "Raspberry Pi ni sozlang",
            description: "Raspbian OS ni o'rnating va nutqni tanib olish uchun zarur dasturiy ta'minotni sozlang.",
          },
          {
            title: "Robot shassisini yig'ing",
            description: "Motorlar, g'ildiraklar va Raspberry Pi ni shassiga o'rnating.",
          },
          {
            title: "Motor drayverini ulang",
            description: "L298N motor drayverini Raspberry Pi GPIO pinlariga ulang va motorlarni ulang.",
          },
          {
            title: "Nutqni tanib olish kutubxonalarini o'rnating",
            description:
              "Nutqni tanib olish uchun zarur Python kutubxonalarini o'rnating (masalan, SpeechRecognition, PyAudio).",
          },
          {
            title: "Kodni yozing",
            description:
              "Raspberry Pi ni ovozli buyruqlarni tinglash va motorlarni tegishli ravishda boshqarish uchun dasturlang.",
          },
          {
            title: "Sinov va takomillashtirish",
            description:
              "Robotingizni turli xil ovozli buyruqlar bilan sinab ko'ring va tanib olish aniqligini takomillashtiring.",
          },
        ],
      },
      codeSnippet: `
# Basic voice control code for Raspberry Pi using Python
import speech_recognition as sr
import RPi.GPIO as GPIO
import time

# Set up GPIO pins
GPIO.setmode(GPIO.BCM)
LEFT_MOTOR_PIN1 = 17
LEFT_MOTOR_PIN2 = 18
RIGHT_MOTOR_PIN1 = 22
RIGHT_MOTOR_PIN2 = 23

GPIO.setup(LEFT_MOTOR_PIN1, GPIO.OUT)
GPIO.setup(LEFT_MOTOR_PIN2, GPIO.OUT)
GPIO.setup(RIGHT_MOTOR_PIN1, GPIO.OUT)
GPIO.setup(RIGHT_MOTOR_PIN2, GPIO.OUT)

# Initialize speech recognizer
r = sr.Recognizer()

def move_forward():
    GPIO.output(LEFT_MOTOR_PIN1, GPIO.HIGH)
    GPIO.output(LEFT_MOTOR_PIN2, GPIO.LOW)
    GPIO.output(RIGHT_MOTOR_PIN1, GPIO.HIGH)
    GPIO.output(RIGHT_MOTOR_PIN2, GPIO.LOW)
    print("Moving forward")

def turn_left():
    GPIO.output(LEFT_MOTOR_PIN1, GPIO.LOW)
    GPIO.output(LEFT_MOTOR_PIN2, GPIO.LOW)
    GPIO.output(RIGHT_MOTOR_PIN1, GPIO.HIGH)
    GPIO.output(RIGHT_MOTOR_PIN2, GPIO.LOW)
    print("Turning left")

def turn_right():
    GPIO.output(LEFT_MOTOR_PIN1, GPIO.HIGH)
    GPIO.output(LEFT_MOTOR_PIN2, GPIO.LOW)
    GPIO.output(RIGHT_MOTOR_PIN1, GPIO.LOW)
    GPIO.output(RIGHT_MOTOR_PIN2, GPIO.LOW)
    print("Turning right")

def stop():
    GPIO.output(LEFT_MOTOR_PIN1, GPIO.LOW)
    GPIO.output(LEFT_MOTOR_PIN2, GPIO.LOW)
    GPIO.output(RIGHT_MOTOR_PIN1, GPIO.LOW)
    GPIO.output(RIGHT_MOTOR_PIN2, GPIO.LOW)
    print("Stopping")

try:
    while True:
        with sr.Microphone() as source:
            print("Listening for commands...")
            audio = r.listen(source)
            
        try:
            command = r.recognize_google(audio).lower()
            print(f"Recognized: {command}")
            
            if "forward" in command:
                move_forward()
                time.sleep(2)
                stop()
            elif "left" in command:
                turn_left()
                time.sleep(1)
                stop()
            elif "right" in command:
                turn_right()
                time.sleep(1)
                stop()
            elif "stop" in command:
                stop()
            
        except sr.UnknownValueError:
            print("Could not understand audio")
        except sr.RequestError as e:
            print(f"Could not request results; {e}")
            
except KeyboardInterrupt:
    GPIO.cleanup()
    print("Program terminated")
      `,
    },
    // Add more projects as needed
  ]

  const project = projects.find((p) => p.id === projectId)

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">
              {language === "en" && "Project not found"}
              {language === "ru" && "Проект не найден"}
              {language === "uz" && "Loyiha topilmadi"}
            </h1>
            <Button asChild>
              <Link href="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {language === "en" && "Back to Projects"}
                {language === "ru" && "Назад к проектам"}
                {language === "uz" && "Loyihalarga qaytish"}
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    )
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
          <Button variant="outline" asChild className="mb-6">
            <Link href="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {language === "en" && "Back to Projects"}
              {language === "ru" && "Назад к проектам"}
              {language === "uz" && "Loyihalarga qaytish"}
            </Link>
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className="lg:col-span-2">
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden mb-6">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title[language as keyof typeof project.title]}
                  fill
                  className="object-cover"
                />
              </div>

              <h1 className="text-3xl font-bold mb-4">{project.title[language as keyof typeof project.title]}</h1>

              <div className="flex flex-wrap gap-2 mb-6">
                <span
                  className={`inline-block px-2 py-1 text-xs rounded-full ${getDifficultyColor(
                    project.difficulty[language as keyof typeof project.difficulty],
                  )}`}
                >
                  {project.difficulty[language as keyof typeof project.difficulty]}
                </span>
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="prose dark:prose-invert max-w-none mb-8">
                <p className="text-lg">
                  {project.detailedDescription[language as keyof typeof project.detailedDescription]}
                </p>
              </div>
            </div>

            <div>
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>
                    {language === "en" && "Project Overview"}
                    {language === "ru" && "Обзор проекта"}
                    {language === "uz" && "Loyiha haqida"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-1">
                        {language === "en" && "Difficulty"}
                        {language === "ru" && "Сложность"}
                        {language === "uz" && "Qiyinlik"}
                      </h3>
                      <p className="text-sm">{project.difficulty[language as keyof typeof project.difficulty]}</p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">
                        {language === "en" && "Technologies"}
                        {language === "ru" && "Технологии"}
                        {language === "uz" && "Texnologiyalar"}
                      </h3>
                      <div className="flex flex-wrap gap-1">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">
                        {language === "en" && "Estimated Time"}
                        {language === "ru" && "Примерное время"}
                        {language === "uz" && "Taxminiy vaqt"}
                      </h3>
                      <p className="text-sm">
                        {language === "en" && "2-4 hours"}
                        {language === "ru" && "2-4 часа"}
                        {language === "uz" && "2-4 soat"}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Button className="w-full mb-6">
                {language === "en" && "Start This Project"}
                {language === "ru" && "Начать этот проект"}
                {language === "uz" && "Ushbu loyihani boshlash"}
              </Button>

              <Card>
                <CardHeader>
                  <CardTitle>
                    {language === "en" && "Related Projects"}
                    {language === "ru" && "Похожие проекты"}
                    {language === "uz" && "O'xshash loyihalar"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {projects
                      .filter((p) => p.id !== projectId)
                      .slice(0, 2)
                      .map((relatedProject) => (
                        <li key={relatedProject.id} className="border-b pb-2 last:border-0 last:pb-0">
                          <Link href={`/projects/${relatedProject.id}`} className="hover:text-primary block">
                            {relatedProject.title[language as keyof typeof relatedProject.title]}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <Tabs defaultValue="steps" className="mb-8">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="steps" className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                {language === "en" && "Project Steps"}
                {language === "ru" && "Шаги проекта"}
                {language === "uz" && "Loyiha bosqichlari"}
              </TabsTrigger>
              <TabsTrigger value="materials" className="flex items-center gap-2">
                <Tool className="h-4 w-4" />
                {language === "en" && "Materials"}
                {language === "ru" && "Материалы"}
                {language === "uz" && "Materiallar"}
              </TabsTrigger>
              <TabsTrigger value="code" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                {language === "en" && "Code"}
                {language === "ru" && "Код"}
                {language === "uz" && "Kod"}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="steps">
              <Card>
                <CardHeader>
                  <CardTitle>
                    {language === "en" && "Step-by-Step Instructions"}
                    {language === "ru" && "Пошаговые инструкции"}
                    {language === "uz" && "Bosqichma-bosqich ko'rsatmalar"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {project.steps[language as keyof typeof project.steps].map((step, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">{step.title}</h3>
                          <p className="text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="materials">
              <Card>
                <CardHeader>
                  <CardTitle>
                    {language === "en" && "Required Materials"}
                    {language === "ru" && "Необходимые материалы"}
                    {language === "uz" && "Kerakli materiallar"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    {project.materials[language as keyof typeof project.materials].map((material, index) => (
                      <li key={index}>{material}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="code">
              <Card>
                <CardHeader>
                  <CardTitle>
                    {language === "en" && "Sample Code"}
                    {language === "ru" && "Пример кода"}
                    {language === "uz" && "Namuna kod"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
                    <pre className="text-sm">
                      <code>{project.codeSnippet}</code>
                    </pre>
                  </div>
                  <Button variant="outline" className="mt-4" asChild>
                    <Link href="#">
                      <Download className="mr-2 h-4 w-4" />
                      {language === "en" && "Download Code"}
                      {language === "ru" && "Скачать код"}
                      {language === "uz" && "Kodni yuklab olish"}
                    </Link>
                  </Button>
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

