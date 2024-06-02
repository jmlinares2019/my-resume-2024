export class Tag{

    // Frontend languages
    static readonly HTML = new Tag("HTML5", "html");
    static readonly CSS = new Tag("CSS3", "css");
    static readonly SASS = new Tag("Sass", "sass");
    static readonly JAVASCRIPT = new Tag("JavaScript", "javascript");
    static readonly TYPESCRIPT = new Tag("TypeScript", "typescript");
    // Frontend frameworks
    static readonly ANGULAR = new Tag("Angular", "angular");
    static readonly REACT = new Tag("React", "react");
    static readonly JQUERY = new Tag("jQuery", "jquery");

    // Backend languages
    static readonly PHP = new Tag("PHP", "php");
    static readonly PYTHON = new Tag("Python", "python");
    
    // Backend frameworks
    static readonly LARAVEL = new Tag("Laravel", "laravel");
    static readonly DJANGO = new Tag("Django", "django");
    
    // Others
    static readonly RESTAPI = new Tag("REST API", "api");
    static readonly JSON = new Tag("JSON", "json");
    static readonly WORDPRESS = new Tag("Wordpress", "wordpress");
    static readonly NODEJS = new Tag("NodeJS", "nodejs");
    static readonly GIT = new Tag("Git", "git");
    static readonly ACC = new Tag("Adobe Creative Cloud", "acc");

    private constructor(private readonly key: string, readonly value: string){

    }

    toString(){
        return this.key;
    }
}