module.exports = (req, res) => {
  res.json({
    zh: {
      message: '双十一促销活动',
      urlString: 'https://okr.vision/zh',
      buttonText: '查看活动',
      showing: true,
    },
    en: {
      message: '',
      urlString: '',
      buttonText: '',
      showing: false,
    },
  });
};
