const adsService = require('./ads.service');

module.exports = { getAdsData };

async function getAdsData(req, res) {
  const domain = req.query;

  if (!domain) return res.json({ error, message: 'No domain was provided' });

  try {
    const adsData = await adsService.getData(domain);
    res.send(adsData);
  } catch (err) {
    res.status(500).send({ err: 'Failed getting ads data' });
  }
}
