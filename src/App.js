import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import {Map, InfoWindow, Marker, Polygon, GoogleApiWrapper} from 'google-maps-react';

const GOOGLE_API_KEY = 'AIzaSyBWz2X0vNbXb1x95BtQoPwcIN8nOUzvTkE';
 

export class App extends Component {  
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    vehicles:[],
  };

  componentDidMount() {
	fetch('http://damians1.pl/json.php').then(response => {
	  return response.json(); 
	}).then(data => {
	  // Work with JSON data here
	  this.setState({ vehicles: data })
	}).catch(err => {
	  // Do something for an error here
	  console.log(err);
	}); 
	  
  }
 
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
 
  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };
  
  
  render() {
	   
  
	const triangleCoords = [
		{lat: 51.140581, lng: 17.074583},
		{lat: 51.144096, lng: 17.052579},
		{lat: 51.140004, lng: 17.032246},
		{lat: 51.132895, lng: 17.027956},
		{lat: 51.125525, lng: 17.001886},
		{lat: 51.129404, lng: 16.982668},
		{lat: 51.127357, lng: 16.979408},
		{lat: 51.131989, lng: 16.957273},
		{lat: 51.118306, lng: 16.943031},
		{lat: 51.103218, lng: 16.962705},
		{lat: 51.110655, lng: 16.995479},
		{lat: 51.106236, lng: 17.014697},
		{lat: 51.100524, lng: 16.993939},
		{lat: 51.092654, lng: 16.974721},
		{lat: 51.085537, lng: 17.010249},
		{lat: 51.073782, lng: 17.005616},
		{lat: 51.070654, lng: 17.053833},
		{lat: 51.081655, lng: 17.050408},
		{lat: 51.086724, lng: 17.069283},
		{lat: 51.104620, lng: 17.052982},
		{lat: 51.106775, lng: 17.068597},
		{lat: 51.098152, lng: 17.090217},
		{lat: 51.100631, lng: 17.123849},
		{lat: 51.113457, lng: 17.108435},
		{lat: 51.125849, lng: 17.079264},
		{lat: 51.137590, lng: 17.083211},
		{lat: 51.142006, lng: 17.083383},
		{lat: 51.140581, lng: 17.074583}
	];		  
    
	var scooters = [{"id":241,"lat":51.098932666667,"lng":17.0038065,"range":14},{"id":243,"lat":51.11858,"lng":16.989835166667,"range":3},{"id":244,"lat":51.116777666667,"lng":17.031356833333,"range":48},{"id":247,"lat":51.058332166667,"lng":17.0282445,"range":35},{"id":248,"lat":51.119405666667,"lng":17.038474333333,"range":3},{"id":252,"lat":51.087229666667,"lng":17.010118833333,"range":65},{"id":253,"lat":51.076524833333,"lng":16.968351333333,"range":22},{"id":254,"lat":51.099404666667,"lng":17.048297833333,"range":15},{"id":255,"lat":51.061496166667,"lng":17.015276166667,"range":50},{"id":257,"lat":51.122367,"lng":17.055592666667,"range":65},{"id":258,"lat":51.088277333333,"lng":17.0147445,"range":48},{"id":259,"lat":51.085226333333,"lng":17.007428333333,"range":7},{"id":260,"lat":51.090418166667,"lng":17.023339,"range":48},{"id":261,"lat":51.1185755,"lng":16.981772166667,"range":39},{"id":263,"lat":51.127173,"lng":17.026330666667,"range":52},{"id":266,"lat":51.101625833333,"lng":17.0389705,"range":24},{"id":267,"lat":51.078764833333,"lng":16.998679166667,"range":52},{"id":268,"lat":51.076922,"lng":16.9656455,"range":44},{"id":269,"lat":51.0896465,"lng":17.0244295,"range":17},{"id":270,"lat":51.117092833333,"lng":17.021949833333,"range":48},{"id":271,"lat":51.127170333333,"lng":17.036501666667,"range":74},{"id":272,"lat":51.119269666667,"lng":17.028132666667,"range":35},{"id":275,"lat":51.110511333333,"lng":17.105124333333,"range":31},{"id":276,"lat":51.0810295,"lng":16.989674333333,"range":48},{"id":277,"lat":51.112769,"lng":17.026839166667,"range":62},{"id":278,"lat":51.053776166667,"lng":17.005589166667,"range":19},{"id":279,"lat":51.1062435,"lng":17.102507833333,"range":41},{"id":280,"lat":51.090591166667,"lng":17.0412115,"range":77},{"id":282,"lat":51.133098666667,"lng":17.030272,"range":35},{"id":283,"lat":51.124293,"lng":17.048598,"range":17},{"id":284,"lat":51.081005,"lng":16.992517333333,"range":27},{"id":285,"lat":51.1176305,"lng":17.019736666667,"range":39},{"id":286,"lat":51.120572666667,"lng":17.03547,"range":35},{"id":287,"lat":51.072824166667,"lng":17.041459833333,"range":31},{"id":290,"lat":51.092443166667,"lng":16.981737166667,"range":65},{"id":291,"lat":51.056803666667,"lng":17.013053333333,"range":22},{"id":292,"lat":51.110496,"lng":17.104988666667,"range":52},{"id":293,"lat":51.112788166667,"lng":17.088030333333,"range":48},{"id":295,"lat":51.110674,"lng":17.005851333333,"range":39},{"id":296,"lat":51.119712,"lng":17.032719166667,"range":35},{"id":297,"lat":51.1070525,"lng":17.0630905,"range":31},{"id":298,"lat":51.105300166667,"lng":17.038077333333,"range":52},{"id":303,"lat":51.083468,"lng":17.050802333333,"range":4},{"id":304,"lat":51.073401833333,"lng":16.989982666667,"range":29},{"id":305,"lat":51.0734705,"lng":16.994740333333,"range":31},{"id":306,"lat":51.117595833333,"lng":17.042164333333,"range":65},{"id":307,"lat":51.113291166667,"lng":17.085430333333,"range":35},{"id":309,"lat":51.052842,"lng":17.019604333333,"range":17},{"id":310,"lat":51.125073833333,"lng":16.997216166667,"range":30},{"id":311,"lat":51.098565,"lng":17.005009333333,"range":18},{"id":312,"lat":51.127217333333,"lng":16.948114166667,"range":24},{"id":314,"lat":51.101165166667,"lng":17.1105385,"range":31},{"id":315,"lat":51.088816,"lng":16.999925166667,"range":65},{"id":320,"lat":51.0696955,"lng":16.969465666667,"range":24},{"id":321,"lat":51.0855315,"lng":17.011847333333,"range":17},{"id":322,"lat":51.056166166667,"lng":17.011855666667,"range":52},{"id":347,"lat":51.105261833333,"lng":17.104816666667,"range":62},{"id":621,"lat":51.105005,"lng":17.085864166667,"range":24},{"id":623,"lat":51.138080166667,"lng":17.033078666667,"range":78},{"id":625,"lat":51.1045565,"lng":17.010261833333,"range":65},{"id":777,"lat":51.123455,"lng":17.085009833333,"range":24},{"id":813,"lat":51.116599,"lng":17.007050333333,"range":17},{"id":899,"lat":51.085425666667,"lng":16.998585833333,"range":52},{"id":900,"lat":51.0807815,"lng":17.064891833333,"range":39},{"id":901,"lat":51.114165166667,"lng":17.097491333333,"range":65},{"id":902,"lat":51.1012895,"lng":17.092482166667,"range":15},{"id":903,"lat":51.101083833333,"lng":17.031094,"range":32},{"id":904,"lat":51.087749833333,"lng":17.012507,"range":44},{"id":905,"lat":51.101266833333,"lng":16.998959666667,"range":31},{"id":907,"lat":51.0872755,"lng":17.054233166667,"range":52},{"id":909,"lat":51.083533,"lng":16.991377166667,"range":37},{"id":912,"lat":51.101548666667,"lng":17.0234145,"range":31},{"id":913,"lat":51.081565666667,"lng":16.989429833333,"range":3},{"id":915,"lat":51.103595833333,"lng":17.086906333333,"range":65},{"id":917,"lat":51.101998166667,"lng":17.020033333333,"range":62},{"id":918,"lat":51.134934166667,"lng":17.0696885,"range":18},{"id":922,"lat":51.076431333333,"lng":17.042426,"range":52},{"id":923,"lat":51.115269166667,"lng":17.097540666667,"range":65},{"id":925,"lat":51.100780166667,"lng":17.045369833333,"range":74},{"id":929,"lat":51.092619,"lng":17.043904666667,"range":3},{"id":930,"lat":51.114873333333,"lng":17.0004155,"range":11},{"id":933,"lat":51.127532333333,"lng":17.054460666667,"range":39},{"id":934,"lat":51.113235833333,"lng":17.006629333333,"range":18},{"id":950,"lat":51.121714333333,"lng":17.0598175,"range":65},{"id":952,"lat":51.117559166667,"lng":17.019437166667,"range":65}];
	console.log(scooters);
	var marker_desc = '';
	const imgUrl = `./img/scooter.png`;  
		  
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>		
		<main className="main-container">
		  <VehiclesList vehicles={scooters} />
		  <div className="vehicles-list">
			  <Map className="vehicles-map" google={this.props.google}
				  initialCenter={{ lat: 51.1095913, lng: 17.03160947 }}
				  zoom={13}
				  onClick={this.onMapClicked}>
				  
				<Polygon
				  paths={triangleCoords}
				  strokeColor="#006609"
				  strokeOpacity={0.9}
				  strokeWeight={2}
				  fillColor="#00ff33"
				  fillOpacity={0.20} />
				
				{scooters.map(marker => (
					<Marker
					  position={{ lat: marker.lat, lng: marker.lng }}
					  key={marker.id} 
					  icon={{ url: './img/marker-scooter.png', scaledSize: { width: 64, height: 64 } }} 
					  onClick={this.onMarkerClick} 
					  name={marker.id} 
					  desc={'<div className="position"><b>pozycja:</b> ' + Math.round(marker.lat * 10000000) / 10000000 + ', ' + Math.round(marker.lng * 10000000) / 10000000 + '</div><div className="range"><b>zasięg:</b> ' + marker.range + 'km</div>'}
					/>
				))}
				
				<InfoWindow
				  marker={this.state.activeMarker}
				  visible={this.state.showingInfoWindow}>
					<div>					  
					  <img src={imgUrl} className="map-icon" alt="V" />
					  <div className="content">
					    <h2 className="header">DW {this.state.selectedPlace.name}X</h2>
					    <div dangerouslySetInnerHTML={{ __html: this.state.selectedPlace.desc }}></div>
						<button>Zarezerwuj pojazd</button>
					  </div>
					</div>
				</InfoWindow>
				  
			  </Map>
		  </div>
		</main>	
      </div>
    );
  }
}

function VehiclesList({ vehicles }) {
  return (
	<ul className="vehicles-list">
	{vehicles.map(marker => (	
	  <VehicleItem
		idx={marker.id} 
		vehicle_name={marker.id} 
		vehicle_type="scooter"
		lat={marker.lat} 
		lng={marker.lat} 
		range={marker.range} 
	  />
	))}
	</ul>
  );
}

function VehicleItem({ idx, vehicle_name, vehicle_type="car", lat, lng, range }) {
  const imgUrl = `./img/marker-${vehicle_type}.png`; 
  return (
	<li className="vehicle-item">
	  <img src={imgUrl} className="map-marker" alt="V" />
	  <div className="content">
		<h3 className="header">DW {vehicle_name}X</h3>
		<div className="position"><b>pozycja:</b> {Math.round(lat * 10000000) / 10000000}, {Math.round(lng * 10000000) / 10000000}</div>
		<div className="range"><b>zasięg:</b> {range}km</div>
	  </div>
	</li>
  );
}

export default GoogleApiWrapper({
  apiKey: (GOOGLE_API_KEY),
  language: 'pl',
})(App);
