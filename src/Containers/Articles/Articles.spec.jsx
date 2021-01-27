import {shallow} from 'enzyme'
import {expect as exp} from 'chai';
import Articles from './Articles'
import Article from '../../Components/Article/Article'

describe('Articles Container Tests', ()=>{
    let wrapper
    it('should render without error', ()=> {
        wrapper = shallow(<Articles />)
    })

    it('should render the correct amount of Article components',()=>{
        const articlesData = [
            {
                title: 'Article 1'
            },
            {
                title: 'Article 2'
            }
        ]
        wrapper = shallow(<Articles articles={articlesData}/>)

        exp(wrapper.find(Article)).to.have.length(articlesData.length)

    })

})