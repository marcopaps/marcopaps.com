import Link from 'next/link';
import { CVSection, CVSkill } from '@/components/cv';
import useIsMobile from '@/hooks/useIsMobile';

import type { ISkill, IHobby, ISocialLink } from '@/types/generated/contentful';
import { getIcon } from '@/icons/getIcon';

interface IProps {
  skills?: ISkill[];
  hobbies?: IHobby[];
  socialLinks?: ISocialLink[];
  className?: string;
}

export const CVPersonalDetails: React.FC<IProps> = (props) => {
  const isMobile = useIsMobile();

  return (
    <div className={props.className}>
      {/* Skills section */}
      <CVSection title="Technology Stack" hr={isMobile}>
        <div className="flex flex-wrap gap-2">
          {props.skills?.map((item, key) => {
            return (
              <div
                className="bg-white text-purple-900 border border-purple-900 p-2 rounded-3xl w-fit text-center min-w-[4rem] select-none"
                key={key}
              >
                {item.fields.name}
              </div>
            );
          })}
        </div>
      </CVSection>

      {/* Social links section */}
      <CVSection title="Socials" hr>
        <div className="flex">
          {props.socialLinks?.map((item) => {
            return (
              <div className="pr-4" key={item.fields.url}>
                <div className="w-6">
                  <a
                    className="px-4 text-blue-900"
                    href={item.fields.url}
                    target="blank"
                    aria-label={item.fields.label}
                  >
                    {getIcon(item.fields.icon, item.fields?.color)}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </CVSection>
    </div>
  );
};

export default CVPersonalDetails;
