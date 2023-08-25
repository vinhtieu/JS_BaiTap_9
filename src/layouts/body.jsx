import React from "react";
import Banner from "../components/banner";
import Card from "../components/card";

export default function body() {
  return (
    <div>
      <div className="container">
        <Banner />
        <div className="d-flex flex-row gap-4 mb-4">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}
