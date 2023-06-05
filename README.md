The color-change is a JavaScript project that dynamically changes the background gradient of the body element to mimic the colors of the sky during specific times of the day. It utilizes a carefully chosen color palette to create a visually appealing transition between morning, afternoon, and night.
Features

    Automatic Gradient Transition: The project utilizes the requestAnimationFrame function to smoothly transition between different sky gradients based on the current time.
    Time-based Color Selection: The gradients are selected based on the current time, with specific gradients assigned to morning, afternoon, and night.
    Customizable Color Palette: The color palette used for the gradients can be easily modified to match personal preferences or specific design requirements.

Installation

    Clone the repository or download the source code.
    Copy the necessary CSS and JavaScript files into your project directory.
    Link the CSS file in the HTML file:

    html

<link rel="stylesheet" href="path/to/sky-gradient-changer.css">

Include the JavaScript file at the end of the HTML file:

html

    <script src="path/to/sky-gradient-changer.js"></script>

Usage

To use the Sky Gradient Changer in your project, follow these steps:

    Make sure the HTML file includes an element with the body tag, like <body>.
    Customize the color palette in the sky-gradient-changer.js file by modifying the defined colors for morning, afternoon, and night gradients.
    Open the HTML file in a web browser.

The background gradient of the body element will automatically update based on the current time, mimicking the colors of the sky during morning, afternoon, and night.
Customization

You can easily customize the Sky Gradient Changer project to match your specific requirements:

    Color Palette: Modify the color values in the sky-gradient-changer.js file to create a custom color palette that matches your desired sky colors.
    Time Ranges: Adjust the time ranges in the JavaScript code if you want to change the specific intervals associated with morning, afternoon, and night.
