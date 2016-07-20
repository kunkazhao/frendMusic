
window.onload = function(){
	var audioMusic = document.createElement("AUDIO");
	audioMusic.setAttribute("id", "player");
	audioMusic.setAttribute("loop", "loop");
	document.body.appendChild(audioMusic);
}
            
function playMusic(obControl,urlMusic){
	var player = document.getElementById("player");
	var playingOb = document.getElementsByClassName("bgStop");
	if(playingOb.length != 0){
		playingOb[0].className = "playControl bgPlay";
	}
	if(player.paused == true){
		//如果当前暂停
		if(player.src.indexOf(urlMusic)!=-1){
			//如果要播放的歌和播放中的歌一样
			player.play();
			obControl.className = "playControl bgStop";
		}else{
			//如果要播放的歌和播放中的歌不一样
			player.src = urlMusic;
			player.play();
			obControl.className = "playControl bgStop";
		}
	}else{
		//如果当前播放
		if(player.src.indexOf(urlMusic)!=-1){
			//如果要播放的歌和播放中的歌一样
			player.pause();
			obControl.className = "playControl bgPlay";
		}else{
			//如果要播放的歌和播放中的歌不一样
			player.src = urlMusic;
			player.play();
			obControl.className = "playControl bgStop";
		}
	}
}



/*
 * 
function playMusic(e,m,name) {
	var music = document.getElementById("music");
	var content = e.id;
	if (music == null) {
		var musicAudio = document.createElement("AUDIO");
		var musicSpan = document.createElement("SPAN");
		musicAudio.src = m;
		musicSpan.innerHTML = name + " 播放中....";
		musicAudio.setAttribute("controls", "controls");
		musicAudio.setAttribute("autoplay", "autoplay");
		//musicAudio.setAttribute("loop", "loop");
		musicAudio.setAttribute("id", "music");
		musicSpan.setAttribute("id", "musicName");
		musicAudio.className = "player";
		musicSpan.className = "musicName";
		document.body.appendChild(musicAudio);
		document.body.appendChild(musicSpan);
		music = document.getElementById("music");

	} else {
		var musicSpan = document.getElementById("musicName");
		music.src = m;
		musicSpan.innerHTML = name + " 播放中....";
		music.load();
	}
	music.addEventListener("ended", function() {
    alert("音频已播放完成");
});
}
*/


