module.exports = (req, res) => {
  res.json({
    zh: {
      title: '🔥 双十一暨周年庆促销活动',
      message:
        '- 永久解锁兑换码 ¥79.00（原价¥108.00）（已售罄）\n- 一年订阅兑换码 ¥32.00（原价¥68.00）',
      urlString: 'https://okr.vision/zh/blog/2021/11/03/promo-campaign',
      buttonText: '活动详情',
      proEntranceSecondaryText: '🔥 促销中',
      showing: false,
    },
    en: {
      title: '',
      message: '',
      urlString: '',
      buttonText: '',
      proEntranceSecondaryText: '',
      showing: false,
    },
  });
};
