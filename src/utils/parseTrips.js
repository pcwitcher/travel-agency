import countries from '../data/countries.json';

const parseTrips = (trips, setStates) => {
  const newState = {
    countries: {},
    regions: {},
    subregions: {},
    tags: {},
  };

  for(let trip of trips){

    /* add country to newState.countries */
    if(typeof(newState.countries[trip.country.code]) == 'undefined'){
      const countryDetails = countries.filter(item => item.alpha3Code == trip.country.code)[0] || {};
      newState.countries[trip.country.code] = JSON.parse(JSON.stringify(countryDetails));
      newState.countries[trip.country.code].trips = [trip.id];
    } else {
      newState.countries[trip.country.code].trips.push(trip.id);
    }

    /* add all tags to newState.tags */
    for(let tag of trip.tags){
      if(typeof(newState.tags[tag]) == 'undefined'){
        newState.tags[tag] = {trips: [trip.id]};
      } else {
        newState.tags[tag].trips.push(trip.id);
      }
    }
  }

  for(let countryCode in newState.countries){
    const country = newState.countries[countryCode];

    /* add region to newState.regions */
    if(typeof(newState.regions[country.region]) == 'undefined'){
      newState.regions[country.region] = {
        countries: [country.alpha3Code],
        subregions: [country.subregion],
      };
    } else if(newState.regions[country.region].subregions.indexOf(country.subregion) == -1) {
      newState.regions[country.region].subregions.push(country.subregion);
      newState.regions[country.region].countries.push(country.alpha3Code);
    } else if(newState.regions[country.region].countries.indexOf(country.alpha3Code) == -1) {
      newState.regions[country.region].countries.push(country.alpha3Code);
    }

    /* add subregion to newState.subregions */
    if(typeof(newState.subregions[country.subregion]) == 'undefined'){
      newState.subregions[country.subregion] = {
        region: country.region,
        countries: [country.alpha3Code],
      };
    } else if(newState.subregions[country.subregion].countries.indexOf(country.alpha3Code) == -1) {
      newState.subregions[country.subregion].countries.push(country.alpha3Code);
    }
  }

  setStates(newState);
};

export default parseTrips;
