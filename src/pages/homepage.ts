import { Page, expect } from '@playwright/test'

enum CountryCodes {
    Argentina = 'headingAR',
    Brazil = 'headingBR',
    Cyprus = 'headingCY',
    Singapore = 'headingSG',
    Switzerland = 'headingCH'
}

export class Homepage {
    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    private async selectFirstCityInCountry(countryId: string): Promise<void> {
        const countryHeading = this.page.locator(`#${countryId}`)
        await expect(countryHeading).toBeVisible()
        await countryHeading.click()

        const countryCode = countryId.toUpperCase().replace('HEADING', "")
        const collapseId = `collapse${countryCode}`

        const countryCityList = this.page.locator(`#${collapseId}`)
        
        const firstCity = countryCityList.locator('li.list-group-item a').first();
        await expect(firstCity).toBeVisible()
        await firstCity.click();
    }

    async selectFirstCityInArgentina() {
        await this.selectFirstCityInCountry(CountryCodes.Argentina);
    }

    async selectFirstCityInBrasil() {
        await this.selectFirstCityInCountry(CountryCodes.Brazil);
    }

    async selectFirstCityInSingapore() {
        await this.selectFirstCityInCountry(CountryCodes.Singapore);
    }

    async selectFirstCityInSwitzerland() {
        await this.selectFirstCityInCountry(CountryCodes.Switzerland);
    }

    async selectFirstCityInCyprus() {
        await this.selectFirstCityInCountry(CountryCodes.Cyprus);
    }
}