Package.describe({
  summary: "UI vocabulary for ClinicalFramework.",
  version: "1.0.1",
  git: "http://github.com/awatson1978/clinical-ui-vocabulary.git",
  name: "clinical:ui-vocabulary"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0');
  api.use('less@1.0.0');

  api.addFiles('anchoring.less', 'client');
  api.addFiles('colors.less', 'client');
  api.addFiles('haptics.less', 'client');
  api.addFiles('padding.less', 'client');
  api.addFiles('pages.less', 'client');
  api.addFiles('sizing.less', 'client');
  api.addFiles('text.less', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
});
