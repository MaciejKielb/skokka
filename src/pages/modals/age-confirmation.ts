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

    async acceptAgeVerification() {
        try {
            await this.ageConfirmationModal.waitFor({ state: 'visible', timeout: 10000 });
            await this.acceptButton.click();
        } catch (error) {
            console.warn(`Age verification modal did not appear within 10000 ms: ${error}`);
        }
    }
}