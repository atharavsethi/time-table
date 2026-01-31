


const daybtn = document.getElementById("dayselect");
const course = document.getElementById("course");
const batch = document.getElementById("batch");

// ====================
// CSE – A
// ====================
const monA = document.querySelector(".mondaycs1a");
const tueA = document.querySelector(".tuesdaycs1a");
const wedA = document.querySelector(".wednesdaycs1a");
const thuA = document.querySelector(".thursdaycs1a");
const friA = document.querySelector(".fridaycs1a");

// ====================
// CSE – B
// ====================
const monB = document.querySelector(".mondaycs1b");
const tueB = document.querySelector(".tuesdaycs1b");
const wedB = document.querySelector(".wednesdaycs1b");
const thuB = document.querySelector(".thursdaycs1b");
const friB = document.querySelector(".fridaycs1b");

// ====================
// DSAI
// ====================
const monD = document.querySelector(".mondaydsai");
const tueD = document.querySelector(".tuesdaydsai");
const wedD = document.querySelector(".wednesdaydsai");
const thuD = document.querySelector(".thursdaydsai");
const friD = document.querySelector(".fridaydsai");

// ====================
// ECE
// ====================
const monE = document.querySelector(".mondayece");
const tueE = document.querySelector(".tuesdayece");
const wedE = document.querySelector(".wednesdayece");
const thuE = document.querySelector(".thursdayece");
const friE = document.querySelector(".fridayece");


// ====================
// Hide all timetables
// ====================
function hideAll() {
    // CSE A
    monA.style.display = "none"; tueA.style.display = "none";
    wedA.style.display = "none"; thuA.style.display = "none"; friA.style.display = "none";

    // CSE B
    monB.style.display = "none"; tueB.style.display = "none";
    wedB.style.display = "none"; thuB.style.display = "none"; friB.style.display = "none";

    // DSAI
    monD.style.display = "none"; tueD.style.display = "none";
    wedD.style.display = "none"; thuD.style.display = "none"; friD.style.display = "none";

    // ECE
    monE.style.display = "none"; tueE.style.display = "none";
    wedE.style.display = "none"; thuE.style.display = "none"; friE.style.display = "none";
}

hideAll();
batch.style.display = "none";


// ========================
// On course change
// ========================
course.addEventListener("change", () => {
    hideAll();
    batch.style.display = "block";
    daybtn.value = "Day";
});

batch.style.display = "none";
// ========================
// On batch change
// ========================
batch.addEventListener("change", () => {

    hideAll();
    daybtn.value = "Day";

   
    if (course.value === "cse" && batch.value === "A") return;

   
    if (course.value === "cse" && batch.value === "B") return;

  
    if (course.value === "dsai") {
        batch.style.display = "none";
        return;}

  
    if (course.value === "ece") 
    {
        batch.style.display = "none";
        return;}
});


// ========================
// DAY SWITCHING (ALL BRANCHES)
// ========================
daybtn.addEventListener("change", () => {
    hideAll();

    const d = daybtn.value;

    // CSE A
    if (course.value === "cse" && batch.value === "A") {
        if (d === "m") monA.style.display = "block";
        if (d === "t") tueA.style.display = "block";
        if (d === "w") wedA.style.display = "block";
        if (d === "thur") thuA.style.display = "block";
        if (d === "f") friA.style.display = "block";
    }

    // CSE B
    if (course.value === "cse" && batch.value === "B") {
        if (d === "m") monB.style.display = "block";
        if (d === "t") tueB.style.display = "block";
        if (d === "w") wedB.style.display = "block";
        if (d === "thur") thuB.style.display = "block";
        if (d === "f") friB.style.display = "block";
    }

    // DSAI
    if (course.value === "dsai") {
        if (d === "m") monD.style.display = "block";
        if (d === "t") tueD.style.display = "block";
        if (d === "w") wedD.style.display = "block";
        if (d === "thur") thuD.style.display = "block";
        if (d === "f") friD.style.display = "block";
    }

    // ECE
    if (course.value === "ece") {
        if (d === "m") monE.style.display = "block";
        if (d === "t") tueE.style.display = "block";
        if (d === "w") wedE.style.display = "block";
        if (d === "thur") thuE.style.display = "block";
        if (d === "f") friE.style.display = "block";
    }
});
