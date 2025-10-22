var table_count=0;
function buildform(documentid,eventname,meetingtype,date,time,guest,foodtime,venue,remarks,cost,request,drinks, refreshment, food){
    return `<table id=table${documentid}>
  <!-- Event Details (top section) -->
  <tr><td><b>Meeting / Event name</b></td><td colspan="8">${eventname}<button type="button" class="delete-btn" onclick="confirmdelete('${documentid}')">Delete</button></td></tr>
  <tr><td><b>Meeting Type</b></td><td colspan="8">${meetingtype}</td></tr>
  <tr><td><b>Date</b></td><td colspan="8">${date}</td></tr>
  <tr><td><b>Event / Meeting Time</b></td><td colspan="8">${time}</td></tr>
  <tr><td><b>No of Guests</b></td><td colspan="8">${guest}</td></tr>
  <tr><td><b>Time Food to be prepared by</b></td><td colspan="8">${foodtime}</td></tr>
  <tr><td><b>Venue</b></td><td colspan="8">${venue}</td></tr>
  <tr><td><b>Remarks</b></td><td colspan="8" class="remarks">${remarks}</td></tr>
  <tr><td><b>Requested by</b></td><td colspan="8">${request}</td></tr>

  <!-- Menu & Costing Section -->
  <tr>
    <th class="green">Event</th>
    <th>Serving location</th>
    <th>Event time</th>
    <th colspan="2">Menu</th>
    <th>No of pax</th>
    <th class="yellow">Cost / Pax (RM)</th>
    <th class="yellow">Total Cost (RM)</th>
    <th>Remarks</th>
  </tr>
  <tr>
    <td rowspan="2">${meetingtype}</td>
    <td rowspan="2">${venue}</td>
    <td>${time}</td>
    <td>${refreshment.join("<br>")}<br>${food.join("<br>")}</td>
    <td class="highlight" rowspan="2">${drinks}</td>
    <td rowspan="2">${guest}</td>
    <td rowspan="2" class="yellow">${cost}</td>
    <td rowspan="2" class="yellow">${guest*cost}</td> 
    <td rowspan="2" class="remarks">${remarks}</td>
  </tr>
  <tr>
    <td><b>Food Ready By:</b><br>${foodtime}</td>
    <td></td>
  </tr>
</table>`;
}

//firebase configureation section
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";
import { getFirestore, collection, query, where, doc, deleteDoc,onSnapshot } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";


 // Firebase config 
const firebaseConfig = {
    apiKey: "AIzaSyDU0UU5oWNs2JwFagNd8SIF4WQJD1d5Uuk",
    authDomain: "dinningmenu-dd125.firebaseapp.com",
    projectId: "dinningmenu-dd125",
    storageBucket: "dinningmenu-dd125.appspot.com",
    messagingSenderId: "58391019750",
    appId: "1:58391019750:web:e5b87db44b289c87c83b27",
    measurementId: "G-5JVBHM1PP2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const menuRef = collection(db, "menulist");  // Reference to menulist collection

// Check if user is login
onAuthStateChanged(auth, (user) => {
  if (user) {
    // ✅ user logged in, allow access
    console.log("User logged in:", user.email);
  } else {
    // ❌ user not logged in, redirect back to login page
    window.location.href = "index.html";
  }
});

//get date
function getMenuDates() {
  const dateSelect = document.getElementById("date");

  // Attach real-time listener
  onSnapshot(menuRef, (querySnapshot) => {
    const uniqueDates = new Set();

    querySnapshot.forEach((doc) => {
      const dateValue = doc.data().date;
      if (dateValue) {
        uniqueDates.add(dateValue);
      }
    });

    // Sort dates: newest → oldest
    const sortedDates = Array.from(uniqueDates).sort((a, b) => new Date(b) - new Date(a));

    // Clear and repopulate dropdown
    dateSelect.innerHTML = "";
    sortedDates.forEach((dateValue) => {
      const option = document.createElement("option");
      option.value = dateValue;
      option.textContent = dateValue;
      dateSelect.appendChild(option);
    });

    // Auto-load the table for the newest date
    if (sortedDates.length > 0) {
      const newestDate = sortedDates[0];
      dateSelect.value = newestDate;
      getMeetingDetailsByDate(newestDate);


      // Only reload if the newest date has changed
      if (currentValue !== newestDate) {
        dateSelect.value = newestDate;
        getMeetingDetailsByDate(newestDate);
      }
    }
  }, (error) => {
    console.error("Real-time date listener error:", error);
  });
}
window.getMenuDates=getMenuDates;
getMenuDates();

// get metting details and generate table
function getMeetingDetailsByDate(selectedDate) {
    const q = query(menuRef, where("date", "==", selectedDate));
    return onSnapshot(q, (querySnapshot) => {
      const table = document.getElementById("table");
      table.innerHTML = ""; // clear previous entries
    

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const docid= doc.id;
        const eventname= data.eventname;
        const meetingtype = data.meetingtype;
        const venue = data.venue;
        const date= formatDateToDayString(data.date);
        const guest= data.guest;
        const foodtime= convertto12hour(data.foodtime);
        const cost= data.cost;
        const request= data.request;
        const drinks= data.drinks;
        const refreshment= data.refreshment;
        const food= data.food;
        const time= convertto12hour(data.time);
        const remarks= data.remarks;

        document.getElementById("table").innerHTML += buildform(docid,eventname,meetingtype,date,time,guest,foodtime,venue,remarks,cost,request,drinks, refreshment, food);
      
    });

  },(error)=> {
    console.error("Error fetching meeting details:", error);
  });
}

//get date value and trigger table generation function
document.getElementById("date").addEventListener("change", (e) => {
  const selectedDate = e.target.value;
  document.getElementById("table").innerHTML = ""; //remove all current table before adding new table
  getMeetingDetailsByDate(selectedDate);
});
window.getMeetingDetailsByDate=getMeetingDetailsByDate;


//  Convert 24-hour to 12-hour format
function convertto12hour(timeString) {
  const [hour, minute] = timeString.split(":");
  let h = parseInt(hour);
  const ampm = h >= 12 ? "PM" : "AM";
  h = h % 12 || 12; // convert 0 → 12
  return `${h}:${minute} ${ampm}`;
}

// Convert date to (weekday,date) format
function formatDateToDayString(dateString) {
  const date = new Date(dateString);

  // Get weekday name
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayName = days[date.getDay()];

  // Return formatted string
  return `${dayName}, ${dateString}`;
}

// Function to delete a document by ID
async function deletemenubyid(docId) {
  try {
    await deleteDoc(doc(db, "menulist", docId));
    console.log(` Document with ID "${docId}" deleted successfully`);
    showDialog("Table deleted successfully");
  } catch (error) {
    console.error(" Error deleting document:", error);
  }
}


function showDialog(message) {
  // Create overlay
  const overlay = document.createElement("div");
  overlay.className = "dialog-overlay";

  // Create dialog box
  const box = document.createElement("div");
  box.className = "dialog-box";
  box.innerHTML = `
    <p>${message}</p>
    <button id="close-btn">OK</button>
  `;

  // Append box to overlay and overlay to body
  overlay.appendChild(box);
  document.body.appendChild(overlay);

      // Close button event
  document.getElementById("close-btn").addEventListener("click", () => {
    overlay.remove();
  });

  // Optional: close when clicking outside the box
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) overlay.remove();
  });
}

function confirmdelete(docid) {
  // Create overlay
  const overlay = document.createElement("div");
  overlay.className = "dialog-overlay";

  // Create dialog box
  const box = document.createElement("div");
  box.className = "dialog-box";
  box.innerHTML = `
    <p>Are you sure you want to delete this table?</p>
    <button id="close">No</button>
    <button id="delete"> Delete</button>
  `;

  // Append box to overlay and overlay to body
  overlay.appendChild(box);
  document.body.appendChild(overlay);

      // Close button event
  document.getElementById("close").addEventListener("click", () => {
    overlay.remove();
  });
    // delete button event
  document.getElementById("delete").addEventListener("click", async() => {
    await deletemenubyid(docid);
    const table = document.getElementById(`table${docid}`);
    console.log("Deleting:", docid);
    if (table) table.remove();
    overlay.remove();
  });
}
window.confirmdelete=confirmdelete;