// arrays                   the strings will be known as items
let desArray = ['California', 'New York', 'Texas', 'Washington', 'Florida', 'Madrid', 'Canada']
let resArray = ['Chinese', 'Mexican', 'Sushi', 'Tex-Mex', 'Italian', 'Indian', 'Spanish']
let transArray = ['Train', 'Plane', 'Taxi', 'Bus', 'Rental Car', 'Cruise']
let enteArray = ['Movie' , 'Musical' , 'Concert', 'Open Mic', 'Amusment Park']


// these will be known as types I.E destination and transport
destination = rndArray(desArray)
restaurant = rndArray(resArray)
transport = rndArray(transArray)
entertainment = rndArray(enteArray)

changeYesNo = prompt("Your destination is "+ destination + ". You'll get there via " + transport + ". Eating a wonderful local " + restaurant + ' restaurant. After that enjoy a night enjoyinging a ' + entertainment + '. Do you want to change anything?')


if(changeYesNo === 'Y' || "yes" || 'Yes' || 'y'){
    let desAgree = agreeCheck(prompt("Do you want to change your destination?"), destination,)
    if (desAgree === 'Y' || "yes" || 'Yes' || 'y' ){
        reSelector(destination,desArray)
    }

}
//if else(changeYesNo ==="N" || "n" || 'No' || 'no'){}






// function for random array
function rndArray(Array){
    let randomNumber =  Math.floor(Math.random() * Array.length)
    return Array[randomNumber]
}
//function to check if we like the random item
function agreeCheck(agree, item){
    agree = prompt("Do you want to change  " + item + "?")
    if(agree ==='Y' || "yes" || 'Yes' || 'y' ){   
        return agree;
    }
 /*   if else(agree !== 'Y' || "yes" || 'Yes' || 'y' || 'No' || 'no' || 'n'|| 'N'){           code i can't decide to use or not
        alert('Restart input not undersooned')
    }
    if else( agree === 'No' || 'no' || 'n'|| 'N' ){
        console.log(item + ' has been saved.')
    }*/
}
// function to run reselector 
function reSelector(item, typeArray){
    let agreeToChange = "Y"
    while(agreeToChange === 'Y' || "yes" || 'Yes' || 'y'){
        rndArray(typeArray)
        agreeToChange = prompt('Your choice of ' + item + ' has been saved. Would you like to change your choice?' )
    }
    return item
}

//  End Confirmation Alert
alert("Your order for "+ destination + " via " + transport + ", dinning in at a " + restaurant + ' restaurant. and a ' + entertainment + ' is complete. Have a nice day!')