const adsService = require('./ads.service');

module.exports = { getAdsData };

async function getAdsData(req, res) {
  const domain = req.query.data;
  console.log('domain in controller', domain);

  try {
    const adsTxt = await adsService.scrapeAdsTxt(domain);
    const adsData = await adsService.parseAdsTxt(adsTxt);
    res.send(adsData);
  } catch (err) {
    res.status(500).send({ err: 'Failed getting ads data' });
  }
}
