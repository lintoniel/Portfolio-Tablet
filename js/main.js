let root = new Vue({
	el: '#portfolio',
	methods: {
		changePage(href) {
			history.pushState( { page:href }, href, '#' + href);
			this.page = href;
		},

		showModal(href) {
			this.modal = !this.modal;
			this.src = href;
		}
	}, 

	data: {
		page: '',
		showContact: false,
		modal: false,
		src: 'image/check.png'
	},

	created() {
		this.page = window.location.hash.replace('#', '') || 'profile';
		
	}
});