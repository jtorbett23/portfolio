import {shallow} from 'enzyme'
import {expect as exp} from 'chai';
import Portfolio from './Portfolio'
import Intro from './Containers/Intro/Intro'
import Articles from './Containers/Articles/Articles'
import Projects from './Containers/Projects/Projects'
import Info from './Containers/Info/Info'

describe('Portfolio Tests', ()=>{
    let wrapper
    it('should render without error', ()=> {
        wrapper = shallow(<Portfolio />)
    })
    it('should contain the correct number of each container (1)', ()=>{
        wrapper = shallow(<Portfolio />)
        exp(wrapper.find('h1')).to.have.length(1)
        exp(wrapper.find('h1')).to.have.text("Portfolio")
        exp(wrapper.find(Intro)).to.have.length(1)  
        exp(wrapper.find(Projects)).to.have.length(1)
        exp(wrapper.find(Articles)).to.have.length(1)
        exp(wrapper.find(Info)).to.have.length(1)
    })
   
})

