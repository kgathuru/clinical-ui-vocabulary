Package.describe({
  summary: "UI vocabulary for ClinicalFramework.",
  version: "1.0.5",
  git: "http://github.com/kgathuru/clinical-ui-vocabulary.git",
  name: "kgathuru:ui-vocabulary"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0');
  api.use('less');
  api.use('ian:bootstrap-3@3.3.1');

  api.addFiles('anchoring.less', 'client');
  api.addFiles('borders.less', 'client');
  api.addFiles('colors.less', 'client');
  api.addFiles('fonts.less', 'client');
  api.addFiles('haptics.less', 'client');
  api.addFiles('padding.less', 'client');
  api.addFiles('pages.less', 'client');
  api.addFiles('sizing.less', 'client');
  api.addFiles('text.less', 'client');

});

Package.onTest(function(api) {
  api.use('tinytest');
});
