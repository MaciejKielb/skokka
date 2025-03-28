import { Locator, Page, expect } from '@playwright/test'

export class AdPostingPages {
    private readonly page: Page
    private readonly postAdButton: Locator
    private readonly alertBanner: Locator

    constructor(page: Page) {
        this.page = page
        this.postAdButton = this.page.locator('#main-header').getByRole('button')
        this.alertBanner = page.getByRole('alert', { name: /Importent Notice/ })
    }

    async postAdAndCheckIfAlertBannerIsVisible(shouldSeeAlert: boolean) {
        await this.postAdButton.click()
        await this.adInfoPage(shouldSeeAlert)
        await this.addPhotosPage(shouldSeeAlert)
        await this.visibiltyPage(shouldSeeAlert)
        await this.feedbackPage(shouldSeeAlert)
    }

    private async adInfoPage(shouldSeeAlert: boolean) {
        await this.page.waitForLoadState('domcontentloaded')
        await this.checkAlertVisibility(shouldSeeAlert)
        // code to fill information require to move to next page
        // code click on button to next page
    }

    private async addPhotosPage(shouldSeeAlert: boolean) {
        await this.page.waitForLoadState('domcontentloaded')
        await this.checkAlertVisibility(shouldSeeAlert)
        // code to move to next page
    }

    private async visibiltyPage(shouldSeeAlert: boolean) {
        await this.page.waitForLoadState('domcontentloaded')
        await this.checkAlertVisibility(shouldSeeAlert)
        // code to post add
    }

    private async feedbackPage(shouldSeeAlert: boolean) {
        await this.page.waitForLoadState('domcontentloaded')
        await this.checkAlertVisibility(shouldSeeAlert, true)
    }

    private async checkAlertVisibility(shouldSeeAlert: boolean, isTheLastPage = false, timeout = 10000) {
        if (shouldSeeAlert) {
            if (isTheLastPage) {
                await expect(this.alertBanner).toBeVisible({ timeout })
            } else {
                await expect.soft(this.alertBanner).toBeVisible({ timeout })
            }
        } else {
            if (isTheLastPage) {
                await expect(this.alertBanner).not.toBeVisible({ timeout })
            } else {
                await expect.soft(this.alertBanner).not.toBeVisible({ timeout })
            
        }
    }
}
