const spawn = require("child_process").spawn;
var NodeHelper = require("node_helper");

module.exports = NodeHelper.create({
  socketNotificationReceived: function(notification, payload) {
    if (notification === "get_torrents") {
      this.getTorrentsList();
    }
  },
  
  getTorrentsList: function() {
    var process = spawn("python3", ["/home/pi/MagicMirror/modules/MMM-TransmissionBT/torrents.py"]);
    process.stdout.on("data", (data)=>{
      this.sendSocketNotification("torrents", data)
    });
  }
});