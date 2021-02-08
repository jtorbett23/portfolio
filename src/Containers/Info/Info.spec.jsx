import {shallow} from 'enzyme'
import {expect as exp} from 'chai';
import Info from './Info'


describe('Intro Container Tests', ()=>{
    let wrapper
    it('should render without error', ()=> {
        wrapper = shallow(<Info />)
    })

    it('should render the correct content', () =>{

        const testImagesPath = `${process.env.PUBLIC_URL}/images/`
        const testInformation = {
            name: 'Testman',
            location: 'Test land',
            profile_image: {
                name: 'testman.png', 
                alt: 'Picure of testman'
            },
            github_url: 'githubby/testman',
            linkedin_url: 'linkedin/testman',
            email_url: 'mailto:testman@email.com'
        }
        wrapper = shallow(<Info info={testInformation} imagesPath={testImagesPath}/>)

        exp(wrapper.find('#name')).to.have.text(testInformation.name)
        exp(wrapper.find('#location')).to.have.text(testInformation.location)
        exp(wrapper.find('#github')).to.have.attr('href', testInformation.github_url)
        exp(wrapper.find('#github').find('img')).to.have.attr('src', `${testImagesPath}github-logo.png`)
        exp(wrapper.find('#github').find('img')).to.have.attr('alt', 'Github Logo')
        exp(wrapper.find('#linkedin')).to.have.attr('href', testInformation.linkedin_url)
        exp(wrapper.find('#linkedin').find('img')).to.have.attr('src', `${testImagesPath}linkedin-logo.png`)
        exp(wrapper.find('#linkedin').find('img')).to.have.attr('alt', 'Linkedin Logo')
        exp(wrapper.find('#email')).to.have.attr('href', testInformation.email_url)
        exp(wrapper.find('#email').find('img')).to.have.attr('src', `${testImagesPath}email-logo.png`)
        exp(wrapper.find('#email').find('img')).to.have.attr('alt', 'Email Logo')
        const fullTestImagePath = testImagesPath + testInformation.profile_image.name
        exp(wrapper.find('#profile-image')).to.have.attr('src', fullTestImagePath)
        exp(wrapper.find('#profile-image')).to.have.attr('alt', testInformation.profile_image.alt)




    })
})