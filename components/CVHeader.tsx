import { Avatar } from '.';

interface IProps {
  className?: string;
}

const CVHeader = (props: IProps) => {
  return (
    <div className={props.className}>
      <div className="flex items-center bg-purple-900 text-white">
        <div className="relative inline-flex max-h-28 pr-4 md:max-h-32 md:pr-8 ">
          <Avatar />
        </div>

        <div className="block">
          {/* Name section */}
          <div className="flex text-2xl font-bold md:py-2 md:text-3xl">
            <div className="">Marco Budiongan</div>
          </div>

          {/* Information section */}
          <div className="md:text-md text-xs text-gray-100 sm:block md:flex ">
            <div>{'Email: hello@marcopaps.com'}</div>
            <div className="md:ml-4">{'Phone: +639 61 204 8584'}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVHeader;
