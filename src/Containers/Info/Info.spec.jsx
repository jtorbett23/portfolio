import {shallow} from 'enzyme'
import {expect as exp} from 'chai';
import Info from './Info'


describe('Intro Container Tests', ()=>{
    let wrapper
    it('should render without error', ()=> {
        wrapper = shallow(<Info />)
    })
})