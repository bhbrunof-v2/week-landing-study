"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { WeekData } from "./week-card"

interface WeekChecklistDialogProps {
  week: WeekData
}

export function WeekChecklistDialog({ week }: WeekChecklistDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="flex-1">
          Ver checklist
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Checklist - {week.number}</DialogTitle>
          <DialogDescription>
            Itens a serem completados nesta semana
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <ul className="space-y-2">
            {week.checklist.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  )
}

