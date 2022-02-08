import { CVSection, CVSkill } from ".";

import type { ISkill, IHobby } from "@/types/generated/contentful";

interface IProps {
  skills?: ISkill[];
  hobbies?: IHobby[];
  className?: string;
}

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    text: "marcopaps",
    url: "https://www.linkedin.com/in/marcopaps",
  },
  {
    label: "Facebook",
    text: "marcopapssss",
    url: "https://www.facebook.com/marcopapssss",
  },
];

export const CVPersonalDetails: React.FC<IProps> = (props) => {
  return (
    <div className={props.className}>
      {/* Social links section */}

      <CVSection title="Social Links">
        <div className="py-8">
          {SOCIAL_LINKS.map((item) => {
            return (
              <div className="flex py-1" key={item.url}>
                <div>{item.label}</div>
                <div>
                  <a
                    className="text-blue-900 px-4"
                    href={item.url}
                    target="blank"
                  >
                    {item.text}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </CVSection>

      {/* Skills section */}

      <CVSection title="Skills" hr>
        <div>
          {props.skills?.map((item) => {
            return (
              <CVSkill
                key={item.sys.id}
                label={item.fields.name}
                rating={item.fields.rating}
                className="py-4 relative"
              />
            );
          })}
        </div>
      </CVSection>

      {/* Hobbies section */}

      <CVSection className="py-8" title="Hobbies" hr>
        <div>
          {props.hobbies?.map((item) => {
            return (
              <div className="flex items-center py-2" key={item.fields.title}>
                <span className="inline-block h-3 w-3 rounded-2xl bg-purple-900"></span>
                <a
                  className="px-2 hover:underline hover:text-purple-900"
                  href={`/hobbies/${item.fields.slug}`}
                  target="blank"
                >
                  {item.fields.title}
                </a>
              </div>
            );
          })}
        </div>
      </CVSection>
    </div>
  );
};

export default CVPersonalDetails;
