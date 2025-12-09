//firebase configureation section
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";
import { getFirestore, collection, query, where, getDocs,doc,onSnapshot } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";


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

//Export metting details by date range
async function exportMeetingDetailsByDateRange(startDate, endDate) {
    try {
        if (!startDate || !endDate) {
            showDialog("Please select both start and end date.");
            return;
        }

        if (startDate > endDate) {
            showDialog("Start date cannot be after end date.");
            return;
        }

        // Query Firestore for the date range
        const q = query(
            menuRef,
            where("date", ">=", startDate),
            where("date", "<=", endDate)
        );

        const snapshot = await getDocs(q);
        const dataArray = [];

        snapshot.forEach((doc) => {
            const data = doc.data();

            dataArray.push({
                DocumentID: doc.id,
                Date: data.date || "",
                EventName: data.eventname || "",
                MeetingType: data.meetingtype || "",
                Guest: data.guest || "",
                Venue: data.venue || "",
                Time: data.time || "",
                FoodTime: data.foodtime || "",
                Cost: data.cost || "",
                Request: data.request || "",
                Drinks: Array.isArray(data.drinks) ? data.drinks.join(", ") : "",
                Refreshment: Array.isArray(data.refreshment) ? data.refreshment.join(", ") : "",
                Food: Array.isArray(data.food) ? data.food.join(", ") : "",
                Remarks: data.remarks || "",
                Status: data.status || ""
            });
        });

        if (dataArray.length === 0) {
            showDialog("No records found between selected dates.");
            return;
        }

        // Convert JSON → Excel worksheet
        const worksheet = XLSX.utils.json_to_sheet(dataArray);

        // Auto-size columns
        worksheet["!cols"] = Object.keys(dataArray[0]).map((key) => ({
            wch: Math.max(key.length, ...dataArray.map((row) => String(row[key]).length)) + 2
        }));

        // Create workbook
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Date Range");

        // Filename example: Meeting_2024-01-01_to_2024-03-31.xlsx
        XLSX.writeFile(workbook, `Meeting_${startDate}_to_${endDate}.xlsx`);

    } catch (error) {
        console.error("Error exporting date range:", error);
        showDialog("Error: export failed")
    }
}
window.exportMeetingDetailsByDateRange=exportMeetingDetailsByDateRange;

function showDialog(message) {
  // Create overlay
  const overlay = document.createElement("div");
  overlay.id = "dialog-overlay";

  // Create dialog box
  const box = document.createElement("div");
  box.id = "dialog-box";
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