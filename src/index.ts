import Navbar from './components/navbar/navbar';
import './index-style/index-style.css';

const navbarParameters = {
  backgroundColor: '#6a1b9a',
  hoverColor: '#54157b;',
  color: '#FFFFFF',
  customClass: 'aaa',
  navbarId: 'navbar-id',
  logos: [
    {
      src: './../../assets/github-logo-white.png',
      href: '/home',
      position: 'left',
      hideOnDevice: '',
      customClass: 'custom',
      clickEvent: 'teste-a',
    },
  ],
  items: [
    {
      text: 'Home',
      href: '/',
      idElement: 'home-element-id',
      position: 'center',
      customClass: 'custom',
    },
    {
      text: 'About',
      href: '/about',
      position: 'center',
    },
  ],
  dropDowns: [
    {
      position: 'center',
      text: 'Dropdown',
      clickEvent: '',
      customClass: 'center',
      hideOnDevice: 'mobile',
      idElement: 'dropdown-id',
      columns: [
        {
          contentBoxes: [
            {
              customItems: [
                {
                  idElement: 'qqqq',
                  html: `<div class="custom-drop-down-item-example">
                            <div class="custom-drop-down-item-first-text custom-drop-down-item-text">
                                <h4>Hello, <b>WORLD</b>!</h4>
                            </div>
                            <div class="center">
                                <button id="button-custom-element"
                                        class="custom-class-for-a-custom-element"
                                        onclick="window.open('https://github.com/')"
                                        target="_blank">
                                    OPEN GITHUB
                                </button>
                            </div>
                        </div>`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      position: 'center',
      text: 'Dropdown 1',
      idElement: 'dropdown-id-1',
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
                  idElement: 'id-element',
                },
                {
                  text: 'Option 4',
                  href: '/about2',
                },
              ],
            },
          ],
        },
        {
          contentBoxes: [
            {
              text: 'Header 2',
              items: [
                {
                  text: 'Option 3',
                  href: '/home2',
                },
                {
                  text: 'Option 4',
                  href: '/about2',
                },
              ],
            },
          ],
        },
      ],
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

              items: [
                {
                  text: 'Option 3',
                  href: '/home2',
                },
                {
                  text: 'Option 4',
                  href: '/about2',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  avatars: [
    {
      position: 'right',
      src: './../../assets/avatar-dog.jpg',
      idElement: 'avatar-id-element',
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
                  href: '/home2',
                },
                {
                  text: 'Option 4',
                  href: '/about2',
                },
              ],
            },
          ],
        },
        {
          contentBoxes: [
            {
              text: 'Header 2',
              items: [
                {
                  text: 'Option 3',
                  href: '/home2',
                },
                {
                  text: 'Option 4',
                  href: '/about2',
                },
              ],
            },
            {
              text: 'Header 2',
              items: [
                {
                  text: 'Option 3',
                  href: '/home2',
                },
                {
                  text: 'Option 4',
                  href: '/about2',
                },
              ],
            },
          ],
        },
      ],

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
                  href: '/home2',
                },
                {
                  text: 'Option 4',
                  href: '/about2',
                },
              ],
            },
          ],
        },
        {
          contentBoxes: [
            {
              text: 'Header 2',
              items: [
                {
                  text: 'Option 3',
                  href: '/home2',
                },
                {
                  text: 'Option 4',
                  href: '/about2',
                },
                {
                  text: 'Option 5',
                  href: '/about2',
                },
              ],
            },
            {
              text: 'Header 2',
              items: [
                {
                  text: 'Option 3',
                  href: '/home2',
                },
                {
                  text: 'Option 4',
                  href: '/about2',
                },
              ],
            },
          ],
        },
      ],

    },
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
                  href: '/home2',
                },
                {
                  text: 'Option 4',
                  href: '/about2',
                },
              ],
            },
          ],
        },
        {
          contentBoxes: [
            {
              text: 'Header 2',
              items: [
                {
                  text: 'Option 3',
                  href: '/home2',
                },
                {
                  text: 'Option 4',
                  href: '/about2',
                },
                {
                  text: 'Option 5',
                  href: '/about2',
                },
              ],
            },
            {
              text: 'Header 2',
              items: [
                {
                  text: 'Option 3',
                  href: '/home2',
                },
                {
                  text: 'Option 4',
                  href: '/about2',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      html: '<button type="button">Custom</button>',
      customClass: 'custom-class-for-a-custom-element',
      position: 'right',
      clickEvent: 'abcd',
    },
  ],
};

// eslint-disable-next-line no-unused-vars
const navbar = new Navbar(navbarParameters);

// const customElement = document.createElement('custom-element');
// customElement.setAttribute('id', 'teste');
// const shadowRoot = customElement.attachShadow({ mode: 'open' });
// shadowRoot.innerHTML = `
//   <style>
//     @import url("/components/navbar/style.css");
//     @import url("/index-style/index-style.css");
//   </style>
//   <body>
//     <navbar-vanilla id="navbar-id-2"/>
//   </body>
// `;

// document.getElementsByTagName('body')[0].appendChild(customElement);

// eslint-disable-next-line no-unused-vars
// const navbar2 = new Navbar(navbarParameters2);
