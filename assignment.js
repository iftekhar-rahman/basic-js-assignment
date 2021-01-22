
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

                                            

