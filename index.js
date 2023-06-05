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
// declare a variable to change the gradient and check if a specific gradient is set on the body
let body =  document.body.style.background;
// create the color change function 
const colorChange = () => {
    // declare a variable to assign the current time as it progressed from the time a client clicked on the page
    // this can be changed to match the desired time interval 
    const currentTime = new Date().getSeconds();
    // if statements to check the currentTime variable that can be changed into a variable with the difference of currentTime and time 
    // then using seconds to showcase the gradient changed over time faster
    (currentTime >=15 && currentTime <= 30) ? document.body.style.background = gradient.morning :
    (currentTime > 30 && currentTime < 45) ? document.body.style.background = gradient.afternoon :
    document.body.style.background = gradient.night
    // requestAnimationFrame used to check time changed as well as optimize animation of color change 
    requestAnimationFrame(colorChange);
};
// call the colorChange function using requestAnimationFrame
requestAnimationFrame(colorChange);