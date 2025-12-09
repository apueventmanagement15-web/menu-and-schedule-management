var form_count=0;

function buildform(documentid,date,eventname,meetingtype,guest,venue,remarks,cost,request){
    return`
      <fieldset id=${documentid} class="menufieldset">

        <label class="approve-label"><input type="checkbox" id="approve${form_count}" name="approve${form_count}" value="approve"> Approve</label><br><br>
        <label for="Eventname${form_count}">Event name: </label>
        <input type="text" id="eventname${form_count}" name="eventname${form_count}" value='${eventname}'><br><br>

        <label for="Date${form_count}">Date: </label>
        <input type="date" id="date${form_count}"  value='${date}'> <br><br>

        <label for="Meetingtype${form_count}">Meeting type:</label>
        <input type="text" id="meetingtype${form_count}" name="meetingtype${form_count}" value='${meetingtype}'> <br><br>

        <label for="Time${form_count}">Time: </label>
        <input type="text" id="time${form_count}" name="time${form_count}" class="timepicker"> <br><br>

        <label for="Guest${form_count}">No of Guest: </label>
        <input type="number" id="guest${form_count}" name="guest${form_count}" value='${guest}'> <br><br>

        <label for="Foodtime${form_count}">Time food to be prepared by:</label>
        <input type="text" id="foodtime${form_count}" name="foodtime${form_count}" class="timepicker"> <br><br>

        <label for="Venue${form_count}">Venue: </label>
        <input type="text" id="venue${form_count}" name="venue${form_count}" value='${venue}'> <br><br>

        <label for="Remarks${form_count}">Remarks:</label>
        <input type="text" id="remarks${form_count}" name="remarks${form_count}" value='${remarks}'> <br><br>

        <label for="Request${form_count}">Requested by: </label>
        <input type="text" id="request${form_count}" name="request${form_count}" value='${request}'> <br><br>

        <label for="Cost${form_count}">Cost/Pax (RM): </label>
        <input type="number" id="cost${form_count}" name="cost${form_count}" value='${cost}'> <br><br>

        <h2>Drinks:</h2>
        <div class="checkbox-container">
            <label><input type="checkbox" name="drinks${form_count}[]" value="No drinks"> No drinks</label>
            <label><input type="checkbox" name="drinks${form_count}[]" value="Coffee"> Coffee</label>
            <label><input type="checkbox" name="drinks${form_count}[]" value="Drinking Water"> Drinking Water</label>
            <label><input type="checkbox" name="drinks${form_count}[]" value="Tea"> Tea</label>
            <label><input type="checkbox" name="drinks${form_count}[]" value="Cordial Drinks"> Cordial Drinks</label>
        </div>
        <label><input type="checkbox" class="othercheckbox" data-target="drinkother${form_count}">Others:</label>
        <input type="text" id="drinkother${form_count}" class="othertextfield" placeholder="Specify drink..." disabled >
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
            <label><input type="checkbox" class="othercheckbox" data-target="refreshmentother${form_count}">Others:</label>
            <input type="text" id="refreshmentother${form_count}" class="othertextfield" placeholder="Specify refreshment..." disabled>

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
                <label><input type="checkbox" name="food${form_count}[]" value="Masak Lemak Cili Api (Chicken)"> Masak Lemak Cili Api (Chicken)</label>
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
                <label><input type="checkbox" name="food${form_count}[]" value="Masak Lemak Cili Api (Fish)"> Masak Lemak Cili Api (Fish)</label>
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
                <label><input type="checkbox" name="food${form_count}[]" value="Masak Lemak Cili Api (Udang)"> Masak Lemak Cili Api (Udang)</label>
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
                <label><input type="checkbox" name="food${form_count}[]" value="Masak Lemak Cili Api (Sotong)"> Masak Lemak Cili Api (Sotong)</label>
            </div>
            <!-- Others -->
            <h3>Rice</h3>
            <div class="checkbox-container">
                <label><input type="checkbox" name="food${form_count}[]" value="Plain Briyani"> Plain Briyani</label>
                <label><input type="checkbox" name="food${form_count}[]" value="Plain Rice"> Plain Rice</label>
                <label><input type="checkbox" name="food${form_count}[]" value="Ghee Rice"> Ghee Rice</label>
                <label><input type="checkbox" name="food${form_count}[]" value="Butter Rice"> Butter Rice</label>
                <label><input type="checkbox" name="food${form_count}[]" value="Jeera Rice"> Jeera rice</label>
            </div>

            <div class="checkbox-container">
                <label><input type="checkbox" class="othercheckbox" data-target="foodother${form_count}">Others:</label>
                <input type="text" id="foodother${form_count}" class="othertextfield" placeholder="Specify food..." disabled>
            </div>
        <button type="button" onclick="confirmdelete('${documentid}','${eventname}')">Delete</button>
        <button type="button" class=confirmedit-btn onclick="confirmedit('${documentid}','${form_count}','${eventname}')">Confirm change</button>
      </fieldset>`;
}

function applyTimePicker() {
  $('.timepicker').timepicker({
    timeFormat: 'HH:mm',
    interval: 15,
    minTime: '00:00',
    maxTime: '23:59',
    defaultTime: 'now',
    startTime: '00:00',
    dynamic: false,
    dropdown: true,
    scrollbar: true,

    // ✅ convert to 12-hour after selection
    change: function(time) {
      let input = $(this).val().trim();
      let pattern = /^([01]\d|2[0-3]):([0-5]\d)$/;

      if (pattern.test(input)) {
        let [hours, minutes] = input.split(":");
        hours = Number(hours);

        let suffix = hours >= 12 ? "PM" : "AM";
        hours = (hours % 12) || 12;

        $(this).val(`${hours}:${minutes} ${suffix}`);
      }
    }
  });
}

//firebase configureation section
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";
import { getFirestore, collection, query, where, doc, deleteDoc,onSnapshot,updateDoc } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";


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
        const date= data.date;
        const guest= data.guest;
        const foodtime= data.foodtime;
        const cost= data.cost;
        const request= data.request;
        const drinks= data.drinks;
        const refreshment= data.refreshment;
        const food= data.food;
        const time= data.time;
        const remarks= data.remarks;
        const approve= data.status;

        document.getElementById("table").innerHTML += buildform(docid,date,eventname,meetingtype,guest,venue,remarks,cost,request);
        applyTimePicker();
        
        const checkbox = document.getElementById(`approve${form_count}`);
        if (approve === "approve" && checkbox) {
            checkbox.checked = true;  
        }
        $('#foodtime' + form_count).timepicker('setTime', foodtime);
        $('#time' + form_count).timepicker('setTime', time);

        loopcheckbox(`drinks${form_count}`,`drinkother${form_count}`,drinks)
        loopcheckbox(`refreshment${form_count}`,`refreshmentother${form_count}`,refreshment)
        loopcheckbox(`food${form_count}`,`foodother${form_count}`,food)

        form_count++;
    });

  },(error)=> {
    console.error("Error fetching meeting details:", error);
  });
}

//get date and generate table
document.getElementById("date").addEventListener("change", function() {
    const selectedDate = this.value;
    document.getElementById("table").innerHTML = ""; // get the chosen date
    getMeetingDetailsByDate(selectedDate); // call your function
});

//tick checkbox if it's founded in firebase
function tickcheckbox(checkboxname,freeform,value){
  const checkbox = document.querySelector(`input[name="${checkboxname}[]"][value="${value}"]`);
  const textfield=document.querySelector(`#${freeform}`);
  if (checkbox) {
    checkbox.checked = true;  
  }else if(textfield){
    const otherCheckbox = document.querySelector(`.othercheckbox[data-target="${freeform}"]`);
    if (otherCheckbox) {
      otherCheckbox.checked = true;
      textfield.disabled=false;
    }
    textfield.value = value;
  }
}

// loop through the value of array (for food, refreshment and drinks)
function loopcheckbox(checkboxname,freeform,array){
    for (let i=0; i<array.length; i++){
        tickcheckbox(checkboxname,freeform,array[i]);
    }
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

function confirmdelete(docid,eventname) {
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
    pushmessage("Event has been removed",`${eventname} event is removed from schedule`);
  });
}
window.confirmdelete=confirmdelete;

// Enable textbox only when "Others" is checked
document.addEventListener("change", function (e) {
    if (e.target.classList.contains("othercheckbox")) {
        const inputId = e.target.getAttribute("data-target");
        document.getElementById(inputId).disabled = !e.target.checked;
    }
});

function getcheckboxvalues(name, otherInputId = null) {         //get checkbox as array
  let checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
  let values = Array.from(checkboxes).map(cb => cb.value);

  // ✅ If Other is checked and has value, include it
  if (otherInputId) {
    const otherInput = document.getElementById(otherInputId);
    if (otherInput && !otherInput.disabled && otherInput.value.trim() !== "") {
      values.push(otherInput.value.trim());
    }
  }

  return values;
}

// function to edit menu data in firebase
async function editmenulist(docId, form_count) {
  const drinks = getcheckboxvalues(`drinks${form_count}[]`, `drinkother${form_count}`);
  const refreshment = getcheckboxvalues(`refreshment${form_count}[]`, `refreshmentother${form_count}`);
  const food = getcheckboxvalues(`food${form_count}[]`, `foodother${form_count}`);

  try {
    const docRef = doc(db, "menulist", docId); // reference to existing document
    const status = getapprovestatus(form_count);
    await updateDoc(docRef, {
      date: document.getElementById(`date${form_count}`).value,
      meetingtype: document.getElementById(`meetingtype${form_count}`).value,
      eventname: document.getElementById(`eventname${form_count}`).value,
      time: document.getElementById(`time${form_count}`).value,
      guest: document.getElementById(`guest${form_count}`).value,
      foodtime: document.getElementById(`foodtime${form_count}`).value,
      venue: document.getElementById(`venue${form_count}`).value,
      remarks: document.getElementById(`remarks${form_count}`).value,
      request: document.getElementById(`request${form_count}`).value,
      cost: document.getElementById(`cost${form_count}`).value,
      drinks: drinks,
      refreshment: refreshment,
      food: food,
      status:  status,
    });
    console.log("Document updated with ID: ", docId);
    showDialog("Schedule has been updated");
    if(status==="approve"){
      pushmessage("Schedule has been approve","Click to check");
    }
  } catch (e) {
    console.error("Error updating document: ", e);
    showDialog("Error: Fail to update document");
  }
}

function getapprovestatus(form_count) {
    const checkbox = document.getElementById(`approve${form_count}`);

    // If not checked → pretend the value is "pending"
    return checkbox.checked ? "approve" : "pending";
}

function confirmedit(docid,form_count,eventname) {
  // Create overlay
  const overlay = document.createElement("div");
  overlay.className = "dialog-overlay";

  // Create dialog box
  const box = document.createElement("div");
  box.className = "dialog-box";
  box.innerHTML = `
    <p>Are you sure you save change?</p>
    <button id="close">No</button>
    <button id="delete"> Save</button>
  `;

  // Append box to overlay and overlay to body
  overlay.appendChild(box);
  document.body.appendChild(overlay);

      // Close button event
  document.getElementById("close").addEventListener("click", () => {
    overlay.remove();
  });
    // edit button event
  document.getElementById("delete").addEventListener("click", async() => {
    await editmenulist(docid,form_count);
    const table = document.getElementById(`table${docid}`);
    console.log("Edit:", docid);
    if (table) table.remove();
    overlay.remove();
    pushmessage("Schedule Update", `Event ${eventname} updated, Click to check.`); //push notification
  });
}
window.confirmedit=confirmedit;

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
window.showDialog=showDialog;

async function pushmessage(title, message) {
  const payload = { title, message };

  const response = await fetch("https://default0fed03a3402d4633a8cd8b30882225.3e.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/9d565dddd6344e9a8dbab357038ed7d1/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=_PWgKL1KNquOc8Sh4XvYqWs0rE7xqp3OXrT9otGPbVA", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  const result = await response.text();
  console.log("Notification result:", result);
}
