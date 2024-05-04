import Step from "./Step";

export default function HowToMake({ steps }) {
  return (
    <section>
      <div className='container py-12'>
        <h3 className='font-semibold text-xl py-6'>How to Make it</h3>
        <div>
          {steps.map((step, index) => (
            <Step key={index} step={step} index={index + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
