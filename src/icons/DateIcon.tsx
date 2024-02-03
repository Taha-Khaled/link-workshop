import { memo } from "react";

function DateIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 18.8 20.733" {...props}>
      <path
        d="M6.267 9.33H4.178v2.07h2.089zm4.178 0h-2.09v2.07h2.089zm4.178 0h-2.09v2.07h2.089zm2.089-7.257h-1.046V0h-2.089v2.073H5.222V0H3.133v2.073H2.089A2.072 2.072 0 00.01 4.147L0 18.66a2.081 2.081 0 002.089 2.073h14.622A2.087 2.087 0 0018.8 18.66V4.147a2.087 2.087 0 00-2.089-2.074zm0 16.587H2.089V7.257h14.622z"
        fill="#13beff"
      />
    </svg>
  );
}

export default memo(DateIcon);
