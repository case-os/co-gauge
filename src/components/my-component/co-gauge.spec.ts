import { newSpecPage } from '@stencil/core/testing';
import { CoGauge } from './co-gauge';

describe('co-gauge', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [CoGauge],
      html: '<co-gauge></co-gauge>',
    });
    expect(root).toEqualHtml(`
      <co-gauge>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </co-gauge>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [CoGauge],
      html: `<co-gauge first="Stencil" last="'Don't call me a framework' JS"></co-gauge>`,
    });
    expect(root).toEqualHtml(`
      <co-gauge first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </co-gauge>
    `);
  });
});
