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

  const renderSocials = () => {
    return (
      <CVSection title="Socials" hr={isMobile}>
        <div className="flex py-2">
          {props.socialLinks?.map((item) => {
            return (
              <div className="flex pr-4" key={item.fields.url}>
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
    );
  };

  return (
    <div className={props.className}>
      {/* Social links section */}
      {!isMobile && renderSocials()}

      {/* Skills section */}

      <CVSection title="Skills" hr>
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

      <CVSection className="py-8" title="Hobbies" hr>
        <div>
          <div className="flex items-center py-2">
            <span className="inline-block h-3 w-3 rounded-2xl bg-purple-900"></span>
            <Link href="https://marcopaps.photos/rides">
              <a className="ml-2" target="_blank">
                Motorcycles
              </a>
            </Link>
          </div>
        </div>
      </CVSection>

      {isMobile && renderSocials()}
    </div>
  );
};

export default CVPersonalDetails;
