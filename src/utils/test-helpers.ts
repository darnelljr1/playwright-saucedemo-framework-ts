import {type Locator, expect} from '@playwright/test';

export async function assertVisibleAndEnabled(
  items: Locator[],
  timeout = 0
): Promise<void> {
  for (const item of items) {
    const visibleOptions = timeout ? { timeout } : undefined;

    await expect(item).toBeVisible(visibleOptions);
    await expect(item).toBeEnabled(visibleOptions);
  }
}