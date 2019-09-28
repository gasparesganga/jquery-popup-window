# jQuery PopupWindow

The ultimate popup/dialog/modal jQuery plugin

---

Documentation and examples at http://gasparesganga.com/labs/jquery-popup-window/


##### GitHub

View project on [GitHub][1] or download the latest [release][2].

##### npm

`npm install gasparesganga-jquery-popup-window`

##### Bower

`bower install gasparesganga-jquery-popup-window`


#### CDN:
https://cdn.jsdelivr.net/gh/gasparesganga/jquery-popup-window@latest/src/popupwindow.min.js
https://cdn.jsdelivr.net/gh/gasparesganga/jquery-popup-window@latest/src/popupwindow.min.css

## Features

* All the capabilities _(maximizing, minimizing, modal/non-modal, etc.)_ you would expect from a regular window and more _(collapsing, keepInViewport, animations, etc.)_
* Exhaustive set of [Actions][3] to control it
* Exhaustive set [Events][4] to interact with it
* Fully CSS customizable
* Low footprint and great performances

## Methods

This is the main method. It supports different _actions_ and provides the interaction with the PopupWindow. See the [Actions][3] section for more details.

Changes the default `options` for all the PopupWindow [initialized][5] in the future.

Changes the position of the _minimized area_ in the browser's window where all the PopupWindows are minimized. The `options` object can contain one or both of the following properties _(the default values are shown here)_:
    
```    
{
  position    : "bottom left"   // String
  direction   : "horizontal"    // String
}
```    

For the `position` value you can use a combination of _`top`_ or _`bottom`_ for vertical placement and _`left`_ or _`right`_ for horizzontal placement  
For the `direction` value you can use either _`horizzontal`_ or _`vertical`_.  
Both of them are case insensitive. Words' order doesn't matter, as well as spaces. You can shorten the words if you prefer: `top left` is the same as `tl` and `v` is the same as `vertical`.

## Actions

The **`$(selector).PopupWindow([action] [,options])`** method supports the following _actions_:

##### Init

**`$(selector).PopupWindow("init" [,options])`**  
**`$(selector).PopupWindow([options])`**  
Initializes a new PopupWindow. Optionally you can pass a some [options][6] to override the default values. The `init` string can be omitted, this is the default action. If a PopupWindow has already been initialized for the matched element, it does nothing. It is **chainable** and returns all the elements matched by `selector`.

##### Open

**`$(selector).PopupWindow("open")`**  
Opens a previously initialized and closed PopupWindow. If the PopupWindow was in _collapsed_ or _minimized_ state when it was closed, the _normal_ state will be restored. If the PopupWindow is already opened, nothing will happen. It is **chainable** and returns all the elements matched by `selector`.

##### Close

**`$(selector).PopupWindow("close")`**  
Closes an open PopupWindow. It's equivalent to a click on the _close button_ in the titlebar. If the PopupWindow is already in _closed_ state, nothing will happen. It is **chainable** and returns all the elements matched by `selector`.

##### Maximize

**`$(selector).PopupWindow("maximize")`**  
Maximizes an open PopupWindow. It's equivalent to a click on the _maximize button_ in the titlebar. Note that a _closed_, _collapsed_, _minimized_ or already _maximized_ PopupWindow can't be maximized, thus nothing will happen in these cases. It is **chainable** and returns all the elements matched by `selector`.

##### Unmaximize

**`$(selector).PopupWindow("unmaximize")`**  
Unmaximizes a maximized PopupWindow. It's equivalent to a click on the _unmaximize button_ in the titlebar. If the PopupWindow is not in _maximized_ state, nothing will happen. It is **chainable** and returns all the elements matched by `selector`.

##### Collapse

**`$(selector).PopupWindow("collapse")`**  
Collapses an open PopupWindow. It's equivalent to a click on the _collapse button_ in the titlebar. Note that a _closed_, _maximized_, _minimized_ or already _collapsed_ PopupWindow can't be collapsed, thus nothing will happen in these cases. It is **chainable** and returns all the elements matched by `selector`.

##### Uncollapse

**`$(selector).PopupWindow("uncollapse")`**  
Uncollapses a collapsed PopupWindow. It's equivalent to a click on the _uncollapse button_ in the titlebar. If the PopupWindow is not in _collapsed_ state, nothing will happen. It is **chainable** and returns all the elements matched by `selector`.

##### Minimize

**`$(selector).PopupWindow("minimize")`**  
Minimizes an open PopupWindow. It's equivalent to a click on the _minimize button_ in the titlebar. Note that a _closed_, _collapsed_ or already _minimized_ PopupWindow can't be minimized, thus nothing will happen in these cases. If the PopupWindow is _maximized_, it will be restored to its normal state before minimizing. It is **chainable** and returns all the elements matched by `selector`.

##### Unminimize

**`$(selector).PopupWindow("unminimize")`**  
Unminimizes a minimized PopupWindow. It's equivalent to a click on the _unminimize button_ in the titlebar. If the PopupWindow is not in _minimized_ state, nothing will happen. It is **chainable** and returns all the elements matched by `selector`.

##### GetPosition

**`$(selector).PopupWindow("getposition")`**  
Gets the position of PopupWindow for the first element in the set of matched elements. It returns an object with numeric `top` and `left` values.
    
```    
{
  top     : numeric
  left    : numeric
}
``` 

##### SetPosition

**`$(selector).PopupWindow("setposition", position)`**  
Sets the position of PopupWindow for all the elements in the set of matched elements. It is **chainable** and returns all the elements matched by `selector`. You can pass any _(or all)_ of the following values using the `position` parameter:
    
```    
position : {
  top             : numeric, optional  // Set PopupWindow's top position 
  left            : numeric, optional  // Set PopupWindow's left position
  animationTime   : numeric, optional  // Overrides PopupWindow's animationTime for this call
}
``` 

##### GetSize

**`$(selector).PopupWindow("getsize")`**  
Gets the size of PopupWindow for the first element in the set of matched elements. It returns an object with numeric `width` and `height` values.
    
```    
{
    width   : numeric
    height  : numeric
}
```    

##### SetSize

**`$(selector).PopupWindow("setsize", size)`**  
Sets the size of PopupWindow for all the elements in the set of matched elements. It is **chainable** and returns all the elements matched by `selector`. You can pass any _(or all)_ of the following values using the `size` parameter:
    
```
size : {
  width           : numeric, optional  // Set PopupWindow's width
  height          : numeric, optional  // Set PopupWindow's height
  animationTime   : numeric, optional  // Overrides PopupWindow's animationTime for this call
}
```
    

##### GetState

**`$(selector).PopupWindow("getstate")`**  
Gets the state of PopupWindow for the first element in the set of matched elements. It returns `undefined` if PopupWindow has not been initialized on the element, or a string representing its state: `normal`, `closed`, `collapsed`, `minimized` or `maximized`.

##### SetState

**`$(selector).PopupWindow("setstate", state)`**  
Sets the state of PopupWindow for all the elements in the set of matched elements. There's no difference between using this action or the corresponding specific ones _(ie. `$(selector).PopupWindow("setstate", "collapsed")` is the same as `$(selector).PopupWindow("collapse")`)_. It is **chainable** and returns all the elements matched by `selector`. You must pass a string using the `state` parameter:
    
```    
state   : string    // "normal", "closed", "maximized", "unmaximized", "collapsed", "uncollapsed", "minimized", "unminimized"
```    

##### SetTitle

**`$(selector).PopupWindow("settitle", title)`**  
Sets the title in the _titlebar_ of PopupWindow for all the elements in the set of matched elements. It is **chainable** and returns all the elements matched by `selector`. You must pass a string using the `title` parameter.

##### StatusBar

**`$(selector).PopupWindow("statusbar", content)`**  
Sets the content in the _status bar_ of PopupWindow for all the elements in the set of matched elements. It is **chainable** and returns all the elements matched by `selector`. You cas pass a string or even a DOM element using the `content` parameter.

##### Destroy

**`$(selector).PopupWindow("destroy")`**  
Removes a PopupWindow, restoring the content to its original parent. It is **chainable** and returns all the elements matched by `selector`.

## Options and defaults values
    
```
{    
  title           : "Popup Window"    // String
  modal           : true              // Boolean
  autoOpen        : true              // Boolean
  animationTime   : 300               // Integer
  customClass     : ""                // String
  
  buttons         : {
    close           : true          // Boolean
    maximize        : true          // Boolean
    collapse        : true          // Boolean
    minimize        : true          // Boolean
  }
  buttonsPosition : "right"           // String
  buttonsTexts    : {
    close           : "Close"       // String
    maximize        : "Maximize"    // String
    unmaximize      : "Restore"     // String
    minimize        : "Minimize"    // String
    unminimize      : "Show"        // String
    collapse        : "Collapse"    // String
    uncollapse      : "Expand"      // String
  }  
  
  draggable       : true              // Boolean
  nativeDrag      : false             // Boolean
  dragOpacity     : 0.6               // Numeric
  
  resizable       : true              // Boolean
  resizeOpacity   : 0.6               // Numeric
  
  statusBar       : true              // Boolean
  
  top             : "auto"            // String/Integer
  left            : "auto"            // String/Integer
  
  height          : 200               // Integer
  width           : 400               // Integer
  maxHeight       : undefined         // Integer
  maxWidth        : undefined         // Integer
  minHeight       : 100               // Integer
  minWidth        : 200               // Integer
  collapsedWidth  : undefined         // Integer
  
  keepInViewport  : true              // Boolean
  mouseMoveEvents : true              // Boolean
}
```   

##### `title`

Text appearing in the PopupWindow's _titlebar_. You can change this at any time using the [setTitle action][7].

##### `modal`

Set to `true` to create a modal PopupWindow. It is possible to create other PopupWindows (modal or not) _over_ a modal one.

##### `autoOpen`

Set to `true` to trigger the [open action][8] immediately.

##### `animationTime`

This is the duration of all the animations _(collapsing, minimizing, maximizing, etc.)_ expressed in **milliseconds**.

##### `customClass`

You can specify one or more CSS classes separated by a space here. They will be appended to the PopupWindow in order to customize its appearance.

##### `buttons`

Enable/disable the corresponding button in the _titlebar_.

##### `buttonsPosition`

Controls the buttons position in the _titlebar_. I can be either `"left"` or `"right"`.

##### `buttonsTexts`

Tooltip text of the corrisponding action for the buttons in the _titlebar_.

##### `draggable`

Set to `true` to allow the users to move the PopupWindow around by clicking and dragging the _titlebar_.

##### `nativeDrag`

Set to `true` to allow dragging using browser native API (Smooth drags)

##### `dragOpacity`

Opacity of the PopupWindow during the dragging.

##### `resizable`

Set to `true` to allow the users to resize the PopupWindow by its borders and the handle placed in the right corner of the _status bar_.

##### `resizeOpacity`

Opacity of the PopupWindow during the resizing.

##### `statusBar`

Set to `true` to display a _status bar_ at the bottom of the PopupWindow. You can set the text/contents of the _status bar_ using the [statusBar action][9].

##### `top`

Starting top position of the PopupWindow, expressed in **pixels**. Use the string `"auto"` to display the PopupWindow centered in the viewport.

##### `left`

Starting left position of the PopupWindow, expressed in **pixels**. Use the string `"auto"` to display the PopupWindow centered in the viewport.

##### `height`

Initial height of the PopupWindow, expressed in **pixels**.

##### `width`

Initial width of the PopupWindow, expressed in **pixels**.

##### `maxHeight`

If set, it forces the maximum height of the PopupWindow to this value. Expressed in **pixels**.

##### `maxWidth`

If set, it forces the maximum width of the PopupWindow to this value. Expressed in **pixels**.

##### `minHeight`

Forces the minimum height of the PopupWindow to this value. Expressed in **pixels**.

##### `minWidth`

Forces the minimum width of the PopupWindow to this value. Expressed in **pixels**.

##### `collapsedWidth`

If set, forces the width of the PopupWindow when it is in _collapsed_ status, expressed in **pixels**.

##### `keepInViewport`

Set to `true` to prevent the PopupWindow to overflow the viewport. Also, if the browser's window is resized the PopupWindow will be moved accordingly.

##### `mouseMoveEvents`

Set to `true` to fire [move][10] and [rezize][11] events while the mouse pointer is moving _(`mousemove` event)_, or set to `false` to fire the events on the `mouseup` event.

## Events

All the events are fired **after** something has happened and the corresponding animation is completed. The only exceptions are `move.popupwindow` and `resize.popupwindow` events, which can be fired continuously depending on the [mouseMoveEvents][12] option.  
The namespace `popupwindow` is used for all the events fired by PopupWindow.

#### Open

**`$(selector).on("open.popupwindow", handler)`**  
Fired when a PopupWindow is opened. No additional parameters are passed to the `handler` function.

#### Close

**`$(selector).on("close.popupwindow", handler)`**  
Fired when a PopupWindow is closed. No additional parameters are passed to the `handler` function.

#### Collapse

**`$(selector).on("collapse.popupwindow", handler)`**  
Fired when a PopupWindow is collapsed. No additional parameters are passed to the `handler` function.

#### Uncollapse

**`$(selector).on("uncollapse.popupwindow", handler)`**  
Fired when a PopupWindow is uncollapsed. No additional parameters are passed to the `handler` function.

#### Minimize

**`$(selector).on("minimize.popupwindow", handler)`**  
Fired when a PopupWindow is minimized. No additional parameters are passed to the `handler` function.

#### Unminimize

**`$(selector).on("unminimize.popupwindow", handler)`**  
Fired when a PopupWindow is unminimized. No additional parameters are passed to the `handler` function.

#### Maximize

**`$(selector).on("maximize.popupwindow", handler)`**  
Fired when a PopupWindow is maximized. No additional parameters are passed to the `handler` function.

#### Unmaximize

**`$(selector).on("unmaximize.popupwindow", handler)`**  
Fired when a PopupWindow is unmaximized. No additional parameters are passed to the `handler` function.

#### Move

**`$(selector).on("move.popupwindow", handler)`**  
Fired when a PopupWindow is moved. Additional parameter `position` is passed to the `handler` function.

#### Resize

**`$(selector).on("resize.popupwindow", handler)`**  
Fired when a PopupWindow is resized. Additional parameter `size` is passed to the `handler` function.

#### Destroy

**`$(selector).on("destroy.popupwindow", handler)`**  
Fired when a PopupWindow is destroyed. No additional parameters are passed to the `handler` function.

## Customization

The default CSS file is simple and well commented. It exposes all the customizable classes and is intended especially for styling _(the required CSS for layout and core is provided by the code internally)_.  
You can edit the main CSS file, create a new custom one using it as a template, or override some classes/styles using an external CSS file _(in this case remember to load your CSS file **after** the default one)_.  
In addition to that, you can use the [customClass][13] option to apply custom styles even to a single PopupWindow, having many windows styled differently. See [Example 3][14].

## Examples

### Example 1 - Complete playground

This sample code shows all the actions available. Use the buttons below to test them and see the logged events. Note how the _implicit actions_ performed interacting directly with the PopupWindow produce the same effects and events.
    
```    
// Log all Events
$("#example1").on(  
  "open.popupwindow      close.popupwindow      " +
  "collapse.popupwindow  uncollapse.popupwindow " +
  "minimize.popupwindow  unminimize.popupwindow " +
  "maximize.popupwindow  unmaximize.popupwindow " +
  "move.popupwindow      resize.popupwindow     " +
  "destroy.popupwindow", 
  function(event, data){
    console.log(event);
    console.log(data);
  }
);

// Buttons to test Actions
$("#example1_init").on("click", function(event){
  if ($("#example1").PopupWindow("getState")) $("#example1").PopupWindow("destroy");
  $("#example1").PopupWindow({
      title   : "Example 1 - Complete playground",
      modal   : false,
      // .....
      // .....
  });
});
$("#example1_destroy").on("click", function(event){
  $("#example1").PopupWindow("destroy");
});

$("#example1_open").on("click", function(event){
  $("#example1").PopupWindow("open");
});
$("#example1_close").on("click", function(event){
  $("#example1").PopupWindow("close");
});

$("#example1_collapse").on("click", function(event){
  $("#example1").PopupWindow("collapse");
});
$("#example1_uncollapse").on("click", function(event){
  $("#example1").PopupWindow("uncollapse");
});

$("#example1_minimize").on("click", function(event){
  $("#example1").PopupWindow("minimize");
});
$("#example1_unminimize").on("click", function(event){
    $("#example1").PopupWindow("unminimize");
});

$("#example1_maximize").on("click", function(event){
  $("#example1").PopupWindow("maximize");
});
$("#example1_unmaximize").on("click", function(event){
  $("#example1").PopupWindow("unmaximize");
});

$("#example1_getposition").on("click", function(event){
  console.log($("#example1").PopupWindow("getPosition"));
});
$("#example1_setposition").on("click", function(event){
  $("#example1").PopupWindow("setPosition", {
    top             : 100,
    left            : 100,
    animationTime   : 500
  });
});

$("#example1_getsize").on("click", function(event){
  console.log($("#example1").PopupWindow("getSize"));
});

$("#example1_setsize").on("click", function(event){
  $("#example1").PopupWindow("setSize", {
    width           : 500,
    height          : 300,
    animationTime   : 100
  });
});

$("#example1_getstate").on("click", function(event){
  console.log($("#example1").PopupWindow("getState"));
});
$("#example1_setstate").on("click", function(event){
  $("#example1").PopupWindow("setState", "normal");
});

$("#example1_settitle").on("click", function(event){
  $("#example1").PopupWindow("setTitle", "New Title");
});

$("#example1_statusbar").on("click", function(event){
  $("#example1").PopupWindow("statusbar", "Some text...");
});

$("#example1_minimizedarea").on("click", function(event){
  $.PopupWindowMinimizedArea({
    position    : "top left",
    direction   : "vertical"
  });
});
```


### Example 2 - Modal window

A **modal** PopupWindow will be displayed over the page, but you can still open more PopupWindows on top of it.
    
 ```   
$("#example2_first").PopupWindow({
  title       : "Example 2 - Modal window",
  modal       : true,
  statusBar   : false,
  height      : 250,
  width       : 400,
  top         : 100,
  left        : 300
});
$("#example2_second").PopupWindow({
  title       : "Other window",
  modal       : false,
  statusBar   : false,
  top         : 400,
  left        : 100
});
$("#example2_third").PopupWindow({
  title       : "Yet another one",
  modal       : false,
  statusBar   : false,
  top         : 400,
  left        : 600
});

// Close the other PopupWindows when the modal one is closed
$("#example2_first").on("close.popupwindow", function(event){
    $("#example2_second").PopupWindow("close");
    $("#example2_third").PopupWindow("close");
});
```

### Example 3 - Custom style

If you want to apply a custom style just to a specific PopupWindow without overriding the default style for all the others, the `customClass` option comes in handy. Here is an example using the `buttonsPosition` option as well:
    
```    
$("#example3_default").PopupWindow({
  title       : "Example 3 - Default Style",
  modal       : false,
  buttons     : {
    collapse  : false
  },
  left        : 100
});
$("#example3_custom").PopupWindow({
  title           : "Example 3 - Custom Style",
  modal           : false,
  customClass     : "custom_style",
  buttons         : {
    collapse      : false
  },
  buttonsPosition : "left",
  left            : 600
});
```   

And here is some CSS for this `.custom_style` class:
    
```    
/* Content's background */
.custom_style .popupwindow_content {
  background-color    : #f0f0f0;
}

/* Center Titlebar text */
.custom_style .popupwindow_titlebar_text {
  padding-left    : 8px;
}

/* Round buttons */
.custom_style .popupwindow_titlebar_button {
  width           : 18px;
  height          : 18px;
  margin-left     : 4px;
  border          : none;
  border-radius   : 50%;
}
/* Button's icon on hover */
.custom_style .popupwindow_titlebar_button svg {
  display : none; 
}
.custom_style .popupwindow_titlebar_button:hover svg {
  display : block; 
}

/* Close button */
.custom_style .popupwindow_titlebar_button_close {
  background-color    : #d03020;
}
.custom_style .popupwindow_titlebar_button_close:hover {
  background-color    : #ca3020;
  stroke              : #803020;
}
.custom_style .popupwindow_titlebar_button_close:active {
  background-color    : #c03020;
}

/* Maximize button */   
.custom_style .popupwindow_titlebar_button_maximize {
  background-color    : #ffbb66;
}
.custom_style .popupwindow_titlebar_button_maximize:hover {
  background-color    : #ee9922;
  stroke              : #885511;
}
.custom_style .popupwindow_titlebar_button_maximize:active {
  background-color    : #dd8811;
}

/* Minimize button */
.custom_style .popupwindow_titlebar_button_minimize {
  background-color    : #99b055;
}
.custom_style .popupwindow_titlebar_button_minimize:hover {
  background-color    : #77a055;
  stroke              : #223311;
}
.custom_style .popupwindow_titlebar_button_minimize:active {
  background-color    : #559044;
}
```        


## History

_13 August 2016_ \- [Version 1.0.3][15]  
_5 August 2016_ \- [Version 1.0.2][16]  
_29 July 2016_ \- [Version 1.0.1][17]  
_27 July 2016_ \- [Version 1.0.0][17]


[1]: https://github.com/gasparesganga/jquery-popup-window
[2]: https://github.com/gasparesganga/jquery-popup-window/releases/latest
[3]: https://gasparesganga.com#actions
[4]: https://gasparesganga.com#events
[5]: https://gasparesganga.com#init
[6]: https://gasparesganga.com#options-and-defaults-values
[7]: https://gasparesganga.com#settitle
[8]: https://gasparesganga.com#open
[9]: https://gasparesganga.com#statusbar
[10]: https://gasparesganga.com#move
[11]: https://gasparesganga.com#rezize
[12]: https://gasparesganga.com#mousemoveevents
[13]: https://gasparesganga.com#customclass
[14]: https://gasparesganga.com#example-3---custom-style
[15]: https://gasparesganga.com/posts/jquery-popup-window-1.0.3/
[16]: https://gasparesganga.com/posts/jquery-popup-window-1.0.2/
[17]: https://gasparesganga.com/posts/jquery-popup-window-release/

  
