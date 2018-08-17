import { createSelector } from  'reselect'


//простые селекторы (достают данные из store)
const filtersGetter = state => state.filters
const articlesGetter = state => state.articles
const commentsGetter = state => state.comments
const idGetter = (state, props) => props.id

export const filtratedArticlesSelector = createSelector(articlesGetter, filtersGetter, (articles, filters) => {
    const {selected, dateRange: {from, to}} = filters

    console.log('---', 'recomputing filttration')

    return  articles.filter(article => {
        const published = Date.parse(article.date)
        const lol = selected.map(select=> select.value)
        return (!selected.length || lol.includes(article.id)) &&
            (!from || !to || (published > from && published < to))
    })
})

export const commentSelectorFactory = () => createSelector(commentsGetter,idGetter, (comments, id) => {
    return comments.find(comment => comment.id === id)
})