realm.write(() => {
    realm.create('book', 
    {title: 'the lord of the rings', 
    author: 'j.r.r. tolkien', 
    synopsis: 'a book about a ring and its power struggle',
     date: '10.04.2020'});
  });
  const book = realm.objects("book");