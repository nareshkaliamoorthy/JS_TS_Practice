// Write a JavaScript program using only if, else if, and else to check a student's marks and print:

// Grade A if marks are 90 or above

// Grade B if marks are between 60 and 89

// Grade C if marks are below 60

let marks = 200

if (marks >= 90) {
    console.log("GRADE A")
}
else if (marks < 90 && marks >= 60) {
    console.log("GRADE B")
}
else if (marks < 60) {
    console.log("GRADE C")
}
else {
    console.log("Enter a valid number")
}