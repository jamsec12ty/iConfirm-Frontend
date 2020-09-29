import React, {useState, useEffect} from 'react'
import { Calendar, Views, momentLocalizer } from 'react-big-calendar'
import loadedEvents from './events'
import ExampleControlSlot from './ExampleControlSlot'
import moment from 'moment'
import { GET_VENUE_QUERY } from "../EditVenue/queries";
import { useLazyQuery, gql } from "@apollo/client";
import DropDownEmployee from "./DropDownEmployee";
import PopModal from "./PopModal"

const propTypes = {}
const localizer = momentLocalizer(moment)
// class Selectable extends React.Component {
//   constructor(...args) {
//     super(...args)
//
//     this.state = { events }
//   }

const Selectable = (props) => {
  const venueId = "5f6d25a0bf7af1dd398e28b3";
  const [modalIsOpen,setIsOpen] = React.useState(false);
  const [shiftEvents,setShiftEvents] = React.useState([]);
  const [getVenueDetails, { loading, data: { venue } = {} }] = useLazyQuery(
    GET_VENUE_QUERY
  );

  useEffect(() => {
    if (venueId) {
      getVenueDetails({ variables: { id: venueId } });
    }
  }, [getVenueDetails, venueId]);


  useEffect( () => {
    if ( venue ) {
      // console.log('venue', venue.venue);
      //TODO get all rosters, instead of just 1st.
        venue.rosters[0].shifts.map((shift) => {
        return {
          id:shift._id,
          title:shift.employee.name,
          start:new Date(shift.clockOnDate),
          end: new Date(shift.clockOffDate),
        };
      })
      // setShiftEvents(venue.rosters[0].shifts)
    }

  },[venue]);


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
    <PopModal />
        <br/>
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

    //TODO add the endDate field to mongoose shift model, add the end date to type Shift in ba schema. Add endDate to the venue queries

} //end of Selectable

Selectable.propTypes = propTypes

export default Selectable;
