import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class ExamplePage extends BasePage {
  readonly url: string;
  readonly pageTitle: Locator;
  readonly sampleButton: Locator;

  constructor(page: Page) {
    super(page);

    // Placeholder URL - adjust to whatever site you're using
    this.url = '/example'; 

    // Placeholder locators (update based on your actual site)
    this.pageTitle = page.locator('h1');
    this.sampleButton = page.locator('button:has-text("Try me")');
  }

  async goto() {
    await this.page.goto(this.url);
    await this.waitForPageLoaded();
  }

  async waitForPageLoaded() {
    await this.pageTitle.waitFor();
  }

  async clickSampleButton() {
    await this.sampleButton.click();
  }

  async assertLoaded() {
    await expect(this.pageTitle).toBeVisible();
  }
}
