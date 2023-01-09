'use client';

import React from 'react'
import { useRouter } from 'next/navigation'
import {Button} from "@chakra-ui/react";
// import { ChakraProvider } from '@chakra-ui/react'


export default function Gallery() {
    const router = useRouter();
    return (
        // <ChakraProvider>
            <div>
                <div>Your Gallery</div>
                <br/>
                <div>
                    <Button colorScheme="blue" onClick={()=>router.push("/gallery/animals")}>Animals</Button>
                </div>
            </div>
        // </ChakraProvider>
    )
}
