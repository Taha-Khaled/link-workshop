import { memo } from "react";

function AppleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={13.124} height={16} {...props}>
      <g fill="#fff" data-name="apple (2) 1">
        <path d="M4.351 16C1.97 15.986 0 11.125 0 8.65c0-4.044 3.034-4.93 4.2-4.93a4.836 4.836 0 011.586.39 3.545 3.545 0 00.905.26 2.818 2.818 0 00.65-.211A5.206 5.206 0 019.3 3.686a4.013 4.013 0 013.358 1.7l.245.368-.352.266a2.966 2.966 0 00-1.422 2.446 2.761 2.761 0 001.54 2.552c.221.133.449.27.449.569 0 .2-1.56 4.393-3.826 4.393A3.077 3.077 0 018 15.666a2.62 2.62 0 00-1.15-.277 2.958 2.958 0 00-.91.246 4.46 4.46 0 01-1.579.368z" />
        <path
          data-name="Vector"
          d="M9.542 0A3.152 3.152 0 016.56 3.511 3.39 3.39 0 019.542 0z"
        />
      </g>
    </svg>
  );
}

export default memo(AppleIcon);
