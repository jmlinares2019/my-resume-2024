export class Tag{

    // Frontend languages
    static readonly HTML = new Tag("HTML5", "");
    static readonly CSS = new Tag("CSS3", "");
    static readonly SASS = new Tag("Sass", "");
    static readonly JAVASCRIPT = new Tag("JavaScript", "");
    static readonly TYPESCRIPT = new Tag("TypeScript", "");
    // Frontend frameworks
    static readonly ANGULAR = new Tag("Angular", "");
    static readonly REACT = new Tag("React", "");
    static readonly JQUERY = new Tag("jQuery", "");

    // Backend languages
    static readonly PHP = new Tag("PHP", "");
    static readonly PYTHON = new Tag("Python", "");
    static readonly CSHARP = new Tag("C#", "");
    static readonly JAVA = new Tag("Java", "");
    
    // Backend frameworks
    static readonly LARAVEL = new Tag("Laravel", "");
    static readonly DJANGO = new Tag("Django", "");
    static readonly ASPNET = new Tag("ASP.NET", "");
    
    // Others
    static readonly JSON = new Tag("JSON", "");
    static readonly WORDPRESS = new Tag("Wordpress", "");
    static readonly NODEJS = new Tag("NodeJS", "");
    static readonly GIT = new Tag("Git", "");
    static readonly ACC = new Tag("Adobe Creative Cloud", "");

    



    private constructor(private readonly key: string, readonly color: string){

    }

    toString(){
        return this.key;
    }
}