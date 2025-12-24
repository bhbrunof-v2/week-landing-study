"use client"

import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { WeekChecklistDialog } from "./week-checklist-dialog"

export type WeekStatus = "Ready" | "In progress" | "Locked"

export interface WeekData {
  slug: string
  number: string
  status: WeekStatus
  description: string
  checklist: string[]
}

interface WeekCardProps {
  week: WeekData
}

export function WeekCard({ week }: WeekCardProps) {
  const getStatusVariant = (status: WeekStatus) => {
    switch (status) {
      case "Ready":
        return "default"
      case "In progress":
        return "secondary"
      case "Locked":
        return "outline"
      default:
        return "outline"
    }
  }

  return (
    <Card className="flex flex-col">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <CardTitle className="text-xl">{week.number}</CardTitle>
          <Badge variant={getStatusVariant(week.status)}>{week.status}</Badge>
        </div>
        <CardDescription className="mt-2">{week.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <Separator />
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button asChild variant="default" className="flex-1">
          <Link href={week.slug}>Abrir</Link>
        </Button>
        <WeekChecklistDialog week={week} />
      </CardFooter>
    </Card>
  )
}

