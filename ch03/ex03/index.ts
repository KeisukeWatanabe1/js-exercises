export function isEqual(a: number, b: number) {
    if (a === b) {
        return true;
    } else {
        let diff: number = Math.abs(a - b);
        return (diff < 10 ** -10) ? true : false;
    } 
}