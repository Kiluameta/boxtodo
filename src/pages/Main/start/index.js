import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import {
  Container,
  Content,
  Card,
  CardText,
  TextContainer,
  Subtitle
} from './styles'

import { StartHeader } from '../../../components/StartHeader'

export function Start(){
  return (
    <Container>
      <>
        <StartHeader/>
        <Content>
          <Card>
            <TextContainer>
              <CardText percent>Tarefas Diárias</CardText>  
              <CardText percentSubtitle>10 tarefas{'\n'}8 realizadas</CardText>  
            </TextContainer>
          </Card>
          <Subtitle>Hoje</Subtitle>
          <Card item>
            <MaterialCommunityIcons name='checkbox-marked' size={30} color='#00b065' />
            <CardText>Tarefa Teste</CardText>  
          </Card>
          <Card item>
            <MaterialCommunityIcons name='checkbox-blank' size={30} color='#D3D4D9' />
            <CardText>Tarefa Teste</CardText>  
          </Card>
          <Card item>
            <MaterialCommunityIcons name='checkbox-blank' size={30} color='#D3D4D9' />
            <CardText>Tarefa Teste</CardText>  
          </Card>
          <Card item>
            <MaterialCommunityIcons name='checkbox-blank' size={30} color='#D3D4D9' />
            <CardText>Tarefa Teste</CardText>  
          </Card>
        </Content>
      </>
    </Container>
  )
}