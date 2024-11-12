import { SlQuestion } from "react-icons/sl";

const InputSlider = ({value, setValue, label, min, max, dataTip}) => {

  return (
        <>
        <div> {label}</div>
        <div className='tooltip tooltip-bottom' data-tip={dataTip}>
          <SlQuestion className="ml-1 mr-2"/>
        </div>
        <input type="range" min={min} max={max} value={value}  onChange={(e) => setValue(e.target.value)} step="0.01" className="range range-primary w-1/4 mr-2" />
        <div className='mr-6 min-w-10 w-10 text-right'> {parseFloat(value).toFixed(2)} </div>
        </>
        )
}

export default InputSlider