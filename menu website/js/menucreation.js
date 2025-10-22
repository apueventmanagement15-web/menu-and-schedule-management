var form_count= 0;
function buildform(form_count) {
return`
        <fieldset id="form${form_count}" class="menufieldset">
            <button type="button" onclick="deleteform(${form_count})" class="delete-btn"> X</button> <br><br>
            <label for="Eventname${form_count}">Event name: </label>
            <input type="text" id="eventname${form_count}" name="eventname${form_count}" placeholder="Enter event name">

            <label for="Meetingtype${form_count}">Meeting type:</label>
            <select name="meetingtype${form_count}" id="meetingtype${form_count}">
                <option value="Morning refreshment">Morning refreshment</option>
                <option value="Lunch">Lunch</option>
                <option value="Afternoon Refreshment">Afternoon Refreshment</option>
                <option value="Dinner">Dinner</option>
            </select> <br><br>

            <label for="Time${form_count}">Time: </label>
            <input type="time" id="time${form_count}" name="time${form_count}"> <br><br>

            <label for="Guest${form_count}">No of Guest: </label>
            <input type="number" id="guest${form_count}" name="guest${form_count}" placeholder="Enter number of guest"> <br><br>

            <label for="Foodtime${form_count}">Time food to be prepared by:</label>
            <input type="time" id="foodtime${form_count}" name="foodtime${form_count}"> <br><br>

            <label for="Venue${form_count}">Venue: </label>
            <input type="text" id="venue${form_count}" name="venue${form_count}" placeholder="Enter venue name"> <br><br>

            <label for="Remarks${form_count}">Remarks:</label>
            <input type="text" id="remarks${form_count}" name="remarks${form_count}" placeholder="Enter Remarks"> <br><br>

            <label for="Request${form_count}">Requested by: </label>
            <input type="text" id="request${form_count}" name="request${form_count}" placeholder="Enter name"> <br><br>

            <label for="Cost${form_count}">Cost/Pax (RM): </label>
            <input type="number" id="cost${form_count}" name="cost${form_count}" placeholder="Enter cost per guest"> <br><br>

            <h2>Drinks:</h2>
            <div class="checkbox-container">
                <label><input type="checkbox" name="drinks${form_count}[]" value="No drinks"> No drinks</label>
                <label><input type="checkbox" name="drinks${form_count}[]" value="Coffee"> Coffee</label>
                <label><input type="checkbox" name="drinks${form_count}[]" value="Drinking Water"> Drinking Water</label>
                <label><input type="checkbox" name="drinks${form_count}[]" value="Tea"> Tea</label>
                <label><input type="checkbox" name="drinks${form_count}[]" value="Cordial Drinks"> Cordial Drinks</label>
            </div>
            <h2>Refreshment:</h2>
            <div class="checkbox-container">
                <label><input type="checkbox" name="refreshment${form_count}[]" value="No Refreshment"> No Refreshment</label>
                <label><input type="checkbox" name="refreshment${form_count}[]" value="Curry Puff"> Curry Puff</label>
                <label><input type="checkbox" name="refreshment${form_count}[]" value="Samosa"> Samosa</label>
                <label><input type="checkbox" name="refreshment${form_count}[]" value="Egg Sandwich"> Egg Sandwich</label>
                <label><input type="checkbox" name="refreshment${form_count}[]" value="Cheese Sandwich"> Cheese Sandwich</label>
                <label><input type="checkbox" name="refreshment${form_count}[]" value="Chocolate Roll"> Chocolate Roll</label>
                <label><input type="checkbox" name="refreshment${form_count}[]" value="Apple Strudel"> Apple Strudel</label>
                <label><input type="checkbox" name="refreshment${form_count}[]" value="Spring Roll"> Spring Roll</label>
                <label><input type="checkbox" name="refreshment${form_count}[]" value="Swiss Roll Cake"> Swiss Roll Cake</label>
                <label><input type="checkbox" name="refreshment${form_count}[]" value="Fried Meehon"> Fried Meehon</label>
                <label><input type="checkbox" name="refreshment${form_count}[]" value="Fried Kuey Teow"> Fried Kuey Teow</label>
                <label><input type="checkbox" name="refreshment${form_count}[]" value="Fried Mee"> Fried Mee</label>
                <label><input type="checkbox" name="refreshment${form_count}[]" value="Fried Rice"> Fried Rice</label>
                <label><input type="checkbox" name="refreshment${form_count}[]" value="Assorted Nyonya Kuih"> Assorted Nyonya Kuih</label>
                <label><input type="checkbox" name="refreshment${form_count}[]" value="Roti Canai"> Roti Canai</label>
                <label><input type="checkbox" name="refreshment${form_count}[]" value="Mamak Stall Curry Puff"> Mamak Stall Curry Puff</label>
                <label><input type="checkbox" name="refreshment${form_count}[]" value="Dal Vadai"> Dal Vadai</label>
                <label><input type="checkbox" name="refreshment${form_count}[]" value="Tosai"> Tosai</label>
                <label><input type="checkbox" name="refreshment${form_count}[]" value="Banana Cake"> Banana Cake</label>
                <label><input type="checkbox" name="refreshment${form_count}[]" value="Assorted Sandwiches"> Sandwiches (Assorted)</label>
            </div>
            

            <h2>Food:</h2>
            <!-- No Food -->
            <div class="checkbox-container">
                <label><input type="checkbox" name="food${form_count}[]" value="No Food"> No Food</label>
            </div>

            <!-- Chicken -->
            <h3>Chicken</h3>
            <div class="checkbox-container">
                <label><input type="checkbox" name="food${form_count}[]" value="Ayam Goreng Berempah"> Ayam Goreng Berempah</label>
                <label><input type="checkbox" name="food${form_count}[]" value="Ayam Masak Merah"> Ayam Masak Merah</label>
                <label><input type="checkbox" name="food${form_count}[]" value="Ayam Kicap"> Ayam Kicap</label>

                <label><input type="checkbox" name="food${form_count}[]" value="Ayam Sambal"> Ayam Sambal</label>
                <label><input type="checkbox" name="food${form_count}[]" value="Ayam Kurma"> Ayam Kurma</label>
                <label><input type="checkbox" name="food${form_count}[]" value="Ayam Gulai"> Ayam Gulai</label>

                <label><input type="checkbox" name="food${form_count}[]" value="Ayam Rendang"> Ayam Rendang</label>
                <label><input type="checkbox" name="food${form_count}[]" value="Ayam Dendeng"> Ayam Dendeng</label>
                <label><input type="checkbox" name="food${form_count}[]" value="Ayam Percik"> Ayam Percik</label>

                <label><input type="checkbox" name="food${form_count}[]" value="Oyster Chicken"> Oyster Chicken</label>
                <label><input type="checkbox" name="food${form_count}[]" value="Curry Chicken"> Curry Chicken</label>
                <label><input type="checkbox" name="food${form_count}[]" value="Fried Chicken"> Fried Chicken</label>

                <label><input type="checkbox" name="food${form_count}[]" value="Black Pepper Chicken"> Black Pepper Chicken</label>
                <label><input type="checkbox" name="food${form_count}[]" value="Masala Chicken"> Masala Chicken</label>
                <label><input type="checkbox" name="food${form_count}[]" value="Ayam Bawang"> Ayam Bawang</label>

                <label><input type="checkbox" name="food${form_count}[]" value="Chicken Briyani"> Chicken Briyani</label>
            </div>
            <!-- Fish -->
            <h3>Fish</h3>
            <div class="checkbox-container">
                <label><input type="checkbox" name="food${form_count}[]" value="Kembong Sambal"> Kembong Sambal</label>
                <label><input type="checkbox" name="food${form_count}[]" value="Kembong 3 Rasa"> Kembong 3 Rasa</label>
                <label><input type="checkbox" name="food${form_count}[]" value="Kembong Belada"> Kembong Belada</label>

                <label><input type="checkbox" name="food${form_count}[]" value="Kembong Kunyit"> Kembong Kunyit</label>
                <label><input type="checkbox" name="food${form_count}[]" value="Lemon Fish (Dory)"> Lemon Fish (Dory)</label>
                <label><input type="checkbox" name="food${form_count}[]" value="Garlic Fish (Dory)"> Garlic Fish (Dory)</label>

                <label><input type="checkbox" name="food${form_count}[]" value="Butter Lemon Fish (Dory)"> Butter Lemon Fish (Dory)</label>
                <label><input type="checkbox" name="food${form_count}[]" value="Sambal Fish (Dory)"> Sambal Fish (Dory)</label>
            </div>
            <!-- Lamb -->
            <h3>Lamb</h3>
            <div class="checkbox-container">
                <label><input type="checkbox" name="food${form_count}[]" value="Lamb Kurma"> Lamb Kurma</label>
                <label><input type="checkbox" name="food${form_count}[]" value="Lamb Masala"> Lamb Masala</label>
                <label><input type="checkbox" name="food${form_count}[]" value="Lamb Briyani"> Lamb Briyani</label>

                <label><input type="checkbox" name="food${form_count}[]" value="Lamb Dinding"> Lamb Dinding</label>
                <label><input type="checkbox" name="food${form_count}[]" value="Lamb Kuzi"> Lamb Kuzi</label>
                <label><input type="checkbox" name="food${form_count}[]" value="Lamb Curry"> Lamb Curry</label>

                <label><input type="checkbox" name="food${form_count}[]" value="Lamb Rendang"> Lamb Rendang</label>
            </div>
            <!-- Prawn -->
            <h3>Prawn</h3>
            <div class="checkbox-container">
                <label><input type="checkbox" name="food${form_count}[]" value="Udang Butter"> Udang Butter</label>
                <label><input type="checkbox" name="food${form_count}[]" value="Udang Sambal"> Udang Sambal</label>
                <label><input type="checkbox" name="food${form_count}[]" value="Udang Masak Merah"> Udang Masak Merah</label>

                <label><input type="checkbox" name="food${form_count}[]" value="Udang Goreng Kunyit"> Udang Goreng Kunyit</label>
                <label><input type="checkbox" name="food${form_count}[]" value="Udang Sambal Kicap"> Udang Sambal Kicap</label>
                <label><input type="checkbox" name="food${form_count}[]" value="Udang Kari"> Udang Kari</label>

                <label><input type="checkbox" name="food${form_count}[]" value="Udang Masala"> Udang Masala</label>
                <label><input type="checkbox" name="food${form_count}[]" value="Prawn Briyani"> Prawn Briyani</label>
            </div>
            <!-- Sotong -->
            <h3>Sotong (Squid)</h3>
            <div class="checkbox-container">
                <label><input type="checkbox" name="food${form_count}[]" value="Sotong Sambal"> Sotong Sambal</label>
                <label><input type="checkbox" name="food${form_count}[]" value="Sotong Kicap"> Sotong Kicap</label>
                <label><input type="checkbox" name="food${form_count}[]" value="Sotong Kunyit"> Sotong Kunyit</label>

                <label><input type="checkbox" name="food${form_count}[]" value="Sotong Oyster Sauce"> Sotong Oyster Sauce</label>
                <label><input type="checkbox" name="food${form_count}[]" value="Sotong Kam Hong"> Sotong Kam Hong</label>
                <label><input type="checkbox" name="food${form_count}[]" value="Sotong Masak Lemak"> Sotong Masak Lemak</label>
            </div>
            <!-- Others -->
            <h3>Rice</h3>
            <div class="checkbox-container">
                <label><input type="checkbox" name="food${form_count}[]" value="Masak Lemak Cili Api"> Masak Lemak Cili Api</label>
                <label><input type="checkbox" name="food${form_count}[]" value="Plain Briyani"> Plain Briyani</label>
            </div>

            <button type="button" onclick="addnewform()">Add more</button><br><br>
        </fieldset>
`;
}
window.addnewform = addnewform; //expose function due to module import method

function addnewform(){   //increment by 1 and add new form and 
    form_count++;
    document.getElementById("addform").innerHTML += buildform(form_count);
}

function getcheckboxvalues(name) {         //get checkbox as array
  let checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
  return Array.from(checkboxes).map(cb => cb.value);
}

// Firebase configuration
// Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";


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



// function to add menu data into firebase
async function addtomenulist(form_count) {
    const drinks =  getcheckboxvalues(`drinks${form_count}[]`);
    const refreshment =  getcheckboxvalues(`refreshment${form_count}[]`);
    const food =  getcheckboxvalues(`food${form_count}[]`);
    try {
      const docRef = await addDoc(collection(db, "menulist"), {
        date: document.getElementById("date").value,
        meetingtype: document.getElementById(`meetingtype${form_count}`).value,
        eventname: document.getElementById(`eventname${form_count}`).value,
        time: document.getElementById(`time${form_count}`).value,
        guest: document.getElementById(`guest${form_count}`).value,
        foodtime: document.getElementById(`foodtime${form_count}`).value,
        venue: document.getElementById(`venue${form_count}`).value,
        remarks: document.getElementById(`remarks${form_count}`).value,
        request: document.getElementById(`request${form_count}`).value,
        cost: document.getElementById(`cost${form_count}`).value,
        drinks:drinks,
        refreshment: refreshment,
        food: food,
        createdAt: new Date()
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
      alert("Error: Fail to add document");
    }
}
window.addtomenulist = addtomenulist;   //expose function due to module import method

// function to add form to database one by one
function addallform(){
    for (let i=0; i<=form_count; i++) {
        if (document.getElementById(`form${i}`)){    
            if (validateinput(i)){
                console.log("Processing form:", i);
                addtomenulist(i);
            }showDialog("All forms has been added");
        }else{
            //ignore if form doesn't exist (delete by user)
        }
    }resetform();
}
window.addallform = addallform; //expose function due to module import method

//delete form
function deleteform(formId) {
  const formElement = document.getElementById(`form${formId}`);
  if (formElement) {
    formElement.remove(); // completely deletes the fieldset and all its children
    console.log(`Form ${formId} deleted.`);
  } else {
    console.warn(`Form ${formId} not found.`);
  }
}
window.deleteform=deleteform;

function isEmpty(value) {
  return value == null || value.trim() === "";
}

function validateinput(formID) {
    const requiredFields = [
    { id: "date", label: "Date" },
    { id: `meetingtype${formID}`, label: "Meeting type" },
    { id: `eventname${formID}`, label: "Event name" },
    { id: `time${formID}`, label: "Time" },
    { id: `guest${formID}`, label: "Number of guests" },
    { id: `foodtime${formID}`, label: "Food preparation time" },
    { id: `venue${formID}`, label: "Venue" },
    { id: `remarks${formID}`, label: "Remarks" },
    { id: `request${formID}`, label: "Requested by" },
    { id: `cost${formID}`, label: "Cost per guest" }
  ];
  //  Check text inputs
  for (let field of requiredFields) {
    const el = document.getElementById(field.id);
    if (!el || isEmpty(el.value)) {
      alert(`❗ Please fill in the "${field.label}" field properly.`);
      return false;
    }
  }

  // Check that at least one checkbox is selected in each group
  const drinks = getcheckboxvalues(`drinks${formID}[]`);
  const refreshment = getcheckboxvalues(`refreshment${formID}[]`);
  const food = getcheckboxvalues(`food${formID}[]`);

  if (drinks.length === 0) {
    alert("❗ Please select at least one drink option.");
    return false;
  }
  if (refreshment.length === 0) {
    alert("❗ Please select at least one refreshment option.");
    return false;
  }
  if (food.length === 0) {
    alert("❗ Please select at least one food option.");
    return false;
  }

  return true; //  All checks passed
}

function resetform() {
  const fieldsets = document.querySelectorAll("fieldset");

  fieldsets.forEach(fieldset => {
    if (fieldset.id !== "form0"||fieldset.id !=="menufieldset") {
      // Delete all fieldsets except form0 and menufieldset
      fieldset.remove();
    } else {
      // Clear all inputs, selects, and textareas inside form0
      const elements = fieldset.querySelectorAll("input, select, textarea");
      elements.forEach(el => {
        if (el.type === "checkbox" || el.type === "radio") {
          el.checked = false; // Uncheck checkboxes and radios
        } else {
          el.value = ""; // Clear text, number, date, time, etc.
        }
      });
    }
  });
}

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