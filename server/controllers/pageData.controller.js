import pageData from '../models/pageData';

export function getPageData(req, res) {
    pageData.findOne({ pageName: req.params.pageName }).exec((err, pageData) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ pageData });
  });
}
