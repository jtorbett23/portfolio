import Page from './Page'
import {shallow} from 'enzyme'
import {expect as exp} from 'chai';

describe('Page Component Tests', ()=>{
    it('should render without error', ()=> {
        const wrapper = shallow(<Page />)
    })
})

