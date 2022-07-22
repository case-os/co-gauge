import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'co-gauge',
  styleUrl: 'co-gauge.css',
  shadow: true,
})
export class CoGauge {
  /**
   * The color (HEX, RGB, ....)
   */
  @Prop() color: string;

  /**
   * The value of the gauge between 0 and 100
   */
  @Prop() value: number = 50;

  render() {
    return (
      <div
        class='semi-donut'
        style={{ '--percentage': `${this.value}`, '--color': `${this.color}` }}
      >
        <slot />
      </div>
    );
  }
}
