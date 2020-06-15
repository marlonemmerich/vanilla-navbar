import {Navbar} from './components/navbar/navbar';
import './index-style/index-style.css';

const navbarParameters = {
    backgroundColor: '#6a1b9a',
    hoverColor: '#54157b;',
    color: '#FFFFFF',
    customClass: 'aaa',
    logos: [
        {
            src: './../../assets/github-logo-white.png',
            href: '/home',
            position: 'left',
            hideOnDevice: '',
            customClass: 'custom',
            clickEvent: 'teste-a'
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
                    ],
                },
            ]
        },
        {
            position: 'center',
            text: 'Dropdown 2',
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
                }
            ]
        }
    ],
    avatars: [
        {
            position: 'right',
            src: './../../assets/avatar-dog.jpg',
            clickEvent: '',
            customClass: '',
            hideOnDevice: '',
            forceNavbarTop: true,
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
            src: './../../assets/avatar-dog.jpg',
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

const navbar = new Navbar(navbarParameters);