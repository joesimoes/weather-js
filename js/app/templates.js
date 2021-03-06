define([
	'underscore'
], function (_) {

	var Templates = {};

	Templates['place'] = [
		'<div class="panel panel-info">',
			'<div class="panel-heading">',
				'<h3 class="panel-title">',
					'<%= name %> - <%= countryCode %>',
				'</h3>',
			'</div>',
			'<div class="panel-body">',
				'Panel content',
			'</div>',
		'</div>'
	].join('');

	Templates['day'] = [
		'<div>',
			'<img src="<%= icon_url %>" alt="" class="img-thumbnail">',
			'<br /><%= conditions %>',
		'</div>'
	].join('');

	Templates['modal'] = [
		'<div class="modal fade">',
			'<div class="modal-dialog">',
				'<div class="modal-content">',
					'<div class="modal-header">',
						'<div class="button" class="close" data-dismiss="modal" aria-hidden="true">',
						'<h4 class="modal-title"><%=title %></div></h4>',
					'</div>',
					'<div class="modal-body">test</div>',
				'</div>',
			'</div>',
		'</div>'	
	].join('');

	for (var tmpl in Templates) {
		if (Templates.hasOwnProperty(tmpl)) {
			Templates[tmpl] = _.template(Templates[tmpl]);
		}
	}
	return Templates;
});
