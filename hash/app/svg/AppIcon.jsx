import * as React from "react"
import Svg, {
  G,
  Rect,
  Path,
  Circle,
  Defs,
  LinearGradient,
  Stop,
  ClipPath
} from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={340}
      height={340}
      viewBox="0 0 340 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_81_15)">
        <Rect
          width={340}
          height={340}
          rx={27.7551}
          fill="url(#paint0_linear_81_15)"
        />
        <Path
          d="M23.8 155.599c15.413-2.871 23.12-10.804 23.12-23.8 0-5.742-.756-15.564-2.267-29.466-1.51-14.81-2.266-25.538-2.266-32.187 0-10.88 3.022-19.191 9.066-24.933 6.196-5.742 14.431-8.614 24.707-8.614h13.147v17.907h-9.294c-5.893 0-10.275 1.36-13.146 4.08-2.871 2.569-4.307 6.876-4.307 12.92 0 4.382.302 9.822.907 16.32.604 6.347.982 10.653 1.133 12.92 1.511 14.507 2.267 25.085 2.267 31.733 0 8.009-2.04 14.734-6.12 20.174-3.93 5.289-10.05 8.84-18.36 10.653v.453c8.31 1.814 14.43 5.44 18.36 10.88 4.08 5.44 6.12 12.165 6.12 20.174 0 6.649-.756 17.226-2.267 31.733-.151 2.267-.529 6.649-1.133 13.147-.605 6.346-.907 11.711-.907 16.093 0 6.045 1.436 10.351 4.307 12.92 2.87 2.72 7.253 4.08 13.146 4.08h9.294v17.907H76.16c-10.276 0-18.511-2.871-24.707-8.614-6.044-5.742-9.066-14.053-9.066-24.933 0-6.649.755-17.378 2.266-32.187 1.511-13.902 2.267-23.724 2.267-29.466 0-12.996-7.707-20.929-23.12-23.8v-16.094zM316.2 183.013c-15.413 2.871-23.12 10.804-23.12 23.8 0 5.742.756 15.564 2.267 29.466 1.511 14.809 2.266 25.538 2.266 32.187 0 10.88-3.022 19.191-9.066 24.933-6.196 5.743-14.431 8.614-24.707 8.614h-13.147v-17.907h9.294c5.893 0 10.275-1.36 13.146-4.08 2.871-2.569 4.307-6.875 4.307-12.92 0-4.382-.302-9.822-.907-16.32-.604-6.347-.982-10.653-1.133-12.92-1.511-14.507-2.267-25.084-2.267-31.733 0-8.009 2.04-14.734 6.12-20.174 3.929-5.288 10.049-8.84 18.36-10.653v-.453c-8.311-1.814-14.431-5.44-18.36-10.88-4.08-5.44-6.12-12.165-6.12-20.174 0-6.648.756-17.226 2.267-31.733.151-2.267.529-6.649 1.133-13.147.605-6.346.907-11.71.907-16.093 0-6.044-1.436-10.351-4.307-12.92-2.871-2.72-7.253-4.08-13.146-4.08h-9.294V47.92h13.147c10.276 0 18.511 2.872 24.707 8.614 6.044 5.742 9.066 14.053 9.066 24.933 0 6.649-.755 17.378-2.266 32.187-1.511 13.902-2.267 23.724-2.267 29.466 0 12.996 7.707 20.929 23.12 23.8v16.094z"
          fill="#000"
        />
        <Circle cx={118.23} cy={200.088} r={31.4815} fill="#000" />
        <Circle cx={222.633} cy={200.088} r={31.4815} fill="#000" />
        <Path
          d="M149.537 234.018c-1.246 0-2.271 1.014-2.108 2.25.563 4.274 2.72 8.28 6.162 11.354 4.04 3.608 9.52 5.635 15.234 5.635s11.194-2.027 15.234-5.635c3.442-3.074 5.599-7.08 6.162-11.354.163-1.236-.862-2.25-2.108-2.25s-2.237 1.017-2.443 2.246c-.535 3.203-2.206 6.191-4.802 8.509-3.194 2.852-7.526 4.455-12.043 4.455-4.517 0-8.849-1.603-12.043-4.455-2.596-2.318-4.267-5.306-4.802-8.509-.206-1.229-1.197-2.246-2.443-2.246z"
          fill="#000"
        />
      </G>
      <Rect
        x={0.693878}
        y={0.693878}
        width={338.612}
        height={338.612}
        rx={27.0612}
        stroke="#000"
        strokeWidth={1.38776}
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_81_15"
          x1={170}
          y1={0}
          x2={170}
          y2={340}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#B084FC" />
          <Stop offset={1} stopColor="#E6D9FF" />
        </LinearGradient>
        <ClipPath id="clip0_81_15">
          <Rect width={340} height={340} rx={27.7551} fill="#fff" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgComponent
