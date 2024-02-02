function feast(beast, dish) {
    const beastLength = beast.length-1;
     const dishLength =dish.length-1;
     if(beast[0]===dish[0] && beast[beastLength]===dish[dishLength])
     {
         return true
     }
     else
     {
       return false;
     }
   }