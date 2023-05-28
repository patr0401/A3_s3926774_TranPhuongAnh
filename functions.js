const container = document.querySelector(".container");

// Machine Moving
function freezeMachine() {
  document.getElementById("gumball").src = "images/gumball-machine.gif";
  setTimeout(getBall, 1000);
}

function shakeMachine() {
  document.getElementById("gumball").src = "images/shaking-gumball.gif";
  setTimeout(freezeMachine, 2000);
}

function inputCoin () {
  document.getElementById("gumball").src="images/coin-insert.gif"
  setTimeout(shakeMachine, 2000);
}

function runMachine () {
  document.getElementById("coin-popup").style.visibility = "hidden"
  document.getElementById("coins-btn").style.pointerEvents = "none"
  setTimeout(inputCoin,800)        
}

function pickCoin () {
  document.getElementById("coin-popup").style.visibility = "visible"

}

// Bee Moving
container.addEventListener("click", getCoords, false);

function getCoords (event) {
    const image = document.getElementById("bee");
    const x = event.clientX - (image.offsetWidth / 2) - 600;
    const y = event.clientY - (image.offsetHeight / 2) - 150;
    const translateValue = "translate3d(" + x + "px," + y + "px, 0)";

    function movingBee () {
      image.style.transform = translateValue
    }

    setTimeout(movingBee, 300);
}

// place info popup
function popUpPlaceInfo () {
  const myBall = document.getElementById("ball");

  if (myBall.src.includes("blue")) {
    document.getElementById("place-popup").insertAdjacentHTML("afterend",
   `<div id="place-info">
      <img id="place-img" src="images/HCMC/Ben-Thanh-Market.webp" alt="" width="583" height="363">
      <h2>BEN THANH MARKET</h2>
      <p>Ben Thanh Market is one of the most important places to see in ho chi minh city from a shopping point of view. Visiting this place, you will be able to purchase cheap clothes, souvenirs, accessories, textiles, electronics goods and much more. In the course of the day time, the market sells fresh produce and groceries whereas after the sunset, this place completely transforms into a street food hub.</p>
      <button onclick="closeInfoPopup()">TRY AGAIN?</button>
    </div>`
    )
  }

  if (myBall.src.includes("green")) {
    document.getElementById("place-popup").insertAdjacentHTML("afterend",
   `<div id="place-info">
      <img id="place-img" src="images/HCMC/Independence-Palace.jpg" alt="" width="583" height="363">
      <h2>INDEPENDENCE PALACE</h2>
      <p>If you are a history buff and loves to explore the ancient part while in Vietnam then Independence Palace is definitely the best spot for you. The palace isn"t utilized much any longer like it was before; it"s a chronicled relic of a period that finished just 40 years prior. In the sprawling grounds are clear indications of how everything finished, with a tank smashing through the front door and conveying the Vietnam War to an end. Highlights: The Reunification.</p>
      <button onclick="closeInfoPopup()">TRY AGAIN?</button>
    </div>`
    )
  }

  if (myBall.src.includes("orange")) {
    document.getElementById("place-popup").insertAdjacentHTML("afterend",
   `<div id="place-info">
      <img id="place-img" src="images/HCMC/Cu-Chi.jpg" alt="" width="583" height="363">
      <h2>CU CHI TUNNEL</h2>
      <p>Cu Chi Tunnel can be termed as one of the renowned iconic attractions of Ho Chi Minh CIty as it is a part of the extensive underground network. It was used by the Vietnamese congress as a hideaway during various wars.The tunnels were hand crafted and made by the use of simple tools. The tunnels were used during the french colonial rule and later was expanded to be used in the course of the war against America.</p>
      <button onclick="closeInfoPopup()">TRY AGAIN?</button>
    </div>`
    )
  }

  if (myBall.src.includes("pink")) {
    document.getElementById("place-popup").insertAdjacentHTML("afterend",
   `<div id="place-info">
      <img id="place-img" src="images/Melbourne/Eureka.webp" alt="" width="583" height="363">
      <h2>EUREKA TOWEL MELBOURNE</h2>
      <p>Standing at a height of 297 meters, Eureka Tower Melbourne is the tallest residential and public vantage point located in the Southern Hemisphere. Featuring the highest observation deck in Melbourne, the Eureka Tower offers surreal views of the entire city covered in twinkling lights during the evening. Visitors can also take the thrilling experience of walking on a glass cub called The Edge.</p>
      <button onclick="closeInfoPopup()">TRY AGAIN?</button>
    </div>`
    )
  }

  if (myBall.src.includes("purple")) {
    document.getElementById("place-popup").insertAdjacentHTML("afterend",
   `<div id="place-info">
      <img id="place-img" src="images/Melbourne/Sanctuary.jpeg" alt="" width="583" height="363">
      <h2>HEALESVILLE SANCTUARY</h2>
      <p>Healesville Sanctuary goes beyond the usual definition of a zoo with its meticulous recreation of the natural habitats of its animal residents. Spread over 70 acres of bushlands, the sanctuary has creeks, canopies, wetlands, water bodies, and much more, to ensure the wild residents of Healesville feel at home.</p>
      <button onclick="closeInfoPopup()">TRY AGAIN?</button>
    </div>`
    )
  }

  if (myBall.src.includes("yellow")) {
    document.getElementById("place-popup").insertAdjacentHTML("afterend",
   `<div id="place-info">
      <img id="place-img" src="images/Melbourne/Luna-Park-Melbourne.jpeg" alt="" width="583" height="363">
      <h2>LUNA PARK</h2>
      <p>Melbourne’s iconic Luna Park, renowned as the city’s oldest amusement park, is among the top attractions that are frequented by thrill-seekers from across the world. With more than a century of expertise, Luna Park, which dates back to 1912, houses rides and thrills designed to cater to visitors of all ages and preferences. From roller coasters to motion simulators, the park offers classic family entertainment with its state-of-the-art attractions.</p>
      <button onclick="closeInfoPopup()">TRY AGAIN?</button>
    </div>`
    )
  }
}

function closeInfoPopup () {
  document.getElementById("place-info").style.visibility = "hidden"
  const myBall = document.getElementById("ball")
  myBall.style.animation = "rollback 0.1s linear"
  myBall.style.animationFillMode = "forwards"
  myBall.style.visibility = "hidden";
  document.getElementById("coins-btn").style.pointerEvents = "auto"
}


// Ball rolling
function getBall () {
  const myBalls = ["images/balls/blue-ball.png", "images/balls/green-ball.png", "images/balls/pink-ball.png", "images/balls/orange-ball.png", "images/balls/yellow-ball.png", "images/balls/purple-ball.png"]
  let randomIndex = Math.floor(Math.random() * myBalls.length)
  const myBall = document.getElementById("ball");
  myBall.src = myBalls[randomIndex]
  myBall.style.visibility = "visible"
  myBall.style.animation = "rolls 1.5s linear"
  myBall.style.animationFillMode = "forwards"
  }

// Checklist  
function popUpChecklist () {
  const checklist = document.getElementById("checklist")
  checklist.style.visibility = "visible"
}

function closeChecklistPopup () {
  document.getElementById("checklist").style.visibility = "hidden"
}
