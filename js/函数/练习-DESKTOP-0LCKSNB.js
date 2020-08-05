function test() {
    'use strict';
    console.log(arguments.callee);
    function adc() {
        console.log(arguments.callee);
        console.log(adc.caller);
    }
    adc();
}
test();