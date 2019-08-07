import React, { Component } from 'react'
import { Longtext, GlobalStyle, Header, Header2 } from './styles'
import Center from 'react-center'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'

class RenderPost extends Component {
  render() {
    const posts = [
      'I was really high at this party that got busted a while back. When everyone was leaving to evade the cops I started to throw Flaming Hot Cheetos out the window of the car I was in because my brain convinced me that it would stop the police from following us. I did this the whole ride back and we got home without being arrested.',
      'So who else totally cheated on that Math 21a final?',
      'Poured water in the laptop computers of a College Republican group that was meeting in the JC. Doing my part to keep hate speech off this campus. #resistance.',
      'Can’t wait to leave this hell hole in May. If I’d known that my whole experience here would’ve been so negative when I received that acceptance letter I would’ve thrown it right in the trash. My education was meh and don’t even get me started on the people here. Honest to god I hope I NEVER see some of the people I’ve met here. I knew I should’ve chose Yale smh',
      'Just wanted to say that everyone should keep their heads up and work a their own pace. Don’t rush through college to get the degree. Take the time to do well. I did this and landed a job at NASA Goddard Space Flight Center working next to some of the most brilliant minds in science. YOU GOT THIS!',
      'I have been fortunate enough to make enough money so early in my life to the point where I’ll most likely never have to work another day in my life again. However, the problem is not having to worry about my financial future is really stunting my drive to study for my classes and staying motivated to finish college. How do I overcome the lack of motivation to study when I feel like I’ve already won in life. To me the purpose of getting a degree is to land a job so you can make money and be financially independent. If I’m already financially free then what’s the point?',
      'You talk about how loyal he is yet when I see him hes all on somebody thats not you but hey you left me your mistake not mine',
      'boi i was on a-b cutoff for all my classes but then finals happened & my GPA is trash r i p',
      'hi all! im not here to make anyone feel bad but i just wanted to say i got straight As for the first time ever at Harvard and im a junior, keep your head high and youll make it guys! dont be discouraged and always shoot for the stars <3 you can do it!!!!!!!!',
      'To everyone who wishes they went to Stanford: be grateful for a city like Boston. I’ve been home for a almost a week now, and Palo Alto really is the most boring, expensive, overrated city of all time. There’s maybe 2 bars, and a dozen of restaurants for Silicon Valley people really tryna attempt to pretend they’re in Portland. So glad I didn’t end up at Stanford, Palo Alto life is miserable.',
    ]

    return (
      <React.Fragment>
        <GlobalStyle />
        <Header>CRIMSON CONFESSIONS</Header>
        <Header2>Anonymously Share Your College Confessions </Header2>
        <Link to="/posts">
          <Button onClick={this.handleFormSubmit}>Create Post</Button>
        </Link>
        <div>
          {posts.map(post => {
            return (
              <React.Fragment>
                <Center>
                  <Longtext>{post}</Longtext>
                  <br />
                </Center>
              </React.Fragment>
            )
          })}
        </div>
      </React.Fragment>
    )
  }
}

export default RenderPost
