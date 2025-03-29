import { Locator, Page } from '@playwright/test'

export class AgeConfirmationModal {
    private readonly page: Page
    private readonly ageConfirmationModal: Locator
    private readonly acceptButton: Locator

    constructor(page: Page) {
        this.page = page
        this.ageConfirmationModal = this.page.locator('[role="document"] .modal-content.text-center')
        this.acceptButton = this.page.locator('.text-center.mb-3 .btn.btn-primary.w-50.rounded-pill.b1')
    }

    async acceptAgeVerification(timeout = 5000): Promise<boolean> {
        try {
            await this.ageConfirmationModal.waitFor({ state: 'visible', timeout })
            await this.acceptButton.click()
            return true
        } catch (error) {
            console.warn(`Age verification modal did not appear within ${timeout} ms: ${error}`)
            return false
        }
    }

    async declineAgeVerification() {
        // code
    }
}