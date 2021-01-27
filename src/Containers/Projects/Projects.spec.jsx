import {shallow} from 'enzyme'
import {expect as exp} from 'chai';
import Projects from './Projects'
import Project from '../../Components/Project/Project'

describe('Project Container Tests', ()=>{
    let wrapper
    it('should render without error', ()=> {
        wrapper = shallow(<Projects />)
    })

    it('should render the correct amount of Project components',()=>{
        const projectsData = [
            {
                title: 'Project 1'
            },
            {
                title: 'Project 2'
            }
        ]

        wrapper = shallow(<Projects projects={projectsData} />)

        exp(wrapper.find(Project)).to.have.length(projectsData.length)
    })

})