function receivesAFunction(callback){
    return callback();
}

receivesAFunction(function() {return 'something'})

function returnsANamedFunction(){
    return function receivesAFunction(){}
 }
 
 function returnsAnAnonymousFunction(){
    return function() { 
        return 'something'
    }
}