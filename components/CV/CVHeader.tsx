import { Avatar } from '..';

interface IProps {
  className?: string;
}

const CVHeader = (props: IProps) => {
  return (
    <div className={props.className}>
      <div className="flex min-h-full items-center bg-purple-900 text-white">
        <Avatar className="pr-4 md:pr-8" />

        <div className="block">
          {/* Name section */}
          <div className="flex text-xl font-bold md:text-3xl lg:text-5xl">
            <div className="">Marco Budiongan</div>
          </div>

          {/* Information section */}
          <div className="py-4 text-sm text-gray-100 sm:block md:flex">
            <div className="test">{'Email: hello@marcopaps.com'}</div>
            <div className="md:ml-4">{'Phone: +639 61 204 8584'}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVHeader;
