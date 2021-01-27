import {shallow} from 'enzyme'
import {expect as exp} from 'chai';
import Intro from './Intro'


describe('Intro Container Tests', ()=>{
    let wrapper
    it('should render without error', ()=> {
        wrapper = shallow(<Intro />)
    })

    it('should render the text passed to it', ()=>{
        const testText = 'Test'
        wrapper = shallow(<Intro text={testText}/>)
        exp(wrapper.find('div')).to.have.text(testText)
    })
})

