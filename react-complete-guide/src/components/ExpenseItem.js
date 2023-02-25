import React from "react";

const data = [
  {
    id: 1,
    name: "Aryan",
    profession: "Developer",
    address: "Shamli",
  },
  {
    id: 2,
    name: "Vanit",
    profession: "Developer",
    address: "Gurugram",
  },
  {
    id: 3,
    name: " Ankit",
    profession: " Developer",
    address: "Gurugram",
  },
  {
    id: 4,
    name: "Abhijeet",
    profession: "Doctor",
    address: " Chandigarh",
  },
];
function Cup({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}

function Clock({ time }) {
  let hours = time.getHours();
  let className;
  if (hours >= 0 && hours <= 6) {
    className = "night";
  } else {
    className = "day";
  }
  return <h1 className={className}>{time.toLocaleTimeString()}</h1>;
}

export default function ExpenseItem() {
  const filterData = data
    .filter(
      (data) => data.address === "Gurugram" || data.profession === "Doctor"
    )
    .map((data) => (
      <div key={data.id}>
        <p>{data.name}</p>
      </div>
    ));
  let cups = [];
  for (let i = 1; i <= 4; i++) {
    cups.push(<Cup key={i} guest={i} />);
  }
  // function handleClick() {
  //   alert("You Clicked Me");
  // }

  return (
    <div>
      ExpenseItem
      {filterData}
      {cups}
      {Clock}
      <button
        onClick={() => {
          alert("You Clicked Me");
        }}
      >
        Click ME
      </button>
    </div>
  );
}
