import {
  IconFB,
  IconGithub,
  IconInstagram,
  IconLinkedIn,
  IconTwitter,
  IconWebsite,
} from ".";

export const getIcon = (icon: string, fill?: string) => {
  if (icon === "facebook") return <IconFB fill={fill} />;
  if (icon === "linkedin") return <IconLinkedIn fill={fill} />;
  if (icon === "twitter") return <IconTwitter fill={fill} />;
  if (icon === "github") return <IconGithub fill={fill} />;
  if (icon === "instagram") return <IconInstagram fill={fill} />;
  if (icon === "website") return <IconWebsite fill={fill} />;
};
