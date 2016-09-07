/* Task Description */
/* 
 *	Create a module for working with books
 *	The module must provide the following functionalities:
 *	Add a new book to category
 *	Each book has unique title, author and ISBN
 *	It must return the newly created book with assigned ID
 *	If the category is missing, it must be automatically created
 *	List all books
 *	Books are sorted by ID
 *	This can be done by author, by category or all
 *	List all categories
 *	Categories are sorted by ID
 *	Each book/catagory has a unique identifier (ID) that is a number greater than or equal to 1
 *	When adding a book/category, the ID is generated automatically
 *	Add validation everywhere, where possible
 *	Book title and category name must be between 2 and 100 characters, including letters, digits and special characters ('!', ',', '.', etc)
 *	Author is any non-empty string
 *	Unique params are Book title and Book ISBN
 *	Book ISBN is an unique code that contains either 10 or 13 digits
 *	If something is not valid - throw Error
 */
function solve() {
    var library = (function() {
        var books = [];
        var categories = [];

        function listBooks(param) {
            function findCategory(te) {
                if (te.category === param) {
                    return te;
                }
            }
            if (param) {
                var filtered = books.filter(findCategory);

                return filtered;

            } else {
                return books;
            }
        }

        function addBook(book) {
            // validation

            if ((book.title.length < 2 || book.title.length > 100)) {
                throw Error;
            }

            if (/^[a-z0-9.,!:;]+$/ig.test(book.title)) {
                throw Error;
            }

            var isTitleExist = false;
            books.forEach(function(oldBook) {
                if (oldBook.title === book.title) {
                    isTitleExist = true;
                }
            });
            if (isTitleExist) {
                throw Error;
            }



            if (!(typeof(book.author) === 'string' && book.author.length > 0)) {
                throw Error;
            }

            if (!/^[0-9]{10}$|^[0-9]{13}$/g.test(book.isbn)) {
                throw Error;
            }

            var ISBNExist = false;
            books.forEach(function(oldBook) {
                if (oldBook.isbn === book.isbn) {
                    ISBNExist = true;
                }
            });
            if (ISBNExist) {
                throw Error;
            }


            book.ID = books.length + 1;
            books.push(book);
            var isCategoryExist = false;
            categories.forEach(function checkForExsist(oldcategory) {
                if (oldcategory === book.category) {
                    isCategoryExist = true;
                }
            });
            if (!isCategoryExist) {
                categories.push(book.category);

            }

            return book;
        }



        function listCategories() {

            return categories;

        }

        return {
            books: {
                list: listBooks,
                add: addBook
            },
            categories: {
                list: listCategories
            }
        };
    }());

    // var CONSTS = {
    //     VALID: {
    //         BOOK_TITLE: 'BOOK #',
    //         BOOK_ISBN: {
    //             TEN_DIGITS: '1234567890',
    //             THIRTEEN_DIGITS: '1234567890123',
    //         },
    //         AUTHOR: 'John Doe',
    //         CATEGORY: 'Book Category'
    //     },
    //     INVALID: {
    //         BOOK_TITLE: {
    //             SHORT: 'B',
    //             LONG: new Array(102).join('A')
    //         },
    //         AUTHOR: '',
    //         BOOK_ISBN: '1234'
    //     }
    // };

    // var bookToAdd = {
    //     title: "telgfk.!r",
    //     isbn: "1234567890",
    //     author: "",
    //     category: "efrs"
    // };
    // var book = library.books.add(bookToAdd);
    // var b1 = {
    //     title: 'BOOK #1',
    //     isbn: '1234567890123',
    //     author: 'John Doe',
    //     category: 'Book Categry'
    // };
    // var b3 = {
    //     title: 'BOOK #3',
    //     isbn: '1234547893',
    //     author: 'John Doe',
    //     category: 'Book Categry'
    // };
    var b2 = {
        author: "John Doe",
        category: "Book Category",
        isbn: "1234567890123",
        title: "BOOK #"
    };
    // };
    // library.books.add(b1);
    library.books.add(b2);
    // library.books.add(b3);

    console.log(library.books.list());
    console.log();
    console.log(library.books.list('Book Category'));

    // console.log(library.categories.list('Book Category'));
    return library;
}
module.exports = solve;

solve();