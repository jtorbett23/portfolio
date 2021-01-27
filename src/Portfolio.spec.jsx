import {shallow} from 'enzyme'
import {expect as exp} from 'chai';
import Portfolio from './Portfolio'
import Intro from './Containers/Intro/Intro'
import Projects from './Containers/Projects/Projects'

describe('Portfolio Tests', ()=>{
    let wrapper
    it('should render without error', ()=> {
        wrapper = shallow(<Portfolio />)
    })
    it('should contain one Intro container', ()=>{
        wrapper = shallow(<Portfolio />)
        exp(wrapper.find(Intro)).to.have.length(1)  
    })
    it('should contain one Projects container',()=>{
        wrapper = shallow(<Portfolio />)
        exp(wrapper.find(Projects)).to.have.length(1)
    })
})

