import { css } from 'styled-components';

const sizes = {
  wideMobileMin: 380,
  mobileMax: 667, // iPhone 8 landscape width
  desktopMin: 1024,
  wideDesktopMin: 1280
};

const mediaQuery = (...query) => (...rules) =>
  css`
    @media ${css(...query)} {
      ${css(...rules)};
    }
  `;

const media = {
  mobile: mediaQuery`screen and (max-width: ${sizes.mobileMax / 16}em)`,
  notMobile: mediaQuery`screen and (min-width: ${(sizes.mobileMax + 1) / 16}em)`,
  smallMobile: mediaQuery`screen and (max-width: ${sizes.wideMobileMin / 16}em)`,
  notSmallMobile: mediaQuery`screen and (min-width: ${(sizes.wideMobileMin + 1) /
    16}em) and (max-width: ${(sizes.mobileMax - 1) / 16}em)`,
  tablet: mediaQuery`(min-width: ${(sizes.mobileMax + 1) /
    16}em) and (max-width: ${(sizes.desktopMin - 1) / 16}em)`,
  desktop: mediaQuery`(min-width: ${sizes.desktopMin / 16}em)`,
  notDesktop: mediaQuery`(max-width: ${(sizes.desktopMin - 1) / 16}em)`,
  wideDesktop: mediaQuery`(min-width: ${sizes.wideDesktopMin / 16}em)`,
  minDesktop: mediaQuery`(min-width: ${sizes.desktopMin /
    16}em) and (max-width: ${sizes.wideDesktopMin / 16}em)`,
  notWideDesktop: mediaQuery`(max-width: ${(sizes.wideDesktopMin - 1) / 16}em)`,
  IE: mediaQuery`screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none)`,
  Safari: mediaQuery`all and (-webkit-min-device-pixel-ratio: 0) and (min-resolution: 0.001dpcm)`
};

export default media;
