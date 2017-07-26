
var SELENIUM_HOST = '127.0.0.1'
var SELENIUM_PORT = 9000

if ('SELENIUM_HOST' in process.env) {
  SELENIUM_HOST = process.env.SELENIUM_HOST
}

if ('SELENIUM_PORT' in process.env) {
  SELENIUM_PORT = parseInt(process.env.SELENIUM_PORT)
}


module.exports = {
  src_folders: ['./tests/Orders/integration/src'],
  output_folder: './results',
  live_output: true,
  globals_path: './tests/Orders/globals',
  page_objects_path: './tests/Orders/integration/page-objects',

  selenium: {
    start_process: true,
    server_path: './node_modules/selenium-server/lib/runner/selenium-server-standalone-2.53.0.jar',
    log_path: './results',
    host: SELENIUM_HOST, // (remote grid: 52.11.118.56)
    port: SELENIUM_PORT,
    cli_args : {
      "webdriver.chrome.driver" : "./node_modules/.bin/chromedriver.cmd",
      "webdriver.gecko.driver" : "",
      "webdriver.edge.driver" : "",
    }
  },

  test_settings: {
    default: {
      selenium_host: SELENIUM_HOST, // (remote grid: 52.11.118.56)
      selenium_port: SELENIUM_PORT,
      silent: true,
      disable_colors: false,
      skip_testcases_on_fail: false, 
      screenshots: {
        enabled: true,
        on_failure: true,
        path: './results/chrome/screenshots'
      },
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true
      },

     testurl:{
       "launch_url" : "http://www.google.com",
     },
    firefox: {
        desiredCapabilities: {
          browserName: 'firefox',
          javascriptEnabled: true,
          acceptSslCerts: true,
        }
      }
    },

    // add environment specific overrides
    qa: {
      screenshots: {
        enabled: true
      }
    },

    // add environment specific overrides
    staging: {
      screenshots: {
        enabled: true
      }
    }
  }
};
