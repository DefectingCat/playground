let str = 'qwerwqaeruwieytyqwieriuywqeuriybqiwueriuqweyruiqtywceiueuwryiweuiyutr';

function fq(str) {
    let count = 0;
    // let arr = Array.from(str);
    for (let i in str) {
        for (let o in str) {
            if (str[i] === str[o]) {
                count++;
            }
        }
        if (count === 1) {
            console.log(str[i]);
        }
        count = 0;
    }
}