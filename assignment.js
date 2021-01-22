
// https://github.com/iftekhar-rahman/basic-js-assignment

/*-------First Problem--------*/ 
function kilometerToMeter(kilo){
    var meter = kilo * 1000;
    return meter;
}
var result = kilometerToMeter(5);
console.log(result);

/*-------Second Problem - Budget Calculator --------*/
var watchPrice  = 50;
// var phonePrice  = 100;
// var laptopPrice = 500;
function budgetCalculator(watch, phone, laptop){
    if(watch == 1){
        return 1;
    } else{
        return watchPrice * watch;
    }
    return watchPrice;
}
var resutl = budgetCalculator(3);
console.log(resutl);

/*-------Third Problem - Hotel Cost--------*/
function hotelCost(days){
    var cost = 0;
    if(days <= 10){
        cost = days * 100;
    } else if(days <= 20){
        var firstTenDays = 10 * 100;
        var discountCost = days - 10;
        var secondTenDays = discountCost * 80;
        cost = firstTenDays + secondTenDays;
    } else{
        var firstTenDays = 10 * 100;
        var secondTenDays = 10 * 80;
        var discountCost = days - 20;
        var afterTDays = discountCost * 50;
        cost = firstTenDays + secondTenDays + afterTDays;
    }
    return cost;
}
var result = hotelCost(55);
console.log(result);

/*-------Fourth Problem - Mega Friend --------*/
var names = ["Rahim", "Karim", "Abdullah", "Kiron Rahman", "Malek"];
function megaFriend(mega){
    var word = "";
    for(var i = 0; i < mega.length; i++){
        if(word.length < mega[i].length){
            word = mega[i];
        }
    }
    return word;
}
var result = megaFriend(names);
console.log(result);

                                            

