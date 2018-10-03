
window.onload = function addtrack()
{	
	a = new Array(
	{"nametrack":"text1","scrtrack":"http://vk.com/1"},
	{"nametrack":"text2","scrtrack":"http://vk.com/0"}
	);

	var list = document.getElementById('tracks')
	var track = document.createElement('LI')
	var trackul = document.createElement('UL')
	var albomicon = document.createElement('LI')
	var name = document.createElement('LI')
	trackul.className="trackul"
	albomicon.className="albomicon"
	name.className="name"

	list.innerHTML="<ul class='trackul'>"
	list.innerHTML="<li class="albomicon"></li>"
	list.innerHTML="<li class="trackname">"
	list.innerHTML="</li>"
	list.innerHTML="</ul>"
	// for (var i = a.length - 1; i >= 0; i--) {
	// 	trackul.id=i
	// 	albomicon.id=i

	// 	name.id=i
	// 	list.appendChild(track)
	// 	track.appendChild(trackul)
	// 	trackul.appendChild(albomicon)
	// 	trackul.appendChild(name)
	// 	albomicon.innerHTML = 'Иконка альбома'
	// 	name.innerHTML = a[i].nametrack

	// }
	// trackul.id="trackul"
	// albomicon.id="albomicon"
	// name.id="name"
	// list.appendChild(track)
	// track.appendChild(trackul)
	// trackul.appendChild(albomicon)
	// trackul.appendChild(name)
	// albomicon.innerHTML = 'Иконка альбома'
	// name.innerHTML = 'Название трека'
};	