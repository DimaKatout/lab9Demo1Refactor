const Store = function(location,min,max,avg){
    this.location=location;
    this.minCustomersPerHour=min;
    this.maxCustomersPerHour=max;
    this.avgCookiesPerCustomer=avg;
    this.projection={};
    this.projectionSales={};
Store.stores.push(this);
};

Store.stores=[];
module.exports=[Store,hours];//Store is accesible by anyone
 
//watch again class 9 part 1
