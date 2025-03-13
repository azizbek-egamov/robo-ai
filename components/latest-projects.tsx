"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function LatestProjects() {
  const { t } = useLanguage()

  const projects = [
    {
      id: 1,
      title: {
        en: "Line Following Robot",
        ru: "Робот, следующий по линии",
        uz: "Chiziq bo'ylab harakatlanuvchi robot",
      },
      description: {
        en: "Build a robot that can follow a line using sensors",
        ru: "Создайте робота, который может следовать по линии с помощью датчиков",
        uz: "Sensorlar yordamida chiziq bo'ylab harakatlanadigan robot yarating",
      },
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop",
      difficulty: {
        en: "Beginner",
        ru: "Начальный",
        uz: "Boshlang'ich",
      },
    },
    {
      id: 2,
      title: {
        en: "Voice Controlled Robot",
        ru: "Робот с голосовым управлением",
        uz: "Ovoz bilan boshqariladigan robot",
      },
      description: {
        en: "Create a robot that responds to voice commands",
        ru: "Создайте робота, который реагирует на голосовые команды",
        uz: "Ovozli buyruqlarga javob beradigan robot yarating",
      },
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop",
      difficulty: {
        en: "Intermediate",
        ru: "Средний",
        uz: "O'rta",
      },
    },
  ]

  const { language } = useLanguage()

  return (
    <section className="py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">{t("latestProjects")}</h2>
        <Button variant="ghost" asChild>
          <Link href="/projects">{t("viewAll")}</Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title[language as keyof typeof project.title]}
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle>{project.title[language as keyof typeof project.title]}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                {project.description[language as keyof typeof project.description]}
              </p>
              <div className="mt-2">
                <span className="inline-block px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
                  {project.difficulty[language as keyof typeof project.difficulty]}
                </span>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href={`/projects/${project.id}`}>{t("learnMore")}</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

