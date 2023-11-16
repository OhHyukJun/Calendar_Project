import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { DatePick } from "./DatePick";
import { Calendar, momentLocalizer } from "react-big-calendar";
import ReactModal from "react-modal";
import moment from 'moment';
import styled from "styled-components";
import DatePicker from "react-datepicker";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import "react-datepicker/dist/react-datepicker.css";

export const StyledModal = styled(ReactModal)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #f5f5f5;
  border-radius: 5%;
  width:20vw;
  height:10vw;
  outline: none;
  opacity:1;
  display:flex-column;
  h2 {
    margin-top: 0;
    color: #333;
    font-size: 1.2rem;
  }
  .react-datepicker-wrapper {
    display: inline-block;
    margin-right: 0.1vw;
  }
  button{
    margin:0.5vw;
    width:4vw;
  }
  z-index: 10000;
`;

const myEventsList = [
  {
    id: 0,
    title: '테스트 1',
    allDay: true,
    start: new Date("2023-11-13"),
    end: new Date("2023-11-18"),
  },
  {
    id: 1,
    title: '테스트 2',
    allDay: true,
    start: new Date("2023-11-13"),
    end: new Date("2023-11-17"),
  }
]

export const DateInput = () => {
    moment.locale('ko-KR');
    const localize = momentLocalizer(moment);
    const [events, setEvents] = useState(myEventsList);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null)
    const [title, setTitle] = useState("");

    const handleSelect = ({ start, end }) => {
      setSelectedEvent({ start, end, title: "" });
      setStartDate(new Date(start));
      setEndDate(new Date(end));
      setTitle("");
      setModalIsOpen(true);
    }

    const handleEventSelect = event => {
      setSelectedEvent(event);
      setStartDate(new Date(event.start));
      setEndDate(new Date(event.end));
      setModalIsOpen(true);
    }

    const handleSave = () => {
      if (selectedEvent.id != null) {
        setEvents(events.map(e => e.id === selectedEvent.id ? { ...e, start: startDate, end: endDate, title: title } : e));
      } else {
        setEvents([...events, { id: events.length, start: startDate, end: endDate, title: title }]);
      }
      setModalIsOpen(false);
    }

    const handleDelete = () => {
      setEvents(events.filter(e => e.id !== selectedEvent.id));
      setModalIsOpen(false);
    }


    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log("submit");
    }

    return (
      <Container>
        <form onSubmit={handleSubmit}>
          <div>
            <Calendar
              localizer={localize}
              events={events}
              startAccessor="start"
              endAccessor="end"
              style={{ height: 800 }}
              onSelectSlot={handleSelect}
              onSelectEvent={handleEventSelect}
              selectable={true}
            />
          </div>
            <StyledModal isOpen={modalIsOpen}>
              <h2>{selectedEvent?.title}</h2>
              <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
              <DatePicker selected={endDate} onChange={date => setEndDate(date)} />
              <Button onClick={handleSave}>저장</Button>
              <Button onClick={handleDelete}>삭제</Button>
              <Button onClick={() => setModalIsOpen(false)}>취소</Button>
            </StyledModal>
        </form>
      </Container>
    );
};
