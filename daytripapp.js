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

changeYesNo = prompt("Your destination is "+ destination + ". You'll get there via " + transport + ". Eating a wonderful local " + restaurant + ' restaurant. After that a night enjoyinging a ' + entertainment + '. Do you want to change anything?')


if(changeYesNo ==='y' || changeYesNo === 'Y' ||changeYesNo === "yes" || changeYesNo === 'Yes'){
    let desAgree = agreeCheck(prompt("Do you want to change " + destination + "?"), destination, desArray)   
    let transAgree = agreeCheck(prompt("Do you want to change " + transport + "?"), transport, transArray)
    let resAgree = agreeCheck(prompt("Do you want to change " + restaurant + "?"), restaurant, resArray)
    let enteAgree = agreeCheck(prompt("Do you want to change " + entertainment + "?"), entertainment, enteArray)
}


//if else(changeYesNo === "N" || === "n" || === 'No' || ==='no'){}


// function for random array
function rndArray(typeArray){
    let randomNumber =  Math.floor(Math.random() * typeArray.length)
    return typeArray[randomNumber]
}
//function to check if we like the random item
function agreeCheck(agree, item, typeArray){
    if(agree ==='y' || agree === 'Y' ||agree === "yes" || agree === 'Yes'){   
        reSelector(item, typeArray)
    }

}
// function to run reselector 
function reSelector(item, typeArray){
    let agreeToChange = 'y'

    if (agreeToChange ==='y' || agreeToChange === 'Y' ||agreeToChange === "yes" || agreeToChange === 'Yes' ){
        item = rndArray(typeArray)
        agreeToChange = 'n'
        agreeToChange = prompt('Your choice of ' + item + ' has been saved. Would you like to change your choice?' )

        if (agreeToChange==='y'){
            reSelector(item, typeArray)

        }
        
    }
    else if (agree === "N" || agree === "n" || agree === 'No' || agree ==='no'){
        return item
}
    else{
    alert('Error invaild Please insert either Yes or No restarting')
    reSelector(item, typeArray)
}
}
//  End Confirmation Alert
alert("Your order for "+ destination + " via " + transport + ", dinning in at a " + restaurant + ' restaurant. and a ' + entertainment + ' is complete. Have a nice day!')