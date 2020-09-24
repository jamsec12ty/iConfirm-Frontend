import React, {useState, useEffect} from 'react'
import { Calendar, Views, momentLocalizer } from 'react-big-calendar'
import loadedEvents from './events'
import ExampleControlSlot from './ExampleControlSlot'
import moment from 'moment'


const propTypes = {}
const localizer = momentLocalizer(moment)
// class Selectable extends React.Component {
//   constructor(...args) {
//     super(...args)
//
//     this.state = { events }
//   }

const Selectable = (props) => {

  const [events, setEvents] = useState(loadedEvents);

  const handleSelect = ({ start, end }) => {
    const title = window.prompt('New Event name')
    if (title)
      setEvents([
          ...events,
          {
            start,
            end,
            title
          },
        ]
      ); // setEvents

  }; //end of handleSelect

    return (
      <>
        <ExampleControlSlot.Entry waitForOutlet>
          <strong>
            Click an event to see more info, or drag the mouse over the calendar
            to select a date/time range.
          </strong>
        </ExampleControlSlot.Entry>
        <Calendar
          selectable
          localizer={localizer}
          events={events}
          defaultView={Views.WEEK}
          scrollToTime={new Date(1970, 1, 1, 6)}
          defaultDate={new Date(2015, 3, 12)}
          onSelectEvent={event => alert(event.title)}
          onSelectSlot={handleSelect}
        />
      </>
    )

} //end of Selectable

Selectable.propTypes = propTypes

export default Selectable;
