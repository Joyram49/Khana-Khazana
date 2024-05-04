export default function Step({ step, index }) {
  return (
    <div className='step'>
      <h3>Step {index}</h3>
      <p>{step}</p>
    </div>
  );
}
