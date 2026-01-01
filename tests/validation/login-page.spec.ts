import { test } from '../../src/fixtures/test-fixtures';
import dotenv from 'dotenv';
dotenv.config();

test('login page loads and elements are visible', async ({loginPage}) => {
    await loginPage.goto();
    await loginPage.validateLoginElements();

    const username = process.env.USERNAME_STANDARD as string;
    const password = process.env.PASSWORD_STANDARD as string;

    await loginPage.login(username, password);
});