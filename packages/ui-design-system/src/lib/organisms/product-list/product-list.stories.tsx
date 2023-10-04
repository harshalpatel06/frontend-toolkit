import type { Meta, StoryObj } from '@storybook/react';
import { ProductList } from './product-list';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof ProductList> = {
  component: ProductList,
  title: 'ProductList',
};
export default meta;
type Story = StoryObj<typeof ProductList>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to ProductList!/gi)).toBeTruthy();
  },
};
