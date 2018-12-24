/**
 * 
 * @author Wandering
 * @version 2018-12-24
 * 
 */
var Engine = (
    function()
	{
		var DEFAULT_MESSAGE_PANEL = "message_panel";
		var _log = false;
		
		return {
			initialize: function() {
				var message_panel = document.getElementById(DEFAULT_MESSAGE_PANEL);
				GSM.initialize();
				
			},
			
			log: function(message) {
				if (_log) {
					console.log(message);
				}
			},

			notify: function(message) {
				// auto clearing messages, FIFO style 
				if (message_panel.childNodes.length > 20 ) {
					message_panel.removeChild(message_panel.childNodes[20]);
				}

				var new_message = document.createElement("DIV");
				var message_attribute = document.createAttribute("class");
				message_attribute.value = "message";
				new_message.setAttributeNode(message_attribute);

				var message_text = document.createTextNode(message);
				new_message.appendChild(message_text);

				message_panel.insertBefore(new_message, message_panel.childNodes[0]);
			}
		}
	}
)();