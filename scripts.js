const app = document.getElementById('root');

const logo = document.createElement('img');


const container = document.createElement('div');
container.setAttribute('class', 'container');
 
app.appendChild(logo);
app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://data.kingcounty.gov/resource/yaai-7frk.json', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(critter => { //STARTS
      const card = document.createElement('div');
      card.setAttribute('class', 'col-lg-4');

      const h1 = document.createElement('h1');
      h1.textContent = critter.animal_type;

      const p = document.createElement('p');
      p.textContent = `Name: ${critter.animal_name} - Color:${critter.animal_color}`;
	  p.setAttribute('class', 'text-muted');

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}

request.send();