import { memo } from "react";

function RightArrow(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 18.306 12.204" {...props}>
      <g data-name="Group 14206">
        <path
          data-name="Path 58310"
          d="M18.194 5.832L12.473.111a.381.381 0 00-.539.539L17 5.72H.381a.381.381 0 000 .763H17l-5.07 5.07a.381.381 0 10.539.539l5.725-5.725a.381.381 0 000-.535z"
          fill="#fff"
        />
      </g>
    </svg>
  );
}

export default memo(RightArrow);
