import React, { Component } from 'react';
import axios from 'axios';
import xml2js from 'xml2js';
import numeral from 'numeral';
import CountryCodes from '../data/CountryCodes';
import CountryNames from '../data/CountryNames';

const URL = "stats.oecd.org/restsdmx/sdmx.ashx/GetData/BLI/";
const params = ".IW_HADI+JE_EMPL+ES_EDUA+EQ_AIRP+EQ_WATER+HS_LEB+SW_LIFS+PS_FSAFEN+PS_REPH+WL_TNOW.L.TOT/?all";
let location, indicator, measure, inequality = "";

class InfoCard extends Component {
 	state = {}

	componentWillMount() {
	  const that = this;
	  const countryCode = CountryCodes[this.props.countryCode];
      const request = axios.create({
	    baseURL: 'https://stats.oecd.org/restsdmx/sdmx.ashx/GetData/BLI/',
		proxy: {
		    host: '151.101.1.195'
		  }
	  });


	  request.get(countryCode + params)
	  .then(function (response) {
	    xml2js.parseString(response.data, function(err, result) {
	      that.setState({
	      	noInternet: false,
	      	undefinedCountry: false,
	        error: false,
	        country: CountryNames[that.props.countryCode],
	        IW_HADI: numeral(result["message:MessageGroup"]["DataSet"][0]["Series"][0]["Obs"][0]["ObsValue"][0]["$"].value).format("$ 0,0") + " (USD)",
	        JE_EMPL: result["message:MessageGroup"]["DataSet"][0]["Series"][1]["Obs"][0]["ObsValue"][0]["$"].value + " %",
	        ES_EDUA: result["message:MessageGroup"]["DataSet"][0]["Series"][2]["Obs"][0]["ObsValue"][0]["$"].value + " %",
	        EQ_AIRP: result["message:MessageGroup"]["DataSet"][0]["Series"][3]["Obs"][0]["ObsValue"][0]["$"].value + " µg/m³",
	        EQ_WATER: result["message:MessageGroup"]["DataSet"][0]["Series"][4]["Obs"][0]["ObsValue"][0]["$"].value + " %",
	        HS_LEB: result["message:MessageGroup"]["DataSet"][0]["Series"][5]["Obs"][0]["ObsValue"][0]["$"].value + " years",
	        SW_LIFS: result["message:MessageGroup"]["DataSet"][0]["Series"][6]["Obs"][0]["ObsValue"][0]["$"].value + "/10",
	        PS_FSAFEN: result["message:MessageGroup"]["DataSet"][0]["Series"][9]["Obs"][0]["ObsValue"][0]["$"].value + "%",
	        PS_REPH: result["message:MessageGroup"]["DataSet"][0]["Series"][7]["Obs"][0]["ObsValue"][0]["$"].value + " (per 100,000 pop.)",
	        WL_TNOW: result["message:MessageGroup"]["DataSet"][0]["Series"][8]["Obs"][0]["ObsValue"][0]["$"].value + " hours"
	      });
	    });
	  })
	  .catch(function (error) {
	  	if(error.response == null) {
	  		that.setState({ noInternet: true });
	  	} else if(error.response.status === 400) {
			that.setState({ undefinedCountry: true });
		} else {
		    that.setState({ error: true });
		}
	  });
	}

	render() {
		if(this.state.noInternet) {
		  return <div id="info-card"><p className="message">CHECK YOUR INTERNET CONNECTION</p></div>;
		}

		if(this.state.undefinedCountry) {
		  return <div id="info-card"><p className="message">THIS IS NOT AN OECD COUNTRY</p></div>;
		}

		if(this.state.error) {
		  return <div id="info-card"><p className="message">SOMETHING WENT WRONG! :(<br/>TRY REFRESHING THE PAGE</p></div>;
		}

	    if(this.state.IW_HADI == null) {
	      return <div id="info-card"><p className="message">LOADING</p></div>;
	    }

	    return (
	      <div id="info-card">
	        <h2>{this.state.country}</h2>
	        <span className="leftEl">Household income:</span> <span className="rightEl">{this.state.IW_HADI}</span><br/><br/>

	        <span className="leftEl">Employment rate:</span> <span className="rightEl">{this.state.JE_EMPL}</span><br/><br/>

	        <span className="leftEl">Educational attainment:</span> <span className="rightEl">{this.state.ES_EDUA}</span><br/><br/>

	        <span className="leftEl">Air pollution:</span> <span className="rightEl">{this.state.EQ_AIRP}</span><br/><br/>

	        <span className="leftEl">Water quality:</span> <span className="rightEl">{this.state.EQ_WATER}</span><br/><br/>

	        <span className="leftEl">Life expectancy:</span> <span className="rightEl">{this.state.HS_LEB}</span><br/><br/>

	        <span className="leftEl">Life satisfaction:</span> <span className="rightEl">{this.state.SW_LIFS}</span><br/><br/>

	        <span className="leftEl">Safety walking alone at night:</span> <span className="rightEl">{this.state.PS_FSAFEN}</span><br/><br/>

	        <span className="leftEl">Homicide rate:</span> <span className="rightEl">{this.state.PS_REPH}</span><br/><br/>

	        <span className="leftEl">Leisure time:</span> <span className="rightEl">{this.state.WL_TNOW}</span><br/>
	      </div>
	    );
  	}

}

export default InfoCard;
