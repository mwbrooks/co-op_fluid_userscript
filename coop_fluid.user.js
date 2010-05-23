// ==UserScript==
// @name        Fluid Co-op App
// @namespace   http://fluidapp.com
// @description Adds badge count to icon for Co-op updates.
// @include     *
// @author      Michael Brooks <http://www.michaelbrooks.ca>
// ==/UserScript==

(function() {
	if (window.fluid) {
		
		// Add Co-op specific API functions here
		FluidCoopAPI = {
			getUnreadCount: function() {
				var count = document.title.match(/\(([0-9]+)\)/);
				return count ? count[1] : 0;
			}
		};

		// Update badge count
		setInterval(function() {
			window.fluid.dockBadge = FluidCoopAPI.getUnreadCount() || null;
		}, 5000);
	}
})();