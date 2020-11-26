---
name: "Magic Square with Javascript"
description: "Magic square is a web page that behaves like a Rubik's Cube"
author: "@Taiwrash"
---
![page](https://cloud-2ktbvz94x.vercel.app/5images.png)

At one time or the other, we would have heard or seen a Rubik's cube. We might as well have thought of how to have a webpage that behaves like it. In this workshop you will see how simple it is to manipulate the `DOM` and use style to build great stuffs.

At the end of this workshop you will be able to make a _MAGIC SQUARE APP_. An application that behaves like a rubik's cube as shown below.


The live demo is available [here](https://magic-square.taiwrash.repl.co) and the full code [here](https://repl.it/@Taiwrash/magic-square)

![page](https://cloud-esohbbw0s.vercel.app/0example.gif)

## Set Up

The basic prerequisite for this workshop is the knowledge of HTML, CSS and Javascript. Never mind if you are not yet comfortable with these languages, I will simplify everything so that you can understand!

## Development Environment

This workshop will be using [repl.it](https://repl.it) as the development environment. [Click Here](https://repl.it) to signup, if you don't have an account yet, and create a coding environment to follow this workshop.


![Repl.it](https://cloud-be2z8hzbo.vercel.app/0image.png)

## Mark Up Section (HTML Set Up)

Now that your coding environment is ready, the next step is to start writing the codes. Let us start with the `html` part. First, create a `div` with the class attribute of `container`. Feel free to name the attribute as you wish, and make sure it is placed inside the body tag of your repl page.

```html
<div class="container"></div>
```

The above snippet serves as container for all the nine squares that will represent the faces of our box. Now, we need to put the nine `divs` inside the div tag above with the first `div` having a class attribute of `master` and the text `TAP ME`.

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

Remember, the nine `divs` above represent the squares we will be interacting with and they will be showing green colour at the end of the CSS section below and your final code should look like this:

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

_That is all for our html code and we move on to the next part_

## The Style Part

Moving on, we will be setting the style (colors, textures, tranforms, shadow etc) for everything in our app as required by the app.


**_Note_ All the codes in this part are to be in the `style.css` file.**

To start with, we need to set the color of the background of our app.

```css
body {
  background-color: gainsboro;
}
```

Since we need to display our squares in a `3 x 3 matrix`, we will be creating three rows and three columns for the squares, as our work so far only displays the background colour we set at the top with our text `TAP ME` and nothing else.

Now we have to include some visualisations to our app and we will be implementing the `CSS GRID`. To learn more about CSS grid, you can check out this [`css grid cheat sheet`](https://www.codecademy.com/learn/learn-css/modules/learn-css-grid/cheatsheet).

Add the snippets below to see css grid in action:

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

Remember, all the nine squares are in a container. The CSS snippet above will authomatically create a `60px by 60px` square for us which displays in a 3 by 3 matrix format, with a gap of `30px` between each other with the help of the css property `gap`.

![grid](https://cloud-1zwgmmkbo.vercel.app/0images__6_.jpeg)

### Explanations!.
As mentioned earlier, This workshop will be implementing the CSS layout module called CSS grid which uses rows and columns to simplify or eradicate the usage of float and position properties in web page design. Bqelow is the simple and easy to grab explanation!
   1. CSS grid always consist of parent element with one or more child element. In this workshop div tag with the class attribute of container serves as the parent element with nine div which is refers to as children in CSS grid terms.
   2. To enable CSS grid, you need to use the CSS property `display` and set it value to `grid` with this CSS grid module is ready to go.
   3. After display property set to grid, every element inside the parent element is refers to as CSS items which can be control in rows and columns. Vertical lines are columns while the horizontal lines are rows.
   4. The space between two grid items is `gap` or `grid-gap`. Taking closer look at the CSS snippet above, you can see how the `gap` was set to `30px`
   5. `grid-template-columns`: this a property that defines the number of columns in the grid layout. It values can be in `px, % em auto` and other relatives CSS values and it is repeated in the numberb of columns we want as shown above.
   6. `grid-template-rows`: behave same way as grid-template-columns but in rows that is in horizontal grid layout
   7. `justify-content`: This align grid items horizontally as the value indicates while `align-items` also justify and align the grid items vertically.


OH yes! we are getting there. Let's display each square and see the wonderful work we've been doing so far. By adding the following CSS snippet, you will be happy to see the great work you have been doing so far.

```css
.container div {
  background-color: green;
  border-radius: 5px;
  box-shadow: 2px 6px blue;
  transition: 1s ease-in;
}
```

### Explanation!
   - Paying full attention to the above code `.container div` because we want to select All the docs (grid items) inside the container which will later represent our squares 
   - Each square background will be getting background colour of green as indicated above.
   - `border-radius` help in getting a good and an awesome rounded corner of an element and when circle is intended, the element will be set to the same width and height and`border-radius` of `50%` will give a nice looking circle.
   - This gives a shadow below our object, if we intend to add a blur to the shadow we do that by including the fourth value in the list of the value the declaring the colour but we are not using the `blur` we only apply th offsets and it looking good.
   - The last property in the above is transition which is responsible for fading pattern exhibits by the square during magic. The whole transition will take 1 second with an ease-in allow to put it ease inward

Each square is expected to have a background `green` colour, a little round edge with the help of `border-radius`, and a nice big `blue` shadow with a little `transition` animation.
![result](https://cloud-esohbbw0s.vercel.app/1rresult.gif)


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

### Explanations!
  - Why styling this alone because it is the master and we need to set its text to be visible cool to read.
  - Most of the has been explained so far but you may ask why are we having display property set to grid here. It is basically to get the ability of styling the text vertically and horizontally centered. The omitted which need some attention is:
  - `text-shadow` and `box-shadow` the former are used on `text` while the later are used in boxes like docs, article, section etc.

We have just made the text fit a little bit into the box, setting out its font size, type and colour. A little shadow was added to make it stand out as we start performing our magic. The grid property enabled the `align-items` property which gives us the ability to make the text verically centered in the square.

![weldone](https://cloud-2ktbvz94x.vercel.app/2weldone.gif)

_You won't believe we are done with the css part of our workshop! It remains just one last simple part_

## Javascript part

This is the most exciting and crucial part of our workshop and we are starting with the fun part.

![fun](https://cloud-2ktbvz94x.vercel.app/3excited.gif)

**_Note_ All the Snippets in this part are to be in the `script.js` file.**

First of all, let's create a variable to store the values of our mark-ups. We will only need three global variables, the one that will hold all our squares, another one to hold the first square as it is the master of our magic, and the one to hold the body will be the third global variable. Feel free to name them the way you like.

```js
const master = document.querySelector(".master");
const squares = document.querySelectorAll(".container div");
const body = document.querySelector("body");
```

The `master` variable helps us hold the first square, so that we can have access to it in the `DOM`, the `squares` holds every square and the `body` is for the background of our app.

Next, we create a function for every style we intend to put on our squares while the magic is in place. For this workshop, we will be creating three styles:

1.  Transformation styles (rotate)
2.  Colour styles
3.  Shadow styles

As usual, the sky is your limit as regards the number of styles you can add, so feel free to add as many styles as possible.

Now, let's start with the first style which is the `Transformation style`. In this, we will be dealing with the rotation method of our squares. I will be creating a function to carry this out as shown below:

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

### Explanation!
Let's break this down and see what is going on. First, we are declaring an arrow function, which is a new way of creating functions in ECMAScript (ES6) of javascript. The function was named `transformSquares`, and we created an array of CSS values to be applied to the squares during the magic inside the fuction. Remember `rotate()` is a CSS value for the `transform` property, you will understand this better later in the workshop. Finally, the function is returning random values from our array of values created in the function.
  1. CSS values for transform always look like this `transform:rotate(320deg)`. We can see how the rotate value was placed in the CSS. Here we will be dealing with value.
  2. We need to set the value of the transform, doing this is an array created in the function
  3. To avoid the value been applied in a row or following each other then we implement`Math.random()` which return at random the values passed in, in this case transform array. We reduce the number of chances at which a single colour get returned.
  4. Return keywordvhelp state explicitly what we are planning to return or to make our function do.

  5.6 - While creating other functions, try as much as possible to use the same approach only the array we created for the transform will be changed to colour when creating a function that handles colours of our app and also shadow.
- Note: You can as much as possible add other styles as wishes to make the app more good and okay to the users.


Next is to create the remaining funtions for other styles of our magic!

```js
const bgColor = () => {
  let backgroundColors = ["yellow", "pink", "blue", "green"];
  return backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
};
```

Note the function name has been changed to bgColor and an array of colour was created and this array  will  return random colour from our colour array.

This function is returning random colours from the array of colours created inside the `bgColor` function.

And lastly, the fuction to add the shadows during the magic. We will be creating an array of shadow values in the funtion.

```js
const boxShadows = () => {
  const shadows = ["2px 6px red", "2px 6px white", "2px 6px orange"];
  return shadows[Math.floor(Math.random() * shadows.length)];
};
```

The above returns random shadow values as the transformValues and bgColor function.

![great!](https://cloud-2ktbvz94x.vercel.app/1fantastic.gif)

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

### Explanation!

Bye to code for this workshop but do you know how the snippet above works
 Let me explain myself. When`querySelectorAll is being used it's return an array. In this case of our html squares is going to be an array with 9 elements.
  1. Adding`addEventListener` to the master div to enable it to handle the click event and carry certain tasks
  2. When the master is click what we intend to happen will put in the function next to it
  3. Since we are getting an array from querySelectorAll we have the access of looping through.
  4. To make it simple we are using forEach method which return each element which is denoted by `item` above and
  5. Each items (which are the squares) will be getting the style created in our functions applied.
  6. `element.style.property = "value"` is the method of applying CSS in JavaScript that is in DOM. Element stands for the html mark up bring to Dom and the style is a JavaScript recognised CSS rules and the property as always declared in CSS and finally, values gotten from the functions above 

The `addEventListener` enables a click event on the master div and `querySelectorAll` is used to bring the squares to the DOM which returns an array. This gives us the ability to perform a `Higher Order Function` (HOF) on the square array returned by the `querySelectorAll` which is the `item` variable of the `forEach` function which represents every child of the element of the div with the class of container.

![Amazing](https://cloud-2ktbvz94x.vercel.app/4congratulations.gif)
YAY! Congratulations you just built a Magic Square app. Test it by clicking on the master div.

![final](https://cloud-esohbbw0s.vercel.app/0example.gif)

This is just the beginning of the styles you can apply by manipulating the DOM. I will be glad to see more of your works using what you have learnt in this workshop

## Other Hacks Examples

Check hacks by other people to see more

[Tile Game from Magic Square](https://vigorous-blackwell-168b39.netlify.app/)

[Magic Square with Magic Background](https://taiwrash.github.io/workshops/magic-square/sample.html)

[Hacks on color style](https://scrimba.com/scrim/cof9e4a628090e0b4dd64edf8)


## More Resources

[querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)

[CSS transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)

[forEach as HOF](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
