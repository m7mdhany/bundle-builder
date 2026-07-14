import styles from "./Builder.module.css";

import Step from "../step/Step";
import ProductList from "../product/ProductList";
import useBundle from "../../hooks/useBundle";

import steps from "../../data/steps";

function Builder() {
  const { state, dispatch } = useBundle();
  const getSelectedCount = (category) => {
    return Object.values(state.selections).filter(
      (selection) => selection.category === category
    ).length;
  };

  return (
    <section className={styles.builder}>
      {steps.map((step) => (
        <Step
          key={step.id}
          step={step.id}
          title={step.title}
          selectedCount={getSelectedCount(step.category)}
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

          {step.id === state.currentStep &&
            state.currentStep < steps.length && (
              <div className={styles.actions}>
                <button
                  type="button"
                  className={styles.nextButton}
                  onClick={() =>
                    dispatch({
                      type: "SET_CURRENT_STEP",
                      payload: state.currentStep + 1,
                    })
                  }
                >
                  Next: {steps[state.currentStep].title}
                </button>
              </div>
            )}
        </Step>
      ))}
    </section>
  );
}

export default Builder; 