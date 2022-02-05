// problem 1: anaToVori


function anaToVori(ana){

    let vori = ana / 16;
    //error handling
    if(ana <= 0 || typeof ana != "number"){
        return "You should give right value"
    }
    return vori;     // return value
}

let totalVori = anaToVori(-100);  // this is function call
console.log(totalVori);




// problem 2: pandaCost


function pandaCost(singara, samuca, jilapi){
    const perSingaraPrice = 7;
    const perSamucaPrice = 10;
    const perJilapiPrice = 15;

    let totalSingaraPrice = singara * perSingaraPrice;
    let totalSamucaPrice = samuca * perSamucaPrice;
    let totJilapiPrice = jilapi * perJilapiPrice;

    let totalPrice = totalSingaraPrice + totalSamucaPrice + totJilapiPrice;

    //error handling
    if(singara < 0 || samuca < 0 || jilapi < 0 ){
        return "Please give me your right quantity of singara, samuca, jilapi"
    }

    return totalPrice;  //return value
}

let givenValue = pandaCost(-5, 4, 5);  // this is function call
console.log(givenValue);




// problem 3: picnicBudget


function picnicBudget(person){
    let cost;
    //error handling
    if(typeof person != "number" || person <=0){
        return "Please enter a valid person number"
    }
    else if (person > 200){
        let first100Person = 100 * 5000;
        let second100person = (200 - 100) * 4000;
        let over200Person = (person - 200) * 3000;
        cost = first100Person + second100person + over200Person;
    }
    else if(person > 100){
        let first100Person = 100 * 5000;
        let second100person = (person - 100) * 4000;
        cost = first100Person + second100person
    }
    else if(person <= 100){
        cost = person * 5000;
    }

    return cost;

}

let totalCost = picnicBudget(-101);  // this is function call
console.log(totalCost);




// problem 4: oddFriend


function oddFriend(friendsName){
    let oddFriendName = "";
    //Error Handling
    if(typeof friendsName == "number"){
        return "Please give me a proper array"
    }
    for(let i = 0; i < friendsName.length; i++){
        let friends = friendsName[i];
        if(friends.length % 2 != 0){
            oddFriendName = friends;
            break;
        }
    }
    return oddFriendName;
}

//  const names = ["shar", "sha", "dhar", "phar"]
const names = 10; // this is function call
let oddName =oddFriend(names);
console.log(oddName);