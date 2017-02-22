/**
 * Created by Hilk on 17.02.2017.
 */
alert("Run!");
var indexTable = 0;
var nameTable = ["TablePower","TableTemperature","TableFun"];
var tablePower = document.getElementById(nameTable[indexTable]);

setInterval(function UpdateTable(){
    var nameTable = ["TablePower","TableTemperature","TableFun"];
    var tablePower = document.getElementById(nameTable[indexTable]);
    for (var i = 1; i <= tablePower.rows.length -1; i++ ){
         for (var j = 2; j <=tablePower.rows.length; j++){
            tablePower.rows[i].cells[j].innerHTML = Math.random() * 2;

         }
    };
    if (indexTable==2){
        indexTable = 0;
    }else {
        indexTable = indexTable +1;
    }
},60*100);
