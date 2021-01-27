import {shallow} from 'enzyme'
import {expect as exp} from 'chai';
import Article from './Article'

describe('Article Component Tests', ()=>{
    let wrapper
    it('should render without error', ()=> {
        wrapper = shallow(<Article />)
    })

    it('should render the correct content',()=>{
        const testArticle = {
            title: 'Test Article',
            url: 'www.example.com',
            description: 'A test article'
    }
        wrapper = shallow(<Article article={testArticle} />)
        
        exp(wrapper.find('h3').find('a')).to.have.text(testArticle.title)
        exp(wrapper.find('h3').find('a')).to.have.attr('href', testArticle.url)
        exp(wrapper.find('p')).to.have.text(testArticle.description)


    })

})