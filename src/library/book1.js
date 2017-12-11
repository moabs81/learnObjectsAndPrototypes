const var1 = 'i am a constant!';

function function1() {
    console.log('i am a function');
};

function funct2(param1) {
    param1.forEach((element, index) => { console.log(index + ' - ' + element); });
};


export { var1, function1, funct2 };