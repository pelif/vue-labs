const values = [
    {
        id: 1, 
        name: 'One'
    },
    {
        id: 2,
        name: 'Two'
    },
    {
        id: 3,
        name: 'Three'
    }
]; 

let objTest = {
    id: 2, 
    name: 'Two'
};

let count = 0; 
values.map((el) => {
    if(el.id === objTest.id) {
        values.splice(count, 1); 
    }
    count++;    
}); 

console.log(values)

