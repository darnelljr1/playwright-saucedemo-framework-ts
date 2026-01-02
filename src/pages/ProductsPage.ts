import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProductsPage extends BasePage {
  readonly title: Locator;
  readonly inventoryItems: Locator;
  readonly addToCartButtons: Locator;
  readonly cartIcon: Locator;
  readonly urlProducts: string;

  constructor(page: Page) {
    super(page);

    this.title = page.locator('.title');
    this.inventoryItems = page.locator('.inventory_item');
    this.addToCartButtons = page.locator('button[data-test^="add-to-cart"]');
    this.cartIcon = page.locator('.shopping_cart_link');
    this.urlProducts = 'https://www.saucedemo.com/inventory.html';
  }

  async expectLoaded() {
    await expect(this.page).toHaveURL(this.urlProducts);
    await expect(this.title).toHaveText('Products');
    await expect(this.inventoryItems.first()).toBeVisible();
  }

  async expectURL() {
    await expect(this.page).toHaveURL(this.urlProducts);
  }

  async addFirstProductToCart() {
    await this.addToCartButtons.first().click();
  }

  async openCart() {
    await this.cartIcon.click();
  }
}
