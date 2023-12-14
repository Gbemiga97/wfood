"use client"

import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"



 
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
 
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from "react"
 
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"



const ReservationForm = () => {

  const [date, setDate] = useState()


  return (
    <form className="flex flex-col gap-y-10">
        <div className="grid gap-[1.8rem]">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-[1.8rem]">
                <div>
                    <Label htmlFor='firstname'>first name</Label>
                    <Input id='firstname' type='text' />
                </div>
                <div>
                    <Label htmlFor='lastname'>last name</Label>
                    <Input id='lastname' type='text' />
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-[1.8rem]">
                {/* calendar */}
                <div>
                    <Label>date</Label>
                    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"input"}
          className={cn(
            "w-full justify-start text-left font-normal",       
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
                     </Popover>
                </div>
                {/* select */}
                <div>
                    <Label>person</Label>
                    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="How many people?" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>People</SelectLabel>
          <SelectItem value="1">1</SelectItem>
          <SelectItem value="2">2</SelectItem>
          <SelectItem value="3">3</SelectItem>
          <SelectItem value="4">4</SelectItem>
          <SelectItem value="5">5</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
                </div>
            </div>
        </div>
        <Button className='uppercase w-full xl:w-fit xl:mx-0 xl:self-end'>
            Book a table</Button>
    </form>
    )
}

export default ReservationForm