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

    async acceptCookieConsent() {
        try {
            await this.cookieConsentModal.waitFor({ state: 'visible', timeout: 10000 });
            await this.acceptCookieConsentButton.click();
        } catch (error) {
            console.warn(`Cookie consent modal did not appear within 10000 ms: ${error}`);
        }
    }
}