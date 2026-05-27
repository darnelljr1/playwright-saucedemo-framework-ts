import { chromium, FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
    const { baseURL } = config.projects[0].use;
    const browser = await chromium.launch();
    const page = await browser.newPage();

    await page.goto(baseURL as string);
    await page.fill('[data-test="username"]', process.env.USERNAME_STANDARD as string || '');
    await page.fill('[data-test="password"]', process.env.PASSWORD_STANDARD as string);
    await page.click('[data-test="login-button"]');
  
    await page.context().storageState({ path: 'playwright/.auth/user.json' });
    await browser.close();
}

export default globalSetup;
