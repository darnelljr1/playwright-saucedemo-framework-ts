import { Page, expect, Locator } from '@playwright/test';

export class BasePage {
  constructor(protected page: Page) {}

  async assertVisible(locator: Locator) {
    await expect(locator).toBeVisible();
  }

  async assertUrlContains(value: string | RegExp) {
    await expect(this.page).toHaveURL(value);
  }

  async assertText(locator: Locator, expected: string | RegExp) {
    await expect(locator).toHaveText(expected);
  }

  async assertEnabled(locator: Locator) {
    await expect(locator).toBeEnabled();
  }

  async assertCount(locator: Locator, expected: number) {
    await expect(locator).toHaveCount(expected);
  }
}
