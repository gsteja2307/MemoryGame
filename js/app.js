const restart=document.getElementById('restart');
 const movesField=document.getElementsByClassName('moves')[0];
 var moves=0;//not yet used
 var checkmatch=0;//check for matching of cards and also used for resettings items
 var cardmatch=0;//dummy
 const cardsNl = document.querySelectorAll('li.card');//nodelist of cards
 const cardsArr = Array.from(cardsNl);//this has cards
 var flag=0;//used for activating clicks on cards after game starts
 var cardsVal=[];//has the symbol values
 for(card of cardsArr){//inserted symbols into the array in this loop
 cardsVal.push(card.innerHTML);
};

 function Gamestarts(){//main function
 restart.addEventListener('click',function(){
 	Gamestarts();
 });	//enabling restart button
 shuffle(cardsVal);//suffling cards
 let i=0;
 for(card of cardsArr){//inserting the shuffled cards into the grid
 card.innerHTML=cardsVal[i++];
 }
 show();//show the cards for a 2 seconds

 }
 function show(){
     cardsArr.forEach(function(item){//adding open and show class for the user
         item.classList.add('open');
         item.classList.add('show');
     });
     setTimeout(function(){//hides the cards
         cardsArr.forEach(function(item){
             item.classList.remove('open');
             item.classList.remove('show');
         });
     },2000);
     flag=1;//ok now the cards can be clicked
     addClickFeatureNow(flag);
 };
 /*
 */


// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function addClickFeatureNow(flag){//adding click event for the cards
  if(flag===1){
    cardsArr.forEach(function(card){
      card.addEventListener('click',iHaveBeenClicked);
    });

  }
}
var firstItem='something';//default values to avoid error
var firstCard;
var secondItem='dontknow';
var secondCard;
function iHaveBeenClicked(event) {
// console.log('i am working');
// console.log(event.target);
let targetCard=event.target;
if(checkmatch===0){//first card
firstItem=targetCard.getElementsByTagName('i');//selecting symbol
firstCard=targetCard;//selecting li element
firstCard.removeEventListener('click',iHaveBeenClicked);//removed double click on same card
}
if(checkmatch===1){//same here
secondItem=targetCard.getElementsByTagName('i');
secondCard=targetCard;
secondCard.removeEventListener('click',iHaveBeenClicked);
}
targetCard.classList.add('open');//showing to user
targetCard.classList.add('show');//the card he selected
checkmatch++;//active card is incremented
moves++;//moves being incremented
movesField.innerText=moves;
if(checkmatch==2){//after 2 cards are selected
  var x=firstItem[0].classList[1];
  var y=secondItem[0].classList[1];
  if(x===y && firstCard!==secondCard){    //checking for same classes(in this case symbols)
    secondCard.classList.add('match');
    firstCard.classList.add('match');
    var index=cardsArr.indexOf(firstCard);
    cardsArr.splice(index,1);//since they are same , remove the card from array show it will open parmanent
    var index=cardsArr.indexOf(secondCard);
    cardsArr.splice(index,1);
    firstCard.removeEventListener('click',iHaveBeenClicked);
    secondCard.removeEventListener('click',iHaveBeenClicked);
    firstCard='';
    secondCard='';
    firstItem='';
    secondItem='';
    if(cardsArr.length===0)
    winner(moves);
  }
  // else{
// if(cardmatch==0){//always true , added for debugging , do not worry about this check
cardsArr.forEach(function(item){
    item.removeEventListener('click',iHaveBeenClicked);
  });
  setTimeout(function(){
  cardsArr.forEach(function(item){
      item.classList.remove('open');
      item.classList.remove('show');
      console.log('im here');
  });},800);

// }
setTimeout(function(){
  checkmatch=0;
  console.log('where are you');
  addClickFeatureNow(1);
},801);
// }
}

}
function winner(moves){
  alert(`you have finished the game in ${moves} moves`);

}
Gamestarts();