const adsService = require('./ads.service');

module.exports = { getAdsData };

async function getAdsData(req, res) {
  const domain = req.query.searchDomain;
  console.log('domain', JSON.stringify(domain));
  console.log('req.query', JSON.stringify(req.query));

  try {
    const adsTxt = await adsService.scrapeAdsTxt(domain);
    const adsData = await adsService.parseAdsTxt(adsTxt);
    res.send(adsData);
  } catch (err) {
    res.status(500).send({ err: 'Failed getting ads data' });
  }
}
