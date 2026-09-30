import {Page, Locator} from '@playwright/test'

export class LoginPage
{
  page: Page;
  usernameField: Locator;
  passwordField: Locator;
  loginbutton: Locator;


  constructor(page:Page)
  {
    this.page = page;
    this.usernameField = page.locator('#user-name');
    this.passwordField = page.locator('#password');
    this.loginbutton = page.locator('#login-button');
  }

  async openApplication()
  {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async doLogin(uname:string, pword:string)
  {
   await this.usernameField.fill(uname);
   await this.passwordField.fill(pword);
   await this.loginbutton.click();
  }

}