# Vanilla Navbar

A simple and customizable framework agnostic Navbar, maked with pure JS and CSS.

## How to?
1. [Clone](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository) this project.
2.  ``cd`` to the repository folder.
3. Type ```npm i```
4. If you want to develop, type ```npm start```. If you want to use, type ```npm build``` and get the files in dist folder.
5. Have fun :wink:


## Usage

First, build the project, get the files in dist folder and then include this files in your project:
```html
<script src="script.js"></script>
<link rel="stylesheet" type="text/css" href="style.css">
```

Now, you need insert this tag in the place you want to insert the navbar:
```html
<navbar-vanilla />
```
We can build our navbar:
```javascript
const navbar = new Navbar(navbarParameters);
```

## Parameters
#### Navbar
|Parameter|Type|Optional|Possible values|Description|
|-|-|-|-|-|
|backgroundColor|String|No|Hex color code|Background color of the navbar|
|color|String|No|Hex color code|Color of the text elements of the navbar|
|hoverColor|String|No|Hex color code|Color of the navbar elements on hover (except logos)|
|customClass|String|Yes|Any|Custom class with your custom styles|
|logos|Array|Yes|Array of Logo|Array of a logos obejcts|
|itens|Array|Yes|Array of Item|Array of a itens obejcts|
|dropDowns|Array|Yes|Array of DropDown|Array of a drop downs obejcts|
|avatars|Array|Yes|Array of Avatar|Array of a drop downs obejcts|
|customElements|Array|Yes|Array of CustomElement|Array of a customElements obejcts|
#### Logos
|Parameter|Type|Optional|Possible values|Description|
|-|-|-|-|-|
|src|-|-|-|
|event|-|-|-|
|href|-|-|-|
|position|-|-|-|
|hideOnDevice|-|-|-|
|customClass|-|-|-|
|clickEvent|-|-|-|

## Contributing
Pull requests are welcome! But for major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)