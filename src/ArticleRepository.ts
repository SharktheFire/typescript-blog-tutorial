import Article from './Article'
import Author from './Author'

export default class ArticleRepository {

    private articles: Article[]

    public constructor() {
        this.articles = []
    }

    public save(article: Article) {
        this.articles.push(article)
    }

    public findByAuthor(author: Author) {

        const result: Article[] = []

        this.articles.forEach((article) => {
            if (article.author === author) {
                result.push(article)
            }
        })

        return result
    }

    public findAll() {
        return this.articles
    }

    public delete(article: Article) {
        this.articles.splice(this.articles.indexOf(article), 1)
    }
}
