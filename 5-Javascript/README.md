# JS/DOM exercise

Practice Javascript in a real environment!

## Background & Objectives

In this challenge, you will build a 1-page website and use some **libraries** to animate it 😉

Refresher:

- JavaScript was designed to live in the browser. As such, it is a very handy language to interact with the DOM (Domain Object Model) and all its elements: your **titles**, your **buttons**.

- JavaScript allows to detect **events** on the DOM: a click, a scroll...

- JavaScript can dynamically select, add, remove **classes** or **ids** in your HTML markup!

## Step 1

Always start with the markup.

### HTML

1. Create a simple HTML page with a `head` and a `body`
2. In your `head`, link up your `style.css` file and add some `meta tags`
3. In your `body`, create 3 `sections` 👉 [There's an HTML tag for sections](https://www.w3schools.com/tags/tag_section.asp)
4. Each section should contain an `h1` or `h2` and some `p`

**Do it now!**

[Click here to reveal the solution](solution-1.html)

## Step 2

A bit of styling in your `style.css`

### Custom CSS

1. You want each `section` to be quite tall (in CSS, most elements can set a ***height***), so that users can scroll in the page and discover each part one after another
2. Feel free to center your content and add colors!

### CSS Library

Animate.css is a famous library with tons of animations...

1. Download the [library](https://daneden.github.io/animate.css/) in your project files
2. Link it in your `head` with `<link rel="stylesheet" href="css/animate.css">`
3. Watch out to set the right file path ;)
4. Test the library! add the classes `animated infinite pulse` to any element, and change `pulse` to another animation name...

## Step 3

Let's animate your page elements ***on click !***

Your JavaScript goes inside a `<script>` tag. Better, you can write it in a separate `FILE.JS` and import it in your HTML page with `<script src="FILE.JS"></script>`.

Reminder: Javascript always goes just before the `</body>` tag.

### HTML

1. Inject a `<script>` tag that works! 
2. Give **ids** (`id='idname'`) to your HTML elements

### Javascript

1. Use a `console.log('test message')` or `window.alert('test')` to make sure your JS file works...
2. Add **event listeners** in JavaScript to detect the `click` events on your **ids** (👉 [eventlistener documentation](https://www.w3schools.com/js/js_htmldom_eventlistener.asp))
3. Test your event listeners with this function:

```
function myFunction() {
    alert ("Hello World!");
}
```
4. Write a new `function` named **`animate()`** which will add new CSS classes to the element clicked. In particular, you want to dynamically add the classes `animated`, `infinite` and `pulse`. (👉[classList documentation](https://www.w3schools.com/jsref/prop_element_classlist.asp))

**Do it now!**

[Click here to reveal the solution](solution-2.js)

## Step 4

Setup the **WOW.js** library to get animations ***on scroll !***

👉[Follow WOW instructions here](http://mynameismatthieu.com/WOW/docs.html)



### Happy Javascripting!
