// @ts-check
import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";

const localizer = momentLocalizer(moment);

const DnDCalendar = withDragAndDrop(Calendar);

function Custom() {
  return (
    <div>
      custom component
      <input type="checkbox" onClick={() => alert("click registered")} />
    </div>
  );
}

function App() {
  return (
    <DnDCalendar
      localizer={localizer}
      selectable={false}
      components={{
        event: Custom,
      }}
      events={[
        {
          id: 1,
          title: "Long Event",
          start: new Date(2024, 9, 14, 0, 0),
          end: new Date(2024, 9, 14, 3, 0),
        },
        {
          id: 2,
          title: "Long Event",
          start: new Date(2024, 9, 15, 10, 0),
          end: new Date(2024, 9, 15, 13, 0),
        },
      ]}
    />
  );
}

export default App;
