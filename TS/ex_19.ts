//quick test

// Create an enum called Browser with these three values:

// Chrome
// Firefox
// Edge

// Then create a variable that can only accept values from this enum.

// Assign Firefox to the variable and print the value.
enum Browser {
    CHROME = "chrome",
    FIREFOX = "firefox",
    EDGE = "edge"
};
const browser: Browser = Browser.FIREFOX;
console.log(browser);