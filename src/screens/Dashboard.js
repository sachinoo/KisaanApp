import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'

export default function Dashboard({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>Let’s start</Header>
      <Paragraph>
        Welcome to Your Profile. Please press the notify button to contact the
        Distributors.
      </Paragraph>
      <Button mode="contained" color="#f0d116">
        CONTACT DISTRIBUTOR
      </Button>
      <Button
        mode="outlined"
        color="green"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'StartScreen' }],
          })
        }
      >
        Logout
      </Button>
    </Background>
  )
}
