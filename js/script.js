function updateRange(val) {
    const output = document.querySelector('#hero__count')
    output.value = toFormat(val);
}

function updateRangeMonth(val) {
    const output = document.querySelector('#hero__month')
    output.value = val;
}

function toFormat(str){
    return str.split('').reverse().join('') 
              .match(/\d{0,3}/g).join(' ')
              .split('').reverse().join('').trim()
}