import { test, expect } from '@playwright/test'
import { Homepage } from '../src/pages/homepage'
import { AgeConfirmationModal } from '../src/pages/modals/age-confirmation'
import { CookieConsentModal } from '../src/pages/modals/cookie-consent'
import { AdPostingPages } from '../src/pages/ad-posting-page'

test.describe('Alert Banner during adding ad', () => {
  let homepage: Homepage
  let ageConfirmation: AgeConfirmationModal
  let cookieConsent: CookieConsentModal
  let adPostingPages: AdPostingPages
  
  test.beforeEach(async ({ page }) => {
    homepage = new Homepage(page)
    ageConfirmation = new AgeConfirmationModal(page)
    cookieConsent = new CookieConsentModal(page)
    adPostingPages = new AdPostingPages(page)
    await page.goto('/');
  })

  test('should be visible for user from Argentina', async ({ page }) => {
    await homepage.selectFirstCityInArgentina()

    await page.waitForLoadState('domcontentloaded')

    await ageConfirmation.acceptAgeVerification()
    await cookieConsent.acceptCookieConsent()

    await adPostingPages.postAdAndCheckIfTheAlertIsVisible()
  })

  test('should be visible for user from Brasil', async ({ page }) => {
    await homepage.selectFirstCityInBrasil()

    await page.waitForLoadState('domcontentloaded')

    await ageConfirmation.acceptAgeVerification()
    await cookieConsent.acceptCookieConsent()

    await adPostingPages.postAdAndCheckIfTheAlertIsVisible()
  })

  
})