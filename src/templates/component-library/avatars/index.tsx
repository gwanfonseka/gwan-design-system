import CodeSnippet from "@/components/codeSnippet";
import Input from "@/components/input";
import Playground from "@/components/playground";
import SelectDropdown from "@/components/selectDropdown";
import Avatar, { AVATAR_VARIANT } from "@/components/avatar";
import { ChangeEvent, useState } from "react";
import Checkbox from "@/components/checkbox";

const Avatars = () => {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@email.com");
  const [variant, setVariant] = useState<string>(
    AVATAR_VARIANT.IMAGE_WITH_FULL,
  );
  const [isLoading, setIsLoading] = useState(false);
  const image = "/images/profile_picture.png";

  const variantOptions = [
    { value: AVATAR_VARIANT.IMAGE_WITH_FULL, label: "image with full" },
    { value: AVATAR_VARIANT.INITIALS_WITH_FULL, label: "initials with full" },
    { value: AVATAR_VARIANT.IMAGE_ONLY, label: "image only" },
    { value: AVATAR_VARIANT.INITIALS_ONLY, label: "initials only" },
  ];

  const codeExample = `import { Avatar, AVATAR_VARIANT } from "gwan-design-system";

const Example = () => {
  return (
    <Avatar
      name="Nimesh Fonseka"
      email="nimesh@email.com"
      image="/images/avatar.png" // optional
      variant={AVATAR_VARIANT.IMAGE_WITH_FULL}
      isLoading={false} // optional
      className="custom-class" // optional
    />
  );
};`;

  const renderPlayground = () => {
    return (
      <div className="flex flex-col gap-8">
        <div className="flex flex-row justify-center gap-8 items-center">
          <Avatar
            name={name}
            email={email}
            image={image || undefined}
            variant={variant}
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
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
            className="w-64"
          />

          <Input
            label="Email"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            className="w-64"
          />

          <SelectDropdown
            label="Variant"
            options={variantOptions}
            value={variant}
            onChange={(option) => setVariant(option)}
            className="w-64"
          />
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-row justify-center gap-8 items-center flex-wrap">
        <Avatar
          name="John Doe"
          email="john.doe@email.com"
          image={image}
          variant={AVATAR_VARIANT.IMAGE_WITH_FULL}
        />
      </div>

      <Playground template={renderPlayground()} />
      <CodeSnippet code={codeExample} />
    </div>
  );
};

export default Avatars;
