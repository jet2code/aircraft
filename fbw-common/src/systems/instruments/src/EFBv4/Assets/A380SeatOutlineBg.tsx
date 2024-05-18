/* eslint-disable max-len */
import React from 'react';

interface SeatOutlineBgProps {
  stroke: string;
  highlight: string;
}

export const A380SeatOutlineBg = ({ stroke, highlight }: SeatOutlineBgProps) => (
  <svg viewBox="0 0 657 150" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" fill="none">
    <g id="BASE_SVG" opacity="0.75">
      <path
        id="Fuselage"
        d="M747.651,74.912L747.651,77.602C735.481,81.542 717.771,86.852 705.791,88.712C693.811,90.572 657.571,92.932 633.351,99.152C594.021,110.482 553.791,112.042 534.681,112.042L132.901,112.042C124.721,112.042 87.301,109.912 56.681,103.602C26.431,97.382 3.011,82.562 3.011,72.522L3.011,72.472C3.011,62.432 26.431,47.602 56.681,41.382C87.311,35.082 124.721,32.942 132.901,32.942L534.681,32.942C553.791,32.942 594.011,34.502 633.351,45.832C657.571,52.052 693.451,54.352 705.791,56.272C717.771,58.142 735.481,63.442 747.651,67.382L747.651,70.072"
        stroke={stroke}
        strokeWidth={2}
      />
      <g id="Wide_Fuselage">
        <path
          id="L_Wide_Fuselage"
          d="M461.291,112.052C458.071,112.732 453.451,113.812 447.821,114.532C425.041,117.442 410.181,117.922 399.781,117.892C368.821,117.812 353.341,117.772 333.571,116.942C312.431,116.052 284.761,114.592 252.061,112.052"
          stroke={stroke}
          strokeWidth={1}
        />
        <path
          id="R_Wide_Fuselage"
          d="M461.291,32.942C458.071,32.262 453.451,31.182 447.821,30.462C425.041,27.552 410.181,27.072 399.781,27.102C368.821,27.182 353.341,27.222 333.571,28.052C312.431,28.942 284.761,30.402 252.061,32.942"
          stroke={stroke}
          strokeWidth={1}
        />
      </g>
      <path
        id="Rudder"
        d="M574.021,72.492C574.021,70.182 597.351,63.942 633.791,63.942C651.901,63.942 784.991,72.412 784.991,72.412L784.991,72.592C784.991,72.592 651.901,81.062 633.791,81.062C597.351,81.062 574.021,74.812 574.021,72.502L574.021,72.492Z"
        stroke={stroke}
        strokeWidth={0.25}
      />
      <g id="Horizontal_Stablizer">
        <g id="Left_Horizontal_Stablizer">
          <path
            id="Left_idk_what_this_is"
            d="M653.621,95.442L709.291,172.612L728.791,161.772L686.621,91.112"
            stroke={stroke}
            strokeWidth={0.5}
          />
          <g id="Left_Elevator" />
          <path
            id="Left_Stablizer"
            d="M726.011,84.862L781.121,234.502L754.291,229.892C746.121,227.672 737.901,224.452 732.351,218.062L644.241,104.062C641.911,101.062 639.571,99.012 634.751,98.822"
            stroke={stroke}
            strokeWidth={1}
          />
        </g>
        <g id="Right_Horizontal_Stablizer">
          <path
            id="Right_idk_what_this_is"
            d="M653.621,49.552L709.291,-27.618L728.791,-16.778L686.621,53.882"
            stroke={stroke}
            strokeWidth={0.5}
          />
          <g id="Right_Elevator" />
          <path
            id="Right_Stablizer"
            d="M726.011,60.132L781.121,-89.508L754.291,-84.898C746.121,-82.678 737.901,-79.458 732.351,-73.068L644.241,40.932C641.911,43.932 639.571,45.982 634.751,46.172"
            stroke={stroke}
            strokeWidth={1}
          />
        </g>
      </g>
      <g id="Wings">
        <g id="Left_Wing">
          <g id="Slats_Droop" />
          <g id="Ailerons" />
          <g id="Flap_Fairings" />
          <g id="Flaps_Spoilers" stroke={stroke} strokeWidth={0.5}>
            <path
              id="Spoilers_Box"
              d="M400.491,120.522L367.791,120.522L388.541,196.272L461.871,345.442L481.501,346.572"
            />
            <path id="Flaps_Box" d="M470.221,345.922L402.771,196.412L383.341,120.522" />
            <path id="Left_Spoiler_Line_6" d="M375.111,147.272L389.151,143.082" />
          </g>
          <path
            id="Walk_Zone"
            d="M226.371,112.052L248.451,140.362L277.701,140.362L317.371,219.782L508.291,486.692L523.461,478.362L382.141,202.032L364.291,138.202C352.871,141.372 345.481,138.842 337.431,117.102"
            stroke={stroke}
            strokeWidth={0.5}
          />
          <path
            id="Left_Wing-2"
            d="M399.841,118.112L420.511,194.862L479.621,342.272L547.291,496.832C554.371,498.362 567.851,499.612 567.851,499.832C567.851,500.302 549.281,499.682 521.131,498.192C514.801,497.802 501.961,494.112 496.461,486.942L310.461,233.612L225.131,129.442L209.411,114.332L199.801,112.052"
            stroke={stroke}
            strokeWidth={2}
          />
        </g>
        <g id="Right_Wing">
          <g id="Slats_Droop-2" />
          <g id="Ailerons-2" />
          <g id="Flap_Fairings-2" />
          <g id="Flaps_Spoilers-2" stroke={stroke} strokeWidth={0.5}>
            <path
              id="Spoilers_Box-2"
              d="M400.491,24.472L367.791,24.472L388.541,-51.278L461.871,-200.448L481.501,-201.578"
            />
            <path id="Flaps_Box-2" d="M470.221,-200.928L402.771,-51.418L383.341,24.472" />
            <path id="Right_Spoiler_Line_6" d="M375.111,-2.278L389.151,1.912" />
          </g>
          <path
            id="Walk_Zone-2"
            d="M226.371,32.942L248.451,4.632L277.701,4.632L317.371,-74.788L508.291,-341.708L523.461,-333.378L382.141,-57.048L364.291,6.782C352.871,3.612 345.481,6.142 337.431,27.882"
            stroke={stroke}
            strokeWidth={0.5}
          />
          <path
            id="Right_Wing-2"
            d="M399.841,26.882L420.511,-49.868L479.621,-197.278L547.291,-351.838C554.371,-353.368 567.851,-354.618 567.851,-354.838C567.851,-355.308 549.281,-354.688 521.131,-353.198C514.801,-352.808 501.961,-349.118 496.461,-341.948L310.461,-88.618L225.131,15.552L209.411,30.662L199.801,32.942"
            stroke={stroke}
            strokeWidth={2}
          />
        </g>
      </g>
      <g id="Cockpit_Windows" stroke={stroke} strokeWidth={0.5}>
        <path
          id="path1154"
          d="M34.161,88.692L34.361,84.492C34.361,84.422 34.331,84.362 34.281,84.322L32.501,83.092C32.501,83.092 32.481,83.072 32.461,83.062L31.271,81.722C31.201,81.642 31.081,81.632 31.001,81.702L28.961,83.392C28.901,83.442 28.881,83.522 28.901,83.592L29.301,85.132C29.301,85.132 29.331,85.212 29.371,85.232L33.851,88.842C33.981,88.942 34.161,88.862 34.171,88.702L34.161,88.692Z"
        />
        <path
          id="path1156"
          d="M29.911,80.462L26.191,73.462C26.161,73.402 26.091,73.362 26.021,73.362L23.161,73.362C23.031,73.362 22.941,73.482 22.971,73.602L23.741,76.932C23.741,76.932 23.761,76.982 23.771,77.002L27.231,81.762C27.271,81.822 27.351,81.852 27.421,81.842L29.061,81.592C29.061,81.592 29.151,81.562 29.181,81.522L29.881,80.682C29.931,80.622 29.941,80.532 29.901,80.462L29.911,80.462Z"
        />
        <path
          id="path1158"
          d="M36.001,90.192L35.541,86.762C35.471,86.252 36.081,85.922 36.461,86.272L38.351,87.962C38.351,87.962 38.401,88.012 38.421,88.042L41.481,92.012C41.731,92.342 41.551,92.822 41.151,92.902L40.151,93.102C40.001,93.132 39.851,93.102 39.721,93.012L36.231,90.592C36.101,90.502 36.021,90.362 35.991,90.212L36.001,90.192Z"
        />
        <path
          id="path1160"
          d="M34.161,56.302L34.361,60.502C34.361,60.572 34.331,60.632 34.281,60.672L32.501,61.902C32.501,61.902 32.481,61.922 32.461,61.932L31.271,63.272C31.201,63.352 31.081,63.362 31.001,63.292L28.961,61.602C28.901,61.552 28.881,61.472 28.901,61.402L29.301,59.862C29.301,59.862 29.331,59.782 29.371,59.762L33.851,56.152C33.981,56.052 34.161,56.132 34.171,56.292L34.161,56.302Z"
        />
        <path
          id="path1162"
          d="M29.911,64.532L26.191,71.532C26.161,71.592 26.091,71.632 26.021,71.632L23.161,71.632C23.031,71.632 22.941,71.512 22.971,71.392L23.741,68.062C23.741,68.062 23.761,68.012 23.771,67.992L27.231,63.232C27.271,63.172 27.351,63.142 27.421,63.152L29.061,63.402C29.061,63.402 29.151,63.432 29.181,63.472L29.881,64.312C29.931,64.372 29.941,64.462 29.901,64.532L29.911,64.532Z"
        />
        <path
          id="path1164"
          d="M36.001,54.802L35.541,58.232C35.471,58.742 36.081,59.072 36.461,58.722L38.351,57.032C38.351,57.032 38.401,56.982 38.421,56.952L41.481,52.982C41.731,52.652 41.551,52.172 41.151,52.092L40.151,51.892C40.001,51.862 39.851,51.892 39.721,51.982L36.231,54.402C36.101,54.492 36.021,54.632 35.991,54.782L36.001,54.802Z"
        />
      </g>
    </g>
    <g id="Aft_Doors" opacity="0.75">
      <path
        id="AFT_R_Door"
        d="M572.791,34.772L572.791,42.402C572.791,43.562 572.211,44.492 571.491,44.492L565.781,44.492C565.061,44.492 564.481,43.552 564.481,42.402L564.481,34.062"
        stroke={highlight}
        strokeWidth={1}
      />
      <path
        id="AFT_L_Door"
        d="M572.791,110.222L572.791,102.602C572.791,101.442 572.211,100.512 571.491,100.512L565.781,100.512C565.061,100.512 564.481,101.452 564.481,102.602L564.481,110.922"
        stroke={highlight}
        strokeWidth={1}
      />
    </g>
    <g id="Mid_Aft_Doors" opacity="0.75">
      <path
        id="MID-AFT_R_Door"
        d="M476.511,32.942L476.511,40.852C476.511,41.922 475.931,42.792 475.211,42.792L469.501,42.792C468.781,42.792 468.201,41.922 468.201,40.852L468.201,32.942"
        stroke={highlight}
        strokeWidth={1}
      />
      <path
        id="MID-AFT_L_Door"
        d="M476.511,112.052L476.511,104.022C476.511,102.952 475.931,102.082 475.211,102.082L469.501,102.082C468.781,102.082 468.201,102.952 468.201,104.022L468.201,112.052"
        stroke={highlight}
        strokeWidth={1}
      />
    </g>
    <g id="Mid_Foward_Doors" opacity="0.75">
      <path
        id="MID-FWD_R_Door"
        d="M179.931,32.942L179.931,40.852C179.931,41.922 179.351,42.792 178.631,42.792L172.921,42.792C172.201,42.792 171.621,41.922 171.621,40.852L171.621,32.942"
        stroke={highlight}
        strokeWidth={1}
      />
      <path
        id="MID-FWD_L_Door"
        d="M179.931,112.052L179.931,104.022C179.931,102.952 179.351,102.082 178.631,102.082L172.921,102.082C172.201,102.082 171.621,102.952 171.621,104.022L171.621,112.052"
        stroke={highlight}
        strokeWidth={1}
      />
    </g>
    <g id="Foward_Doors" opacity="0.75">
      <path
        id="FWD_R_Door"
        d="M74.011,38.162L74.011,43.632C74.011,44.792 73.431,45.722 72.711,45.722L67.001,45.722C66.281,45.722 65.701,44.782 65.701,43.632L65.701,39.682"
        stroke={highlight}
        strokeWidth={1}
      />
      <path
        id="FWD_L_Door"
        d="M74.011,106.582L74.011,100.982C74.011,99.822 73.431,98.892 72.711,98.892L67.001,98.892C66.281,98.892 65.701,99.832 65.701,100.982L65.701,105.332"
        stroke={highlight}
        strokeWidth={1}
      />
    </g>
  </svg>
);

export const A380SeatOutlineUpperBg = ({ stroke, highlight }: SeatOutlineBgProps) => (
  <svg viewBox="0 0 657 150" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" fill="none">
    <g data-name="BASE SVG" transform="rotate(-90,232.02035,273.88408)" opacity="0.75">
      <g stroke={stroke} strokeWidth={1}>
        <g strokeWidth={2}>
          <path
            data-name="Fuselage"
            d="m 431.03,789.53 h -2.69 c -3.94,-12.17 -9.25,-29.88 -11.11,-41.86 -1.86,-11.98 -4.22,-48.22 -10.44,-72.44 -11.33,-39.33 -12.89,-79.56 -12.89,-98.67 0,0 0,-401.75 0,-401.78 0,-8.18 2.13,-45.6 8.44,-76.22 6.22,-30.25 21.04,-53.67 31.08,-53.67 h 0.05 c 10.04,0 24.87,23.42 31.09,53.67 6.3,30.63 8.44,68.04 8.44,76.22 0,0.03 0,401.78 0,401.78 0,19.11 -1.56,59.33 -12.89,98.67 -6.22,24.22 -8.52,60.1 -10.44,72.44 -1.87,11.98 -7.17,29.69 -11.11,41.86 h -2.69"
          />
          <g data-name="Wide Fuselage" strokeWidth={0.5}>
            <path
              data-name="L Wide Fuselage"
              d="m 393.89,503.17 c -0.68,-3.22 -1.76,-7.84 -2.48,-13.47 -2.91,-22.78 -3.39,-37.64 -3.36,-48.04 0.08,-30.96 0.12,-46.44 0.95,-66.21 0.89,-21.14 2.35,-48.81 4.89,-81.51"
            />
            <path
              data-name="R Wide Fuselage"
              d="m 473,503.17 c 0.68,-3.22 1.76,-7.84 2.48,-13.47 2.91,-22.78 3.39,-37.64 3.36,-48.04 -0.08,-30.96 -0.12,-46.44 -0.95,-66.21 C 477,354.31 475.54,326.64 473,293.94"
            />
          </g>
        </g>
        <path
          data-name="Rudder-2"
          strokeWidth={0.5}
          d="m 437.01,624.56 c 2.44,9.92 4.99,27.84 4.99,51.11 0,18.11 -8.47,151.2 -8.47,151.2 h -0.18 c 0,0 -8.47,-133.09 -8.47,-151.2 0,-23.27 2.55,-41.2 4.99,-51.11 H 437 Z"
        />
        <g data-name="Horizontal Stablizer" strokeWidth={0.25}>
          <g data-name="Left Horizontal Stablizer">
            <polyline className="cls-6" points="410.5 695.5 333.33 751.17 344.17 770.67 414.83 728.5" />
            <g data-name="Left Elevator">
              <line data-name="Left Elevator Seperator" x1="376.57999" y1="760.58002" x2="376.57999" y2="784.28003" />
              <polyline data-name="Left Elevator Box" points="416 741.56 287.78 803.44 286.62 817.41" />
            </g>
            <path
              data-name="Left Stablizer"
              className="cls-2"
              d="M 421.08,767.89 271.44,823 l 4.61,-26.83 c 2.22,-8.17 5.44,-16.39 11.83,-21.94 l 114,-88.11 c 3,-2.33 5.05,-4.67 5.24,-9.49"
            />
          </g>
          <g data-name="Right Horizontal Stablizer">
            <polyline
              data-name="Walk"
              className="cls-6"
              points="456.39 695.5 533.56 751.17 522.72 770.67 452.06 728.5"
            />
            <g data-name="Right Elevator">
              <line data-name="Right Elevator Seperator" x1="490.31" y1="760.58002" x2="490.31" y2="784.28003" />
              <polyline data-name="Right Elevator Box" points="450.89 741.56 579.11 803.44 580.26 817.41" />
            </g>
            <path
              data-name="Right Stablizer"
              className="cls-2"
              d="M 445.81,767.89 595.45,823 590.84,796.17 C 588.62,788 585.4,779.78 579.01,774.23 l -114,-88.11 c -3,-2.33 -5.05,-4.67 -5.24,-9.49"
            />
          </g>
        </g>
        <g data-name="Wings" stroke={stroke} strokeWidth={1}>
          <g data-name="Left Wing">
            <g data-name="Slats Droop" stroke={stroke} strokeWidth={0.1}>
              <g data-name="Droop Flaps" stroke={stroke} strokeWidth={0.1}>
                <polyline data-name="Droop Box" points="353.77 285.62 353.96 296.71 284.25 353.33 279.43 346.52" />
                <line x1="317.07999" y1="315.57999" x2="322.07001" y2="322.60999" />
              </g>
              <g data-name="L Slats Right" stroke={stroke} strokeWidth={0.1}>
                <polyline data-name="Right Slats Box" points="265.38 357.44 265.38 370.22 169.83 440.42 163.83 432" />
                <line data-name="Left Line" x1="196.67" y1="408.07999" x2="202.53" y2="416.39999" />
                <line data-name="Right Line" x1="229.42" y1="383.82999" x2="235.75999" y2="391.98999" />
              </g>
              <g data-name="L Slats Left" stroke={stroke} strokeWidth={0.1}>
                <polyline data-name="Left Slats Box" points="147.81 443.76 147.81 456.25 26.56 542.94 21.89 536.11" />
                <line data-name="Left Line" x1="66.220001" y1="503.94" x2="71.160004" y2="511.04999" />
                <line data-name="Right Line" x1="104.72" y1="475.56" x2="110.65" y2="482.82001" />
              </g>
            </g>
            <g data-name="Ailerons" stroke={stroke} strokeWidth={0.1}>
              <polyline data-name="Box" points="60.25 566.78 60.25 556.5 147.81 511.05 150.76 515.08 150.76 527.15" />
              <polyline data-name="Left Line" points="100.44 549.18 100.44 538.92 99.15 536.31" />
              <polyline data-name="Right Line" points="129.06 536.65 128.96 525.67 126.88 521.92" />
            </g>
            <g data-name="Flap Fairings" stroke={stroke} strokeWidth={0.1}>
              <path
                data-name="Left Flap Fairing 5"
                d="m 328.22,457.77 c 0.51,6.22 2.29,9.62 3.06,10.83 0.16,0.25 0.54,0.24 0.67,-0.03 0.62,-1.21 1.98,-4.65 2.7,-12.53"
              />
              <path
                data-name="Left Flap Fairing 4"
                d="m 285.33,472.71 c 0.43,6.81 1.92,9.99 2.56,11.07 0.15,0.25 0.5,0.28 0.68,0.05 0.88,-1.07 2.94,-4.55 2.48,-13.42"
              />
              <path
                data-name="Left Flap Fairing 3"
                d="m 241.3,490.37 c 0.29,15.36 2.22,23.87 2.96,26.6 0.09,0.34 0.57,0.37 0.7,0.04 1.15,-2.83 4.29,-12.18 4.29,-29.83"
              />
              <path
                data-name="Left Flap Fairing 2"
                d="m 196.69,508.46 c -0.3,15.88 1.6,22.51 2.24,24.88 0.11,0.42 0.68,0.47 0.88,0.08 1.3,-2.67 3.47,-8.69 3.8,-27.93"
              />
              <path
                data-name="Left Flap Fairing 1"
                d="m 150.76,527.15 c 0.74,11.93 2.2,14.39 2.81,15.27 0.13,0.19 0.42,0.21 0.57,0.04 0.73,-0.84 2.31,-6.08 2.69,-17.97"
              />
            </g>
            <g data-name="Flaps Spoilers" stroke={stroke} strokeWidth={0.1}>
              <polyline
                data-name="Spoilers Box"
                points="385.42 442.37 385.42 409.67 309.67 430.42 160.5 503.75 159.37 523.38"
              />
              <polyline data-name="Flaps Box" points="160.02 512.1 309.53 444.65 385.42 425.22" />
              <line data-name="Left Spoiler Line 1" x1="193.75999" y1="487.39999" x2="196.57001" y2="495.60999" />
              <polyline data-name="Left Spoiler and Flap Line" points="219.64 474.67 223.9 483.28 223.9 497.34" />
              <line data-name="Left Spoiler Line 2" x1="245.28" y1="462.07001" x2="249.46001" y2="471.75" />
              <line data-name="Left Spoiler Line 3" x1="265.60001" y1="452.07999" x2="270.39999" y2="462.29999" />
              <line data-name="Left Spoiler Line 4" x1="289.82999" y1="440.17001" x2="295.64999" y2="450.91" />
              <polyline data-name="Right Spoiler and Flap Line" points="309.67 430.42 309.53 444.65 309.53 462.95" />
              <line data-name="Left Spoiler Line 5" x1="332.32999" y1="424.20999" x2="335.97" y2="437.95001" />
              <line data-name="Left Spoiler Line 6" x1="358.67001" y1="416.98999" x2="362.85999" y2="431.03" />
            </g>
            <path
              stroke={stroke}
              strokeWidth={0.05}
              data-name="Walk Zone"
              d="m 393.89,268.25 -28.31,22.08 v 29.25 l -79.42,39.67 -266.91,190.92 8.33,15.17 276.33,-141.32 63.83,-17.85 c -3.17,-11.42 -0.64,-18.81 21.1,-26.86"
            />
            <path
              data-name="Left Wing"
              stroke={stroke}
              strokeWidth={1}
              d="M 387.83,441.72 311.08,462.39 163.67,521.5 9.11,589.17 c -1.53,7.08 -2.78,20.56 -3,20.56 -0.47,0 0.15,-18.57 1.64,-46.72 0.39,-6.33 4.08,-19.17 11.25,-24.67 l 253.33,-186 104.17,-85.33 15.11,-15.72 2.28,-9.61"
            />
          </g>
          <g data-name="Right Wing">
            <g data-name="Slats Droop" stroke={stroke} strokeWidth={0.25}>
              <g data-name="Droop Flaps" stroke={stroke} strokeWidth={0.1}>
                <polyline data-name="Droop Box" points="513.12 285.62 512.93 296.71 582.64 353.33 587.46 346.52" />
                <line data-name="Line" x1="549.81" y1="315.57999" x2="544.82001" y2="322.60999" />
              </g>
              <g data-name="R Slats Left" stroke={stroke} strokeWidth={0.1}>
                <polyline data-name="Left Slats Box" points="601.51 357.44 601.51 370.22 697.06 440.42 703.06 432" />
                <line data-name="Right Line" x1="670.21997" y1="408.07999" x2="664.35999" y2="416.39999" />
                <line data-name="Left Line" x1="637.46997" y1="383.82999" x2="631.13" y2="391.98999" />
              </g>
              <g data-name="R Slats Right" stroke={stroke} strokeWidth={0.1}>
                <polyline data-name="Right Slats Box" points="719.08 443.76 719.08 456.25 840.33 542.94 845 536.11" />
                <line data-name="Right Line" x1="800.66998" y1="503.94" x2="795.72998" y2="511.04999" />
                <line data-name="Left Line" x1="762.16998" y1="475.56" x2="756.23999" y2="482.82001" />
              </g>
            </g>
            <g data-name="Ailerons" stroke={stroke} strokeWidth={0.1}>
              <polyline data-name="Box" points="806.64 566.78 806.64 556.5 719.08 511.05 716.13 515.08 716.13 527.15" />
              <polyline data-name="Right Line" points="766.44 549.18 766.44 538.92 767.74 536.31" />
              <polyline data-name="Left Line" points="737.82 536.65 737.93 525.67 740.01 521.92" />
            </g>
            <g data-name="Flap Fairings" stroke={stroke} strokeWidth={0.1}>
              <path
                data-name="Right Flap Fairing 5"
                d="m 538.66,457.77 c -0.51,6.22 -2.29,9.62 -3.06,10.83 -0.16,0.25 -0.54,0.24 -0.67,-0.03 -0.62,-1.21 -1.98,-4.65 -2.7,-12.53"
              />
              <path
                data-name="Right Flap Fairing 4"
                d="m 581.56,472.71 c -0.43,6.81 -1.92,9.99 -2.56,11.07 -0.15,0.25 -0.5,0.28 -0.68,0.05 -0.88,-1.07 -2.94,-4.55 -2.48,-13.42"
              />
              <path
                data-name="Right Flap Fairing 3"
                d="m 625.59,490.37 c -0.29,15.36 -2.22,23.87 -2.96,26.6 -0.09,0.34 -0.57,0.37 -0.7,0.04 -1.15,-2.83 -4.29,-12.18 -4.29,-29.83"
              />
              <path
                data-name="Right Flap Fairing 2"
                d="m 670.2,508.46 c 0.3,15.88 -1.6,22.51 -2.24,24.88 -0.11,0.42 -0.68,0.47 -0.88,0.08 -1.3,-2.67 -3.47,-8.69 -3.8,-27.93"
              />
              <path
                data-name="Right Flap Fairing 1"
                d="m 716.13,527.15 c -0.74,11.93 -2.2,14.39 -2.81,15.27 -0.13,0.19 -0.42,0.21 -0.57,0.04 -0.73,-0.84 -2.31,-6.08 -2.69,-17.97"
              />
            </g>
            <g data-name="Flaps Spoilers" stroke={stroke} strokeWidth={0.1}>
              <polyline
                data-name="Spoilers Box"
                points="481.47 442.37 481.47 409.67 557.22 430.42 706.39 503.75 707.52 523.38"
              />
              <polyline data-name="Flaps Box" points="706.87 512.1 557.36 444.65 481.47 425.22" />
              <line data-name="Right Spoiler Line 1" x1="673.13" y1="487.39999" x2="670.32001" y2="495.60999" />
              <polyline data-name="Right Spoiler and Flap Line" points="647.25 474.67 642.98 483.28 642.98 497.34" />
              <line data-name="Right Spoiler Line 2" x1="621.60999" y1="462.07001" x2="617.42999" y2="471.75" />
              <line data-name="Right Spoiler Line 3" x1="601.28998" y1="452.07999" x2="596.47998" y2="462.29999" />
              <line data-name="Right Spoiler Line 4" x1="577.06" y1="440.17001" x2="571.23999" y2="450.91" />
              <polyline data-name="Left Spoiler and Flap Line" points="557.22 430.42 557.36 444.65 557.36 462.95" />
              <line data-name="Right Spoiler Line 5" x1="534.56" y1="424.20999" x2="530.91998" y2="437.95001" />
              <line data-name="Right Spoiler Line 6" x1="508.22" y1="416.98999" x2="504.03" y2="431.03" />
            </g>
            <path
              data-name="Walk Zone"
              stroke={stroke}
              strokeWidth={0.05}
              d="m 473,268.25 28.31,22.08 v 29.25 c 0,0 79.42,39.67 79.42,39.67 l 266.92,190.92 -8.33,15.17 -276.33,-141.32 -63.83,-17.85 c 3.17,-11.42 0.64,-18.81 -21.1,-26.86"
            />
            <path
              data-name="Right Wing"
              stroke={stroke}
              strokeWidth={1}
              d="m 479.06,441.72 76.75,20.67 147.41,59.11 154.56,67.67 c 1.53,7.08 2.78,20.56 3,20.56 0.47,0 -0.15,-18.57 -1.64,-46.72 -0.39,-6.33 -4.08,-19.17 -11.25,-24.67 L 594.56,352.34 490.39,267.01 475.28,251.29 473,241.68"
            />
          </g>
        </g>
        <g data-name="Cockpit Windows" stroke={stroke} strokeWidth={0.5}>
          <path d="m 417.25,76.04 4.2,0.2 c 0.07,0 0.13,-0.03 0.17,-0.08 l 1.23,-1.78 c 0,0 0.02,-0.02 0.03,-0.04 l 1.34,-1.19 c 0.08,-0.07 0.09,-0.19 0.02,-0.27 l -1.69,-2.04 c -0.05,-0.06 -0.13,-0.08 -0.2,-0.06 l -1.54,0.4 c 0,0 -0.08,0.03 -0.1,0.07 l -3.61,4.48 c -0.1,0.13 -0.02,0.31 0.14,0.32 z" />
          <path d="m 425.48,71.79 7,-3.72 c 0.06,-0.03 0.1,-0.1 0.1,-0.17 v -2.86 c 0,-0.13 -0.12,-0.22 -0.24,-0.19 l -3.33,0.77 c 0,0 -0.05,0.02 -0.07,0.03 l -4.76,3.46 c -0.06,0.04 -0.09,0.12 -0.08,0.19 l 0.25,1.64 c 0,0 0.03,0.09 0.07,0.12 l 0.84,0.7 c 0.06,0.05 0.15,0.06 0.22,0.02 z" />
          <path d="m 415.75,77.88 3.43,-0.46 c 0.51,-0.07 0.84,0.54 0.49,0.92 l -1.69,1.89 c 0,0 -0.05,0.05 -0.08,0.07 l -3.97,3.06 c -0.33,0.25 -0.81,0.07 -0.89,-0.33 l -0.2,-1 c -0.03,-0.15 0,-0.3 0.09,-0.43 l 2.42,-3.49 c 0.09,-0.13 0.23,-0.21 0.38,-0.24 z" />
          <path d="m 449.64,76.04 -4.2,0.2 c -0.07,0 -0.13,-0.03 -0.17,-0.08 l -1.23,-1.78 c 0,0 -0.02,-0.02 -0.03,-0.04 l -1.34,-1.19 c -0.08,-0.07 -0.09,-0.19 -0.02,-0.27 l 1.69,-2.04 c 0.05,-0.06 0.13,-0.08 0.2,-0.06 l 1.54,0.4 c 0,0 0.08,0.03 0.1,0.07 l 3.61,4.48 c 0.1,0.13 0.02,0.31 -0.14,0.32 z" />
          <path d="m 441.41,71.79 -7,-3.72 c -0.06,-0.03 -0.1,-0.1 -0.1,-0.17 v -2.86 c 0,-0.13 0.12,-0.22 0.24,-0.19 l 3.33,0.77 c 0,0 0.05,0.02 0.07,0.03 l 4.76,3.46 c 0.06,0.04 0.09,0.12 0.08,0.19 l -0.25,1.64 c 0,0 -0.03,0.09 -0.07,0.12 l -0.84,0.7 c -0.06,0.05 -0.15,0.06 -0.22,0.02 z" />
          <path d="m 451.14,77.88 -3.43,-0.46 c -0.51,-0.07 -0.84,0.54 -0.49,0.92 l 1.69,1.89 c 0,0 0.05,0.05 0.08,0.07 l 3.97,3.06 c 0.33,0.25 0.81,0.07 0.89,-0.33 l 0.2,-1 c 0.03,-0.15 0,-0.3 -0.09,-0.43 l -2.42,-3.49 c -0.09,-0.13 -0.23,-0.21 -0.38,-0.24 z" />
          <polygon
            stroke={stroke}
            strokeWidth={1.5}
            points="467.22,571 467.22,158.33 461.25,104.78 405.64,104.66 399.67,158.22 399.67,570.88 404.11,624.33 462.78,624.44 "
            data-name="White Outline"
          />
        </g>
      </g>
      <g stroke={highlight} strokeWidth={1} opacity="0.75">
        <g data-name="Aft Upper Doors">
          <path
            data-name="AFT-UPP R Door"
            d="m 467.22,562.27 h -6.75 c -0.92,0 -1.66,-0.58 -1.66,-1.3 v -5.71 c 0,-0.72 0.74,-1.3 1.66,-1.3 h 6.75"
          />
          <path
            data-name="AFT-UPP L Door"
            d="m 399.67,562.27 h 6.86 c 0.92,0 1.66,-0.58 1.66,-1.3 v -5.71 c 0,-0.72 -0.74,-1.3 -1.66,-1.3 h -6.86"
          />
        </g>
        <g data-name="Mid Upper Doors">
          <path
            d="m 467.22,463.47 h -6.75 c -0.92,0 -1.66,-0.58 -1.66,-1.3 v -5.71 c 0,-0.72 0.74,-1.3 1.66,-1.3 h 6.75"
            data-name="MID-UPP R Door"
          />
          <path
            d="m 399.67,463.47 h 6.86 c 0.92,0 1.66,-0.58 1.66,-1.3 v -5.71 c 0,-0.72 -0.74,-1.3 -1.66,-1.3 h -6.86"
            data-name="MID-UPP L Door"
          />
        </g>
        <g data-name="Forward Upper Doors">
          <path
            d="m 467.22,250.71 h -6.75 c -0.92,0 -1.66,-0.58 -1.66,-1.3 v -5.71 c 0,-0.72 0.74,-1.3 1.66,-1.3 h 6.75"
            data-name="FWD-UPP R Door"
          />
          <path
            d="m 399.67,250.71 h 6.86 c 0.92,0 1.66,-0.58 1.66,-1.3 v -5.71 c 0,-0.72 -0.74,-1.3 -1.66,-1.3 h -6.86"
            data-name="FWD-UPP L Door"
          />
        </g>
      </g>
    </g>
  </svg>
);
