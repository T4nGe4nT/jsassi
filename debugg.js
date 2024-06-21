
// Edited Array to have diffrent values
const storeOwners = [
    {
      name: 'Danny Shavez',
      stores: 1,
      location: "AZ",
    },
    {
      name: 'Beatrice Traxlonamous',
      stores: 2,
      location: "NC",
    },
    {
      name: 'Tombert Slinko',
      stores: 3,
      location: "NY",
    },
    {
      name: 'Cleadus Wessen',
      stores: 4,
      location: "TX",
    },
  ];
  
  const listNumberOfStores = function () {
    for (let i = 0; i < storeOwners.length; i++) {
      let totalLocations = totalLocations + storeOwners.stores;
    }
    return i;
  };
  
  let locations = listNumberOfStores;
  
  function tellMeMyStores() {
    console.log('Hey, can you tell me who owns stores?'); // Edited copy to make output make sense.
    if (locations > 0) {
      console.log('Of course, we have ' + locations + ' stores');
    }
  }
  
  // This function was broken in 3 places. First the variables defined did not refrence the array correctly.
  // The second was that the console log incorrectly used a template literal that did not call back to the variables defined.
  function hasStore() {
    for (let i = 0; i < storeOwners.length; i++) {
      let person = storeOwners[i].name;
      let location = storeOwners[i].location; // Location was also set to a function instead of a variable.
      let count = storeOwners[i].stores;
      console.log(`Yes, ${person} has ${count} in ${location}`);
    }
  
  }
  
  tellMeMyStores();
  hasStore();