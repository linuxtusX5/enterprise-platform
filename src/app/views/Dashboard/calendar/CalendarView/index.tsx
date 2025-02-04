import React, { useEffect } from 'react';
import { getEvents } from 'features/calendar/calendarSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/reducers';

const CalendarView = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEvents());
  }, []);
  return (
    <div>
      <h1>Calendar</h1>
    </div>
  );
};

export default CalendarView;
