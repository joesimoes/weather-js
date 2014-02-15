define([
	'jquery',
	'underscore',
	'backbone'

], function ($, _, Backbone) {
	'use strict';
	var AppView = Backbone.View.extend({
		id: 'app-view',
		html: [ 
					'<div class="navbar">',
						'<a class="navbar-brand" href="#">Weather Watcher</a>',
						'<ul class = "nav navbar-nav">',
								'<li id="nav-dash"><a href="#">Dashboard</a></li>',
								'<li id="nav-about"><a href="#">About</a></li>',
						'</ul>',
					'</div>',
					'<div id="content"></div>'
				].join(''),

	events: {
		'click #nav-dash': 'onNavDash',
		'click #nav-about': 'onNavAbout'
	},

	initialize: function(){
		this.$el.append(this.html);
	},

	onNavAbout: function(e) {
		alert('About Button Clicked');
	},

	onNavDash: function(e) {
		alert('Dash Button Clicked');
	}

	});
	return AppView;
});