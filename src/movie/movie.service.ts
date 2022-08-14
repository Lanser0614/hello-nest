import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './Model/Movie';

@Injectable()
export class MovieService {
    private movies: Movie[] = [];

    getAll(): Movie[] {
        return this.movies;
    }

    getOne(id: string): Movie {
        const movie = this.movies.find((movie) => movie.id === parseInt(id));
        if (!movie) {
            throw new NotFoundException("Topilmadi");
        }
        return movie;
    }

    delete(id: string) {
        this.getOne(id);
        this.movies.filter((movie) => movie.id !== parseInt(id));
        // return true; 
    }


    store(movieData) {
        this.movies.push(
            {
                id: this.movies.length + 1,
                ...movieData
            }
        )
    }


    update(id: string, data){
        const movie = this.getOne(id);
        this.delete(id);
        this.movies.push(...movie, ...data)    
    }
}
