import {shallow} from 'enzyme'
import {expect as exp} from 'chai';
import Projects from './Projects'

describe('Project Container Tests', ()=>{
    let wrapper
    it('should render without error', ()=> {
        wrapper = shallow(<Projects />)
    })

})