module.exports = (req, res) => {
  res.json({
    applinks: {
      apps: [],
      details: [
        {
          appID: 'NND5T8LZPS.com.visionapp.vision2',
          components: [
            {
              '/': '/events/?*',
            },
          ],
        },
      ],
    },
  });
};
