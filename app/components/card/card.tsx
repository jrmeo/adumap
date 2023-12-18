'use client';

import { Card, CardContent, CardActions, IconButton, Button, Typography, ButtonGroup } from "@mui/material";
import style from './card.module.css'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
export default function PostCard(props: {
  title: string 
  votes: number 
  author: string
  message: string }) 
{
    return(
        <Card className={style.cardr}>
      <CardContent>
        <div className={style.d_flex}>
            <div className={style.col}>
            <ButtonGroup
                orientation="vertical"
                aria-label="vertical outlined button group"
            >
                <Button variant="text"><ArrowCircleUpIcon /></Button>
                <Typography textAlign='center'>{ props.votes }</Typography>
                <Button variant="text"><ArrowCircleDownIcon /></Button>
            </ButtonGroup>
            </div>
            <div className={style.col}>
            <Typography variant="overline">
                Posted by <b className={style.fw_bold}>{ props.author }</b>
            </Typography>
            <Typography variant="h6">
            { props.title }
            </Typography>
            <Typography>
              { props.message }
            </Typography>
            </div>
        </div>
      </CardContent>
      <CardActions className={style.ml}>
        <Button>Comments</Button>
        <Button>Share</Button>
        <Button>Collect</Button>
      </CardActions>
    </Card>
    )
}