const name = prompt("Enter you`re name:");
const UserName = document.querySelector('.player_name');
UserName.textContent = name;

const vars = {
    compCard: document.querySelector('.enemy_card'),
    playCard: document.querySelector('.player_card'),
    playScore: document.querySelector('.player_score'),
    compScore: document.querySelector('.comp_score'),
    pickBtn: document.querySelector('.pick'),
    stopBtn: document.querySelector('.stop'),
    compList: document.querySelector('.coCard_list'),
    plaList: document.querySelector('.plCard_list'),
}

const card = [
    two={
      src:  "https://files.fm/thumb_show.php?i=68gn5us7v",
      id: "2"
    },
    three={
        src: "https://files.fm/thumb_show.php?i=qca43shky",
        id: "3"
      },
      four={
        src: "https://files.fm/thumb_show.php?i=f99tk2app",
        id: "4"
      },
      five={
        src:  "https://files.fm/thumb_show.php?i=m5t2y4h9z",
        id: "5"
      },
      six={
        src:  "https://files.fm/thumb_show.php?i=hjb34fc6d",
        id: "6"
      },
      seven={
          src: "https://files.fm/thumb_show.php?i=kqrf3vadq",
          id: "7"
        },
        eight={
          src: "https://files.fm/thumb_show.php?i=asdc9b5my",
          id: "8"
        },
        nine={
          src:   "https://files.fm/thumb_show.php?i=aujubmtwt",
          id: "9"
        },
        ten={
            src:  "https://files.fm/thumb_show.php?i=smdf7nsd2",
            id: "10"
          },
          ace={
            src:  "https://files.fm/thumb_show.php?i=bmeue3z67",
            id: "ace"
          },
          jack={
              src:  "https://files.fm/thumb_show.php?i=8kz59m9s9",
              id: "jack"
            },
            queen={
              src: "https://files.fm/thumb_show.php?i=5efepbahj",
              id: "queen"
            },
            king={
              src: "https://files.fm/thumb_show.php?i=jmfhpbbdy",
              id: "king"
            },


        ];

 
function PickCard(){
    let c = document.createElement('li');
    c.classList.add('compCard');
    c.classList.add('item');
    let a = card[GetRandImage(card)];
    c.innerHTML = `<img src ="${a.src}" id="${a.id}" class="cc photo">`;
    let p = document.createElement('li');
    p.classList.add('plaCard');
    p.classList.add('item');
    let b = card[GetRandImage(card)];
    p.innerHTML = `<img src ="${b.src}" id="${b.id}" class="pc photo">`;

    if(vars.plaList.childElementCount !== 3 && vars.compList.childElementCount !== 3){
        vars.plaList.appendChild(p);
        vars.compList.appendChild(c);
  }
  else{
      vars.pickBtn.setAttribute("disable", "true");
  }
}

function Stop(){
  var cP = document.querySelectorAll('.cc');
  var pP = document.querySelectorAll('.pc');

  var playerPoint = Switcher(pP);
  var computerPoint = Switcher(cP);

  vars.playScore.textContent = `Player Score: ${playerPoint}`;
  vars.compScore.textContent = `Computer score: ${computerPoint}`;


  if(playerPoint > computerPoint && playerPoint <= 21){
    alert("YOU WIN!");
  }
  else if(playerPoint > computerPoint && playerPoint > 21){
    alert("You Lose");
  }
  else if(playerPoint > 21 && computerPoint > 21){
    alert("You Lose");
  }
  else if(playerPoint > 21 && computerPoint <= 21){
    alert("You Lose");
  }
  else if(playerPoint > computerPoint && playerPoint <=21 && computerPoint < 21){
    alert("YOU WIN!");
  }
  else if(playerPoint < computerPoint && playerPoint <=21 && computerPoint < 21){
    alert("You Lose");
  }
  else if(playerPoint == computerPoint){
   alert("Draw");
  }
  else if(playerPoint < computerPoint && playerPoint < 21 && computerPoint > 21){
    alert("YOU WIN!");
  }
  else if(playerPoint == 21){
    alert("YOU WIN!");
  }
  else if(computerPoint == 21){
    alert("You Lose");
  }
}
const Switcher = (x) =>{
    var res = 0;
        x.forEach(ima =>{
          console.log(ima.id)
        switch(ima.id){
            case "2":
            case "jack":
                res += 2;
                break;
            case "3":
            case "queen":  
                res += 3;
                break;
            case "4":
            case "king":
              res += 4;
              break;
            case "5":
              res += 5;
              break;
            case "6":
              res += 6;
              break;
            case "7":
              res += 7;
              break;
            case "8":
              res += 8;
              break;
            case "9":
              res += 9;
              break;
            case "10":
              res += 10;
              break;
            case "ace":
              res += 11;
              break;
        }
        })
    return res;

}

const GetRandImage = (x) =>{
    return Math.floor(x.length * Math.random());
   } 
      
vars.pickBtn.addEventListener('click', PickCard);       
vars.stopBtn.addEventListener('click', Stop);      
             
      
          