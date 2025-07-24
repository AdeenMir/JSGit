const myLibrary=[];

function Book(title,author,pages,read){
  this.id=crypto.randomUUID();
  this.title=title;
  this.author=author;
  this.pages=pages;
  this.read=read;
}

Book.prototype.toggleRead=function(){
  this.read=!this.read;
};

function addBookToLibrary(title,author,pages,read){
  const book=new Book(title,author,pages,read);
  myLibrary.push(book);
  displayBooks();
}

function displayBooks(){
  const container=document.getElementById('books-container');
  container.innerHTML='';
  myLibrary.forEach(book=>{
    const card=document.createElement('div');
    card.classList.add('book-card');
    card.setAttribute('data-id',book.id);

    const title=document.createElement('h3');
    title.textContent=book.title;

    const author=document.createElement('p');
    author.textContent=`Author: ${book.author}`;

    const pages=document.createElement('p');
    pages.textContent=`Pages: ${book.pages}`;

    const readStatus=document.createElement('p');
    readStatus.textContent=`Read: ${book.read}`;

    const toggleBtn=document.createElement('button');
    toggleBtn.textContent='Toggle Read';
    toggleBtn.addEventListener('click',()=>{
      book.toggleRead();
      displayBooks();
    });

    const deleteBtn=document.createElement('button');
    deleteBtn.textContent='Remove';
    deleteBtn.addEventListener('click',()=>{
      removeBook(book.id);
    });

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(readStatus);
    card.appendChild(toggleBtn);
    card.appendChild(deleteBtn);

    container.appendChild(card);
  });
}

function removeBook(id){
  const index=myLibrary.findIndex(book=>book.id===id);
  if(index!==-1){
    myLibrary.splice(index,1);
    displayBooks();
  }
}

document.getElementById('new-book-form').addEventListener('submit',e=>{
  e.preventDefault();
  const title=document.getElementById('title').value;
  const author=document.getElementById('author').value;
  const pages=parseInt(document.getElementById('pages').value,10);
  const read=document.getElementById('read').checked;
  addBookToLibrary(title,author,pages,read);
  e.target.reset();
  document.getElementById('book-dialog').close();
});

document.getElementById('new-book-btn').addEventListener('click',()=>{
  document.getElementById('book-dialog').showModal();
});
