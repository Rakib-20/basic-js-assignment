// problem-1: feetToMile

function feetToMile(feet){
    var mile = feet / 5280;
    return mile;
}


// problem-2: woodCalculator

function woodCalculator(chair, table, bed){
    var chairCount = chair * 2;
    var tableCount = table * 5;
    var bedCount = bed * 8;

    var totalWood = chairCount + tableCount + bedCount;

    return totalWood;
}


// problem-3: brickCalculator

function brickCalculator(floor){
    var totalbrick = 0;
    var totalFeet = 0;
    for(var i=1; i<=floor; i++){
        if(i>=1 && i<=10){
            totalFeet = totalFeet + 15;
        }
        if(i>=11 && i<=20){
            totalFeet = totalFeet + 12;
        }
        if(i>=21){
            totalFeet = totalFeet + 10;
        }
        totalbrick = totalFeet * 1000;
    }
    return totalbrick;
}



// problem-4: tinyFriend

function tinyFriend(names){
    var tiny = names[0].length;
    var smallName = names[0];
    for(var i=0; i<names.length; i++){
        var element = names[i].length;
        if(tiny > element){
            tiny = element;
            smallName = names[i];
        }
    }
    return smallName;
}
