import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import type { Book, BookShelf } from './interfaces/book.interface';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    const book: Omit<Book, 'id'> = {
      ...createBookDto,
      progress: 0,
      rating: null,
      quotes: [],
    };
    return this.booksService.create(book);
  }

  @Get()
  findAll(@Query('shelf') shelf?: BookShelf) {
    return this.booksService.findAll(shelf);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.booksService.update(+id, updateBookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.booksService.remove(+id);
  }
}