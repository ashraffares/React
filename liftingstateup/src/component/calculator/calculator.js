import React from 'react';
import TemperatureInput from '../temperatureInput';

const BoilingVerdict = props => {
    if (props.celsius >= 100) {
        return <p> The water would boil.</p>;
    }
    return <p>The water wourld not boil.</p>;
}

const toCelsius = f => {
    return (f - 32) * 5 / 9;
}

const tofahrenheit = c => {
    return (c  * 9 / 5) + 32;
}

const tryConvert = (temperature, convert) => {
    const input = parseFloat(temperature);
    if( Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = {
            temperature: '',
            scale: 'c'
        }
    }
    handleCelsiusChange(temperature){
        this.setState({scale: 'c', temperature});
      }
    
    handleFahrenheitChange(temperature) {
        this.setState({scale: 'f', temperature});
    }
    render () {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, tofahrenheit) : temperature;
        return (
            <div>
             <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange} />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange} />
        <BoilingVerdict
          celsius={parseFloat(celsius)} />
            </div>
        )
    }
}

export default Calculator;