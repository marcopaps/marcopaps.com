import { Avatar } from "..";

interface PropsType {
  className?: string;
}

const CVHeader = (props: PropsType) => {
  return (
    <div className={props.className}>
      <div className="flex items-center bg-purple-900 text-white min-h-full">
        <Avatar className="pr-8" />

        <div className="block">
          {/* Name section */}
          <div className="flex md:text-5xl font-bold">
            <div className="">Marco Budiongan</div>
          </div>

          {/* Information section */}
          <div className="flex py-4 text-gray-100 text-sm">
            <div className="test">{"Email: hello@marcopaps.com"}</div>
            <div className="ml-4">{"Phone: +639 61 204 8584"}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVHeader;