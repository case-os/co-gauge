import { newSpecPage } from '@stencil/core/testing';
import { CoGauge } from './co-gauge';

describe('co-gauge', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [CoGauge],
      html: '<co-gauge></co-gauge>',
    });
    expect(root).toEqualHtml(`
      <co-gauge style="--thickness: 50;">
        <mock:shadow-root>
          <div class="semi-donut" style="--percentage: 50;">
            <slot></slot>
          </div>
        </mock:shadow-root>
      </co-gauge>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [CoGauge],
      html: `<co-gauge thickness="70" value="17"></co-gauge>`,
    });
    expect(root).toEqualHtml(`
      <co-gauge thickness="70" value="17" style="--thickness: 70;">
        <mock:shadow-root>
          <div class="semi-donut" style="--percentage: 17;">
            <slot></slot>
          </div>
        </mock:shadow-root>
      </co-gauge>
    `);
  });
});
