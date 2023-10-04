import type { Meta, StoryObj } from '@storybook/react';
import { CtaButton } from './cta-button';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof CtaButton> = {
  component: CtaButton,
  title: 'CtaButton',
};
export default meta;
type Story = StoryObj<typeof CtaButton>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to CtaButton!/gi)).toBeTruthy();
  },
};
