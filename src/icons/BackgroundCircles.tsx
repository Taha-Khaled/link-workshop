import { memo } from "react";

function BackgroundCircles(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 397.19 389.448" {...props}>
      <g fill="none" stroke="#e3e3e3">
        <g data-name="Ellipse 19" transform="rotate(90 69.986 186.239)">
          <ellipse
            cx={126.218}
            cy={126.039}
            rx={126.218}
            ry={126.039}
            stroke="none"
          />
          <ellipse cx={126.218} cy={126.039} rx={125.718} ry={125.539} />
        </g>
        <g data-name="Ellipse 20" transform="rotate(90 96.538 187.88)">
          <ellipse
            cx={141.165}
            cy={140.965}
            rx={141.165}
            ry={140.965}
            stroke="none"
          />
          <ellipse cx={141.165} cy={140.965} rx={140.665} ry={140.465} />
        </g>
        <g data-name="Ellipse 21" transform="rotate(90 119.357 189.109)">
          <ellipse
            cx={154.451}
            cy={154.232}
            rx={154.451}
            ry={154.232}
            stroke="none"
          />
          <ellipse cx={154.451} cy={154.232} rx={153.951} ry={153.732} />
        </g>
        <g data-name="Ellipse 22" transform="rotate(90 143.003 192.826)">
          <ellipse
            cx={166.076}
            cy={165.841}
            rx={166.076}
            ry={165.841}
            stroke="none"
          />
          <ellipse cx={166.076} cy={165.841} rx={165.576} ry={165.341} />
        </g>
        <g data-name="Ellipse 23" transform="rotate(90 165.82 196.543)">
          <ellipse
            cx={177.286}
            cy={177.036}
            rx={177.286}
            ry={177.036}
            stroke="none"
          />
          <ellipse cx={177.286} cy={177.036} rx={176.786} ry={176.536} />
        </g>
        <g data-name="Ellipse 24" transform="matrix(0 1 -1 0 397.19 0)">
          <ellipse
            cx={194.724}
            cy={194.449}
            rx={194.724}
            ry={194.449}
            stroke="none"
          />
          <ellipse cx={194.724} cy={194.449} rx={194.224} ry={193.949} />
        </g>
      </g>
    </svg>
  );
}

export default memo(BackgroundCircles);
