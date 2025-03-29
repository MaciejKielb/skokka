import { Locator, Page, expect } from '@playwright/test'

export class CookieConsentModal {
    private readonly page: Page
    private readonly cookieConsentModal: Locator
    private readonly acceptCookieConsentButton: Locator

    constructor(page: Page) {
        this.page = page
        this.cookieConsentModal = this.page.locator(`#cookieBannerV2`)
        this.acceptCookieConsentButton = this.page.locator('.modal-footer.d-block .btn.btn-primary')
    }

    async acceptCookieConsent(timeout = 5000): Promise<boolean> {
        try {
            await this.cookieConsentModal.waitFor({ state: 'visible', timeout })
            await this.acceptCookieConsentButton.click();
            return true
        } catch (error) {
            console.warn(`Cookie consent modal did not appear within ${timeout} ms: ${error}`)
            return false
        }
    }

    // Here code to cover other scenarios 
}