class Movie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
        }
        getpg(){                  //class method
            if(this.rating==" ") //if rating is empty rating will be assigned as PG.
            {
                this.rating="PG13";
                }
            if (this.rating=="PG13") //PG rated movies will returned in console.
            {
              return`${this.title} ${this.studio} ${this.rating}`;
            }
            
        }
    }

const movie= new Movie("Casino Royale","Eon Productions","PG13­");
console.log(movie.getpg());

