
class MobileGestures {
  
    async SwipeUp() {
        driver.touchPerform([{
        action: 'press',
        options: { x: 500, y: 1800 },
        }, {
        action: 'wait',
        options: { ms: 1000 },
        }, {
        action: 'moveTo',
        options: { x: 500, y: 1100 },
        }, {
        action: 'release',
        }]);
    }
  
  };
  module.exports = new MobileGestures();