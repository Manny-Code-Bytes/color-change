// function to get custom css variables as colors to use for gradient
const getColor = (color) => {
    return getComputedStyle(document.documentElement).getPropertyValue(color);
}