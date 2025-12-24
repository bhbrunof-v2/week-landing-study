"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { WeekCard, type WeekData, type WeekStatus } from "@/components/landing/week-card"

// Array de semanas - fácil de adicionar novas semanas
const weeksData: WeekData[] = [
  {
    slug: "/week-01",
    number: "Week 01",
    status: "Ready",
    description: "Primeira landing page focada em hero section e CTA",
    checklist: [
      "Criar estrutura básica da landing",
      "Implementar hero section com título impactante",
      "Adicionar botão CTA principal",
      "Configurar responsividade mobile-first",
    ],
  },
  {
    slug: "/week-02",
    number: "Week 02",
    status: "In progress",
    description: "Landing com features grid e testimonials",
    checklist: [
      "Criar grid de features com ícones",
      "Implementar seção de depoimentos",
      "Adicionar animações sutis",
      "Otimizar performance",
    ],
  },
  {
    slug: "/week-03",
    number: "Week 03",
    status: "Locked",
    description: "Landing com pricing table e FAQ",
    checklist: [
      "Criar tabela de preços comparativa",
      "Implementar FAQ com accordion",
      "Adicionar formulário de contato",
      "Integrar validação de formulário",
    ],
  },
  {
    slug: "/week-04",
    number: "Week 04",
    status: "Locked",
    description: "Landing com blog preview e newsletter",
    checklist: [
      "Criar preview de posts do blog",
      "Implementar formulário de newsletter",
      "Adicionar integração com API",
      "Configurar analytics",
    ],
  },
]

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState<WeekStatus | "All">("All")

  // Filtragem client-side
  const filteredWeeks = weeksData.filter((week) => {
    const matchesSearch =
      week.number.toLowerCase().includes(searchTerm.toLowerCase()) ||
      week.description.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesStatus =
      statusFilter === "All" || week.status === statusFilter

    return matchesSearch && matchesStatus
  })

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <h1 className="text-2xl font-bold">Landing Lab</h1>
            <Button asChild>
              <Link href="/week-01">Nova semana</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Treine suas habilidades semana a semana
            </h2>
            <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
              Uma landing page por semana para treinar Cursor + shadcn/ui.
              Desenvolva projetos reais e melhore suas habilidades de forma
              consistente.
            </p>
          </div>
        </div>
      </section>

      {/* Filtros e Busca */}
      <section className="border-t bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Tabs
              value={statusFilter}
              onValueChange={(value) =>
                setStatusFilter(value as WeekStatus | "All")
              }
              className="w-full sm:w-auto"
            >
              <TabsList>
                <TabsTrigger value="All">All</TabsTrigger>
                <TabsTrigger value="Ready">Ready</TabsTrigger>
                <TabsTrigger value="In progress">In progress</TabsTrigger>
              </TabsList>
            </Tabs>
            <Input
              type="text"
              placeholder="Buscar por título ou descrição..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full sm:w-64"
            />
          </div>
        </div>
      </section>

      {/* Grid de Semanas */}
      <main className="flex-1 py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-semibold mb-6">Semanas</h3>
          {filteredWeeks.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredWeeks.map((week) => (
                <WeekCard key={week.slug} week={week} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                Nenhuma semana encontrada com os filtros aplicados.
              </p>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-card mt-auto">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2025 Landing Lab. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
