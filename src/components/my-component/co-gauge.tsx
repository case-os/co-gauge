import { Component, Element, Prop, h } from '@stencil/core';

@Component({
  tag: 'co-gauge',
  styleUrl: 'co-gauge.css',
  shadow: true,
})
export class CoGauge {
  @Element()
  private el: HTMLCoGaugeElement;

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
    if (this.responsive) {
      this.el.style.setProperty('--width', `${this.el.clientWidth}px`);
      this.el.style.setProperty('--height', `${this.el.clientWidth / 2}px`);
    }
  }

  // --------------------------------------------------------------------------
  //
  //  Render
  //
  // --------------------------------------------------------------------------

  render() {
    return (
      <div
        class={`semi-donut ${this.responsive ? 'responsive' : 'fixed-size'}`}
        style={{ '--percentage': `${this.value}`, '--color': `${this.color}` }}
      >
        <slot />
      </div>
    );
  }
}
