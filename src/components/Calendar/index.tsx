import React, { useState, useEffect } from 'react';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

import { CalendarContainer } from './styles';

const Calendar: React.FC = () => {
  // useEffect(() => {
  //   async function loadTransactions(): Promise<void> {
  //     // TODO
  //   }

  //   loadTransactions();
  // }, []);

  return (
    <>
      <CalendarContainer>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay',
          }}
          events={[
            {
              // this object will be "parsed" into an Event Object
              title: 'Code Challenges', // a property!
              allDay: false,
              start: '2020-07-24T12:30:00-03:00', // a property!
              end: '2020-07-25T12:30:00-03:00', // a property! ** see important note below about 'end' **
            },
            {
              // this object will be "parsed" into an Event Object
              title: 'Code', // a property!
              allDay: false,
              start: '2020-07-24T07:00:00-03:00', // a property!
              end: '2020-07-24T09:00:00-03:00', // a property! ** see important note below about 'end' **
            },
            {
              // this object will be "parsed" into an Event Object
              title: 'Code Challenges', // a property!
              allDay: false,
              start: '2020-07-24T19:00:00-03:00', // a property!
              end: '2020-07-24T21:00:00-03:00', // a property! ** see important note below about 'end' **
            },
          ]}
        />
      </CalendarContainer>
    </>
  );
};

export default Calendar;
