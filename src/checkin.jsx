import { React, useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from './firebase';
import { collection, query } from "firebase/firestore";
import { getFirestore , doc, updateDoc, onSnapshot, setDoc } from "firebase/firestore";
import './styles/checkin.css'

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

const CheckIn = () => {
  const [started, setStarted] = useState(false);
  const [classSelected, setClassSelected] = useState("");
  const [periodSelected, setPeriodSelected] = useState("");
  const [sendEmail, setSendEmail] = useState(false);
  const [email, setEmail] = useState("");
  const [scanLogs, setScanLogs] = useState([]);
 
const handleStart = async () => {
    if (classSelected && periodSelected) {
      const docRef = doc(db, 'attendance', `${classSelected}_${periodSelected}`);
      await setDoc(docRef, {}); // Empty document for the selected class/period
      
      const facultyDocRef = doc(db, 'attendance', `${classSelected}_${periodSelected}`);
      await updateDoc(facultyDocRef, { testField: true });  // Set testField to true
      setStarted(true);
    } else {
      alert("Please select a class and a period.");
    }
  };

  const handleEnd = async () => {
    setStarted(false);
    const docRef = doc(db, 'attendance',  `${classSelected}_${periodSelected}`);

    await updateDoc(docRef, { testField: false });  // Set testField to false
  };

  useEffect(() => {
    if (started) {
      // Create a reference to the 'attendance' collection
      const logsRef = collection(db, 'attendance');
      // Create a query to fetch all documents in the collection
      const q = query(logsRef);

      // Subscribe to real-time updates
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const logs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setScanLogs(logs);
      }, (error) => {
        console.error('Error fetching attendance data:', error);
      });

      // Cleanup subscription on unmount
      return () => unsubscribe();
    }
  }, [started, classSelected, periodSelected]);
  return (
    <div className="attendance-container">
  {!started ? (
    <div className="start-attendance">
      <h2 className="heading">Start Attendance</h2>
      <div className="input-group">
        <label>Select Class:</label>
        <select value={classSelected} onChange={(e) => setClassSelected(e.target.value)} className="dropdown">
          <option value="">Select Class</option>
          <option value="Class A">Class A</option>
          <option value="Class B">Class B</option>
          <option value="Class C">Class C</option>
        </select>
      </div>
      <div className="input-group">
        <label>Select Period:</label>
        <select value={periodSelected} onChange={(e) => setPeriodSelected(e.target.value)} className="dropdown">
          <option value="">Select Period</option>
          <option value="9-10">9-10</option>
          <option value="10-11">10-11</option>
          <option value="11:10-12:10">11:10-12:10</option>
          <option value="12:10-1:10">12:10-1:10</option>
          <option value="2-3">2-3</option>
          <option value="3-4">3-4</option>
        </select>
      </div>
      <button className="btn-start" onClick={handleStart}>Start</button>
    </div>
  ) : (
    <div className="end-attendance">
      <h2 className="heading">End Attendance</h2>
      <div className="email-section">
        <input
          type="checkbox"
          checked={sendEmail}
          onChange={() => setSendEmail(!sendEmail)}
          className="checkbox"
        />
        Send attendance via email
        {sendEmail && (
          <div className="email-input">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        )}
      </div>
      <button className="btn-end" onClick={handleEnd}>End</button>

      <div className="attendance-logs">
            <h3 className="scan-logs-heading">Real-Time Scan Logs:</h3>
            <div className="logs-table">
              <div className="logs-header">
                <div className="header-item">Class</div>
                <div className="header-item">Period</div>
                <div className="header-item">USN/RFID</div>
                <div className="header-item">Timestamp</div>
              </div>
              {scanLogs.map((log) => (
                <div key={log.id} className="logs-row">
                  <div className="row-item">{log.classSelected}</div>
                  <div className="row-item">{log.periodSelected}</div>
                  <div className="row-item">{log.rfid}</div>
                  <div className="row-item">{log.timestamp}</div>
                  <div className="row-item">{log.testField}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

  )}
</div>

  );
};

export default CheckIn;
