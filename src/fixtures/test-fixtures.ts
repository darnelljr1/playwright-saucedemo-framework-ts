import { test as base, expect } from '@playwright/test';
import { ExamplePage } from '../pages/ExamplePage';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';

type Pages = {
  examplePage: ExamplePage;
  loginPage: LoginPage;
  productsPage: ProductsPage;
};

export const test = base.extend<Pages>({
  examplePage: async ({ page }, use) => {
    await use(new ExamplePage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  productsPage: async ({ page }, use) => {
    await use(new ProductsPage(page));
  },
});

export { expect };