import React, { useState } from "react";
import { Calendar, Clock } from "lucide-react";
import './main.css'
// Mock data for the class schedule
const scheduleData = {
    Monday: [
      { time: "8:40-9:30", subject: "DBMS", room: "Room No. 705", teacher: "Ms.D.Priya" },
      { time: "9:30-10:20", subject: "DLD&MP", room: "Room No. 705", teacher: "Mrs.K. Deepthi" },
      { time: "10:20-11:10", subject: "MEFA", room: "Room No. 705", teacher: "Dr. Mohammad Mustafa" },
      { time: "11:10-12:00", subject: "EEE", room: "Lab-3", teacher: "Mrs.A. Aruna" },
      { time: "12:00-12:50", subject: "Lunch", room: "", teacher: "" },
      { time: "12:50-1:40", subject: "DAA", room: "Room No. 706", teacher: "New Faculty" },
      { time: "1:40-2:30", subject: "ES", room: "Room No. 706", teacher: "Dr.G.Lakshmi Narayana" },
      { time: "2:30-3:20", subject: "Tutorial", room: "Lab-3", teacher: "" },
      { time: "3:20-5:00", subject: "STEM", room: "", teacher: "" },
    ],
    Tuesday: [
      { time: "8:40-9:30", subject: "DBMS", room: "Room No. 706", teacher: "Ms.D.Priya" },
      { time: "9:30-10:20", subject: "DLD&MP", room: "Room No. 706", teacher: "Mrs.K. Deepthi" },
      { time: "10:20-11:10", subject: "EEE", room: "Room No. 706", teacher: "Mrs.A. Aruna" },
      { time: "11:10-12:00", subject: "ES", room: "Room No. 706", teacher: "Dr.G.Lakshmi Narayana" },
      { time: "12:00-12:50", subject: "Lunch", room: "", teacher: "" },
      { time: "12:50-1:40", subject: "Library", room: "", teacher: "" },
      { time: "1:40-2:30", subject: "DAA", room: "Lab-3", teacher: "New Faculty" },
      { time: "2:30-3:20", subject: "MEFA", room: "Lab-3", teacher: "Dr. Mohammad Mustafa" },
      { time: "3:20-5:00", subject: "Sports", room: "", teacher: "" },
    ],
    Wednesday: [
      { time: "8:40-9:30", subject: "EEE", room: "Room No. 706", teacher: "Mrs.A. Aruna" },
      { time: "9:30-10:20", subject: "DLD&MP", room: "Room No. 706", teacher: "Mrs.K. Deepthi" },
      { time: "10:20-12:00", subject: "DAA", room: "Room No. 706", teacher: "New Faculty" },
      { time: "12:00-12:50", subject: "Lunch", room: "", teacher: "" },
      { time: "12:50-1:40", subject: "MEFA", room: "Room No. 706", teacher: "Dr. Mohammad Mustafa" },
      { time: "1:40-2:30", subject: "DBMS", room: "Room No. 706", teacher: "Ms.D.Priya" },
      { time: "2:30-5:00", subject: "DEMP LAB", room: "Lab-3", teacher: "Mrs.P.N.S Sailaja / Mr.V. M. Naidu" },
    ],
    Thursday: [
      { time: "8:40-11:10", subject: "DAA Lab", room: "Lab-2", teacher: "New Faculty" },
      { time: "11:10-12:00", subject: "EEE", room: "Room No. 706", teacher: "Mrs.A. Aruna" },
      { time: "12:00-12:50", subject: "Lunch", room: "", teacher: "" },
      { time: "12:50-1:40", subject: "MEFA", room: "Room No. 616", teacher: "Dr. Mohammad Mustafa" },
      { time: "1:40-2:30", subject: "ES", room: "Room No. 616", teacher: "Dr.G.Lakshmi Narayana" },
      { time: "2:30-3:20", subject: "DLD&MP", room: "Room No. 707", teacher: "Mrs.K. Deepthi" },
      { time: "3:20-5:00", subject: "NCC/NSS/PD", room: "", teacher: "" },
    ],
    Friday: [
      { time: "8:40-11:10", subject: "DBMS LAB", room: "LAB-2", teacher: "Ms.D.Priya" },
      { time: "11:10-1:40", subject: "SC Lab (C++ Programming)", room: "Lab-1", teacher: "New Faculty" },
      { time: "1:40-2:30", subject: "Lunch", room: "", teacher: "" },
      { time: "2:30-3:20", subject: "DBMS", room: "Room No. 707", teacher: "Ms.D.Priya" },
      { time: "3:20-4:10", subject: "ES", room: "Room No. 707", teacher: "Dr.G.Lakshmi Narayana" },
    ],
  };

const App = () => {
  const [selectedDay, setSelectedDay] = useState("Monday");

  const styles = {
    container: {
      minHeight: "100vh",
      backgroundColor: "#f3f4f6",
      padding: "24px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    card: {
      backgroundColor: "white",
      borderRadius: "16px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      padding: "32px",
      maxWidth: "100%",
      margin: "0 auto",
    },
    title: {
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "24px",
      textAlign: "center",
    },
    footer: {
        backgroundColor: '#1f2937', // Equivalent to Tailwind's bg-gray-800
        color: 'white',
        textAlign: 'center',
        padding: '16px 0', // Equivalent to py-4
      },
      text: {
        fontSize: '14px', // Equivalent to text-sm
      },
      '@media(min-width: 768px)': {
        text: {
          fontSize: '16px', // Equivalent to text-base on medium screens and above
        },
      },
    "@media(max-width: 768px)": {
      card: {
        padding: "24px",
      },
      title: {
        fontSize: "20px",
      },
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>2-1 CSE C Section Timetable</h1>
        <DaySelector
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
        />
        <Schedule day={selectedDay} schedule={scheduleData[selectedDay]} />
      </div>
      <footer style={styles.footer}>
      <p style={styles.text}>Developed by Avinash</p>
    </footer>
    </div>
  );
};

const DaySelector = ({ selectedDay, setSelectedDay }) => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      gap: "8px",
      marginBottom: "24px",
      flexWrap: "wrap",
    },
    button: {
      padding: "8px 16px",
      borderRadius: "8px",
      border: "none",
      cursor: "pointer",
      transition: "background-color 0.3s",
      minWidth: "80px",
    },
    selectedButton: {
      backgroundColor: "#3b82f6",
      color: "white",
    },
    unselectedButton: {
      backgroundColor: "#e5e7eb",
      color: "#4b5563",
    },
  };

  return (
    <div style={styles.container}>
      {days.map((day) => (
        <button
          key={day}
          style={{
            ...styles.button,
            ...(selectedDay === day
              ? styles.selectedButton
              : styles.unselectedButton),
          }}
          onClick={() => setSelectedDay(day)}
        >
          {day}
        </button>
      ))}
    </div>
  );
};

const Schedule = ({ day, schedule }) => {
  const styles = {
    container: {
      marginTop: "24px",
    },
    title: {
      fontSize: "20px",
      fontWeight: "bold",
      marginBottom: "16px",
      textAlign: "center",
    },
    "@media(max-width: 768px)": {
      title: {
        fontSize: "18px",
      },
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>{day}'s Schedule</h2>
      <div>
        {schedule.map((item, index) => (
          <ScheduleItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

const ScheduleItem = ({ time, subject, room, teacher }) => {
  const styles = {
    container: {
      backgroundColor: "#f9fafb",
      padding: "16px",
      borderRadius: "8px",
      marginBottom: "16px",
      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "8px",
    },
    time: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      fontSize: "14px",
      color: "#4b5563",
    },
    room: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      fontSize: "14px",
      color: "#4b5563",
    },
    subject: {
      fontSize: "18px",
      fontWeight: "bold",
      marginBottom: "4px",
    },
    teacher: {
      fontSize: "14px",
      color: "#6b7280",
    },
    "@media(max-width: 768px)": {
      container: {
        padding: "12px",
      },
      subject: {
        fontSize: "16px",
      },
    },
  };

  return (
    <>
      <div style={styles.container}>
        <div style={styles.header}>
          <div style={styles.time}>
            <Clock size={16} />
            <span>{time}</span>
          </div>
          {room && (
            <div style={styles.room}>
              <Calendar size={16} />
              <span>{room}</span>
            </div>
          )}
        </div>
        <div>
          <h3 style={styles.subject}>{subject}</h3>
          {teacher && <p style={styles.teacher}>Teacher: {teacher}</p>}
        </div>
      </div>
    </>
  );
};

export default App;
