"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Toaster } from "sonner"
import { toast } from "sonner"
import { Section } from "@/components/landing/section"

export default function PlaygroundPage() {
  const [dialogOpen, setDialogOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Toaster theme="dark" />
      
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center">
            <h1 className="text-2xl font-bold">Design System Playground</h1>
          </div>
        </div>
      </header>

      <main>
        {/* Buttons Section */}
        <Section>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Buttons</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-muted-foreground">Variants</h3>
                <div className="flex flex-wrap gap-4">
                  <Button variant="default">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="link">Link</Button>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-muted-foreground">Sizes</h3>
                <div className="flex flex-wrap items-center gap-4">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-muted-foreground">States</h3>
                <div className="flex flex-wrap gap-4">
                  <Button>Default</Button>
                  <Button disabled>Disabled</Button>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Cards Section */}
        <Section>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Cards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground">
                    Card padrão com conteúdo simples
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Card com Header</CardTitle>
                  <CardDescription>
                    Descrição do card com header e content
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Conteúdo do card demonstrando estrutura completa.
                  </p>
                </CardContent>
              </Card>

              <Card className="transition-all hover:shadow-md cursor-pointer">
                <CardHeader>
                  <CardTitle>Card Interativo</CardTitle>
                  <CardDescription>
                    Hover para ver efeito visual
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Este card responde a interações com hover.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm">Ação</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </Section>

        {/* Badges Section */}
        <Section>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Badges</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-muted-foreground">Variants</h3>
                <div className="flex flex-wrap gap-4">
                  <Badge variant="default">Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="outline">Outline</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-muted-foreground">Status Examples</h3>
                <div className="flex flex-wrap gap-4">
                  <Badge variant="default">Ready</Badge>
                  <Badge variant="secondary">In Progress</Badge>
                  <Badge variant="outline">Locked</Badge>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Inputs Section */}
        <Section>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Inputs</h2>
            <div className="space-y-6 max-w-md">
              <div>
                <label className="text-sm font-medium mb-2 block">Default Input</label>
                <Input type="text" placeholder="Digite algo..." />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Input com valor</label>
                <Input type="text" defaultValue="Valor preenchido" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Disabled Input</label>
                <Input type="text" placeholder="Campo desabilitado" disabled />
              </div>
            </div>
          </div>
        </Section>

        {/* Tabs Section */}
        <Section>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Tabs</h2>
            <div className="max-w-2xl">
              <Tabs defaultValue="tab1">
                <TabsList>
                  <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                  <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                  <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1" className="mt-4">
                  <Card>
                    <CardContent className="pt-6">
                      <p className="text-sm">
                        Conteúdo da primeira tab. Aqui você pode ver como o conteúdo
                        é exibido quando a tab está ativa.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="tab2" className="mt-4">
                  <Card>
                    <CardContent className="pt-6">
                      <p className="text-sm">
                        Conteúdo da segunda tab. Cada tab pode ter seu próprio conteúdo
                        e estrutura.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="tab3" className="mt-4">
                  <Card>
                    <CardContent className="pt-6">
                      <p className="text-sm">
                        Conteúdo da terceira tab. Demonstra a navegação entre diferentes
                        seções de conteúdo.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </Section>

        {/* Dialog Section */}
        <Section>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Dialog</h2>
            <div className="space-y-4">
              <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogTrigger asChild>
                  <Button>Abrir Dialog</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Confirmar Ação</DialogTitle>
                    <DialogDescription>
                      Este é um exemplo de dialog com título, descrição e ações.
                      Use dialogs para confirmações importantes ou informações adicionais.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="py-4">
                    <p className="text-sm text-muted-foreground">
                      Conteúdo do dialog pode conter qualquer informação relevante.
                    </p>
                  </div>
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setDialogOpen(false)}>
                      Cancelar
                    </Button>
                    <Button onClick={() => setDialogOpen(false)}>
                      Confirmar
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </Section>

        {/* Toast Section */}
        <Section>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Toast (Sonner)</h2>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-4">
                <Button
                  onClick={() => toast.success("Operação realizada com sucesso!")}
                >
                  Toast de Sucesso
                </Button>
                <Button
                  variant="outline"
                  onClick={() => toast.info("Esta é uma informação importante.")}
                >
                  Toast de Info
                </Button>
                <Button
                  variant="destructive"
                  onClick={() => toast.error("Ocorreu um erro na operação.")}
                >
                  Toast de Erro
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => toast.warning("Atenção: verifique os dados.")}
                >
                  Toast de Aviso
                </Button>
              </div>
            </div>
          </div>
        </Section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-card mt-auto">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center text-sm text-muted-foreground">
            <p>Design System Playground - Landing Lab</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

