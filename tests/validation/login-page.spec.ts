import { test } from '../../src/fixtures/test-fixtures';
import { ERROR_MESSAGES } from '../../src/constants/errorMessages';

test('login page loads and elements are visible', async ({loginPage, productsPage}) => {
    await loginPage.goto();
    await loginPage.validateLoginElements();

    const username = process.env.USERNAME_STANDARD as string;
    const password = process.env.PASSWORD_STANDARD as string;

    await loginPage.login(username, password);
    await productsPage.expectURL();
});
test('login page shows error message for empty credentials', async ({loginPage}) => {
    await loginPage.goto();
    await loginPage.login('', '');
    await loginPage.expectLoginError();
});
test('login page shows error message for invalid password', async ({loginPage}) => {
    const username = process.env.USERNAME_STANDARD as string;
    await loginPage.goto();
    await loginPage.login(username, 'wrongpassword');
    await loginPage.expectErrorMessageText(ERROR_MESSAGES.INVALID_CREDENTIALS);
});
test('login page shows error message for lockedout user', async ({loginPage}) => {

    const password = process.env.PASSWORD_STANDARD as string;
    const username = process.env.LOCKEDOUT_USER as string;
    await loginPage.goto();
    await loginPage.login(username, password);
    await loginPage.expectErrorMessageText(ERROR_MESSAGES.LOCKED_OUT_USER);
});