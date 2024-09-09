function generateEmailContent(attendanceData) {
    const rows = attendanceData.map((record) => `
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">${record.studentName}</td>
        <td style="border: 1px solid #ddd; padding: 8px;">${record.rfid}</td>
        <td style="border: 1px solid #ddd; padding: 8px;">${record.time}</td>
        <td style="border: 1px solid #ddd; padding: 8px;">${record.status}</td>
      </tr>`).join('');
    return `
      <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
          }
          table {
            width: 100%;
            border-collapse: collapse;
          }
          th, td {
            text-align: left;
            padding: 12px;
            border-bottom: 1px solid #ddd;
          }
          th {
            background-color: #4CAF50;
            color: white;
          }
        </style>
      </head>
      <body>
        <h2>Attendance Report</h2>
        <p>Here is the attendance report:</p>
        <table>
          <thead>
            <tr>
              <th>USN</th>
              <th>RFID</th>
              <th>Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            ${rows}
          </tbody>
        </table>
      </body>
      </html>
    `;
  }
  
  // Usage in sendMail function

  export {generateEmailContent}