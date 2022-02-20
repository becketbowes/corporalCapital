var i = 100;

number = function(type) {
    if (type === 'random') {
        number = Math.round((Math.random() * 100000000));
    } else {
        i++;
        number = i;
    };
    return number;
};

module.exports = number;