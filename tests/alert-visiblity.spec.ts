import { test } from '@shared/fixtures'

test.describe('Alert Banner for non-logged in users', () => {
  test('should be visible in Argentina during adding ad', async ({ page, homePage, ageConfirmation, cookieConsent, adPost }) => {
    await homePage.selectFirstCityInArgentina()

    await page.waitForLoadState('domcontentloaded')

    await ageConfirmation.acceptAgeVerification()
    await cookieConsent.acceptCookieConsent()

    await adPost.postAdAndCheckIfAlertBannerIsVisible(true)
  })

  test('should be visible in Brasil during adding ad', async ({ page, homePage, ageConfirmation, cookieConsent, adPost }) => {
    await homePage.selectFirstCityInBrasil()

    await page.waitForLoadState('domcontentloaded')

    await ageConfirmation.acceptAgeVerification()
    await cookieConsent.acceptCookieConsent()

    await adPost.postAdAndCheckIfAlertBannerIsVisible(true)
  })

  test('should be visible in Singapore during adding ad', async ({ page, homePage, ageConfirmation, cookieConsent, adPost }) => {
    await homePage.selectFirstCityInSingapore()

    await page.waitForLoadState('domcontentloaded')

    await ageConfirmation.acceptAgeVerification()
    await cookieConsent.acceptCookieConsent()

    await adPost.postAdAndCheckIfAlertBannerIsVisible(true)
  })

  test('should be visible in Switzerland during adding ad', async ({ page, homePage, ageConfirmation, cookieConsent, adPost }) => {
    await homePage.selectFirstCityInSwitzerland()

    await page.waitForLoadState('domcontentloaded')

    await ageConfirmation.acceptAgeVerification()
    await cookieConsent.acceptCookieConsent()

    await adPost.postAdAndCheckIfAlertBannerIsVisible(true)
  })

  test('should not be visible in Cyprus during adding ad', async ({ page, homePage, ageConfirmation, cookieConsent, adPost }) => {
    await homePage.selectFirstCityInCyprus()

    await page.waitForLoadState('domcontentloaded')

    await ageConfirmation.acceptAgeVerification()
    await cookieConsent.acceptCookieConsent()

    await adPost.postAdAndCheckIfAlertBannerIsVisible(false)
  })
})
