import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Card from "../../components/Card";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {},
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Title",
};
