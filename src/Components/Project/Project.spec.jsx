import {shallow} from 'enzyme'
import {expect as exp} from 'chai';
import Project from './Project'

describe('Project Component Tests', ()=>{
    let wrapper
    it('should render without error', ()=> {
        wrapper = shallow(<Project />)
    })

    it('should render the correct content',()=>{
        const testProject = {
            title: 'Test Project',
            url: 'www.example.com',
            description: "Example project site"
        }
        wrapper = shallow(<Project project={testProject} />)

        exp(wrapper.find('h3').find('a')).to.have.text(testProject.title)
        exp(wrapper.find('h3').find('a')).to.have.attr('href', testProject.url)
        exp(wrapper.find('p')).to.have.text(testProject.description)
    })

})