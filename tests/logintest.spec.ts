import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/loginpage'
import userinfo from '../testdata/userinfo.json'

test('Login Test' , async ({page})=>{

    const login = new LoginPage(page);
    await login.openApplication();
    await login.doLogin(userinfo[0].username, userinfo[0].password);
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')

    await page.waitForTimeout(5000);

})