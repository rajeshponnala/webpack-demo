export default (text="Hello World Test") => {
    const element = document.createElement('div');
    element.innerHTML = text;
    return element;
}