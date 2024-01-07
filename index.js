// superbowl.js

// Your actual implementation of superbowlWin function
function superbowlWin(record) {
    const winningYearObj = record.find(entry => entry.result === 'W');
    return winningYearObj ? winningYearObj.year : undefined;
  }
  
  // Export the function for testing
  module.exports = { superbowlWin };
  