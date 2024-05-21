export class Tag{

    static readonly ANGULAR = new Tag("Angular", "red");
    static readonly TYPESCRIPT = new Tag("TypeScript", "blue");
    static readonly PYTHON = new Tag("Python", "green");
    static readonly CSHARP = new Tag("C#", "grey");
    static readonly NODEJS = new Tag("NodeJS", "lightgreen");
    static readonly ASPNET = new Tag("ASP.NET", "lightgrey");
    static readonly JAVASCRIPT = new Tag("JavaScript", "yellow");
    static readonly REACT = new Tag("React", "purple");
    static readonly JAVA = new Tag("Java", "orange");


    private constructor(private readonly key: string, readonly color: string){

    }

    toString(){
        return this.key;
    }
}