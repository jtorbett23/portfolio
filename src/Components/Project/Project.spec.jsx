import {shallow} from 'enzyme'
import {expect as exp} from 'chai';
import Project from './Project'

describe('Project Container Tests', ()=>{
    let wrapper
    it('should render without error', ()=> {
        wrapper = shallow(<Project />)
    })

    it('should render the correct title',()=>{
        const testProject = {title: 'Test Project'}
        wrapper = shallow(<Project project={testProject} />)
        exp(wrapper.find('div')).to.have.text(testProject.title)
    })

})