import { Utils } from "@/lib/utils";

export interface IChip{
    value : string;
}

const Chip = ({value} : IChip) => {
  return (
    <div className="select-none flex bg-pf-light-gray w-fit px-3 py-2px rounded-full">

        <p className="text-sm text-pf-dark-gray font-light">{Utils.cleanCategoryString(value)}</p>


    </div>
  )
}

export default Chip