import React from "react";
import { Container } from "../helper/lib";
import { FetchHook } from "../hook/FetchHook";
import { CounterReducer } from "../hook/CounterReducer";

export const Project = (): JSX.Element => {
  // custom hook: FetchHook example
  const userId = 1;
  const { loading, data, error } = FetchHook(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );

  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  return (
    <Container>
      <CounterReducer step={5} min={-100} max={100} />
    </Container>
  );
};
