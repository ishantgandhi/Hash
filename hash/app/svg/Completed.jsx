import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={157}
      height={143}
      viewBox="0 0 157 143"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M156.665 91.115c-5.907 29.206-28.173 56.707-59.417 62.852a74.57 74.57 0 01-45.171-5.229c-14.126-6.4-25.85-17.046-33.502-30.419a72.35 72.35 0 01-9.119-44.066c1.725-15.272 8.277-29.617 18.724-40.991C49.608 9.92 85.79 3.494 115.321 15.177"
        stroke="#C6DDD0"
        strokeWidth={15.7188}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M56.258 79.432l29.532 29.207 70.875-75.938"
        stroke="#C6DDD0"
        strokeWidth={15.7188}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SvgComponent
