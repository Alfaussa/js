let schedule = {
    name:"alfiya",
};

function isEmpty (schedule) {
    for ( let key in schedule) {
            return false;
         }
         return true;
    }

console.log(isEmpty (schedule));