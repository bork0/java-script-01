function solveQuadrEq(a,b,c) {
    const d = findD(a,b,c);
    if (d>0) {
        const x1 = ((-b)+Math.sqrt(d))/(2*a);
        const x2 = ((-b)-Math.sqrt(d))/(2*a);
        return 'x1 = ' + x1 + '; x2 = ' + x2;
    }   else if (d===0) {
        const x = -b/(2*a);
        return 'x = ' + x;
    }   else if (d<0) {
        return 'NO POSSIBLE SOLUTION';
    }
}   


function findD(a,b,c) {
    const d = Math.pow(b,2)-4*a*c;
    return d;
}


const a = parseFloat(prompt('Enter quadratic coefficient A'));
const b = parseFloat(prompt('Enter linear coefficient B'));
const c = parseFloat(prompt('Enter free term C'));
const result = solveQuadrEq(a,b,c);
alert(result);
