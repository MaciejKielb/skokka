import { test as base } from '@playwright/test'
import { Homepage } from '@pages/homepage'
import { AgeConfirmationModal } from '@modals/age-confirmation'
import { CookieConsentModal } from '@modals/cookie-consent'
import { AdPostingPages } from '@pages/ad-posting-page'
import { Logger } from '@pages/logger'

type Fixtures = {
    homePage: Homepage
    ageConfirmation: AgeConfirmationModal
    cookieConsent: CookieConsentModal
    postAd: AdPostingPages
    logger: Logger
}

export const test = base.extend<Fixtures>({
    homePage: async ({ page, baseURL }, use) => {
        await page.goto(baseURL)
        const homePage = new Homepage(page)
        await use(homePage)
    },

    ageConfirmation: async ({ page }, use) => {
        const modal = new AgeConfirmationModal(page)
        await use(modal)
    },

    cookieConsent: async ({ page }, use) => {
        const modal = new CookieConsentModal(page)
        await use(modal)
    },

    postAd: async ({ page }, use) => {
        const postAd = new AdPostingPages(page)
        await use(postAd)
    },

    logger: async ({ page }, use) => {
        const logger = new Logger(page)
        await use(logger)
    }
})
