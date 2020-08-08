var WebHooks = require('node-webhooks')

webHooks = new WebHooks({
  db: {"addPost": ["https://api.line.me/v2/bot/message/broadcast"]}
});
// sync instantation - add a new webhook called 'shortname1'
webHooks.add('shortname1', 'https://api.line.me/v2/bot/message/broadcast').then(function(){
    // done
}).catch(function(err){
    console.log(err)
})

webHooks.trigger('shortname1', {Bearer: "odjfm69tFaQyIZxKKtnKbfYaB09rVlTyQCtFzDrDAA6xUSxwKWrw2oxevPvEKZmdNnlHmuPfJUqbZkK4kRVJbJue8nLx/VRB/8gqSrbmxneJSZbKUhEsBSmDnSr1+Rtjl+3bg9unyeD3HhPwnf73PAdB04t89/1O/w1cDnyilFU="})
