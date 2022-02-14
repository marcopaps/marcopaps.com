import IconFB from 'public/facebook.svg';
import IconLinkedIn from 'public/linkedin.svg';
import IconGithub from 'public/github.svg';
import IconTwitter from 'public/twitter.svg';
import IconInstagram from 'public/instagram.svg';
import IconWebsite from 'public/website.svg';
import IconDefault from 'public/vercel.svg';

export const getIcon = (icon: string, fill?: string) => {
  switch (icon) {
    case 'facebook':
      return <IconFB fill={fill} />;
    case 'linkedin':
      return <IconLinkedIn fill={fill} />;
    case 'twitter':
      return <IconTwitter fill={fill} />;
    case 'github':
      return <IconGithub fill={fill} />;
    case 'instagram':
      return <IconInstagram fill={fill} />;
    case 'website':
      return <IconWebsite fill={fill} />;
    default:
      return <IconDefault fill={fill} />;
  }
};
