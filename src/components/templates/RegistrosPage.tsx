'use client'
import { Box, Center, Flex, HStack, Heading, Icon, Image, Text, VStack } from '@chakra-ui/react'
import { MdCalendarMonth, MdList } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { cumprimentoDoDia, formatarDataHora } from '@/utils';

import Link from 'next/link';
import { MenuList } from '../organismes/MenuList';
import { MenuItem } from '../atoms/MenuItem';

interface ICadastroPage {
    title: string,
}
export function CadastroPage(props: ICadastroPage) {

    const [dataFormatada, setDataFormatada] = useState("");

    useEffect(() => {
        let timeRefresh = setInterval(() => {
            const data = new Date(); // Novamente, o mês é 7 para representar agosto.

            const dataHoraFormatada = formatarDataHora(data);
            setDataFormatada(dataHoraFormatada)
            return () => {
                clearInterval(timeRefresh);
            }
        }, 1000)
    }, [])


    return (
        <>
            <Heading size={'lg'}></Heading>
            <VStack align={'normal'} pl={5} pt={5}>
                <Heading size={'md'}>Cadastro</Heading>
                <MenuList>
                    <MenuItem href='configs/shotkey' icon='MdList'>Botões de Atalhos</MenuItem>
                    <MenuItem href='configs/users' icon='MdPeopleAlt'>Usuários</MenuItem>
                    <MenuItem href='configs/tratamentos' icon='MdAccountCircle'>Pron. Tratamentos (Sr. Sra, Dr. Dra...)</MenuItem>
                </MenuList>

                <Heading size={'md'} mt={6}>Outros</Heading>
                <MenuList>
                    <MenuItem href='configs/chamadas' icon='MdSpatialAudioOff'>Chamadas</MenuItem>
                </MenuList>
            </VStack>


        </>

    )
}
