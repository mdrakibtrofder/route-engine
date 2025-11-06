import { Injectable } from '@nestjs/common';
import { Book, BookShelf } from './interfaces/book.interface';

@Injectable()
export class BooksService {
  private readonly books: Record<BookShelf, Book[]> = {
    reading: [
      {
        id: 1,
        title: 'Clean Architecture',
        author: 'Robert C. Martin',
        progress: 65,
        startDate: '2024-01-01',
        rating: null,
        notes: 'Great insights on software architecture principles',
        quotes: [
          'The architecture of a software system is the shape given to that system by those who build it.',
        ],
      },
      {
        id: 5,
        title: 'Domain-Driven Design',
        author: 'Eric Evans',
        progress: 45,
        startDate: '2024-02-15',
        rating: null,
        notes: 'Deep dive into strategic design patterns',
        quotes: [
          'The heart of software is its ability to solve domain-related problems.',
        ],
      },
      {
        id: 6,
        title: 'Refactoring',
        author: 'Martin Fowler',
        progress: 30,
        startDate: '2024-03-01',
        rating: null,
        notes: 'Learning to improve code design systematically',
        quotes: [
          'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        ],
      },
    ],
    completed: [
      {
        id: 2,
        title: 'Design Patterns',
        author: 'Gang of Four',
        progress: 100,
        startDate: '2023-10-15',
        endDate: '2023-12-20',
        rating: 5,
        notes: 'Essential patterns for software design',
        quotes: ['Program to an interface, not an implementation.'],
      },
      {
        id: 3,
        title: 'The Pragmatic Programmer',
        author: 'David Thomas & Andrew Hunt',
        progress: 100,
        startDate: '2023-08-01',
        endDate: '2023-09-30',
        rating: 5,
        notes: 'Life-changing book for developers',
        quotes: ["Don't live with broken windows."],
      },
      {
        id: 7,
        title: 'Code Complete',
        author: 'Steve McConnell',
        progress: 100,
        startDate: '2023-06-15',
        endDate: '2023-07-30',
        rating: 4,
        notes: 'Comprehensive guide to software construction',
        quotes: ['Good code is its own best documentation.'],
      },
      {
        id: 8,
        title: 'Working Effectively with Legacy Code',
        author: 'Michael Feathers',
        progress: 100,
        startDate: '2023-04-01',
        endDate: '2023-05-15',
        rating: 4,
        notes: 'Strategies for dealing with large, untested codebases',
        quotes: ['Legacy code is simply code without tests.'],
      },
    ],
    wishlist: [
      {
        id: 4,
        title: 'System Design Interview',
        author: 'Alex Xu',
        progress: 0,
        rating: null,
        notes: '',
        quotes: [],
      },
      {
        id: 9,
        title: 'Building Microservices',
        author: 'Sam Newman',
        progress: 0,
        rating: null,
        notes: 'Guide to designing fine-grained systems',
        quotes: [],
      },
      {
        id: 10,
        title: 'Designing Data-Intensive Applications',
        author: 'Martin Kleppmann',
        progress: 0,
        rating: null,
        notes: 'Deep dive into data systems',
        quotes: [],
      },
      {
        id: 11,
        title: 'Site Reliability Engineering',
        author: 'Niall Murphy',
        progress: 0,
        rating: null,
        notes: "Google's approach to service management",
        quotes: [],
      },
    ],
  };

  findAll(shelf?: BookShelf): Book[] | Record<BookShelf, Book[]> {
    if (shelf) {
      return this.books[shelf];
    }
    return this.books;
  }

  create(book: Omit<Book, 'id'> & { shelf: BookShelf }): Book {
    const newBook = { ...book, id: Date.now() };
    this.books[book.shelf].push(newBook);
    return newBook;
  }

  update(id: number, updatedBook: Partial<Book> & { shelf?: BookShelf }): Book {
    let currentBook: Book | undefined;
    let currentShelf: BookShelf | undefined;

    for (const shelf in this.books) {
      const bookIndex = this.books[shelf as BookShelf].findIndex(
        (b) => b.id === id,
      );
      if (bookIndex !== -1) {
        currentBook = this.books[shelf as BookShelf][bookIndex];
        currentShelf = shelf as BookShelf;
        break;
      }
    }

    if (!currentBook) {
      return null;
    }

    const newBookData = { ...currentBook, ...updatedBook };

    if (updatedBook.shelf && updatedBook.shelf !== currentShelf) {
      // Remove from old shelf
      this.books[currentShelf] = this.books[currentShelf].filter(
        (b) => b.id !== id,
      );
      // Add to new shelf
      this.books[updatedBook.shelf].push(newBookData);
    } else {
      // Update in the same shelf
      const bookIndex = this.books[currentShelf].findIndex((b) => b.id === id);
      this.books[currentShelf][bookIndex] = newBookData;
    }

    return newBookData;
  }

  remove(id: number): void {
    for (const shelf in this.books) {
      const bookIndex = this.books[shelf as BookShelf].findIndex(
        (b) => b.id === id,
      );
      if (bookIndex !== -1) {
        this.books[shelf as BookShelf].splice(bookIndex, 1);
        return;
      }
    }
  }
}