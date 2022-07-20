import { numberWithCommas, persianNumber } from "../../utils/utils"

/**
 * 
 * @param {*} type  normal | through
 * @returns 
 */
function Price({ children, wrapperClassName = "", type = "normal" }) {
    return (
        <div className={`flex flex-row justify-center items-center ${wrapperClassName}`}>
            <span className={`${type === "through" && "line-through"}`}>{persianNumber(numberWithCommas(Number(children) / 10))}</span>
            {type !== "through" ? <div className="mr-1 text-xs">
                تومن
            </div> : <div></div>}
        </div>
    )
}

export default Price