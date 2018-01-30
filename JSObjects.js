let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];
//
// for(let student in students){
//   console.log("Name: "+ students[student].name+", cohort: "+students[student].cohort);
// }


let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

 function printArrayWithNumOfChars2(data){

    for(key in data){
      console.log(key);
      for(var i=0;i<data[key].length;i++){

        console.log((i+1)+" - "+data[key][i].last_name.toUpperCase()+","+data[key][i].first_name.toUpperCase()+" - "+(data[key][i].first_name.length+data[key][i].last_name.length));
      }
    }

  }

  printArrayWithNumOfChars2(users);
