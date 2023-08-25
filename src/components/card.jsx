import React from "react";

export default function Card() {
  return (
    <div
      className="card flex flex-column"
      style={{ width: "auto", height: "500px" }}>
      <img
        src="https://dummyimage.com/500x325/dee2e6/6c757d.jpg"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title ">Card title</h5>
        <p className="card-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae dolor
          at iure sunt. Fugit nostrum, aliquam numquam soluta id quisquam!
        </p>
      </div>
      <div className="card-footer py-3">
        <button href="#" className="mx-4  btn btn-primary">
          Go somewhere
        </button>
      </div>
    </div>
  );
}
