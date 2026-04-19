import CodeSnippet from "@/components/codeSnippet";
import Input from "@/components/input";
import Playground from "@/components/playground";
import SelectDropdown from "@/components/selectDropdown";
import Avatar, {
  AVATAR_VARIANT,
  AVATAR_SIZE,
  AVATAR_LABEL_POSITION,
} from "@/components/avatar";
import { ChangeEvent, useState } from "react";
import Checkbox from "@/components/checkbox";

const Avatars = () => {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@email.com");
  const [variant, setVariant] = useState<string>(AVATAR_VARIANT.IMAGE_WITH_FULL);
  const [size, setSize] = useState<string>(AVATAR_SIZE.LG);
  const [labelPosition, setLabelPosition] = useState<string>(AVATAR_LABEL_POSITION.RIGHT);
  const [isLoading, setIsLoading] = useState(false);
  const image = "/images/profile_picture.png";

  const variantOptions = [
    { value: AVATAR_VARIANT.IMAGE_WITH_FULL, label: "image with full" },
    { value: AVATAR_VARIANT.INITIALS_WITH_FULL, label: "initials with full" },
    { value: AVATAR_VARIANT.IMAGE_ONLY, label: "image only" },
    { value: AVATAR_VARIANT.INITIALS_ONLY, label: "initials only" },
  ];

  const sizeOptions = Object.values(AVATAR_SIZE).map((v) => ({ value: v, label: v }));
  const labelPositionOptions = Object.values(AVATAR_LABEL_POSITION).map((v) => ({ value: v, label: v }));

  const codeExample = `import { Avatar, AVATAR_VARIANT, AVATAR_SIZE, AVATAR_LABEL_POSITION } from "gwan-design-system";

// AVATAR_VARIANT:       IMAGE_WITH_FULL | INITIALS_WITH_FULL | IMAGE_ONLY | INITIALS_ONLY
// AVATAR_SIZE:          XS | SM | MD | LG | XL          (default: LG)
// AVATAR_LABEL_POSITION LEFT | RIGHT                    (default: RIGHT)

const Example = () => {
  return (
    <>
      {/* Image + name/email label on the right (default) */}
      <Avatar
        name="John Doe"
        email="john.doe@email.com"
        image="/images/avatar.png"    // optional — falls back to initials
        variant={AVATAR_VARIANT.IMAGE_WITH_FULL}
        size={AVATAR_SIZE.LG}
        labelPosition={AVATAR_LABEL_POSITION.RIGHT}
        isLoading={false}             // optional, shows shimmer when true
        className=""                  // optional, extra wrapper class
      />

      {/* Label on the left */}
      <Avatar
        name="John Doe"
        email="john.doe@email.com"
        image="/images/avatar.png"
        variant={AVATAR_VARIANT.IMAGE_WITH_FULL}
        size={AVATAR_SIZE.MD}
        labelPosition={AVATAR_LABEL_POSITION.LEFT}
      />

      {/* Image only — name/email shown as tooltip on hover */}
      <Avatar
        name="John Doe"
        email="john.doe@email.com"
        image="/images/avatar.png"
        variant={AVATAR_VARIANT.IMAGE_ONLY}
        size={AVATAR_SIZE.SM}
      />

      {/* Initials only — no image required */}
      <Avatar
        name="John Doe"
        email="john.doe@email.com"
        variant={AVATAR_VARIANT.INITIALS_ONLY}
        size={AVATAR_SIZE.SM}
      />
    </>
  );
};`;

  const renderPlayground = () => (
    <div className="flex flex-col gap-8">
      <div className="flex flex-row flex-wrap justify-center gap-8 items-center">
        <Avatar
          name={name}
          email={email}
          image={image}
          variant={variant}
          size={size as AVATAR_SIZE}
          labelPosition={labelPosition as AVATAR_LABEL_POSITION}
          isLoading={isLoading}
        />
        <Checkbox
          label="Loading state"
          checked={isLoading}
          onChange={(checked: boolean) => setIsLoading(checked)}
        />
      </div>

      <div className="flex flex-row justify-center gap-4 items-end flex-wrap">
        <Input
          label="Name"
          value={name}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
          className="w-full sm:w-48"
        />
        <Input
          label="Email"
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          className="w-full sm:w-48"
        />
        <SelectDropdown
          label="Variant"
          options={variantOptions}
          value={variant}
          onChange={(option) => setVariant(option)}
          className="w-full sm:w-40"
        />
        <SelectDropdown
          label="Size"
          options={sizeOptions}
          value={size}
          onChange={(option) => setSize(option)}
          className="w-full sm:w-32"
        />
        <SelectDropdown
          label="Label position"
          options={labelPositionOptions}
          value={labelPosition}
          onChange={(option) => setLabelPosition(option)}
          className="w-full sm:w-40"
        />
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-8">
      {/* Size showcase */}
      <div className="flex flex-row flex-wrap justify-center gap-6 items-center">
        {Object.values(AVATAR_SIZE).map((s) => (
          <Avatar
            key={s}
            name="John Doe"
            email="john.doe@email.com"
            image={image}
            variant={AVATAR_VARIANT.IMAGE_ONLY}
            size={s}
          />
        ))}
      </div>

      {/* Label position showcase */}
      <div className="flex flex-row flex-wrap justify-center gap-8 items-center">
        <Avatar
          name="John Doe"
          email="john.doe@email.com"
          image={image}
          variant={AVATAR_VARIANT.IMAGE_WITH_FULL}
          labelPosition={AVATAR_LABEL_POSITION.RIGHT}
        />
        <Avatar
          name="John Doe"
          email="john.doe@email.com"
          image={image}
          variant={AVATAR_VARIANT.IMAGE_WITH_FULL}
          labelPosition={AVATAR_LABEL_POSITION.LEFT}
        />
      </div>

      <Playground template={renderPlayground()} />
      <CodeSnippet code={codeExample} />
    </div>
  );
};

export default Avatars;
