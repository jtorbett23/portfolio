import {shallow} from 'enzyme'
import {expect as exp} from 'chai';
import Article from './Article'

describe('Article Component Tests', ()=>{
    let wrapper
    it('should render without error', ()=> {
        wrapper = shallow(<Article />)
    })

    it('should render the correct title',()=>{
        const testArticle = {title: 'Test Article'}
        wrapper = shallow(<Article article={testArticle} />)
        
        exp(wrapper.find('div')).to.have.text(testArticle.title)
    })

})