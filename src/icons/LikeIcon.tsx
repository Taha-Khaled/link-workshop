import { memo } from "react";

function LikeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16.806 15.85" {...props}>
      <path
        data-name="ic_favorite_border_24px"
        d="M12.185 0A4.978 4.978 0 008.4 1.805 4.978 4.978 0 004.622 0 4.642 4.642 0 000 4.751c0 3.265 2.857 5.925 7.185 9.968L8.4 15.85l1.218-1.14c4.328-4.034 7.185-6.694 7.185-9.959A4.642 4.642 0 0012.185 0zm-3.7 13.431l-.084.086-.084-.086c-4-3.723-6.638-6.185-6.638-8.681a2.913 2.913 0 012.943-3.022 3.285 3.285 0 013 2.038h1.571a3.264 3.264 0 012.992-2.038 2.913 2.913 0 012.941 3.023c0 2.496-2.639 4.958-6.639 8.68z"
        fill="#13beff"
      />
    </svg>
  );
}

export default memo(LikeIcon);
