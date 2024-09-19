import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={208}
      height={271}
      viewBox="0 0 208 271"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M40.709 215.61l17.884-58.437m13.18-43.096L89.63 55.67m-7.909 95.364l44.647 41.612M112.725 49.494L157.454 91.2M55.877 231.276a22.498 22.498 0 00-27.556-15.91 22.497 22.497 0 00-15.91 27.557 22.5 22.5 0 0043.466-11.647zm62.08-202.984A22.502 22.502 0 0090.4 12.382a22.5 22.5 0 1027.557 15.91zm46.587 173.867a22.5 22.5 0 10-43.468 11.645 22.5 22.5 0 0043.468-11.645zm-77.627-72.375a22.498 22.498 0 00-27.557-15.91 22.497 22.497 0 00-15.91 27.557 22.5 22.5 0 0043.467-11.647zm108.667-29.117a22.502 22.502 0 00-27.557-15.91 22.5 22.5 0 1027.557 15.91z"
        stroke="#60CECE"
        strokeWidth={22.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SvgComponent
