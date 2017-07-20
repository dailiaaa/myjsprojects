var model = [];

var controller = {
	init: function() {
		view.init();
	},
	generateModel: function(num) {
		model = [];
		for (var i = 1; i <= num*num; i++) {
			model.push(i);
		}
	},
	getModel: function() {
		return model;
	}
};

var view = {
	init: function() {
		var num;
		this.butt = document.getElementsByTagName('button')[0];
		this.input = document.getElementsByTagName('input')[0];
		this.wrapper = document.getElementsByClassName('wrapper')[0];
		this.butt.addEventListener('click', function() {
			num = parseInt(view.input.value);
			controller.generateModel(num);
			view.wrapper.innerHTML = '';
			view.render();
		}, false);
		this.wrapper.addEventListener('click', function(e) {
			if (e.target.getAttribute('class') == 'grid') {
				console.log(e.target.innerText);
			}
			
		}, false);
	},
	render: function() {
		var model = controller.getModel();
		var elem;
		for (var i in model) {
			elem = document.createElement('div');
			elem.setAttribute('class', 'grid');
			elem.innerHTML = model[i];
			this.wrapper.appendChild(elem);
			this.wrapper.style.width = 52 * Math.sqrt(model.length) + 'px';
		}
	}
}
controller.init();