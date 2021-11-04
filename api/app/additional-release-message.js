module.exports = (req, res) => {
  res.json({
    zh: {
      title: '双十一暨周年庆促销活动',
      message:
        '- 永久解锁兑换码 ¥79.00，限量 95 个\n- 一年订阅兑换码 ¥32.00\n- 11 月 6 日 20:00 更可在群内参与抽奖',
      urlString: 'https://okr.vision/zh/blog/2021/11/03/promo-campaign',
      buttonText: '活动详情',
      proEntranceSecondaryText: '🔥 促销中',
      showing: true,
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
