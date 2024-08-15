import React from "react";
import Image from 'next/image';



type ProfileProps = {
  database: any; 
};

const ProfileSection: React.FC<ProfileProps> = ({ database }) => {
  return (
    <>
    <div className="flex flex-wrap lg:justify-between sm:mb-12 mb-5">
            <div className="flex">

<Image
  src={database?.data[0]?.image?.url || '/placeholder.jpg'}
  width={96}
  height={96}
  alt={database?.data[0]?.name || 'Profile picture'}
  className="rounded-full w-20 h-20 sm:h-24 sm:w-24 object-cover"
  priority
/>
              <div className=" ml-8 flex flex-col justify-between ">
                <h2 className="sm:text-4xl  text-zinc-900 font-semibold text-2xl">
                  {database?.data[0]?.name}
                </h2>
                <h3 className=" text-zinc-900 font-medium">
                  Student ID :&nbsp;
                  <span className="text-zinc-500">
                    {database?.data[0]?.studentID}
                  </span>
                </h3>
                <h3 className=" text-zinc-900 font-medium">
                  Gender :&nbsp;
                  <span className="text-zinc-500">
                    {database?.data[0]?.gender}
                  </span>
                </h3>
              </div>
            </div>
            <div className="px-4 sm:py-2.5 sm:m-0 sm:block sm:w-auto bg-slate-150 rounded-lg sm:h-16 shadow-lg flex w-full my-2 items-center py-2 justify-between">
        <h3 className="font-normal text-zinc-600 m-0">Account Status</h3>
        <h3 className={`font-medium ${database?.data[0]?.isStatusActive ? 'text-green-600' : 'text-red-600'}`}>
          ● {database?.data[0]?.isStatusActive ? 'Active' : 'Inactive'}
        </h3>
      </div>
          </div>
    </>
  );
};
export default ProfileSection;


