const _ = require('lodash');

const config = {
  public: {
    'front-page': {},
    login: {},
    register: {},
    'resource-list': {},
    resource: {},
  },
  private: {
    teams: {},
  },
};

const entryConfig = _.reduce(config, (entries, pages) =>
  _.assign(entries,
    _.reduce(pages, (apps, __, key) =>
      _.assign(apps, {
        [key]: `./src/apps/${key}/index`,
      }), {}))
, {});

module.exports = {
  entryConfig,
};
