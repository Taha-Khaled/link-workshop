import { memo } from "react";

function DownArrow(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 9.707 5.561" {...props}>
      <path
        data-name="Vector 1"
        d="M.354.354l4.5 4.5 4.5-4.5"
        fill="none"
        stroke="#212832"
      />
    </svg>
  );
}

export default memo(DownArrow);
