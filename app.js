

var billAmt = document.querySelector("#billAmt");
var cashGiven = document.querySelector("#cashGiven");

var cashGivenDiv = document.querySelector(".cashGivenInput");
var changeReturnDiv = document.querySelector(".changeReturn");
var nochangeReturnDiv= document.querySelector(".noChangeReturn");

var output= document.querySelector("#output");

var nextBtn = document.querySelector("#nextBtn");
var checkBtn = document.querySelector("#checkBtn");

var noOfNotes= document.querySelectorAll(".noOfNotes");

var arrayNoteAmt = [2000, 500, 100, 20, 10, 5, 1];


//if bill amt filled, display cash given input field
nextBtn.addEventListener('click', ()=>{
    if(billAmt.value){
        nextBtn.style.display = "none";
        cashGivenDiv.style.display = "block";
    }
    else{
        alert("Enter bill amount to continue");
    }
} )


//check btn clicked handler
checkBtn.addEventListener('click', ()=>{
    clearNoOfNotes();

    //error handling
    if(billAmt.value>0 && cashGiven.value>0){
        if(!Number.isInteger(Number(cashGiven.value))){
            alert("Enter valid amount in cash given field");
            return;
        }
        if(billAmt.value > cashGiven.value){
            alert("Cash is less than bill, please enter right amounts");
            return;
        }

        //if input valid calculate no. of notes
        calculateNotes(billAmt.value, cashGiven.value);
    } else{
        alert("Enter bill amount and cash given to continue");
        }
})

//to calculate no. of notes
function calculateNotes(bill, cash){
    var returnAmt = cash-bill;
    
    if(returnAmt<1){
        nochangeReturnDiv.style.display = "block";
        changeReturnDiv.style.display = "none";
        return;
    }

    nochangeReturnDiv.style.display = "none";
    changeReturnDiv.style.display = "block";

    for(let i=0; i<arrayNoteAmt.length; i++){
        returnAmt= compare(returnAmt, arrayNoteAmt[i], i);
    }
    
}

//compare with currency and post the no. of notes on screen
function compare(remainder, noteAmt, index){

    if(remainder >= noteAmt){
        let notes = Math.floor(remainder/noteAmt);
        remainder = remainder - notes*noteAmt;
        noOfNotes[index].innerText = `${notes}`;
    }
    return remainder
}

//if check button clicked without refreshing the page, clear the no of notes values on the screen
function clearNoOfNotes(){
    for(let notes of noOfNotes){
        notes.innerText = "";
    }
}