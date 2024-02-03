import { memo } from "react";

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={5.857} height={12.69} {...props}>
      <path
        data-name="Facebook Icon"
        d="M5.537 2.244a3.523 3.523 0 00-1.024-.169c-.416 0-1.312.287-1.312.844v1.334h2.128V6.5H3.2v6.19H1.056V6.5H0V4.253h1.056V3.122C1.056 1.418 1.792 0 3.569 0a8.08 8.08 0 012.288.253z"
        fill="#080809"
      />
    </svg>
  );
}

export default memo(FacebookIcon);
