const { TeamMember } = require('../backend/model');

/* WARNING THIS WILL DROP THE CURRENT DATABASE */
seed();

async function seed() {
  // create table
  await TeamMember.sync({ force: true });
  // insert data
  await Promise.all([
    TeamMember.create({
      firstName: 'Bill',
      lastName: 'Bates',
      title: 'CEO',
      photoUrl:
        'https://images.hamodia.com/hamod-uploads/2020/08/Bill-Gates.-via-social-media.jpg',
      favoriteColor: '#4F52B1',
      story:
        'At Intuit I was leading an entirely distributed team with daily group video chats. My manager gave me the feedback that my facial expressions were making them feel as if I thought they were stupid. I was totally unaware of non-verbal communication being a “thing” and I felt awful. After correcting the behavior, those team members are now some of my closest friends and colleagues.'
    }),
    TeamMember.create({
      firstName: 'Elon',
      lastName: 'Dusk',
      title: 'CTO',
      photoUrl:
        'https://www.logomaker.com/wp-content/uploads/2013/05/Elon-Musk.jpg',
      favoriteColor: '#F2A745',
      story:
        'There have been many times in my career when candid, actionable feedback would have made a bad situation better, or a good situation more awesome. When I started as a manager, I received feedback that my enthusiasm during conversation steamrolls over other people. Receiving ongoing feedback on this has made me a much better listener, and in turn more effective in my work.'
    }),
    TeamMember.create({
      firstName: 'Jeff',
      lastName: 'Pezos',
      title: 'Founding Engineer',
      favoriteColor: '#FF4369',
      photoUrl:
        'https://suninme.org/img/stories/000/jeff-bezos.jpg',
      story:
        'While engaging in the art of communication, I find myself committing a million micro-failures every single day. I am finally aware of both my strengths and weaknesses thanks to the brutally honest feedback I have received. Realizing where I could improve was the first step in becoming a better version of myself. Feedback is just the right tool for that.'
    }),
    TeamMember.create({
      firstName: 'Mark',
      lastName: 'Ruckerberg',
      title: 'Founding Designer',
      favoriteColor: '#07BB87',
      photoUrl:
        'https://www.blogbrandz.com/tips/wp-content/uploads/2012/05/Mark-Zuckerberg1.jpg',
      story:
        'Some of the best feedback I received was “you don’t have to do your work alone.” I was an individual contributor working on a large cross-team initiative. I failed, and we decided to stop working on it. I later learned that when someone asks you to do something, it doesn’t mean they are looking for you to be the sole contributor. Ask for their help.'
    })
  ]);
}
