import enquireJs from 'enquire.js'
import {ThemeModule} from '@/store/modules/theme'

export const DEVICE_TYPE = {
  DESKTOP: 'desktop',
  TABLET: 'tablet',
  MOBILE: 'mobile'
}

export const deviceEnquire = function (callback) {
  const matchDesktop = {
    match: () => {
      callback && callback(DEVICE_TYPE.DESKTOP)
    }
  }

  const matchLablet = {
    match: () => {
      callback && callback(DEVICE_TYPE.TABLET)
    }
  }

  const matchMobile = {
    match: () => {
      callback && callback(DEVICE_TYPE.MOBILE)
    }
  }

  // screen and (max-width: 1087.99px)
  enquireJs
    .register('screen and (max-width: 576px)', matchMobile)
    .register('screen and (min-width: 576px) and (max-width: 1199px)', matchLablet)
    .register('screen and (min-width: 1200px)', matchDesktop)
}

export const isTopMenu = () => {
  let layoutMode = ThemeModule.layout
  return layoutMode === 'topmenu'
}

export const isSideMenu = () => {
  return !this.isTopMenu()
}

export const isMobile = () => {
  let device = ThemeModule.device
  return device === DEVICE_TYPE.MOBILE
}

export const isDesktop = () => {
  let device = ThemeModule.device
  return device === DEVICE_TYPE.DESKTOP
}

export const isTablet = () => {
  let device = ThemeModule.device
  return device === DEVICE_TYPE.TABLET
}

export const AppDeviceEnquire = () => {
  deviceEnquire(deviceType => {
    switch (deviceType) {
      case DEVICE_TYPE.DESKTOP:
        ThemeModule.setSidebar(true)
        ThemeModule.ToggleDevice('desktop')
        break
      case DEVICE_TYPE.TABLET:
        ThemeModule.setSidebar(false)
        ThemeModule.ToggleDevice('tablet')
        break
      case DEVICE_TYPE.MOBILE:
      default:
        ThemeModule.setSidebar(true)
        ThemeModule.ToggleDevice('mobile')
        break
    }
  })
}
