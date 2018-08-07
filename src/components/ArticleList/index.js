import React, {PureComponent} from 'react';
import Article from '../Article';
import toogleOpen from '../../decorators/toogleOpen';
import './style.css'

class ArticleList extends PureComponent {

    render(){
        const { openArticleId, toogleOpen, articles } = this.props
        const articleElements = articles.map((article, index) =>
            <li key={article.id} className='article-list_li' >
                <Article article = {article}
                         isOpen = {openArticleId === article.id}
                         onButtonClick={toogleOpen.bind(this, article.id)}
                />
            </li>)
        return(
            <ul>
                {articleElements}
            </ul>
        )
    }

}
export default toogleOpen(ArticleList);