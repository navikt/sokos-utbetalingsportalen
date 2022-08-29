(function () {
  try {
    var elementStyle = document.createElement("style");
    elementStyle.innerText =
      '.komponent{text-align:center}p{color:#6e6a86}:root{--navds-spacing-32: 8rem;--navds-spacing-24: 6rem;--navds-spacing-20: 5rem;--navds-spacing-18: 4.5rem;--navds-spacing-16: 4rem;--navds-spacing-14: 3.5rem;--navds-spacing-12: 3rem;--navds-spacing-11: 2.75rem;--navds-spacing-10: 2.5rem;--navds-spacing-9: 2.25rem;--navds-spacing-8: 2rem;--navds-spacing-7: 1.75rem;--navds-spacing-6: 1.5rem;--navds-spacing-5: 1.25rem;--navds-spacing-4: 1rem;--navds-spacing-3: .75rem;--navds-spacing-2: .5rem;--navds-spacing-1: .25rem;--navds-global-color-white: rgba(255, 255, 255, 1);--navds-global-color-transparent: rgba(255, 255, 255, 0);--navds-global-color-red-900: rgba(72, 9, 0, 1);--navds-global-color-red-800: rgba(106, 18, 4, 1);--navds-global-color-red-700: rgba(136, 29, 12, 1);--navds-global-color-red-600: rgba(163, 42, 23, 1);--navds-global-color-red-500: rgba(186, 58, 38, 1);--navds-global-color-red-400: rgba(208, 92, 74, 1);--navds-global-color-red-300: rgba(225, 128, 113, 1);--navds-global-color-red-200: rgba(239, 168, 157, 1);--navds-global-color-red-100: rgba(249, 210, 204, 1);--navds-global-color-red-50: rgba(253, 232, 230, 1);--navds-global-color-purple-900: rgba(31, 20, 47, 1);--navds-global-color-purple-800: rgba(48, 31, 70, 1);--navds-global-color-purple-700: rgba(65, 43, 93, 1);--navds-global-color-purple-600: rgba(82, 56, 116, 1);--navds-global-color-purple-500: rgba(99, 70, 137, 1);--navds-global-color-purple-400: rgba(130, 105, 162, 1);--navds-global-color-purple-300: rgba(161, 141, 187, 1);--navds-global-color-purple-200: rgba(192, 178, 210, 1);--navds-global-color-purple-100: rgba(224, 216, 233, 1);--navds-global-color-purple-50: rgba(239, 236, 244, 1);--navds-global-color-orange-900: rgba(82, 51, 0, 1);--navds-global-color-orange-800: rgba(125, 76, 0, 1);--navds-global-color-orange-700: rgba(168, 100, 0, 1);--navds-global-color-orange-600: rgba(212, 123, 0, 1);--navds-global-color-orange-500: rgba(255, 145, 0, 1);--navds-global-color-orange-400: rgba(255, 170, 51, 1);--navds-global-color-orange-300: rgba(255, 193, 102, 1);--navds-global-color-orange-200: rgba(255, 215, 153, 1);--navds-global-color-orange-100: rgba(255, 236, 204, 1);--navds-global-color-orange-50: rgba(255, 249, 240, 1);--navds-global-color-nav-red: rgba(195, 0, 0, 1);--navds-global-color-limegreen-900: rgba(71, 78, 0, 1);--navds-global-color-limegreen-800: rgba(102, 110, 0, 1);--navds-global-color-limegreen-700: rgba(127, 137, 0, 1);--navds-global-color-limegreen-600: rgba(147, 158, 0, 1);--navds-global-color-limegreen-500: rgba(162, 173, 0, 1);--navds-global-color-limegreen-400: rgba(193, 203, 51, 1);--navds-global-color-limegreen-300: rgba(217, 227, 102, 1);--navds-global-color-limegreen-200: rgba(236, 243, 153, 1);--navds-global-color-limegreen-100: rgba(249, 252, 204, 1);--navds-global-color-limegreen-50: rgba(253, 255, 230, 1);--navds-global-color-lightblue-900: rgba(19, 72, 82, 1);--navds-global-color-lightblue-800: rgba(35, 107, 125, 1);--navds-global-color-lightblue-700: rgba(54, 141, 168, 1);--navds-global-color-lightblue-600: rgba(76, 173, 205, 1);--navds-global-color-lightblue-500: rgba(102, 203, 236, 1);--navds-global-color-lightblue-400: rgba(124, 218, 248, 1);--navds-global-color-lightblue-300: rgba(151, 230, 255, 1);--navds-global-color-lightblue-200: rgba(181, 241, 255, 1);--navds-global-color-lightblue-100: rgba(216, 249, 255, 1);--navds-global-color-lightblue-50: rgba(235, 252, 255, 1);--navds-global-color-green-900: rgba(0, 59, 15, 1);--navds-global-color-green-800: rgba(0, 85, 25, 1);--navds-global-color-green-700: rgba(0, 106, 35, 1);--navds-global-color-green-600: rgba(0, 124, 46, 1);--navds-global-color-green-500: rgba(6, 137, 58, 1);--navds-global-color-green-400: rgba(51, 170, 95, 1);--navds-global-color-green-300: rgba(102, 199, 134, 1);--navds-global-color-green-200: rgba(153, 222, 173, 1);--navds-global-color-green-100: rgba(204, 241, 214, 1);--navds-global-color-green-50: rgba(243, 252, 245, 1);--navds-global-color-gray-900: rgba(38, 38, 38, 1);--navds-global-color-gray-800: rgba(79, 79, 79, 1);--navds-global-color-gray-600: rgba(106, 106, 106, 1);--navds-global-color-gray-400: rgba(160, 160, 160, 1);--navds-global-color-gray-200: rgba(201, 201, 201, 1);--navds-global-color-gray-100: rgba(241, 241, 241, 1);--navds-global-color-gray-50: rgba(247, 247, 247, 1);--navds-global-color-deepblue-900: rgba(0, 36, 58, 1);--navds-global-color-deepblue-800: rgba(0, 52, 83, 1);--navds-global-color-deepblue-700: rgba(0, 67, 103, 1);--navds-global-color-deepblue-600: rgba(0, 80, 119, 1);--navds-global-color-deepblue-500: rgba(0, 91, 130, 1);--navds-global-color-deepblue-400: rgba(51, 128, 165, 1);--navds-global-color-deepblue-300: rgba(102, 163, 196, 1);--navds-global-color-deepblue-200: rgba(153, 196, 221, 1);--navds-global-color-deepblue-100: rgba(204, 226, 240, 1);--navds-global-color-deepblue-50: rgba(230, 241, 248, 1);--navds-global-color-blue-900: rgba(0, 34, 82, 1);--navds-global-color-blue-800: rgba(0, 52, 125, 1);--navds-global-color-blue-700: rgba(0, 69, 156, 1);--navds-global-color-blue-600: rgba(0, 86, 180, 1);--navds-global-color-blue-500: rgba(0, 103, 197, 1);--navds-global-color-blue-400: rgba(51, 134, 224, 1);--navds-global-color-blue-300: rgba(102, 165, 244, 1);--navds-global-color-blue-200: rgba(153, 195, 255, 1);--navds-global-color-blue-100: rgba(204, 225, 255, 1);--navds-global-color-blue-50: rgba(230, 240, 255, 1);--navds-z-index-focus: 10;--navds-z-index-popover: 1000;--navds-z-index-modal: 2000;--navds-shadow-card: 0 1px 3px 0 rgba(38,38,38,.2),0 2px 1px 0 rgba(38,38,38,.12),0 1px 1px 0 rgba(38,38,38,.14);--navds-font-weight-regular: 400;--navds-font-weight-bold: 600;--navds-font-size-small: .875rem;--navds-font-size-medium: 1rem;--navds-font-size-large: 1.125rem;--navds-font-size-xlarge: 1.25rem;--navds-font-size-heading-xsmall: 1.125rem;--navds-font-size-heading-small: 1.25rem;--navds-font-size-heading-medium: 1.5rem;--navds-font-size-heading-large: 1.75rem;--navds-font-size-heading-xlarge: 2rem;--navds-font-size-heading-2xlarge: 2.5rem;--navds-font-line-height-medium: 1.25rem;--navds-font-line-height-large: 1.5rem;--navds-font-line-height-xlarge: 1.75rem;--navds-font-line-height-heading-xsmall: 1.5rem;--navds-font-line-height-heading-small: 1.75rem;--navds-font-line-height-heading-medium: 2rem;--navds-font-line-height-heading-large: 2.25rem;--navds-font-line-height-heading-xlarge: 2.5rem;--navds-font-line-height-heading-2xlarge: 3.25rem;--navds-font-family: "Source Sans Pro", Arial, sans-serif;--navds-semantic-color-text: var(--navds-global-color-gray-900);--navds-semantic-color-text-muted: var(--navds-global-color-gray-600);--navds-semantic-color-text-inverted: var(--navds-global-color-white);--navds-semantic-color-link: var(--navds-global-color-blue-500);--navds-semantic-color-link-visited: var(--navds-global-color-purple-500);--navds-semantic-color-interaction-primary: var(--navds-global-color-blue-500);--navds-semantic-color-interaction-primary-selected: var(--navds-global-color-deepblue-500);--navds-semantic-color-interaction-primary-hover: var(--navds-global-color-blue-600);--navds-semantic-color-interaction-primary-hover-subtle: var(--navds-global-color-blue-50);--navds-semantic-color-interaction-danger: var(--navds-global-color-red-500);--navds-semantic-color-interaction-danger-selected: var(--navds-global-color-red-700);--navds-semantic-color-interaction-danger-hover: var(--navds-global-color-red-600);--navds-semantic-color-focus: var(--navds-global-color-blue-800);--navds-semantic-color-focus-inverted: var(--navds-global-color-blue-200);--navds-semantic-color-feedback-warning-icon: var(--navds-global-color-orange-500);--navds-semantic-color-feedback-warning-border: var(--navds-global-color-orange-600);--navds-semantic-color-feedback-warning-background: var(--navds-global-color-orange-100);--navds-semantic-color-feedback-success-icon: var(--navds-global-color-green-600);--navds-semantic-color-feedback-success-border: var(--navds-global-color-green-500);--navds-semantic-color-feedback-success-background: var(--navds-global-color-green-100);--navds-semantic-color-feedback-info-icon: var(--navds-global-color-lightblue-700);--navds-semantic-color-feedback-info-border: var(--navds-global-color-lightblue-700);--navds-semantic-color-feedback-info-background: var(--navds-global-color-lightblue-100);--navds-semantic-color-feedback-danger-text: var(--navds-global-color-red-500);--navds-semantic-color-feedback-danger-icon: var(--navds-global-color-red-500);--navds-semantic-color-feedback-danger-border: var(--navds-global-color-red-500);--navds-semantic-color-feedback-danger-background: var(--navds-global-color-red-100);--navds-semantic-color-divider: var(--navds-global-color-gray-200);--navds-semantic-color-component-background-light: var(--navds-global-color-white);--navds-semantic-color-component-background-inverted: var(--navds-global-color-gray-900);--navds-semantic-color-component-background-alternate: var(--navds-global-color-gray-50);--navds-semantic-color-canvas-background: var(--navds-global-color-gray-100);--navds-semantic-color-canvas-background-light: var(--navds-global-color-white);--navds-semantic-color-canvas-background-inverted: var(--navds-global-color-gray-900);--navds-semantic-color-border: var(--navds-global-color-gray-600);--navds-semantic-color-border-muted: var(--navds-global-color-gray-400);--navds-semantic-color-border-inverted: var(--navds-global-color-gray-200);--navds-shadow-popover: 0 2px 4px 0 var(--navds-global-color-gray-200);--navds-shadow-focus-inverted: 0 0 0 3px var(--navds-semantic-color-focus-inverted);--navds-shadow-focus: 0 0 0 3px var(--navds-semantic-color-focus)}/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}@font-face{font-family:Source Sans Pro;font-weight:400;font-style:normal;src:url(data:application/font-woff;base64,d09GRgABAAAAAGw8ABIAAAABOsQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAABlAAAABwAAAAcgbAfs0dERUYAAAGwAAAAUAAAAGQKXws7R1BPUwAAAgAAACPkAAC1AKsVnv9HU1VCAAAl5AAAApkAAAWOhmdQKU9TLzIAACiAAAAAWgAAAGBeCNJxY21hcAAAKNwAAAG2AAACKkTtz/ZjdnQgAAAqlAAAAC4AAAAuA5sN62ZwZ20AACrEAAABAgAAAXMGWZw3Z2FzcAAAK8gAAAAIAAAACAAAABBnbHlmAAAr0AAANPoAAGYso1e88GhlYWQAAGDMAAAANgAAADYNcyK1aGhlYQAAYQQAAAAgAAAAJAZHApZobXR4AABhJAAAAnMAAAQq0h0lP2xvY2EAAGOYAAACGgAAAiRcX3dAbWF4cAAAZbQAAAAgAAAAIAMoAbNuYW1lAABl1AAAAyQAAAf+FvEM8XBvc3QAAGj4AAAC7QAABP8BLWbjcHJlcAAAa+gAAABTAAAAVppj/YcAAAABAAAAANXtRbgAAAAA0goY+gAAAADZuMEAeNodjDEKgEAQAyd7VoeFD7P0w2qjlfoX70BBMUgYGEJ2EdCanoEgI0YzOcHMYl/ZSRyc9uIElct+89hfBVJS503jP/ETvtrcZ/f6AG+/EKB42u1dC5QU1Zn+p2fomWkYZpCOCgiCGkQjiMpLnuLbhLiucWNi1E1ispsVUGNy3Lz3iLpizkZzNjmJx5BExawxrIYkKh49PNSBoBgNIDoKzIQZZmwyLdM0TOOMzbn73f/eqrpVXdVd/RhE2f5P3a7nrfv83/cvqiKiGC2i31HNhRcvuIpG3vDtWxfRGf9661cX0txFX/rmTXQF1eAeEoL/qyhC1aWeWfjVW2+ikYu/dOtCGrt44eKFdPo3/u07X6XJfIe8r1rfK1OVw1fI+g2iIRSnE+gUOkPnOUP9R2Lqv/pailbJ/3WcQ33N92pejd4afbC2bmz28gdvjv/mAaqqml01FOkC5DWWzqdL6XK6iq6hL9K/oA1upW/RD+hO+iH9mH5Gy+hh+i09QU/Ss7SONtArtIVaqJV2098pRRnKIp+GqkMoxw8ib2O/Se5X3cP7dXx+e2Q39iO8/115HunTSL/PKT9F3+H7l/OzJ3PaaOwfy8+2qNw4vS9yh/Uu6uZ7vsb7bZzu57STz//SyU2/63t85hl1PvIaWqmWLqTr0Fa/BYxEPZ+lUajrOrTyi4DRtB4whv4MOBF3R+gleg0NHKtqwpND8dxMbOdhuxjbAmxXYvsctut1z92I7RZst2H7HrYl2JaS7KRDlU6rjkGfVFWdgJ4dTbNL7tuqqqGR/0F6IqeXcTqF09GcjuH0S5xeJFO6g/ev5XQ6n7mL9xdyegmnCzg909g/ldNjOR3M6fmcVnF6j7NPe3n/eJlGpsiRU/UPvB9HGsHIP4XmcKsuRQ8+ABhFzYATcK2qqrqqDtei2EZiG4ttPLYzsJ2NbYZsO35H/vRymov0s2jZKHo9jrzGIp8zkP/Vct5VDeN0CKdDeWa2cfoWp1HcO42mY4x8lq7m2f3XqnqeoTFsTfItfJ9Kx2O8VeH+IbgjilSWYQenq/jZTfTqkT4SUQaJj2roGLTT6RiL1RhpjbSS5tMfsEWwNxp7p+COJ9Cav6cGnJmKM+fhWiPqMwZbFT9/Gp1LX6BI1YOcY5IOoM0GA6smRQaQFj0M75PvT2T8z9O4I/hslR4LEYzg8YAatODpSM8G1NAUQA3a91K06WWAKvokIILevhJnrgJUY4xdDVrxeUAUs/8atOW1gDq6B1BDP6X7kcp5UkOP0eO4/0l6BqnEfdW0FlBHzwPq6AVAhOdSDePBauqlg3hjP6CG3gdEQANkf6vyns59NJJOwvEgtH4avZQUKbtG5hbBmJR3X4WSRQjzR2RFAuN4KHqzT7QjbRdpKvgTL4pNokUf+L5nRJd8z/HHHj+DRtB35XxD3hmxEvk3i+2imYbTUflDG6xCKyw/SmufFgnRinSzeEl0YZS28l67aOErSd42i260UifSBNKk2P6RqHkPp132cZfraspzvhrtkeGZnGHe9Mitl8QZBsYQv69YzstF8iidJUmxiS4TK6hBrAC26KBxYq88Fh3yCsZFB66s+gjW+28WdRZb3dQaV3iO2OcPd8kSktqh5ftBLX14nSCOx0tL9Yhuwp7EeNtEe+j3S+q5DWkL9tsVNjmsLZA6Kmdi/1FRy1Qenl2PYuCeDn+a5pNXiiU/Se1b5IyVNE2sk5vYYN+3zqSCYgNGd5JnRVLNf+YFJDfQxWM/pfc7kWcKHEKreNu+/vaRwdl8AJxkmrmEzBE1ljbQLPEY/h8Tj+pTOGbsuUH2L7ZHfZ56QexE+oZ15Ox7r4tuPkYqdoJDfB2wE1exl7dUbRg1SR6VwyH1NpRdyzZrlIMeh+RScF81DQdlr8ZzDXzkybHSeFnXOsZ0dCRrYipRa+QHriR8raPgX1YhjdFI3QcDW+ttdq1HSsm27Fpvs2u9vIha4+0s5cUgWydzcyyt1uHpkXj2qKTXR2et/0L//wv61Rdx7wgPXz8iRNu3BB+5z4hdOq0H37KL9agJeazp9wixkmbKFJxEfTCekXTQVwLp8+PhtNaBeRPRK7V9RzbHI/pkPYq437c+sqZOjhWudd/hq3VuXw8AD5k027GU2lmt7dfKzNNn/WcE90zC55k3D0OtE65a95aQRzZ4Dsh5mFPr9gJy04eir7VUlw3ieYL6WukwKEKD6BjAcJoHGEQ3AKL0bUCMbgdI29slOD8IHHoM0ECNgHpqAnyLhgHq6SRAjE4BXMt2msVsp1lMEwHfZGvNYrbWLKZpgOtoOmAWzQDMpnMBc4FlZ9J5ODeL/hnnpMV2DuCLdCHgRrbxLGIbz0K28cygBYBv0KcBM9nes4jtPYvY3nMbfQ7w72z1mcNWn3n0BcD1bPuZj/dfR99BWRajjjcDvkXfB0ygJXQ3rkvL0GL6b8B0tg8tZvvQYvoF/Qrl+jXgfLYX38gWo0X0BP0BJZF2o0VsN1pEz9EavF1aj+az9Wg+W49msPVoMVuPFtEGwPnUTh14+27AYOoEDKEuQD29AxhMCcAQ2gOop25APb0L+DbtBUxg+9NCtj8tZvvTDLY/LWR70zGo8Q2483aKTLxe2nxO+90nvkKfQj8qbX9KWpjEAfy//IHzSc/be5uZM68V/aKdKXE/VSM9RHGKo6SdokO0lMqlh55FL7FeJS26xEbxMJ+MYxuKsd6IvQY6Xs8a63ccSptB+TK8tw9UI4v5VoP/98Rq5NYC3uGV8mmdg9O4fFm2EWb4TRmN24qh/PWl4WfUMMvvTwJzxkQ/Wy2b0GdNRJYMmcMlxYzWlb2albjKKq3Gfqli+RaJN7kkidDt5uXDooA6p9y6p538u9UbSuyvLPo/pbF5fZDOsnD+Tmuy1a071Ls7xV45Cm1aUuvKqdG+75WcJzscDRbXIW23WkyPfDkKJE3pCts2/EQKaRfmREa0FuYac3IG7eG6DDJomuKhk2yLM8ZYaXxq0Pw07sgUrqeH6obQAOaM3hi3fqqYeaBkmEBbR3F6yEmgSZNAg6XfQtAbXzXGZNLTUg28p+xDJ4FGzQXNWeCa/2lHT0pn0dDwMwxPP4q7ozyfpJaunuv+tJYRG8LIheXwaSR9eGocHkosc/ceY6NnDHzTqmzkjKlSPFZTrDdP2VxnnP2vSNzGevW0057qDvEcZkwyv6YNuW0sRS5jjBvVloG/glJ1HQ5eV/dj+D4v274lnqlQ2RMlP9mla70jn2ZVvBdUZ+YnXHjbrT01WvPj2JfXJhdVvkM2bap247uBt55ICmtLPrvteg3W9oD6gDGcz0upjoYcQXqu4W7Nek5t9n8Q+pwK/aLcR7KnjqMTAjjKxgEZNSXZ2RVfb+Wg+YfeAI6lHH69SVNC1TbDC42BAZ9jLX4c4gc1ZoAFq7ltJER588Ot0dLqVeCJbkXjRC8k364AXhrlMvzBMrkz0auhMXigDPju19mu3ov94jU5NZpH6rOxvpR8WYPj5FY4X7M9Q9vG2jAnDuDdkFlQixb265a9UM3ct6TZbBkVWzz0nLXiLDFI/ialed+9unU1VhAHWZ/arqWKTCGsJu8vsm/3GfsHfG6YWgjH5itT8WPtI/KrK6oPHlLYz/Eoxn6zpoOsS5U+CGFxuBtHSe4pFD+xVDwpNmL7m/ij+JrCxdILQfqoINXaLvGI8VA1X+nicneIHUpCZW7tj5A4VopHxK/0U3/H2D0gXg6WYXNnIo94OaeS4Z8KqxEo+VejaVQ5MnM9uLR4sPcC7otXoK6KFx7FUKlf/DDNnWiQViKflUJzJ38W70pcy3TqnRD6hnSuzIBcmIYAM3dI3YtHy2FTWLdmKj/no7V1XXo7KPoZ7/eo2cqYvzdIZgtBt/pyaHHAnMJ7VUlaMXsT7LvThPHYyD48Wd+WavToEnqMmRTVMlqLf4lAzcLqunaIe9AqSYcOMx75WZi2LVYyCKb81sjA+FmquAotWXF7ih8bsuY28ap3NEn7gMR9+nCMPnsTWr0dbd9m1071wFOhdJLHBJwfgZGeMno27WqpEVrSG4HSjePyz9XXX2JsrXWRxpwKj2NreNVUyuDdrFbrLs7iXZqnH2o6yNaYZ6hWHOI5Wa354iaFO4xeUfyg20+rj+e3dY/Wf8nRyjzWLqlFYtrWV5BqKjqVxOztFa8NCDaMlf4o97RB9RTG0i1SX8Ssqi6EW3yxTdKWHiVuO47buxojswlyr9RRRH0lydGFy2Frwkr0hpMemZWQDvPrtsSGoFll2UfQE12Bjw/F2HYkpO7cWeOhFye5+l3a4fa66Fss7LwDtrrP0bfxbO+wOdCYQ53zlN161pZ5JH8Y6F+w1nW01yM1Pg/OdD3m5lbUSEIbe1P/THlc8x2rRAuuN2PErZdvxB2t4i3c02bbaOOqdcQSnF8l1mDbrHvwKT7/qKusK4x1GcPsvXplxwmF1T7mmr8xu/3PoDPpLLos4FH5rrMDxkIxI1P13ZkMJeBiX7wwtRISj6/9o8/1lrhTZr/Rkg/Hartmu1eSPyy6ov785zCHduTyd4ezlIqjtWliG8/jqNYkDffiE9yRUmPW0Gz3+WEOsdnfZ1/5Bwb21EHTj8/3np2u+3sLjNuJSmOiOFFH62P7RiXDzwRgnIxXlmJpPA5eargluRVn1yyJ4rNNkL084uByFGcTVxjTaQ/I1nLU96PcB9j74yBgH8sY79qzahr3/iq2ze8T7zKnJuWkd1QPur2dXOM2wT2VyNtTbxbSALtm8njNobW7cQ2eVJrl98LPOeD7fi/vz34uUr5usLBmYS/zstdFNbAstIXfHGP/riaUoMbNV+v5VZP7NvvMqZpOrUXd9lu8tbOeKXfNktFPbdzrSgezJ0hONHWufqPUdTTe1kJmWbZW8k0yGDuT9pjIkYurHX89s9f5TNThLkN4dfSUoKFNmdQGNWxCL0V5xUo186BanjB8mzOQjlPqbcxDp7RfR8rGgnUWjVdygtaSpQPrEHVhs2wh2cKN/fxmlGueTdQSaovdW5afUyJPu0Z9sd9yw3dF9xr7CoxzzamCbe/SpafD2ePEbsNWUM+6x2VoiRjepjwXhuLMO+I3Bq+2mvOW6+jeBNeXUSvylR+avmUcTWJf8WXoxWbctYZl4O3aaw45aE6wL3cMau1GR4FSO7h4j3sm2ePc6asRjvzEOLtkO704BDzepfPp53S/wf0VMUtcvrxtIf1vFM3pt1ur1lXvQ1YsFa3FVrOwny0dcjzt4TmVYnySstsgrqlbm4zaAUrV6i8/5VCYKjqF3uYYPrV0GvvZDqdjwa2PhCx5EvaOxdlPYJsE3nsqzaK5NJ8upEvok558TmU/qToaDE78ZK0/HYu9k3HlVDqXufdz8D+b5tH5dBFdWjHmLGJADLWIaThew2lcBwsI2ywNl0BiGOrhwwdhU+D8VB0UENdGwUXYvwj1PRdvq5NergP4G0wqdpK0agxDS57D0Xn6aSbXSf3k3rlc8jiux1FDv99w25Mhyr1ka9v0vyP3jNHbZLTsOI6F9nG0j2yD0/Ee9RvJcpeEEzBCCGNjOp+XftRn6+1ElHUsRtPJGGvjaQZfPzewplOwnYMx5/1ZcuE0+8woA863a+H+jbFB7o/TMEiX3YSzbbhQA3H5LZD1HKthPFP4s3B9DM4OKrFPZS9OwIiN61RxqFPsGp7B6QkMqi5n8X4Eo0FF3LqQLkbJL6VPYbZeTtehZkvoftz1AD2Os3+iZ+haepY20JepF3AzHQTcglFziL5OkbE3SS7rxCdOfBq9cQnTvF7Q9t6BWNdSphavGmVLArM9b3tmbz48vtmGTJfR/oO2LQe00PLM3uhQbPZPjoKr2SL9s4GL3xNd7JP9MMpaodVH0v5hpT5XQ/pZ+Muk5UvKmsJpP3G1H9KnqL4CJXB485jBT9l+4i6dblb3WMziCh0tiKXtVRxCGeVJshdyIkfHpFY9Jf3kB9NjWfJFFkemepZjIKh4QLW8r3ynE0XZaJVfRbdLds16ZYpg/reQJT1MWbjcWfY8bjJ6x5Io+gzLmCrtLu6dHmf0ujRv3V6NGO5IaBuh1HmfWcArTs2pZHnenwpPlLaOLL/sxnaVjI15wvB2lXx/xtEH6TN/tvfWeTEOxtU6lqu7NXZ8yZ/n9+Rv9t2L+WQGXu/SZ3rflNRTWQ9PnrGwlyPFGXMjG262ezyes3594493C9oWkiH0Zrt4zCeQxnwtHaFohXvOa2+SjKUTNHKM63OZ/H7cwasED6uemTGK2Oercd1X9AzfZ+R7KAf3FEFZIVm3u9tEPBTghdBlUw5z1VAeX3x1zd3SeF9Xjj9hu9gK7mqreMMbjxCj7j9c+p1mjvfJlnq2S5m+eS+LO6TGQ3sw/ByjpkWskPdif4d4RfpqiVViLV0AGjjK9K8S671zkzUwSR8dWW1o/ibtofLOlYNFjptulKbb9DnQ4539NoNseaw5OWDRJmU3t/XGew2tyV7GZ6/z+qbeYrC50tVba/OUDsDruZljJwptQcmJVdLr4+UiufAstjZwu46fs+W3udfQNqlZ06liGmht4F60aouXq/DQcLl2r11j51EFqaTqqV2+42Z5OI8au182mxpBXRqbZ86lET7jZt+RiG9MbGLX4QOKr+iqQ9p3vEYLc6OBcoiRhoud6aLdfQo/FdA2V6TlCtmQxUprTJo6SpRwl0PjMSK3Y2btt+WLrPI+F62+M73o9QHIe59npu4b0LHRU7itXOcfdq1R28J4MRXA03QpvpXxUJdaW8yaYOWR26J7dgLplRUWzQl89w7TVmr634XE5EV63lmU0+TJ9TrFqEGTa3BV+9+5Vnu96uLkM7bfnTp+TXL3GGktwKeKm0w59IK13G5+wu3BOEn7hfBqF2vNi1tmkBJx4KyTXigH2H/0HdDDTLDMUNootm3nqtd71Bpn04+0XP2Xh/Zm7TonNc9gjsVqXYOo7Ck/L1K7/RpN7YWhH4CUFc5P3aekyl+oqUITNl5ibofLNzqMXNKQQ8P7KhHpR+OFTqNfs6XSbYubFW2YIfsLSngdpeoYve/zYirMmwRH9NiYi5d4rDZ7clzDfNwWvZY/qW1uCZfsbMqaUnrI2PROyZp7guzzAzI+2pgnT5qy1wC/ceBXXh5nj/MT8upbGwesjhLH7ndrr22f1Npgjor5mS4v9nI8ZW0f3bS0oDJ+d/nQB8cIsWVgc1Vdh7FyKOZeV+E/FkxJ2G8WgkdIe96Xk494C+OtVfqfQhrvsiVF7bdpxcpVVJfXMb/AEnkCe0ZMHUjxv2carjwv1mAm7RCrmbKuwd5WGTFc0nc6U3lrGvoHVYcRKjJrpSI96/ncXWYulg0mVe7oq+xMU7pLGZXb5fPh8foIlhUKR5Px6uNsXZxjMWgFNpZxxHfbNCYm1+Urnw9I3Ftcms605fnB+M1Z5bldxo+Ufm589CbHVH6TtWZvcgTnNVL3LLbTBZYPtocHXCA9QkhazINp5ogirDxNuh1tDlBrlnoNKT2Xho/Px4P4+24Vq4stB39LHya3Hcp1tbW40ZEjPUprU8YeBYV4q5PFLozcXY423/gNx7jZWUJPtVIT6tdnj8uEHW1utqeVAntKajhsGaff4jn8IlkEzKn2QpQ9hC5dRSyTMUvUShl19n1HE+rixvoxe/ZLHx13LB1jXXdKawK1N7Pk28HPtOo+P1nXNeUbr6OKNmMbThEawxFhpnJsvHHs6TKOhgDO41U8J3GcvEb2opzCcfIaOc7eRTQaTw7lmHkncsy9k/GEhC8CzuO4dNM4Lt0UugUwk2PxDeMYddPx7s00n+PGTeG4cWM5blwTx41r5LhxYzluXBPHjWvkuHGNHDduGseNm85fKNpMkWlLpM/B1LqpTRgLX1cRYfjbLkdEVLgB43iet/WJMXDLMtZcFpxONVtw2zEa4uwrcFg9GirJs3IEuxYreh3mrfJmkak5vxs8Eew6xUrcUQuOdARbNGpVDDtuiz6xCferGHdxSXtAy/ZhJjZhkzHxapiGHe9EuxvgOrbqFd1F+MI7dgbpO67P9Nhayb7CWCpHFzCQFt6U1lsVH4c9bmpjHH152NK6MZ7yxhjAenYra7SLX06zf2uLJaOXy6nmvHNzrm6z8hp30LTXxTLxF+DT1V5OgulYTyCde9puB7W6s0/bLvpEL+ZWCHubeBLzVWvqdLRGjriBOd6JM50ci6DseBYc1Ux+66PIFaMV93MK1jpWeOyy/tXlUe6sPS56JWqlfg3lfYeMv9XS7lrZauXbxKsHkn46X9R9ty/HP1rroorq49yYY9JuqE8NrYx8qPqKeX3luc0zUGwR2/RRWvoJVni8JHO10T5UpkltXjtxMa0HvCDjYLaZUrVOm/2wni0RpMVb1oo68RZKsMvBkqGkJ8O+ZevWEyyXSozzF9b7tGofsmQxdCjPO3fwd4gOcirfdY/u26JsPGW8v88fd6p1TuVhF0fvo306ZDpULNXfznbbjXTkBvGaWKF1EM3YS5cS+8l7N7fnTSzZb7TpmRHRFFjjqaL50kywnO0vtVtxjV3YjoyIvcVbTU3ZPCeKl0s/2V2upYHH5ns8Vuo1zS+uN8rEeT5fnejM7YFiuCv2Ldlrj/5aA6c06ha0viHgkgCsr4fx/ut2XurrZelyNIiWF549LrvCRIQuGwMs89MRsaVW6fKaLR9GexSH6Xm18mgmz+xAPAKcZ/Ln2/Q4SxePxdj22czcYrtYL1PwL9doPPZQ6HyKscTEC+mGGMdstD3l+oqTyexc3nAsbWI5WuwO1rHfwccL9Lhx+9EtB+5cz55xPxHPiU3ij+I+7MlvqG5lHdFW8Y47ukOheoqfWD0q1gJDz+NZ0KJiRIiHuDysBRarxM/tUqwHhJD4IHvLVbJq3fGePD1M7lWyPEqUJanO4OT6zW/VFNHKPYau2hv5Wq2wtTiCHl0aOxp5EfF/edUty4GO9d3A1X5e8gOAS9O+uKenHH6DtZMJayUv41KLnlXLmI+2l4t7Ne92uywN2t/IWs/bE5bCBMQ/SDvXuA87ndWuOdGQoqHql2FtYt6Y7x7+Px00kvW6rkHF0AY3X+rDD8WK55Hy1cCKbm3K+f71HBjJ2G8FfBg/9YJcjIVjYmpuG7jDXz/O62IdroPTXQ49hNRQqkUnY5XFn8b75hsrYKUcqbeJgXeM80hPKY3jVa7H6b0mnY+y6ofxvJnNNpovc7kd22TcPc+c0pct10zwyIdNNFWsxtlG5gSmUv6YVaX8cn2Ep/pjHh5VE1DDUr4BOlvXbbRcL8u5KWmFx6by1sRIXZmjYZV4t01Zn0Q/6LPcO84eSY2hONMzrWhKPCIn2usRl+maTkVJpiLnTqf+Ljrmxj7HlzQrWsyZ9pH4RTUdVPsNkPkbwsx6Y/5HK4BBKxzz146S2VtMeXi0NPLsr/NKr0XyNccy79hn+7t5KKMTfdHFtZW4es7+rplq03ob8zRAzviAvlpufmGjxBzaXR463hgVHbY+LOHRskq74mDUfTQkpriWl1VUFvBtxWE9Vy/1eTj+Thu7NJSiwRDvcuzZlnxxZ3PmSdpPo2BFn7Wi7oTSEXVoP6tsQdxQMf2s6ZUuDnJkvmSuH3KwjFUu5+iJcl1cjg2BWCPhxMd14dLBzvpr/z7lNc4srbE/QI+t3en0+O81ufjMHtfMiqIVHY1w2o7oszNgteXenFPV1gxiy1VLjt5qFWsukvK/iNZu89JdLtt2nxoE57FWchI6/mx2oL/yLrq1/fBlYw2dtPG/rLmbTvRSpS2kq31KkQ4nwRXxlj3ohfvEZtRgrS1pZAzOKOE/79Dq8v4ae+QdUt+U07NpUxjagj5c4ZRcf5NAxfDZxT4waSfuX+n0wvU9p8Mcx9FTkn46Kn8DFD0lqqW84URFyyuNR2ArJa3vHwT+PL7gNo3vsGP7tXg9lIuYN+O1VS9AK6UiABtnYmHjsPlzcKjva5DItiGV9P0+rfN+TL8/Fhy3X+dQ1uoDb6xkbQfZYXkFh6UoudGGrTiZ4nnUbgXrs1cwP7OUr3p91mW0YdnqjwIbrkdrvCAeFM/peMPNrGHeX1wkcGe1utiKfJYoLK7HhopU/BZf3STWKJ92tsBvMaIUe3Nc4Wmn/BJZ3GNhqNGUaYJ9ZphLX5ctAY/IuT+9AA2M52oZixofVtyeUaYOhXkNGS8rdPyLYvWXYe7Sd04sXSY0dPd9PjX09mGt8udHH47ideMZOkXdryl3NHT0zKwzKpDTBQXkGuUz6RzVekvleu49bevJaA/azAe1hvuw0QzLc+9FY8TKyAnNep229DXrrtTI0/fmRNrxX89fJl+aBuZbzdGgV5u0zr4eFD24R67IyDnbq/PcFOrdzbm8t6ON8e6VM9tDRNPc6UfNtd5JW/Pc0VuLo8jSb9CQOlvcfeaO26PjgZWqiZLyUivHt2plKrJMSw6rK4sf82uNfPiatJLLS7QfKumigX3H5LqOdewTzfRd/Ej7RD3mGjkJvU6tWX6ZS64nFyvxVFqvvGdrVajvpzix3CC96bWgMnLtUl5Nk2A5P4l3derIHA1yPZTBf7UXXGWVsCXCt0rV4bq/Mad7PFu0T9Rh8eh0VsGbPABHmqtxLPQDvR41gK8tIw4gRwZOsM5UfS8+pekvjyJXFKCkh0/Yo9Yd6eND6qvxOjbgnlC+iT7ffbds5bbur78UzJWXHr7use+0aD1NagD0NJt9eMfcmVVjtHmp8uEKzPSdioZ5NNvJoFiH6LFNrjfXuMrZHKoPt9r+q1mDR1RxHLPWF+DL7MMqvUVoDq/m+jKv5jqPV3Odx6u5rubVXLW8livOq7mu5NVccV7NdQ2v5hrOq7kGgTs9hb4GiXY8TabTAZPBK0+kGzlq7WSaApgM+WE6nUMzAFM5dvEMHQN5NmAOw0JeFTaf14RdTZcBJtECwM04uho5fR4wja4FzOY1Y1fzmrHP8JqxK3nN2Pm8ZuxYXjN2BS2hu1GqewCT6ad0P9IHAJPpF/QrlOHXgDn0BP0BT68FzKbnAbOpGTCZNgDm8HqzK3m92Txebxbl9WZxXm82j9ebRXm9WZzXm8V5vdlneL3ZFZQGXEC9dBC16AdMpiwdwj63+tDPyZEx5JYhaRpMP9ZSXBzcxRWSujGFu+Kjzk0X9RsHWWiCd2axbNjIq027Buj7XR+Wn2ydCcDyIxlPSPvASN0+E8QjaJ9HxG0YXzuB0V5irLZRfoUErbZFPCd+Kf2uxCZwmjKq8cPG+WdxxrwrqZ/8u9gGrjIpnhX/K+4XD7IEKDmcTrEDkDnymoe15R3MNSZ5nbr13Ub57VO5pnyNI6urNRFKr4S6d7AOx5Jlotqmo89bPIR1ZDyZpxWYC00z95jh6DlJPk6z31iWpcgkf7Gj01qz8BGWqf/2oSux7J8+g7/ejl7c7pJQbNsv9ypH3bZXpyWN86Zty/n6R48eI9k830rNav21tunpeDZp/XUoQ8OtIxjy97UBad5Uut0b16HMdtmvJZ2d2q6ofHX3s9XQ1mJYX+vQkXnbpA6Yj12xevT5tHlkz69uPVP7gkrPPswJHWeikyNVp92eHmIvf9UzrWKb+PB+xvc+8W7ePqw6qw9FKdvEenDHSf6mX73+xs5T7D/ezLJYvbGqS0cxc/pIj/I2nYNxHmfacnquwUjzSaZ9Dt9vaYCcSFPuL4xyvJL5gBxfP+N7PttAOzM0Eel+LmubXr82lWUNeVVq4TLicRy9AXqcFt+1c9lht88TtrfdE1QrXudWqXW3pf7f4NbeymOOJ+U677mrmD7ry5GL+jw+o31uLZdxxe/cWrEBXNxUvxKhReTVFGSj18T3ZPvoHtgP6NJYRfk8PmRH2n+IdTWP5Y41/e+JS8Z2vTbv+VKilxlrYNo8XMhLLqm8SE4JvFsyKPa6dR5j6UeqVw0fmwh9jKW8GpbyrO/TSMkuwpJdNUt2EZbpqlimq2XZahDLVtUsT0VZGqpmaaiOpaF6loYiLA3VsTRUz9JQhKWhCEtDg1gaiuJoFr97Hr95HsuWx3AJ7uZ3380y5B0sNw6GlDcNEqaUGM9miXEKS4zTaSaDlBqvZblxGMuN1/G3UpbQxXQp5CspN95JnwTcRZ8GxCCL/SPdCznuSlz9DOBeugowif4JcC99FvCfLGFOZglzKt58Dd75BQYpbc7CG66j++gGwA/pdsB/sWx5By0F3M7y5BSWJ4fRw/RbXHuMHkf+fwLcS0/SM9h/FjCJ5cxZLGfOohcAd9GLgHtpPWASy5zDuH3ncPvO5fa9m9t3DrfvXG7fu7l972bZ8k56H3AXy5Z3ou9Gch/H+KvgTchN9uhJeO569ObN6EXZh7uRdxfyTCCvbvTR3v8DxzsTS3japVS/T1NRFP7OfaU/HhQIIjYNMYQQQ9jsYNBoE7USKGhM24SGyfKgxFgKaWEwumAcHBicjHFiMg4OTMbRGEMEqjbq5L/gYGLigkj57n0PrT+ov9K879x7z3e+c8955xUCwMZjicGXGBrLIOpcLRVwbKY0fQXZQm6hiAX4yEGthhCNQMHiSRP8CCDIWEmnzvTQ7sdoFN2LptMT53rQezaVIV5InyemR9PETGqUuG9kKJcrLGDQiZUdxJ1ceRoJx5mdR3KqODeLiXwp5+BS4fJMDvm50lQRhfLifBklowSDQYNhov87bX3qZrQNthpsJipiC9p5qwHEEMcwLiKLSXboOm7iNu5iBQ+wajII7pCv7SpVQf132JaIWSvpl2HTF5EJz654njXVZVZ+FVdZVVLL6r564iqq556tuIrqrfpoRdwzK+bZk55NurpW3tvf4m06GLckTeKXgAQlRA/32EQFL/EKVe6PMKoVnYiih/x++hQr1ThsMEUUcpZZ3UM8YlW6wg4+h72q671i6t5jdH1luLjxW59ir7Un6p2ONYhtq/MJhhhro4+soK5H2rmvSBtxXVqJG7ylbdS7Jcz9C2kxjGbDsA1DT9wmO6O7otU6TW1bmsfHz0n4bNZPiVXDHkCSGYV90zeDdy89W+tkQGzqByXM29hGoQ+nyLjBuYniHmfnKJ7xN4g1/o4z0xZO/IWeiCWhX3R8rzP/6nHPvuX/H4+YydVvacms3+t74wAOeVHRH6J0rZMNNf34gB3UKCmi2QoRdPO886fcOtOOKLPS/XqNNyZDglOt+DYtXOOXvMgzi9EHmU3RBthVX903o/SE8K2Dk1HlPAjfov4v0ZOm5+kLVyMYxzZ54/hEHDH1jvyJ2i6wzIbqAAAAeNpjYGZ8yDiBgZWBhamLKYKBgcEbQjPGMRgxKjMwMHGzMjOzMDMxsSQwMH1nAkowQIGji5M/gwODwm8Wpnf/2RgYmE8wWigwMM4HyTE+Y5oCpBQYWABlDQ2eAAB42mNgYGBmgGAZBkYgycCoAuQxgvksjBxA2o5BgYGFQY6hjuE/ozKjIWMwYwXTMaY7zCzMHMxczOrMe2SdZYMUuBREFKQU5BSUFNQU9BWsFFwU4hXWKCopCan++c3y/z/QHAWGBWD9QVD9DCj6GRQEFCQUZKD6LVH0M/z////x/0P/5/+f9L/ov98/xr9v/p78e+zv0b8r/4o+7n/c+ODKg/MPzjw4/eDEg6MP9j7Y8mD1g4kPXO9fuPfw1g/WrxB/UQIY2RjghjAyAQkmdAXAIGRhZWPn4OTi5uHl4xcQFBIWERUTl5CUkpaRlZNXUFRSVlFVU9fQ1NLW0dXTNzA0MjYxNTO3sLSytrG1s3dwdHJ2cXVz9/D08vbx9fMPCAwKDgkNC4+IjIqOiY2LT0hkaGvv7J48Y97iRUuWLV2+cvWqNWvXr9uwcfPWLdt2bN+ze+8+hqKU1MxXFQsLsj+VZTF0zGIoZmBILwe7LqeGYcWuxuQ8EDu39nVSU+v0I0cfPX7+4snTnQwHj73/+Pbdt+8Mlc9eMrT0NPd29U+Y2Dd1GsOUOXNnHz5+ohCoqQqIAQc2oIEAAAAUAEMATgBUAF8AAAAM/zMADAHmAAwCBgAMAj4ADAJ+AAwCkAAMAsgADAAhAnkAAHjaXZA9TsQwEIXHOCzkBkgWki0rFCuv6KlSOJFQmkAoPA0/0q5E9g5IaWhccJahM10uhmCSjbbYxjPvzejzsxOAaxLkbfgW4guT+PtM4K9/IAf58rxJIJzWVe9JvLI4c2ysDXfS6ZpkUT8GizrqeL+Nutbvb1vKirnyYBfxVhN0oefzKRgqUR3bHeIdc7KJk82ciEzYL4T9TGDALy+du0aTvGnDQ6DBKyo9KmN0RWMbaPTKIPLW6piU60d/tWS+4MyrNTeXB0oXqFQEGONBWUNDjCryOxadYDwxBJwa5WLwT0xEWVRJDO08GqxRk2GNNZwTPd+du6YLFSc1uPkHJOpr5AAAAAEAAf//AA942rV8CZgkRZVwRlZ1Vx/VdVdlXVmVWVn3fVefVX13z/QxPd3T090zQzPMwQyCyHAq98rtgXyILoqCIv+KKyyHK87xr64XIiA0nqu2rOsqPyt44+6vy1T/LyKyrj6GcXd/mKrMfpkV8eLFey/eFcGwjMgwKMx+lFEwKib+BGISvU+qlOZfpZ9oblrtfVLBwi3zhAKDmzD4SVWz5c3eJxGGZ/SiPpDRSyJqffUb32A/evp8kV1kGJaZX3uDeZ69n2li9IyTOc4wI4vHmeaE4wTTzDQVl44z6lUAriZTBUUgo1KoPP5cNp9JW8ym5svb2Tm23WmTJJtVkp5GVy8vl2/9tuTgJYl3SGtrzAx6DC2yT+r8TBvD6FTw/TiD+5RgHN9h38M4GDdzX6XPVtxnK6PFfRJABwZ01AEYDGAoVgTAYQCHAacYJYPgf2XkFNMC1ya4O8606I4z7Sv0qoVrE1z1cFXC1QhXBFezfLXJcKf8nmslmcoUpBz9ZFTkY5bIRypIKiM82GObWTDM7+Ny3C3WnHUnvrflrDfbhJsNNz/fdU/3F+C/7nu6nn/+edR0D2CVXbsbfZ59nYkxN1VGbcZDMNcNEmEAwmM6gUfyxkmmHZ4jvaHrJGOAB2a4g58BhtwKpgC9t67g6wmgJ/6FR37vJBOSf0vHGCVjPQH9s28kU1wujgIFF8qk87lsXAnTWshlzC7EqeJI8jSbTS4lTLLK/HJyj+AXpuKdhVBxWzG0Y7A3OeSIOnOheJ4A5sYvPtgU4bucgc5EMBfwREupoaW2wwebwnzK4cpGvXFJTIzkx/e1HQaekNbeUFjYj+kCTBm4oA2uv0HHCHeU0TcZ/J+CEdbeYGfZjwGePcw25n0VWhkwaQyMfmuGCGJAEANOMjwTYRSRk8wgvGEgJBgEYqVWTwIbDjIpQh579c4Lb/PkLQMQqAvICE3CXS8haEl+CkTzxNlctsgW4ghfiCBoWBVQrYgKGQ1SUfoFNEhhsnBFRS7rB1oa0/kCAQJR2Vdj23K82ZuwmThLsNPTN2wP5xzCQsKV0E6ZOgOeosMiTQb95xzWaywht4EXfdGsp8gnlyQpYZISakdyKCjm4wF9aMordoat491CPhEyZZYDof1dA1dmOaFluM3n9IRYjaPbpXWLPgsfyZdBUMMH884+vyMm6DGdEZZP5mH2SZCWduYkyCXQPpJMGRMoo0UHdYpFhQ499ul9+z6N351dm0Gt7CoIJH63WX6Xw2TIFzg8Mgv3/eLoaDHT3dXV/fihl2+++SeHrft/fNllP96Pf+9fm2F+Uv19S+X3gSI04MdsCLy2RH6bgVYel39pPfyTm29+Gf++Gz2EjrLPMBrGtE5LGYtLgHSgEChwhQxX4FScKvCeYNd52vNbU61HtOd1BsbQQ/xyMG676EJrPLjM78bteZij6EU2CtjwTE17UB2gknVCK+iAQg7kH+QC5N78T089NfDUU0e/Wvwq/IP3E2u7maeZS0FzWjfXnHSAgWapTmsOmSJJpFBZJa9N8I3+bdJYCiLe6XBnYwP7oc0Q82OkRXaQgg7AC2PFAF4Yj4w59MqPSyWADIDOPg79ttf6rReFZtxvXY/XyRpaXVHNePxta/vRTvZp6Kfahqx6jESccBsog9pQe2/5j59QnP/mRxmiu6Nrb6Cvg+7GdMutG/VmqvoEoybC1AzCZIG7RtQC6SKIU5yVPBoWOOhP51100Xn7L7povzMmGgxizOmMi4YR9SOf/OTDD3/yk48MugcOj44eKrlcpUOj77uB8PAO+PoCez30MlTBpgV33rIFNizBpgWwaYK7EzB+/DcLs92GNX4O1sgcFmV9xrzj7sujA/bSzcPo+7kWTnf66WHozwv9fQ3GzzMDlf50uHldXX88BvC0PwdpH+tnhD+ggnQ6vM5hSmRyFQWhAjap6JIi6kHm4Pglk8HevuCwMxHcU1o6PzBybpe903YiNX75wblAYTQmJKK5I/Oxvedd0MMqx6g822Fuvgi4ZZi5Cm4iRkXcghatRLnpsV1BVJ8+gfUrxlcEHO3kaQieG6qqr7ZesFKOzF0NexdLlguXAo/idX8pG9KF+amu7u3m5HRXZiRi6MkEh/iob6krPJpx9mf5tN8sdk2qtTbBkHfFS3lnwmMoGYSoLZH38lkpZgn1Brq3m5QqRygvhocTNsx/oLrQ92C+20APLFVG2YQH1bTpKKkMqYlsq2V7QIE/Cfp3c1XWT8IcNhFKJFNiTswhzAOS2ZfBGk4C1Y6S5X9B+n0LC+VfPqNglWq75vE8urd8+eDjvz9hH7NzUQ56ssEcfBnw8zNTFewsGBnLW8yBpToH8AOgvpXMg16HGYlKTYX6NaobRTBGKqTXsL/0lzIhXdA51cln/JbtRTHBR82o9B96Ls6HxvNub++UWmt16/MA9ufFwe0moxNlxv5BrbGmJrLZmQIP9E0C/t8EHhKYeE2i2jDCbVvQ10a0FqZvG2Crry6dIsG7SV4wgbupYUE4XOb1QG0wLoTUiZkeT3B4IZmdcMRNBZfYG3ci10xg7qArOxywBl367l73uKtlTO2fumxq/23zgQCf4RzO/iOTvsiBg/GJvGvA5MsIpfFAbPk8wCoKvPINmAsNU6iMRIURV21hVKpkrYC5ARukIKFFRQF4waxRqJ5QWiNDifJX0H1dY2Gjcs+Hb7t+cCwzfvMdHzkH2ywhoNszQLcAaMUR5rxKf0bcvHHT/k4yRXhCZ72ow3YL5oQ2uBaJSeKC50Hy1AhP41W65qv8QAyRXMUSoUxQEUAFWVipHccqqMjKBsifY1MFwSxGOCnvTA4GwoMJm97m1pqDbqMrP4kEqTsX67aGcprOEWey5PFnzL602p7o97tzEVGttI1lfL0Rqy1W8tniQaFdqXYH0oK3GLejo3y/lBzoTPAhwVZ+tph2R0WHxj4SdURFA/BWEGj0j0Cjjnre8mGC+OoopMEADeUtrNV4wls+HV5hMA00OmwxYxpQs0peO4wef0U+ChpEVtwaVV4Txtwt431cCHjIlZmyY/byUPYKzh1wZUb8iZ09IvAeygdjy/tNvqy7NF7+op/Pck7nwNEpf5TyV4XxADGwZck6jH5sCBCtdIGuGV8BTuyCBriWoTbHTWBzmEHmzWADKYgNdBK4Ea5E68RQzmfWIrMboRfLc+jR79x663duenjw4bHptDI9Tfv0MF9GL6LvGvzMH5gLoeU/MB/epG2V3LYSrirSdiFXQrkEyjWZPbhZ9OhNtNWxhwfJuu6HuXkX+7ewXgWYcGVunHgqnHQq9NhoIFPhBHXpqXiF/qJy/RKm5Oq9xE80610BD5dKij1cQpgvTO61SgHRoPTYPB4bWCZPB0q5eCzuCHa5HRFvYn5CzCcT6S7p2zVrBeOXWTuscLK3gmztYg6CZdQvW0anmFG4c5A7Ce6myF0b3OUJsg5A1gS6nYN3JCJXfnjPQeRqVPaJOOCobYS3/HC3fZ3eohwEDBWQ6vjKwmGPsDnTYMC44AFYw80gbyVU5Uz0we03nlsYuuyvd02+az7u6x7zhLqaWFu/mBlxpMei9qCGbS8EXLusiYBVGj06PHT9gZ7YzNv747Mey/w15pid17hMroSoD94X33vrwqGHLi8lF67ePnhwyOP384HxkeDcUJizBZ+5wpmbSvUe2R4uHLpzcdul0yGbKZVBaqf7Ac4opHudyTClJXAey7N3Aa/ogZryXLfjuW6v8670GKCv865qgomXSj3TToioS2CjEasulQwDwVRlAuDvAL0UxoxRCkiq59xfdxsEnVIr/Ojl5ZeXir8poXccOlR4e1fX28t72LtOX/LMM9T32wO4eQE3I/Cdj1lYZ5vqN9WjXswLBBlvAvvLXuL9ngALAc8p9nid4PFS7ckT3xeW9qq9gsj0KohZ448gfeVmz1fTcz1iKtG73Tu4r3D9ebu2T00dvnR+ed/CpexdBn9fJLVDq2yfHk6OJ63oXd3pruTpN0qDfV3UFsuCD+sAH1YEZ7JxFd3cf6VrZwVLB8Fyk7WzymMahGaLR6ci0em3lXr38jH7YDgxmef57EQiOS7EAwfU8YUbZnZcv5hICXmnxzdyoK94cBR4OBtLYx7AdM4CnduA0rmzoDK241mZmoYqDckqLgWqJHvo3vuD05dun5+4DP6bYO96+OPT18zHht9z3XU3Q7vQJ3oZ+myv2UZn6JH2pYS+TpKYDp3hlkRlHWCIHU0xEc0i8dBE8x50dfmHf/oTSrF3jb4w9usxRu73u4Tfh/7b/db1pid9/fnP0NPLo+Uf1ebdD/MeqI3xLefd2MCdOH7TJvfqgV69G/TRembALqoeGGLfwNuno7GZdwx4uhI+Tdw2mE7PdLr5ws6cVDK99wfC0SpPaDhem7d7K1xhNnx2pPy6GKG0YtNkjradley1VSnUlsBUoxIHJvkKHhHQbYVwil6EjwTfe+ZQateu8ovsXeVfIePpS1Cu/Jw8R8yj0K8CpP6t+6Vt7pnDmoPS3Q3r1x3wex0TOQu647kkMTBPxaOB5oCVv3tNd6+lU8pld5kjI+oLwgFpYAJ9o5wKT3QKtB9MnxL0o2YOb4mn7I6cIVAlBzsJBRUyBbECbWJayV2bfEfHmUEZlVFSqMx75hRIv/ytX53ztWNAvy+gbX8uvw3N37Ii8/jzgFdTbfxnlGZFRYaBm2FO3EDJL4zJ47sO2uGZc85q/lVgzRlk7NVMRzXW2C7PvwbWXgumHHnHJo+V9Gx0IS4DvrYRcwb2sVQKSRGQQCHr9xy6Xs2plWqz+trD0y0KZfbawrVZpUIFo37QM+KBf2gZeOeC6NuiHyo/gnZ9CG7Kf12ZnxhZP/Zuib9M/TPMjxoD1HSETXBDZ0XbgD2XAcsbc3UF592/GgMUd+z+9ZhSiTE9dHv6wiyaAzw/flv6SLb8Gax3sX44DPrBSDyFs+FUE9EOWE+41q0K1DIJrDNB0GTxyPZQaPuRYvHIRCg0caQYHcs4nZmxqHxVJ5du2LHjuoV4YuG66R03LCW3+ccOFvsODPt8w1gfjPnl9aEd6KgBy2norDiho6oJOhI4HlJZe7mGFVfDRpANVReMU4W9/V6pfyl/0YHdcwu7l9m7TLHt+exk2lZ+E40PjI4VCM32spcRmuWZiQouEu5aqsPFhgE2aqwm4VcmYv/ZdBhBTEFJh2mM72zAlzHQS751lCM+dlzR4E4R7UCW28l1ZPxjbKovpskvljwVWot9u7PcrrxF1Oi06S7/+OFShailw+P+l7lwl0eVX7xqvEL7sSsWCq3RSJOyv7m1siYLQHMteP/7tqS5FgO0WzArttK1ciABqxG9LJKaVToZ1nXmD6gVqW46vpWe7/PMDH96+f6rLp6anZ26mL3LGB3NTO3Tl3+GzOXX0FKpfyCL5SwM+vY3MCeZ2jphx3jYt+BiFVnZsB9kJwjZSYSAJREmuyxVTRUXjnirCVSZCkstJcG6EfVvkW7kykhaOjczMK7ng9wyl/Rb3YWJWM8hKebaFi8MGQW/6Rxn2mt2d8+qs7FuX6wnaZNspvZQmzNY8Pr6E/aYN8+LmZhVtBlbgmp3qOANDGd4qued8PUmzIUKRigPR4GHo9hCbSh0eJYwdzWTFU/KiWAh/Oxp9NOn2e2jo6efgqcLIPtxaNNWa1OOnG5Osw7aHslWyXKPlym86BdZecVCQ+mFknfOGuoUcDJgxlvareaHLtqB/qp8Xc9M0mxOzvSgm8o37LhoiGeIz8SwCsChAzyorThsgytQL+bNNSWoqFPhim9/e+kCg8OoNDj1F8yvgPq7v+dQd/ehHnQAlmgEWoBhwVKCOb/y7PuVs2NnUNRWDLA2Yoa9EzNjJXd4Nts3YluHt6SgnopK8eB7d4+0mlqV7db2vZN71Va1stXQNjJz+6GDrdoWZYu+5TwY1X35o/n8BTl0uHxf9m30DhT8e/3b/PCvfAXhHeBy9Hsyz9U1iMV4snUjkYX2DEOTw8ryKsvKQzMBSE0HZFRkODqOEsoowM2iA9Ei7Zee3LfUwWmVGrN6YfFzX9q3v8OhU2rs6nPRHOp7mIvwfIR7uPyl8hNPWDMuV8b6BOH5tTX4+gnRP/3/FbxraOLQdgNy5q99fWle59Ir9R7troWvl9HdJ7yjPt+o90T54jKhWQy+fkds9JFK30rcsnLjul3VJ7WYulKHsaTSh4UKI4Bw4A6J5hhaKj+NHiz/DTonzVpHU6dfxXbO8tpRpGe/Bu1wzCkc9ZOjCSzcKUjGhcPhX/gsf+6KK+5V7EucZhPwTLO2H+06c96kCWUQspX/2IPaK4kTbJ8eZV6q9oeq/TXX+iO5h4zeffnlT96bYMuJNx+CZ73IiT7P3g/Dtm+Um4oZ60DgZSeQpEW99267d3wgpUwPwO/eXb7+8VtueZz0r157N3p17cSGvBIHRFKj1esLBRpfupHtQ2OKDp2K+SbSMjReADYLegL9nsSGjq3LxrZuoSQMsi3QnKAp1XbZZ6vkrU8C/SqJWYZ46CRPIuewab5IqMsXFcg6XY0y6SXM6gHs/GhgPbB8pW/nnR9rtQRc4e284DnQszQzDNbkjEUqSn1zGS6tHh+cmddzUY9ZMHVZQm/fW/5+Nx8aFIXbWiyuABf24nHOwjj/k30G7FU/czXTWIZQG6ccQjZuOnAccKMrLnaAmsga3CGTgiHGEB5chxwep2adRO4wC1dcPXDTVZj16oL7NSsPhyxQyLNNUKgGZ1lxOpQYT9k83ZOdrozPrHGnPD1jQkkt8mn2ma8s8uDB7O0sHhiWRhyp8VhwMGEfXHNydI2Lw3gfg3ndGKNoPUOMAlVjFOitYxSG5K4+yd8/n0gO28PmBC92BjlLoFP0dHFecUbtGTi3t+/cQY+HyxutjvRIODyccvCmAi/i+UgAfj+E+TABia5el91rXV8nsvl8tONUM41TrWCVii0khmmpzoe5mmahCZd2HbYhKylCZ40B6QgDWEarnFeN8P3ffW+XuifD4aKgnAO+4ydsnl6Xu8uF8zCj6puv7jl30Ouyz5063dnlDI2InrKTc6SGw4sHqHzheXgW5gFHvHaexUycBEu4EiEwJuhALARpI/ESKowlbhLJbFaJVZNWIeLILdgQXGq+5PX1TYfj21J2xJaPNy2MSj0OXph+DilLXfaE36aWBpZ7e88dlITeXdkOW+v0XrM+b3Ih//YpU6CT8pMLvkrsd4Gou5nGIGJtFPL0Gdev8YTB8DzIQbsV/BdIxQqdCY0cepFyBRpZ5lSAOo+wit4/ODiyjQvpDQ7n8JEj6FPFpqmJ3a2qknp5aqh8Dmi82JqAXgf6FpgxZom5jWm0HTZQWIUpnIAbK6FwAryZGRLgbAXojBxDtsr098PTTvJUB1c/gVnlOiJngmbvqF7rr0rOeF0GJ08TOPlaHsfCwaDkqCRoAlJa0YNoqE1RTZhhITPSvyKo8tq/x7bneL9osHmM1gCfHvKZJM1nDuk5Z3LAZ/DrOwze9PL8vKd/b5fZx+t6I5FeHe8Tpa6gJZ3cpRF1duvET/WepODu5JTtAd4d71CahqLB/phV1VTSZ92BUsTa2tLuMHGuQp+nL+5AT+hcEUe+pyfviLh05dv1Dq/RY1c0GcPmQJzwxCx8/YDI8OK6HFzr+pqnrTSqSia1eoWm6HRVfWmUuULWlHhZ0NNkhH52ViFNZqbGZqNJf7cPVOEhMbF/ufw8Co30+X3lT2C5G4I+Ps/+PXCIdkMMtHWLyCBlSWVCrhcAI1xRl+yYnQ1aRdEKH/RK2c5ud3FWnrdyLiLna/+0FiD9aUF39qyLu2/GhZhKVClV1NdxxrJCFFJ92KrZWIeBwHk79K3WDq91tteEceFE8YctTUVFUzrG8qf/dfuiQqphRefnFZifuniWHL46q/k563gWqo9nGXE8K6Ayz+5UvLj3Uyf23LmXfabsQsxXyz/55dtupHyz9gbzT4CXthbPku1B45Z5dKqqMUksmW6ENdxnEsFZTatSpWpvsag78+z5p+8x6diiUlnhTfZ3ZP274yxmvzYyyge4SkiVqI+Adqzg1YhaOfYV7BCD7bOCTSW65FuqmpkuNqqqtlZUrR2gDjaasRpoYGlV9ToLK4wwEe0saf1TsYlts1FwdmejicIQemVUSqSi4UyFzyfKn5AvTE0WYbymDbGxsx8vHR0WRXWiXhwV9eIoj6BeHLE5NlWVR4JqozjK6+BvAb/NYmOtW8TGUDU2hs4mNqaN7Sz6fMWdscrVnfWZcLpXvtYsksFz+3rPHfAM44U6PJJ2VKwTYidm0H8CnhbA8/ottdqG/FlNsDHhKs7LSVLOq5edOz1J19KVkKsyiVglsZfcmXQ4ZU4YvkLsWpaSMxuroyb5LUx7cUckMZ7EZmLYM+Rhr6rYiu6SVyx+i/1cpzMIhmJX8bxhyWWffwg1V6xFj4DNRWyLZdAPCe9ItTFvsI1l1dG06ZLKwpMO2T/vYJqoyMiluNiMaaraY2xVRHRVe6yjao815QrrE7F6RYM9hm5V8hNh2SjrF9mWwRfrDLJvPQpmMTXKeD5+ego1N1hkVE6WYaz6DTmQv0ROOlbplOkapUKOZVGRsI2FeU6nNmndQzb0ymI83zauVKaL5WdoDArk4SbAI1XDQw5ytm4RY0NyjM1GsLHJWuUkE4TfMHIVV32MLbBZiI2jEbaXsstSSBiKJpMmd9Bkz4bsXKQYiE85A7a8EI8YXAGzPRd2cLEhtZ8v2IWoYHSadS2tnBh188BeApc1WsNOvc2obWmziEmPKxvkyLisMK4R9mLAaQdzLV4BrY3LyOZrb2u1AqRVR3VtM8kvUJvKWLOpwEgsIVKxiRcCauq+FsiJmvHJtpGbbhLDHS61zpRQW8O9XtRRbLr99qHy72MpWCRV7QS/CcDvBfQK8PrcurWn9Yw1XMpKDZeuUvWolDFl5Ap0baJ+jQLU9LI/8dPpsbkIaEYJc4VnQr1/GWXLPxjpC0TQUtk+GUwSHx7XMwFeG2N3retjaK1/Uezu1GPz+9q5dmW7pX3fzkfAdHndOy5J415kKtvxfIFyfgr6Fc9y3WiW8z2NmSBcA9lOKu6xArDKFepgHzPiWQboHrht13iLRqVs0bVOzEy26luULZqWsel3Hxpt1bYCtG0YUP8/EijvIQ+y0btBCe7sqEka9vlGpPKbmI4a+HocxmOryZUc59qc81h5xWOIHUYzXTqCvbkW8CoE6gJeKq4WjdM88MGlgXZrB6Zuz+4P3r801mHXKDus6sHyqxeaQib4d+Hv/njMEjWbI9wxGqtJkHl2gr/SGHbb2krEri5DIoOYE9UVk1m33mIsoYaZ1yj26J1qXYupNZzTtn91/mC7DdjA1LYw84UOIdr5UlPTANvUE/Oi/1P+gzDmEccF1HH6995iDPOFG5D9AOC5MWbXukXMDm2I2aHGmJ1EY3ZuxPwcTa4xqCWKrhqKlu8YIjVOcswuBTbhKSZRjaHZqxVA4CaCdCgj2EPrYDQVjYd1XH3NKljLPchM1J2lWgTSTPws8897uhUKRYvRYwMvqqW1uyfmCDmanYLgbIabezunHKl43KZ1WDRZjdmpySwWpjoT4VR8VyaVaVW2ZpOZXfFUOIHx3bfWzHyY/TWsD7jmHVVq3kHm93X/WfHqm1YaF0QdMKYMGVMtLoifmatVTV4yJjVcJTqmHE3Z1PxH4gfmZB8fF+ObZZOHmAVue8jR5BAE+ArZo64or2n1pm2iqQWGquGjrnvpCJJZGAGMg4ygw5UJFBYzfAJlNRaH1haPpxyBjKuD2pJehNC30AfBSIkwGLMmGFtthw2uYmVW6d8tq9SVN60mU8hTF8WrRYlmXImQ32zx6+OOQaHuHiG7YOcFMRkmV08yxNA9S+PM87AuNuxZqpeQZuiSxRXsWJNw9Q7aEba9q50NyRXxx5fR1eVbl9korjPD9WY0HtO39s/oafb9oMd8TAFmBe+7UZK5wCt9C8krGuS9Q5U9Qwq48vJeIy9InBGmQK9BxhxdYWtbawL6InFNVOYPFLsK/Vdhl92d3x7ORvu5oClmF7ImLz8eQPmhxQ60o2OxfORok693Vy472+trftsR1mPJGixs+WHWYcjaPYojgFEOJgTX5Edr+vkMdaensBwCR+JR4JUz0iCVRrnym+pqcYWaqh5SG0/3aki5QqYWq6iYDdWoBUiTaM5nCkrFoSFDmx5bVfkJe9KY9OS7tK0P3M0qBBeypZ3ndmkcmqxS6BPCw0l7REhwroGs0CN0ahza3Kib1rSzgMsR9AM2BmtPDqyYRruzHQ/GQxQRHgy2EKPEDCgECjSoEihwJFhU4FQUN04VwLZjoLDOMRiN9uuNRn1/dDhZ4ru54eiA3mTSD0SHuW6+P/EOa0QwGoWI1RrF1+iR2ADXLUk93GBs1Gc0jMYGuR5J6uYGYiNGo58zelMuV8prrFwZmv9CP2Kvh/Xuwi13vDWmUpqJRGEbB9ers7DuaOBtqtdbZbNZRfQ7fYuTuRB7nnjFcpA5w7tX4NOQjcGVUvjz4oMPPvj+T+2e1vI6pZ7XTu966M5PfepT9ycHEqj/s+KQJA2Jny3/Y2IgeT+di5o+U8kaTUl3DOEoCNFq3d1IQs+Vc6f/Fa2Uk/g3sbV/RF9jHwGrdIxkPnCNvI7IEkwVaD2cgzBioxMzFylRNtZbqGRb2kZuo1vTaJDsimDfmJt3B3vhW7gqv+hO27qDwViob7wvlPRr9cZApz85xQeteTHsCxXHiqGEX6OzRnrQPjEi8AaNX/RERadBFyyP+MWY1RnknX4XH+6LR/vNuqDdnvCaPVzOZPfZHV6XK9IXT/ZY9AG7K+0105zJdewE+iT7mE7FvCDnTBRMau2P7BdAh2BfdoQZZjYRQ1e1opapxj2DoLlcMHnp1coutCA8K52Vc1tYH4rHYllRsZcPXLmYzS5eOTBwxVI2u3TFQNehiWh04lCXfB3wD6ad7syQN9xjlUwhe2FoIC8kLS5nsT2xcM3U5NW74/HdV09OXbOQCIenLhwcuHAyFJq8cGDwwqnwsiOzLREZTdtFa8BknugZnLIZw1aR0MYHHkyY/a6hmfk2+TvGDKKr0FM6P/MrsuvvV8z9THU/FroAu4h1+7GSKV9OzIl69P7yh9CjR79aLK9BG/IeKWhTh1dLhgOuvov9phw36CNVoznQZWH45MjKg2mOiRnGOztXcTwBW0wZeDtM5CmTOAGaHsOScM0QGP5legX/hm4DBD59iwkI5Ogig60/yQx/kEX5O4FhnGQdDgRG8HUk4C4EOS5YcAv5AMcF8sFJIW7Sx+NSyB4xcE5U4rPj0eh4lq9cfVy4xyv1gPaJ9EjenjDX9xzvNbib50ZHz/doDZQH38MuoXvYu4Gi36rm7ULoUSSxjwJd3ET2TFXrAses7FT2NowpXwkwW/7GFpNMJilmq1zFcFiED3rUICZ4V8JjMHgSLj4hGgB7Xzzuk+KkXw8Qm+6t0zKdzIYqla2322GDFSt2osPrNt6pwCqkm+/+Az16wxPFL36x+MQNxSIedxC9F/UreIMKDw29l9BCQjegEoGhKuwHbB+6n+Q1n6X0Adjs2hTLoVeAj16i9Fp7HK2QGkTdGaoQ5TJoPa5CbCLxX0rBHqRH1+76bP6cIb93YDEbnWF/elpAaVtutqtnZ8ZSnqV7BpCCOY7+yqAiewO0BPbUmgsdBN2tYlaQWcZtAfB+XaGH99aqY3CBLE0TWfoO+TsPsnQjkaVfE1n6NZYlgPevvcH+iuyxXVv7N3mP7V78BmLRx+X28Tt/WvfOKHmHQSfkdyR45038DqEjfedGuZ1HZB5LrvWSGEXDvgEPJpEH22KncESHMB1AsakE+q2tsj+xqAxkLBplTUvVW2o/IBsFBINyW5MObyBIpsRuLinMR2Tb7WvVnQJkA0HCHux0OSJSku2sGXMwBlLrrjho8OOde4C5Qqb5eriyAT5ahTc1wLdV4c0N8FgVrmqAX1KFtxCuY3E6UtFE6jTNzLXrYoc1HqvfRlqfbZeTf2AcyMm/Su29sgpTyWXR2FxQyQl2TaISkDCQgBSuGUCqjF5qbkW10mkxJ6mQp+8RZa78OFpE95V/+eqrSCi/74WD6J1XoskLy7xcU/2lL1H+yK65cI07jNFPxtiKFgic1HkT2gZlmjs3hSsb4KNVeFMDPFaFqyh8DZx45gRpJ0rbZ24i709hLq2DKyl87TcA50j7FN4kw18DuIO0T+EqDGfIOQvsdlL76KjtMdxQ/SUboWRKyH5dWteGPZ8VWt9mq1rWHTLZaUTQQibAmCtUKugjSM9VavDwZIg75EL6h+doJf2HPoQGIkok0Hp6NHAaV9SvJiiN2Bjhy5TMl6Py3LzBHia0SMtzMLkpXNkAH63Cmxrg26rw5gZ4rApXYTgwY5q5Hn2JNYPuxxaiUvZ5C3R7NtmbvRy9777ofR/F3x+9PvbA/bEHHojd/0DsE9RuSq/9jL2Q/TugnRc8/OvWWfyblx2x1RILbPc2reIYaAWiBYhB9kT5Vfq3a5XOiFCtu/eRO+zTxVZpK3FcyOMJqAJV67PiRGhYBN4OIplzOQMbQBa04+hYf3zUTYpBj44X4yOCJzRxZA1cXyRkSO3oV/CXXlf+l7R6YM67N3YFKQQt7ZSWopeN4zpctJCcE9AVed/wgfLncU1uckYov6eTrge4dpDMW6c8n4ObwpUN8NEqvKkBHqvCVRROa79IO72y7PyaqdSkmkldva1WJXKGOmC8UYwF+lNvmYVfYSsDp2hr9b/mXLXgdO7K/J6ShAuAr7xo99yu+YvYuy42xbfls1Np64d/1D82lqe5QFZivw2W2QXrVhjjGeLgbdgOkeNhnsp+iqpUMuSMD/gkTmLpZzzkzYx8t64WVUkDSMQsIrXqlbFQTwQ44qbwsFu0Z/hwmI9morxDdIbC+Z7Z85cDfWGzU3ISqCXco7Zz3RZzUuD9TpsQkzzJaFzwp6amy2pWsXyMC+Zc/lw0ZLcKNrs3HxTyQY7KGnpC0QFzM0zW+W+i5ooMNsCfrYezP6/Cn6uDf459qQp/vuH9x6rwFxrgv6nCX0Tk3AemG+bjNZKX6Aev7r6/sCKssRosuoKjqAYmKj/DceKTIJlWGYKlM03e9q00VGUAPFetFKOukgB3g9XYxcjK5rVjXCVdphJdCtnwoIUWAXpMB60oK2TIfH+zuPPOe1s4vys4zoue/fn8qJbfmY6NJKyK8teRLZh3S50OlzCZ7pt1pg9bPTNiSxvq3pnhUr/7957OzLZ1hWeFZLIg9M5nnQZ/MWrl9F0mV8Ebiw8GvMac0ybXov10YmYO0z8OduFj6PdAf2KZgXWoYyj8DfQsmfdxmR9aN4U/Ww8n/DAu80M9/LEq/AUKX3sdqPw50s5XAd7MfPMaut4PkfW1Bn+Wwtd+CnALaZ/Cn5Ph/wbwDtI+hb9wDbUZc9DvL9gfMRLooHPW7ZLfvMjAIsc7dKs0vtiGU4byqT06OQLHVNOjOB+c2FCdBjML2pxIdU2VyzvQA7XKNdQRnu71CoWJqH/Urin432+9Idvr944Kd1r/qnfS3bUj4Ul79AiJgx4x6zVaAmm10LeQz8z1CIKnuM+/LTQQFLKmqGNbaLDv4at6D44FhvnstqjG2RF1WaM9Hn9fxCr7H6Q2BsvjTlkevdV5+S2h86w8v9pN4c/Wwwn9Z+X5rYe/VIU/3wB/rAqnUQsFaMn94LdlSD2MA6wg7CeycuQTbBY5blOrHTWCW1a/1bfefPegR7/PCQLHud2cfEWRYvE5l5VzuTirCx2t3NF1Pw5eyG/RabCkvEycuWXLDHO9TolViy1jJPpKz7DhiSZvwqXf8j76ii3gkvUNTj9HyTMj6P4OORFNc6UVe4ByT/36b6lxjcLEGcn6zxH2CSgsSLujN+XL23hcU+Af59Neev8P3Pd9ne6c33KXOxcwW78XUKd6+QFhPo9rDGy2PrhfyOM6A8QOxZEi6EiN/JsjNRwaSpTfxK4ZzUWSOV+UeYHqgPXwZ+vhhBcWZV6ohz9Whb8gw0muibSzj7bD/J5hKjUOpBY2wNzAbFUItKHoob7GYV0VBHVSGgsdNhY5KDcvcqgvhd28yGEWCZPB5LY0qXGQBkW0rsZB8aGvzNl9lSIHp31uQ5FDjR6ETpQeLxB6KGkNIfsqcM4IM88cAcltOPpI8T9fzIfSA9n5mZZS3CtN//fr+tiSyuuJRppCSs5sMirePPU/X+fHPIRe2WT/Zo05ZBequn8T5uyVsl2uMQcl4AI70wCaZ35dre/mmyRaZE8KrwbY4q8U+moTNIRUqQvAb+jBFhDpFGVqDq8PPGAS6ELHJq6YjTz8EfSA7POek0xedfXVsflrpj/+MHF5h9mWm6+7/o6KrnpDIYL9EwRbeahmk75F7TTNHVurlbsYuxDBk5dzy94VunZlqjWjRXKXgWcDK42r2RZGTPOGoDA1Y1BLdEev5O2diXYu251L+dho0qYofxnZQgW31A0GzHS6a9nZ9U5X2msyedMu+fqHPxc7M9urRVHF3q6BddZLf9e7NpRIvUztF9mniFV9ChyhwjJ2OduJ/pb9eWWlIrAD7AD63+xLlVWK7Ec5xvYxnYqO+r0WMkk7SFp+lZz7xWk+3v1+tu8jBXxO2doz8JsPnPk3Cvyb8Pu72b7Qpwv4N4fZTuY+9uegncLrIjLkN2iVJlqUK7SCgh6ooShkwJmVVPddOnupdKXySnbxfe8TjuH8/docO8A8yr4EnJzcDAfjav32aOqa4v15OFFvrCZIFbUEqWLc4Rd4PWdhC6jD6rPjvwwW+S92wC7Yo5IClhwzuVPyKZKYQGvXsEvMLezdJP+MUZCHD6v2LaiNXerqYti1i9kJ5m72MXgDn5BROdmtVuWHM0sGQKx+bc/U3e+3OJ0Ws9P5WfiY4Z6d4M1mvv5Da1/vZsPMxexvSD9GkjGmJ5RgvwBHCPQNp4LVYtCZnp4M/shltWy4MxLu7AxHOn0i7xRFJ94pgMf6yTUXM00sF46cf9JGRkHK7OSjSlSVs+YyNBe4AKrVE4nmeMk//7NgE2cxWZr3DrUI7miE+JwkNgwyfi5zHSaedSutJmCAUNlVjj1PJzwXiIw7q74OkukpyFarLVGtWZKLgYpsQZ8hmj+TrogzPXEkgPNjs7OhpE4QBP0cqzTp1Pp2UM/hUBNrHwnyST1iWfZz7EfKPxgYUJl9LjR58PlFk7G52KSKpRIxA+8Fx4PHelbOx4AX7KE1lgm6LaIZ7CVMMWxNt67S+TfLTGpfxeen0J2bmEX9NClXc6l4JG+KKOTIAG6P5c89iuySvWDibCOB3kJapTSlOwKRqT4XuikTyRXahZC5I6J1jJa+5jM4UsH5loDTbgX85Bi3nLPASpXiaFqlOtS+euacxVPuQthqDRfclWs4Hg+HEwl0ExcpBoOlqMUSLQWDxQiXGcjm+/vz2QGyftXO3WNqR+39l+D/jL6ArJuc3yeaQ+jOf+6SzweB99j/2Oo99oXqe13oEeYUexxv5IX31MTCpXkbf8X8kKXmnS4xn7X6/Ypmk+hCj8SjvYuugK0rjOw2O0/aKqHHmC+zp+raaqZtYcloOKRwN+f3KZrMgovjPQX0mN/WFUF2q92ViPYuUH1dWruE+TJzrUHF/IJhTn+ZwABXdCF7XOdnfk5sp5/j817xu+DFHmNPAfwXBP6LCnztEnSMuVYXoG3QJ7gtwDXIfAC1oBuBD3Acsa0SR1w38/dyQbfB4A5y+KRMgzv0Ab0QdThi+D7mcEQFeh7TMqzXlzGXQv96noHe9OgigoeePSXvPRxkfoieAmq0V89lwjHLHA5Yfv72271XXjl4X/E+18fup3OSh/d/Vn2/McZpXpKuvFK6Y9B5/8dc9xWpblpae4P5T/Zjm6xJdFMBVk4ogz6N3tZZ/rCaffj0Iu2HA5v9NfY9IKfHzuIsORzwbyEy3CKfv6GRq3Esuso+FL1c06EhNR30zbC8BEVkH7rmOeNSD38214sKcIMXpEpeWZUxi80msxNR67aSYy7FpnpDrf09CPX0t4ZLc6nYtD1lTguDMx3lchmhH32vY6roK9hT4i612L+3J6JsNbS26FqiTT3nDHhiYsIuHlhIqTQtbcbW5Px+rxSNpsh5Rehidj/7EGh1B4kXOBJ48w6NrDtIZADbf0a55lDbcA6JSo4UtMmbRzqq5xLoq1YWrXcx4+VX3rcN1qkbZUqIbDiSVKDdOPP5B5Hi0D3bEk6lMz5eUCm3JbYpVehiYIf8GoPyl09PX15+9o4LvvKVC+7A+WwUIfns9fKNfWbwjbEvzMj7sdEv0C8w1+lFvYh+UXbgT2U/FbsPdGGQefeWu9/ktGrNJZMr8GjqaKV21CUll1pXOeKxRS4ZUZNSEUpUg8weYgIfioVDbpSIfmw+6yX8f8P+q2YeZTZsx0LXPTc7ODgxaU0Y9C7JG3yuYXNW+Ry8Qat/crGtpdiRSRYbtmrhHCcM/DX2uyCr24iMTqI8zX2CLLxZB98hx0owjf6dwP9I3wfbS35fYauD75Dh5Hweks8Iy/mM82hdAvHvcKxkuxwrobXA0A47AnMQYa7Gtcqmqh2wodJxw862ehlX6mimrrabjea+8fYQi0zl0AqdEbzkSiv4hItKxfsm+94K6wqcJVr53LAZ7sm24Ztv9sjlzhyugP67ht1x9YXPtBga5oCOWXEAxlxkvsM0HrVt3Hq08ukPxvXeXuv6HOYGy6kG8GKAtw6QxoA0JaFXR3faHWe6gDi98OmTT1VlV+rJylW1HUtY9zgTgE9arnTbSMyNTLwVbSVK381YexNSzz63BadvRnYsGPRsdODzKXQ3sZO9DN0/vYGb8JnsxDBfXX+cbs0QOj68c+fw0OzskD+Z9AeSSfVFhw5eeOHBQxdldkxPT01NT+8g/I2X89fRrTCVAiPv79l4LCZdo6pH4z4yL0ZNWZQNNxu15asZeb1mUD/gbWeiDN2pVs8VpB3rav0huNjM3OoI3Iw5GxuNW4OSLaz3c0PBnjFLIOf+X77QQD5h8UdFq+QJ9xed2VynUIC+Mc1K0HcY/EyqyDYkpSqFwVS6VKvywYBg2ErwrGPD1gi/lKvQsv50WxrJ+fvkdi5iSLuFeH9XphAQLEF9wN4XssU8Jr9LzFj8GXVEFB1ur8cjhYIup8dh8vCSxhGwSQlNSyrgiLh1eK5BA6EZoH0bowOtg3fPbLKoq/EBAWdxeK2mengtLvijLGwOZPDytfrkQ+Pd3Z95h1KZPiqe/m386IdH374T7JJ3sSeYvOLgJnaJsd6/1t+buJM9cVnhRmzLPAu/ue3Mv8H+td53Z4I9Eb6R+NcXgZ11j2J0E//a+Nb+9T0X7L7Ae7HyYvZ7x47Zz8H6aW0H+3XmCcU2sIOSm+Gg38S/xhJjbPCv5QJkLN8TzqDIG4x2RaciHyP3wRa4Zb9ucVg8grJrEK6Dyu4B7MceZZ9j7lXEiHwGN+u9efXsnecjxGl2OI7DBzvR7HPkT4sMhivxnR8A+p2nuOQv9p3DhUIYf0xut8nicrGnUqFwKhUOpbxOu92JP/8/fGfF2qXsJHOnYlLOIwSIl4lteGU1ssCu0uVPt0K9Ohz6wGyj2oJQKmk2dcJkt5tMNtsj8DHBPftl62Wel+1GDDbaK1dmQ/8SU+n7JD39MrKxb+OZ+t6fmn3Phr4v8Fz2/s36PgJ9f0ThB0pKYEkXGJx/sJI+XbKtrV2lNfEmLMirVKi1sjFmlavHFQ318ZLMtNwWGH6EDfvtXpfToLcqwnX32vVYPxvIaY1ajlPK16s3jqBGP57U7+H5q0WFmmVR6lit7IahMMs6Jg+sywztlzHpRu2+CjKTlU4fTCQerEOAXbua7WZeU+hJlbGbwfvu2+WTctkGzlRSriF6ooQ41QX8oeFD/BHl4YXUYbbbs2+fZ5x7p+dS0mYrtHlrXZvt0OpbtYmzP5U2z5OOJeU27e5LvKTNq6DNOxQStOEmM72xLWqDcKs0c4mzlO2rNJOJzWt3fV+bznil99uUomTx8A6NVqOM1N0DRouLnpGJQLpD12GyKP0Zcv1/SKMcvQAAAAEAAAACBWDcNjMwXw889QAfA+gAAAAA0goY+gAAAADZuMEA/wn/BgNzA3AAAAAIAAIAAAAAAAB42mNgZGBgPvHvBJDc8p/zvyhzMQNQBBkwsgAAmGMF4njabZNPSFVBFId/M3dhRfWwRVrJ1edTec/88zJ9ZiUqLlyYGDdKtBAKwgTLiiAqjDYRRCtX7cJahAuhRUSr1uKiTQtbuHBTFEX2IKwgmL47XkXE9/jumXtmzsyZ8zvXTCgtfmaAxzw2rbNmVqdNURloDY4pYy+qSn/xNSuCOvNcx5mrxtds2pXD9phR7cLXAINQAwehFA5APpnLQTZe72PZY4NZ1QWDOmqrFNhTGrEn1GrHsCmNmB/Ycd6fMC6BZVXaXuxn/IvwCJ4yX0hsB3a/6m25KuxDDdlACvapzBqlzJJz9pAauccoOe/FVnL+SfNLu22oB+YP8TnuOa8me5gcf6rJ1CjE30hukVbVq9/uo1lh7BQFnYpsBkK/PvIx54l/oQoTqZyYfvOBvd+r3LzjPMbctZJzq1XUheT8Gi0ktS+qE9qS+pX5NUXODjVlv+iIGVatmSP/uGbU3rzkXqEem35f22ozqSxk8C3aFvLJr+nD+xv8Q+Yqd5lTIdij7iALFeg8q7yv+zYEBe3wWqTWtFjHlLh/aDGAXYFv9r7SGzpsgbxasC1ei014LfqI6aZe1H07glJ6DS28DpvQqvvutVh1y/DVptW2ocMW4rr4MVpsxuuCZl4T9GW/iB5sDfqIiXMLdQsuSe4G8HW4y3AG7sE1mIaZuM5el7i2b+m162i5bmv5rpZgOoEovYI8c7F+6ywrF1R5rTqgKwZdOqDLk1c2eK3RONak0D+lgs654XjvuE/slAKv/yfJ9ii0DZBRGLRDN+NxX89GG/E+SZ70iO+HpF+gnrvccQtuwg26K+6Zm3E3+Y/BXbfT3f4Prv3ldwB42nXCX0gaYQAA8Os0/+v5vzP1+767++487zw9bxIRERFDYoyI0YNEiIQPexgyJEKGyBg+ScSIGGNID2OIDxER0kMPPYgMGWMPErKHEeLDiOhhRAyRGOthr+P3IwhC+idD5InBxObEFimSC2SWrJANskve6vQ6Qbekq+naeqf+jb43qU2+n/xmyBm6hgvDwEgaHca4sWLCpqKpbxbMOXPd3LNoloJl19K2Oqyadc86tM3YyrZf9rT91D5wsI6s44JSqQLVoNrUJTV2AqfmnHceu0RXyXXjXnXXPeuepmfglbzb3qYP+V76Ov4Ff8s/mspPtWiCnqc/0XeB5cDrwPfA9XR6uvqgFbQFXwUvQ4uh9dDXUD+8Ht4MF8LV8A5wABqsgRrYBwegCY7BENyA35CAJuiFApyFT+AH2IAn8Bx+gX04RMtoDeXQC1RCVfQW1VETtRgL42dYJs7MMWnmGVNk/rAW1s+ybJydY8vsPWfivBziYtws95gbYT124hAWcQov4qc4g/P4Ct/xBG/jaR7zKl/gx4JBcAtAkIQZ4UQ4j6xECpGOmBHzYkEsiXvioXgRpaNSNBvdjZ5KrFSUjv7jTPos9aSf0lhGclpelTfk5/K2XJcPH3TkH/JIHsXKsX7sOjZSikpFqSnvlI/KkXIWT8VvE1JiJbGTuFJFdUndUKtqW71PxpJryf1kT0tpW9qB1n3k/wtFiKDiAAAAAQAAAREAaAAEAHYABQABAAAAAAAKAAACAADTAAMAAXjanVXLTlNRFF2lWCAqAwemOjBn4ECNXqBUojCxisTGhiKtEId9XEpDX7aXIn6SX8HQxw/oxPgFxqEj4zrrnNLHQEnTnHvX3a+z1977nAK4hu+IIza7AOAHl8Mx3OKXwzNYxB+P43gSu+LxLIJYzuNLiGLvPU7gXuynx3M4m0l6PI/0zFePF5CMD+JcRip+2+OrcRPf83gR6UTf44+4nvjg8ScsJ848/oz5xC+Pv2Ax8dvhb3HcnEvgGdro4BRd1FHDISIYpLCMFa775zg1gtNEGVTpV0ZIXKB3j34hmnwbZNFChdou49pnSboqNXcUP6J8HUv8negX0GIQLZBnk7q72vGEWUX0MtiltsfVRd9H26JlS/luM0LT5mKSzKaNY1pVEJobjDfyrVxL9LFZ7lDWVtQa9Q3Ku+QXkGGKHDfIcBNPkScajTDwd94PJvz/vZeZsN4Tmx4ZWh5mbPcdeg8k9rfBGrTJtSLbPnUr0gV4hDVqm4x4xHjW5oDSBqOW5f+Qaw2r7Noy39NyqYtHiStSR6vqtrU7oqzNPaedibq42x5bv9f8qp/rCkTO0u3eonRJ/kZMD1VBo8jHmgU7xdY6mCqbHSLL37D3AZ8vfNSLT23EnTqUFOnjajac0oLqFNHX1m1YVdsrW+WW5tvyPhZTx21QmQKzzvGdV/zWWOTcWAR7biZny07LijgNMxvfd9jjPlddU1DmMxw7hSXtm8Er4YgVMRPV6TGm7UKHMtuHnmIFqnON+jz9cxOZ/L9GVb1df8usz2BCHDs7GfbsZ3Rqsijw5Bue3oyqVlBF9omK7GieM1bUd4YTv8vnNr+zeC7fPCWGd2Ke0k15ZIWdbktTvo03fL+kxtrY2KGvj+tYiHdk39Uc9pRjVzyalDY0n1XxLxCFU3XYsEbtsenoyadCqwNZGvWvpfNc4tNNRUcZNlXLwWwMT5abiKa42N4O9TWivnxbOq81yk79/WCn1eXkboHoAl0NppqZfXqWxdxFdTdgkfuHqlpFUis3lKcZe5W34zpvwfT5f9dj3ZIhd+r4ExIq/9Fc31JSp85m2vgLnLdLy3jabZJZcJNVGIafF0rbhBJaKGXf9y38/5+kSdkTSnDfV1BDSJM0mjY1TUAWt3HfGBhm9ErH7UYdd0HH9UIdN3AZN/SCa1wAL4RLx/L/pzUyPTNnnu99z5nv+87CCNzxzwkchhlqGZgjNJKR1DGKehpoxIef0TQxhgBjaaaFcYynlQm0MZFJTGYKU5nGdGYwk1nMZg5zmcd8FrCQRSxmCUtZxnKCrMDCHqgdIkyEdqLE6GAlq1jNGtayjvXESbCBTjaSZBPncT4XcCEXcTGXcCmXcTlXcCVXcTXXcC3XcT2b2cIN3MhNpNhKWnU8x73cxwc8znHuZy+P8CQv8LxG8TC/cg8HVK8GHuMJHuRjjqmRp3iR0/zNGZ7lZb7gM15hGxn20cVXZPmcL/mGwxzha34jx/d8y3e8Sp6/2M9P/MCPdPMHJ3iImylwCz0U6eVpStxKH2X6qVJhOzv4ndvYxU52czt7eIdnuJM7uIu7+ZOTvCsfP/Mar/MeR/lFfo1Wk8YooLFqVovGabxaNUFtmqhJmqwpmqppmq4ZmqlZmq05vMGbHOJtPuEtDvIpD/CS5vIhH/G+5mk+j3JKC7RQi7RYS7RUy7RcQa2QJVuOQgoronZFFVOHVmqVVmuN1mqd1iuuRH2+uLOv2/bgNFR7C5YVtww7PSaMnwgZdri0nZAvX05vz2ZKPdt86Uy14kbuWshyfJVCsavWCRvGDOMenajHxIaztDvDIY8Rt6pjWZahbTjohwzDhhHDdsOoYcywwzDu0TZ5bdufK+Sr5WxXur/bs5ykx0iybmO1XHJFJOn2l0x4/QzQNnQMQ4bh5k2pobMHM5mevub8OUZjLlUJFgv5tD+XGgx9u7LlUrCrt9TTWOrNekFlh+f4K93lrOf5cqVq2Y0CQ5cfzKT7s4GhF3Blk3mGYDpdrAT+K39WmrVYrYjXCCfqijazLVWTeaD5Ibumfq39/6O2DtrmE9TudYbP7Ayf2Tkn87/2W0N2AAAAeNrbwKDNsImRiUmbcRMziNzO7GKmpSjCwKG9ncUBymLYzpjgYaMmBhJk8rDRUQGxGDaxcrBrb2BQcK3NlHDx3sGQEBSxgVF6A0PkBsY+AMNyEncA) format("woff")}@font-face{font-family:Source Sans Pro;font-weight:400;font-style:italic;src:url(data:application/font-woff;base64,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) format("woff")}@font-face{font-family:Source Sans Pro;font-weight:600;font-style:normal;src:url(data:application/font-woff;base64,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) format("woff")}@media print{*,*:before,*:after{background:#fff!important;color:#000!important;box-shadow:none!important;text-shadow:none!important}a,a:visited{text-decoration:underline}a[href]:after{content:" (" attr(href) ")"}abbr[title]:after{content:" (" attr(title) ")"}a[href^="#"]:after,a[href^="javascript:"]:after{content:""}pre{white-space:pre-wrap!important}pre,blockquote{border:1px solid #999;page-break-inside:avoid}thead{display:table-header-group}tr,img{page-break-inside:avoid}p,h2,h3{orphans:3;widows:3}h2,h3{page-break-after:avoid}}.sr-only,.navds-sr-only{border:0;clip:rect(0,0,0,0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.sr-only.focusable:active,.sr-only.focusable:focus,.navds-sr-only.focusable:active,.navds-sr-only.focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;white-space:inherit;width:auto}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}body{font-family:var(--navds-font-family);line-height:1.333;color:var(--navds-semantic-color-text);font-size:1.125rem}a{color:var(--navds-semantic-color-link)}@media (prefers-reduced-motion: reduce){*,:before,:after{animation-delay:-1ms!important;animation-duration:1ms!important;animation-iteration-count:1!important;background-attachment:initial!important;scroll-behavior:auto!important;transition-duration:0s!important;transition-delay:0s!important}}.navds-heading{font-weight:var(--navds-font-weight-bold);margin:0}.navds-heading--2xlarge{font-size:var(--navds-font-size-heading-2xlarge);letter-spacing:-.01em;line-height:var(--navds-font-line-height-heading-2xlarge)}.navds-heading--2xlarge.navds-typo--spacing{margin-bottom:var(--navds-spacing-5)}.navds-heading--xlarge{font-size:var(--navds-font-size-heading-xlarge);letter-spacing:-.008em;line-height:var(--navds-font-line-height-heading-xlarge)}.navds-heading--xlarge.navds-typo--spacing{margin-bottom:var(--navds-spacing-4)}.navds-heading--large{font-size:var(--navds-font-size-heading-large);letter-spacing:-.004em;line-height:var(--navds-font-line-height-heading-large)}.navds-heading--large.navds-typo--spacing{margin-bottom:var(--navds-spacing-3)}.navds-heading--medium{font-size:var(--navds-font-size-heading-medium);letter-spacing:-.002em;line-height:var(--navds-font-line-height-heading-medium)}.navds-heading--medium.navds-typo--spacing{margin-bottom:var(--navds-spacing-3)}.navds-heading--small{font-size:var(--navds-font-size-heading-small);letter-spacing:-.001em;line-height:var(--navds-font-line-height-heading-small)}.navds-heading--small.navds-typo--spacing{margin-bottom:var(--navds-spacing-3)}.navds-heading--xsmall{font-size:var(--navds-font-size-heading-xsmall);letter-spacing:-.001em;line-height:var(--navds-font-line-height-heading-xsmall)}.navds-heading--xsmall.navds-typo--spacing{margin-bottom:var(--navds-spacing-3)}.navds-ingress{font-size:var(--navds-font-size-xlarge);font-weight:var(--navds-font-weight-regular);letter-spacing:-.001em;line-height:var(--navds-font-line-height-xlarge);margin:0}.navds-ingress.navds-typo--spacing{margin-bottom:var(--navds-spacing-10)}.navds-body-long{font-size:var(--navds-font-size-large);font-weight:var(--navds-font-weight-regular);letter-spacing:0;line-height:var(--navds-font-line-height-xlarge);margin:0}.navds-body-long.navds-typo--spacing{margin-bottom:var(--navds-spacing-7)}.navds-body-long--small{font-size:var(--navds-font-size-medium);letter-spacing:.002em;line-height:var(--navds-font-line-height-large)}.navds-body-long--small.navds-typo--spacing{margin-bottom:var(--navds-spacing-6)}.navds-body-short{font-size:var(--navds-font-size-large);font-weight:var(--navds-font-weight-regular);letter-spacing:0;line-height:var(--navds-font-line-height-large);margin:0}.navds-body-short.navds-typo--spacing{margin-bottom:var(--navds-spacing-3)}.navds-body-short--small{font-size:var(--navds-font-size-medium);letter-spacing:.002em;line-height:var(--navds-font-line-height-medium)}.navds-body-short--small.navds-typo--spacing{margin-bottom:var(--navds-spacing-2)}.navds-label{font-size:var(--navds-font-size-large);font-weight:var(--navds-font-weight-bold);letter-spacing:0;line-height:var(--navds-font-line-height-large);margin:0}.navds-label.navds-typo--spacing{margin-bottom:var(--navds-spacing-3)}.navds-label--small{font-size:var(--navds-font-size-medium);letter-spacing:.002em;line-height:var(--navds-font-line-height-medium)}.navds-label--small.navds-typo--spacing{margin-bottom:var(--navds-spacing-2)}.navds-detail{font-size:var(--navds-font-size-small);font-weight:var(--navds-font-weight-bold);letter-spacing:.004em;line-height:var(--navds-font-line-height-medium);margin:0}.navds-detail.navds-typo--spacing{margin-bottom:var(--navds-spacing-2)}.navds-detail--small{font-weight:var(--navds-font-weight-regular)}.navds-detail--small.navds-typo--spacing{margin-bottom:var(--navds-spacing-2)}.navds-grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));grid-gap:var(--navds-spacing-4)}@media (min-width: 448px){.navds-grid{grid-gap:var(--navds-spacing-6)}}.navds-grid__cell--xs-1{grid-column:span 1}.navds-grid__cell--xs-2{grid-column:span 2}.navds-grid__cell--xs-3{grid-column:span 3}.navds-grid__cell--xs-4{grid-column:span 4}.navds-grid__cell--xs-5{grid-column:span 5}.navds-grid__cell--xs-6{grid-column:span 6}.navds-grid__cell--xs-7{grid-column:span 7}.navds-grid__cell--xs-8{grid-column:span 8}.navds-grid__cell--xs-9{grid-column:span 9}.navds-grid__cell--xs-10{grid-column:span 10}.navds-grid__cell--xs-11{grid-column:span 11}.navds-grid__cell--xs-12{grid-column:span 12}@media (min-width: 448px){.navds-grid__cell--sm-1{grid-column:span 1}.navds-grid__cell--sm-2{grid-column:span 2}.navds-grid__cell--sm-3{grid-column:span 3}.navds-grid__cell--sm-4{grid-column:span 4}.navds-grid__cell--sm-5{grid-column:span 5}.navds-grid__cell--sm-6{grid-column:span 6}.navds-grid__cell--sm-7{grid-column:span 7}.navds-grid__cell--sm-8{grid-column:span 8}.navds-grid__cell--sm-9{grid-column:span 9}.navds-grid__cell--sm-10{grid-column:span 10}.navds-grid__cell--sm-11{grid-column:span 11}.navds-grid__cell--sm-12{grid-column:span 12}}@media (min-width: 648px){.navds-grid__cell--md-1{grid-column:span 1}.navds-grid__cell--md-2{grid-column:span 2}.navds-grid__cell--md-3{grid-column:span 3}.navds-grid__cell--md-4{grid-column:span 4}.navds-grid__cell--md-5{grid-column:span 5}.navds-grid__cell--md-6{grid-column:span 6}.navds-grid__cell--md-7{grid-column:span 7}.navds-grid__cell--md-8{grid-column:span 8}.navds-grid__cell--md-9{grid-column:span 9}.navds-grid__cell--md-10{grid-column:span 10}.navds-grid__cell--md-11{grid-column:span 11}.navds-grid__cell--md-12{grid-column:span 12}}@media (min-width: 960px){.navds-grid__cell--lg-1{grid-column:span 1}.navds-grid__cell--lg-2{grid-column:span 2}.navds-grid__cell--lg-3{grid-column:span 3}.navds-grid__cell--lg-4{grid-column:span 4}.navds-grid__cell--lg-5{grid-column:span 5}.navds-grid__cell--lg-6{grid-column:span 6}.navds-grid__cell--lg-7{grid-column:span 7}.navds-grid__cell--lg-8{grid-column:span 8}.navds-grid__cell--lg-9{grid-column:span 9}.navds-grid__cell--lg-10{grid-column:span 10}.navds-grid__cell--lg-11{grid-column:span 11}.navds-grid__cell--lg-12{grid-column:span 12}}:root{--navds-accordion-color-text: var(--navds-semantic-color-text);--navds-accordion-color-background: var( ---navds-semantic-color-component-background-light );--navds-accordion-color-text-hover: var(--navds-semantic-color-link);--navds-accordion-color-border-hover: var( --navds-semantic-color-interaction-primary );--navds-accordion-color-border-focus: var( ---navds-semantic-color-component-background-light )}.navds-accordion .ReactCollapse--collapse{transition:height .25s cubic-bezier(.4,0,.2,1)}.navds-accordion{background:var(--navds-accordion-color-background)}.navds-accordion__header:focus{outline:none;box-shadow:var(--navds-shadow-focus);border-color:var(--navds-accordion-color-border-focus)}.navds-accordion__header:hover{color:var(--navds-accordion-color-text-hover);border-color:var(--navds-accordion-color-border-hover);text-decoration:underline}.navds-accordion__expand-icon{width:1.5rem;height:1.5rem;flex-shrink:0}.navds-accordion__expand-icon--flip{transform:rotate(180deg)}.navds-accordion__header{padding:var(--navds-spacing-4) var(--navds-spacing-3);background:transparent;text-align:left;border:none;width:100%;margin:0;cursor:pointer;display:flex;justify-content:space-between;align-items:center;border-bottom:2px solid #a0a0a0;gap:var(--navds-spacing-4)}.navds-accordion__content{color:var(--navds-accordion-color-text);padding:var(--navds-spacing-5) var(--navds-spacing-3) var(--navds-spacing-10)}.navds-accordion__expand-icon--filled{display:none}.navds-accordion__header:hover>.navds-accordion__expand-icon.navds-accordion__expand-icon--filled{display:inherit}.navds-accordion__header:hover>.navds-accordion__expand-icon{display:none}:root{--navds-accordion-menu-color-text: var(--navds-semantic-color-link);--navds-accordion-menu-color-text-focus: var(--navds-semantic-color-text);--navds-accordion-menu-color-background-hover: var( --navds-global-color-blue-50 );--navds-accordion-menu-color-text-active: var(--navds-semantic-color-text);--navds-accordion-menu-outline-focus: var(--navds-semantic-color-focus)}.navds-accordion-menu__list{list-style:none;margin:0;padding:0;font-weight:var(--navds-font-weight-bold)}.navds-accordion-menu-collapsable__button{cursor:pointer;background-color:transparent;border:none;font:inherit;text-align:inherit;margin:0;padding:0;width:100%;display:flex;justify-content:space-between;align-items:center;font-weight:var(--navds-font-weight-bold);color:var(--navds-accordion-menu-color-text);text-decoration:underline}.navds-accordion-menu-item,.navds-accordion-menu-collapsable__button{display:flex;padding:var(--navds-spacing-3) var(--navds-spacing-4);text-decoration:none}.navds-accordion-menu-collapsable__expand-icon{font-size:1.5rem;color:var(--navds-accordion-menu-color);flex-shrink:0;margin-left:var(--navds-spacing-2)}.navds-accordion-menu-collapsable--open>.navds-accordion-menu-collapsable__button>.navds-accordion-menu-collapsable__expand-icon{transform:rotate(180deg)}.navds-accordion-menu-collapsable .navds-accordion-menu-item,.navds-accordion-menu-collapsable .navds-accordion-menu-collapsable .navds-accordion-menu-collapsable__button{padding-left:var(--navds-spacing-8)}.navds-accordion-menu-collapsable .navds-accordion-menu-collapsable .navds-accordion-menu-item,.navds-accordion-menu-collapsable .navds-accordion-menu-collapsable .navds-accordion-menu-collapsable .navds-accordion-menu-collapsable__button{padding-left:var(--navds-spacing-12)}.navds-accordion-menu-collapsable .navds-accordion-menu-collapsable .navds-accordion-menu-collapsable .navds-accordion-menu-item,.navds-accordion-menu-collapsable .navds-accordion-menu-collapsable .navds-accordion-menu-collapsable .navds-accordion-menu-collapsable .navds-accordion-menu-collapsable__button{padding-left:var(--navds-spacing-16)}.navds-accordion-menu-item:focus,.navds-accordion-menu-collapsable__button:focus{outline:3px solid var(--navds-accordion-menu-outline-focus);outline-offset:-3px;color:var(--navds-accordion-menu-color-text-focus)}.navds-accordion-menu-collapsable__button:focus>.navds-accordion-menu-collapsable__expand-icon{color:var(--navds-accordion-menu-color-focus)}.navds-accordion-menu-item:hover,.navds-accordion-menu-collapsable__button:hover{background-color:var(--navds-accordion-menu-color-background-hover)}.navds-accordion-menu-item--active{box-shadow:inset .5rem 0 var(--navds-semantic-color-link);color:var(--navds-accordion-menu-color-text-active);text-decoration:none}:root{--navds-alert-color-border: var(--navds-semantic-color-border-muted);--navds-alert-color-error-border: var( --navds-semantic-color-feedback-danger-border );--navds-alert-color-error-background: var( --navds-semantic-color-feedback-danger-background );--navds-alert-color-warning-border: var( --navds-semantic-color-feedback-warning-border );--navds-alert-color-warning-background: var( --navds-semantic-color-feedback-warning-background );--navds-alert-color-info-border: var( --navds-semantic-color-feedback-info-border );--navds-alert-color-info-background: var( --navds-semantic-color-feedback-info-background );--navds-alert-color-success-border: var( --navds-semantic-color-feedback-success-border );--navds-alert-color-success-background: var( --navds-semantic-color-feedback-success-background );--navds-alert-color-error-icon: var( --navds-semantic-color-feedback-danger-icon );--navds-alert-color-error-icon-background: var( --navds-semantic-color-component-background-light );--navds-alert-color-warning-icon: var( --navds-semantic-color-feedback-warning-icon );--navds-alert-color-warning-icon-background: var( --navds-semantic-color-component-background-inverted );--navds-alert-color-info-icon: var(--navds-semantic-color-feedback-info-icon);--navds-alert-color-info-icon-background: var( --navds-semantic-color-component-background-light );--navds-alert-color-success-icon: var( --navds-semantic-color-feedback-success-icon );--navds-alert-color-success-icon-background: var( --navds-semantic-color-component-background-light )}.navds-alert{border-radius:4px;border:1px solid;border-color:var(--navds-alert-color-border);padding:calc(var(--navds-spacing-4) + 1px) calc(var(--navds-spacing-4) + 1px);display:flex;gap:var(--navds-spacing-3);align-items:center}.navds-alert__wrapper{max-width:43.5rem}.navds-alert--small{padding:calc(var(--navds-spacing-1) - 1px) var(--navds-spacing-4)}.navds-alert--full-width{border-radius:0}.navds-alert>.navds-alert__icon{flex-shrink:0;font-size:1.5rem;align-self:flex-start;height:var(--navds-font-line-height-xlarge)}.navds-alert--small>.navds-alert__icon{font-size:1.25rem;height:var(--navds-font-line-height-large)}.navds-alert--error{border-color:var(--navds-alert-color-error-border);background-color:var(--navds-alert-color-error-background)}.navds-alert--error>.navds-alert__icon{color:var(--navds-alert-color-error-icon);background:radial-gradient(circle,var(--navds-alert-color-error-icon-background) 50%,0,transparent)}.navds-alert--warning{border-color:var(--navds-alert-color-warning-border);background-color:var(--navds-alert-color-warning-background)}.navds-alert--warning>.navds-alert__icon{color:var(--navds-alert-color-warning-icon);background:radial-gradient(circle,var(--navds-alert-color-warning-icon-background) 50%,0,transparent)}.navds-alert--info{border-color:var(--navds-alert-color-info-border);background-color:var(--navds-alert-color-info-background)}.navds-alert--info>.navds-alert__icon{color:var(--navds-alert-color-info-icon);background:radial-gradient(circle,var(--navds-alert-color-info-icon-background) 50%,0,transparent)}.navds-alert--success{border-color:var(--navds-alert-color-success-border);background-color:var(--navds-alert-color-success-background)}.navds-alert--success>.navds-alert__icon{color:var(--navds-alert-color-success-icon);background:radial-gradient(circle,var(--navds-alert-color-success-icon-background) 50%,0,transparent)}.navds-alert--inline{background-color:transparent;border-color:transparent;padding:0}:root{--navds-button-color-primary-text: var(--navds-semantic-color-text-inverted);--navds-button-color-primary-border-focus: var( --navds-semantic-color-text-inverted );--navds-button-color-primary-background: var( --navds-semantic-color-interaction-primary );--navds-button-color-primary-background-hover: var( --navds-semantic-color-interaction-primary-hover );--navds-button-color-primary-background-active: var( --navds-semantic-color-interaction-primary-selected );--navds-button-color-secondary-text: var( --navds-semantic-color-interaction-primary );--navds-button-color-secondary-text-hover: var( --navds-semantic-color-text-inverted );--navds-button-color-secondary-text-active: var( --navds-semantic-color-text-inverted );--navds-button-color-secondary-border: var( --navds-semantic-color-interaction-primary );--navds-button-color-secondary-border-focus-active-hover: var( --navds-semantic-color-component-background-light );--navds-button-color-secondary-background: var( --navds-semantic-color-component-background-light );--navds-button-color-secondary-background-hover: var( --navds-semantic-color-interaction-primary-hover );--navds-button-color-secondary-background-active: var( --navds-semantic-color-interaction-primary-selected );--navds-button-color-tertiary-text: var( --navds-semantic-color-interaction-primary );--navds-button-color-tertiary-text-active: var( --navds-semantic-color-text-inverted );--navds-button-color-tertiary-border-hover: var( --navds-semantic-color-interaction-primary );--navds-button-color-tertiary-border-focus: var( --navds-semantic-color-interaction-primary );--navds-button-color-tertiary-border-active: var( --navds-semantic-color-component-background-light );--navds-button-color-tertiary-background-active: var( --navds-semantic-color-interaction-primary-selected );--navds-button-color-danger-text: var(--navds-semantic-color-text-inverted);--navds-button-color-danger-background: var( --navds-semantic-color-interaction-danger );--navds-button-color-danger-background-hover: var( --navds-semantic-color-interaction-danger-hover );--navds-button-color-danger-background-active: var( --navds-semantic-color-interaction-danger-selected );--navds-button-color-danger-border-focus: var( --navds-semantic-color-component-background-light )}.navds-button{display:inline-flex;cursor:pointer;margin:0;text-align:center;text-decoration:none;border:none;background:none;border-radius:2px;min-width:48px;padding:var(--navds-spacing-3)}.navds-button--small{padding-top:.375rem;padding-bottom:.375rem;min-width:32px}.navds-button:focus{outline:none;box-shadow:var(--navds-shadow-focus)}.navds-button__inner{margin:auto;display:flex;align-items:center;gap:var(--navds-spacing-2)}.navds-button svg{font-size:1.5rem}.navds-button--small svg{font-size:1.25rem}.navds-button--primary{background-color:var(--navds-button-color-primary-background);color:var(--navds-button-color-primary-text)}.navds-button--primary:hover{background-color:var(--navds-button-color-primary-background-hover)}.navds-button--primary:active{background-color:var(--navds-button-color-primary-background-active)}.navds-button--primary:focus{box-shadow:inset 0 0 0 1px var(--navds-button-color-primary-border-focus),var(--navds-shadow-focus)}.navds-button--primary:hover:disabled,.navds-button--primary:active:disabled{background-color:var(--navds-button-color-primary-background)}.navds-button--secondary{color:var(--navds-button-color-secondary-text);background-color:var(--navds-button-color-secondary-background);box-shadow:inset 0 0 0 2px var(--navds-button-color-secondary-border)}.navds-button--secondary:hover{color:var(--navds-button-color-secondary-text-hover);background-color:var(--navds-button-color-secondary-background-hover);box-shadow:none}.navds-button--secondary:focus{box-shadow:inset 0 0 0 2px var(--navds-button-color-secondary-border),var(--navds-shadow-focus)}.navds-button--secondary:active{color:var(--navds-button-color-secondary-text-active);background-color:var(--navds-button-color-secondary-background-active);box-shadow:none}.navds-button--secondary:focus:hover,.navds-button--secondary:focus:active{box-shadow:inset 0 0 0 1px var(--navds-button-color-secondary-border-focus-active-hover),var(--navds-shadow-focus)}.navds-button--secondary:disabled,.navds-button--secondary:hover:disabled{color:var(--navds-button-color-secondary-text);background-color:var(--navds-button-color-secondary-background);box-shadow:inset 0 0 0 2px var(--navds-button-color-secondary-border)}.navds-button--tertiary{color:var(--navds-button-color-tertiary-text)}.navds-button--tertiary:hover{box-shadow:inset 0 0 0 2px var(--navds-button-color-tertiary-border-hover)}.navds-button--tertiary:focus{box-shadow:inset 0 0 0 2px var(--navds-button-color-tertiary-border-focus),var(--navds-shadow-focus)}.navds-button--tertiary:active{color:var(--navds-button-color-tertiary-text-active);background-color:var(--navds-button-color-tertiary-background-active);box-shadow:inset 0 0 0 1px var(--navds-button-color-tertiary-border-active)}.navds-button--tertiary:active:hover{background-color:var(--navds-button-color-tertiary-background-active)}.navds-button--tertiary:active:focus{box-shadow:inset 0 0 0 1px var(--navds-button-color-tertiary-border-active),var(--navds-shadow-focus)}.navds-button--tertiary:disabled,.navds-button--tertiary:active:disabled,.navds-button--tertiary:active:hover:disabled{color:var(--navds-button-color-tertiary-text);background:none;box-shadow:none}.navds-button--danger{background-color:var(--navds-button-color-danger-background);color:var(--navds-button-color-danger-text)}.navds-button--danger:hover{background-color:var(--navds-button-color-danger-background-hover)}.navds-button--danger:active{background-color:var(--navds-button-color-danger-background-active)}.navds-button--danger:focus{box-shadow:inset 0 0 0 1px var(--navds-button-color-danger-border-focus),var(--navds-shadow-focus)}.navds-button--danger:hover:disabled,.navds-button--danger:active:disabled{background-color:var(--navds-button-color-danger-background)}.navds-button:disabled{opacity:.3;cursor:not-allowed;transform:none}.navds-content-container{margin-left:auto;margin-right:auto;max-width:79.5rem;padding:var(--navds-spacing-4)}@media (min-width: 448px){.navds-content-container{padding:var(--navds-spacing-6)}}:root{--navds-guide-panel-color-background: var( --navds-semantic-color-component-background-light );--navds-guide-panel-color-border: var(--navds-global-color-blue-400);--navds-guide-panel-color-illustration-background: var( --navds-global-color-blue-200 )}.navds-guide-panel{position:relative;padding-left:2.5rem}.navds-guide-panel__content{background-color:var(--navds-guide-panel-color-background);border-radius:4px;border:2px solid var(--navds-guide-panel-color-border);min-height:7.25rem;padding:1.5rem 1.5rem 1.5rem 3.5rem}.navds-guide-panel--poster{padding-left:0;padding-top:3.125rem}.navds-guide-panel--poster .navds-guide-panel__content{padding:4.25rem 2rem 2rem}.navds-guide-panel .navds-guide{position:absolute;top:1rem;transform:translate(-50%)}.navds-guide-panel--poster .navds-guide{left:50%;top:0}.navds-guide{display:flex;align-items:center;justify-content:center}.navds-guide__illustration{background:var(--navds-guide-panel-color-illustration-background);border-radius:50%;overflow:hidden}.navds-guide__illustration svg,.navds-guide__illustration img{height:100%;width:100%}.navds-guide__illustration--small{height:5rem;width:5rem}.navds-guide__illustration--medium{height:6.25rem;width:6.25rem}.navds-fieldset{margin:0;padding:0;border:0;min-width:0}.navds-fieldset>:not(:first-child):not(:empty){margin-top:var(--navds-spacing-2)}.navds-fieldset>.navds-fieldset__description:not(:empty){margin-top:var(--navds-spacing-1)}.navds-fieldset>.sr-only+:not(:first-child):not(:empty){margin-top:0}.navds-fieldset:disabled>.navds-fieldset__legend,.navds-fieldset:disabled>.navds-fieldset__description{opacity:.3}.navds-form-field>:not(:first-child):not(:empty),.navds-form-field>input:not(:first-child){margin-top:var(--navds-spacing-2)}.navds-form-field>.sr-only+:not(:first-child):not(:empty),.navds-form-field>.sr-only+input:not(:first-child){margin-top:0}:root{--navds-error-summary-color-background: var( --navds-semantic-color-component-background-light );--navds-error-summary-color-border: var( --navds-semantic-color-feedback-danger-border )}.navds-error-summary{background-color:var(--navds-error-summary-color-background);padding:var(--navds-spacing-4);border:4px solid var(--navds-error-summary-color-border)}.navds-error-summary--small{padding:var(--navds-spacing-2)}.navds-error-summary:focus{box-shadow:var(--navds-shadow-focus);outline:none}.navds-error-summary__list{margin:1rem 0;display:flex;flex-direction:column;gap:.25rem}.navds-error-summary--small>.navds-error-summary__list{margin:.5rem 0}:root{--navds-confirmation-panel-color-background: var( --navds-semantic-color-feedback-warning-background );--navds-confirmation-panel-color-background-checked: var( --navds-semantic-color-feedback-success-background );--navds-confirmation-panel-color-border-checked: var( --navds-semantic-color-feedback-success-background );--navds-confirmation-panel-color-background-error: var( --navds-semantic-color-feedback-danger-background );--navds-confirmation-panel-color-checkbox-background-checked-hover: var( --navds-global-color-green-700 );--navds-confirmation-panel-color-checkbox-border-checked-hover: var( --navds-global-color-green-700 );--navds-confirmation-panel-color-checkbox-background-checked: var( --navds-global-color-green-500 );--navds-confirmation-panel-color-checkbox-border-checked: var( --navds-semantic-color-feedback-success-border );--navds-confirmation-panel-color-checkbox-label-checked: var( --navds-semantic-color-text )}.navds-confirmation-panel{display:flex;flex-direction:column;gap:var(--navds-spacing-4);padding:var(--navds-spacing-4);border-radius:4px;background-color:var(--navds-confirmation-panel-color-background);transition:background-color linear .1s}.navds-confirmation-panel__content{max-width:80ch}.navds-confirmation-panel--small{padding:var(--navds-spacing-3);gap:var(--navds-spacing-2)}.navds-confirmation-panel--checked{background-color:var(--navds-confirmation-panel-color-background-checked);border-color:var(--navds-confirmation-panel-color-border-checked)}.navds-confirmation-panel--error{background-color:var(--navds-confirmation-panel-color-background-error);border:1px solid transparent}.navds-confirmation-panel .navds-checkbox__input:hover+.navds-checkbox__label{text-decoration:underline}.navds-confirmation-panel--checked .navds-checkbox__input:hover+.navds-checkbox__label{color:var(--navds-confirmation-panel-color-checkbox-label-checked)}.navds-confirmation-panel--checked .navds-checkbox__input+.navds-checkbox__label:before{transition:none;background-color:var( --navds-confirmation-panel-color-checkbox-background-checked );border-color:var(--navds-confirmation-panel-color-checkbox-border-checked);background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMyAxMCI+ICAgIDxnPiAgICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNNCwxMGMtMC40LDAtMC44LTAuMS0xLjEtMC40TDAuNCw3LjFDMC4xLDYuOCwwLDYuNCwwLDZzMC4yLTAuOCwwLjUtMS4xQzEsNC40LDIsNC40LDIuNSw0LjlMNCw2LjRsNi40LTYgICAgQzEwLjgsMC4xLDExLjEsMCwxMS41LDBjMC40LDAsMC44LDAuMiwxLDAuNWMwLjYsMC42LDAuNSwxLjYtMC4xLDIuMXYwTDUsOS42QzQuNyw5LjksNC40LDEwLDQsMTB6IE0xMS44LDEuOUwxMS44LDEuOSAgICBDMTEuOCwxLjksMTEuOCwxLjksMTEuOCwxLjl6IE0xMS4yLDEuMUMxMS4yLDEuMSwxMS4yLDEuMSwxMS4yLDEuMUwxMS4yLDEuMXoiLz4gICAgPC9nPjwvc3ZnPg==)}.navds-confirmation-panel--checked .navds-checkbox__input:hover+.navds-checkbox__label:before{background-color:var( --navds-confirmation-panel-color-checkbox-background-checked-hover );border-color:var( --navds-confirmation-panel-color-checkbox-border-checked-hover )}.navds-confirmation-panel--checked .navds-checkbox__input:focus:hover+.navds-checkbox__label:before{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMyAxMCI+ICAgIDxnPiAgICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNNCwxMGMtMC40LDAtMC44LTAuMS0xLjEtMC40TDAuNCw3LjFDMC4xLDYuOCwwLDYuNCwwLDZzMC4yLTAuOCwwLjUtMS4xQzEsNC40LDIsNC40LDIuNSw0LjlMNCw2LjRsNi40LTYgICAgQzEwLjgsMC4xLDExLjEsMCwxMS41LDBjMC40LDAsMC44LDAuMiwxLDAuNWMwLjYsMC42LDAuNSwxLjYtMC4xLDIuMXYwTDUsOS42QzQuNyw5LjksNC40LDEwLDQsMTB6IE0xMS44LDEuOUwxMS44LDEuOSAgICBDMTEuOCwxLjksMTEuOCwxLjksMTEuOCwxLjl6IE0xMS4yLDEuMUMxMS4yLDEuMSwxMS4yLDEuMSwxMS4yLDEuMUwxMS4yLDEuMXoiLz4gICAgPC9nPjwvc3ZnPg==)}:root{--navds-error-message-color-text: var( --navds-semantic-color-feedback-danger-text )}.navds-error-message{color:var(--navds-error-message-color-text);display:flex;gap:var(--navds-spacing-2)}.navds-error-message:before{content:"\\2022"}:root{--navds-radio-checkbox-color-background: var( --navds-semantic-color-canvas-background-light );--navds-radio-checkbox-color-background-hover: var( --navds-semantic-color-interaction-primary-hover-subtle );--navds-radio-checkbox-color-background-checked: var( --navds-semantic-color-interaction-primary );--navds-radio-checkbox-color-shadow: var(--navds-semantic-color-border);--navds-radio-checkbox-color-shadow-hover: var( --navds-semantic-color-interaction-primary );--navds-radio-checkbox-color-shadow-checked: var( --navds-semantic-color-interaction-primary );--navds-radio-checkbox-color-shadow-error: var( --navds-semantic-color-interaction-danger );--navds-radio-checkbox-color-label-hover: var( --navds-semantic-color-interaction-primary )}.navds-checkbox,.navds-radio{position:relative;width:fit-content}.navds-checkbox__input,.navds-radio__input{position:absolute;width:48px;height:48px;top:0;left:-12px;z-index:1;opacity:0;cursor:pointer}.navds-checkbox__label,.navds-radio__label{padding:var(--navds-spacing-3) 0;cursor:pointer;display:flex;gap:var(--navds-spacing-2)}.navds-checkbox__label:before,.navds-radio__label:before{content:"";background-color:var(--navds-radio-checkbox-color-background);box-shadow:inset 0 0 0 2px var(--navds-radio-checkbox-color-shadow);width:1.5rem;height:1.5rem;border-radius:4px;flex-shrink:0}.navds-radio__label:before{border-radius:50%}.navds-checkbox__content,.navds-radio__content{display:flex;flex-direction:column;gap:var(--navds-spacing-1)}.navds-checkbox__description,.navds-radio__description{color:var(--navds-color-text-primary)}.navds-checkbox--small>.navds-checkbox__input,.navds-radio--small>.navds-radio__input{width:32px;height:32px;top:0;left:-6px}.navds-checkbox--small>.navds-checkbox__label,.navds-radio--small>.navds-radio__label{padding:6px 0}.navds-checkbox--small>.navds-checkbox__label:before,.navds-radio--small>.navds-radio__label:before{width:1.25rem;height:1.25rem}.navds-checkbox__input:focus+.navds-checkbox__label:before,.navds-radio__input:focus+.navds-radio__label:before{box-shadow:inset 0 0 0 2px var(--navds-radio-checkbox-color-shadow),var(--navds-shadow-focus)}.navds-checkbox__input:hover:focus+.navds-checkbox__label:before,.navds-radio__input:hover:focus+.navds-radio__label:before{box-shadow:inset 0 0 0 2px var(--navds-radio-checkbox-color-shadow-hover),var(--navds-shadow-focus)}.navds-checkbox__input:checked+.navds-checkbox__label:before{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMyAxMCI+ICAgIDxnPiAgICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNNCwxMGMtMC40LDAtMC44LTAuMS0xLjEtMC40TDAuNCw3LjFDMC4xLDYuOCwwLDYuNCwwLDZzMC4yLTAuOCwwLjUtMS4xQzEsNC40LDIsNC40LDIuNSw0LjlMNCw2LjRsNi40LTYgICAgQzEwLjgsMC4xLDExLjEsMCwxMS41LDBjMC40LDAsMC44LDAuMiwxLDAuNWMwLjYsMC42LDAuNSwxLjYtMC4xLDIuMXYwTDUsOS42QzQuNyw5LjksNC40LDEwLDQsMTB6IE0xMS44LDEuOUwxMS44LDEuOSAgICBDMTEuOCwxLjksMTEuOCwxLjksMTEuOCwxLjl6IE0xMS4yLDEuMUMxMS4yLDEuMSwxMS4yLDEuMSwxMS4yLDEuMUwxMS4yLDEuMXoiLz4gICAgPC9nPjwvc3ZnPg==);background-position:6px center;background-repeat:no-repeat;background-size:13px;box-shadow:none;background-color:var(--navds-radio-checkbox-color-background-checked)}.navds-checkbox--small>.navds-checkbox__input:checked+.navds-checkbox__label:before{background-position:4px center}.navds-checkbox__input:checked:focus+.navds-checkbox__label:before{box-shadow:inset 0 0 0 1px #fff,var(--navds-shadow-focus)}.navds-radio__input:checked+.navds-radio__label:before{box-shadow:inset 0 0 0 2px var(--navds-radio-checkbox-color-shadow-checked),inset 0 0 0 4px #fff;background-color:var(--navds-radio-checkbox-color-background-checked)}.navds-radio__input:checked:focus+.navds-radio__label:before{box-shadow:inset 0 0 0 2px var(--navds-radio-checkbox-color-shadow-checked),inset 0 0 0 4px #fff,var(--navds-shadow-focus)}.navds-checkbox__input:hover:not(:disabled)+.navds-checkbox__label,.navds-radio__input:hover:not(:disabled)+.navds-radio__label{color:var(--navds-radio-checkbox-color-label-hover)}.navds-checkbox__input:hover:not(:disabled):not(:checked):not(:focus)+.navds-checkbox__label:before,.navds-radio__input:hover:not(:disabled):not(:checked):not(:focus)+.navds-radio__label:before{box-shadow:inset 0 0 0 2px var(--navds-radio-checkbox-color-shadow-hover);background-color:var(--navds-radio-checkbox-color-background-hover)}.navds-checkbox--error>.navds-checkbox__input:not(:hover):not(:disabled):not(:checked)+.navds-checkbox__label:before,.navds-radio--error>.navds-radio__input:not(:hover):not(:disabled):not(:checked)+.navds-radio__label:before{box-shadow:inset 0 0 0 2px var(--navds-radio-checkbox-color-shadow-error)}.navds-checkbox--error>.navds-checkbox__input:focus:not(:hover):not(:disabled):not(:checked)+.navds-checkbox__label:before,.navds-radio--error>.navds-radio__input:focus:not(:hover):not(:disabled):not(:checked)+.navds-radio__label:before{box-shadow:inset 0 0 0 2px var(--navds-radio-checkbox-color-shadow-error),var(--navds-shadow-focus)}.navds-checkbox--disabled,.navds-radio--disabled{opacity:.3}.navds-checkbox--disabled>.navds-checkbox__input,.navds-checkbox--disabled>.navds-checkbox__label,.navds-radio--disabled>.navds-radio__input,.navds-radio--disabled>.navds-radio__label{cursor:not-allowed}:root{--navds-select-color-background: var( --navds-semantic-color-component-background-light );--navds-select-color-border: var(--navds-semantic-color-border);--navds-select-color-border-hover: var( --navds-semantic-color-interaction-primary );--navds-select-color-border-error: var( --navds-semantic-color-interaction-danger );--navds-select-color-shadow-error: var( --navds-semantic-color-interaction-danger );--navds-select-color-border-disabled: var(--navds-global-color-gray-400);--navds-select-color-background-disabled: var( --navds-semantic-color-component-background-alternate );--navds-select-color-text-disabled: var(--navds-semantic-color-text)}.navds-select__input{appearance:none;padding:.5rem 2.5rem .5rem .5rem;background-color:var(--navds-select-color-background);border-radius:4px;border:1px solid var(--navds-select-color-border);width:100%;box-sizing:border-box;min-height:48px;display:inline-block;position:relative}.navds-select__input:hover{border-color:var(--navds-select-color-border-hover)}.navds-select__input:focus{outline:none;box-shadow:var(--navds-shadow-focus)}.navds-select__container{position:relative;display:flex;width:100%;align-items:center}.navds-select__chevron{position:absolute;font-size:1rem;right:.5rem;pointer-events:none}.navds-form-field--small .navds-select__input{min-height:32px;padding:.25rem}.navds-select--error>* select:not(:hover):not(:focus):not(:disabled){box-shadow:0 0 0 1px var(--navds-select-color-shadow-error);border-color:var(--navds-select-color-border-error)}.navds-select--disabled{opacity:.3}.navds-select__input:disabled{background-color:var(--navds-select-color-background);border-color:var(--navds-select-color-border);box-shadow:none;cursor:not-allowed}:root{--navds-switch-color-label: var(--navds-color-text-primary);--navds-switch-color-label-hover: var( --navds-semantic-color-interaction-primary );--navds-switch-color-track-background: var(--navds-semantic-color-text-muted);--navds-switch-color-track-background-checked: var( --navds-semantic-color-interaction-primary );--navds-switch-color-track-background-hover-checked: var( --navds-semantic-color-interaction-primary-hover );--navds-switch-color-track-shadow-inner-focus: var( --navds-semantic-color-component-background-light );--navds-switch-color-thumb: var( --navds-semantic-color-component-background-light );--navds-switch-color-thumb-loader-checked: var( --navds-semantic-color-interaction-primary )}.navds-switch{position:relative;min-height:48px;width:fit-content}.navds-switch--small{position:relative;min-height:32px}.navds-switch__input{cursor:pointer;position:absolute;z-index:1;width:48px;height:48px;opacity:0;top:0}.navds-switch--small>.navds-switch__input{height:32px;top:0}.navds-switch__label-wrapper{cursor:pointer;color:var(--navds-switch-color-label)}.navds-switch__content{display:flex;flex-direction:column;gap:var(--navds-spacing-1);padding:.75rem 0 .75rem 3.25rem}.navds-switch--small>.navds-switch__label-wrapper>.navds-switch__content{padding:calc(var(--navds-spacing-2) - 2px) 0 calc(var(--navds-spacing-2) - 2px) 3.25rem}.navds-switch--with-description,.navds-switch--small>.navds-switch__label-wrapper>.navds-switch--with-description{padding-bottom:0}.navds-switch__input:hover~.navds-switch__label-wrapper{color:var(--navds-switch-color-label-hover)}.navds-switch__input:disabled:hover~.navds-switch__label-wrapper{color:inherit}.navds-switch__track{width:44px;height:24px;background-color:var(--navds-switch-color-track-background);position:absolute;top:var(--navds-spacing-3);left:0;border-radius:var(--navds-spacing-4);transition:background-color .25s cubic-bezier(.4,0,.2,1)}.navds-switch--small>.navds-switch__track{top:var(--navds-spacing-1)}.navds-switch__input:checked~.navds-switch__track{background-color:var(--navds-switch-color-track-background-checked)}.navds-switch__input:hover:checked~.navds-switch__track{background-color:var(--navds-switch-color-track-background-hover-checked)}.navds-switch__input:disabled~.navds-switch__track{background-color:var(--navds-switch-color-track-background)}.navds-switch__input:checked:disabled~.navds-switch__track{background-color:var(--navds-switch-color-track-background-checked)}.navds-switch__input:focus~.navds-switch__track{box-shadow:0 0 0 1px var(--navds-switch-color-track-shadow-inner-focus),var(--navds-shadow-focus)}.navds-switch__thumb{background-color:var(--navds-switch-color-thumb);border-radius:50%;width:20px;height:20px;position:absolute;transform:translate(0);left:2px;top:2px;transition:transform .25s cubic-bezier(.4,0,.2,1);display:flex;align-items:center;justify-content:center}.navds-switch__input:checked~.navds-switch__track>.navds-switch__thumb{transform:translate(20px)}.navds-switch__input:hover~.navds-switch__track>.navds-switch__thumb{transform:translate(2px)}.navds-switch__input:checked:hover~.navds-switch__track>.navds-switch__thumb{transform:translate(18px)}.navds-switch__input:disabled:hover~.navds-switch__track>.navds-switch__thumb{transform:translate(0)}.navds-switch__input:checked:disabled:hover~.navds-switch__track>.navds-switch__thumb{transform:translate(20px)}.navds-switch__input:checked~.navds-switch__track>.navds-switch__thumb .navds-loader__foreground{stroke:var(--navds-switch-color-thumb-loader-checked)}.navds-switch__input:disabled{appearance:none}.navds-switch--disabled{opacity:.3}.navds-switch__input:disabled,.navds-switch__input:disabled~.navds-switch__label-wrapper{cursor:not-allowed}:root{--navds-text-field-color-background: var( --navds-semantic-color-component-background-light );--navds-text-field-color-border: var(--navds-semantic-color-border);--navds-text-field-color-border-hover: var( --navds-semantic-color-interaction-primary );--navds-text-field-color-border-error: var( --navds-semantic-color-interaction-danger );--navds-text-field-color-shadow-error: var( --navds-semantic-color-interaction-danger );--navds-text-field-color-border-disabled: var(--navds-global-color-gray-400);--navds-text-field-color-background-disabled: var( --navds-semantic-color-component-background-alternate );--navds-text-field-color-text-disabled: var(--navds-semantic-color-text)}.navds-text-field__input{appearance:none;padding:.5rem;background-color:var(--navds-text-field-color-background);border-radius:4px;border:2px solid var(--navds-text-field-color-border);min-height:48px;width:100%}.navds-form-field--small>.navds-text-field__input{padding:0 .15rem;min-height:32px}.navds-form-field--small>.navds-text-field__description:not(:empty){margin-top:var(--navds-spacing-1)}.navds-text-field__input:hover{border-color:var(--navds-text-field-color-border-hover)}.navds-text-field__input:focus{outline:none;box-shadow:var(--navds-shadow-focus)}.navds-text-field--error>.navds-text-field__input:not(:hover):not(:disabled){border-color:var(--navds-text-field-color-border-error)}.navds-text-field__input:disabled{background-color:var(--navds-text-field-color-background);border-color:var(--navds-text-field-color-border);box-shadow:none;cursor:not-allowed;opacity:.3}.navds-text-field__input[readonly]{background-color:var(--navds-text-field-color-background);border-color:var(--navds-text-field-color-border);box-shadow:none;cursor:not-allowed}.navds-text-field--disabled>.navds-text-field__label,.navds-text-field--disabled>.navds-text-field__description{opacity:.3}.navds-text-field__input[type=search]::-webkit-search-decoration,.navds-text-field__input[type=search]::-webkit-search-cancel-button,.navds-text-field__input[type=search]::-webkit-search-results-button,.navds-text-field__input[type=search]::-webkit-search-results-decoration{-webkit-appearance:none}:root{--navds-textarea-color-background: var( --navds-semantic-color-component-background-light );--navds-textarea-color-border: var(--navds-semantic-color-border);--navds-textarea-color-border-hover: var( --navds-semantic-color-interaction-primary );--navds-textarea-color-border-error: var( --navds-semantic-color-interaction-danger );--navds-textarea-color-shadow-error: var( --navds-semantic-color-interaction-danger );--navds-textarea-color-counter-text: var(--navds-global-color-gray-400);--navds-textarea-color-counter-text-error: var( --navds-semantic-color-interaction-danger );--navds-textarea-color-text-disabled: var(--navds-semantic-color-text);--navds-textarea-color-border-disabled: var(--navds-global-color-gray-400);--navds-textarea-color-background-disabled: var( --navds-semantic-color-component-background-alternate )}.navds-textarea__wrapper{position:relative;width:100%}.navds-textarea__input{appearance:none;padding:var(--navds-spacing-2);background-color:var(--navds-textarea-color-background);border-radius:4px;border:1px solid var(--navds-textarea-color-border);resize:none;width:100%;transition:height .1s ease-out;display:block;min-height:3rem}.navds-textarea--counter{padding-bottom:var(--navds-spacing-8)}.navds-textarea__input:hover{border-color:var(--navds-textarea-color-border-hover)}.navds-textarea__input:focus{outline:none;box-shadow:var(--navds-shadow-focus)}.navds-form-field--small .navds-textarea__input{padding:var(--navds-spacing-1);min-height:2rem}.navds-form-field--small .navds-textarea--counter.navds-textarea__input{padding-bottom:var(--navds-spacing-7)}.navds-textarea__counter{pointer-events:none;color:var(--navds-textarea-color-counter-text);font-style:italic;position:absolute;text-align:right;left:var(--navds-spacing-3);right:var(--navds-spacing-3);bottom:var(--navds-spacing-2)}.navds-textarea__counter--error{color:var(--navds-textarea-color-counter-text-error)}.navds-textarea--error .navds-textarea__input:not(:hover):not(:focus):not(:disabled){box-shadow:0 0 0 1px var(--navds-textarea-color-shadow-error);border-color:var(--navds-textarea-color-border-error)}.navds-textarea--disabled{opacity:.3}.navds-textarea__input:disabled{background-color:var(--navds-textarea-color-background);border-color:var(--navds-textarea-color-border);box-shadow:none;cursor:not-allowed}.navds-textarea__input[readonly]{background-color:var(--navds-textarea-color-background);border-color:var(--navds-textarea-color-border);box-shadow:none;cursor:not-allowed}:root{--navds-search-field-color-shadow-error: var( --navds-semantic-color-interaction-danger );--navds-search-field-color-border-error: var( --navds-semantic-color-interaction-danger );--navds-search-field-color-clearbutton-border: var( --navds-semantic-color-border )}.navds-search-field__input-wrapper{display:flex;align-items:center;justify-content:center}.navds-form-field--small .navds-search-field__input{padding:.15rem;min-height:32px}.navds-search-field__input-wrapper>*:not(:first-child):not(:last-child){border-radius:0}.navds-search-field__input-wrapper>:first-child{border-top-right-radius:0;border-bottom-right-radius:0}.navds-search-field__input-wrapper>:last-child{border-top-left-radius:0;border-bottom-left-radius:0}.navds-search-field__input-wrapper>:last-child:first-child{border-radius:4px}.navds-search-field__input-wrapper :focus{z-index:var(--navds-z-index-focus)}.navds-search-field__button,.navds-search-field__clear-button{flex-shrink:0}.navds-search-field--error .navds-search-field__input:not(:hover):not(:focus):not(:disabled){box-shadow:0 0 0 1px var(--navds-search-field-color-shadow-error) inset;border-color:var(--navds-search-field-color-border-error)}.navds-search-field--disabled{opacity:.3}:root{--navds-help-text-color-button-background: transparent;--navds-help-text-color-icon: var(--navds-semantic-color-interaction-primary);--navds-help-text-color-icon-hover: var( --navds-semantic-color-component-background-light );--navds-help-text-color-icon-background-hover: var( --navds-semantic-color-interaction-primary );--navds-help-text-color-icon-shadow-hover: var( --navds-semantic-color-interaction-primary );--navds-help-text-color-icon-focus: var( --navds-semantic-color-component-background-light );--navds-help-text-color-icon-background-focus: var( --navds-semantic-color-interaction-primary );--navds-help-text-color-icon-shadow-focus: var(--navds-semantic-color-focus);--navds-help-text-color-popover-background: var( --navds-semantic-color-feedback-info-background )}.navds-help-text__button{margin:0;padding:0;border:0;cursor:pointer;background-color:var(--navds-help-text-color-button-background);border-radius:50%;display:flex;justify-content:center;align-items:center}.navds-help-text__button:focus{outline:none}.navds-help-text__icon{border-radius:50%;font-size:1.5rem;color:var(--navds-help-text-color-icon)}.navds-help-text__button:hover>.navds-help-text__icon{color:var(--navds-help-text-color-icon-hover);background:var(--navds-help-text-color-icon-background-hover);box-shadow:0 0 0 2px var(--navds-help-text-color-icon-shadow-hover)}.navds-help-text__button:focus>.navds-help-text__icon{outline:none;color:var(--navds-help-text-color-icon-focus);background:var(--navds-help-text-color-icon-background-focus);box-shadow:0 0 0 3px var(--navds-help-text-color-icon-shadow-focus)}.navds-help-text__popover>.navds-popover__arrow:before{background-color:var(--navds-help-text-color-popover-background)}.navds-help-text__popover.navds-popover{background-color:var(--navds-help-text-color-popover-background)}:root{--navds-link-color-text: var(--navds-semantic-color-link);--navds-link-color-text-focus: var(--navds-semantic-color-text-inverted);--navds-link-color-text-active: var(--navds-semantic-color-text-inverted);--navds-link-color-background-focus: var(--navds-semantic-color-focus);--navds-link-color-background-active: var(--navds-semantic-color-focus);--navds-link-color-icon: var(--navds-semantic-color-link);--navds-link-color-icon-focus: var(--navds-semantic-color-text-inverted);--navds-link-color-on-info-background: var(--navds-semantic-color-text);--navds-link-color-on-error-background: var(--navds-semantic-color-text)}.navds-link{color:var(--navds-link-color-text);text-decoration:underline;display:inline-flex;align-items:center;gap:var(--navds-spacing-1)}.navds-alert--info .navds-link{color:var(--navds-link-color-on-info-background)}.navds-alert--error .navds-link,.navds-confirmation-panel--error .navds-link{color:var(--navds-link-color-on-error-background)}.navds-link:hover{text-decoration:none}.navds-link:focus{outline:none;color:var(--navds-link-color-text-focus);text-decoration:none;background-color:var(--navds-link-color-background-focus);box-shadow:0 0 0 2px var(--navds-semantic-color-focus)}.navds-link:active{outline:none;color:var(--navds-link-color-text-active);text-decoration:none;background-color:var(--navds-link-color-background-active);box-shadow:0 0 0 2px var(--navds-semantic-color-focus)}.navds-link svg{color:var(--navds-link-color-icon)}.navds-link:focus svg{color:var(--navds-link-color-icon-focus)}:root{--navds-loader-color-foreground: var(--navds-global-color-gray-400);--navds-loader-color-background: var( --navds-semantic-color-component-background-alternate );--navds-loader-color-neutral-foreground: var(--navds-global-color-gray-400);--navds-loader-color-interaction-foreground: var( --navds-semantic-color-interaction-primary );--navds-loader-color-inverted-foreground: var( --navds-semantic-color-component-background-light );--navds-loader-color-inverted-background: rgba(255, 255, 255, .3);--navds-loader-color-transparent-background: transparent;--navds-loader-color-on-button-background: rgba(255, 255, 255, .3);--navds-loader-color-on-button-foreground: currentColor}.navds-loader{width:1.5rem;display:inline-block;position:relative;animation:loader-rotate 1.4s linear infinite}.navds-loader__foreground{animation:loader-dasharray 1.4s ease-in-out infinite;stroke-dasharray:80px,200px;stroke-dashoffset:0;stroke:var(--navds-loader-color-foreground)}.navds-loader__background{stroke:var(--navds-loader-color-background)}.navds-loader--neutral .navds-loader__foreground{stroke:var(--navds-loader-color-neutral-foreground)}.navds-loader--interaction .navds-loader__foreground{stroke:var(--navds-loader-color-interaction-foreground)}.navds-loader--inverted .navds-loader__foreground{stroke:var(--navds-loader-color-inverted-foreground)}.navds-loader--inverted .navds-loader__background{stroke:var(--navds-loader-color-inverted-background)}.navds-loader--transparent .navds-loader__background{stroke:var(--navds-loader-color-transparent-background)}.navds-loader--2xlarge{width:4rem}.navds-loader--xlarge{width:2.5rem}.navds-loader--large{width:2rem}.navds-loader--medium{width:1.5rem}.navds-loader--small{width:1.25rem}.navds-loader--xsmall{width:1rem}.navds-button .navds-loader .navds-loader__foreground{stroke:var(--navds-loader-color-on-button-foreground)}.navds-button:hover .navds-loader .navds-loader__background,.navds-button:active .navds-loader .navds-loader__background,.navds-button--primary .navds-loader .navds-loader__background,.navds-button--danger .navds-loader .navds-loader__background{stroke:var(--navds-loader-color-on-button-background)}@keyframes loader-rotate{to{transform:rotate(360deg)}}@keyframes loader-dasharray{0%{stroke-dasharray:1px,200px;stroke-dashoffset:0}50%{stroke-dasharray:100px,200px;stroke-dashoffset:-15px}to{stroke-dasharray:100px,200px;stroke-dashoffset:-120px}}:root{--navds-modal-color-background: var( --navds-semantic-color-component-background-light );--navds-modal-color-overlay: rgba(38, 38, 38, .7)}.ReactModal__Body--open{overflow:hidden}.navds-modal{background-color:var(--navds-modal-color-background);border-radius:4px;display:block;position:relative;overflow:auto;max-height:100%}.navds-modal__content{padding:var(--navds-spacing-4)}.navds-modal:focus,.navds-modal--focus{box-shadow:var(--navds-shadow-focus);outline:none}.navds-modal__overlay{position:fixed;z-index:var(--navds-z-index-modal);top:0;bottom:0;left:0;right:0;background-color:var(--navds-modal-color-overlay);padding:var(--navds-spacing-4);display:flex;align-items:center;justify-content:center}.navds-modal__button--shake{transform:rotate(0);transition:transform .1s cubic-bezier(.82,2,1,.3)}.navds-modal__overlay:active>.navds-modal:not(:active)>.navds-modal__button--shake{transform:rotate(10deg);transition:transform .1s cubic-bezier(.82,-2,1,.3)}.navds-modal__button{position:absolute;top:var(--navds-spacing-4);right:var(--navds-spacing-4);display:flex;padding:var(--navds-spacing-2)}.navds-modal__button svg{height:1.5rem;width:1.5rem}:root{--navds-popover-color-background: var( --navds-semantic-color-component-background-light );--navds-popover-color-border: var(--navds-semantic-color-border-muted)}.navds-popover{z-index:var(--navds-z-index-popover);background-color:var(--navds-popover-color-background);box-shadow:var(--navds-shadow-popover);border:1px solid;border-color:var(--navds-popover-color-border);border-radius:4px}.navds-popover__content{padding:var(--navds-spacing-4)}.navds-popover--hidden{display:none}.navds-popover:focus{outline:none;box-shadow:var(--navds-shadow-focus)}.navds-popover__arrow{z-index:-1}.navds-popover__arrow:before{display:block;content:"";transform:rotate(45deg);background-color:var(--navds-popover-color-background);border:1px solid;border-color:var(--navds-popover-color-border);width:1rem;height:1rem;top:0;left:0}.navds-popover[data-popper-placement^=top]>.navds-popover__arrow{bottom:-.5rem}.navds-popover[data-popper-placement^=top]>.navds-popover__arrow:before{border-left-color:transparent;border-top-color:transparent}.navds-popover[data-popper-placement^=bottom]>.navds-popover__arrow{top:-.5rem}.navds-popover[data-popper-placement^=bottom]>.navds-popover__arrow:before{border-bottom-color:transparent;border-right-color:transparent}.navds-popover[data-popper-placement^=left]>.navds-popover__arrow{right:-.5rem}.navds-popover[data-popper-placement^=left]>.navds-popover__arrow:before{border-left-color:transparent;border-bottom-color:transparent}.navds-popover[data-popper-placement^=right]>.navds-popover__arrow{left:-.5rem}.navds-popover[data-popper-placement^=right]>.navds-popover__arrow:before{border-right-color:transparent;border-top-color:transparent}:root{--navds-tag-color-border: var(--navds-semantic-color-border-muted);--navds-tag-color-background: var( --navds-semantic-color-component-background-alternate );--navds-tag-color-info-background: var( --navds-semantic-color-feedback-info-background );--navds-tag-color-info-border: var( --navds-semantic-color-feedback-info-border );--navds-tag-color-warning-background: var( --navds-semantic-color-feedback-warning-background );--navds-tag-color-warning-border: var( --navds-semantic-color-feedback-warning-border );--navds-tag-color-success-background: var( --navds-semantic-color-feedback-success-background );--navds-tag-color-success-border: var( --navds-semantic-color-feedback-success-border );--navds-tag-color-error-background: var( --navds-semantic-color-feedback-danger-background );--navds-tag-color-error-border: var( --navds-semantic-color-feedback-danger-border )}.navds-tag{border:1px solid;border-color:var(--navds-tag-color-border);border-radius:4px;background-color:var(--navds-tag-color-background);display:inline-flex;align-items:center;justify-content:center;padding:.125rem var(--navds-spacing-3);min-height:32px}.navds-tag--small{min-height:24px;padding-right:var(--navds-spacing-1);padding-left:var(--navds-spacing-1)}.navds-tag--error{background-color:var(--navds-tag-color-error-background);border-color:var(--navds-tag-color-error-border)}.navds-tag--success{background-color:var(--navds-tag-color-success-background);border-color:var(--navds-tag-color-success-border)}.navds-tag--warning{background-color:var(--navds-tag-color-warning-background);border-color:var(--navds-tag-color-warning-border)}.navds-tag--info{background-color:var(--navds-tag-color-info-background);border-color:var(--navds-tag-color-info-border)}:root{--navds-panel-color-background: var( --navds-semantic-color-component-background-light );--navds-panel-color-border: var(--navds-semantic-color-border-muted)}.navds-panel{background-color:var(--navds-panel-color-background);padding:var(--navds-spacing-4);border-radius:4px;border:1px solid transparent}.navds-panel--border{border-color:var(--navds-panel-color-border)}:root{--navds-link-panel-color-text: var(--navds-semantic-color-text);--navds-link-panel-color-border-hover: var( --navds-semantic-color-interaction-primary );--navds-link-panel-color-title-hover: var(--navds-semantic-color-link)}.navds-link-panel{text-decoration:none;color:var(--navds-link-panel-color-text);display:flex;align-items:center;justify-content:space-between;gap:var(--navds-spacing-2)}.navds-link-panel:hover .navds-link-panel__title{text-decoration:underline;color:var(--navds-link-panel-color-title-hover)}.navds-link-panel:hover{box-shadow:var(--navds-shadow-card);border-color:var(--navds-link-panel-color-border-hover)}.navds-link-panel:focus{box-shadow:var(--navds-shadow-focus);outline:none}.navds-link-panel__chevron{flex-shrink:0;font-size:1.5rem;transition:transform .2s}.navds-link-panel:hover>.navds-link-panel__chevron,.navds-link-panel:focus-within>.navds-link-panel__chevron{transform:translate(4px)}.navds-link-panel__description{margin-top:var(--navds-spacing-2)}:root{--navds-speechbubble-color-background: var( --navds-semantic-color-component-background-alternate );--navds-speechbubble-color-illustration: var(--navds-semantic-color-text);--navds-speechbubble-color-illustration-background: var( --navds-semantic-color-canvas-background );--navds-speechbubble-color-detail-text: var( --navds-semantic-color-text-muted )}.navds-speechbubble{display:flex;align-items:flex-end;gap:var(--navds-spacing-4)}.navds-speechbubble--right{flex-direction:row-reverse}.navds-speechbubble__bubble-list{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:var(--navds-spacing-3)}.navds-speechbubble--right .navds-speechbubble__bubble-list{align-items:flex-end}.navds-speechbubble__illustration{align-items:center;background:var(--navds-speechbubble-color-illustration-background);color:var(--navds-speechbubble-color-illustration);border-radius:50%;display:flex;flex-shrink:0;justify-content:center;overflow:hidden;height:3rem;width:3rem}.navds-speechbubble__illustration svg{align-self:center;height:100%;width:100%}.navds-speechbubble__bubble{padding:1rem;box-shadow:var(--navds-shadow-popover);width:fit-content;max-width:37.5rem;background-color:var(--navds-speechbubble-color-background);border-radius:12px 12px 12px 2px;display:flex;flex-direction:column;gap:var(--navds-spacing-2)}.navds-speechbubble__bubble:focus{box-shadow:var(--navds-shadow-focus);outline:none}.navds-speechbubble--right .navds-speechbubble__bubble{border-radius:12px 12px 2px}.navds-speechbubble__top-text{color:var(--navds-speechbubble-color-detail-text)}.navds-speechbubble--right .navds-speechbubble__top-text{align-self:flex-end}:root{--navds-table-cell-color-border: var(--navds-semantic-color-border-muted);--navds-table-row-color-background-hover: var( --navds-semantic-color-canvas-background );--navds-table-row-color-background-selected: var( --navds-semantic-color-interaction-primary-hover-subtle );--navds-table-row-color-background-selected-hover: var( --navds-global-color-blue-100 );--navds-table-row-color-background-zebra: var( --navds-semantic-color-component-background-alternate );--navds-table-cell-color-border-hover: var(--navds-semantic-color-border)}.navds-table{border-collapse:collapse;width:100%;display:table}.navds-table__header{display:table-header-group}.navds-table__body{display:table-row-group}.navds-table__row{display:table-row}.navds-table__body .navds-table__row:hover{background-color:var(--navds-table-row-color-background-hover)}.navds-table__row--selected{background-color:var(--navds-table-row-color-background-selected)}.navds-table__body .navds-table__row--selected:hover{background-color:var(--navds-table-row-color-background-selected-hover)}.navds-table--zebra-stripes .navds-table__body .navds-table__row:nth-of-type(odd):not(:hover):not(.navds-table__row--selected){background-color:var(--navds-table-row-color-background-zebra)}.navds-table__header-cell,.navds-table__data-cell{display:table-cell;padding:var(--navds-spacing-4);border-bottom:1px solid var(--navds-table-cell-color-border);text-align:left}.navds-table__body .navds-table__row:hover .navds-table__header-cell,.navds-table__body .navds-table__row:hover .navds-table__data-cell{border-color:var(--navds-table-cell-color-border-hover)}.navds-table--small .navds-table__header-cell,.navds-table--small .navds-table__data-cell{padding:var(--navds-spacing-2)}.navds-table .navds-checkbox .navds-checkbox__input{top:-12px}.navds-table .navds-checkbox--small .navds-checkbox__input{top:-6px}.navds-table .navds-checkbox .navds-checkbox__label{padding:0}:root{--navds-page-header-color-background: var( --navds-semantic-color-component-background-light );--navds-page-header-color-shadow-situation: var( --navds-global-color-orange-400 );--navds-page-header-color-shadow-product: var(--navds-global-color-green-400);--navds-page-header-color-shadow-guide: var( --navds-global-color-deepblue-400 )}.navds-page-header{display:flex;justify-content:center;background-color:var(--navds-page-header-color-background);padding-top:1.5rem;padding-bottom:1.5rem;padding-left:calc((100vw - 100%)/2);padding-right:calc((100vw - 100%)/2);margin-left:calc((100vw - 100%)/-2);margin-right:calc((100vw - 100%)/-2)}.navds-page-header__wrapper{width:100%;max-width:56.5rem;text-align:start}.navds-page-header__title{display:flex;margin:0 auto;width:100%;position:relative;flex-direction:column}.navds-page-header--left>.navds-page-header__wrapper{text-align:start}.navds-page-header--center>.navds-page-header__wrapper{text-align:center}.navds-page-header__illustration{margin-right:1.5rem;pointer-events:none}.navds-page-header__illustration>svg{width:5rem;height:5rem}.navds-page-header--situation{box-shadow:0 -4px 0 var(--navds-page-header-color-shadow-situation) inset}.navds-page-header--product{box-shadow:0 -4px 0 var(--navds-page-header-color-shadow-product) inset}.navds-page-header--guide{box-shadow:0 -4px 0 var(--navds-page-header-color-shadow-guide) inset}@media (max-width: 649px){.navds-page-header__illustration>svg{width:3rem;height:3rem}.navds-page-header__title{font-size:var(--navds-font-size-heading-xlarge)}}:root{--navds-card-micro-color-text: var(--navds-semantic-color-text);--navds-card-micro-color-background: var(--navds-global-color-orange-200);--navds-card-micro-color-border: transparent;--navds-card-micro-color-text-hover: var(--navds-semantic-color-link);--navds-card-micro-color-background-hover: var( --navds-semantic-color-component-background-light );--navds-card-micro-color-border-hover: var( --navds-semantic-color-interaction-primary );--navds-card-micro-color-text-focus: var(--navds-semantic-color-link);--navds-card-micro-color-background-focus: var( --navds-semantic-color-component-background-light );--navds-card-micro-color-shadow-focus: var(--navds-semantic-color-focus);--navds-card-micro-color-background-active: var( --navds-semantic-color-interaction-primary );--navds-card-micro-color-text-active: var( --navds-semantic-color-text-inverted )}.navds-card__micro{border-radius:1rem;color:var(--navds-card-micro-color-text);display:inline-flex;padding:var(--navds-spacing-1) var(--navds-spacing-2);text-decoration:none;background-color:var(--navds-card-micro-color-background);border:1px solid var(--navds-card-micro-color-border)}.navds-card__micro:hover{background-color:var(--navds-card-micro-color-background-hover);border-color:var(--navds-card-micro-color-border-hover);color:var(--navds-card-micro-color-text-hover)}.navds-card__micro:focus{background-color:var(--navds-card-micro-color-background-focus);color:var(--navds-card-micro-color-text-focus);outline:none;box-shadow:0 0 0 3px var(--navds-card-micro-color-shadow-focus)}.navds-card__micro:active{background-color:var(--navds-card-micro-color-background-active);color:var(--navds-card-micro-color-text-active)}.main{height:auto;min-height:100%}.app{flex-direction:column;display:flex;justify-content:center;align-items:center;min-height:100vh}';
    document.head.appendChild(elementStyle);
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) =>
  key in obj
    ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value })
    : (obj[key] = value);
var __spreadValues = (a2, b2) => {
  for (var prop in b2 || (b2 = {})) if (__hasOwnProp.call(b2, prop)) __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop)) __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
import t from "https://www.dev.nav.no/tms-min-side-assets/react-dom/17/esm/index.js";
import e, { forwardRef as n } from "https://www.dev.nav.no/tms-min-side-assets/react/17/esm/index.js";
function r(t2, e2) {
  return (
    (r = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (t3, e3) {
          return (t3.__proto__ = e3), t3;
        }),
    r(t2, e2)
  );
}
function i(t2, e2) {
  (t2.prototype = Object.create(e2.prototype)), (t2.prototype.constructor = t2), r(t2, e2);
}
var s = (function () {
  function t2() {
    this.listeners = [];
  }
  var e2 = t2.prototype;
  return (
    (e2.subscribe = function (t3) {
      var e3 = this,
        n2 = t3 || function () {};
      return (
        this.listeners.push(n2),
        this.onSubscribe(),
        function () {
          (e3.listeners = e3.listeners.filter(function (t4) {
            return t4 !== n2;
          })),
            e3.onUnsubscribe();
        }
      );
    }),
    (e2.hasListeners = function () {
      return this.listeners.length > 0;
    }),
    (e2.onSubscribe = function () {}),
    (e2.onUnsubscribe = function () {}),
    t2
  );
})();
function o() {
  return (
    (o = Object.assign
      ? Object.assign.bind()
      : function (t2) {
          for (var e2 = 1; e2 < arguments.length; e2++) {
            var n2 = arguments[e2];
            for (var r2 in n2) Object.prototype.hasOwnProperty.call(n2, r2) && (t2[r2] = n2[r2]);
          }
          return t2;
        }),
    o.apply(this, arguments)
  );
}
var u = typeof window == "undefined";
function a() {}
function c(t2) {
  return typeof t2 == "number" && t2 >= 0 && t2 !== 1 / 0;
}
function l(t2) {
  return Array.isArray(t2) ? t2 : [t2];
}
function h(t2, e2) {
  return Math.max(t2 + (e2 || 0) - Date.now(), 0);
}
function f(t2, e2, n2) {
  return P(t2)
    ? typeof e2 == "function"
      ? o({}, n2, { queryKey: t2, queryFn: e2 })
      : o({}, e2, { queryKey: t2 })
    : t2;
}
function d(t2, e2, n2) {
  return P(t2) ? [o({}, e2, { queryKey: t2 }), n2] : [t2 || {}, e2];
}
function v(t2, e2) {
  var n2 = t2.active,
    r2 = t2.exact,
    i2 = t2.fetching,
    s2 = t2.inactive,
    o2 = t2.predicate,
    u2 = t2.queryKey,
    a2 = t2.stale;
  if (P(u2)) {
    if (r2) {
      if (e2.queryHash !== y(u2, e2.options)) return false;
    } else if (!b(e2.queryKey, u2)) return false;
  }
  var c2 = (function (t3, e3) {
    return (t3 === true && e3 === true) || (t3 == null && e3 == null)
      ? "all"
      : t3 === false && e3 === false
      ? "none"
      : (t3 != null ? t3 : !e3)
      ? "active"
      : "inactive";
  })(n2, s2);
  if (c2 === "none") return false;
  if (c2 !== "all") {
    var l2 = e2.isActive();
    if (c2 === "active" && !l2) return false;
    if (c2 === "inactive" && l2) return false;
  }
  return (
    (typeof a2 != "boolean" || e2.isStale() === a2) &&
    (typeof i2 != "boolean" || e2.isFetching() === i2) &&
    !(o2 && !o2(e2))
  );
}
function p(t2, e2) {
  var n2 = t2.exact,
    r2 = t2.fetching,
    i2 = t2.predicate,
    s2 = t2.mutationKey;
  if (P(s2)) {
    if (!e2.options.mutationKey) return false;
    if (n2) {
      if (m(e2.options.mutationKey) !== m(s2)) return false;
    } else if (!b(e2.options.mutationKey, s2)) return false;
  }
  return (typeof r2 != "boolean" || (e2.state.status === "loading") === r2) && !(i2 && !i2(e2));
}
function y(t2, e2) {
  return ((e2 == null ? void 0 : e2.queryKeyHashFn) || m)(t2);
}
function m(t2) {
  var e2,
    n2 = l(t2);
  return (
    (e2 = n2),
    JSON.stringify(e2, function (t3, e3) {
      return C(e3)
        ? Object.keys(e3)
            .sort()
            .reduce(function (t4, n3) {
              return (t4[n3] = e3[n3]), t4;
            }, {})
        : e3;
    })
  );
}
function b(t2, e2) {
  return g(l(t2), l(e2));
}
function g(t2, e2) {
  return (
    t2 === e2 ||
    (typeof t2 == typeof e2 &&
      !(!t2 || !e2 || typeof t2 != "object" || typeof e2 != "object") &&
      !Object.keys(e2).some(function (n2) {
        return !g(t2[n2], e2[n2]);
      }))
  );
}
function O(t2, e2) {
  if (t2 === e2) return t2;
  var n2 = Array.isArray(t2) && Array.isArray(e2);
  if (n2 || (C(t2) && C(e2))) {
    for (
      var r2 = n2 ? t2.length : Object.keys(t2).length,
        i2 = n2 ? e2 : Object.keys(e2),
        s2 = i2.length,
        o2 = n2 ? [] : {},
        u2 = 0,
        a2 = 0;
      a2 < s2;
      a2++
    ) {
      var c2 = n2 ? a2 : i2[a2];
      (o2[c2] = O(t2[c2], e2[c2])), o2[c2] === t2[c2] && u2++;
    }
    return r2 === s2 && u2 === r2 ? t2 : o2;
  }
  return e2;
}
function C(t2) {
  if (!S(t2)) return false;
  var e2 = t2.constructor;
  if (e2 === void 0) return true;
  var n2 = e2.prototype;
  return !!S(n2) && !!n2.hasOwnProperty("isPrototypeOf");
}
function S(t2) {
  return Object.prototype.toString.call(t2) === "[object Object]";
}
function P(t2) {
  return typeof t2 == "string" || Array.isArray(t2);
}
function w(t2) {
  Promise.resolve()
    .then(t2)
    .catch(function (t3) {
      return setTimeout(function () {
        throw t3;
      });
    });
}
function q() {
  if (typeof AbortController == "function") return new AbortController();
}
var R = new ((function (t2) {
    function e2() {
      var e3;
      return (
        ((e3 = t2.call(this) || this).setup = function (t3) {
          var e4;
          if (!u && ((e4 = window) == null ? void 0 : e4.addEventListener)) {
            var n3 = function () {
              return t3();
            };
            return (
              window.addEventListener("visibilitychange", n3, false),
              window.addEventListener("focus", n3, false),
              function () {
                window.removeEventListener("visibilitychange", n3), window.removeEventListener("focus", n3);
              }
            );
          }
        }),
        e3
      );
    }
    i(e2, t2);
    var n2 = e2.prototype;
    return (
      (n2.onSubscribe = function () {
        this.cleanup || this.setEventListener(this.setup);
      }),
      (n2.onUnsubscribe = function () {
        var t3;
        this.hasListeners() || ((t3 = this.cleanup) == null || t3.call(this), (this.cleanup = void 0));
      }),
      (n2.setEventListener = function (t3) {
        var e3,
          n3 = this;
        (this.setup = t3),
          (e3 = this.cleanup) == null || e3.call(this),
          (this.cleanup = t3(function (t4) {
            typeof t4 == "boolean" ? n3.setFocused(t4) : n3.onFocus();
          }));
      }),
      (n2.setFocused = function (t3) {
        (this.focused = t3), t3 && this.onFocus();
      }),
      (n2.onFocus = function () {
        this.listeners.forEach(function (t3) {
          t3();
        });
      }),
      (n2.isFocused = function () {
        return typeof this.focused == "boolean"
          ? this.focused
          : typeof document == "undefined" || [void 0, "visible", "prerender"].includes(document.visibilityState);
      }),
      e2
    );
  })(s))(),
  F = new ((function (t2) {
    function e2() {
      var e3;
      return (
        ((e3 = t2.call(this) || this).setup = function (t3) {
          var e4;
          if (!u && ((e4 = window) == null ? void 0 : e4.addEventListener)) {
            var n3 = function () {
              return t3();
            };
            return (
              window.addEventListener("online", n3, false),
              window.addEventListener("offline", n3, false),
              function () {
                window.removeEventListener("online", n3), window.removeEventListener("offline", n3);
              }
            );
          }
        }),
        e3
      );
    }
    i(e2, t2);
    var n2 = e2.prototype;
    return (
      (n2.onSubscribe = function () {
        this.cleanup || this.setEventListener(this.setup);
      }),
      (n2.onUnsubscribe = function () {
        var t3;
        this.hasListeners() || ((t3 = this.cleanup) == null || t3.call(this), (this.cleanup = void 0));
      }),
      (n2.setEventListener = function (t3) {
        var e3,
          n3 = this;
        (this.setup = t3),
          (e3 = this.cleanup) == null || e3.call(this),
          (this.cleanup = t3(function (t4) {
            typeof t4 == "boolean" ? n3.setOnline(t4) : n3.onOnline();
          }));
      }),
      (n2.setOnline = function (t3) {
        (this.online = t3), t3 && this.onOnline();
      }),
      (n2.onOnline = function () {
        this.listeners.forEach(function (t3) {
          t3();
        });
      }),
      (n2.isOnline = function () {
        return typeof this.online == "boolean"
          ? this.online
          : typeof navigator == "undefined" || navigator.onLine === void 0 || navigator.onLine;
      }),
      e2
    );
  })(s))();
function E(t2) {
  return Math.min(1e3 * Math.pow(2, t2), 3e4);
}
function Q(t2) {
  return typeof (t2 == null ? void 0 : t2.cancel) == "function";
}
var x = function (t2) {
  (this.revert = t2 == null ? void 0 : t2.revert), (this.silent = t2 == null ? void 0 : t2.silent);
};
function D(t2) {
  return t2 instanceof x;
}
var A = function (t2) {
    var e2,
      n2,
      r2,
      i2,
      s2 = this,
      o2 = false;
    (this.abort = t2.abort),
      (this.cancel = function (t3) {
        return e2 == null ? void 0 : e2(t3);
      }),
      (this.cancelRetry = function () {
        o2 = true;
      }),
      (this.continueRetry = function () {
        o2 = false;
      }),
      (this.continue = function () {
        return n2 == null ? void 0 : n2();
      }),
      (this.failureCount = 0),
      (this.isPaused = false),
      (this.isResolved = false),
      (this.isTransportCancelable = false),
      (this.promise = new Promise(function (t3, e3) {
        (r2 = t3), (i2 = e3);
      }));
    var u2 = function (e3) {
        s2.isResolved || ((s2.isResolved = true), t2.onSuccess == null || t2.onSuccess(e3), n2 == null || n2(), r2(e3));
      },
      a2 = function (e3) {
        s2.isResolved || ((s2.isResolved = true), t2.onError == null || t2.onError(e3), n2 == null || n2(), i2(e3));
      };
    !(function r3() {
      if (!s2.isResolved) {
        var i3;
        try {
          i3 = t2.fn();
        } catch (t3) {
          i3 = Promise.reject(t3);
        }
        (e2 = function (t3) {
          if (!s2.isResolved && (a2(new x(t3)), s2.abort == null || s2.abort(), Q(i3)))
            try {
              i3.cancel();
            } catch (t4) {}
        }),
          (s2.isTransportCancelable = Q(i3)),
          Promise.resolve(i3)
            .then(u2)
            .catch(function (e3) {
              var i4, u3;
              if (!s2.isResolved) {
                var c2,
                  l2 = (i4 = t2.retry) != null ? i4 : 3,
                  h2 = (u3 = t2.retryDelay) != null ? u3 : E,
                  f2 = typeof h2 == "function" ? h2(s2.failureCount, e3) : h2,
                  d2 =
                    l2 === true ||
                    (typeof l2 == "number" && s2.failureCount < l2) ||
                    (typeof l2 == "function" && l2(s2.failureCount, e3));
                if (!o2 && d2)
                  s2.failureCount++,
                    t2.onFail == null || t2.onFail(s2.failureCount, e3),
                    ((c2 = f2),
                    new Promise(function (t3) {
                      setTimeout(t3, c2);
                    }))
                      .then(function () {
                        if (!R.isFocused() || !F.isOnline())
                          return new Promise(function (e4) {
                            (n2 = e4), (s2.isPaused = true), t2.onPause == null || t2.onPause();
                          }).then(function () {
                            (n2 = void 0), (s2.isPaused = false), t2.onContinue == null || t2.onContinue();
                          });
                      })
                      .then(function () {
                        o2 ? a2(e3) : r3();
                      });
                else a2(e3);
              }
            });
      }
    })();
  },
  T = new ((function () {
    function t2() {
      (this.queue = []),
        (this.transactions = 0),
        (this.notifyFn = function (t3) {
          t3();
        }),
        (this.batchNotifyFn = function (t3) {
          t3();
        });
    }
    var e2 = t2.prototype;
    return (
      (e2.batch = function (t3) {
        this.transactions++;
        var e3 = t3();
        return this.transactions--, this.transactions || this.flush(), e3;
      }),
      (e2.schedule = function (t3) {
        var e3 = this;
        this.transactions
          ? this.queue.push(t3)
          : w(function () {
              e3.notifyFn(t3);
            });
      }),
      (e2.batchCalls = function (t3) {
        var e3 = this;
        return function () {
          for (var n2 = arguments.length, r2 = new Array(n2), i2 = 0; i2 < n2; i2++) r2[i2] = arguments[i2];
          e3.schedule(function () {
            t3.apply(void 0, r2);
          });
        };
      }),
      (e2.flush = function () {
        var t3 = this,
          e3 = this.queue;
        (this.queue = []),
          e3.length &&
            w(function () {
              t3.batchNotifyFn(function () {
                e3.forEach(function (e4) {
                  t3.notifyFn(e4);
                });
              });
            });
      }),
      (e2.setNotifyFunction = function (t3) {
        this.notifyFn = t3;
      }),
      (e2.setBatchNotifyFunction = function (t3) {
        this.batchNotifyFn = t3;
      }),
      t2
    );
  })())(),
  j = console;
function I() {
  return j;
}
var U = (function () {
    function t2(t3) {
      (this.abortSignalConsumed = false),
        (this.hadObservers = false),
        (this.defaultOptions = t3.defaultOptions),
        this.setOptions(t3.options),
        (this.observers = []),
        (this.cache = t3.cache),
        (this.queryKey = t3.queryKey),
        (this.queryHash = t3.queryHash),
        (this.initialState = t3.state || this.getDefaultState(this.options)),
        (this.state = this.initialState),
        (this.meta = t3.meta),
        this.scheduleGc();
    }
    var e2 = t2.prototype;
    return (
      (e2.setOptions = function (t3) {
        var e3;
        (this.options = o({}, this.defaultOptions, t3)),
          (this.meta = t3 == null ? void 0 : t3.meta),
          (this.cacheTime = Math.max(this.cacheTime || 0, (e3 = this.options.cacheTime) != null ? e3 : 3e5));
      }),
      (e2.setDefaultOptions = function (t3) {
        this.defaultOptions = t3;
      }),
      (e2.scheduleGc = function () {
        var t3 = this;
        this.clearGcTimeout(),
          c(this.cacheTime) &&
            (this.gcTimeout = setTimeout(function () {
              t3.optionalRemove();
            }, this.cacheTime));
      }),
      (e2.clearGcTimeout = function () {
        clearTimeout(this.gcTimeout), (this.gcTimeout = void 0);
      }),
      (e2.optionalRemove = function () {
        this.observers.length ||
          (this.state.isFetching ? this.hadObservers && this.scheduleGc() : this.cache.remove(this));
      }),
      (e2.setData = function (t3, e3) {
        var n2,
          r2,
          i2 = this.state.data,
          s2 = (function (t4, e4) {
            return typeof t4 == "function" ? t4(e4) : t4;
          })(t3, i2);
        return (
          ((n2 = (r2 = this.options).isDataEqual) == null ? void 0 : n2.call(r2, i2, s2))
            ? (s2 = i2)
            : this.options.structuralSharing !== false && (s2 = O(i2, s2)),
          this.dispatch({ data: s2, type: "success", dataUpdatedAt: e3 == null ? void 0 : e3.updatedAt }),
          s2
        );
      }),
      (e2.setState = function (t3, e3) {
        this.dispatch({ type: "setState", state: t3, setStateOptions: e3 });
      }),
      (e2.cancel = function (t3) {
        var e3,
          n2 = this.promise;
        return (e3 = this.retryer) == null || e3.cancel(t3), n2 ? n2.then(a).catch(a) : Promise.resolve();
      }),
      (e2.destroy = function () {
        this.clearGcTimeout(), this.cancel({ silent: true });
      }),
      (e2.reset = function () {
        this.destroy(), this.setState(this.initialState);
      }),
      (e2.isActive = function () {
        return this.observers.some(function (t3) {
          return t3.options.enabled !== false;
        });
      }),
      (e2.isFetching = function () {
        return this.state.isFetching;
      }),
      (e2.isStale = function () {
        return (
          this.state.isInvalidated ||
          !this.state.dataUpdatedAt ||
          this.observers.some(function (t3) {
            return t3.getCurrentResult().isStale;
          })
        );
      }),
      (e2.isStaleByTime = function (t3) {
        return (
          t3 === void 0 && (t3 = 0),
          this.state.isInvalidated || !this.state.dataUpdatedAt || !h(this.state.dataUpdatedAt, t3)
        );
      }),
      (e2.onFocus = function () {
        var t3,
          e3 = this.observers.find(function (t4) {
            return t4.shouldFetchOnWindowFocus();
          });
        e3 && e3.refetch(), (t3 = this.retryer) == null || t3.continue();
      }),
      (e2.onOnline = function () {
        var t3,
          e3 = this.observers.find(function (t4) {
            return t4.shouldFetchOnReconnect();
          });
        e3 && e3.refetch(), (t3 = this.retryer) == null || t3.continue();
      }),
      (e2.addObserver = function (t3) {
        this.observers.indexOf(t3) === -1 &&
          (this.observers.push(t3),
          (this.hadObservers = true),
          this.clearGcTimeout(),
          this.cache.notify({ type: "observerAdded", query: this, observer: t3 }));
      }),
      (e2.removeObserver = function (t3) {
        this.observers.indexOf(t3) !== -1 &&
          ((this.observers = this.observers.filter(function (e3) {
            return e3 !== t3;
          })),
          this.observers.length ||
            (this.retryer &&
              (this.retryer.isTransportCancelable || this.abortSignalConsumed
                ? this.retryer.cancel({ revert: true })
                : this.retryer.cancelRetry()),
            this.cacheTime ? this.scheduleGc() : this.cache.remove(this)),
          this.cache.notify({ type: "observerRemoved", query: this, observer: t3 }));
      }),
      (e2.getObserversCount = function () {
        return this.observers.length;
      }),
      (e2.invalidate = function () {
        this.state.isInvalidated || this.dispatch({ type: "invalidate" });
      }),
      (e2.fetch = function (t3, e3) {
        var n2,
          r2,
          i2,
          s2 = this;
        if (this.state.isFetching) {
          if (this.state.dataUpdatedAt && (e3 == null ? void 0 : e3.cancelRefetch)) this.cancel({ silent: true });
          else if (this.promise) {
            var o2;
            return (o2 = this.retryer) == null || o2.continueRetry(), this.promise;
          }
        }
        if ((t3 && this.setOptions(t3), !this.options.queryFn)) {
          var u2 = this.observers.find(function (t4) {
            return t4.options.queryFn;
          });
          u2 && this.setOptions(u2.options);
        }
        var a2 = l(this.queryKey),
          c2 = q(),
          h2 = { queryKey: a2, pageParam: void 0, meta: this.meta };
        Object.defineProperty(h2, "signal", {
          enumerable: true,
          get: function () {
            if (c2) return (s2.abortSignalConsumed = true), c2.signal;
          },
        });
        var f2,
          d2,
          v2 = {
            fetchOptions: e3,
            options: this.options,
            queryKey: a2,
            state: this.state,
            fetchFn: function () {
              return s2.options.queryFn
                ? ((s2.abortSignalConsumed = false), s2.options.queryFn(h2))
                : Promise.reject("Missing queryFn");
            },
            meta: this.meta,
          };
        ((n2 = this.options.behavior) == null ? void 0 : n2.onFetch) &&
          ((f2 = this.options.behavior) == null || f2.onFetch(v2));
        ((this.revertState = this.state),
        this.state.isFetching && this.state.fetchMeta === ((r2 = v2.fetchOptions) == null ? void 0 : r2.meta)) ||
          this.dispatch({ type: "fetch", meta: (d2 = v2.fetchOptions) == null ? void 0 : d2.meta });
        return (
          (this.retryer = new A({
            fn: v2.fetchFn,
            abort: c2 == null || (i2 = c2.abort) == null ? void 0 : i2.bind(c2),
            onSuccess: function (t4) {
              s2.setData(t4),
                s2.cache.config.onSuccess == null || s2.cache.config.onSuccess(t4, s2),
                s2.cacheTime === 0 && s2.optionalRemove();
            },
            onError: function (t4) {
              (D(t4) && t4.silent) || s2.dispatch({ type: "error", error: t4 }),
                D(t4) || (s2.cache.config.onError == null || s2.cache.config.onError(t4, s2), I().error(t4)),
                s2.cacheTime === 0 && s2.optionalRemove();
            },
            onFail: function () {
              s2.dispatch({ type: "failed" });
            },
            onPause: function () {
              s2.dispatch({ type: "pause" });
            },
            onContinue: function () {
              s2.dispatch({ type: "continue" });
            },
            retry: v2.options.retry,
            retryDelay: v2.options.retryDelay,
          })),
          (this.promise = this.retryer.promise),
          this.promise
        );
      }),
      (e2.dispatch = function (t3) {
        var e3 = this;
        (this.state = this.reducer(this.state, t3)),
          T.batch(function () {
            e3.observers.forEach(function (e4) {
              e4.onQueryUpdate(t3);
            }),
              e3.cache.notify({ query: e3, type: "queryUpdated", action: t3 });
          });
      }),
      (e2.getDefaultState = function (t3) {
        var e3 = typeof t3.initialData == "function" ? t3.initialData() : t3.initialData,
          n2 =
            t3.initialData !== void 0
              ? typeof t3.initialDataUpdatedAt == "function"
                ? t3.initialDataUpdatedAt()
                : t3.initialDataUpdatedAt
              : 0,
          r2 = e3 !== void 0;
        return {
          data: e3,
          dataUpdateCount: 0,
          dataUpdatedAt: r2 ? (n2 != null ? n2 : Date.now()) : 0,
          error: null,
          errorUpdateCount: 0,
          errorUpdatedAt: 0,
          fetchFailureCount: 0,
          fetchMeta: null,
          isFetching: false,
          isInvalidated: false,
          isPaused: false,
          status: r2 ? "success" : "idle",
        };
      }),
      (e2.reducer = function (t3, e3) {
        var n2, r2;
        switch (e3.type) {
          case "failed":
            return o({}, t3, { fetchFailureCount: t3.fetchFailureCount + 1 });
          case "pause":
            return o({}, t3, { isPaused: true });
          case "continue":
            return o({}, t3, { isPaused: false });
          case "fetch":
            return o(
              {},
              t3,
              {
                fetchFailureCount: 0,
                fetchMeta: (n2 = e3.meta) != null ? n2 : null,
                isFetching: true,
                isPaused: false,
              },
              !t3.dataUpdatedAt && { error: null, status: "loading" }
            );
          case "success":
            return o({}, t3, {
              data: e3.data,
              dataUpdateCount: t3.dataUpdateCount + 1,
              dataUpdatedAt: (r2 = e3.dataUpdatedAt) != null ? r2 : Date.now(),
              error: null,
              fetchFailureCount: 0,
              isFetching: false,
              isInvalidated: false,
              isPaused: false,
              status: "success",
            });
          case "error":
            var i2 = e3.error;
            return D(i2) && i2.revert && this.revertState
              ? o({}, this.revertState)
              : o({}, t3, {
                  error: i2,
                  errorUpdateCount: t3.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: t3.fetchFailureCount + 1,
                  isFetching: false,
                  isPaused: false,
                  status: "error",
                });
          case "invalidate":
            return o({}, t3, { isInvalidated: true });
          case "setState":
            return o({}, t3, e3.state);
          default:
            return t3;
        }
      }),
      t2
    );
  })(),
  M = (function (t2) {
    function e2(e3) {
      var n3;
      return ((n3 = t2.call(this) || this).config = e3 || {}), (n3.queries = []), (n3.queriesMap = {}), n3;
    }
    i(e2, t2);
    var n2 = e2.prototype;
    return (
      (n2.build = function (t3, e3, n3) {
        var r2,
          i2 = e3.queryKey,
          s2 = (r2 = e3.queryHash) != null ? r2 : y(i2, e3),
          o2 = this.get(s2);
        return (
          o2 ||
            ((o2 = new U({
              cache: this,
              queryKey: i2,
              queryHash: s2,
              options: t3.defaultQueryOptions(e3),
              state: n3,
              defaultOptions: t3.getQueryDefaults(i2),
              meta: e3.meta,
            })),
            this.add(o2)),
          o2
        );
      }),
      (n2.add = function (t3) {
        this.queriesMap[t3.queryHash] ||
          ((this.queriesMap[t3.queryHash] = t3), this.queries.push(t3), this.notify({ type: "queryAdded", query: t3 }));
      }),
      (n2.remove = function (t3) {
        var e3 = this.queriesMap[t3.queryHash];
        e3 &&
          (t3.destroy(),
          (this.queries = this.queries.filter(function (e4) {
            return e4 !== t3;
          })),
          e3 === t3 && delete this.queriesMap[t3.queryHash],
          this.notify({ type: "queryRemoved", query: t3 }));
      }),
      (n2.clear = function () {
        var t3 = this;
        T.batch(function () {
          t3.queries.forEach(function (e3) {
            t3.remove(e3);
          });
        });
      }),
      (n2.get = function (t3) {
        return this.queriesMap[t3];
      }),
      (n2.getAll = function () {
        return this.queries;
      }),
      (n2.find = function (t3, e3) {
        var n3 = d(t3, e3)[0];
        return (
          n3.exact === void 0 && (n3.exact = true),
          this.queries.find(function (t4) {
            return v(n3, t4);
          })
        );
      }),
      (n2.findAll = function (t3, e3) {
        var n3 = d(t3, e3)[0];
        return Object.keys(n3).length > 0
          ? this.queries.filter(function (t4) {
              return v(n3, t4);
            })
          : this.queries;
      }),
      (n2.notify = function (t3) {
        var e3 = this;
        T.batch(function () {
          e3.listeners.forEach(function (e4) {
            e4(t3);
          });
        });
      }),
      (n2.onFocus = function () {
        var t3 = this;
        T.batch(function () {
          t3.queries.forEach(function (t4) {
            t4.onFocus();
          });
        });
      }),
      (n2.onOnline = function () {
        var t3 = this;
        T.batch(function () {
          t3.queries.forEach(function (t4) {
            t4.onOnline();
          });
        });
      }),
      e2
    );
  })(s),
  K = (function () {
    function t2(t3) {
      (this.options = o({}, t3.defaultOptions, t3.options)),
        (this.mutationId = t3.mutationId),
        (this.mutationCache = t3.mutationCache),
        (this.observers = []),
        (this.state = t3.state || {
          context: void 0,
          data: void 0,
          error: null,
          failureCount: 0,
          isPaused: false,
          status: "idle",
          variables: void 0,
        }),
        (this.meta = t3.meta);
    }
    var e2 = t2.prototype;
    return (
      (e2.setState = function (t3) {
        this.dispatch({ type: "setState", state: t3 });
      }),
      (e2.addObserver = function (t3) {
        this.observers.indexOf(t3) === -1 && this.observers.push(t3);
      }),
      (e2.removeObserver = function (t3) {
        this.observers = this.observers.filter(function (e3) {
          return e3 !== t3;
        });
      }),
      (e2.cancel = function () {
        return this.retryer ? (this.retryer.cancel(), this.retryer.promise.then(a).catch(a)) : Promise.resolve();
      }),
      (e2.continue = function () {
        return this.retryer ? (this.retryer.continue(), this.retryer.promise) : this.execute();
      }),
      (e2.execute = function () {
        var t3,
          e3 = this,
          n2 = this.state.status === "loading",
          r2 = Promise.resolve();
        return (
          n2 ||
            (this.dispatch({ type: "loading", variables: this.options.variables }),
            (r2 = r2
              .then(function () {
                e3.mutationCache.config.onMutate == null || e3.mutationCache.config.onMutate(e3.state.variables, e3);
              })
              .then(function () {
                return e3.options.onMutate == null ? void 0 : e3.options.onMutate(e3.state.variables);
              })
              .then(function (t4) {
                t4 !== e3.state.context && e3.dispatch({ type: "loading", context: t4, variables: e3.state.variables });
              }))),
          r2
            .then(function () {
              return e3.executeMutation();
            })
            .then(function (n3) {
              (t3 = n3),
                e3.mutationCache.config.onSuccess == null ||
                  e3.mutationCache.config.onSuccess(t3, e3.state.variables, e3.state.context, e3);
            })
            .then(function () {
              return e3.options.onSuccess == null
                ? void 0
                : e3.options.onSuccess(t3, e3.state.variables, e3.state.context);
            })
            .then(function () {
              return e3.options.onSettled == null
                ? void 0
                : e3.options.onSettled(t3, null, e3.state.variables, e3.state.context);
            })
            .then(function () {
              return e3.dispatch({ type: "success", data: t3 }), t3;
            })
            .catch(function (t4) {
              return (
                e3.mutationCache.config.onError == null ||
                  e3.mutationCache.config.onError(t4, e3.state.variables, e3.state.context, e3),
                I().error(t4),
                Promise.resolve()
                  .then(function () {
                    return e3.options.onError == null
                      ? void 0
                      : e3.options.onError(t4, e3.state.variables, e3.state.context);
                  })
                  .then(function () {
                    return e3.options.onSettled == null
                      ? void 0
                      : e3.options.onSettled(void 0, t4, e3.state.variables, e3.state.context);
                  })
                  .then(function () {
                    throw (e3.dispatch({ type: "error", error: t4 }), t4);
                  })
              );
            })
        );
      }),
      (e2.executeMutation = function () {
        var t3,
          e3 = this;
        return (
          (this.retryer = new A({
            fn: function () {
              return e3.options.mutationFn
                ? e3.options.mutationFn(e3.state.variables)
                : Promise.reject("No mutationFn found");
            },
            onFail: function () {
              e3.dispatch({ type: "failed" });
            },
            onPause: function () {
              e3.dispatch({ type: "pause" });
            },
            onContinue: function () {
              e3.dispatch({ type: "continue" });
            },
            retry: (t3 = this.options.retry) != null ? t3 : 0,
            retryDelay: this.options.retryDelay,
          })),
          this.retryer.promise
        );
      }),
      (e2.dispatch = function (t3) {
        var e3 = this;
        (this.state = (function (t4, e4) {
          switch (e4.type) {
            case "failed":
              return o({}, t4, { failureCount: t4.failureCount + 1 });
            case "pause":
              return o({}, t4, { isPaused: true });
            case "continue":
              return o({}, t4, { isPaused: false });
            case "loading":
              return o({}, t4, {
                context: e4.context,
                data: void 0,
                error: null,
                isPaused: false,
                status: "loading",
                variables: e4.variables,
              });
            case "success":
              return o({}, t4, { data: e4.data, error: null, status: "success", isPaused: false });
            case "error":
              return o({}, t4, {
                data: void 0,
                error: e4.error,
                failureCount: t4.failureCount + 1,
                isPaused: false,
                status: "error",
              });
            case "setState":
              return o({}, t4, e4.state);
            default:
              return t4;
          }
        })(this.state, t3)),
          T.batch(function () {
            e3.observers.forEach(function (e4) {
              e4.onMutationUpdate(t3);
            }),
              e3.mutationCache.notify(e3);
          });
      }),
      t2
    );
  })();
var k = (function (t2) {
  function e2(e3) {
    var n3;
    return ((n3 = t2.call(this) || this).config = e3 || {}), (n3.mutations = []), (n3.mutationId = 0), n3;
  }
  i(e2, t2);
  var n2 = e2.prototype;
  return (
    (n2.build = function (t3, e3, n3) {
      var r2 = new K({
        mutationCache: this,
        mutationId: ++this.mutationId,
        options: t3.defaultMutationOptions(e3),
        state: n3,
        defaultOptions: e3.mutationKey ? t3.getMutationDefaults(e3.mutationKey) : void 0,
        meta: e3.meta,
      });
      return this.add(r2), r2;
    }),
    (n2.add = function (t3) {
      this.mutations.push(t3), this.notify(t3);
    }),
    (n2.remove = function (t3) {
      (this.mutations = this.mutations.filter(function (e3) {
        return e3 !== t3;
      })),
        t3.cancel(),
        this.notify(t3);
    }),
    (n2.clear = function () {
      var t3 = this;
      T.batch(function () {
        t3.mutations.forEach(function (e3) {
          t3.remove(e3);
        });
      });
    }),
    (n2.getAll = function () {
      return this.mutations;
    }),
    (n2.find = function (t3) {
      return (
        t3.exact === void 0 && (t3.exact = true),
        this.mutations.find(function (e3) {
          return p(t3, e3);
        })
      );
    }),
    (n2.findAll = function (t3) {
      return this.mutations.filter(function (e3) {
        return p(t3, e3);
      });
    }),
    (n2.notify = function (t3) {
      var e3 = this;
      T.batch(function () {
        e3.listeners.forEach(function (e4) {
          e4(t3);
        });
      });
    }),
    (n2.onFocus = function () {
      this.resumePausedMutations();
    }),
    (n2.onOnline = function () {
      this.resumePausedMutations();
    }),
    (n2.resumePausedMutations = function () {
      var t3 = this.mutations.filter(function (t4) {
        return t4.state.isPaused;
      });
      return T.batch(function () {
        return t3.reduce(function (t4, e3) {
          return t4.then(function () {
            return e3.continue().catch(a);
          });
        }, Promise.resolve());
      });
    }),
    e2
  );
})(s);
function L(t2, e2) {
  return t2.getNextPageParam == null ? void 0 : t2.getNextPageParam(e2[e2.length - 1], e2);
}
var _ = (function () {
    function t2(t3) {
      t3 === void 0 && (t3 = {}),
        (this.queryCache = t3.queryCache || new M()),
        (this.mutationCache = t3.mutationCache || new k()),
        (this.defaultOptions = t3.defaultOptions || {}),
        (this.queryDefaults = []),
        (this.mutationDefaults = []);
    }
    var e2 = t2.prototype;
    return (
      (e2.mount = function () {
        var t3 = this;
        (this.unsubscribeFocus = R.subscribe(function () {
          R.isFocused() && F.isOnline() && (t3.mutationCache.onFocus(), t3.queryCache.onFocus());
        })),
          (this.unsubscribeOnline = F.subscribe(function () {
            R.isFocused() && F.isOnline() && (t3.mutationCache.onOnline(), t3.queryCache.onOnline());
          }));
      }),
      (e2.unmount = function () {
        var t3, e3;
        (t3 = this.unsubscribeFocus) == null || t3.call(this), (e3 = this.unsubscribeOnline) == null || e3.call(this);
      }),
      (e2.isFetching = function (t3, e3) {
        var n2 = d(t3, e3)[0];
        return (n2.fetching = true), this.queryCache.findAll(n2).length;
      }),
      (e2.isMutating = function (t3) {
        return this.mutationCache.findAll(o({}, t3, { fetching: true })).length;
      }),
      (e2.getQueryData = function (t3, e3) {
        var n2;
        return (n2 = this.queryCache.find(t3, e3)) == null ? void 0 : n2.state.data;
      }),
      (e2.getQueriesData = function (t3) {
        return this.getQueryCache()
          .findAll(t3)
          .map(function (t4) {
            return [t4.queryKey, t4.state.data];
          });
      }),
      (e2.setQueryData = function (t3, e3, n2) {
        var r2 = f(t3),
          i2 = this.defaultQueryOptions(r2);
        return this.queryCache.build(this, i2).setData(e3, n2);
      }),
      (e2.setQueriesData = function (t3, e3, n2) {
        var r2 = this;
        return T.batch(function () {
          return r2
            .getQueryCache()
            .findAll(t3)
            .map(function (t4) {
              var i2 = t4.queryKey;
              return [i2, r2.setQueryData(i2, e3, n2)];
            });
        });
      }),
      (e2.getQueryState = function (t3, e3) {
        var n2;
        return (n2 = this.queryCache.find(t3, e3)) == null ? void 0 : n2.state;
      }),
      (e2.removeQueries = function (t3, e3) {
        var n2 = d(t3, e3)[0],
          r2 = this.queryCache;
        T.batch(function () {
          r2.findAll(n2).forEach(function (t4) {
            r2.remove(t4);
          });
        });
      }),
      (e2.resetQueries = function (t3, e3, n2) {
        var r2 = this,
          i2 = d(t3, e3, n2),
          s2 = i2[0],
          u2 = i2[1],
          a2 = this.queryCache,
          c2 = o({}, s2, { active: true });
        return T.batch(function () {
          return (
            a2.findAll(s2).forEach(function (t4) {
              t4.reset();
            }),
            r2.refetchQueries(c2, u2)
          );
        });
      }),
      (e2.cancelQueries = function (t3, e3, n2) {
        var r2 = this,
          i2 = d(t3, e3, n2),
          s2 = i2[0],
          o2 = i2[1],
          u2 = o2 === void 0 ? {} : o2;
        u2.revert === void 0 && (u2.revert = true);
        var c2 = T.batch(function () {
          return r2.queryCache.findAll(s2).map(function (t4) {
            return t4.cancel(u2);
          });
        });
        return Promise.all(c2).then(a).catch(a);
      }),
      (e2.invalidateQueries = function (t3, e3, n2) {
        var r2,
          i2,
          s2,
          u2 = this,
          a2 = d(t3, e3, n2),
          c2 = a2[0],
          l2 = a2[1],
          h2 = o({}, c2, {
            active: (r2 = (i2 = c2.refetchActive) != null ? i2 : c2.active) == null || r2,
            inactive: (s2 = c2.refetchInactive) != null && s2,
          });
        return T.batch(function () {
          return (
            u2.queryCache.findAll(c2).forEach(function (t4) {
              t4.invalidate();
            }),
            u2.refetchQueries(h2, l2)
          );
        });
      }),
      (e2.refetchQueries = function (t3, e3, n2) {
        var r2 = this,
          i2 = d(t3, e3, n2),
          s2 = i2[0],
          u2 = i2[1],
          c2 = T.batch(function () {
            return r2.queryCache.findAll(s2).map(function (t4) {
              return t4.fetch(void 0, o({}, u2, { meta: { refetchPage: s2 == null ? void 0 : s2.refetchPage } }));
            });
          }),
          l2 = Promise.all(c2).then(a);
        return (u2 == null ? void 0 : u2.throwOnError) || (l2 = l2.catch(a)), l2;
      }),
      (e2.fetchQuery = function (t3, e3, n2) {
        var r2 = f(t3, e3, n2),
          i2 = this.defaultQueryOptions(r2);
        i2.retry === void 0 && (i2.retry = false);
        var s2 = this.queryCache.build(this, i2);
        return s2.isStaleByTime(i2.staleTime) ? s2.fetch(i2) : Promise.resolve(s2.state.data);
      }),
      (e2.prefetchQuery = function (t3, e3, n2) {
        return this.fetchQuery(t3, e3, n2).then(a).catch(a);
      }),
      (e2.fetchInfiniteQuery = function (t3, e3, n2) {
        var r2 = f(t3, e3, n2);
        return (
          (r2.behavior = {
            onFetch: function (t4) {
              t4.fetchFn = function () {
                var e4,
                  n3,
                  r3,
                  i2,
                  s2,
                  o2,
                  u2,
                  a2,
                  c2,
                  l2 = (e4 = t4.fetchOptions) == null || (n3 = e4.meta) == null ? void 0 : n3.refetchPage,
                  h2 = (r3 = t4.fetchOptions) == null || (i2 = r3.meta) == null ? void 0 : i2.fetchMore,
                  f2 = h2 == null ? void 0 : h2.pageParam,
                  d2 = (h2 == null ? void 0 : h2.direction) === "forward",
                  v2 = (h2 == null ? void 0 : h2.direction) === "backward",
                  p2 = ((s2 = t4.state.data) == null ? void 0 : s2.pages) || [],
                  y2 = ((o2 = t4.state.data) == null ? void 0 : o2.pageParams) || [],
                  m2 = q(),
                  b2 = m2 == null ? void 0 : m2.signal,
                  g2 = y2,
                  O2 = false,
                  C2 =
                    t4.options.queryFn ||
                    function () {
                      return Promise.reject("Missing queryFn");
                    },
                  S2 = function (t5, e5, n4, r4) {
                    return (
                      (g2 = r4 ? [e5].concat(g2) : [].concat(g2, [e5])), r4 ? [n4].concat(t5) : [].concat(t5, [n4])
                    );
                  },
                  P2 = function (e5, n4, r4, i3) {
                    if (O2) return Promise.reject("Cancelled");
                    if (r4 === void 0 && !n4 && e5.length) return Promise.resolve(e5);
                    var s3 = { queryKey: t4.queryKey, signal: b2, pageParam: r4, meta: t4.meta },
                      o3 = C2(s3),
                      u3 = Promise.resolve(o3).then(function (t5) {
                        return S2(e5, r4, t5, i3);
                      });
                    return Q(o3) && (u3.cancel = o3.cancel), u3;
                  };
                if (p2.length)
                  if (d2) {
                    var w2 = f2 !== void 0,
                      R2 = w2 ? f2 : L(t4.options, p2);
                    u2 = P2(p2, w2, R2);
                  } else if (v2) {
                    var F2 = f2 !== void 0,
                      E2 = F2
                        ? f2
                        : ((a2 = t4.options),
                          (c2 = p2),
                          a2.getPreviousPageParam == null ? void 0 : a2.getPreviousPageParam(c2[0], c2));
                    u2 = P2(p2, F2, E2, true);
                  } else
                    !(function () {
                      g2 = [];
                      var e5 = t4.options.getNextPageParam === void 0,
                        n4 = !l2 || !p2[0] || l2(p2[0], 0, p2);
                      u2 = n4 ? P2([], e5, y2[0]) : Promise.resolve(S2([], y2[0], p2[0]));
                      for (
                        var r4 = function (n5) {
                            u2 = u2.then(function (r5) {
                              if (!l2 || !p2[n5] || l2(p2[n5], n5, p2)) {
                                var i4 = e5 ? y2[n5] : L(t4.options, r5);
                                return P2(r5, e5, i4);
                              }
                              return Promise.resolve(S2(r5, y2[n5], p2[n5]));
                            });
                          },
                          i3 = 1;
                        i3 < p2.length;
                        i3++
                      )
                        r4(i3);
                    })();
                else u2 = P2([]);
                var x2 = u2.then(function (t5) {
                  return { pages: t5, pageParams: g2 };
                });
                return (
                  (x2.cancel = function () {
                    (O2 = true), m2 == null || m2.abort(), Q(u2) && u2.cancel();
                  }),
                  x2
                );
              };
            },
          }),
          this.fetchQuery(r2)
        );
      }),
      (e2.prefetchInfiniteQuery = function (t3, e3, n2) {
        return this.fetchInfiniteQuery(t3, e3, n2).then(a).catch(a);
      }),
      (e2.cancelMutations = function () {
        var t3 = this,
          e3 = T.batch(function () {
            return t3.mutationCache.getAll().map(function (t4) {
              return t4.cancel();
            });
          });
        return Promise.all(e3).then(a).catch(a);
      }),
      (e2.resumePausedMutations = function () {
        return this.getMutationCache().resumePausedMutations();
      }),
      (e2.executeMutation = function (t3) {
        return this.mutationCache.build(this, t3).execute();
      }),
      (e2.getQueryCache = function () {
        return this.queryCache;
      }),
      (e2.getMutationCache = function () {
        return this.mutationCache;
      }),
      (e2.getDefaultOptions = function () {
        return this.defaultOptions;
      }),
      (e2.setDefaultOptions = function (t3) {
        this.defaultOptions = t3;
      }),
      (e2.setQueryDefaults = function (t3, e3) {
        var n2 = this.queryDefaults.find(function (e4) {
          return m(t3) === m(e4.queryKey);
        });
        n2 ? (n2.defaultOptions = e3) : this.queryDefaults.push({ queryKey: t3, defaultOptions: e3 });
      }),
      (e2.getQueryDefaults = function (t3) {
        var e3;
        return t3
          ? (e3 = this.queryDefaults.find(function (e4) {
              return b(t3, e4.queryKey);
            })) == null
            ? void 0
            : e3.defaultOptions
          : void 0;
      }),
      (e2.setMutationDefaults = function (t3, e3) {
        var n2 = this.mutationDefaults.find(function (e4) {
          return m(t3) === m(e4.mutationKey);
        });
        n2 ? (n2.defaultOptions = e3) : this.mutationDefaults.push({ mutationKey: t3, defaultOptions: e3 });
      }),
      (e2.getMutationDefaults = function (t3) {
        var e3;
        return t3
          ? (e3 = this.mutationDefaults.find(function (e4) {
              return b(t3, e4.mutationKey);
            })) == null
            ? void 0
            : e3.defaultOptions
          : void 0;
      }),
      (e2.defaultQueryOptions = function (t3) {
        if (t3 == null ? void 0 : t3._defaulted) return t3;
        var e3 = o({}, this.defaultOptions.queries, this.getQueryDefaults(t3 == null ? void 0 : t3.queryKey), t3, {
          _defaulted: true,
        });
        return !e3.queryHash && e3.queryKey && (e3.queryHash = y(e3.queryKey, e3)), e3;
      }),
      (e2.defaultQueryObserverOptions = function (t3) {
        return this.defaultQueryOptions(t3);
      }),
      (e2.defaultMutationOptions = function (t3) {
        return (t3 == null ? void 0 : t3._defaulted)
          ? t3
          : o({}, this.defaultOptions.mutations, this.getMutationDefaults(t3 == null ? void 0 : t3.mutationKey), t3, {
              _defaulted: true,
            });
      }),
      (e2.clear = function () {
        this.queryCache.clear(), this.mutationCache.clear();
      }),
      t2
    );
  })(),
  N = (function (t2) {
    function e2(e3, n3) {
      var r2;
      return (
        ((r2 = t2.call(this) || this).client = e3),
        (r2.options = n3),
        (r2.trackedProps = []),
        (r2.previousSelectError = null),
        r2.bindMethods(),
        r2.setOptions(n3),
        r2
      );
    }
    i(e2, t2);
    var n2 = e2.prototype;
    return (
      (n2.bindMethods = function () {
        (this.remove = this.remove.bind(this)), (this.refetch = this.refetch.bind(this));
      }),
      (n2.onSubscribe = function () {
        this.listeners.length === 1 &&
          (this.currentQuery.addObserver(this),
          H(this.currentQuery, this.options) && this.executeFetch(),
          this.updateTimers());
      }),
      (n2.onUnsubscribe = function () {
        this.listeners.length || this.destroy();
      }),
      (n2.shouldFetchOnReconnect = function () {
        return (
          (t3 = this.currentQuery),
          (e3 = this.options).enabled !== false &&
            (e3.refetchOnReconnect === "always" || (e3.refetchOnReconnect !== false && G(t3, e3)))
        );
        var t3, e3;
      }),
      (n2.shouldFetchOnWindowFocus = function () {
        return (
          (t3 = this.currentQuery),
          (e3 = this.options).enabled !== false &&
            (e3.refetchOnWindowFocus === "always" || (e3.refetchOnWindowFocus !== false && G(t3, e3)))
        );
        var t3, e3;
      }),
      (n2.destroy = function () {
        (this.listeners = []), this.clearTimers(), this.currentQuery.removeObserver(this);
      }),
      (n2.setOptions = function (t3, e3) {
        var n3 = this.options,
          r2 = this.currentQuery;
        if (
          ((this.options = this.client.defaultQueryObserverOptions(t3)),
          this.options.enabled !== void 0 && typeof this.options.enabled != "boolean")
        )
          throw new Error("Expected enabled to be a boolean");
        this.options.queryKey || (this.options.queryKey = n3.queryKey), this.updateQuery();
        var i2 = this.hasListeners();
        i2 && B(this.currentQuery, r2, this.options, n3) && this.executeFetch(),
          this.updateResult(e3),
          !i2 ||
            (this.currentQuery === r2 &&
              this.options.enabled === n3.enabled &&
              this.options.staleTime === n3.staleTime) ||
            this.updateStaleTimeout();
        var s2 = this.computeRefetchInterval();
        !i2 ||
          (this.currentQuery === r2 && this.options.enabled === n3.enabled && s2 === this.currentRefetchInterval) ||
          this.updateRefetchInterval(s2);
      }),
      (n2.getOptimisticResult = function (t3) {
        var e3 = this.client.defaultQueryObserverOptions(t3),
          n3 = this.client.getQueryCache().build(this.client, e3);
        return this.createResult(n3, e3);
      }),
      (n2.getCurrentResult = function () {
        return this.currentResult;
      }),
      (n2.trackResult = function (t3, e3) {
        var n3 = this,
          r2 = {},
          i2 = function (t4) {
            n3.trackedProps.includes(t4) || n3.trackedProps.push(t4);
          };
        return (
          Object.keys(t3).forEach(function (e4) {
            Object.defineProperty(r2, e4, {
              configurable: false,
              enumerable: true,
              get: function () {
                return i2(e4), t3[e4];
              },
            });
          }),
          (e3.useErrorBoundary || e3.suspense) && i2("error"),
          r2
        );
      }),
      (n2.getNextResult = function (t3) {
        var e3 = this;
        return new Promise(function (n3, r2) {
          var i2 = e3.subscribe(function (e4) {
            e4.isFetching || (i2(), e4.isError && (t3 == null ? void 0 : t3.throwOnError) ? r2(e4.error) : n3(e4));
          });
        });
      }),
      (n2.getCurrentQuery = function () {
        return this.currentQuery;
      }),
      (n2.remove = function () {
        this.client.getQueryCache().remove(this.currentQuery);
      }),
      (n2.refetch = function (t3) {
        return this.fetch(o({}, t3, { meta: { refetchPage: t3 == null ? void 0 : t3.refetchPage } }));
      }),
      (n2.fetchOptimistic = function (t3) {
        var e3 = this,
          n3 = this.client.defaultQueryObserverOptions(t3),
          r2 = this.client.getQueryCache().build(this.client, n3);
        return r2.fetch().then(function () {
          return e3.createResult(r2, n3);
        });
      }),
      (n2.fetch = function (t3) {
        var e3 = this;
        return this.executeFetch(t3).then(function () {
          return e3.updateResult(), e3.currentResult;
        });
      }),
      (n2.executeFetch = function (t3) {
        this.updateQuery();
        var e3 = this.currentQuery.fetch(this.options, t3);
        return (t3 == null ? void 0 : t3.throwOnError) || (e3 = e3.catch(a)), e3;
      }),
      (n2.updateStaleTimeout = function () {
        var t3 = this;
        if ((this.clearStaleTimeout(), !u && !this.currentResult.isStale && c(this.options.staleTime))) {
          var e3 = h(this.currentResult.dataUpdatedAt, this.options.staleTime) + 1;
          this.staleTimeoutId = setTimeout(function () {
            t3.currentResult.isStale || t3.updateResult();
          }, e3);
        }
      }),
      (n2.computeRefetchInterval = function () {
        var t3;
        return typeof this.options.refetchInterval == "function"
          ? this.options.refetchInterval(this.currentResult.data, this.currentQuery)
          : (t3 = this.options.refetchInterval) != null && t3;
      }),
      (n2.updateRefetchInterval = function (t3) {
        var e3 = this;
        this.clearRefetchInterval(),
          (this.currentRefetchInterval = t3),
          !u &&
            this.options.enabled !== false &&
            c(this.currentRefetchInterval) &&
            this.currentRefetchInterval !== 0 &&
            (this.refetchIntervalId = setInterval(function () {
              (e3.options.refetchIntervalInBackground || R.isFocused()) && e3.executeFetch();
            }, this.currentRefetchInterval));
      }),
      (n2.updateTimers = function () {
        this.updateStaleTimeout(), this.updateRefetchInterval(this.computeRefetchInterval());
      }),
      (n2.clearTimers = function () {
        this.clearStaleTimeout(), this.clearRefetchInterval();
      }),
      (n2.clearStaleTimeout = function () {
        clearTimeout(this.staleTimeoutId), (this.staleTimeoutId = void 0);
      }),
      (n2.clearRefetchInterval = function () {
        clearInterval(this.refetchIntervalId), (this.refetchIntervalId = void 0);
      }),
      (n2.createResult = function (t3, e3) {
        var n3,
          r2 = this.currentQuery,
          i2 = this.options,
          s2 = this.currentResult,
          o2 = this.currentResultState,
          u2 = this.currentResultOptions,
          a2 = t3 !== r2,
          c2 = a2 ? t3.state : this.currentQueryInitialState,
          l2 = a2 ? this.currentResult : this.previousQueryResult,
          h2 = t3.state,
          f2 = h2.dataUpdatedAt,
          d2 = h2.error,
          v2 = h2.errorUpdatedAt,
          p2 = h2.isFetching,
          y2 = h2.status,
          m2 = false,
          b2 = false;
        if (e3.optimisticResults) {
          var g2 = this.hasListeners(),
            C2 = !g2 && H(t3, e3),
            S2 = g2 && B(t3, r2, e3, i2);
          (C2 || S2) && ((p2 = true), f2 || (y2 = "loading"));
        }
        if (e3.keepPreviousData && !h2.dataUpdateCount && (l2 == null ? void 0 : l2.isSuccess) && y2 !== "error")
          (n3 = l2.data), (f2 = l2.dataUpdatedAt), (y2 = l2.status), (m2 = true);
        else if (e3.select && h2.data !== void 0) {
          var P2;
          if (
            s2 &&
            h2.data === (o2 == null ? void 0 : o2.data) &&
            e3.select === ((P2 = this.previousSelect) == null ? void 0 : P2.fn) &&
            !this.previousSelectError
          )
            n3 = this.previousSelect.result;
          else
            try {
              (n3 = e3.select(h2.data)),
                (this.previousSelect = { fn: e3.select, result: n3 }),
                e3.structuralSharing !== false && (n3 = O(s2 == null ? void 0 : s2.data, n3)),
                (this.previousSelectError = null);
            } catch (t4) {
              I().error(t4), (d2 = t4), (this.previousSelectError = t4), (v2 = Date.now()), (y2 = "error");
            }
        } else n3 = h2.data;
        if (e3.placeholderData !== void 0 && n3 === void 0 && (y2 === "loading" || y2 === "idle")) {
          var w2;
          if (
            (s2 == null ? void 0 : s2.isPlaceholderData) &&
            e3.placeholderData === (u2 == null ? void 0 : u2.placeholderData)
          )
            w2 = s2.data;
          else if (
            ((w2 = typeof e3.placeholderData == "function" ? e3.placeholderData() : e3.placeholderData),
            e3.select && w2 !== void 0)
          )
            try {
              (w2 = e3.select(w2)),
                e3.structuralSharing !== false && (w2 = O(s2 == null ? void 0 : s2.data, w2)),
                (this.previousSelectError = null);
            } catch (t4) {
              I().error(t4), (d2 = t4), (this.previousSelectError = t4), (v2 = Date.now()), (y2 = "error");
            }
          w2 !== void 0 && ((y2 = "success"), (n3 = w2), (b2 = true));
        }
        return {
          status: y2,
          isLoading: y2 === "loading",
          isSuccess: y2 === "success",
          isError: y2 === "error",
          isIdle: y2 === "idle",
          data: n3,
          dataUpdatedAt: f2,
          error: d2,
          errorUpdatedAt: v2,
          failureCount: h2.fetchFailureCount,
          isFetched: h2.dataUpdateCount > 0 || h2.errorUpdateCount > 0,
          isFetchedAfterMount: h2.dataUpdateCount > c2.dataUpdateCount || h2.errorUpdateCount > c2.errorUpdateCount,
          isFetching: p2,
          isRefetching: p2 && y2 !== "loading",
          isLoadingError: y2 === "error" && h2.dataUpdatedAt === 0,
          isPlaceholderData: b2,
          isPreviousData: m2,
          isRefetchError: y2 === "error" && h2.dataUpdatedAt !== 0,
          isStale: G(t3, e3),
          refetch: this.refetch,
          remove: this.remove,
        };
      }),
      (n2.shouldNotifyListeners = function (t3, e3) {
        if (!e3) return true;
        var n3 = this.options,
          r2 = n3.notifyOnChangeProps,
          i2 = n3.notifyOnChangePropsExclusions;
        if (!r2 && !i2) return true;
        if (r2 === "tracked" && !this.trackedProps.length) return true;
        var s2 = r2 === "tracked" ? this.trackedProps : r2;
        return Object.keys(t3).some(function (n4) {
          var r3 = n4,
            o2 = t3[r3] !== e3[r3],
            u2 =
              s2 == null
                ? void 0
                : s2.some(function (t4) {
                    return t4 === n4;
                  }),
            a2 =
              i2 == null
                ? void 0
                : i2.some(function (t4) {
                    return t4 === n4;
                  });
          return o2 && !a2 && (!s2 || u2);
        });
      }),
      (n2.updateResult = function (t3) {
        var e3 = this.currentResult;
        if (
          ((this.currentResult = this.createResult(this.currentQuery, this.options)),
          (this.currentResultState = this.currentQuery.state),
          (this.currentResultOptions = this.options),
          !(function (t4, e4) {
            if ((t4 && !e4) || (e4 && !t4)) return false;
            for (var n4 in t4) if (t4[n4] !== e4[n4]) return false;
            return true;
          })(this.currentResult, e3))
        ) {
          var n3 = { cache: true };
          (t3 == null ? void 0 : t3.listeners) !== false &&
            this.shouldNotifyListeners(this.currentResult, e3) &&
            (n3.listeners = true),
            this.notify(o({}, n3, t3));
        }
      }),
      (n2.updateQuery = function () {
        var t3 = this.client.getQueryCache().build(this.client, this.options);
        if (t3 !== this.currentQuery) {
          var e3 = this.currentQuery;
          (this.currentQuery = t3),
            (this.currentQueryInitialState = t3.state),
            (this.previousQueryResult = this.currentResult),
            this.hasListeners() && (e3 == null || e3.removeObserver(this), t3.addObserver(this));
        }
      }),
      (n2.onQueryUpdate = function (t3) {
        var e3 = {};
        t3.type === "success" ? (e3.onSuccess = true) : t3.type !== "error" || D(t3.error) || (e3.onError = true),
          this.updateResult(e3),
          this.hasListeners() && this.updateTimers();
      }),
      (n2.notify = function (t3) {
        var e3 = this;
        T.batch(function () {
          t3.onSuccess
            ? (e3.options.onSuccess == null || e3.options.onSuccess(e3.currentResult.data),
              e3.options.onSettled == null || e3.options.onSettled(e3.currentResult.data, null))
            : t3.onError &&
              (e3.options.onError == null || e3.options.onError(e3.currentResult.error),
              e3.options.onSettled == null || e3.options.onSettled(void 0, e3.currentResult.error)),
            t3.listeners &&
              e3.listeners.forEach(function (t4) {
                t4(e3.currentResult);
              }),
            t3.cache && e3.client.getQueryCache().notify({ query: e3.currentQuery, type: "observerResultsUpdated" });
        });
      }),
      e2
    );
  })(s);
function H(t2, e2) {
  return (
    (function (t3, e3) {
      return !(
        e3.enabled === false ||
        t3.state.dataUpdatedAt ||
        (t3.state.status === "error" && e3.retryOnMount === false)
      );
    })(t2, e2) ||
    (function (t3, e3) {
      return (
        e3.enabled !== false &&
        t3.state.dataUpdatedAt > 0 &&
        (e3.refetchOnMount === "always" || (e3.refetchOnMount !== false && G(t3, e3)))
      );
    })(t2, e2)
  );
}
function B(t2, e2, n2, r2) {
  return (
    n2.enabled !== false &&
    (t2 !== e2 || r2.enabled === false) &&
    (!n2.suspense || t2.state.status !== "error") &&
    G(t2, n2)
  );
}
function G(t2, e2) {
  return t2.isStaleByTime(e2.staleTime);
}
var W = t.unstable_batchedUpdates;
T.setBatchNotifyFunction(W);
var $ = console;
j = $;
var J = e.createContext(void 0),
  Y = e.createContext(false);
function z(t2) {
  return t2 && typeof window != "undefined"
    ? (window.ReactQueryClientContext || (window.ReactQueryClientContext = J), window.ReactQueryClientContext)
    : J;
}
var V = function (t2) {
  var n2 = t2.client,
    r2 = t2.contextSharing,
    i2 = r2 !== void 0 && r2,
    s2 = t2.children;
  e.useEffect(
    function () {
      return (
        n2.mount(),
        function () {
          n2.unmount();
        }
      );
    },
    [n2]
  );
  var o2 = z(i2);
  return e.createElement(Y.Provider, { value: i2 }, e.createElement(o2.Provider, { value: n2 }, s2));
};
var X,
  Z = e.createContext(
    ((X = false),
    {
      clearReset: function () {
        X = false;
      },
      reset: function () {
        X = true;
      },
      isReset: function () {
        return X;
      },
    })
  );
function tt(t2, n2) {
  var r2 = e.useRef(false),
    i2 = e.useState(0)[1],
    s2 = (function () {
      var t3 = e.useContext(z(e.useContext(Y)));
      if (!t3) throw new Error("No QueryClient set, use QueryClientProvider to set one");
      return t3;
    })(),
    o2 = e.useContext(Z),
    u2 = s2.defaultQueryObserverOptions(t2);
  (u2.optimisticResults = true),
    u2.onError && (u2.onError = T.batchCalls(u2.onError)),
    u2.onSuccess && (u2.onSuccess = T.batchCalls(u2.onSuccess)),
    u2.onSettled && (u2.onSettled = T.batchCalls(u2.onSettled)),
    u2.suspense && (typeof u2.staleTime != "number" && (u2.staleTime = 1e3), u2.cacheTime === 0 && (u2.cacheTime = 1)),
    (u2.suspense || u2.useErrorBoundary) && (o2.isReset() || (u2.retryOnMount = false));
  var a2,
    c2,
    l2,
    h2 = e.useState(function () {
      return new n2(s2, u2);
    })[0],
    f2 = h2.getOptimisticResult(u2);
  if (
    (e.useEffect(
      function () {
        (r2.current = true), o2.clearReset();
        var t3 = h2.subscribe(
          T.batchCalls(function () {
            r2.current &&
              i2(function (t4) {
                return t4 + 1;
              });
          })
        );
        return (
          h2.updateResult(),
          function () {
            (r2.current = false), t3();
          }
        );
      },
      [o2, h2]
    ),
    e.useEffect(
      function () {
        h2.setOptions(u2, { listeners: false });
      },
      [u2, h2]
    ),
    u2.suspense && f2.isLoading)
  )
    throw h2
      .fetchOptimistic(u2)
      .then(function (t3) {
        var e2 = t3.data;
        u2.onSuccess == null || u2.onSuccess(e2), u2.onSettled == null || u2.onSettled(e2, null);
      })
      .catch(function (t3) {
        o2.clearReset(), u2.onError == null || u2.onError(t3), u2.onSettled == null || u2.onSettled(void 0, t3);
      });
  if (
    f2.isError &&
    !o2.isReset() &&
    !f2.isFetching &&
    ((a2 = u2.suspense),
    (c2 = u2.useErrorBoundary),
    (l2 = f2.error),
    typeof c2 == "function" ? c2(l2) : typeof c2 == "boolean" ? c2 : a2)
  )
    throw f2.error;
  return u2.notifyOnChangeProps === "tracked" && (f2 = h2.trackResult(f2, u2)), f2;
}
const et = async (t2) => {
  const e2 = t2.queryKey.toString(),
    n2 = await fetch(e2, { method: "GET", credentials: "include" });
  return (
    ((t3) => {
      if (!t3.ok) throw new Error("Fetch request failed");
    })(n2),
    n2.json()
  );
};
var nt,
  rt = { exports: {} };
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
(nt = rt),
  (function () {
    var t2 = {}.hasOwnProperty;
    function e2() {
      for (var n2 = [], r2 = 0; r2 < arguments.length; r2++) {
        var i2 = arguments[r2];
        if (i2) {
          var s2 = typeof i2;
          if (s2 === "string" || s2 === "number") n2.push(i2);
          else if (Array.isArray(i2)) {
            if (i2.length) {
              var o2 = e2.apply(null, i2);
              o2 && n2.push(o2);
            }
          } else if (s2 === "object")
            if (i2.toString === Object.prototype.toString) for (var u2 in i2) t2.call(i2, u2) && i2[u2] && n2.push(u2);
            else n2.push(i2.toString());
        }
      }
      return n2.join(" ");
    }
    nt.exports ? ((e2.default = e2), (nt.exports = e2)) : (window.classNames = e2);
  })();
var it = rt.exports,
  st = { exports: {} },
  ot = {};
Object.getOwnPropertySymbols, Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;
!(function () {
  try {
    if (!Object.assign) return false;
    var t2 = new String("abc");
    if (((t2[5] = "de"), Object.getOwnPropertyNames(t2)[0] === "5")) return false;
    for (var e2 = {}, n2 = 0; n2 < 10; n2++) e2["_" + String.fromCharCode(n2)] = n2;
    var r2 = Object.getOwnPropertyNames(e2).map(function (t3) {
      return e2[t3];
    });
    if (r2.join("") !== "0123456789") return false;
    var i2 = {};
    return (
      "abcdefghijklmnopqrst".split("").forEach(function (t3) {
        i2[t3] = t3;
      }),
      Object.keys(Object.assign({}, i2)).join("") === "abcdefghijklmnopqrst"
    );
  } catch (t3) {
    return false;
  }
})() || Object.assign;
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ut = e,
  at = 60103;
if (((ot.Fragment = 60107), typeof Symbol == "function" && Symbol.for)) {
  var ct = Symbol.for;
  (at = ct("react.element")), (ot.Fragment = ct("react.fragment"));
}
var lt = ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  ht = Object.prototype.hasOwnProperty,
  ft = { key: true, ref: true, __self: true, __source: true };
function dt(t2, e2, n2) {
  var r2,
    i2 = {},
    s2 = null,
    o2 = null;
  for (r2 in (n2 !== void 0 && (s2 = "" + n2),
  e2.key !== void 0 && (s2 = "" + e2.key),
  e2.ref !== void 0 && (o2 = e2.ref),
  e2))
    ht.call(e2, r2) && !ft.hasOwnProperty(r2) && (i2[r2] = e2[r2]);
  if (t2 && t2.defaultProps) for (r2 in (e2 = t2.defaultProps)) i2[r2] === void 0 && (i2[r2] = e2[r2]);
  return { $$typeof: at, type: t2, key: s2, ref: o2, props: i2, _owner: lt.current };
}
(ot.jsx = dt), (ot.jsxs = dt), (st.exports = ot);
const vt = st.exports.jsx;
var pt =
  (globalThis && globalThis.__rest) ||
  function (t2, e2) {
    var n2 = {};
    for (var r2 in t2) Object.prototype.hasOwnProperty.call(t2, r2) && e2.indexOf(r2) < 0 && (n2[r2] = t2[r2]);
    if (t2 != null && typeof Object.getOwnPropertySymbols == "function") {
      var i2 = 0;
      for (r2 = Object.getOwnPropertySymbols(t2); i2 < r2.length; i2++)
        e2.indexOf(r2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(t2, r2[i2]) && (n2[r2[i2]] = t2[r2[i2]]);
    }
    return n2;
  };
var yt = n((t2, e2) => {
  var { children: n2, className: r2, border: i2 = false, as: s2 = "div" } = t2,
    o2 = pt(t2, ["children", "className", "border", "as"]);
  return vt(
    s2,
    __spreadProps(
      __spreadValues(
        {},
        Object.assign({ ref: e2, className: it("navds-panel", r2, { "navds-panel--border": i2 }) }, o2)
      ),
      { children: n2 }
    )
  );
});
const mt = ({ tekst: t2 }) =>
  vt("div", { className: "komponent", children: vt(yt, { children: vt("p", { children: t2 }) }) });
function bt() {
  const { data: t2 } = tt(f("https://okonomiportal.nav.no/api/endpoint", et, e2), N);
  var e2;
  return vt("main", {
    className: "main",
    children: vt("div", { className: "app", children: vt(mt, { tekst: t2 == null ? void 0 : t2.tekst }) }),
  });
}
const gt = () => vt(V, { client: new _(), children: vt(bt, {}) });
export { gt as default };
