import { Avatar } from "..";

interface IProps {
  className?: string;
}

const CVHeader = (props: IProps) => {
  return (
    <div className={props.className}>
      <div className="flex items-center bg-purple-900 text-white min-h-full">
        <Avatar className="pr-8" />

        <div className="block">
          {/* Name section */}
          <div className="flex text-xl md:text-3xl lg:text-5xl font-bold">
            <div className="">Marco Budiongan</div>
          </div>

          {/* Information section */}
          <div className="sm:block md:flex py-4 text-gray-100 text-sm">
            <div className="test">{"Email: hello@marcopaps.com"}</div>
            <div className="md:ml-4">{"Phone: +639 61 204 8584"}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVHeader;
