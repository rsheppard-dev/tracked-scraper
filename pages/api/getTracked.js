const puppeteer = require('puppeteer');

export default async function handler(req, res) {
	const browser = await puppeteer.launch({
		headless: true,
	});

	const page = await browser.newPage();

	await page.goto('https://www.spacejelly.dev');

	const title = page.title();

	await browser.close();

	res.status(200).json({
		status: 'Ok',
		page: {
			title,
		},
	});
}
