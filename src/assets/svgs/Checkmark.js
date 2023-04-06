import { forwardRef } from "react"

const CheckmarkSvg = forwardRef(({className}, ref) => (
    <svg ref={ref} className={className} version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
        <path d="M27 55L6 33 9 29 26 41 55 12 59 16z"/>
    </svg>
))

export default CheckmarkSvg