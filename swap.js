function swap(var1, var2){
    var var3 = var2; //de préférable de déclarer variable à intérieure de function
    var2 = var1;
    var1 = var3; 
       
    return [var1, var2];     
}
console.log(swap(30, 25)); 


function swap(var1, var2){
        
    [var2, var1] = [var1, var2];
    return [var1, var2];
}
console.log(swap(25, 30));


function swap(var1, var2){
    var3 = var2; 
    var2 = var1;
    var1 = var3;       
   return [var1, var2];
}
swap(25, 30);          //swap(25, 30); et
console.log(swap);    //console.log(swap); => ne marche pas car les valeurs ne sont pas pris en compte sur console.log