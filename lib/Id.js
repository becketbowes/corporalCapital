let newId = "";

var idMaker = function(type) {
    // function getRandomInt(max) {
    //     return Math.floor(Math.random() * max);
    //   }
    if (type === 'random') {
        newId = Math.round((Math.random() * 100000000));
        console.log(newId);
    } else {
        i = 100
        i++;
        newId = i;
        console.log(newId);
    };
};

idMaker('random');
idMaker('ordinal');
