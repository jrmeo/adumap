'use client';

import { Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import Image from 'next/image';

import style from './accordion.module.css'
import ImagePH from '@/public/avatar_placeholder.png'

export default function Accord(
    props: {
        title: string 
        image: any 
        body: string}) 
{

    return(
        <Accordion className={style.accordion_design} >
                    <AccordionSummary >
                        <Typography variant = "h5" sx = {{fontWeight: 'bold'}}>{props.title}</Typography>
                    </AccordionSummary>

                    <AccordionDetails className={style.summary_design}>

                        <Image
                            src={props.image}
                            width={500}
                            height={500}
                            alt="Logo of Adu Org"
                            className= {style.logo_design}
                            />

                        <Typography variant = "h6">
                            {props.body}
                        </Typography>  
                    </AccordionDetails>
                </Accordion>
    )
}