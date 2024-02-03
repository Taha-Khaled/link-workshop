import { memo } from "react";

function GoogleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={18.562} height={20} {...props}>
      <g data-name="google-play 1">
        <path
          d="M10.788 10.002L.745 19.673A1.709 1.709 0 010 18.248V1.757A1.709 1.709 0 01.745.331z"
          fill="#2196f3"
        />
        <path
          data-name="Vector"
          d="M14.303 6.624L10.789 10 .745.331A1.339 1.339 0 01.863.249 1.718 1.718 0 012.598.222z"
          fill="#4caf50"
        />
        <path
          data-name="Vector"
          d="M18.561 10.002a1.736 1.736 0 01-.908 1.544l-3.351 1.834-3.514-3.378 3.514-3.378 3.351 1.834a1.736 1.736 0 01.908 1.544z"
          fill="#f0bb1f"
        />
        <path
          data-name="Vector"
          d="M14.303 13.38L2.598 19.782a1.741 1.741 0 01-1.735-.027 1.339 1.339 0 01-.118-.082l10.044-9.671z"
          fill="#f15a2b"
        />
      </g>
    </svg>
  );
}

export default memo(GoogleIcon);
