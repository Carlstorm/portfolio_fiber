import { forwardRef } from "react"

const PrismaSvg = forwardRef(({className}, ref) => (
    <svg ref={ref} className={className} style={{transform: "translateY(-2px) scale(0.9)"}} version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 199">
        <path d="m254.312882 235.518775-106.311921-225.76890236c-2.691156-5.66052181-8.269037-9.38998809-14.528343-9.71389733-6.27371-.42034965-12.260564 2.68328308-15.532963 8.05241131l-115.30712935 186.75875638c-3.57965512 5.757105-3.50434054 13.065631.19319605 18.747745l56.374607 87.30143c4.3801722 6.730308 12.6658994 9.777317 20.3628635 7.488279l163.5984138-48.391746c4.983869-1.457149 9.091195-5.003488 11.259466-9.721626 2.138809-4.695415 2.102063-10.09431-.100462-14.760178zm-23.801753 9.682986-138.8229527 41.050297c-4.2348574 1.259638-8.2997023-2.411087-7.4187283-6.684584l49.59729-237.4843107c.927341-4.4435091 7.063247-5.1467427 9.002935-1.0355308l91.814491 194.9734525c.82154 1.758338.831447 3.788342.027108 5.554616-.804338 1.766273-2.342157 3.091462-4.207871 3.62606z"/>
    </svg>
))

export default PrismaSvg