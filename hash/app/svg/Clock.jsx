import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={208}
      height={208}
      viewBox="0 0 264 264"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M132 0a132 132 0 10132 132A132.14 132.14 0 00132 0zm0 243.692a111.69 111.69 0 01-78.978-190.67A111.693 111.693 0 01243.692 132 111.817 111.817 0 01132 243.692zM213.231 132a10.155 10.155 0 01-10.154 10.154H132A10.155 10.155 0 01121.846 132V60.923a10.155 10.155 0 0120.308 0v60.923h60.923A10.155 10.155 0 01213.231 132z"
        fill="#f0e8ff"
      />
    </Svg>
  )
}

export default SvgComponent
