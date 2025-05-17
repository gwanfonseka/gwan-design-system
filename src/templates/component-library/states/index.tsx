import State, { STATE_TYPE } from "@/components/state";

const States = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="border border-neutral-200 rounded-lg h-[860px]">
        <State
          type={STATE_TYPE.EMPTY}
          title="Uhh.. ehh.. it's empty !!!"
          subTitle="Looks like you haven't add any items to your shopping cart."
        />
      </div>
      <div className="border border-neutral-200 rounded-lg h-[860px]">
        <State
          stateImage="/images/success.png"
          title="Your planner is printing !!!"
          subTitle="You have successfully placed the order and we are getting your order ready."
        />
      </div>
    </div>
  );
};

export default States;
