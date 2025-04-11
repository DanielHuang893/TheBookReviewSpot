window.onscroll = function () {
    var navBar = document.querySelector('.navBar');
    if (window.scrollY > 100) {
        navBar.classList.add('smaller');
    } else {
        navBar.classList.remove('smaller');
    }
};

const data = [
    
            {
                "id":1,
                "name":"Percy Jackson And The lighting thief",
                "Genre":"Adventure, Fiction",
                "Author":"Rick Riordan",
                "Description":"Percy Jackson, a twelve-year-old demigod (son of Poseidon) who discovers he’s part of a hidden world of Greek gods and monsters. After being accused of stealing Zeus’ lightning bolt, Percy embarks on a quest to clear his name, prevent a war among the gods, and survive dangers from mythological creatures. Along the way, he makes friends (like Annabeth and Grover) and battles ancient evils."
            },
            {
                "id":2,
                "name":"Percy Jackson and The Sea Of Monsters",
                "Genre":"Adventure, Fiction",
                "Author":"Rick Riordan",
                "Description":"Percy Jackson’s summer takes a wild turn when Camp Half-Blood’s magical borders are poisoned, leaving it vulnerable to monster attacks. To save the camp, Percy, Annabeth, and his newly discovered cyclops half-brother Tyson embark on a quest to the Sea of Monsters (aka the Bermuda Triangle) to retrieve the Golden Fleece—a legendary artifact that can heal the camp. Along the way, they face sirens, a deranged mechanical bull, and the sorceress Circe, before confronting Percy’s old enemy Luke, who plans to use the Fleece to revive the Titan Kronos."
            },
            {
                "id":3,
                "name":"Percy Jackson And The Titan's Curse",
                "Genre":"Adventure, Fiction",
                "Author":"Rick Riordan",
                "Description":"Percy, Annabeth, and Thalia rush to rescue Grover and two powerful new demigods (Bianca and Nico di Angelo) from a monster attack. But when Annabeth vanishes during the mission, a quest is launched to save her from the clutches of the General (later revealed to be Atlas, the Titan holding the sky). Along the way, Percy teams up with Artemis’ Hunters (including the mysterious Zoe Nightshade) and faces gods, monsters, and a terrible prophecy that hints at a hero’s doom."
            }
            
           
    
]
// Fetch 
console.log(data)
let bookGrid = document.getElementsByClassName("bookGrid")
console.log(bookGrid)