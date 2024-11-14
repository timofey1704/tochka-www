'use client'

import React, { useState } from 'react'
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { DateCheckProps } from '@/app/types'
import { toast } from 'react-hot-toast'

export function DateCheck({ selectedDate, onDateChange }: DateCheckProps) {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)

  const handleDateChange = (date: Date | undefined) => {
    if (!date) return

    const today = new Date()
    const oneMonthFromToday = new Date()
    oneMonthFromToday.setMonth(today.getMonth() + 1)

    if (date < today) {
      toast.error('Нельзя записаться в прошлое', { icon: '🤪' })
      onDateChange(undefined)
    } else if (date > oneMonthFromToday) {
      toast.error('Мы не проводим запись больше, чем на месяц вперед', {
        icon: '🤪',
      })
      onDateChange(undefined)
    } else {
      onDateChange(date)
      setIsPopoverOpen(false)
    }
  }

  return (
    <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'w-full justify-start text-left font-normal',
            !selectedDate && 'text-muted-foreground'
          )}
          onClick={() => setIsPopoverOpen(!isPopoverOpen)}
        >
          <CalendarIcon />
          {selectedDate ? (
            format(selectedDate, 'PPP')
          ) : (
            <span>Выберите дату для записи</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={handleDateChange}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
