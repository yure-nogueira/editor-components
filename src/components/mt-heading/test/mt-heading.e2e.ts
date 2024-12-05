import { newE2EPage } from '@stencil/core/testing';

describe('mt-heading', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mt-heading></mt-heading>');

    const element = await page.find('mt-heading');
    expect(element).toHaveClass('hydrated');
  });
});
