const challenges = {
    'Cider & Shadows': [
        'A cozy mystery 🍂',
        'A book with an orange cover 🎃',
        'A book that\'s been on your TBR for over a year 📚',
        'A comfort reread for chilly nights 🔥',
        'A book set in a small town 🍁',
        'A book recommended by a friend ✨'
    ],
    "Witch's Brew": [
        'A story with a familiar or animal companion',
        'A magic system you\'d actually want to learn',
        'A book set in a magical school or coven',
        'A spell gone wonderfully wrong',
        'A midnight ritual scene'
    ],
    'Haunted Library': [
        'A haunted house story',
        'A ghost story that gave you actual chills',
        'A book with a séance or Ouija board',
        'Something set in a cemetery or crypt',
        'A horror novel by an author you\'ve never tried',
        'A spooky short-story collection'
    ],
    'Sweater Weather': [
        'A comfort reread',
        'A cozy romance',
        'A book that feels like a warm blanket',
        'A childhood favorite',
        'Something you\'d read with a mug of cider'
    ],
    'Orchard & Oven': [
        'A book featuring a bakery or café',
        'A harvest or farm setting',
        'A cooking scene that made you hungry',
        'A character who\'s a chef or baker',
        'A book with food on the cover',
        'A story set at a farmers market or fair'
    ],
    'Tales by Candlelight': [
        'A classic gothic novel',
        'A crumbling manor or castle setting',
        'A brooding, mysterious stranger',
        'A book with a dark family secret',
        'Something written before 1900',
        'A candlelit or stormy-night scene'
    ],
    'The Great Pumpkin': [
        'A book with an orange cover',
        '"Fall" or "autumn" in the title',
        'A pumpkin patch or corn maze scene',
        'A talking animal character',
        'A book set during Halloween',
        'The silliest book on your TBR'
    ]
};

const args = process.argv.slice(2);

function pickRandom(array) {
    const index = Math.floor(Math.random() * array.length);
    return array[index];
}

if (args[0] === 'all') {
    Object.keys(challenges).forEach(function(name) {
        console.log(name + ': ' + pickRandom(challenges[name]));
    });
} else if (args[0]) {


if (args[0]) {
    const name = Object.keys(challenges).find(function(key) {
        return key.toLowerCase() === args[0].toLowerCase();
    });
    if (!name) {
        console.log('No challenge named "' + args[0] + '"');
        console.log('Challenges: ' + Object.keys(challenges).join(', '));
    } else {
        console.log(name + ': ' + pickRandom(challenges[name]));
    }
} else {
    const names = Object.keys(challenges);
    const name = pickRandom(names);
    console.log(name + ': ' + pickRandom(challenges[name]));
}}
