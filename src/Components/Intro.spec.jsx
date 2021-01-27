import Intro from './Intro'
import {shallow} from 'enzyme'
import {expect as exp} from 'chai';

describe('Intro Component Tests', ()=>{
    it('should render without error', ()=> {
        const wrapper = shallow(<Intro />)
    })
})

