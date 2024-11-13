import { SlQuestion } from "react-icons/sl";

const InputSlider = ({ value, setValue, label, min, max, dataTip }) => {

  return (
    <div className="flex justify-center flex-row mt-2 lg:mt-0 lg:w-1/3">
      <div> {label}</div>
      <div className='tooltip tooltip-bottom mt-1' data-tip={dataTip}>
        <SlQuestion className="ml-1 mr-2" />
      </div>
      <input type="range" min={min} max={max} value={value} onChange={(e) => setValue(e.target.value)} step="0.01" className="range range-primary mr-1" />
      <div className='mr-2 min-w-9 w-9 text-right'> {parseFloat(value).toFixed(2)} </div>
    </div>
  )
}

export default InputSlider