import { Component, Element, Prop, h } from '@stencil/core';

@Component({
  tag: 'co-gauge',
  styleUrl: 'co-gauge.css',
  shadow: true,
})
export class CoGauge {
  @Element()
  private el: HTMLElement;

  // --------------------------------------------------------------------------
  //
  //  Public Properties
  //
  // --------------------------------------------------------------------------

  /**
   * The color (HEX, RGB, ....)
   */
  @Prop() color: string;

  /**
   * The value of the gauge between 0 and 100
   */
  @Prop() value: number = 50;

  /**
   * If the component should adapt it's width automatically
   */
  @Prop() responsive: boolean = false;

  // --------------------------------------------------------------------------
  //
  //  Life Cycle
  //
  // --------------------------------------------------------------------------

  componentDidLoad() {
    console.log('BF did');

    // let box = document.querySelector('.box');
    // let width = box.clientWidth;
    // let height = box.clientHeight;
    console.log(`BF SIZE`, this.el.clientWidth, this.el.clientHeight);
  }

  // --------------------------------------------------------------------------
  //
  //  Render
  //
  // --------------------------------------------------------------------------

  render() {
    console.log(`BF render`);
    return (
      <div
        class='semi-donut fixed-size'
        style={{ '--percentage': `${this.value}`, '--color': `${this.color}` }}
      >
        <slot />
      </div>
    );
  }
}
