document.addEventListener("DOMContentLoaded", function() { startplayer(); }, false);

var player;

function startplayer() 
{
 player = document.getElementById('music_player');
 player.controls = false;
}

function play_aud() 
{
 player.play();
} 
function pause_aud() 
{
 player.pause();
}
function stop_aud() 
{
 player.pause();
 player.currentTime = 0;
}
function replay_aud()
{
 player.loop = true;
}
function change_vol()
{
 player.volume=document.getElementById("change_vol").value;
}
function change_time()
{
 var player = document.getElementById('music_player');
 var progressbar = document.getElementById('change_time');
 progressbar.value = (player.currentTime / player.duration);
}