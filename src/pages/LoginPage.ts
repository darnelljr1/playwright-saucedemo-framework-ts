import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly titleSwagLabs: Locator;
  readonly headerUsernames: Locator;
  readonly headerPassword: Locator;

  constructor(page: Page) {
    super(page);

    this.usernameInput = page.locator('[data-test="username"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
    this.titleSwagLabs = page.locator('.login_logo');
    this.headerUsernames = page.getByRole('heading', { name: 'Accepted usernames are:' });
    this.headerPassword = page.getByRole('heading', { name: 'Password for all users:' });
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
