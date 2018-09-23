class ColorPicker {
    constructor({element}) {
        console.log(open)
        this.element = element;
        this.previewElement = null;

        this.color = {
            red: 0,
            green: 0,
            blue: 0
        }

        this.onAdd = () => {};

        this.init();
    }

    init() {
        this.previewElement = this.element.querySelector('.color-picker__preview');
        this.setPreviewBackground(this.color);

        this.element.querySelectorAll('.color-picker__slider')
            .forEach(slider => slider.addEventListener('change', this.handleChange.bind(this)));

        document.querySelector('.color-picker__close-button').addEventListener('click', this.handleClose.bind(this))
        document.querySelector('.color-picker__add-button').addEventListener('click', this.handleAdd.bind(this))
    }

    reset() {
        this.color = {
            red: 0,
            green: 0,
            blue: 0
        };

        this.element.querySelectorAll('.color-picker__slider')
            .forEach(slider => slider.value = 0);

        this.setPreviewBackground(this.color);
    }

    handleClose(event) {
        this.close();
    }

    handleAdd(event) {
        this.onAdd(this.color);
        this.reset();
        this.close();
    }

    handleChange( { target }) {
        this.color[target.id] = Number(target.value);
        this.setPreviewBackground(this.color);
        
    }

    setPreviewBackground(color) {
        this.previewElement.style.backgroundColor = `rgb(${this.color.red},${this.color.green},${this.color.blue})`;
    }

    open() {
        this.element.style.display = 'block';
    }

    close() {
        this.element.style.display = 'none';
    }
}