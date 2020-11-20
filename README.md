| Statements | Branches | Functions | Lines |
|:-:|:-:|:-:|:-:|
| ![Statements](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg "Make me better!") | ![Branches](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg "Make me better!") | ![Functions](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg "Make me better!") | ![Lines](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg "Make me better!") |

##### You can see an example [here](http://marlonemmerich.com/vanilla-navbar)

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
|navbarId|String|Yes|Any|Id of the navbar|
|logos|Array|Yes|Array of [Logo](#Logo)|Array of a logos obejcts|
|itens|Array|Yes|Array of [Item](#Item)|Array of a itens obejcts|
|dropDowns|Array|Yes|Array of [DropDown](#DropDown)|Array of a drop downs obejcts|
|avatars|Array|Yes|Array of [Avatar](#Avatar)|Array of a drop downs obejcts|
|customElements|Array|Yes|Array of [CustomElement](#CustomElement)|Array of a customElements obejcts|
#### Logo
|Parameter|Type|Optional|Possible values|Description|
|-|-|-|-|-|
|src|String|No|Any|URL to the logo image|
|clickEvent|String|Yes|Any|Event broadcast on click|
|href|String|Yes|Any|URL to redirect on click|
|position|String|No|"left", "center" or "right"|Logo alignment in navbar|
|hideOnDevice|String|Yes|"desktop" or "mobile"|Hide logo in specific device|
|customClass|String|Yes|Any|Custom class to the logo|
|idElement|String|Yes|Any|Id to the logo|
#### Item
|Parameter|Type|Optional|Possible values|Description|
|-|-|-|-|-|
|text|String|No|Any|Text to the item|
|clickEvent|String|Yes|Any|Event broadcast on click|
|href|String|Yes|Any|URL to redirect on click|
|position|String|No|"left", "center" or "right"|Item alignment in navbar|
|hideOnDevice|String|Yes|"desktop" or "mobile"|Hide item in specific device|
|customClass|String|Yes|Any|Custom class to the item|
|idElement|String|Yes|Any|Id to the item|
|forceNavbarTop|Boolean|Yes|true or false|Force or not the item in Navbar in low resolutions|
#### DropDown
|Parameter|Type|Optional|Possible values|Description|
|-|-|-|-|-|
|text|String|No|Any|Text to the item|
|clickEvent|String|Yes|Any|Event broadcast on click|
|position|String|No|"left", "center" or "right"|Item alignment in navbar|
|hideOnDevice|String|Yes|"desktop" or "mobile"|Hide item in specific device|
|customClass|String|Yes|Any|Custom class to the item|
|idElement|String|Yes|Any|Id to the item|
|forceNavbarTop|Boolean|Yes|true or false|Force or not the item in Navbar in low resolutions|
|columns|Array|No|Array of [Column](#Column)|Array of a columns objects|
|classesToPreventCloseOnClick|Array|Yes|Array of String|Array of classes to prevent close on click if dropdown is oppened|
#### Avatars
|Parameter|Type|Optional|Possible values|Description|
|-|-|-|-|-|
|src|String|No|Any|URL to the avatar image|
|clickEvent|String|Yes|Any|Event broadcast on click|
|position|String|No|"left", "center" or "right"|Item alignment in navbar|
|hideOnDevice|String|Yes|"desktop" or "mobile"|Hide item in specific device|
|customClass|String|Yes|Any|Custom class to the item|
|idElement|String|Yes|Any|Id to the item|
|forceNavbarTop|Boolean|Yes|true or false|Force or not the item in Navbar in low resolutions|
|columns|Array|Yes|Array of [Column](#Column)|Array of a columns objects|
#### customElements
|Parameter|Type|Optional|Possible values|Description|
|-|-|-|-|-|
|html|String|No|Any|Html of the custom element|
|clickEvent|String|Yes|Any|Event broadcast on click|
|position|String|No|"left", "center" or "right"|Custom element alignment in navbar|
|hideOnDevice|String|Yes|"desktop" or "mobile"|Hide custom element in specific device|
|customClass|String|Yes|Any|Custom class to the item|
|idElement|String|Yes|Any|Id to the item|
|forceNavbarTop|Boolean|Yes|true or false|Force or not the item in Navbar in low resolutions|
|columns|Array|Yes|Array of [Column](#Column)|Array of a columns objects|
#### Column
|Parameter|Type|Optional|Possible values|Description|
|-|-|-|-|-|
|html|String|No|Any|Html of the custom element|
|contentBoxes|Array|Yes|Array of [ContentBox](#ContentBox)|Array of a Dropdown Items objects|
#### ContentBox
|Parameter|Type|Optional|Possible values|Description|
|-|-|-|-|-|
|*text|String|No|Any|Text to the item|
|**items|Array|Yes|Array of [Dropdown Items](#DropdownItems)|Array of a columns objects|
|**customItems|Array|Yes|Array of [Dropdown Custom Items](#Dropdown-Custom-Items)|Array of a Dropdown Custom Items objects|
*Only used if "items" is filled

**Only one is accepted (items OR customItems)
#### Dropdown Items
|Parameter|Type|Optional|Possible values|Description|
|-|-|-|-|-|
|text|String|No|Any|Text to the dropdown item|
|idElement|String|Yes|Any|Id to the item|
|href|String|Yes|Any|URL to redirect on click|
#### Dropdown Custom Items
|Parameter|Type|Optional|Possible values|Description|
|-|-|-|-|-|
|text|String|No|Any|Text to the dropdown custom item|
|idElement|String|Yes|Any|Id to the custom item|
|href|String|Yes|Any|URL to redirect on click|
|html|String|Yes|Any|Html of the dropdown custom item|

## Complete example
```script
const navbarParameters = {
    backgroundColor: '#6a1b9a',
    hoverColor: '#54157b;',
    color: '#fffff',
    customClass: 'aaa',
    logos: [
        {
            src: 'path-to-your-logo.jpg,
            href: '/home',
            position: 'left',
            hideOnDevice: '',
            customClass: 'custom',
            clickEvent: 'test'
        },
    ],
    items: [
        {
            text: 'Home',
            href: '/',
            position: 'center',
            customClass: 'custom'
        },
        {
            text: 'About',
            href: '/about',
            position: 'center'
        },
    ],
    dropDowns: [
        {
            position: 'center',
            text: 'Dropdown',
            clickEvent: '',
            customClass: 'center',
            hideOnDevice: 'mobile',
            columns: [
                {
                    contentBoxes: [
                        {
                            customItems: [
                                {
                                    text: 'Option 1',
                                    href: '/home',
                                    html: `<div class="custom-drop-down-item-example">
                                                <div class="custom-drop-down-item-first-text custom-drop-down-item-text">
                                                    <h4>Hello, <b>WORLD</b>!</h4>
                                                </div>
                                                <div class="center">
                                                    <button class="custom-class-for-a-custom-element"
                                                            onclick="window.open('https://github.com/')"
                                                            target="_blank">
                                                        OPEN GITHUB
                                                    </button>
                                                </div>
                                            </div>`
                                }
                            ],
                        },
                    ]
                },
            ]
        },
        {
            position: 'center',
            text: 'Dropdown 1',
            idElement: 'id-dropdown1',
            clickEvent: '',
            customClass: '',
            hideOnDevice: '',
            columns: [
                {
                    contentBoxes: [
                        {
                            text: 'Header 2',
                            items: [
                                {
                                    text: 'Option 3',
                                    href: '/home2',
                                    idElement: 'id-item1-dropdown1',
                                },
                                {
                                    text: 'Option 4',
                                    href: '/about2'
                                }
                            ]
                        },
                    ]
                },
                {
                    contentBoxes: [
                        {
                            text: 'Header 2',
                            items: [
                                {
                                    text: 'Option 3',
                                    href: '/home2'
                                },
                                {
                                    text: 'Option 4',
                                    href: '/about2'
                                }
                            ]
                        },
                    ],
                },
            ]
        }
    ],
    avatars: [
        {
            position: 'right',
            src: 'path-to-your-avatar.jpg',
            clickEvent: '',
            customClass: '',
            hideOnDevice: '',
            columns: [
                {
                    contentBoxes: [
                        {
                            text: 'Header 2',
                            items: [
                                {
                                    text: 'Option 3',
                                    href: '/home2'
                                },
                                {
                                    text: 'Option 4',
                                    href: '/about2'
                                }
                            ]
                        },
                    ]
                },
                {
                    contentBoxes: [
                        {
                            text: 'Header 2',
                            items: [
                                {
                                    text: 'Option 3',
                                    href: '/home2'
                                },
                                {
                                    text: 'Option 4',
                                    href: '/about2'
                                }
                            ]
                        },
                        {
                            text: 'Header 2',
                            items: [
                                {
                                    text: 'Option 3',
                                    href: '/home2'
                                },
                                {
                                    text: 'Option 4',
                                    href: '/about2'
                                }
                            ]
                        },
                    ]
                },
            ]

        },
        {
            position: '',
            src: 'path-to-your-avatar.jpg',
            clickEvent: '',
            customClass: '',
            hideOnDevice: 'desktop',
            columns: [
                {
                    contentBoxes: [
                        {
                            text: 'Header 2',
                            items: [
                                {
                                    text: 'Option 3',
                                    href: '/home2'
                                },
                                {
                                    text: 'Option 4',
                                    href: '/about2'
                                }
                            ]
                        },
                    ]
                },
                {
                    contentBoxes: [
                        {
                            text: 'Header 2',
                            items: [
                                {
                                    text: 'Option 3',
                                    href: '/home2'
                                },
                                {
                                    text: 'Option 4',
                                    href: '/about2'
                                },
                                {
                                    text: 'Option 5',
                                    href: '/about2'
                                }
                            ]
                        },
                        {
                            text: 'Header 2',
                            items: [
                                {
                                    text: 'Option 3',
                                    href: '/home2'
                                },
                                {
                                    text: 'Option 4',
                                    href: '/about2'
                                }
                            ]
                        },
                    ]
                },
            ]

        }
    ],
    customElements: [
        {
            html: '<button type="button">Dropdown</button>',
            customClass: 'custom-class-for-a-custom-element',
            position: 'right',
            clickEvent: 'abcd',
            columns: [
                {
                    contentBoxes: [
                        {
                            text: 'Header 2',
                            items: [
                                {
                                    text: 'Option 3',
                                    href: '/home2'
                                },
                                {
                                    text: 'Option 4',
                                    href: '/about2'
                                }
                            ]
                        },
                    ]
                },
                {
                    contentBoxes: [
                        {
                            text: 'Header 2',
                            items: [
                                {
                                    text: 'Option 3',
                                    href: '/home2'
                                },
                                {
                                    text: 'Option 4',
                                    href: '/about2'
                                },
                                {
                                    text: 'Option 5',
                                    href: '/about2'
                                }
                            ]
                        },
                        {
                            text: 'Header 2',
                            items: [
                                {
                                    text: 'Option 3',
                                    href: '/home2'
                                },
                                {
                                    text: 'Option 4',
                                    href: '/about2'
                                }
                            ]
                        },
                    ]
                },
            ]
        },
        {
            html: '<button type="button">Custom</button>',
            customClass: 'custom-class-for-a-custom-element',
            position: 'right',
            clickEvent: 'abcd',
        }
    ]
};
```

## Contributing
Pull requests are welcome! But for major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
