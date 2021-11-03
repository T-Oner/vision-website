module.exports = (req, res) => {
  res.json({
    zh: {
      title: '双十一暨周年庆促销活动',
      message: '- 永久解锁兑换码 ¥78.00，限量 90 个\n- 一年订阅兑换码 ¥38.00',
      urlString: 'https://okr.vision/zh/blog/2021/11/03/promo-campaign',
      buttonText: '活动详情',
      showing: true,
    },
    en: {
      title: '',
      message: '',
      urlString: '',
      buttonText: '',
      showing: false,
    },
  });
};
