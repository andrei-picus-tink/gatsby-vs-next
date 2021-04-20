import React from "react";
import { HelloWorld } from "../../../core/src/components/HelloWorld";
import { Link } from "gatsby";

export default function Index() {
  return (
    <>
      <head>
        <title>Gatsby</title>
      </head>
      <HelloWorld />
      <Link to="/news">News</Link>
    </>
  );
}
