'use client'
import { Box, HStack, VStack, Image } from '@chakra-ui/react'
import { SidebarButton } from '../atoms/SidebarButton';
import { useRouter, usePathname } from 'next/navigation';
import { logout } from '@/app/admin/actions';


export function Sidebar({ children, token, user }: any) {

    const path = usePathname();
    const router = useRouter();

    if (!token) {

        router.push("/");
    }



    return !token ? <div></div> : (
        <HStack height={'100vh'} paddingY={4} bg={'gray.100'}>

            <VStack height={'100%'} spacing={5} bgColor={'brand.500'} padding={3} width={'60px'} ml={5} borderRadius={'2xl'}>
                <Image src={'/img/logo-branca-v.png'} height={'74px'} width={'auto'} alt='logo' />
                <VStack flex={1} justifyContent={'center'} spacing={5}>
                    <SidebarButton label='Inicio' path='/admin' icon={'MdHome'} />
                    {/* <SidebarButton label='Atalhos Alertas' path='/chamadas' imageiconsrc='/img/chamada-icon.png' /> */}
                    {user.roleId < 2 ? <SidebarButton label='Configurações' path='/admin/configs' icon={'MdSettings'} /> : null}
                </VStack>
                <SidebarButton label='Sobre e Suporte' path='/admin/suporte' icon={'MdHelp'} />
                <form action={() => logout().then(() => {
                    window.location.href = "/";
                })}>
                    <SidebarButton icon={'MdLogout'} type='submit' />
                </form>
            </VStack>

            <Box paddingLeft={4} height={'95vh'} width={'100%'}>
                {children}
            </Box>
        </HStack>
    )
}
