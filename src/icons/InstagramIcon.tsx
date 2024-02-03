import { memo } from "react";

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg data-name="instagram 1" width={16} height={16} {...props}>
      <path
        d="M13.656 0H2.344A2.347 2.347 0 000 2.344v11.312A2.346 2.346 0 002.344 16h11.312A2.346 2.346 0 0016 13.656V2.344A2.346 2.346 0 0013.656 0zm1.406 13.656a1.408 1.408 0 01-1.406 1.406H2.344a1.408 1.408 0 01-1.406-1.406V2.344A1.408 1.408 0 012.344.938h11.312a1.408 1.408 0 011.406 1.406z"
        data-name="Group"
      />
      <g data-name="Group">
        <path
          data-name="Vector"
          d="M13.157 1.906a.938.938 0 10.938.938.939.939 0 00-.938-.938z"
        />
      </g>
      <g data-name="Group">
        <path
          data-name="Vector"
          d="M8 3.781A4.219 4.219 0 1012.219 8 4.223 4.223 0 008 3.781zm0 7.5A3.281 3.281 0 1111.281 8 3.285 3.285 0 018 11.281z"
        />
      </g>
    </svg>
  );
}

export default memo(InstagramIcon);
