const iOSFlow = require('./iOSFlow');
const AndroidFlow = require('./AndroidFlow');
const WebFlow = require('./WebFlow');

class FlowManager {

    async getInstance() {
        if(driver.isMobile)
        {
            return (driver.isIOS) ? new iOSFlow() : new AndroidFlow();

        } else {
            return new WebFlow();
        }
    }
  
  };
  module.exports = new FlowManager();