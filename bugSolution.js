```javascript
db.collection('users').findOne(query).then(doc => {
  if (doc) {
    // Document exists, perform update
    db.collection('users').updateOne(query, update).then(result => {
      console.log(result);
    }).catch(error => {
      console.error(error);
    });
  } else {
    // Document does not exist, perform insert
    db.collection('users').insertOne({ name: 'John Doe', age: 30 }).then(result => {
      console.log(result);
    }).catch(error => {
      console.error(error);
    });
  }
}).catch(error => {
  console.error(error);
});
```