import { Locator, Page, expect } from '@playwright/test'

export class AdPostingPages {
    private readonly page: Page
    private readonly postAdButton: Locator
    private readonly alertBanner: Locator

    constructor(page: Page) {
        this.page = page
        this.postAdButton = this.page.locator('#main-header').getByRole('button')
        this.alertBanner = page.getByRole('alert', { name: /Importent Notice/})
    }

    async postAdAndCheckIfTheAlertIsVisible() {
        await this.postAdButton.click()
        await this.adInfoPage()
        await this.addPhotosPage()
        await this.visibiltyPage()
        await this.feedbackPage()
    }

    private async adInfoPage() {
        await this.isAlertBannerVisible()
        // Here code to fill information and move to next page
    }

    private async addPhotosPage() {
        await this.isAlertBannerVisible()
        // code to move to next page
    }

    private async visibiltyPage() {
        await this.isAlertBannerVisible()
        // code to post add
    }

    private async feedbackPage() {
        await this.isAlertBannerVisible()
    }

    private async isAlertBannerVisible() {
        await expect(this.alertBanner).toBeVisible()
    }
}
