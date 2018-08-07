import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Article from '../Article';
import accordion from '../../decorators/accordion';
import './style.css'

class ArticleList extends PureComponent {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        //from accordion
        openArticleId: PropTypes.string,
        toogleOpenItem: PropTypes.func.isRequired
    };

    render(){
        const { articles, openArticleId, toogleOpenItem } = this.props;
        const articleElements = articles.map((article) =>
            <li key={article.id} className='article-list_li' >
                <Article article = {article}
                         isOpen = {openArticleId === article.id}
                         toogleOpen={toogleOpenItem.bind(this, article.id)}
                />
            </li>);
        return(
            <ul>
                {articleElements}
            </ul>
        )
    }
}
export default accordion(ArticleList);