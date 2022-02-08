import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CVSkill } from "../../components";
import { RatingEnum } from "../../components/CV/CVSkill";

export default {
  title: "Components/Skill",
  component: CVSkill,
  argTypes: {},
} as ComponentMeta<typeof CVSkill>;

const Template: ComponentStory<typeof CVSkill> = (args) => (
  <CVSkill {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Javascript",
  rating: RatingEnum.VERY_HIGH,
};
