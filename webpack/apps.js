const _ = require('lodash');

const PAGE_NAME = 'ParaLideres.org';
const config = {
  public: {
    'front-page': {
      title: `${PAGE_NAME} | Recursos y Herramientas para el trabajo con jovenes y adolescentes`,
    },
    login: {
      title: `Ingreso | ${PAGE_NAME}`,
    },
  },
  private: {
    teams: {
      title: `Equipos | ${PAGE_NAME}`,
    },
  },
};

const entryConfig = _.reduce(config, (entries, pages) =>
  _.assign(entries,
    _.reduce(pages, (apps, __, key) =>
      _.assign(apps, {
        [key]: `./src/apps/${key}/index`,
      }), {}))
, {});

const htmlPluginConfig = _.reduce(config, (entries, pages, type) =>
  _.concat(entries,
    _.reduce(pages, (apps, appConfig, appName) =>
      _.concat(apps, {
        chunks: [appName],
        filename: `./${appName}/index.html`,
        template: `./src/templates/${type}/index.html`,
        title: appConfig.title,
      })
    , [])
  )
, []);

module.exports = {
  entryConfig,
  htmlPluginConfig,
};
