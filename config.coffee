exports.config =
  # See docs at http://brunch.readthedocs.org/en/latest/config.html.

  # Application build path.  Default is public
  #buildPath: ''

  files:
    javascripts:
      defaultExtension: 'js'
      joinTo:
        'javascripts/app.js': /^app/
        'javascripts/vendor.js': /^vendor/
      order:
        before: [
          'vendor/scripts/console-helper.js',
          'vendor/scripts/jquery-1.7.2.js',
          'vendor/scripts/angular.js'
        ]

    stylesheets:
      defaultExtension: 'css'
      joinTo: 'stylesheets/app.css'

  minify: no
