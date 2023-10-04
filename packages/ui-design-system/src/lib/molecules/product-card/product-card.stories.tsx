import type { Meta, StoryObj } from '@storybook/react';
import { ProductCard } from './product-card';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof ProductCard> = {
  component: ProductCard,
  title: 'ProductCard',
};
export default meta;
type Story = StoryObj<typeof ProductCard>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to ProductCard!/gi)).toBeTruthy();
  },
};
