var myCal = document.getElementById("adventCal");
var currentDate = new Date();

class Door {
	constructor(calendar, day) {

		this.width = ((calendar.width - 0.1 * calendar.width) / 4) * 0.95;
		this.height = ((calendar.height - 0.1 * calendar.height) / 6) * 0.95;
		this.adventMessage = 'Day ' + day + ' of Advent\n\n' + '"' + messages[day - 1][0] + '"\n\n\t' + 'by ' + messages[day - 1][1] + '\n\n';
		this.x = (0.04 * calendar.width + ((day - 1) % 4) * (1.1 * this.width));
		this.y = -(0.96 * calendar.height - Math.floor((day - 1) / 4) * (1.1 * this.height));

		this.content = function () {

			var node = document.createElement("li");
			document.getElementById("adventDoors").appendChild(node);
			node.id = "door" + day;
			node.style.cssText = "width: " + this.width + "px; height: " + this.height + "px; top: " + this.y + "px; left: " + this.x + "px;";

			var innerNode = document.createElement("a");
			document.getElementById("door" + day).appendChild(innerNode);
			innerNode.innerHTML = day;
			innerNode.href = "#";

			if (/*(currentDate.getMonth() + 1) < 12 ||*/ currentDate.getDate() < day) {
				innerNode.className = "disabled";
				innerNode.onclick = function () {
					return false;
				};
			} else {
				var adventMessage = this.adventMessage;
				innerNode.onclick = function () {
					//alert(adventMessage);
					Swal.fire({
						title: adventMessage,
						width: 600,
						padding: '3em',
						imageUrl: 'https://unsplash.it/400/200',
  imageWidth: 400,
  imageHeight: 200,
  imageAlt: 'Custom image',
						background: '#fff url(https://image.shutterstock.com/z/stock-photo-white-paper-texture-396573496.jpg)',
						backdrop: `
						  rgba(54,139,61,0.6)
						  url("http://clipart-library.com/img/973913.gif")
						  left top
						  repeat
						`
					  })
					console.log(adventMessage)
					return false;
				};
			}
		};
	}
}

(function() {
	var doors = [];

	for(var i = 0; i < 24; i++) {

		doors[i] = new Door(myCal, i + 1);
		doors[i].content();

	}

	return doors;
})();