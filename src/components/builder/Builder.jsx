import Step from "../step/Step";
import useBundle from "../../hooks/useBundle";
import steps from "../../data/steps";
import ProductList from "../product/ProductList";

function Builder() {
  const { state, dispatch } = useBundle();

  return (
    <section>
      {steps.map((step) => (
        <Step
          key={step.id}
          step={step.id}
          title={step.title}
          selectedCount={0}
          isOpen={state.currentStep === step.id}
          onToggle={() => {
            if (state.currentStep === step.id) return;

            dispatch({
              type: "SET_CURRENT_STEP",
              payload: step.id,
            });
          }}
        >
          <ProductList category={step.category} />
        </Step>
      ))}
    </section>
  );
}

export default Builder;