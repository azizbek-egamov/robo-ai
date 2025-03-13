"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BellIcon as BrandTelegram } from "lucide-react"

export default function NewsSidebar() {
  const { t, language } = useLanguage()

  const news = [
    {
      id: 1,
      title: {
        en: "New Robotics Course Available",
        ru: "Доступен новый курс по робототехнике",
        uz: "Yangi robototexnika kursi mavjud",
      },
      date: "2023-12-15",
    },
    {
      id: 2,
      title: {
        en: "Robotics Competition Announcement",
        ru: "Объявление о соревновании по робототехнике",
        uz: "Robototexnika musobaqasi e'loni",
      },
      date: "2023-12-10",
    },
    {
      id: 3,
      title: {
        en: "Workshop: Building Your First AI Model",
        ru: "Мастер-класс: Создание вашей первой модели ИИ",
        uz: "Ustaxona: Birinchi AI modelingizni yaratish",
      },
      date: "2023-12-05",
    },
    {
      id: 4,
      title: {
        en: "New Learning Resources Added",
        ru: "Добавлены новые учебные ресурсы",
        uz: "Yangi o'quv materiallari qo'shildi",
      },
      date: "2023-12-01",
    },
  ]

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat(language === "en" ? "en-US" : language === "ru" ? "ru-RU" : "uz-UZ", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(date)
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{t("news")}</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {news.map((item) => (
              <li key={item.id} className="border-b pb-3 last:border-0 last:pb-0">
                <Link href={`/news/${item.id}`} className="block hover:text-primary">
                  <h3 className="font-medium">{item.title[language as keyof typeof item.title]}</h3>
                  <p className="text-sm text-muted-foreground">{formatDate(item.date)}</p>
                </Link>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card className="bg-primary/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BrandTelegram className="h-5 w-5" />
            {t("telegramBot")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm mb-4">
            {language === "en" &&
              "Stay updated with our Telegram bot. Get notifications about new courses, projects, and events."}
            {language === "ru" &&
              "Будьте в курсе с нашим Телеграм-ботом. Получайте уведомления о новых курсах, проектах и мероприятиях."}
            {language === "uz" &&
              "Telegram botimiz bilan yangilanib turing. Yangi kurslar, loyihalar va tadbirlar haqida xabarnomalar oling."}
          </p>
          <Button className="w-full" asChild>
            <a href="https://t.me/robolearn_bot" target="_blank" rel="noopener noreferrer">
              {language === "en" && "Open Telegram Bot"}
              {language === "ru" && "Открыть Телеграм бот"}
              {language === "uz" && "Telegram botni ochish"}
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

