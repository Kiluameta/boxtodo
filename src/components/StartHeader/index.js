import React from "react"
import { MaterialCommunityIcons } from "@expo/vector-icons"

import { 
    Container,
    People, 
    Subtitle,
    TextContainer,
    Title
} from "./styles"

export function StartHeader() {
    return (
        <Container>
            <TextContainer>
                <Title>Bom dia, Igor</Title>
                <Subtitle>Impressionante,
                    as Tarefas{'\n'}estão
                    quase prontas!
                </Subtitle>
            </TextContainer>
            <MaterialCommunityIcons name='account-circle' color='#0F2362'  size={50} />
        </Container>
    )
}