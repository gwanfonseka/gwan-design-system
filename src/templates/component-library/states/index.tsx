import State, { STATE_TYPE } from "@/components/state";
import CodeSnippet from "@/components/codeSnippet";

const codeExample = `import { State, STATE_TYPE } from "gwan-design-system";

const Example = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* Empty state — built-in illustration */}
      <div className="border border-border rounded-lg min-h-96">
        <State
          type={STATE_TYPE.EMPTY}
          title="Nothing here yet"
          subTitle="Add some items to get started."
        />
      </div>

      {/* Custom state — with your own image */}
      <div className="border border-border rounded-lg min-h-96">
        <State
          stateImage="/images/success.png"
          title="All done!"
          subTitle="Your order has been placed successfully."
        />
      </div>
    </div>
  );
};`;

const States = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-8">
        <div className="border border-border rounded-lg min-h-96 md:h-215">
          <State
            type={STATE_TYPE.EMPTY}
            title="Uhh.. ehh.. it's empty !!!"
            subTitle="Looks like you haven't add any items to your shopping cart."
          />
        </div>
        <div className="border border-border rounded-lg min-h-96 md:h-215">
          <State
            stateImage="/images/success.png"
            title="Your planner is printing !!!"
            subTitle="You have successfully placed the order and we are getting your order ready."
          />
        </div>
      </div>

      <CodeSnippet code={codeExample} />
    </div>
  );
};

export default States;
