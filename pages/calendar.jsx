import format from "date-fns/format"
import getDay from "date-fns/getDay"
import parse from "date-fns/parse"
import startOfWeek from "date-fns/startOfWeek"
import React, { useState } from "react"
import { Calendar, dateFnsLocalizer } from "react-big-calendar"
import "react-big-calendar/lib/css/react-big-calendar.css"
import Hero from "../components/Hero"
import events from "../components/Content/Schedule.jsx"

const locales = {
  "en-US": require("date-fns/locale/en-US"),
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

function Schedule() {
  const [allEvents, setAllEvents] = useState(events)
  // const [selected, setSelected] = useState();

  // const handleSelected = (event) => {
  //   setSelected(event);
  //   document.getElementById('answer').innerHTML = event.title
  // };

  return (
    <div className='Schedule mb-[5rem]'>
      <Hero heading='Calendar' message='View Our Schedule' />
      
      <div className="invisible md:visible hidden md:block" >
        <Calendar
        eventPropGetter={(event) => {
          const backgroundColor = "#1e3a8a"
          return { style: { backgroundColor , border: "#4F6BBB",
          borderStyle: "solid" , color: "#FFF" } }
        }}
        min={new Date(0, 0, 0, 12, 0, 0)}
        max={new Date(0, 0, 0, 22, 0, 0)} 
        defaultView='month'
        localizer={localizer}
        events={allEvents}
        startAccessor='start'
        endAccessor='end'
        style={{ height: 1000, margin: "50px" }}
        // selected={selected}
        // onSelectEvent={handleSelected}
      />
      </div>

      <div className="md:invisible md:hidden" >
        <Calendar
        eventPropGetter={(event) => {
          const backgroundColor = "#1e3a8a"
          return { style: { backgroundColor , border: "#4F6BBB",
          borderStyle: "solid" , color: "#FFF" } }
        }}
        min={new Date(0, 0, 0, 12, 0, 0)}
        max={new Date(0, 0, 0, 22, 0, 0)} 
        defaultView='agenda'
        localizer={localizer}
        events={allEvents}
        startAccessor='start'
        endAccessor='end'
        style={{ height: 550, margin: "50px" }}
        // selected={selected}
        // onSelectEvent={handleSelected}
      />
      </div>
    </div>
  )
}

export default Schedule
