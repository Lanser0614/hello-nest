import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { Movie } from './Model/Movie';
import { MovieService } from './movie.service';

@Controller('movie')
export class MovieController {
    constructor(private readonly movieService: MovieService){}


    @Get()
    getAll(): Movie[] {
        return this.movieService.getAll();
    }


    @Get('/:id')
    getOne(@Param('id') id: string): Movie {
        return this.movieService.getOne(id);
    }



    @Post()
    store(@Body() movieData) {
        return this.movieService.store(movieData);
    }


    @Delete('/:id')
    delete(@Param('id') id: string) {
        return this.movieService.delete(id);
    }


    @Patch('/:id')
    update(@Param('id') id: string, @Body() dto: string[]) {
        return "update movie";
    }
}
