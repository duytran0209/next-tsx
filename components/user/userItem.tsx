import Image from "next/image";

export const UserItem = ({
  id,
  src,
  name,
  email,
  mssv,
  position,
}: userType) => {
  return (
    <div className="bg-white rounded-md py-4 px-6 flex  flex-col space-y-4 border shadow-md">
      <div className="flex items-center justify-center">
        <Image
          className="rounded-full object-cover"
          width={120}
          height={120}
          src={src}
          alt="user-avatar"
        />
      </div>
      <h2 className="text-center font-medium">{name}</h2>

      <span>Vị trí: {position}</span>
      <span>Email: {email}</span>
      <span>Mssv: {mssv}</span>
    </div>
  );
};
