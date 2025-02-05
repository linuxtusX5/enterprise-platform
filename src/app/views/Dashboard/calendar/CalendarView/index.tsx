import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/reducers';
import FullCalendar from '@fullcalendar/react';
import {
  Container,
  makeStyles,
  Dialog,
  Paper,
  useMediaQuery,
} from '@material-ui/core';
import Pages from 'app/components/pages';
import Header from './Header';
import {
  getEvents,
  openModal,
  closeModal,
  selectRange,
} from 'features/calendar/calendarSlice';
import { EventType, ViewType } from 'app/models/calendar-type';
import AddEditEventForm from './AddEditEventForm';

const CalendarView = () => {
  const selectedEvent = useSelector(selectedEventSelector);
  const classes = useStyles();
  const dispatch = useDispatch();
  const { events, loading, error, isModalOpen, selectedRange } = useSelector(
    (state: RootState) => state.calendar,
  );

  const calendarRef = useRef<FullCalendar | null>(null);
  useEffect(() => {
    dispatch(getEvents());
  }, []);
  const handleAddClick = (): void => {
    dispatch(openModal());
  };
  const handleModalClose = (): void => {
    dispatch(closeModal());
  };

  const handleRangeSelect = (arg: any): void => {
    const calendarEl = calendarRef.current;

    if (calendarEl) {
      const calendarApi = calendarEl.getApi();

      calendarApi.unselect();
    }

    dispatch(selectRange(arg.start, arg.end));
  };

  return (
    <Pages className={classes.root} title="Calendar">
      <Container maxWidth={false}>
        <div className={classes.root}>
          <Header onAddClick={handleAddClick} />
          {/* <h1>Calendar Works!</h1> */}
          <Dialog
            maxWidth="sm"
            fullWidth
            onClose={handleModalClose}
            open={isModalOpen}
          >
            {isModalOpen && (
              <AddEditEventForm
                event={selectedEvent}
                range={selectedRange ?? undefined}
                onAddComplete={handleModalClose}
                onCancel={handleModalClose}
                onDeleteComplete={handleModalClose}
                onEditComplete={handleModalClose}
              />
            )}
          </Dialog>

          {loading && <h2>Loading..</h2>}
          {error && <h2>Something happened</h2>}
          <ul>
            {events?.map(e => (
              <li key={e.id}>{e.title}</li>
            ))}
          </ul>
        </div>
      </Container>
    </Pages>
  );
};

export default CalendarView;
const selectedEventSelector = (state: RootState): EventType | undefined => {
  const { events, selectedEventId } = state.calendar;
  if (selectedEventId) {
    return events?.find(_event => _event.id === selectedEventId) ?? undefined;
  } else {
    return undefined;
  }
};

const useStyles = makeStyles(() => ({
  root: {
    marginLeft: '130px',
  },
}));
