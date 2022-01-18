import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { DefaultButton } from "../../components/Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Button",
  component: DefaultButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof DefaultButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DefaultButton> = (args) => (
  <DefaultButton {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: "Default button",
};
