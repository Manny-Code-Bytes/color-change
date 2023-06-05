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
// create an object called gradients to use to set the gradient on different times
// add or remove colors and add degrees to change gradient appearance
const gradient = {
    morning: `linear-gradient(${color1}, ${color2}, ${color3})`,
    afternoon: `linear-gradient(${color4}, ${color5}, ${color6})`,
    night: `linear-gradient(${color7}, ${color8}, ${color9})`
}
// declare a variable to assign the time at desired intervals at which the client first comes to the page
// this can be changed to minutes, hours, or any other desired time interval to change the gradients
let time = new Date().getSeconds();
