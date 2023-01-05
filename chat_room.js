row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
localStorage.setItem("room_name", room_name);
localStorage.getItem("room_name", room_name);
window.location="index.html"