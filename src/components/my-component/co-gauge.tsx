import { Component, Element, Prop, h, Host } from '@stencil/core';

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
   * The thickness of the gauge bar
   */
  @Prop() thickness: number = 50;

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
    this.el.style.setProperty('--thickness', `${this.thickness}`);
    if (this.responsive) {
      this.el.style.setProperty('--width', `${this.el.clientWidth}px`);
      this.el.style.setProperty('--height', `${this.el.clientWidth / 2}`);
    }
  }

  // --------------------------------------------------------------------------
  //
  //  Render
  //
  // --------------------------------------------------------------------------

  render() {
    return (
      <Host
        style={{
          ...(this.responsive && {
            width: '100%',
          }),
        }}
      >
        <div
          class={{
            'semi-donut': true,
          }}
          style={{
            '--percentage': `${this.value}`,
            ...(this.color && {
              '--color': `${this.color}`,
            }),
          }}
        >
          <slot />
        </div>
      </Host>
    );
  }
}
