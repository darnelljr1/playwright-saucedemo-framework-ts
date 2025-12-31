import { test as base, expect } from '@playwright/test';
import { ExamplePage } from '../pages/ExamplePage';
import { LoginPage } from '../pages/LoginPage';

type Pages = {
  examplePage: ExamplePage;
  loginPage: LoginPage;
};

export const test = base.extend<Pages>({
  examplePage: async ({ page }, use) => {
    await use(new ExamplePage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
});

export { expect };