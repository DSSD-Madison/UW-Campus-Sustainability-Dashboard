"use client"

import * as React from "react"
import { format, subMonths, startOfMonth, endOfMonth } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { DateRange } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function DatePickerWithRange({
  className,
  onDateChange,
}: React.HTMLAttributes<HTMLDivElement> & {
  onDateChange?: (dateRange: DateRange | undefined) => void;
}) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2025, 0, 1),
    to: new Date(),
  })

  const handleDateChange = (newDate: DateRange | undefined) => {
    setDate(newDate);
    if (onDateChange) {
      onDateChange(newDate);
    }
  };

  const handleLastMonth = () => {
    const today = new Date();
    const lastMonth = subMonths(today, 1);
    const from = startOfMonth(lastMonth);
    const to = endOfMonth(lastMonth);
    
    handleDateChange({ from, to });
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant="outline"
            className={cn(
              "h-10 min-w-52 justify-start gap-2 rounded-lg border-gray-200 bg-white px-3 py-2 font-normal text-gray-600 shadow-sm hover:bg-gray-50 hover:text-gray-900",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="h-4 w-4 text-gray-500" />
            {date?.from ? (
              date.to ? (
                <span>
                  {format(date.from, "MMM d, yyyy")} - {format(date.to, "MMM d, yyyy")}
                </span>
              ) : (
                <span>{format(date.from, "MMM d, yyyy")}</span>
              )
            ) : (
              <span>Select date range</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 bg-white shadow-md" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={handleDateChange}
            numberOfMonths={2}
            className="border-0"
          />
          <div className="flex items-center justify-end gap-2 border-t border-gray-100 p-3">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => handleDateChange({
                from: new Date(new Date().getFullYear(), 0, 1),
                to: new Date()
              })}
              className="text-sm"
            >
              This Year
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={handleLastMonth}
              className="text-sm"
            >
              Last Month
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => handleDateChange(date)}
              className="text-sm font-medium text-green-600 hover:bg-green-50 hover:text-green-700 border-green-200"
            >
              Apply
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}