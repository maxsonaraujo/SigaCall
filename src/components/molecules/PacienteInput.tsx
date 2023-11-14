import { Box, Button, Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useState } from "react";

type IProps = {
    onCaller: (paciente: string) => void
}
export const PacienteInput = (props: IProps) => {

    const [inputText, setInputText] = useState("");

    return (<Flex bg={'white'} borderRadius={10} w={'100%'} flexDirection={'column'} padding={2}>
        <Flex flexDirection={'column'}>
            <FormControl>
                <FormLabel>Paciente</FormLabel>
                <Input
                    size={'sm'}
                    type="paciente"
                    value={inputText}
                    onChange={(event: any) => {
                        setInputText(event.target.value.toUpperCase());
                    }}
                    placeholder="Digite o nome do paciente..."
                />
                {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
            </FormControl>
            <Flex mt={2}>
                <Box flex={1} />
                <Button size={'sm'} onClick={() => { props.onCaller(inputText); setInputText("") }}>
                    Chamar
                </Button>
            </Flex>
        </Flex>
    </Flex>)
}