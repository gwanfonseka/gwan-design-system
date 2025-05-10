import Button, { BUTTON_VARIANTS } from "@/components/button";
import { ProductsSVG } from "@/components/icons";

const Buttons = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-row gap-4 items-center justify-center">
        <Button
          variant={BUTTON_VARIANTS.PRIMARY}
          label="Primary"
          onClick={() => {}}
        />
        <Button
          variant={BUTTON_VARIANTS.PRIMARY}
          label="Primary with icon"
          onClick={() => {}}
          icon={<ProductsSVG />}
        />
        <Button
          variant={BUTTON_VARIANTS.SECONDARY}
          label="Secondary"
          onClick={() => {}}
        />
        <Button
          variant={BUTTON_VARIANTS.SECONDARY}
          label="Secondary with icon"
          onClick={() => {}}
          icon={<ProductsSVG />}
        />
        <Button
          variant={BUTTON_VARIANTS.TERTIARY}
          label="Tertiary"
          onClick={() => {}}
        />
        <Button
          variant={BUTTON_VARIANTS.TERTIARY}
          label="Tertiary with icon"
          onClick={() => {}}
          icon={<ProductsSVG />}
        />
      </div>
      <div className="flex flex-row gap-4 items-center justify-center">
        <Button
          variant={BUTTON_VARIANTS.PRIMARY}
          label=" Disabled primary"
          onClick={() => {}}
          disabled
        />
        <Button
          variant={BUTTON_VARIANTS.PRIMARY}
          label=" Disabled primary with icon"
          onClick={() => {}}
          icon={<ProductsSVG />}
          disabled
        />
        <Button
          variant={BUTTON_VARIANTS.SECONDARY}
          label=" Disabled secondary"
          onClick={() => {}}
          disabled
        />
        <Button
          variant={BUTTON_VARIANTS.SECONDARY}
          label=" Disabled secondary with icon"
          onClick={() => {}}
          icon={<ProductsSVG />}
          disabled
        />
        <Button
          variant={BUTTON_VARIANTS.TERTIARY}
          label=" Disabled tertiary"
          onClick={() => {}}
          disabled
        />
        <Button
          variant={BUTTON_VARIANTS.TERTIARY}
          label=" Disabled tertiary with icon"
          onClick={() => {}}
          icon={<ProductsSVG />}
          disabled
        />
      </div>
      <div className="flex flex-row gap-4 items-center justify-center">
        <Button
          variant={BUTTON_VARIANTS.PRIMARY}
          onClick={() => {}}
          icon={<ProductsSVG />}
        />
        <Button
          variant={BUTTON_VARIANTS.SECONDARY}
          onClick={() => {}}
          icon={<ProductsSVG />}
        />
        <Button
          variant={BUTTON_VARIANTS.TERTIARY}
          onClick={() => {}}
          icon={<ProductsSVG />}
        />
        <Button
          variant={BUTTON_VARIANTS.PRIMARY}
          onClick={() => {}}
          icon={<ProductsSVG />}
          disabled
        />
        <Button
          variant={BUTTON_VARIANTS.SECONDARY}
          onClick={() => {}}
          icon={<ProductsSVG />}
          disabled
        />
        <Button
          variant={BUTTON_VARIANTS.TERTIARY}
          onClick={() => {}}
          icon={<ProductsSVG />}
          disabled
        />
      </div>
    </div>
  );
};

export default Buttons;
