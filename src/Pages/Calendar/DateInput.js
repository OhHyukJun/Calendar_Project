import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { DatePick } from "./DatePick";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from 'moment';
//import 'react-calendar/dist/Calendar.css';
import styled from "styled-components";
import 'react-big-calendar/lib/css/react-big-calendar.css';

const TextContainer = styled.span`
  display:flex;
  justify-content: center;
  margin-top:1vw;
`;



export const DateInput = () => {
  moment.locale('ko-KR');
  const localize = momentLocalizer(moment);
  const [date, setDate] = useState();

  useEffect(() => {
    setDate({
      ...date,
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit");
    console.log(date);
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <div>
          <Calendar
            localizer={localize}
            style={{ height: 800 }}
          />
        </div>
        <div>
          <TextContainer>
            <DatePick />
          </TextContainer>
        </div>
        <Button type="submit">
          <span>등록하기</span>
        </Button>
      </form>
    </Container>
  );
};
