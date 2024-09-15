const reviews = [
    {
        id: 1,
        name: "Mr. Ananonymus",
        designation: "Hacker",
        image: "photos/download (1).jpeg",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est ducimus ab obcaecaullam accusantium inventore mollitia minima eligendi molestias consequatur.",
    },
    {
        id: 2,
        name: "Albert Wilfrey",
        designation: "Ux Designer",
        image: "photos/download (2).jpeg",
        text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a",
    },
    {
        id: 3,
        name: "Will Smith",
        designation: "Software Engineer",
        image: "photos/download (3).jpeg",
        text: "great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely",
    },
    {
        id: 4,
        name: "Bella Chao",
        designation: "Sales Executive",
        image: "photos/download (4).jpeg",
        text: "Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.",
    },
];

var profilePic = document.getElementById("profilePic");
var Name = document.getElementById("Name");
var designation = document.getElementById("designation");
var about = document.getElementById("about");

var previous = document.querySelector(".previous");
var next = document.querySelector(".next");
var random = document.querySelector(".surprise");

var currentNumber = 0;

document.addEventListener("DOMContentLoaded", function () {
    ShowReview(currentNumber);
});

function ShowReview(person) {
    var obj = reviews[person];
    profilePic.src = obj.image;
    Name.textContent = obj.name;
    designation.textContent = obj.designation;
    about.textContent = obj.text;
}

next.addEventListener("click", function () {
    currentNumber++;
    if (currentNumber > reviews.length - 1) {
        currentNumber = 0;
    }
    ShowReview(currentNumber);
});

previous.addEventListener("click", function () {
    currentNumber--;
    if (currentNumber < 0) {
        currentNumber = reviews.length - 1;
    }
    ShowReview(currentNumber);
});

random.addEventListener("click", function () {
    var num = Math.floor(Math.random() * reviews.length);
    ShowReview(num);
});