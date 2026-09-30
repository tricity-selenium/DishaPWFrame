import {Page, Locator} from '@playwright/test'

export class InventoryPage
{
  
    page:Page;
    productTitle: Locator;

    constructor(page: Page)
    {
        this.page = page;
        this.productTitle = page.getByText('Sauce Labs Backpack');
    }

    async clickProductTitle()
    {
        await this.productTitle.click();
    }



}