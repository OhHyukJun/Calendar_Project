import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { DatePick } from "./DatePick";

export const DateInput = () => {
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
      <form
        onSubmit={handleSubmit}
      >
        <div>
          <span>등록</span>
        </div>
        <div>
          <div>
            <DatePick />
          </div>
        </div>
        <Button type="submit">
          <span>등록하기</span>
        </Button>
      </form>
    </Container>
  );
};
