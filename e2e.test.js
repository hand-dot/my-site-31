const { E2EDriver } = require('puppeteer-velo-test-kit');


describe('E2EDriver Test', () => {
    const driver = new E2EDriver();

    beforeEach(async () => {
        await driver.init({ baseUrl: 'https://kyoheif.editorx.io/my-site-31' });
    }, 10000);

    afterEach(async () => {
        await driver.clean();
    });

    test('should have the correct page content', async () => {
        await driver.when.openDesktopPage('/');
        const content = await driver.get.textContent('h1');
        expect(content).toBe('Hello World');
    });
});