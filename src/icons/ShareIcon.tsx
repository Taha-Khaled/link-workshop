import { memo } from "react";

function ShareIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 17.399 19.215" {...props}>
      <path
        data-name="ic_share_24px"
        d="M14.348 13.581a2.773 2.773 0 00-1.875.743l-6.82-4a3.183 3.183 0 00.086-.675 3.183 3.183 0 00-.086-.675L12.4 5.006a2.845 2.845 0 001.951.781 2.894 2.894 0 10-2.87-2.894 3.183 3.183 0 00.086.675L4.821 7.533a2.845 2.845 0 00-1.951-.781 2.894 2.894 0 000 5.788 2.845 2.845 0 001.951-.781l6.811 4.013a2.743 2.743 0 00-.077.627 2.793 2.793 0 102.793-2.817z"
        fill="#13beff"
      />
    </svg>
  );
}

export default memo(ShareIcon);
