import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';

import { CalendarContainer } from './styles';

interface availableTimeForAppointments {
  id: string;
  from_user_id: string;
  start: Date;
  end: Date;
  created_at: Date;
  updated_at: Date;
}
const Calendar: React.FC = () => {
  const [availableTimes, setAvailableTimes] = useState([]);
  useEffect(() => {
    async function loadAvailableTimes(): Promise<void> {
      const response = await api.get(
        'available_time/2e774072-6ef7-4e4d-85f6-41162df94269',
      );
      // // TODO
      // {
      //   // this object will be "parsed" into an Event Object
      //   title: 'Code Challenges', // a property!
      //   allDay: false,
      //   start: '2020-07-24T12:30:00-03:00', // a property!
      //   end: '2020-07-25T12:30:00-03:00', // a property! ** see important note below about 'end' **
      // },

      const timesArray = response.data.map(
        (availableTime: availableTimeForAppointments) => ({
          title: 'Testando',
          start: availableTime.start,
          end: availableTime.end,
          allDay: false,
        }),
      );

      console.log(timesArray);

      setAvailableTimes(timesArray);
      console.log(availableTimes);
    }

    loadAvailableTimes();
  }, []);

  return (
    <>
      <CalendarContainer>
        <FullCalendar
          plugins={[
            dayGridPlugin,
            timeGridPlugin,
            interactionPlugin,
            listPlugin,
          ]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,list',
          }}
          events={availableTimes}
        />
      </CalendarContainer>
    </>
  );
};

export default Calendar;
