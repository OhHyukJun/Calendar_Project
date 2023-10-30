import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useRecoilState } from "recoil";

export const DatePick = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
 

  const today = new Date();

  const oneYearFromToday = new Date();
  oneYearFromToday.setFullYear(oneYearFromToday.getFullYear() + 1);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  return (
    <div>
      <span>기간</span>
      <div>
        <DatePicker
          dateFormat="yyyy/MM/dd"
          shouldCloseOnSelect
          minDate={today}
          maxDate={oneYearFromToday}
          selected={startDate}
          onChange={handleStartDateChange}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          popperPlacement="bottom"
          wrapperClassName="date-picker-wrapper"
          placeholderText="시작 날짜"
        />
        ~
        <DatePicker
          dateFormat="yyyy/MM/dd"
          shouldCloseOnSelect
          maxDate={oneYearFromToday}
          selected={endDate}
          onChange={handleEndDateChange}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          popperPlacement="bottom"
          wrapperClassName="date-picker-wrapper"
          placeholderText="종료 날짜"
        />
      </div>
    </div>
  );
};