import Article from './Article'
import ArticleRepository from './ArticleRepository'

import Author from './Author'
import AuthorRepository from './AuthorRepository'

export default class BlogService {
    public constructor(private articleRepo: ArticleRepository, private authorRepo: AuthorRepository) { }

    public createAuthor(forename: string, surname: string) {
        const author = new Author(forename, surname)
        this.authorRepo.save(author)
        return author
    }

    public createArticle(author: Author, headline: string, content: string) {
        const article = new Article({ headline, content, author })
        this.articleRepo.save(article)
        return article
    }
}
