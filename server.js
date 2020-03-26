'use strict'
const stores=require('./stores.js')
const hours =['7am','8am','9am'];
//related to strore

//helper function 
let randomNumberBetween=function(min,max){
    min=Math.cell(min);
    max=Math.floor(max);
    return Math.floor(Math.random()*(max-min+1))+min;
};
//related to strore
Store.prototype.projectionSales=function(){
    hours.forEash((hour) =>{
        this .projection[hour]=randomNumberBetween(this.minCustomersPerHour,this.maxCustomersPerHour)
    });
}
const rawanCake=new stores('rawan cake',5,10,2.5); //input
console.log(rawanCake); //printing 