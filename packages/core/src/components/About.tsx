import React from "react";

type Props = {
  data: number;
};

export const About = (props: Props) => (
  <div>Random number of the day: {props.data}</div>
);
