const signs = ['Pisces', 'Aquarius', 'Capricorn'];

const messagePisces = 'You could experience chimerical chemistry in a dance of mutual seduction.';
const messageAquarius = 'Experiment beyond your everyday routine so you cross paths with unfamiliar faces.';
const messageCapricorn = 'As the moon in your resourceful second house clicks with clever Mercury in your ambitious tenth house, keep moving in the right direction, inch by inch, and you’ll get to the goal line faster than you expect.';

const chooseSign = () => {
    const number = Math.floor(Math.random() * 2);
    switch(number) {
        case 0:
            console.log(`Your sign is ${signs[0]}. Your prognose for today: ${messagePisces}`);
            break;
        case 1:
            console.log(`Your sign is ${signs[1]}. Your prognose for today: ${messageAquarius}`);
            break;
        case 2:
            console.log(`Your sign is ${signs[2]}. Your prognose for today: ${messageCapricorn}`);
            break;
    }
};