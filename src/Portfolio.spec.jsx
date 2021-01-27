import Portfolio from './Portfolio'
import Intro from './Components/Intro/Intro'
import {shallow} from 'enzyme'
import {expect as exp} from 'chai';

describe('Portfolio Component Tests', ()=>{
    it('should render without error', ()=> {
        const wrapper = shallow(<Portfolio />)
    })
    it('should contain one Intro component', ()=>{
        const wrapper = shallow(<Portfolio />)
        exp(wrapper.find(Intro)).to.have.length(1)  
    })
})

