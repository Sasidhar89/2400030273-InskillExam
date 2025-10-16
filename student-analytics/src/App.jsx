import React, { useState } from "react";

function App() {
  const [selected, setSelected] = useState("");

  // Predefined events
  const events = [
    { date: "2025-10-05", title: "Meeting", desc: "Team meeting at 10 AM" },
    { date: "2025-10-12", title: "Workshop", desc: "React workshop" },
    { date: "2025-10-16", title: "Holiday", desc: "Office closed" },
  ];

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const days = new Date(year, month + 1, 0).getDate();

  const dayList = [...Array(days)].map((_, i) => i + 1);
  const selectedEvent = events.find((e) => e.date === selected);

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial", padding: 20 }}>
      <h2>
        Calendar - {today.toLocaleString("default", { month: "long" })} {year}
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: 5,
          maxWidth: 350,
          margin: "20px auto",
        }}
      >
        {dayList.map((day) => {
          const full = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
          const hasEvent = events.some((e) => e.date === full);
          return (
            <div
              key={day}
              onClick={() => setSelected(full)}
              style={{
                padding: "8px",
                borderRadius: 6,
                cursor: "pointer",
                background:
                  selected === full ? "#4CAF50" : hasEvent ? "#FFD54F" : "#eee",
                color: selected === full ? "white" : "black",
              }}
            >
              {day}
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: 15 }}>
        {selected ? (
          selectedEvent ? (
            <>
              <h3>{selectedEvent.title}</h3>
              <p>{selectedEvent.desc}</p>
            </>
          ) : (
            <p>No events on this date.</p>
          )
        ) : (
          <p>Click a date to see events.</p>
        )}
      </div>
    </div>
  );
}

export default App;