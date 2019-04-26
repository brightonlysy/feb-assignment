const boy = {
    name: 'joe',
    age: 14,
    hobbies: ['running', 'rafting']
}

if (boy.name === 'joe' && boy.age < 15){
    console.log('hi boy')
}
if (boy.hobbies.length < 2){
    console.log('I need more hobbies')
} else if (boy.name === 'joe' || boy.age > 16){
    console.log('I love running')
}