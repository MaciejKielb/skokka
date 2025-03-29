import { expect, FrameLocator, Locator, Page } from '@playwright/test'

export class Logger {
    private readonly page: Page
    private readonly singUpLink: Locator
    private readonly loginButton: Locator
    private readonly emailInputField: Locator
    private readonly passwordInputField: Locator
    private readonly captchaFrame: FrameLocator
    private readonly captchaCheckbox: Locator
    private readonly submitLoginButton: Locator

    constructor(page: Page) {
        this.page = page
        this.singUpLink = this.page.locator('.dropdown').first()
        this.loginButton = this.page.locator('a[data-href="/u/login/"] > button.btn.btn-primary.w-75.mb-4')
        this.emailInputField = this.page.locator('input[name="email"]')
        this.passwordInputField = this.page.locator('input[name="password"]')
        this.captchaFrame = this.page.frameLocator('iframe[data-hcaptcha-widget-id]')
        this.captchaCheckbox = this.captchaFrame.locator('#checkbox')
        this.submitLoginButton = this.page.locator('button[type="submit"]')
    }

    async login() {
        await this.singUpLink.click()
        await this.loginButton.click()
        await this.emailInputField.fill("soltysmmk@gmail.com")
        await this.passwordInputField.fill("Testtest1")
        await this.captchaCheckbox.click()
        await this.submitLoginButton.click()
    }
}