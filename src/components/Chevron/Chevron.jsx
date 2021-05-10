import { ReactComponent as ChevronLeft } from './../../assets/icons/chevron-left.svg'
import { ReactComponent as ChevronRight } from './../../assets/icons/chevron-right.svg'

const Chevron = ({ direction = 'right' }) => (
  <div className="chevron">
    {direction === 'right'
      ? <ChevronRight />
      : <ChevronLeft />
    }
  </div>
)

export default Chevron
