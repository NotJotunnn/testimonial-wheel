// Database
const testimonials = [
    {
        index: 0,
        img: "https://picsum.photos/150/150",
        name: "Doe John",
        occupation: "Gamer",
        comment: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry."
    },
    {
        index: 1,
        img: "https://picsum.photos/140/140",
        name: "Doe Smith",
        occupation: "Animal",
        comment: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."
    },
    {
        index: 2,
        img: "https://picsum.photos/160/160",
        name: "Steve Doe",
        occupation: "Philosopher",
        comment: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
    },
    {
        index: 3,
        img: "https://picsum.photos/130/130",
        name: "Steve Smith",
        occupation: "Jibber Snapper",
        comment: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic."
    },
    {
        index: 4,
        img: "https://picsum.photos/170/170",
        name: "Bill Johnson",
        occupation: "Military entrepeneur",
        comment: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up.VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic."
    }
];

// Work declarations
var counter = 0;
var lastCard = -1;

// Changes data
function handleSwap(num) {
    counter = counter + num;

    // Condition that cycles both ways from 0 to 4
    counter > 4 ? counter = 0 : counter < 0 ? counter = 4 : counter;

    swapData(testimonials[counter], counter);
}

// Changes data randomly
function randomHandleSwap() {

    // For used to avoid duplicates
    for(i = 0; i < 20; i ++) {
        const randomNum = Math.floor(Math.random() * 5);

        // Checks to see if randomNum is equal to the last value used
        if(randomNum == lastCard) i--;
        else {
            i = 30
            swapData(testimonials[randomNum], randomNum)
        };
    }
}

// Display changes
function swapData(person, num) {

    // Sets the new "default" to the last number added
    lastCard = num;

    // DOM declarations
    const profilePicture = document.getElementById('pfp');
    const name = document.getElementById('name');
    const occupation = document.getElementById('occ')

    const comment = document.getElementById('comment');

    profilePicture.setAttribute('src', person.img);
    name.textContent = person.name;
    occupation.textContent = person.occupation;
    comment.textContent = person.comment;
}