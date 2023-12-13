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


const StyleGuide = () => {

  const [date, setDate] = useState()


  return (
    <>
    {/* typography */}
    <div>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
    </div>
    <div className="bg-black flex flex-col items-start gap-y-4">
        <Button variant='default' size='sm'>lets eat</Button>
        <Button variant='orange'>lets eat</Button>
        <Button variant='input'>lets eat</Button>
        {/* label & input */}
        <div className="p-8">
            <Label htmlFor='firstname'>
                fist name</Label>
                <Input type='firstname' id='firstname' placeholder='first name'/>
        </div>
        {/* calendar */}
        <div>
            <Label>Date</Label>
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
        <div className="p-8" >
        <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
        </div>
    </div>
    </>
  )
}

export default StyleGuide