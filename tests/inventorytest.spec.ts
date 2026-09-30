import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/loginpage'
import { InventoryPage } from '../pages/inventorypage'
import userinfo from '../testdata/userinfo.json'

test('Inventory Test' , async ({page})=>{

    const login = new LoginPage(page);
    await login.openApplication();
    await login.doLogin(userinfo[0].username, userinfo[0].password);
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')

    const inventory = new InventoryPage(page);
    await inventory.clickProductTitle();

    await page.waitForTimeout(5000);

})