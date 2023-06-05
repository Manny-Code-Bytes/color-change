// function to get custom css variables as color to use for gradient
const getColor = (color) => {
    return getComputedStyle(document.documentElement).getPropertyValue(color);
}
// get all colors from css file
// can add or remove colors to use 
const color1 = getColor('--c1');
const color2 = getColor('--c2');
const color3 = getColor('--c3');
const color4 = getColor('--c4');
const color5 = getColor('--c5');
const color6 = getColor('--c6');
const color7 = getColor('--c7');
const color8 = getColor('--c8');
const color9 = getColor('--c9');