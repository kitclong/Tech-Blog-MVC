const { Post } = require('../models');

const postData = [
    {
        title: 'Dog',
        post_text: 'The domestic dog (Canis familiaris or Canis lupus familiaris) is a domesticated descendant of the wolf. The dog derived from an ancient, extinct wolf, and the modern grey wolf is the dogs nearest living relative. The dog was the first species to be domesticated, by hunter–gatherers over 15,000 years ago, before the development of agriculture. Their long association with humans has led dogs to be uniquely adapted to human behavior, leading to a large number of domestic individuals and the ability to thrive on a starch-rich diet that would be inadequate for other canids.',
        user_id: 1,
    },
    {
        title: 'Bird',
        post_text: 'Birds are a group of feathered theropod dinosaurs and constitute the only living dinosaurs. Likewise, birds are considered reptiles in the modern cladistic sense of the term, and their closest living relatives are the crocodilians. Birds are descendants of the primitive avialans (whose members include Archaeopteryx) which first appeared about 160 million years ago (mya) in China. According to DNA evidence, modern birds (Neornithes) evolved in the Middle to Late Cretaceous, and diversified dramatically around the time of the Cretaceous–Paleogene extinction event 66 mya, which killed off the pterosaurs and all non-avian dinosaurs.',
        user_id: 2,
    },
    {
        title: 'Horse',
        post_text: 'Horse breeds are loosely divided into three categories based on general temperament: spirited "hot bloods" with speed and endurance; "cold bloods", such as draft horses and some ponies, suitable for slow, heavy work; and "warmbloods", developed from crosses between hot bloods and cold bloods, often focusing on creating breeds for specific riding purposes, particularly in Europe. There are more than 300 breeds of horse in the world today, developed for many different uses. ',
        user_id: 2,
    },
    {
        title: 'Turtle',
        post_text: 'Turtles are reptiles of the order Chelonia /kɪˈloʊniə/ or Testudines /tɛˈstjuːdɪniːz/. They are characterized by a bony or cartilaginous shell, developed from their ribs, that acts as a shield. Testudines include both extant (living) and extinct species. Its earliest known members date from the Middle Jurassic. They are one of the oldest reptile groups, more ancient than snakes or crocodilians. Among the turtles are included tortoises and terrapins. ',
        user_id: 3,
    },
    {
        title: 'Bunny',
        post_text: 'Although once considered rodents, lagomorphs like rabbits have been discovered to have diverged separately and earlier than their rodent cousins and have a number of traits rodents lack, like two extra incisors. ',
        user_id: 4,
    },
    {
        title: 'Frog',
        post_text: 'An adult frog has a stout body, protruding eyes, anteriorly-attached tongue, limbs folded underneath, and no tail (the tail of tailed frogs is an extension of the male cloaca). Frogs have glandular skin, with secretions ranging from distasteful to toxic. Their skin varies in colour from well-camouflaged dappled brown, grey and green to vivid patterns of bright red or yellow and black to show toxicity and ward off predators. Adult frogs live in fresh water and on dry land; some species are adapted for living underground or in trees.',
        user_id: 5,
    },
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;