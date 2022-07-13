exports.seed = (knex) => {
  return knex('users')
    .del()
    .then(() =>
      knex('users').insert([
        {
          auth0_id: 'auth0|123',
          email: 'banana@user.com',
          username: 'bananalover',
          win_tally: 10,
          loss_tally: 5,
          total_earnings: 100,
          avatar: 'img/punk9052.png',
        },
        {
          auth0_id: 'auth0|567',
          email: 'watermelon@user.com',
          username: 'watermelonguy',
          win_tally: 12,
          loss_tally: 3,
          total_earnings: 50,
          avatar: 'img/punk9953.png',
        },
      ])
    )
}
