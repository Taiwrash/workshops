---
name: "Magic Square with Javascript"
description: "Magic square is a web page that behaves like a rubik's cube"
author: "@Taiwrash"
---

In one time or the other we've heard or see a rubik's cube. We may thought of how to have a webpage that behaves like it. In this workshop you will see how simple it is to manipulate the `DOM` and use style to build great stuffs.

At the end of this workshop you will be able to make a _MAGIC SQUARE APP_. An application that behaves like a rubik's cube as shown below.

[!page](landing.gif)

The live demo is available [here](https://google.com) and the full code [here](https://google.com)

[!page](example.gif)

## Set Up

The basic and prerequisite for this workshop is HTML, CSS and Javascript. Never mind if you are not yet comfortable with these languages, I will explain everything to the best way you can understand!

## Development Environment

This workshop will be using [repl.it](https://repl.it) as the development environment. [Click Here](https://repl.it) to signup, if you don't have an account and create a coding environment to follow along on this workshop.

[!coding_page](repl.png)

## Mark Up Section (HTML Set Up)

Now that your coding environment is ready, what next is to start writing the codes. Let's start with the `html` part, first create a `div` with the class attribute of `container` feel free to name the attribute as you wish and make sure it is placed inside the body tag of your repl page.

```html
<div class="container"></div>
```

The above snippet serve as container for all the nine boxes that will represent the faces of all our squares. Now, we need to put the nine `divs` inside the div tag above with the first `div` having a class attribute of `master` and the text of `TAP ME`.

```html
<div class="master">TAP ME</div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
```

Remember, the above nine `divs` represent the squares we will be interacting with and your final code should look like this:

```html
<div class="container">
  <div class="master">TAP ME</div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

_This is all for our html code and we move_

## The Style Part

Moving on, we will be setting the style (colors, textures, tranforms, shadow etc) for everything in our app as the required by each app.

[!style](style.png)

**_Note_ Every code in this part are to be in the `style.css` file.**

To starts with, we need to set the color of the background of our app.

```css
body {
  background-color: gainsboro;
}
```

Since we need to display our square in a `matrix of 3 x 3` that is, we are creating three rows and three columns for the squares as the our work so far only display the background colour we set at the top with our text `TAP ME` and nothing else.

Now we have to make some visualisation to our app and we will be implementing the `CSS GRID`. To learn more about css grid, you can check out this [`css grid cheat sheet`](cssgrid.com).

Add the below snippets, to see css grid in action:

```css
.container {
  display: grid;
  justify-content: center;
  grid-template-columns: 60px 60px 60px;
  grid-template-rows: 60px 60px 60px;
  margin-top: 50px;
  gap: 30px;
}
```

Remember, all the nine squares are in a container. The CSS snippet above will authomatically create for us a `60px by 60px` square for us which display in a 3 by 3 matrix format which has a gap of `30px` between each other with the help of the css property `gap`.

OH yes! we are getting there. Let's display each square and see wonderful we've been doin so far. By adding the below CSS snippet, you will be excited to see the great work you have been doing so far.

```css
.container div {
  background-color: purple;
  border-radius: 5px;
  box-shadow: 2px 6px red;
  transition: 1s ease-in;
}
```

Each square is expected to have a background colour of `green` and little round edge with the help of `border-radius` and also nice big shadow of `blue` colour with a little `transition` animation.
[!result](result.png)

[!Excitement](excitement.gif)

Now we are almost done! But let's decorate the text in the first square a little bit.

```css
.master {
  font-size: 14px;
  color: white;
  text-align: center;
  text-shadow: 1px 2px 4px black;
  padding: 1px;
  font-family: "Roboto", sans-serif;
  display: grid;
  align-items: center;
}
```

We just make the text a little bit fit into the box, setting out its font size, type and colour. A little shadow was added to make it stands out as we start performing our magic. grid property enabled the `align-items` property which gives us the ability to set the text verically centered in the square.

[!WOW](wow.gif)

_You can't belief we are done with the css parts of our workshop it remain one simple part_

## Javascript part

This is the most exciting and crucial part of our workshop and we are starting with the fun part.

[!fun](fun.gif)

**_Note_ Every Snippets in this part are to be in the `script.js` file.**

First of, let's create a variable to store the values of our mark ups. We will only need three variables as global, the one that will hold all our squares, another one to hold the first square as it is the master of our magic and the one to hold the body will be the third global variable. Feel free to name them the way you like.

```js
const master = document.querySelector(".master");
const squares = document.querySelectorAll(".container div");
const body = document.querySelector("body");
```

The `master variable` help us hold the first square, so that we can have access on it in the `DOM` like wise the `squares` for every square and the `body` for the background of our app.

Next is to create a function for every style we intend putting on our squares while the magic is in place. As per this workshop we will be creating three styles:

1.  Transformation styles (rotate)
2.  Colour styles
3.  Shadow styles

As usual, sky is your limit as regards the number of styles you can add, so feel free to add as many styles as possible.

Now, let's start with the first style which is `Transformation style`. In this we e=will be dealing with the rotation methods of our squares. I will be creating a function to carry this out as shown below:

```js
const transformSquares = () => {
  const tranformValues = [
    "rotate(30deg)",
    "rotate(45deg)",
    "rotate(120deg)",
    "rotate(60deg)",
  ];
  return tranformValues[Math.floor(Math.random() * tranformValues.length)];
};
```

Let's break down this and see what is going on. First we are declaring an arrow function which is a new way of creating function in ECMAScript (ES6) of javascript. The function was named `transformSquares` and inside the fuction we created an array of CSS values to be applied to the squares during the magic. Remember `rotate()` is a CSS value for `transform` property and you will get this better later in the workshop. Finally, the function is returning random values from our array of values created in the function.

Next is to create the remaining funtions for other styles for our magic!

```js
const bgColor = () => {
  let backgroundColors = ["yellow", "pink", "blue", "green"];
  return backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
};
```

This function is returning a random colours from the array of colour created inside the `bgColor` function.

And lastly, the fuction to add the shadows during magic. We will be creating an array of shadow values in the funtion.

```js
const boxShadows = () => {
  const shadows = ["2px 6px red", "2px 6px white", "2px 6px orange"];
  return shadows[Math.floor(Math.random() * shadows.length)];
};
```

The above return a random shadow values.

[great!](great.gif)

Let's put the functionalities together, we do this by adding an `addEventListener` to the master square as shown below:

```js
master.addEventListener("click", () => {
  squares.forEach((item) => {
    item.style.backgroundColor = bgColor();
    item.style.transform = transformSquares();
    item.style.boxShadow = boxShadows();
  });
});
```

The `addEventListener` enable a click event on the master div and `querySelectorAll` used to bring the squares to the DOM which return an array. This gives us an ability to perform an `Higher Order Function` (HOF) on the square array return by the querySelectorAll which is the `item` variable of the `forEach` function which represent every child of the element of the div with the class of container.

[!Amazing](amazing.gif)
YAY! Congratulations you just built a Magic Square app. Test it by clicking on the master div.

[!final](final.gif)

This is just the beginning of the style you can apply by manipulate the DOM. I will be glad to see more of your works using what you learnt in this workshop

## Other Hacks Examples

Check hacks by other people to see more

[Magic Square with Magic Background](https://taiwrash.github.io/workshops/magic-square/sample.html)

[Hacks on Scrimba](https://scrimba.com)

[Hacks on Scrimba](https://scrimba.com)

## More Resources

[querySelector]()
[css transform]()
[forEach HOF]()
