new App({
    canvas: document.querySelector('#canvas'),

    colorPalette: new ColorPalette({
        element: document.querySelector('#color-palette'),
        colors: [
            {red: 252, green: 76, blue: 79},
            {red: 79, green: 163, blue: 252},
        ]
    }),

    colorPicker: new ColorPicker({
        element: document.querySelector('#color-picker')
    })
})