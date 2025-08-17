import Avatar, { AVATAR_VARIANT } from "@/components/avatar";

const Avatars = () => {
  const profilePicture = "/images/profile_picture.png";
  return (
    <div className="w-[600px] mx-auto my-0">
      <div className="grid grid-cols-2 gap-8 items-center">
        <p className="text-base font-semibold text-right">
          Avatar image with details
        </p>
        <Avatar
          name="John Doe"
          email="john.doe@email.com"
          variant={AVATAR_VARIANT.IMAGE_WITH_FULL}
          image={profilePicture}
          isLoading={false}
        />
        <p className="text-base font-semibold text-right">Avatar image only</p>
        <Avatar
          name="John Doe"
          email="john.doe@email.com"
          variant={AVATAR_VARIANT.IMAGE_ONLY}
          image={profilePicture}
          isLoading={false}
        />
        <p className="text-base font-semibold text-right">
          Avatar initials with details
        </p>
        <Avatar
          name="John Doe"
          email="john.doe@email.com"
          variant={AVATAR_VARIANT.INITIALS_WITH_FULL}
          isLoading={false}
        />
        <p className="text-base font-semibold text-right">
          Avatar initials only
        </p>
        <Avatar
          name="John Doe"
          email="john.doe@email.com"
          variant={AVATAR_VARIANT.INITIALS_ONLY}
          isLoading={false}
        />
      </div>
    </div>
  );
};

export default Avatars;
