import { test } from '@shared/fixtures'

test.describe('Alert Banner for non-logged in users', () => {
  test('should be visible in Argentina during adding ad', async ({ page, homePage, ageConfirmation, cookieConsent, postAd }) => {
    await homePage.selectFirstCityInArgentina()

    await page.waitForLoadState('domcontentloaded')

    await ageConfirmation.acceptAgeVerification()
    await cookieConsent.acceptCookieConsent()

    await postAd.postAdAndCheckIfAlertBannerIsVisible(true)
  })

  test('should be visible in Brasil during adding ad', async ({ page, homePage, ageConfirmation, cookieConsent, postAd }) => {
    await homePage.selectFirstCityInBrasil()

    await page.waitForLoadState('domcontentloaded')

    await ageConfirmation.acceptAgeVerification()
    await cookieConsent.acceptCookieConsent()

    await postAd.postAdAndCheckIfAlertBannerIsVisible(true)
  })

  test('should be visible in Singapore during adding ad', async ({ page, homePage, ageConfirmation, cookieConsent, postAd }) => {
    await homePage.selectFirstCityInSingapore()

    await page.waitForLoadState('domcontentloaded')

    await ageConfirmation.acceptAgeVerification()
    await cookieConsent.acceptCookieConsent()

    await postAd.postAdAndCheckIfAlertBannerIsVisible(true)
  })

  test('should be visible in Switzerland during adding ad', async ({ page, homePage, ageConfirmation, cookieConsent, postAd }) => {
    await homePage.selectFirstCityInSwitzerland()

    await page.waitForLoadState('domcontentloaded')

    await ageConfirmation.acceptAgeVerification()
    await cookieConsent.acceptCookieConsent()

    await postAd.postAdAndCheckIfAlertBannerIsVisible(true)
  })

  test('should not be visible in Cyprus during adding ad', async ({ page, homePage, ageConfirmation, cookieConsent, postAd }) => {
    await homePage.selectFirstCityInCyprus()

    await page.waitForLoadState('domcontentloaded')

    await ageConfirmation.acceptAgeVerification()
    await cookieConsent.acceptCookieConsent()

    await postAd.postAdAndCheckIfAlertBannerIsVisible(false)
  })
})

test.describe('Alert Banner for logged in users', () => {
  test('should be not visible in Argentina during adding ad', async ({ page, homePage, ageConfirmation, cookieConsent, logger, postAd }) => {
    await homePage.selectFirstCityInArgentina()

    await page.waitForLoadState('domcontentloaded')

    await ageConfirmation.acceptAgeVerification()
    await cookieConsent.acceptCookieConsent()

    await logger.login()

    await postAd.postAdAndCheckIfAlertBannerIsVisible(true)
  })
})

