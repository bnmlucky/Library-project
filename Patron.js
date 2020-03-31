class Patron {
    constructor(name, email, currentBook) {
        this.name = name;
        this.email = email;
        this.currentBook = null;
    }

    set out(out) {
        this._out = out;

        if (out) {
            const newDueDate = new Date();
            newDueDate.setDate(newDueDate.getDate + 14);
            this.dueDate = newDueDate;
        } else {
            this.dueDate = null;
        }
    }

    get out() {
        return this._out;
    }

    checkOut(book) {
        this.currentBook = book;
        book.out = true;
        book.patron = this;
    }

    returnBook(book) {
        this.currentBook = null;
        book.out = false;
        book.patron = null;
    }
}