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
      <CVSection title="Skills" hr={isMobile}>
        <div>
          {props.skills?.map((item) => {
            return (
              <CVSkill
                key={item.sys.id}
                label={item.fields.name}
                rating={item.fields.rating}
                className="relative py-4"
              />
            );
          })}
        </div>
      </CVSection>

      {/* Hobbies section */}
      <CVSection title="Hobbies" hr>
        <div className="flex items-center">
          <span className="inline-block w-3 h-3 bg-purple-900 rounded-2xl"></span>
          <Link href="https://marcopaps.photos/rides" className="ml-2" target="_blank">
            
              Motorcycles
            
          </Link>
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
