import { newSpecPage } from '@stencil/core/testing';
import { MtHeading } from '../mt-heading';

describe('mt-heading', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MtHeading],
      html: `<mt-heading></mt-heading>`,
    });
    expect(page.root).toEqualHtml(`
      <mt-heading>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mt-heading>
    `);
  });
});
