import { r as registerInstance, h } from './index-182a6d7a.js';

function format(first, middle, last) {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

const myComponentCss = ":host{display:block}";

const MyComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  getText() {
    return format(this.first, this.middle, this.last);
  }
  render() {
    return (h("div", { class: "semi-donut margin", style: { "--percentage": "80", "--fill": "#FF3D00" } }, "HTML5"));
  }
};
MyComponent.style = myComponentCss;

export { MyComponent as my_component };
