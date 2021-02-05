const messages = ['Roll With the Punches',
				  'Drive Me Nuts',
				   'Cut To The Chase',
				   'Long In The Tooth',
				   'Rain on Your Parade',
				   'Jumping the Gun',
				   'Tug of War',
				   'Mouth-watering',
				   'An Arm and a Leg',
				   'Go For Broke'];
let i = Math.floor(Math.random() * 10);
	console.log(i);
	console.log(messages[i]);
let el = document.getElementById('message');
el.innerHTML = messages[i];