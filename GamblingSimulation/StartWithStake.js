//UC1

console.log("Welcome to Gambling simulation");
const STAKE_OF_EVERY_DAY = 100;
const BET_PER_GAME = 1;


let stake = 100; 

let checkPossibility = Math.floor(Math.random() * 10) %2;


//UC2
function WinOrLoose(){
    let is_win = 1
    if(checkPossibility == is_win){

        stake = stake + BET_PER_GAME;
        console.log("win the Bet per game : " + stake);
    }
    else{
       
        stake = stake - BET_PER_GAME;
        console.log("loose the bet per game : " + stake);
    }
}
//WinOrLoose();

//UC3 
function WonOrLostForTheDay(){
    while(stake > 50 && stake < 150){
        
        WinOrLoose();
    }
    console.log(stake);
}
//WonOrLostForTheDay();

//UC4
function TotalAmountOfWinOrLost(){
    let won_count = 0;
    let lost_count = 0;
    let total_stake = 0;
    let Stake_After_Betting = 0;
    do {

        for (let day = 1; day <= 20; day++) {
            stake = WonOrLostForTheDay();
            if (stake < STAKE_OF_EVERY_DAY)
            lost_count++;
            else
            won_count;
                total_stake = total_stake + STAKE_OF_EVERY_DAY ;
            stake = STAKE_OF_EVERY_DAY;
        }
        if (total_stake > Stake_After_Betting)
            console.log("lost After 20 days : " + (total_stake - Stake_After_Betting));
        else
            console.log("Won After 20 days : " + (Stake_After_Betting - total_stake));
    } while (Stake_After_Betting >= total_stake);
}
//TotalAmountOfWinOrLost();


//UC5
function winOrLoseForMonth(){

    for(let month=0 ; month<8; month++){
        console.log((month+1)+" month");
        TotalAmountOfWinOrLost();
    }
    
}
//winOrLoseForMonth();


//UC6
function WonOrLostOfMaximumLuckiestDay(){

    var  luckiest_day = 0;
    //var  luckiest_number = 99;
    var unluckiest_day = 0;
    //var unluckiest_number = 70;

    if(checkPossibility > luckiest_day){
        luckiest_day = checkPossibility
        console.log("won maximum Luckiest day : " + luckiest_day)
    
    } else {
        if(checkPossibility < unluckiest_day){
            unluckiest_day = checkPossibility
        }

        console.log("lost maximum UnLuckiest day : " + unluckiest_day)
    }
   
}
WonOrLostOfMaximumLuckiestDay();

//UC7
function PlayAgainGame(){
    var ask = string.question("Do you want to play again: ");
        if (ask == "yes" || ask == "y") {
            TotalAmountOfWinOrLost();
        } else {
            console.log("Thank you for playing")
       }
}
PlayAgainGame();