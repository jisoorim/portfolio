function tabs(evt, tabcunt) {
	const tabPanel = document.getElementsByClassName('tab-content');
	const tabItem = document.getElementsByClassName('work-tab');

	for (i = 0; i < tabPanel.length; i++) {
		tabPanel[i].style.display = 'none';
	}
	for (i = 0; i < tabItem.length; i++) {
		tabItem[i].className = tabItem[i].className.replace(' active', '');
	}
	document.getElementById(tabcunt).style.display = 'grid';
	evt.currentTarget.className += ' active';
}
