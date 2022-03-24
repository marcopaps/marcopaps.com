import IconFB from 'public/facebook.svg';
import IconLinkedIn from 'public/linkedin.svg';
import IconGithub from 'public/github.svg';
import IconTwitter from 'public/twitter.svg';
import IconInstagram from 'public/instagram.svg';
import IconWebsite from 'public/website.svg';

type IconTypes =
  | 'facebook'
  | 'linkedin'
  | 'twitter'
  | 'github'
  | 'instagram'
  | 'website';

export const getIcon = (icon: IconTypes, fill?: string) => {
  const icons = {
    facebook: <IconFB fill={fill} />,
    linkedin: <IconLinkedIn fill={fill} />,
    twitter: <IconTwitter fill={fill} />,
    github: <IconGithub fill={fill} />,
    instagram: <IconInstagram fill={fill} />,
    website: <IconWebsite fill={fill} />,
  };

  return icons[icon];
};
