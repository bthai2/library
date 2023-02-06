function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () => {
        let s = `${title} by ${author}, ${pages} pages, `;
        (read) ? s += 'read' : s += 'not read yet';
        return s;
    }
}