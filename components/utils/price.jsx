import { numberWithCommas, persianNumber } from "../../utils/utils"

/**
 * 
 * @param {*} type  normal | through
 * @returns 
 */
function Price({ children, wrapperClassName = "", type = "normal" }) {
    return (
        <div className={`flex flex-row justify-center items-center ${wrapperClassName}`}>
            <span className={`${type === "through" && "line-through text-gray-400 text-xs"}`}>{persianNumber(numberWithCommas(Number(children) / 10))}</span>
            {type !== "through" ? <div className="mr-1 text-xs">
                تومان
            </div> : <div></div>}
        </div>
    )
}

export default Price