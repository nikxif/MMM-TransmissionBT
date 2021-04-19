Module.register("MMM-TransmissionBT", {
	defaults: {
    	updateInterval: 60000,
    	downColour: "#ffffff",
    	stopColour: "#666666",
    	fullTorrents: 2
	},
	
	start: function() {
		var self = this;
   		this.sendSocketNotification("get_torrents");
		setInterval(function() {
		this.sendSocketNotification("get_torrents")
		}, this.config.updateInterval);
  	},

  	getDom: function() {
   		var e = document.createElement("div");
   		e.id = "pi_trnsm";
		return e;
	},


 	notificationReceived: function(notification, payload, sender) {
	 	if (notification === "DOM_OBJECTS_CREATED") {
        		var timer = setInterval(()=>{
				this.sendSocketNotification("get_torrents")
        		}, this.config.updateInterval);
    		};
	},

  	socketNotificationReceived: function(notification, payload) {
		if (notification === "torrents") {
        		var e = document.getElementById("pi_trnsm");
				var torrent = payload;
				e.innerHTML = torrent;
				// var torrArr = JSON.parse(payload);
				// var t;
				// for (t in torrArr) {
				// 	var torrent = JSON.parse(t);
				// 	e.innerHTML = "Name: " + torrent.name + " Status: " + torrent.status + " ETA: " + torrent.eta.toString() + " Rate: " + (pareseInt(torrent.rate)/1000);
				// }
			// if (parseFloat(payload) <= this.config.low) {e.style.color = this.config.lowColor;}
			// else if (parseFloat(payload) >= this.config.high) {e.style.color = this.config.highColor}
			// else {e.style.color = this.config.otherColor}

			// if (this.config.tempUnit === "C"){e.innerHTML = "CPU: " + payload.toString() + "°C";}
			// else {e.innerHTML = "CPU: " + (payload * (9/5) + 32).toFixed(1).toString() + "°F";}
		}
  	}
});