import { CircleSVG } from "@/components/icons";
import Snackbar, { SNACK_BAR_TYPE } from "@/components/snackBar";

const SnackBars = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[50%] flex flex-col gap-4">
        <Snackbar message="Some text here" icon={<CircleSVG />} />
        <Snackbar
          message="Some text here"
          type={SNACK_BAR_TYPE.INFO}
          icon={<CircleSVG />}
        />
        <Snackbar
          message="Some text here"
          type={SNACK_BAR_TYPE.SUCCESS}
          icon={<CircleSVG />}
        />
        <Snackbar
          message="Some text here"
          type={SNACK_BAR_TYPE.WARNING}
          icon={<CircleSVG />}
        />
        <Snackbar
          message="Some text here"
          type={SNACK_BAR_TYPE.DANGER}
          icon={<CircleSVG />}
        />
      </div>
    </div>
  );
};

export default SnackBars;
