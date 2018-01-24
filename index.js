// Data
var restaurants = [
  {
    name: "un sandwich",
    address: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.776777792625!2d2.2867265509863577!3d48.88153177918815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66f8dc1e2c997%3A0x8d502dc5a87fdacd!2s31+Rue+Guersant%2C+75017+Paris!5e0!3m2!1sfr!2sfr!4v1476881885985",
    color: "#e67e22"
  },
  {
    name: "des sushis",
    address: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.4455756732664!2d2.3070863!3d48.8878449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fa35aa2cee1%3A0x788b41eb9f38416b!2sFuji+Tomy!5e0!3m2!1sfr!2sfr!4v1476881695623",
    color: "#c0392b"
  },
  {
    name: "un faat burger",
    address: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.663434687336!2d2.2885171153474704!3d48.88369230687952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fdf11dc1729%3A0x8d9c31adc67a4a0b!2sEat'n+Drink!5e0!3m2!1sen!2sfr!4v1476883029565",
    color: "#3498db"
  },
  {
    name: "une salade",
    address: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.657633865056!2d2.2902912131227766!3d48.883802879289945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66f91bd8617e3%3A0xcff45f5a81eceb92!2sGREEN'WICH!5e0!3m2!1sen!2sfr!4v1476883154320",
    color: "#2ecc71"
  },
  {
    name: "un Grò bún",
    address: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.883526946228!2d2.29300981541921!3d48.87949687928959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66f937a3969f1%3A0xf690bbd4a8ffa0ea!2sLa+Phyliale!5e0!3m2!1sfr!2sfr!4v1476890270147",
    color: "#16a085"
  },
  {
    name: "une entrecôte",
    address: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10494.84635724951!2d2.2911689!3d48.8827744!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1d688f01392b48ba!2zTGUgQsOiLVllbiBDYWbDqQ!5e0!3m2!1sfr!2sfr!4v1476891778763",
    color: "#e74c3c"
  },
  {
    name: "pizza",
    address: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.7644391778417!2d2.2866462154193044!3d48.881766979289814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66f8dc28b1f7f%3A0x31b84c5c5f2f12d7!2sVilla+des+Ternes!5e0!3m2!1sfr!2sfr!4v1476891957951",
    color: "#34495e"
  },
  {
    name: "de la bouffe saine",
    address: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10495.234793803322!2d2.2919062!3d48.8809233!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd3f8afde45d6e6ba!2sCOCOTTE+CANTINE!5e0!3m2!1sfr!2sfr!4v1476892143018",
    color: "#1abc9c"
  },
]

var button_texts = [
  "Bof...", "Autre chose !", "Pas aujourd'hui !", "On a déjà mangé ça hier",
]

// Business logic
function randomize (list) {
  var index = Math.floor((Math.random() * list.length));
  return list[index]
}

// Visual components : props -> html
var Map = React.createClass({
  propTypes: {
    url: React.PropTypes.string
  },
  render: function() {
    return (
      <iframe src={this.props.url} width="100%" height="400" frameBorder="0" allowFullScreen></iframe>
    )
  }
})

var Restaurant = React.createClass({
  propTypes: {
    restaurant_to_show: React.PropTypes.object
  },
  render: function() {
    var title_style = {
      backgroundColor:this.props.restaurant_to_show.color,
      color:"#ecf0f1",
      textAlign: "center",
    }
    return (
      <div>
        <div style={title_style}>
          <br/>
          <h3>
            {this.props.restaurant_to_show.name} ?
          </h3>
          <br/>
        </div>
        <Map url = {this.props.restaurant_to_show.address}/>
      </div>
    )
  }
})

// Orchestration components
// - choose which restaurant to display
// State : current_restaurant
var Randomizer = React.createClass({
  getInitialState: function() {
    return {
      current_restaurant: randomize(restaurants)
    }
  },
  // To call when we want to change the restaurant
  refresh: function() {
    this.setState({
      current_restaurant: randomize(restaurants)
    })
  },
  render: function() {
    return (
      <div>
        <Restaurant restaurant_to_show={this.state.current_restaurant}/>
        <button onClick={this.refresh} className="btn btn-primary btn-block btn-outlined">{randomize(button_texts)}</button>
      </div>
    )
  }
})

ReactDOM.render(
  <Randomizer/>,
  document.getElementById('container')
);
