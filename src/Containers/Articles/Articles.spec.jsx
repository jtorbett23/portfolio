import {shallow} from 'enzyme'
import {expect as exp} from 'chai';
import Articles from './Articles'

describe('Articles Container Tests', ()=>{
    let wrapper
    it('should render without error', ()=> {
        wrapper = shallow(<Articles />)
    })

})